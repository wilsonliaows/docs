---
title: Fields mapping
date: 2017-03-16 10:00:00 Z
---

# Fields mapping
Fields mapping is defined as the assignment of data pills (variables) or absolute values (constants) into action or trigger input fields. This controls the flow of data between apps.

By mapping fields from a Salesforce account (from a trigger) to a Zendesk create organization action, you can ensure that the Zendesk organization and Salesforce account have the same data.

In every recipe step, you have access to data pills from all the previous steps' and can be used in configuring input fields of current step. In this way, we're crafting a template that determines data flow in your recipe.

##Example
In the following example, we map the **Account Name** data pill from the Salesforce **New account** trigger into the **Message** input field in the **Send email** action.

![mapping_gif](/assets/images/actions-docs/mapping_gif.gif)
*Mapping the account name data pill into the message input field*

# Mapping constants vs mapping variables
Workato input fields can be assigned variables (data pills) or constants (absolute values).

## Mapping variables
The variable **Account name** has been mapped to the **Name** input field. This means that for every new Salesforce account that is created, the account name of this Salesforce account will be used as the organization name of the Zendesk organization that will be created. For example, a new Salesforce account named **Sattei Winery** will in turn create a Zendesk organization named **Sattei Winery**.

![Input field with variable mapping](/assets/images/workato-concepts/input-field-with-variable.png)
*Input field with variable mapping*

## Mapping constants
On the other hand, the input field **Notes** has a constant mapped to it - the words "Synced over from Salesforce." This means that all newly created Zendesk organizations created via Workato will have the words "Synced over from Salesforce." in its **Notes** field.

![Input field with constant mapping](/assets/images/workato-concepts/input-field-with-constant.png)
*Input field with constant mapping*

Here's an example of the new Zendesk organization created via the above mapping:

![Newly created Zendesk organization](/assets/images/workato-concepts/zendesk-organization.png)
*Newly created Zendesk organization Sattei Winery*

## Mapping both constants and variables
You can also combine constants and variables in the input fields for the data you wish to have.

# Data transformation
Data fields from one app may not directly map into a data field for a different apps. For example:
- your sales app stores names in a single field *full name*, but your marketing app uses two fields *first name* and *last name*
- your ecommerce app stores addresses as individual fields, e.g. *address line 1*, *address line 2*, *city*, *state*, but your accounting app simply requires a single *billing address* field
- the priority levels in your ticketing app may be *low*, *medium*, *high*, but in your sales system they're *low*, *normal*, *urgent*

In such cases, you can take advantage of Workato's data transformation capabilities by using [formulas](/formulas.md).

## Example
To use formulas, you will need to select 'Formula' toggle. This changes the input field to formula mode. 

In this example, we use a ternary formula in formula mode to decide what value to pass into the input field **Message**. 

![mapping_type_4](/assets/images/actions-docs/mapping_type_4.png)


The formula is in this format:

`[condition] ? [assign this if condition is true] : [assign this if false]`

Therefore, the formula checks to see **Full name** has a value present. If yes, we assign **Full name** to the input field, otherwise, we assign **First name** to the input field.

# Common issues when mapping fields
Here are some of the common errors we've experienced when it comes to fields mapping

- Data pills with no values at run-time for required fields

At design-time (when we're building the recipe), all required fields are supposed to be mapped. The recipe will refuse to start and throw an error if a required field is left empty.

However, even if an input field has been mapped at design-time, it might not actually have a value at run-time (when a trigger event comes in and a job is being processed). In such a case, that specific job will throw an error and fail.

You would need to decide how to handle such cases whereby a required field might not receive a value at run-time. If that is rightly a business logic error which needs to be resolved, e.g. the recipe tries to move a new lead from a sales app to a marketing app, but finds that it's missing an email address for the lead, the answer might be to let the job fail and flag the employee who had created the lead record.

- Data pills from the wrong datatree

When mapping input fields with data pills, it is common to find pills with the same names in the datatrees, e.g. if you're moving customers from an app to another, customer datatrees tend to hold address information. Hence you might find yourself using a pill with the right name, e.g. **City**, **State**, **Country**, but from the wrong datatree.

- Data pills from the wrong part of the recipe
If your recipe has conditional steps, e.g. if customer is present, update customer record, and if customer is not present, create customer record, then for each job that's processed, there will be steps that are not carried out. In such cases, the values in the datatree for these steps will most likely be blank.

If you're using data pills from these steps, you need to recognize the potential of these pills being null, and handle that scenario.