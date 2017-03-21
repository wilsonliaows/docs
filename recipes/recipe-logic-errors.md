---
title: Recipe logic errors
date: 2018-01-24 15:00:00 Z
---

# Recipe logic errors
Even when your recipe doesn't encounter design-time errors that prevent it from running, or execution errors that cause job failures, there might be other recipe logic issues. Some of these issues might be caught during testing, as data isn't moved across apps properly. Other issues might not be caught until the recipe is running. We recommend monitoring your data and recipes closely during testing and the first couple of days after the recipe has been started.

We cover some common recipe logic errors in this article.

## Incorrect recipe step indentations
When running test jobs, you may realize that the recipe isn't carrying out the actions you expect it to be. A common error with recipes is the indentation of the recipe steps - indented steps under [IF steps](/recipes/steps.md#conditional-action-step) will only be carried out when the condition is met, while only indented steps under [Repeat steps](/recipes/steps.md#repeat-step) will be carried out for the records in the list.

In the following example, step 3 (update Zendesk organization) will be carried out if the Zendesk organization ID is present, while steps 5 and 6 (create Zendesk organization and update Salesforce account) will be carried out if the Zendesk organization ID is not present. As step 7 is not indented at all, it will be carried out regardless of whether steps 3 or 5-6 are carried out.

![Indented steps under IF step will be carried out depending on whether the Zendesk organization ID is present](/assets/images/troubleshooting/recipe-with-if-step-indentation.png)
*Indented steps under IF step will be carried out depending on whether the Zendesk organization ID is present*

In the following example, step 2 retrieves a list of Salesforce contacts associated with the Salesforce account. Using the repeat step in step 3, we go through this list of contacts and create each contact in NetSuite, then attach this new contact to the NetSuite customer we have created in step 1.

![Indented steps under Foreach step will be carried out for all items in the list](/assets/images/troubleshooting/recipe-with-foreach-indentation.png)
*Indented steps under Foreach step will be carried out for all items in the list*

If steps are indented wrongly, the recipe will not carry out the expected set of actions.

## Incorrect list management
While running test jobs involving lists, you may notice that your recipe job seems to iterate through the list, but does not retrieve different data from the list objects. For example, in the following recipe, you might expect 5 different contacts to be retrieved from Salesforce and created in NetSuite, but when viewing the newly created NetSuite customer, you see that there are 5 contacts with the same data created in NetSuite.

![Example recipe that moves customers and lists of associated contacts from Salesforce to NetSuite](/assets/images/troubleshooting/recipe-with-foreach-indentation.png)
*Example recipe that moves customers and lists of associated contacts from Salesforce to NetSuite*

