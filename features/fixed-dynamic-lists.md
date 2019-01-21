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

Use the 'Dynamic list' option when you want the action to dynamically iterate through all items in a list, reading the values in every row. For example, if you have a CSV file with 10 rows, Dynamic list will iterate through all the rows, using the data in each row to create 10 new records in Salesforce.

When this option is selected, the first field to map is the 'Source list' field, which only accepts a list data pill. Using the list data pill will read directly from the source application's list of objects. Thereafter, map the fields below using the pills nested within the list pill. 

In the example below, the source list comes from a CSV file uploaded into Dropbox and will create Salesforce Opportunity records in bulk using the data in each line of the CSV file. It will loop through all CSV rows and read the column values from each row, such as Product code, Product description etc. Thus, each line in the CSV file will provide data per Opportunity record created in Salesforce. 

![Example input source list](/assets/images/features/list-management/example-input-source-list.png)
*Rows list object is mapped into the Salesforce products input source list*


## Fixed lists

In contrast, use the 'Fixed list' option when you want to input a list with a fixed number of items, without dynamically iterating through another list. In this case, each item is added one by one.

![Dynamic or fixed](/assets/images/features/list-management/fixedlist.png)
*Select the input mode*

Use this input mode if the total number of items in the list and their contents should be the same across recipe jobs. When this option is selected, you need to add and map each item in the list one by one.

The example below demonstrates using Fixed list to create a fixed number of Contacts in Salesforce. In this case, the user already knows the number of contacts he wishes to create in Salesforce, so he will add each item in the Contacts list one by one.

![Dynamic or fixed](/assets/images/features/list-management/item-fixed.gif)
*Entering Contact names in a fixed list*
