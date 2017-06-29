# Intacct


## Intacct: Rolling up of credit/debit lines in journal entries using recipes
There are certain instances where you have multiple journal entry items in a single journal entry. You may also need to roll up multiple entries of credit or debit into a single line with a rolled up amount.




To do so, simply follow the steps below. 


1. We will have to use the **create object** action and select **GL batch** as the object type. This involves creating journal entries with custom objects. (shown below)

![Create GL batch action](/assets/images/connectors/intaact/create-GL-batch-action.png)

***Create a GL batch** action*

2. In the entry source list field, we need to put in an array input of line items. For the credit/debit side that will exist as individual line items, we would add in the respective datapill. This would mean that we would create as many journal entry lines as are in the system we are taking the journal entries from.

![Put array in entry source list field](/assets/images/connectors/intaact/entry-source-list-field-array.png)

*Put an array input of line items in the entry source list field*

  However, for the opposite entry, we will not be adding in any datapill. This would mean that we will only be creating one entry. 

![No data pill in opposite entry](/assets/images/connectors/intaact/opposite-entry-blank.png)

*Don't put any datapill in the opposite entry*

3. In order to roll up the amount, we have to use the **pluck** function on the pill that we want to roll up. Here we want to roll up "UnitPrice" (do note that it is case sensitive) from the array input, which in this case is the opportunity product, and sum the entire amount.

![Pluck function on pill to be rolled up](/assets/images/connectors/intaact/pluck-function-on-pill.png)

*Use the **pluck** function on the pill you want to roll up*


## Enable auto numbering of vendor/ invoice/ customer ID in Intacct 

To determine whether vendor sequence numbering is used, or if **vendor IDs** are entered manually:
1.In Intacct, go to *account payables* > *configure AP* 
2.Under **document sequencing** click **vendors** 
3.If this is blank, no vendor ID sequence is being used, and **vendor IDs** are entered manually.

Similarly, for **invoice number** and **customer ID**:
1.In Intacct, go to *account receivable* > *configure AP* 
2.Under **document sequencing** click **vendors** 
3.If this is blank, no ID sequence is being used, and the IDs are entered manually.


## Establishing an Intacct connection with Workato using an XML gateway/API access user

Firstly, your account in Intacct has to be subscribed to web services to get the associated credentials for the **XML user**. To add this to your list of subscription products, contact your account manager at Intacct.

Once subscribed, you have to set up and configure a user in your instance of Intacct to get integration access. The XML user provided by Intacct grants access to the **XML gateway**, and the user you set up grants access to your individual company. These 2 logins work in tandem to allow successful API calls. 

![Set up and configure user](/assets/images/connectors/intaact/set-up-user.png)

*Set up and configure a user in Intaact*

Next, enter the following information:
  
•User ID: xml_gateway 
•Last and First name: use **XML gateway** for easy access in the system
•Valid Email Address
•User Type: Business 
•Admin Privileges: Full 
•Check "Keep my password until I reset it" box

![Fill in user information](/assets/images/connectors/intaact/fill-in-info.png)

*Fill in the above user information*

Once done, click save and you are all set to connect this user with Workato. 
