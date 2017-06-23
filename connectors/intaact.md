# Intaact


## Intaact: Rolling up of credit/debit lines in journal entries using recipes
There are some instances where you have many journal entry items in a single journal entry may want to roll up either their credit or debit multiple entries into a single line with a rolled up amount.




To do so, simply follow the steps below. 


1. We will have to use the create object -> GL batch action, this involves creating journal entries with custom objects. (shown below)

![Create GL batch action](/assets/images/connectors/intaact/create-GL-batch-action.png)
*Create a GL batch action*

2. In the entry source list field, we need to put in an array input of line items. For the credit/debit side that will exist as individual line items, we would add in the data pill. This would mean that we would create as many journal entry lines respective to the system which we are bringing the journal entry from.

![Put array in entry source list field](/assets/images/connectors/intaact/entry-source-list-field-array.png)
*Put an array input of line items in the entry source list field*

  However, for the opposite entry, we will not be adding in any data pill. This would mean that we will only be creating one entry. 

![No data pill in opposite entry](/assets/images/connectors/inaact/opposite-entry-blank.png)
*Don't put any data pill in the opposite entry*

3. In order to roll up the amount, we would have to use the pluck function on the pill that we would want to roll up, in this case UnitPrice (do note that it is case sensitive) from the array input, which is the opportunity product in this case. And sum the entire amount up.

![Pluck function on pill to be rolled up](/assets/images/connectors/intaact/pluck-function-on-pill.png)
*Use the pluck function on the pill you want to roll up*


## Enable auto numbering of Vendor/ Invoice/ Customer ID in Intacct 

To determine whether Vendor Sequence numbering is used, or if Vendor IDs are entered manually:
1.In Intacct, go to Account Payables > Configure AP 
2.Under Document Sequencing click Vendors 
3.If this is blank, no Vendor ID sequence is being used, and Vendor IDs are entered manually.

Similarly, for Invoice Number and Customer ID:
1.In Intacct, go to Account Receivable > Configure AP 
2.Under Document Sequencing click Vendors 
3.If this is blank, no ID sequence is being used, and the IDs are entered manually.


## Establishing an Intacct Connection with Workato using a XML Gateway/API Access User

Firstly, your account in Intacct have to be subscribed to web services to get the associated credentials for the XML user. To add this to your list of subscription products, please contact your account manager at Intacct.

Once subscribed, you have to set up and configure a user in your Intacct instance for the integration access. The XML user provided by Intacct grants access to the XML Gateway, and the user you set up grants access to your individual company.These 2 logins work in tandem to allow successful API calls. 

![Set up and configure user](/asset/images/connector/intaact/set-up-user.png)
*Set up and configure a user in Intaact*

Next, enter the following information:
  
•User ID: xml_gateway 
•Last and First name: use XML Gateway for easy access in the system
•Valid Email Address
•User Type: Business 
•Admin Privileges: Full 
•Check Keep my password until i reset it box

![Fill in user information](/asset/images/connector/intaact/fill-in-info.png)
*Fill in the above user information*

Once done, click save and you are all set to connect this user with Workato. 