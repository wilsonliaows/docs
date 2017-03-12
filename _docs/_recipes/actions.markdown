---
title: Workato action steps
date: 2017-02-26 02:00:00 Z
---

# Actions
There are a variety of standard actions available on Workato such as Create, update, upsert, search, get and delete. We will be using the apps Zendesk and Salesforce in a Workato recipe to better illustrate these actions. You may visit the Workato recipe [here](https://www.workato.com/recipes/484532) and install them into your own Workato account if you would like test out these actions yourself. 

## Create
The Create Object action allows you to create any standard or custom object. In Salesforce, creating an account requires at least an Account Name to be stated. 

![create](/_uploads/actions-docs/action_1.png)
 
## Update
The Update Object action allows you to make changes and edits on any existing standard or custom object. In order to pinpoint on which object you will be updating, you would have to minimally input in the Object ID. Updating a Salesforce account will mean having to input in the Account ID. 

![update](/_uploads/actions-docs/action_2.png)
 

## Search
The search action act like a search engine - pass in the keywords (some actions ask for the exact keywords, some actions ask for partial keywords) and the details of the matching object will be provided to you. If Search actions don't find a matching object, the action will not fail, neither will they return anything. This might cause subsequent actions expecting values to be passed to them to fail. You can also think of Search actions like a filter that filters the specified conditions, and all the subsequent actions will be based on the specified "filter".

![search](/_uploads/actions-docs/action_3.png)
 

## Get
Get actions are more pinpointed - they require a unique ID to be passed to them, and the details of the matching object will be provided to you. If Get actions don't find a matching object, it will fail immediately. In the case of Salesforce, using the Get action on an Account will require you to input the Salesforce Account ID. 

![get](/_uploads/actions-docs/action_4.png)
 

## Upsert
Workato supports certain connectors with the Upsert command, which is a combination of the search, update and create(insert) actions. When used, Salesforce will perform a search for the object based on the object ID, create the object if it does not exist yet, else perform an update on it with the input field values.

![upsert](/_uploads/actions-docs/action_5.png)
 

## Delete
The delete action is supported by only a select number of applications on Workato. It allows the user to delete any standard or custom object by parsing in the Object ID. As the nature of this action can irreversibly lead to lost data, it is best to be cautious and understand the implications when using this action in Workato recipes.    

![delete](/_uploads/actions-docs/action_6.png)

# Data Pills
## What is a Data Pill?
Data Pills are data from previous steps that you can drag and drop (or simply click on the pill while an input field is highlighted) to place into Inputs Fields on the left. Doing so simply maps the Data Pills into the Input Fields. These Data Pills can usually be found on the right side of the recipe within the App Data section. 

![data_pill_1](/_uploads/data_pill_1.png)
This image above is an example of a Data Pill.

## Where can i find these Data Pills?
When you click on any steps in a recipe, the App Data section, which contain all of the Data Pills, will appear on the right.
![appdata_gif](/_uploads/appdata_gif.gif)

![data_pill_2](/_uploads/data_pill_2.png)
In this image directly above, you can see the App Data output which displays all of the information from the Salesforce Object Created/Output step in the form of data pills. The small icons on the left of the data pill is an indication of the data type while the light-grey text on the right of the data pill is known as meta-data. The meta data allows you to take a peek at what kind of data does the field stores. We will provide elaboration on both points below

## Data Types
There are various types of data types, as shown:

- A-Z    
![data_type_1](/_uploads/data_type_1.png)

This is a normal text field, otherwise known as a string field. It can contain a mix of alphabetical and numerical characters. A String field cannot be used for arithmetic computation or Date comparison. 

- 123    
![data_type_2](/_uploads/data_type_2.png)

This is a numerical field. It stores only numerical values. These values are not texts, and can be used for numerical computation.

- Calendar Symbol  
![data_type_3](/_uploads/data_type_3.png)

This is a date field. It can be used for date comparisons.

- A outlined and solid-filled circle  
![data_type_4](/_uploads/data_type_4.png)

This is a boolean field. It stores the value true or false.

## Metadata
![metadata](/_uploads/metadata.png)

MetaData are the grey values beside your app data's data pill. When you have your application connected to Workato, It will provide a preview of the available data on each of the data pill. Those data are actual data from your app's credentials for you to verify. This is very important in determining which data pill you would wish to use, especially if you are choosing a data pill to represent a unique identifier.

# Field Mapping
If you've read the previous section on Data pills, you are now ready to map them into Input Fields through this process we call Field Mapping. Field Mapping is one of the strongest ability that Workato users possess. With the ability to retrieve, modify and store values in any fields, including custom fields, you can now move data across your applications with better control and stronger data pipelines.


##Example of field mapping
The basics of Field Mapping in Workato begins with understanding what you are trying to map in a recipe. In the gif shown below, we map the Account Name data pill from the Salesforce Step into the Message input field in the email action. 
![mapping_gif](/_uploads/actions-docs/mapping_gif.gif)


##Types of Field mapping
There are 4 different types of field mapping methods - Static, Dynamic, Combination and Formula.

1. Static 
  This would mean that a fixed value is being placed into the Input field without the consideration of any Data Pills. This would be the cause for error when users realize that their results are the same despite running the recipe on different records. An example of static mapping can be seen in the "Email" field below, where the email would always be sent to aa@gmail.com. 
![mapping_type_1](/_uploads/actions-docs/mapping_type_1.png)

2. Dynamic
  Dynamic field mapping occurs when Data Pills are chosen as inputs. This means that the value passed into the field would vary accordingly to the object/record retrieved. The "First Name" data pill that was passed into the "Display name" field is an example of a dynamic field mapping.
![mapping_type_2](/_uploads/actions-docs/mapping_type_2.png)

3. Combination
  Combination field mapping type occurs when static and dynamic field types are being used concurrently. A common example would be to add a fixed value to a dynamic field type, such as adding a number to a dynamic numeric value. The example below shows how a static string is added to a dynamic string value called "Invoice Number".
![mapping_type_3](/_uploads/actions-docs/mapping_type_3.png)

4. Formula
  Formula field mapping type occurs when a formula is used to create a input into the field.This could be used to manipulate the value from a data pill. It could be used in a variety of ways, such as when users wish to split a string or apply an operator on a numerical values. In this example, formula mode is used to check on whether the data pill "Full Name" contains a value. If it does use that value, else use the value within the "First Name" data pill instead.
  
![mapping_type_4](/_uploads/actions-docs/mapping_type_4.png)

##Common Pitfalls when mapping fields
Taking the right data pill is just as important as setting up the right logic, when you choose the wrong data pill to work with, you are bounded to fall into errors. Here are some common pitfalls with regards to field mapping.

- Empty Data pills on Required Fields

  Required fields must always have a value. To ensure that, you will always need to make sure that the field is filled up, either    with a data pill that always have a value, or using formula mode. 

- Data pills from the wrong branch of logic

  When you used the recipe from the wrong branch of logic, you will definitely be meeting a data pill with empty value. This is because that data pill may come from a step that may never had been executed at all. 
