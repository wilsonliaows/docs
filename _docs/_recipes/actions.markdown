---
title: Workato action steps
date: 2017-02-26 02:00:00 Z
---

# Actions
We will take a look at the different type of standard actions available using Salesforce as an example cloud application. 

## Create
## Update
## Upsert
## Search
## Get
## Delete

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

The basics of Field Mapping in Workato begins with understanding what you are trying to map in a recipe. Let's use this recipe for an example :

(KIV Needs Example)


##Common Pitfalls
Taking the right data pill is just as important as setting up the right logic, when you choose the wrong data pill to work with, you are bounded to fall into errors. Here are some common pitfalls with regards to field mapping.

- Empty Data pills on Required Fields

  Required fields must always have a value. To ensure that, you will always need to make sure that the field is filled up, either    with a data pill that always have a value, or using formula mode. Check out how you can use formula mode to choose a second data pill as a second choice here.

- Data pills from the wrong branch of logic

  When you used the recipe from the wrong branch of logic, you will definitely be meeting a data pill with empty value. This is because that data pill may come from a step that may never had been executed at all. To learn more about how to identify these issues, check out this video on how you can do so.


## Formula 


