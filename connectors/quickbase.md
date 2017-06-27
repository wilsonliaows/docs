# Quickbase

## QuickBase: Getting Started with QuickBase + Workato 

![Getting Started](/assets/images/connectors/quickbase/getting-started.jpg)

*Quickbase Integration by Workato*

Workato now fully supports QuickBase, including all custom objects and tables, standard CRUD-operations, as well as purging records using reports. Learn how to use Workato with QuickBase here.

Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.


### Get Connected
1. [How to connect your Quickbase account](https://support.workato.com/support/solutions/articles/1000236544-quickbase-connecting-your-quickbase-account)
2. [Connecting more than one QuickBase account in a single Recipe](https://support.workato.com/support/solutions/articles/1000236168-quickbase-syncing-to-multiple-quickbase-instances)
3. Choosing Table fields

### LEARN QUICKBASE ACTIONS AND TRIGGERS
2. [QuickBase Triggers](https://support.workato.com/solution/articles/1000236163-quickbase-triggers)
3. Actions

i) [Search and Update actions](https://support.workato.com/solution/articles/1000236167-quickbase-search-and-update-actions)
ii) [How do I update a record in Quickbase?](https://support.workato.com/solution/articles/1000236654-quickbase-how-do-i-update-a-record-%204) 

### Tips and tricks with QuickBase 
 - [How to compare values within a Quickbase table](https://support.workato.com/solution/articles/1000236539-quickbase-how-to-compare-values-within-a-table)
 - [Syncing to multiple Quickbase instances](https://support.workato.com/solution/articles/1000236168-quickbase-syncing-to-multiple-quickbase-instances)
 - [Adding fields](https://support.workato.com/solution/articles/1000236540-quickbase-adding-fields)

### QuickBase business use cases

See what businesses are doing with QuickBase using Workato to automate their Business

![Quickbase Presentation](/assets/images/connectors/quickbase/quickbase-presentation.jpg)

*[Workato and QuickBase Team Up to Empower Citizen Developers](https://www.workato.com/blog/2016/06/workato-and-quickbase-team-up-to-empower-citizen-developers/)*


## Quickbase: Triggers 

Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

Configuring the Trigger:

![Trigger Configuration](/assets/images/connectors/quickbase/trigger-config.png)
*Trigger configuration*

There are 2 triggers which we can use with Quickbase: 'New record' and 'Updated record'. The records refer to a record within an table that is within an application. If the table requires an Application token, you will need to create one in Quickbase. 

To manage your Application Tokens in Quickbase: 

Go to *Settings (for your app) > App properties > Advanced settings > Application Tokens* 

The output field list refers to the fields that are required in the recipe. You will need to fill it up to pull the fields you want especially if you require access to many fields, or if the table has more than 150 fields. Once you have keyed in the exact names of the fields (one per line), refresh the schema.

The refresh schema button is below the recipe actions, on the bottom right.

![Schema refresh](/assets/images/connectors/quickbase/schema-refresh.png)
*Refreshing your recipe's schema*

The 'Since' parameter refers to the date and time at which you would like the records to trigger the recipe. For example: if the since date is 8/2/2016 10:30 PM and the trigger is 'New record', any new records created after this date and time will trigger the recipe. 


## Quickbase: List of Actions 
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

The following actions are available for Quickbase: 

![Available QuickBase actions](/assets/images/connectors/quickbase/available-actions.png)
*QuickBase actions in Workato*

Add record, Delete record, Purge records using report, search records and update record. All the records refer to a record within a table within an app. 

If you require an application token in that app, do create one and put it in the application token field

To manage your Application Tokens in Quickbase:

Go to *Settings (for your app) > App properties > Advanced settings > Application Tokens*

The output field list refers to the fields that are required in the recipe. You will need to fill it up to pull the fields you want especially if you require access to many fields, or if the table has more than 150 fields. Once you have keyed in the exact names of the fields (one per line), refresh the schema.


## Quickbase: Search and Update actions 

Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

This article explains the Search action step and how to use it. It is usually required before the "Update action"step. 

Search Action:

![Search Action](/assets/images/connectors/quickbase/search-action.png)
*QuickBase search action for recipe building*

The 'Search' step is required to find a specific record in Quickbase. You can search using 1 or multiple parameters by filling up the fields you are searching for. The Record ID# field is a standard identifier in Quickbase, meaning that each record will have its own unique Record ID. This is the best field to search with, although you can use any other unique field. 

Update field: 

When updating a record, the Record ID# field is a required field. The record to be updated will thus be identified using that Record ID. 

Therefore, you will require a Search step before the Update step to find this Record ID# pill. In the picture below, see that the search step yields the Record ID as an output on the data tree (extreme right)  

![Record ID from Search action](/assets/images/connectors/quickbase/record-id.png)
*Record IF from Search action*

Thereafter, fill in the other fields you wish to update within that record. Only those fills that are populated will be updated. 


## Quickbase: Syncing to multiple Quickbase instances 

Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

### Connecting Multiple QuickBase account
If you have multiple Quickbase accounts, we can help integrate data between those accounts with Workato. 

To connect to a secondary Quickbase connection, simply choose it from the drop down of the list of applications. 

'### Q : I have a few QuickBase account syncing to the same destination application. What should be done?
While a single recipe can only connect to one application connection, you may have different QuickBase account connections used in different recipes. Simply copy the recipe, and change the application connection. 

### QuickBase Secondary
With QuickBase Secondary, you are able to connect up to two QuickBase instances in a single recipe. This allows a QuickBase primary -> QuickBase secondary sync.

![QuickBase Secondary](/assets/images/connectors/quickbase/quickbase-secondary.png)
*QuickBase Secondary connection*

Simply choose QuickBase Secondary as one of your recipe's steps, and use it the same way as the QuickBase Primary do.

Do note that Workato requires users to be on an Enterprise plan in order to enable a Secondary connection. Contact us at: +1 (844) 469-6752 or at info@workato.com if you require more information about this feature. 


## Quickbase: How to compare values within a table 

Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

Comparing values within a table (between multiple records) is useful when trying to find a particular record with certain criteria. 

![Search Records](/assets/images/connectors/quickbase/search-records.png)
*Available records to compare*

The first step should return an array of all the records you want to compare. You can do this by creating a field (checkbox) in Quickbase and check all the records which contain the values you would like to compare. 

In the 2nd step, choose Utilities as the app and Log Message. In the message, click the toggle for 'formula mode' at the end of the field. Choose the 'records' array pill (demarcated by the array icon) and use the .pluck formula. 

You should pluck the value in the specific field you want, and put in the record ID of that field behind 'f_'. This effectively creates an array of all the values that you want to compare. You may do other functions such as '.min' and '.max' to compare numerical values. 

See [this recipe](https://www.workato.com/recipes/283949-copy-of-new-record-in-quickbase-will-search-records-in-a-quickbase-table) for an example of how this can be used.


## QuickBase: Specifying input fields to display with the "Input field list" 

When your QuickBase table contains more than 150 fields, not all fields will be retrieved by Workato for performance optimization. For cases whereby your selected QuickBase table has massive, multi-layered tables and contains more than 150 fields, you would need to specify which fields you're interested in using in your recipe.

In this article, we'll talk about the input field list, which is applicable for QuickBase actions. A largely similar concept for the QuickBase connector, the output field list, is covered in this other article, and is applicable for QuickBase triggers.

### Input Field List

Fetching only fields that you're interested in.

![Input Field List](/assets/images/connectors/quickbase/input-field-list.png)
*Input Field List in recipe builder*

With Input field list, only fields that are specified in this section will appear subsequently as input fields. Composite fields will also be included when using the top-level name.

### Notes
 - When specifying fields, only provide one field name per line. Field names are case sensitive, hence ensure that field names provided are an exact match as the QuickBase field names.
 - Any required fields in your QuickBase table should be displayed in the action by default. Required fields will not show up automatically if you fail to define them in the Input field list.
- Always refresh your recipe schema after changing the Input field list.
- There should NOT be additional spaces in front of or behind each field name 

### Example

I have a QuickBase table, Event App, with more than 150 fields configured.

![Table Selection](/assets/images/connectors/quickbase/table-selection.png)
*Table Selection from QuickBase*

When I select the Event App and the Event Attendee Manager table as the table I wish to work with in Workato (for the Add record action), a set of 150 fields would be fetched automatically, with the required fields First Name and Last Name showing up by default.

![Optional Fields](/assets/images/connectors/quickbase/optional-fields.png)
*Optional Fields*

If the field I'm interested in writing to isn't available in the field selector that enables me to add or remove optional fields, then I would need to explicitly specify the full list of fields I want to show up. For the QuickBase Add record action, the list of fields should include all required fields, otherwise the action will fail as no value would then be provided for all the required fields. Every time you change the input list field, you will need to do a schema refresh so as to reload the new input fields.

![Changing Input List Fields](/assets/images/connectors/quickbase/change-input-list-field.png)
*Specifying Input Fields*

Example: I have to explicitly define the required fields as well for Add record action as they won't show up otherwise

### Composite fields

Composite fields are essentially fields which may have multiple other fields that make it up - such as an address type field. In such cases, simply providing the main field name as an input will ensure that the multiple other fields that it comprises will be handled properly.

For example, if I would also like to pull out a field 'Home Address', which is an address type field, I'll simply put in the field name 'Home Address' and the composite fields 'Street 1', 'Street 2', 'City', etc. will show up as generated input fields. Again, remember to refresh your schema after changing the input field list!

![Adding Input Fields](/assets/images/connectors/quickbase/adding-input-fields.png)
*Adding input fields*


## Quickbase: Connecting your Quickbase Account

Visit [https://www.workato.com/integrations/quickbase](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

1) Making a connection: 

Connections can be established in 3 different areas: 

•In the top right corner of the Workato platform, click on your profile and choose 'Connections'
•When creating a new recipe, the connection is done after creating the trigger and the actions
•Connections are available in the 'Connection' tab in every recipe

![Establishing Quickbase Connection](/assets/images/connectors/quickbase/establishing-quickbase-connection.png)

Connect your Quickbase account to Workato as how you would login to your Quickbase. We need the sub-domain, your username and password to make a successful connection.

## Quickbase: How do I update a record?

Visit [https://www.workato.com/integrations/quickbase](https://www.workato.com/integrations/quickbase) for information about our Quickbase pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

Workato's Quickbase connector allows you to update a record in a table within an app. However, to perform an update, you need to tell Workato which record specifically you would like to update. 

This can be done by providing a unique field that exists only for that record. In Quickbase, that field is the Record ID# field. This is a default field assigned to every record by Quickbase. (You may use another unique field or change the label of the Record ID# field) 

![Creating Unique Field](/assets/images/connectors/quickbase/creating-unique-field.png)
*Creating a Unique Field*

Put in the Record ID# pill into the 'Required' field. If you do not find the pill, do a 'Search records' in Quickbase step before the 'Update record' step. 

Finally, if you update the Record ID# field label in Quickbase, do ensure that you enter the correct name of the field in the 'Input field list' and the correct field should appear.


## QuickBase - Purge records using Report 

### Purge Records based on Reports

Delete a range of data that fits the criteria

Warning : This Action deletes data out of your QuickBase. Please make sure you understand its implications, and are made aware of the data that will be purged

### What does the Action do?

QuickBase actions available in Workato are straightforward data manipulators. You are able to access your basic CRUD actions (Create, Read, Update, or Delete Records), as well as a few others that are unique to QuickBase. One of them is Purge Records based on Reports.

### What are Reports?

Reports are filters that comes either by default that filters data based on the criteria set. You're also able to create your own customized reports that will filter out to a specific range of data. To access reports, simply click on your application, and choose a table. 

![Table selection](/assets/images/connectors/quickbase/report-selection.png)
*Selecting a table*

2) Select REPORT & CHARTS Below the Application Name

![Reports and Charts](/assets/images/connectors/quickbase/report-and-charts.png)
*Report and Charts*

These are the names of the report made available. Simply click on them to see how do they filter, and if the records filtered are ideal.

If yes, you are ready to use Workato with QuickBase. Simply specify the application and the table name in the action, together with the desired Report Name.

![Application and Table Name](/assets/images/connectors/quickbase/application-and-table-name.png)
*Put the application and table name in the Report Name field*

When ran, the recipe will delete those records that matches the Reports filter.

![Records Purged](/assets/images/connectors/quickbase/purged-records.png)
*Records that will be deleted*


'## How do I find my Quickbase Access token? 

### Do I need a Quickbase token?

In Quickbase, applications can be configured to require application tokens before their data can be accessed. In such cases, you will be able to select an option from the Application and the Table picklists, but you will see the following error pop up.

![Application Token](/assets/images/connectors/quickbase/application-token.png)
*Error from requiring application tokens*

In the following, we'll go through how to set up your token.

### First Time Activation

For users who have already activated API access, skip to **Manage Application Token**

If this is the first time setting  up API access, you will need to enable this feature before managing tokens. For such users, you will see a text box that says 'Get more features and work smarter' in the App Settings page. This is what it looks like.

![Enabling Advanced Features](/assets/images/connectors/quickbase/enabling-advanced-features.png)
*Enabling advanced features*

Click on **Enable** which will open a prompt:

![Advanced Features Prompt](/assets/images/connectors/quickbase/advanced-features-prompt.png)
*Advanced features prompt*

Select **OK, enabled these features**. Now, API access is enabled for this App. Follow the remaining steps to retrieve the access token.

### Manage Application Tokens
1.Select the App you wish to retrieve App token for
2.Go to Settings > App properties
3.Scroll to Advanced Settings (inspect the checkbox for Require Application Tokens (normally checked)". If this is checked, an App token is required for API access)
4.Click on the link **Manage Application Token page**

![Manage Application Tokens](/assets/images/connectors/quickbase/manage-application-tokens.png)
*Manage application tokens*

5. You will be directed to the 'Manage Application Tokens' page. Here - you can Assign an existing Application Token, or Create a new Application Token. Copy and use this token for your recipe step so as to be able to successfully access your Quickbase data.

![Adding Application Tokens]](/assets/images/connectors/quickbase/adding-application-tokens.png)
*Adding application tokens*


## QuickBase: Specifying datatree fields to display with the "Output field list" 

When your QuickBase table contains more than 150 fields, not all fields will be retrieved by Workato for performance optimization. For cases whereby your selected QuickBase table has massive, multi-layered tables and contains more than 150 fields, you would need to specify which fields you're interested in using in your recipe.

In this article, we'll talk about the output field list, which is applicable for QuickBase triggers. A largely similar concept for the QuickBase connector, the input field list, is covered in this other article, and is applicable for QuickBase actions.

For example, if I'm using a trigger and would like to retrieve data from a formula field "Attendee Name" and a composite address type field "Home Address", I'll type in the exact, case sensitive field names as in QuickBase:

![Output Field List](/assets/images/connectors/quickbase/output-field-list.png)
*Inputting names into the output field list*

And in the datatree, I'll be able to see the fields that make up the address field type, such as street, city, postal code, etc.

![datatree](/assets/images/connectors/quickbase/datatree.png)
*Associated data pills in the datatree*

Notes
 - When specifying fields, only provide one field name per line. Field names are case sensitive, hence ensure that field names provided are an exact match as the QuickBase field names.
 - Any required fields in your QuickBase table should be displayed in the action by default. Required fields will not show up automatically if you fail to define them in the Input field list.
- Always refresh your recipe schema after changing the Input field list.
- There should NOT be additional spaces in front of or behind each field name 
