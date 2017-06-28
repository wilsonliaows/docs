---
title: QuickBooks Online
date: 2017-02-16 06:15:00 Z
---

# QuickBooks Online

## Connector information

### API version


### Supported editions and versions
The QuickBooks connector works with all versions of **QuickBooks Online-** QuickBooks Self-Employed, QuickBooks Simple Start, QuickBooks Essentials, as well as QuickBooks Plus.

Workato currently does not support QuickBooks Desktop/Enterprise versions. 

## How to connect to QuickBooks on Workato

### QuickBooks connection 
![QBO connect1](/assets/images/QBO-connect1.jpg)

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

## Action: Add Line to Invoice
### Sales Item Detail vs. Discount Line Detail vs. Description only

##### Sales Item Detail
As the name suggests, user is required to key in some of the details regarding the sales item. This includes Item ID, Total Amount, Unit Price/Quantity and also the Description. 

##### Description Only
When user wants to include only the description of the items, he/she would choose this option.  
As such, "Description only" is a subset of "Sales Item Detail", if the user wants to include more details in the invoice, he/she should choose "Sales Item Detail".

### Difference between Create with 1 line item and Create with Line items

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

## Exchange Rate

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

An error be similar to the following:

![API error message](/assets/images/connectors/quick-books/api-error.png)
*API error message*

To solve this:

1. Go to Sales Tax under the Taxes tab in QuickBooks 
![Sales tax](/assets/images/connectors/quick-books/api-error.png)
*Taxes > Sales Tax*

2. Click on add/edit tax rates and agencies on the right
![Edit tax rates](/assets/images/connectors/quick-books/edit-tax.png)
*Click on Add/edit tax rates* 

3. In the Workato recipe, ensure that it is mapped accordingly to the naming convention used in the other app, using the lookup function (13% is from salesforce, maps to HST ON in QuickBooks)

![Mapped recipe on workato](/assets/images/connectors/quick-books/workato-mapped-recipe.png)
*Mapped recipe*

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

## Common Errors & Troubleshooting

### Duplicate Name Exists
In Quickbooks, the display name is used as a unique identifier across Customer (also known as Donor, Tenants etc.), Employee and Vendor. 

As such, trying to add another record with the same display name which already exist in any of the three types will give you an error: Another tenant, vendor or employee is already using this name. Please use a different name.

![QBO error1](/assets/images/QBO_docs/QBO-error1.png)

On Workato, you will receive a Duplicate Name Exists Error.

![QBO error2](/assets/images/QBO_docs/QBO-error2.png)

One solution to this is to add a Prefix or Suffix before or after the Display name of the Customer, Employee or Vendor.

![QBO error3](/assets/images/QBO_docs/QBO-error3.png)

Do note however that QuickBooks does not allow for certain special characters in the Display Name including colon (:).

Here is a list of accepted characters:

