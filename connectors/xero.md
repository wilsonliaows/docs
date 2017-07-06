# Xero
[Xero](https://www.xero.com/us/) is a cloud-based accounting software for small to medium businesses. Xero can be used to manage processes like invoicing and bookkeeping.

Workato allows you to synchronize data between Xero and the other apps you use in your organization. For example, you can sync customer data with your CRM app, sales data with your point-of-sales app, or inventory data with your ERP app.

## Supported triggers and actions
The latest triggers and actions can be found on the Xero connector page.


## Sales tax type when using create/update items action in Xero 
To find out what types of sales tax to key in when using the **Create/update items** action in Xero, users can click on the URL below the box (highlighted in image). 

![Sales tax list](/assets/images/connectors/xeno/sales-tax-list.png)

*List of different types of sales taxes*

This will lead users to the **Tax type** page (image below) and they will have to key it in manually.

![Tax types list](/assets/images/connectors/xeno/tax-type-list.png)

*List of tax types*


## Xero API usage limit
According to the [Xero Developer Help Center](https://community.xero.com/developer/question/17181), there is a daily limit of 1000 API calls that a provider can make against a particular Xero organization in a rolling 24 hour period. If you exceed this rate limit you will receive a HTTP 401 response with the message “oauth_problem=rate%20limit%20exceeded&oauth_problem_advice=please%20wait%20before%20retrying%20the%20xero%20api” in the http response body.


## How to find different IDs in Xero

### Xero IDs
An ID is a unique identifier for an object in the API. In Xero, some IDs such as **Contact ID** are required in creating an action and they can be easily obtained using **Search** or other actions. 

#### Contact ID
**Contact ID** is an unique identifier for each contact in the Xero. It can be found at the end of the URL of a particular contact page. 

![Contact ID](/assets/images/connectors/xeno/contact-id.png)
***Contact ID** in the contact page URL*

You can also make use of the output datapill from the following actions to obtain **Contact ID**, depending on your workflow:

1. **New/updated contact** in Xero
2. **Search contacts**
3. **Create contact**

For example, when you want to add person(s) to a contact, you could conduct **Search contact** by contact name or email and make use of the output datapill as shown below:

![Search for contacts](/assets/images/connectors/xeno/search-contact.png)
*Search for contacts by name or email*

#### Manual Journal ID
**Manual journal ID** is an unique identifier for each manual journal in Xero.

You can make use of the output datapill from the following actions to obtain **Manual journal ID**, depending on your workflow:
1. **Create manual journal**
2. **Search manual journal**
3. **Update manual journal**

![Manual Journal ID](/assets/images/connectors/xeno/manual-journal-id.png)
***Manual journal ID** identifier*

#### Payment ID
You can make use of the output datapill from the following actions to obtain **Payment ID**, depending on your workflow:

1. **Create payment**
2. **Search payments**

![Payment](/assets/images/connectors/xeno/payment.png)
***Payment ID***

#### Employee ID 
You can make use of the output datapill from the following triggers/actions to obtain **Employee ID**, depending on your workflow:

1. **New/updated employee**
2. **Create employee**

#### Account ID
You can make use of the output datapill from the following triggers/actions to obtain bank **Account ID**, depending on your workflow:

1. **New/updated payment**
2. **Create invoice payment**
3. **Get payment**

Alternatively, you can change the toggle to **Account code**, which can be found in *Xero settings* > *Chart of accounts*

