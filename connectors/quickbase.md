# Quick Base
[Quick Base](http://www.quickbase.com/) is an online platform used to help businesses connect multiple applications and automate their workflows.

Connecting Quick Base to Workato allows for the management of data in Quick Base and even allows users to sync data from multiple Quick Base accounts.


## Quick Base: getting started with Quick Base and Workato 
![Getting started](/assets/images/connectors/quickbase/getting-started.jpg)

*Quick Base integration by Workato*

Workato now fully supports Quick Base, including all custom objects and tables, standard CRUD-operations, and purging records using reports.

Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.


### Get connected
1. [How to connect your Quick Base account](https://support.workato.com/support/solutions/articles/1000236544-quickbase-connecting-your-quickbase-account)
2. [Connecting more than one Quick Base account in a single recipe](https://support.workato.com/support/solutions/articles/1000236168-quickbase-syncing-to-multiple-quickbase-instances)
3. Choosing table fields

### Learn Quick Base actions and triggers
2. [Quick Base triggers](https://support.workato.com/solution/articles/1000236163-quickbase-triggers)
3. Actions

i) [Search and update actions](https://support.workato.com/solution/articles/1000236167-quickbase-search-and-update-actions)
ii) [How do I update a record in Quick Base?](https://support.workato.com/solution/articles/1000236654-quickbase-how-do-i-update-a-record-%204) 

### Tips and tricks with Quick Base 
 - [How to compare values within a Quick Base table](https://support.workato.com/solution/articles/1000236539-quickbase-how-to-compare-values-within-a-table)
 - [Syncing to multiple Quick Base instances](https://support.workato.com/solution/articles/1000236168-quickbase-syncing-to-multiple-quickbase-instances)
 - [Adding fields](https://support.workato.com/solution/articles/1000236540-quickbase-adding-fields)

### Quick Base business use cases
See what businesses are doing with Quick Base using Workato to automate their business

![Quick Base presentation](/assets/images/connectors/quickbase/quickbase-presentation.jpg)

*[Workato and Quick Base team up to empower citizen developers](https://www.workato.com/blog/2016/06/workato-and-quickbase-team-up-to-empower-citizen-developers/)*


## Quick Base: triggers 
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.

Configuring the trigger:

![Trigger configuration](/assets/images/connectors/quickbase/trigger-config.png)
*Trigger configuration*

There are 2 types of triggers which we can use with Quick Base, checking for either a **New record** or **Updated record** (or checking for both). The records refer to a record within a table that is within an application. If the table requires an application token, you will need to create one in Quick Base. 

To manage your application tokens in Quick Base: 

Go to *Settings (for your app)* > *App properties* > *Advanced settings* > *Application Tokens* 

The output field list refers to the fields that are required in the recipe. You will need to fill it up to pull the fields you want especially if you require access to many fields, or if the table has more than 150 fields. Once you have keyed in the exact names of the fields (one per line), refresh the schema.

The **Refresh schema** button is below the recipe actions, on the bottom right.

![Schema refresh](/assets/images/connectors/quickbase/schema-refresh.png)
*Refreshing your recipe's schema*

The **Since** parameter refers to the date and time at which you would like the records to trigger the recipe. For example: if the since date is 8/2/2016 10:30 PM and the trigger is **New record**, any new records created after this date and time will trigger the recipe. 


## Quick Base: list of actions 
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.

The following actions are available for Quick Base: 

![Available Quickbase actions](/assets/images/connectors/quickbase/available-actions.png)
*Quick Base actions in Workato*

1. **Add record** 
2. **Delete record**
3. **Purge records** using report
4. **Search records**
5. **Update record** 

All the records refer to a record within a table within an app. 

If you require an application token in that app, do create one and put it in the application token field

To manage your application tokens in Quick Base:

Go to *Settings (for your app)* > *App properties* > *Advanced settings* > *Application Tokens*

The output field list refers to the fields that are required in the recipe. You will need to fill it up to pull the fields you want especially if you require access to many fields, or if the table has more than 150 fields. Once you have keyed in the exact names of the fields (one per line), refresh the schema.


## Quick Base: Search and Update actions 
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.

This article explains the **Search** action step and how to use it. It is usually required before the **Update** action step. 

**Search** action:

![Search Action](/assets/images/connectors/quickbase/search-action.png)
*Quick Base **Search** action for recipe building*

The **Search** step is required to find a specific record in Quick Base. You can search using 1 or multiple parameters by filling up the fields you are searching for. The **Record ID#** field is a standard identifier in Quick Base, meaning that each record will have its own unique **Record ID**. This is the best field to search with, although you can use any other unique field. 

Update field: 

When updating a record, the **Record ID#** field is a required field. The record to be updated will thus be identified using that **Record ID**. 

Therefore, you will require a **Search** step before the **Update** step to find this **Record ID#** pill. In the picture below, see that the search step yields the **Record ID** as an output on the datatree (extreme right)  

![Record ID from search action](/assets/images/connectors/quickbase/record-id.png)
***Record ID** from **Search** action*

Thereafter, fill in the other fields you wish to update within that record. Only those fills that are populated will be updated. 


## Quick Base: syncing to multiple Quick Base instances 
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.

### Connecting multiple Quick Base accounts
If you have multiple Quick Base accounts, we can help integrate data between those accounts with Workato. 

To connect to a secondary Quick Base connection, simply choose it from the drop down of the list of applications. 

### Q : I have a few Quick Base accounts syncing to the same destination application. What should be done?
While a single recipe can only connect to one application connection, you may have different Quick Base account connections used in different recipes. Simply copy the recipe, and change the application connection. 

### Quick Base Secondary
With Quick Base Secondary, you are able to connect up to two Quick Base instances in a single recipe, thereby allowing you to sync them.

![Quickbase Secondary](/assets/images/connectors/quickbase/quickbase-secondary.png)
*Quick Base Secondary connection*

Simply choose Quick Base Secondary as one of your recipe's steps, and use it the same way you would use the Quick Base Primary.

Do note that Workato requires users to be on an Enterprise plan in order to enable a Secondary connection. Contact us at: +1 (844) 469-6752 or at info@workato.com if you require more information about this feature. 


## Quick Base: how to compare values within a table 
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.

Comparing values within a table (between multiple records) is useful when trying to find a particular record with certain criteria. 

![Search Records](/assets/images/connectors/quickbase/search-records.png)
*Available records to compare*

The first step should return an array of all the records you want to compare. You can do this by creating a field (checkbox) in Quick Base and checking all the records which contain the values you would like to compare. 

In the 2nd step, choose **Utilities** as the app and select the **Log message** action. In the message, click the toggle for **Formula mode** at the end of the field. Choose the **Records** array pill (demarcated by the array icon) and use the `.pluck` formula. 

You should pluck the value in the specific field you want, and put in the **Record ID** of that field behind `f_`. This effectively creates an array of all the values that you want to compare. You may do other functions such as `.min` and `.max` to compare numerical values. 

See [this recipe](https://www.workato.com/recipes/283949-copy-of-new-record-in-quickbase-will-search-records-in-a-quickbase-table) for an example of how this can be used.


## Quick Base: specifying input fields to display with the "Input field list" 
When your Quick Base table contains more than 150 fields, not all fields will be retrieved by Workato for performance optimization. For cases whereby your selected Quick Base table has massive, multi-layered tables and contains more than 150 fields, you would need to specify which fields you're interested in using in your recipe.

In this article, we'll talk about the **Input field list**, which is applicable for Quick Base actions. A largely similar concept for the Quick Base connector, the **Output field list**, is covered in this other article, and is applicable for Quick Base triggers.

### Input field list
Fetching only fields that you're interested in.

![Input Field List](/assets/images/connectors/quickbase/input-field-list.png)
***Input field list** in recipe builder*

With **Input field list**, only fields that are specified in this section will appear subsequently as input fields. **Composite fields** will also be included when using the top-level name.

### Notes
 - When specifying fields, only provide one field name per line. Field names are case sensitive, so make sure that field names provided are an exact match as the Quick Base field names.
 - Any required fields in your Quick Base table should be displayed in the action by default. Required fields will not show up automatically if you fail to define them in the **Input field list**.
- Always refresh your recipe schema after changing the **Input field list**.
- There should NOT be additional spaces in front of or behind each field name 

### Example
I have a Quick Base table, **Event app**, with more than 150 fields configured.

![Table Selection](/assets/images/connectors/quickbase/table-selection.png)
*Table selection from Quick Base*

When I select the **Event app** and the **Event attendee manager** table as the table I wish to work with in Workato (for the **Add record** action), a set of 150 fields would be fetched automatically, with the required fields **First name** and **Last name** showing up by default.

![Optional Fields](/assets/images/connectors/quickbase/optional-fields.png)
*Optional fields*

If the field I'm interested in writing to isn't available in the field selector that enables me to add or remove optional fields, then I would need to specify the full list of fields I want to show up. For the Quick Base **Add record** action, the list of fields should include all required fields, otherwise the action will fail as no value would then be provided for all the required fields. Every time you change the **Input list field**, you will need to do a schema refresh so as to reload the new input fields.

![Changing Input List Fields](/assets/images/connectors/quickbase/change-input-list-field.png)
*Specifying input fields*

Example: I have to explicitly define the required fields as well for **Add record** action as they won't show up otherwise

### Composite fields
**Composite fields** are essentially fields which may have multiple other fields that make it up - such as an address type field. In such cases, simply providing the main field name as an input will ensure that the multiple other fields that it comprises will be handled properly.

For example, if I would also like to pull out a field **Home address**, which is an address type field, I'll simply put in the field name **Home address** and the composite fields **Street 1**, **Street 2**, **City**, etc. will show up as generated input fields. Again, remember to refresh your schema after changing the **Input field list**!

![Adding Input Fields](/assets/images/connectors/quickbase/adding-input-fields.png)
*Adding input fields*


## Quick Base: connecting your Quick Base account
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quickbase webinar.

1) Making a connection: 

Connections can be established in 3 different areas: 

•In the top right corner of the Workato platform, click on your profile and choose **Connections**

•When creating a new recipe, the connection is done after creating the trigger and the actions

•Connections are available in the **Connection** tab in every recipe

![Establishing Quick Base connection](/assets/images/connectors/quickbase/establishing-quickbase-connection.png)

Connect your Quick Base account to Workato the same way that you would login to your Quick Base account. We need the sub-domain, username, and password to make a successful connection.

## Quick Base: how do I update a record?
Visit [here](https://www.workato.com/integrations/quickbase) for information about our Quick Base pricing plans, customer stories, examples of recipes and to sign-up for our Quick Base webinar.

Workato's Quick Base connector allows you to update a record in a table within an app. However, to perform an update, you need to tell Workato which specific record you would like to update. 

This can be done by providing a unique field that exists only for that record. In Quick Base, that field is the **Record ID#** field. This is a default field assigned to every record by Quick Base. (You may use another unique field or change the label of the **Record ID#** field) 

![Creating unique field](/assets/images/connectors/quickbase/creating-unique-field.png)
*Creating a unique field*

Put in the **Record ID#** pill into the **Required** field. If you do not find the pill, do a **Search records** step in Quick Base before the **Update record** step. 

Finally, if you update the **Record ID#** field label in Quick Base, make sure you enter the correct name of the field in the **Input field list** and the correct field should appear.


## Quick Base: purge records using report 

### Purge records based on reports
Delete a range of data that fits the criteria

Warning : This action deletes data out of your Quick Base. Please make sure you understand its implications, and are made aware of the data that will be purged.

### What does the action do?
Quick Base actions available in Workato are straightforward data manipulators. You are able to access your basic CRUD actions (Create, Read, Update, or Delete Records), as well as a few others that are unique to Quick Base. One of them is **Purge records** based on reports.

### What are reports?
Reports are filters that are either there by default or by your creation. To access reports, simply click on your application, and choose a table. 

![Table selection](/assets/images/connectors/quickbase/report-selection.png)
*Selecting a table*

2) Select **Report & charts** below the application name

![Reports and charts](/assets/images/connectors/quickbase/report-and-charts.png)

*Report and charts*

These are the names of the report made available. Simply click on them to see with what criteria they operate, and if the records filtered are ideal.

If so, you are ready to use Workato with Quick Base. Simply specify the application and the table name in the action, together with the desired report name.

![Application and table name](/assets/images/connectors/quickbase/application-and-table-name.png)

*Put the application and table name in the report name field*

When ran, the recipe will delete those records that match the reports filter.

![Records Purged](/assets/images/connectors/quickbase/purged-records.png)

*Records that will be deleted*


## How do I find my Quick Base access token? 

### Do I need a Quick Base token?
In Quick Base, applications can be configured to require application tokens before their data can be accessed. In such cases, you will be able to select an option from the **Application** and the **Table** picklists, but you will see the following error pop up.

![Application Token](/assets/images/connectors/quickbase/application-token.png)
*Error from requiring application tokens*

In the following, we'll go through how to set up your token.

### First time activation
For users who have already activated API access, skip to **Manage application token**.

If this is the first time setting  up API access, you will need to enable this feature before managing tokens. For such users, you will see a text box that says "Get more features and work smarter" in the **App settings** page. This is what it looks like.

![Enabling Advanced Features](/assets/images/connectors/quickbase/enabling-advanced-features.png)
*Enabling advanced features*

Click on **Enable** which will open a prompt:

![Advanced Features Prompt](/assets/images/connectors/quickbase/advanced-features-prompt.png)
*Advanced features prompt*

Select **Ok, enable these features**. Now, API access is enabled for this app. Follow the remaining steps to retrieve the access token.

### Manage application tokens
1.Select the app you wish to retrieve the app token for
2.Go to *Settings* > *App properties*
3.Scroll to Advanced Settings (check the checkbox for "Require application tokens" (normally checked). If this is checked, an app token is required for API access)
4.Click on the link **Manage application token page**

![Manage Application Tokens](/assets/images/connectors/quickbase/manage-application-tokens.png)
*Manage application tokens*

5. You will be directed to the **Manage application tokens** page. Here, you can assign an existing application token, or create a new application token. Copy and use this token for your recipe step so as to be able to successfully access your Quick Base data.

![Adding Application Tokens](/assets/images/connectors/quickbase/adding-application-tokens.png)
*Adding application tokens*


## Quick Base: specifying datatree fields to display with the Output field list 
When your Quick Base table contains more than 150 fields, not all fields will be retrieved by Workato for performance optimization. For cases where your selected Quick Base table has massive, multi-layered tables and contains more than 150 fields, you would need to specify which fields you're interested in using in your recipe.

In this article, we'll talk about the **Output field list**, which is applicable for Quick Base triggers. A largely similar concept for the Quick Base connector, the **Input field list**, is covered in another article, and is applicable for Quick Base actions.

For example, if I'm using a trigger and would like to retrieve data from a formula field **Attendee name** and a composite address type field **Home address**, I'll type in the exact, case sensitive field names as in Quick Base:

![Output Field List](/assets/images/connectors/quickbase/output-field-list.png)
*Inputting names into the **Output field list***

And in the datatree, I'll be able to see the fields that make up the address field type, such as street, city, postal code, etc.

![datatree](/assets/images/connectors/quickbase/datatree.png)

*Associated datapills in the datatree*

Notes
 - When specifying fields, only provide one field name per line. Field names are case sensitive, hence ensure that field names provided are an exact match as the Quick Base field names.
 - Any required fields in your Quick Base table should be displayed in the action by default. Required fields will not show up automatically if you fail to define them in the **Input field list**.
- Always refresh your recipe schema after changing the **Input field list**.
- There should not be additional spaces in front of or behind each field name 
