# Infusionsoft

## Infusionsoft : What is a payment plan?

### Payment plan details in Infusionsoft

Workato's action Get payment plan details by invoice ID in Infusionsoft allows user to get specific details regarding a certain subscription plans for an order. 

Here is an example details, both in Infusionsoft and in Workato

To view a payment plan, go to Infusionsoft, and View an order. Payment plans will be at the bottom of the page : 

![View payment plans](/assets/images/connectors/infusionsoft/view-payment-plan.png)
*View payment plans*

By clicking on Edit Payment Plan, you will be able to see more details regarding the Order's Payment Plan.

![Edit payment plans](/assets/images/connectors/infusionsoft/edit-payment-plan.png)
*Edit payment plans*

When using the action, the details available in Workato is displayed here.

![Details available to Workato](/assets/images/connectors/infusionsoft/workato-details.png)
*Payment plan details on Workato*

### What can I do with these information?

#### 1) Getting invoices made by a specific user for a range of date
This allows you to understand the payment habits made by a client, which could be useful for enquiries or report making in your CRM

#### 2) Syncing payments
Payment plan details contain the ID of each payments for the order. With this, you will be able to sync all payments made for this order.


## Infusionsoft : List of Item types

When receiving details of an invoice, each line item is tied with a field called item_type that marks the type of the item. These values are in integer forms, and in case you need to modify to receive only certain type of items, here are the list of numbers and the item type it resembles  :

0 = Unknown Type
1 = Shipping
2 = Tax
3 = Service & Misc
4 = Product
5 = Upsell Product
6 = Finance Charge
7 = Special
8 = Program
9 = Subscription Plan
10 = Special: Free Trial Days
11 = Special: Order Total
12 = Special: Product
13 = Special: Category
14 = Special: Shipping


## Infusionsoft Error: Manual payment amount exceeds the amount due on the invoices being processed

### Error: 
The manual payment amount exceeds the amount due on the invoices being processed

![Payment error](/assets/images/connectors/infusionsoft/payment-error.png)
*Payment amounts exceeds that which is due in the invoices*

### What does this mean?: 
The amount in the payment was more than the amount of the invoice that was being referenced to. 

### Solution: 
Make sure that the payment is equal or less than the amount of invoice that was being referenced to. For more information, check out this section on how this is done : [http://help.infusionsoft.com/userguides/sell-online/create-an-order/add-a-payment-to-an-existing-order](http://help.infusionsoft.com/userguides/sell-online/create-an-order/add-a-payment-to-an-existing-order)

For Users who purchased the Infusionsoft-QuickBooks or Infusionsoft-Xero application users, This may happen to the recipes that attempt to sync payments. 


## Infusionsoft Error: Please enter non-re-marketable contact

### Error: 
Please enter non-re-marketable contact

### What does this mean?: 
It means that the contact referred has already been consented into email marketing, and cannot be made marketable again. 

### Solution: 
There may have been already a contact that has exist with the same email would usually be the case, and has already been made marketable. To learn more about consenting to email marketing, check out this article from Infusionsoft : Manually Opt-in or Opt-Out Multiple Contacts at Once


## Infusionsoft Error: Infusionsoft Field not found

### Error: 
Field not found

### What does this mean?:
A field that was present when the recipe was last updated no longer exists

### Solution: 
Simply refresh your recipe's schema to get the most updated fields from your infusionsoft instance. Do so by stopping your recipe, scroll to the bottom of your recipe and click on refresh on the bottom right hand corner.

![Refresh recipe schema](/assets/images/connectors/infusionsoft/refresh-schema.png)
*Refresh your recipe's schema*