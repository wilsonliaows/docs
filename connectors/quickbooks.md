---
title: QuickBooks Online
date: 2017-02-16 06:15:00 Z
---

# QuickBooks Online

+[QuickBooks Online](https://search2.quickbooks.com/get-quickbooks/) easily integregates numerous aspects necessary in many businesses. The user can then download this data onto their own account.
 +
 +A few triggers that Workato acts on include 'New Bill', 'New Account' and 'New Employee'.
 +Through these triggers, you can easily link other applications to get more benefits from [QuickBooks Online](https://www.workato.com/integrations/quickbooks). For instance, you could build a recipe that a trigger on a specificed interval can get details of specific items from QuickBooks Online.

In this article we'll walk you through: 

1. [Connector information](http://docs.workato.com/connectors/quickbooks.html#connector-information)
2. [How to connect to QuickBooks on Workato](http://docs.workato.com/connectors/quickbooks.html#how-to-connect-to-quickbooks-on-workato)
3. [Connecting to Multiple Companies on QuickBooks](http://docs.workato.com/connectors/quickbooks.html#connecting-to-multiple-companies-on-quickbooks)
4. [QuickBooks Triggers](http://docs.workato.com/connectors/quickbooks.html#quickbooks-triggers)
5. [Actions](http://docs.workato.com/connectors/quickbooks.html#actions)
6. [Different Labels between profit and non-profit versions](http://docs.workato.com/connectors/quickbooks.html#different-labels-between-profit-and-non-profit-versions)
7. [Basic Information](http://docs.workato.com/connectors/quickbooks.html#basic-information)

## Connector information

### API version

### Supported editions and versions
The QuickBooks connector works with all versions of QuickBooks Online: QuickBooks Self-Employed, QuickBooks Simple Start, QuickBooks Essentials, as well as QuickBooks Plus.

Workato currently does not support QuickBooks Desktop/Enterprise versions. 

## How to connect to QuickBooks on Workato

### QuickBooks connection 

![QBO connect1](/assets/images/QBO-connect1.jpg)
*Connecting to QuickBooks*

* **Connection name**

  Give this QuickBooks Connection a unique name which identifies the QuickBooks account you are connected to and click 'Connect'. A pop-up will appear.
  
  ![QBO connect2](/assets/images/QBO-connect2.jpg)
  
* **Username & Password**

  Login with your QuickBooks credentials and allow Workato to access your QuickBooks account. 

## Connecting to Multiple Companies on QuickBooks
If you have multiple Companies on your QuickBooks account, you can connect them to Workato using the same QuickBooks authentication. Simply create new connections for each Company.

However, if you have multiple Workato accounts and try to connect to the same Company, the earlier connection will be disconnected. Hence, we recommend that only 1 Workato account is used to connect to 1 Company to prevent any disruption to your recipes. 

## QuickBooks Triggers
The following triggers are currently available for the QuickBooks Connector: 

**NEW:** Account, Bank Deposit, Bill Payment, Credit Note, Customer, Employee, Estimate, Invoice, Item, Payment, Sales Receipt, Vendor

**NEW/UPDATED:** Account, Tax Code, Tax Rate

**UPDATED:** Bill, Credit Note, Customer, Employee, Estimate, Invoice, Item, Purchase, Vendor 

## Actions

### Add Line to Invoice

#### Sales Item Detail vs. Discount Line Detail vs. Description only

##### Sales Item Detail
As the name suggests, user is required to key in some of the details regarding the sales item. This includes Item ID, Total Amount, Unit Price/Quantity and also the Description. 

##### Description Only
When user wants to include only the description of the items, he/she would choose this option.  
As such, "Description only" is a subset of "Sales Item Detail", if the user wants to include more details in the invoice, he/she should choose "Sales Item Detail".

#### Difference between Create with 1 line item and Create with Line items

#### Creating Transactional Objects with line items
Workato QuickBooks actions for creating Transactional objects (Invoice, Sales receipt, Bill, Credit Memo, etc) generally has two ways for populating them : 

1) Creating first an invoice with a single line item (as mandatory by QuickBooks Online to have at least one line item), and use Add Line Item to X action for any further addition

or 

2) Creating an invoice with line items. The line items detail will be pulled dynamically from a list datapill. 

**When do I use 'Create with 1 line item'?** 

Creating a single invoice with only line items are great for Single sync ups, where details of the transactional items are minimal. Example of this is creating an invoice for an opportunity, or creating a Sales Receipt for donations. Subsequently, adding on line items to an invoice can be done in another recipe when new items are added for an existing invoice, giving you the flexibility of structuring your invoices.

In all other cases, you should use 'Create with line items' and simply place the list of items where required. 

![QBO mulltiline](/assets/images/QBO_docs/QBO-mulltiline.png)

A 'list' type pill is marked with the list logo as can be seen above in red.

### Exchange Rate

QuickBooks Online provides international trades to be done in multiple currencies. 
Workato adapts your business needs and supports all necessary changes needed to automate your business.

QuickBooks Online allows you to support multiple currencies. To do so, you may enable it in your Accounts and Settings section. Do note that enabling multiple currency may incur setting changes. Please do seek consultation with QuickBooks Online support.

![QBO currency](/assets/images/QBO_docs/QBO currency.png)

Exchange Rate field allows you to specify the exchange rate to your home currency from the specified currency. If no Currency is specified, the exchange rate will be defaulted to 1 in respect of the home currency.

For dependent transaction documents such as Credit memo, the applied currency will depends on its parent transactions document, such as payment, or bank deposit.

An Example:

![QBO currency2](/assets/images/QBO_docs/QBO-currency2.png)

This field means that it will take 1.5239475 units of home currency to exchange for 1 unit of the specified currency of the transaction document


## Different Labels between profit and non-profit versions

If you are using the non-profit version of QuickBooks, do note that on Workato, certain terms may be labelled differently from what appears in your QuickBooks account. Refer to the table below to know which triggers and actions to use:


| For Profit                   | Non-Profit                     |
|------------------------------|--------------------------------|
| Invoice | Pacific/Midway     | Pledge                         |
| Sales Receipt                | Donations (Sales)              |
| Expenses                     | Expenditure                    |
| Profit & Loss                | Statement of Activity          |
| Balance Sheet                | Statement of Financial Position|                 


For more info on non-profit organization in QuickBooks, you can click [here](https://community.intuit.com/articles/1145585-quickbooks-online-for-nonprofits).


## Basic concepts and information

### QuickBooks What is : Bank Deposit

Workato has several QuickBooks actions that are related to a Bank Deposit object : 

* Create bank deposits
* Search bank deposits
* Update bank deposits

The available fields for a Bank Deposits are : 

* **Txn Date**
Date of the transaction object

* **Total amount**
The total amount that the bank deposit should amount to. Note that this value cannot be negative.

* **Cash back**
Specify an account that should return a certain amount back to for this deposit
  * Account
  * Amount
  * Memo

* **Deposit To Account Reference**
Specify an account that this bank deposit should be targeted to. Note that you cannot specify Undeposited Funds as the Deposit To Account here.
  * Account
  Account specified here must be of Bank or Other Current Asset Account type.

* **Transaction tax detail**
  * Tax code
  * Total tax

* **Line**
  * Line Source list
  Specify a line item object here where data will be accessed from. The total number of line item created will equal to the size of the source list. To learn more about source list, [see here](https://support.workato.com/support/solutions/articles/1000240753-quickbooks-online-working-with-line-items)

  * Description
  For each of the line items, specify its Description

  * Amount
  For each of the line items, specify its Amount

* **Linked Transaction**
If there are existing transactions that need to be related, specify details here to record a deposit for an existing transaction. 
  * Linked transaction source list
  Specify a line item object here where data will be accessed from. The total number of line item created will equals to the size of the source list. To learn more about source list, [see here](https://support.workato.com/support/solutions/articles/1000240753-quickbooks-online-working-with-line-items)

  * Transaction ID

  * Transaction Type
  Possible types of transactions that can be linked to a Deposit include: Transfer, Payment (for Cash, CreditCard, and Check payment method types), SalesReceipt,RefundReceipt, JournalEntry.

  * Transaction Line ID

* **Deposit Line Detail**

  * Entity Name
  Reference to a customer Display Name from which deposit was received
  * Type
  Specify if it is a Customer or Vendor
  * Value
  Reference to a customer ID from which deposit was received


* **Class reference**

  * Class Ref
  Reference to the Class associated with the transaction

* **Account Reference**

  * Account
  Account where the funds are deposited

* **Payment method reference**
  * Payment method

* **Check num**
Check number for the desposit.

* **Tax reference**

  * Tax code
  Sales/Purchase tax code associated with the Line. For Non US Companies only

  * Tax applicable on

* **Private Note**

* **Currency Reference**
  * Value
  * Name

* Transaction source
  A field used internally to specify originating source of a credit card transaction.

### Working with QuickBooks line items (Summary Line)

Workato is able to retrieve line item data from within QuickBooks Online Estimates and Invoices. However, one unintended result from this process is that QuickBooks tend to produce an unexpected Summary Line as its last line item in the array which will cause the recipe to run into an error.

Solution:

![Line items](/assets/images/connectors/quick-books/line-number.png)
*Solution for unexpected summary line*

You need to add an indented 'conditional stop' step in the 'For each' cycle to prevent this error, as seen in the above screenshot.
This will tell step 5 to stop processing any more line items (including the summary line) and continue with other steps in the recipe.

### Sales Tax for Non US QuickBooks Users

What is sales tax and do you need to have it?

*Sales tax is a fee charged by government agencies for the sale of products and services.  The fee is usually a percentage of the price of the product or service.

*QuickBooks requires all Non-US accounts to have a tax code to be assigned into the tax code field.


### What editions of QuickBooks Online does Workato work with?

We currently work with all 3 editions available for small businesses - QuickBooks Simple Start, QuickBooks Essentials, as well as QuickBooks Plus.

We currently do not work with the edition for independent contractors - QuickBooks Self-Employed.


### QuickBooks Online: Line Item detail: Sales Item detail VS Description Only

When creating an invoice in QuickBooks, we could choose Sales Item Detail or Description Only under the Line Item Detail. below is the difference between them: 

**Sales Item Detail**
As the name suggests, the user is required to key in some of the details regarding the sales item. This includes Item ID, Total Amount, Unit Price/Quantity and also the Description. 

![Sales Items](/assets/images/connectors/quick-books/description.png)
*Item ID, Total Amount, Unit Price/Quantity and also the Description*

**Description only**

When the user wants to include only the description of the items, he/she would choose this option.  

![Description only](/assets/images/connectors/quick-books/option.png)
*Subset of Sales Item Detail*

In conclusion, Description only is a subset of Sales Item Detail, if the user wants to include more details in the invoice, he/she should choose Sales Item Detail.


### How do I create Purchase Order with Vendor Terms mapped dynamically in QuickBooks?

QuickBooks vendor **Terms** can be selected manually in recipes.

![terms](/assets/images/connectors/quick-books/terms.png)
*Manual selection on recipes*

But when we are selecting datapills from a source app (click the blue dotted button at the right), the recipe asks for a **Terms ID**, as shown below. How do we deal with this?

![Terms ID](/assets/images/connectors/quick-books/terms-id.png)
*Terms ID*

QuickBooks understands terms as IDs. In particular, these are the default IDs matched with each name:
*Term ID: "1", Term: "Due on receipt"
*Term ID: "2", Term: "Net 15"
*Term ID: "3", Term: "Net 30"
*Term ID: "4", Term: "Net 60"

IMPORTANT: default IDs may change when Terms are customized. If you have changed the Terms, make sure that you have refreshed your schema for the recipe. To see the matching ID, select a Term from the dropdown list, and toggle the field to Terms ID (click the blue dotted button to toggle between a list of Terms and the Terms ID).

What this means is that, using formula mode (with the lookup_table method), our resulting formula would need to look like this:

![Formula](/assets/images/connectors/quick-books/filled.png)
*Formula that accepts the Term datapill*

The formula above accepts the Term datapill, and finds the ID associated with it. For example, if the Term was "Net 30", the formula would output "3" into the Terms ID field

### How do I add shipping charges to Invoices and Sales Recipes in QuickBooks Online?

First and foremost, ensure that your QuickBooks Online account has shipping turned on. This setting can be found in your Account Settings under Sales.

![Shipping on](/assets/images/connectors/quick-books/shipping.png)
*Sales > Account settings*

Shipping charges typically show up before the total amount in your invoice:

![Invoice](/assets/images/connectors/quick-books/invoice.png)
*Total amount in invoice with shipping charges*

To add shipping charges using a Workato Automation Recipe to any invoice or sales receipt in QuickBooks, simply use the action "Add Line to Sales Receipt"or "Add Line to Invoice" and follow these steps:

1.Provide the Sales Recipe ID or Invoice ID that you would like to add the Shipping Fee. Typically, you would map an output pill from a previous "Create Invoice" or "Create Sales Receipt" step.

2.Next, select "Sales item detail" in the Line Item Detail step.

3.The most important thing to do is to input "SHIPPING_ITEM_ID" as a text field (do not use formula mode here) in the "Item ID" field. Take note that this field should be item ID and not Item Name (you can toggle between Item ID and Item Name using the Toggle Button beside the field).

4. Lastly, map the shipping amount as well as give a generic description for this line.

![Applications](/assets/images/connectors/quick-books/applications.png)
*Mapped shipping amount with description*

### Working with : Exchange Rate

QuickBooks Online allows international trades to be done in multiple currencies. 
Workato adapts your business needs and supports all necessary changes needed to automate your business

**Exchange Rate**

QuickBooks Online allows you to support multiple currencies. To do so, you may enable it in your Accounts and Settings section. Do note that enabling multiple currencies may incur setting changes. Consult QuickBooks online support for any difficulties.

![Rates](/assets/images/connectors/quick-books/multi-rate.png)
*Exchange rates*

Exchange Rate field allows you to specify the exchange rate to your home currency from the specified currency. If no Currency is specified, the exchange rate will be defaulted to 1 with respect to the home currency.

For dependent transaction documents such as Credit memo, the applied currency will depend on its parent transactions document, such as payment, or bank deposit.

**Example:**

![Exchange rates](/assets/images/connectors/quick-books/exchange-rate.png)
*This field means that it will take 1.5239475 to exchange for 1 unit of the specified currency of the transaction document*

### Object IDs

QuickBooks Object IDs can be used for All Search, Update, and Get details action. These IDs uniquely identify each record in the application. One thing to note : IDs are not interchangeable. An ID from Salesforce cannot be used as an ID in QuickBooks. Each application stores their own record's identity in their own ID. Get details action requires you to input QuickBooks ID only. 

#### How do I get the Document ID?

QuickBooks Document ID are usually located on your browser's link, specified as shown below : 

![Exchange rates](/assets/images/connectors/quick-books/browser-link.png)
*Document ID on browser link*

Notice txnId=4. That means for this specific TimeActivity Record, its ID is 4.

When getting details for this specific TimeActivity using Workato, we will then need to specify 4 in the TimeSheet ID field.

![Timesheet-ID](/assets/images/connectors/quick-books/timesheet-Id.png)
*Timesheet ID*

#### Getting QuickBooks Document ID Dynamically

Unless stored in a specific field that you know of, the most common way of getting a QuickBooks ID is from Search actions. No other ID from other applications will work.

1) Search for the object that you are looking for based on a few criteria.
![Object Criteria](/assets/images/connectors/quick-books/object-id.png)
*Getting QuickBooks Document ID Dynamically.*

2.  In the next steps, the search action's output will appear on the App Data. Simply look for the ID data pill and place them in the field.

![ID pill](/assets/images/connectors/quick-books/id-pill.png)
*Place the ID pill in the field*