* Alpha-numeric (A-Z, a-z, 0-9)
* Comma (,)
* Dot or period (.)
* Question mark (?)
* At symbol (@)
* Ampersand (&)
* Exclamation point (!)
* Number/pound sign (#)
* Single quote (')
* Tilde (~)
* Asterisk (*)
* Space ( )
* Underscore (_)
* Minus sign/hyphen (-)
* Semi-colon (;)
* Plus sign (+)
* Brackets (())

### Account period closed, cannot update through API

Error 6210: Account period closed, cannot update through API

This error means that in QuickBooks you have set a closing date, and it will not let you create/update transactions within that period. To remedy it, you have to take out the closed date. 

Refer to this article below to see how. 
https://support.quickbooks.intuit.com/support/Articles/HOW12993
 
### Malformed Website Address format

QuickBooks fault: {"Error"=>[{"Message"=>"Malformed Web Site Address format", "Detail"=>"Web Site URL does not have correct format. Supplied value:example.com", "code"=>"2200", "element"=>"WebAddr"}], "type"=>"ValidationFault"}

You get this error when you are trying to create a record in QuickBooks Online and you have mapped a field that requires a website address. Quickbooks API requires a well formed web address of the form http://example.com, but if your input does not have the **http:// or https://** at the beginning then the recipe fails.

### App Already Purchased

![QBO purchased](/assets/images/QBO_docs/QBO-purchased.png)

If you receive the following error, there is someone else in your company who is already connected to Workato. Contact your colleague to delete their Workato connection to resolve this error.

### Object Not found. Error while accessing QuickBooks API

![QBO errorobjnotfound1](/assets/images/QBO_docs/QBO-errorobjnotfound.png)

What does this mean : This usually happens when you tried to get an object based on an ID in QuickBooks and that object does not exist. For example,

![QBO errorobjnotfound3](/assets/images/QBO_docs/QBO-errorobjnotfound3.png)

The recipe tries to get the item from QuickBooks based on the ID, unfortunately that object does not exist in your Quickbooks account. You would want to check again in your QuickBooks.

You can find the ID of your object in the URL. It would usually shown up with an ID=6 where 6 is the ID of your object. 

![QBO errorobjnotfound2](/assets/images/QBO_docs/QBO-errorobjnotfound2.png)

You can always re-run the job again once it has been ensured, or you may have to change your recipe to make sure that the workflow is correct. 

### 784 QuickBooks API not responding

![QBO APIerror](/assets/images/QBO_docs/QBO-APIerror.png)

This usually happens when there is an API outage on QuickBooks side, or it has some intermittent issues
Keep watch of http://status.developer.intuit.com, and try re-running the same job after a while

### 403 Forbidden Error

This error could mean that there were some connectivity issues with the app connection.
Disconnect your app by going to the connections tab at the bottom of your recipe page, and reconnect it again.

![QBO connect3](/assets/images/QBO_docs/QBO-connect3.png)

### Create Invoice

A common reason for your recipe failing at this step is:

**Company does not exist in QuickBooks Online**:
Invoices must be created under a certain company, and if the company you have pinpointed out in your recipe does not exist in QuickBooks Online, your recipe will fail at this step. You can either create the company manually in QuickBooks Online and then rerun the failed job, or you can create a recipe to keep your companies synced across the different apps you have.

**Additional Notes**:
Do take note that "create invoice" methods usually include input fields for 1 line item (first line item) by default. You can fill this up with a placeholder such as "Transferred from external system XXX" to keep track of the source of the invoice, and subsequently use a for loop to sync the array of line items to the new invoice.

### Request has invalid or unsupported property

![Error](/assets/images/connectors/quick-books/error-1.png)
*Invalid property*

![Error](/assets/images/connectors/quick-books/error.png)
*Invalid property*

![Error](/assets/images/connectors/quick-books/error-3.png)
*Invalid property*

In this particular instance, the recipe failed at step 6 when it tried to create an Invoice in QuickBooks. In this case, the description, which is a compulsory field for a QuickBooks Invoice Line Item, is not passed in any value. This can happen for the following reason and solutions:

* No output pill was mapped for the step
* The output pill mapped does not contain any value:

To solve this,

Go back to the recipe, and check the field of the step with the error.  If no output pill was used in the mapping of the field, simply drag and drop one from the datatree on the right. If there was a mapping of an output pill, check to see the data of the pill used by clicking on it twice. In this case, the output pill was from the Salesforce Opportunity in the Trigger Step. Check Salesforce to see if the Opportunity Description was indeed filled up. If it is not, make the field a compulsory field so that it is always filled OR change the mapping. Use another output pill from the same step or even a different step. Alternatively, you can also add text within the input field mapping or use [formulas](https://support.workato.com/support/solutions/articles/1000173152).

### Invalid Account Type used

![Invalid account type](/assets/images/connectors/quick-books/invalid-account-type.png)
*Invalid account type error*

When creating an Item in QuickBooks, you are required to associate this newly created item with a QuickBooks account (This is an account under Chart of accounts). However, you cannot have any items to be associated with Accounts Receivable or Accounts Payable.

To solve this, make sure that in your Income account or Expense account, do not use any Accounts Receivable or Accounts Payable or a certain types. As mentioned in the "Detail" message, try to use an account that is either an income account, expense, or Cost of Goods Sold if it is trackable

![Bank solution](/assets/images/connectors/quick-books/bank-solution.png)
*Filled account form*

### Quickbooks unable to connect

While connecting your Quickbooks account to Workato, you might face the following pop up error after entering your Quickbooks credentials.

![Error message](/assets/images/connectors/quick-books/error-message.png)
*Unable to connect message*

This usually indicates that the Quickbooks credentials you have provided do not have admin Access Rights. You can check if the Quickbooks account has admin Access Rights by logging into Quickbooks > Settings > Manage Users. You should see the following screens.

![Workato Demo](/assets/images/connectors/quick-books/workato-demo.png)
*Check if the Quickbooks account has admin Access Rights by logging into *Quickbooks* > *Settings* > *Manage Users**

Ensure that you are using a Quickbooks account with either **Master Admin*** or **Company Admin** rights to connect to Workato, and that should resolve the issue.

### Business Validation Error has occurred while processing your request

If you notice business validation error has occurred while processing your request, a "business validation" error usually has occured. This happens when a required field is not filled in OR the field is filled in incorrectly.

To solve this:

If you look through the error details in your recipe, it should specify more on what caused the error, for example: Business Validation Error: The type of name assigned to this transaction (client, vendor, employee) is wrong, or Business Validation Error: Something this action required is no longer available. Another user may have deleted it. based on the information, you may have to reconfigure your recipe, or go to your QBO instance, find the record that is causing the error, and manually rectify it. 

### How to get shipping address from a payment trigger in QuickBooks?

When there is a new payment in QuickBooks and you would like to get the shipping address, you would have to do the following steps in order to retrieve the shipping address data. This is because, the shipping information is on the invoice and not the payment itself.

Solution:

Firstly, search for an item which would contain the shipping address of the customer. In this example, we will search for invoices in QuickBooks, searching for the customer's ID. 

![Invoices in quickbooks](/assets/images/connectors/quick-books/customer-id.png)
*Searching for customer ID*

Next, you can create your desired action in QuickBooks (or any apps) as your second action, in this case we will create a payment in QuickBooks. The shipping address would then be available as highlighted in the below picture.

![Created Payments](/assets/images/connectors/quick-books/trigger-map.png)
*Payment created in Quickbooks*

![Shipping address](/assets/images/connectors/quick-books/shipping-address.png)
*Shipping address*
