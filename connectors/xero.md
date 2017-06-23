# Xero

## Xero - Triggers and Actions supported. App Specific behavior

The latest triggers and actions can be found on the Workato xero page..

The App page has the following format...To see the supported Triggers and Actions, scroll to the bottom.

1. Description
2. Stats
3. Connections
4. Experts
5. Recommended recipes
6. Triggers and Actions

App Specific behavior


## How Do I Sync Products To Different Xero Accounts? 

Sometimes, when using Xero integration apps, such as the Infusionsoft <> Xero integration app, products from the source app are synced to just one Xero account.

This typically happens when the respective products do not already exist in Xero, and do not already exist under the accounts preferred in Xero.

To get products to sync to specific accounts, simply create the products in Xero first, and place them under the accounts that you prefer. In order for the sync to work properly, the name of the product in Xero should match the name of the product in your source app. Workato's integration apps will automatically sync them over to the right accounts.


## Sales Tax Type when Create/Update Items in Xero 

To find out what types of sales tax to key in when creating/updating items in Xero, user can click on the url below the box(highlighted in image). 
![Sales tax list](/assets/images/connectors/xeno/sales-tax-list.png)
*List of different types of sales taxes*

This will lead user to the tax type page(image below) and they will have to key it by himself/herself.

![Tax types list](/assets/images/connectors/xeno/tax-type-list.png)
*List of tax types*


## Xero API Usage Limit

According to [Xero Developer Help Center](https://community.xero.com/developer/question/17181), there is a daily limit of 1000 API calls that a provider can make against a particular Xero organisation in a rolling 24 hour period. If you exceed this rate limit you will receive a HTTP 401 response with the message “oauth_problem=rate%20limit%20exceeded&oauth_problem_advice=please%20wait%20before%20retrying%20the%20xero%20api” in the http response body.


## Xero Error: 401 Unauthorized 

### Error: 
401 Unauthorized

![401 Unauthorized Error](/assets/images/connectors/xeno/error.png)
*401 Unauthorized Error*

### What does this mean?: 
This is a warning caused by the App connection somehow getting disconnected.

### Solution: 
Try this three steps:
1. Stop the recipe
2. Reconnect to Xero
3. Start the recipe again


## Xero - How to find different IDs in Xero

### What is ID
ID is an unique identifier for an object in the API.  In Xero, some IDs such as contact ID are required in creating an action and they can be easily obtained using search or other actions. 

### Contact ID
Contact ID is an unique identifier for each contact in the Xero. It can be found at the end of the URL of a particular contact page. 

![Contact ID](/assets/images/connectors/xeno/contact-id.png)
*Contact ID in the contact page URL*

You can also make use of the output data pill from the following actions to obtain Contact ID, depending on your workflow:
1.New/updated contact in Xero
2.Search contacts
3.Create contact

For example, when you want to add person(s) to contact, you could conduct search contact by contact name or email and make use of the output as shown below:

![Search for contacts](/assets/images/connectors/xeno/search-contact.png)
*Search for contacts by name or email*

### Manual Journal ID
Manual Journal ID is an unique identifier for each manual journal in Xero.

You can make use of the output data pill from the following actions to obtain manual journal ID, depending on your workflow:
1.Create Manual Journal
2.Search Manual Journal
3.Update Manual Journal

![Manual Journal ID](/assets/images/connectors/xeno/manual-journal-id.png)
*Manual Journal ID identifier*

### Payment ID
You can make use of the output data pill from the following actions to obtain payment ID, depending on your workflow:
1.Create payment
2.Search payments

![Payment](/assets/images/connectors/xeno/payment.png)
*Payment ID*

### Employee ID 
You can make use of the output data pill from the following triggers/actions to obtain employee ID, depending on your workflow:
1.New/updated employee
2.Create employee

### Account ID
You can make use of the output data pill from the following triggers/actions to obtain bank account ID, depending on your workflow:
1.New/updated payment
2.Create invoice payment
3.Get payment
Alternatively, you can change the toggle to Account code, which can be found in Xero Settings > Chart of Accounts


## Xero Error: A validation exception occurred; Payments can only be made against Authorised documents; Payment amount exceeds the amount outstanding on this document

### Error: 
A validation exception occurred; Payments can only be made against Authorised documents; Payment amount exceeds the amount outstanding on this document"

### What does this mean?: 
This could mean that your payment was incorrectly applied, such as trying to apply a payment with an invoice with the status "DRAFT", or if the invoice to be paid was generated without a unit amount or quantity specified, leading to a $0 amount invoice.

### Solution: 
You can check out Xero's helpdesk for more information on how to solve this issue, and make changes to your recipe accordingly. 
