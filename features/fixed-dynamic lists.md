---
title: Fixed & Dynamic Lists
date: 2018-12-06 16:00:00 Z
---

# Fixed and dynamic lists

## Using list data pills in actions

Some actions will accept a list as input e.g. Salesforce bulk insert and bulk update actions, create journal entry actions for accounting apps, create sales order actions for ERP apps.

Actions that take lists as inputs will have a input field called Source list, which will only take in list pills. List data pills are indicated with a stack of lines as an icon. When these list input fields are selected, the data tree will offer only list pills.

![Example input source list](/assets/images/features/list-management/example-input-source-list.png)
*Rows list object is mapped into the Salesforce Contacts input source list*

When actions offer a list as input, the input modes allowed are `Fixed list` and `Dynamic list`. Select the input mode by clicking on the ellipses icon as shown below.

![Dynamic or fixed](/assets/images/features/list-management/dynamiclist.png)
*Select the input mode*

## Dynamic lists

The 'Dynamic list' option requires a list input. Use a dynamic list if the number of items or their content is dependent on another list (for example, the items in an invoice and their prices). Use the 'Dynamic list' option when you want the action to **iterate through a list line by line**, using the values in each row in all the fields you map here.

When this option is selected, the first field to map is the 'Source list' field, which only accepts a list data pill. Using the list data pill will read directly from the source application's list of objects. Thereafter, map the fields below using the pills nested within the list pill. 

In the example below, the source list comes from a CSV file uploaded into Dropbox and will create Salesforce Opportunity records in bulk using the data in each line of the CSV file. It will loop through all CSV rows and read the column values from each row, such as Product code, Product description etc. Thus, each line in the CSV file will provide data per Opportunity record created in Salesforce. 

![Example input source list](/assets/images/features/list-management/example-input-source-list.png)
*Rows list object is mapped into the Salesforce products input source list*


## Fixed lists

In contrast, using the fixed, or static list input requires either text input from the user or data pills from a source that is not a list. Instead of using a list and looping through it automatically, use a fixed list to add records one by one. 

![Dynamic or fixed](/assets/images/features/list-management/fixedlist.png)
*Select the input mode*

Use this input mode if the total number of items in the list and their contents should be the same across recipe jobs.

The first example below uses text input to enter the First Name and Last Name of a Salesforce contact. In this case, the user knows the names and the number of contacts they wish to create in Salesforce. 

![Dynamic or fixed](/assets/images/features/list-management/item-fixed.gif)
*Entering Contact names in a fixed list*
