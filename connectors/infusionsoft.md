# Infusionsoft

## Infusionsoft : What is a Payment plan?

### Payment plan details in Infusionsoft

Workato's **Get payment plan** action details by **Invoice ID** in Infusionsoft, allowing users to get specific details regarding certain subscription plans for an order. 

Here are some examples in both Infusionsoft and Workato:

To view a **Payment plan**, go to *Infusionsoft > View an order > Payment plans* : 

![View payment plans](/assets/images/connectors/infusionsoft/view-payment-plan.png)

*View payment plans*

By clicking on **Edit payment plan**, you will be able to see more details regarding the order's **Payment plan**.

![Edit payment plans](/assets/images/connectors/infusionsoft/edit-payment-plan.png)

*Edit payment plans*

When using the action, the details available in Workato are displayed here:

![Details available to Workato](/assets/images/connectors/infusionsoft/workato-details.png)

*Payment plan details on Workato*

### What can I do with this information?

#### 1) Getting invoices made by a specific user for a range of dates
This allows you to understand the payment habits made by a client, which could be useful for making reports or inqueries in your CRM.

#### 2) Syncing payments
Payment plan details contain the ID of each payments for the order. With this, you will be able to sync all payments made for this order.


## Infusionsoft : List of Item types

When receiving details of an invoice, each line item is tied with a field called **item_type** that marks the type of the item. These values are in integer form, and in case you need to receive only a certain type of items, here are the list of numbers and their respective item types :

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
