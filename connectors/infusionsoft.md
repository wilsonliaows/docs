# Infusionsoft
[Infusionsoft](https://www.infusionsoft.com/) is an email marketing and sales platform that enables sales and marketing automation for small businesses.

Via Workato, you can integrate Infusionsoft with other business apps uses by your organization, such as ERP or accounting apps, to sync invoice or customer data.

## API version
The Infusionsoft connector uses the [XML-RPC API](https://developer.infusionsoft.com/docs/xml-rpc/), with the base URL `https://api.infusionsoft.com/crm/xmlrpc/v1`, and [OAuth2 authentication](https://developer.infusionsoft.com/authentication/).

## Supported editions and versions
Workato works with all Infusionsoft plans.

## Working with the Infusionsoft connector

### Understanding payment plans
The **Get payment plan details by invoice ID** action in Infusionsoft allows users to get specific details regarding certain subscription plans for an order.

To view a **Payment plan**, go to *Infusionsoft > View an order > Payment plans* : 

![View payment plans](/assets/images/connectors/infusionsoft/view-payment-plan.png)

*View payment plans*

By clicking on **Edit payment plan**, you will be able to see more details regarding the order's **Payment plan**.

![Edit payment plans](/assets/images/connectors/infusionsoft/edit-payment-plan.png)

*Edit payment plans*

When using the action, the details available in Workato are displayed here:

![Details available to Workato](/assets/images/connectors/infusionsoft/workato-details.png)

*Payment plan details on Workato*

#### What can I do with payment plan information?

1) Get invoices made by a specific user for a range of dates

This allows you to understand the payment habits made by a client, which could be useful for making reports or inqueries in your CRM.

2) Sync payments

Payment plan details contain the IDs of each payment for the order. With this, you will be able to sync all payments made for this order.

### Item types
When retrieving details of an invoice, each line item has a field called **item_type** marking the type of the item. These values are in integer form. If you wish to retrieve only certain types of items, you can refer to the following list of numbers and their respective item types:

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
