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

# App Data/Data Pills 
Data Fields (also known as Data Pills) are data from previous steps that you can drag and drop (or simply click on the pill while an input field is highlighted) to place into inputs fields on the left. Doing so simply maps the Data Fields into the Input Fields. These Data Fields can usually be found on the right side of the recipe within Data Trees. 

[data_pill_1](/_uploads/data_pill_1.png)

This is a data pill ^

When you click on any steps, the Data Trees will appear on the right.
[appdata_gif](/_uploads/appata_gif.gif)

[data_pill_2](/_uploads/data_pill_2.png)
In this image directly above, you can see the data tree output which displays all of the information from the Salesforce Object Created/Output step. The information is organized in the form of data pills. The small icons on the left of the data pill is an indication of the data type. The light-grey text on the right of the data pill is known as sample output - it pulls an arbitrary record from the application to give you a sense of what data the pill might contain. 

## Data Type 

Here are some of the object types and their logos.
The greyed values are what we call meta-data. The meta data allows you to take a peek at what kind of data does the field stores. Workato picks arbitrary a record field and uses it as the meta-data value.

## Mapping
Field Mapping is one of the strongest ability that Workato users possess. With the ability to retrieve, modify and store values in any fields, including custom fields, you can now move data across your applications with better control and stronger data pipelines.

The basics of Field Mapping in Workato is to understand what you're seeing in the recipe. Let's use this recipe for an example :

Taking the right data pill is just as important as setting up the right logic, when you choose the wrong data pill to work with, you are bounded to fall into errors.

   Empty Data pills on Required Fields
   Required fields must always have a value. To ensure that, you will always need to make sure that the field is filled up, either    with a data pill that always have a value, or using formula mode. Check out how you can use formula mode to choose a second data pill as a second choice here.

   Data pills from the wrong branch of logic
   When you used the recipe from the wrong branch of logic, you will definitely be meeting a data pill with empty value. This is because that data pill may come from a step that may never had been executed at all. To learn more about how to identify these issues, check out this video on how you can do so.


## Formula 