The reason for that might be due to [incorrect data mapping for the list](/features/list-management.md#common-mistake-when-using-repeat-step). You can check out the correct way to work with lists (with implicit input lists or explicit repeat steps) in this [article](/features/list-management.md#using-lists-aka-arrays).

## Infinite looping
If you start your recipe and notice that it seems to be continuously fetching trigger events, even though you know there is no activity in your trigger app, it could be a case of infinite loop. You can verify this by checking to see if these triggers are processing the exact same record again and again.

Single recipe infinite looping can occur when a recipe trigger monitors updates in the same object that it updates in an action, e.g. the recipe has the trigger `New/updated order in NetSuite`, and the action `Update order in NetSuite`. In such cases, the update that the recipe carries out will create a new event that the recipe will proceed to pick up as a trigger event (an update to a NetSuite order).

Multi-recipe infinite looping can also occur, e.g. when I have recipes that keeps my Salesforce cases and Zendesk tickets in sync. An updated case in Salesforce will update the Zendesk ticket, and then the updated Zendesk ticket will update the Salesforce case, and vice versa again and again.

In order to prevent infinite looping, we can set trigger conditions to prevent recipes from picking up trigger events that we know to be duplicates. We can create a separate integration user for Workato and filter out any changes made by this integration user, so that the recipe only picks up trigger events not created by a Workato integration. We can also explicitly mark records that we don't wish to process, and filter out those records via a trigger condition.

You can learn more about preventing infinite looping [here](/recipes/infinite-loops.md).

## Unexpected trigger events/data duplication
If you start your recipe and realize that you're seeing duplicate data in your target applications on occasion, this might be because your recipe is processing more trigger events than you expect.

For example, let's consider a new/updated NetSuite sales order trigger with the trigger condition status equals `Billed`. Every time a NetSuite sales order is created or updated, the trigger condition will check the sales order status. If the status is `Billed`, then the recipe will process the event as a job. If the status is not `Billed`, the recipe will skip this event.

![Inaccurate recipe that moves billed sales orders in NetSuite to FinancialForce as invoices without logic to prevent duplicates](/assets/images/troubleshooting/recipe-with-no-trigger-condition-logic.png)
*Inaccurate recipe that moves billed sales orders in NetSuite to FinancialForce as invoices without logic to prevent duplicates*

In this case, if a sales order was updated 3 times while it has a status of `Billed`, the recipe will register 3 jobs with this particular sales order, and would have created 3 corresponding FinancialForce invoices. The recipe logic should take into account the possibility of multiple trigger events for the same record, so as to prevent data duplication.

The following recipe demonstrates one way to prevent such data duplication by ensuring that NetSuite sales orders are only moved to FinancialForce once, when they are first marked as `Billed`. It updates NetSuite sales orders with an external ID (with the value of the corresponding FinancialForce's invoice ID), and has an additional trigger condition (NetSuite new/updated standard object external ID is not present) to ensure that we don't process sales orders with an external ID again.

![Recipe that moves sales orders in NetSuite to FinancialForce invoices the first time status is changed to billed - the second trigger condition added ensures that only NetSuite invoices without an external ID will be picked up by the trigger](/assets/images/troubleshooting/recipe-with-trigger-condition-logic.png)

If we expand Step 2, we see that we're mapping the NetSuite sales order external ID with the FinancialForce invoice's ID.

![Recipe that moves sales orders in NetSuite to FinancialForce invoices the first time status is changed to billed - the action in Step 2 updates the NetSuite invoice with an external ID. This ensures that this invoice will not be picked up by the trigger again]
(/assets/images/troubleshooting/update-netsuite-sales-order-external-id.png)
*Recipe that moves sales orders in NetSuite to FinancialForce invoices the first time status is changed to billed*

The following recipe demonstrates another way to prevent such data duplication, by ensuring that NetSuite sales orders are only created once, and subsequently are updated. Whenever we create a FinancialForce invoice, we update the NetSuite sales order's external ID field with that FinancialForce invoice's ID. Whenever the recipe triggers (when NetSuite invoice has been created or updated), we check for the existence of the external ID. The recipe creates a new FinancialForce invoice if the NetSuite sales order has no external ID, and updates the corresponding FinancialForce invoice if there is an external ID.

![Example recipe that syncs NetSuite sales orders with FinancialForce invoices. If the NetSuite sales order is newly created, we create a FinancialForce invoice and update the NetSuite sales order with the FinancialForce ID. If this NetSuite sales order has been previously synced (and therefore has an external ID), we take that FinancialForce ID in the external ID and update that FinancialForce invoice.](/assets/images/troubleshooting/recipe-with-update-logic.png)
*Example recipe that syncs NetSuite sales orders with FinancialForce invoices*

If we expand Step 3, we see that we're mapping the NetSuite sales order external ID with the FinancialForce invoice's ID.

![Example recipe that syncs NetSuite sales orders with FinancialForce invoices - the action in Step 3 updates the NetSuite invoice with an external ID. This ensures that no FinancialForce invoice will be created again to cause duplication](/assets/images/troubleshooting/update-netsuite-sales-order-external-id-2.png)

## Missing trigger events
If you start your recipe and realize that it doesn't seem to be picking up certain trigger events that you're expecting, it might be because you're using a **New object** trigger together with a trigger condition, when you should be using a **New/updated object** trigger with the trigger condition instead. This is because trigger conditions are evaluated by Workato after trigger events have been fetched.

For example, let's consider the following **New Salesforce account** trigger. If the recipe is running, it will first fetch all Salesforce accounts created in the last 5 minutes, then filter out accounts not based in California. Therefore, if your Salesforce account is first created with a billing state of Washington, then subsequently updated 2 days later with a billing state of California, this account will not be picked up by the recipe for processing.

![Trigger first fetches all Salesforce accounts created in the last 5 minutes, then filters out accounts which are not based in California](/assets/images/troubleshooting/new-account-with-trigger-condition.png)
*Trigger first fetches all Salesforce accounts created in the last 5 minutes, then filters out accounts which are not based in California*

In order to successfully monitor your Salesforce organization for all accounts with a billing state of California (no matter if they had this billing state at the time of creation or not), and sync them across to another app, you would need to change your trigger to a **New/updated account in Salesforce** trigger.

![Trigger first fetches all Salesforce accounts created or updated in the last 5 minutes, then filters out accounts which are not based in California](/assets/images/troubleshooting/new-updated-account-with-trigger-condition.png)
*Trigger first fetches all Salesforce accounts created or updated in the last 5 minutes, then filters out accounts which are not based in California*

The following shows the detailed trigger condition.

![Trigger condition that processes only Salesforce accounts created or updated with a billing state of California](/assets/images/troubleshooting/recipe-with-trigger-condition.png)
*Trigger condition that processes only Salesforce accounts created or updated with a billing state of California*
