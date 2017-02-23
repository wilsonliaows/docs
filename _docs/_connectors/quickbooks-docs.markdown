---
title: Workato connectors - QuickBooks Online
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
![QBO connect1](/_uploads/QBO connect1.JPG)

* **Connection name**

  Give this QuickBooks Connection a unique name which identifies the QuickBooks account you are connected to and click 'Connect'. A pop-up will appear.
  
  ![QBO connect2](/_uploads/QBO connect2.JPG)
  
* **Username & Password**

  Login with your QuickBooks credentials and allow Workato to access your QuickBooks account. 

## Connecting to Multiple Companies on QuickBooks
If you have multiple Companies on your QuickBooks account, you can connect them to Workato using the same QuickBooks authentication. Simply create new connections for each Company.

However, if you have multiple Workato accounts and try to connect to the same Company, the earlier connection will be disconnected. Hence, we recommend that only 1 Workato account is used to connect to 1 Company to prevent any disruption to your recipes. 

## Working with QuickBooks Triggers
The following triggers are currently available for the QuickBooks Connector: 

**NEW:** Account, Bank Deposit, Bill Payment, Credit Note, Customer, Employee, Estimate, Invoice, Item, Payment, Sales Receipt, Vendor

**NEW/UPDATED:** Account, Tax Code, Tax Rate

**UPDATED:** Bill, Credit Note, Customer, Employee, Estimate, Invoice, Item, Purchase, Vendor 

If you wish to submit a request for a new Trigger not currently available, please visit: 

## Action: Add Line to Invoice
### Sales Item Detail vs. Discount Line Detail vs. Description only

##### Sales Item Detail
As the name suggests, user is required to key in some of the details regarding the sales item. This includes Item ID, Total Amount, Unit Price/Quantity and also the Description. 

##### Discount Line Detail

##### Description Only
When user wants to include only the description of the items, he/she would choose this option.  
As such, "Description only" is a subset of "Sales Item Detail", if the user wants to include more details in the invoice, he/she should choose "Sales Item Detail".

## Common Errors & Troubleshooting

### Duplicate Name Exists
In Quickbooks, the display name is used as a unique identifier across Customer (also known as Donor, Tenants etc.), Employee and Vendor. 

As such, trying to add another record with the same display name which already exist in any of the three types will give you an error: Another tenant, vendor or employee is already using this name. Please use a different name.

![QBO error1](/_uploads/QBO_docs/QBO error1.png)

On Workato, you will receive a Duplicate Name Exists Error.

![QBO error2](/_uploads/QBO_docs/QBO error2.png)

One solution to this is to add a Prefix or Suffix before or after the Display name of the Customer, Employee or Vendor.

![QBO error3](/_uploads/QBO_docs/QBO error3.png)

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
Underscore (_)
Minus sign/hyphen (-)
Semi-colon (;)
Plus sign (+)
Brackets (())
