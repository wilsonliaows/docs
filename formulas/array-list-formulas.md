---
title: Array list formulas
date: 2017-03-30 05:00:00 Z
---

# Arrays
When you have a List (a type of Array) returned to you, you may only want specific sets of information. For example, the image below shows the step output for a search accounts action. Here, a List of Account objects is returned containing all of the fields displayed under it (Name, Sub account, etc.) for each Account object. Lists are identified with a unique icon in the datatree.

![List datatree icon](/assets/images/formula-docs/accounts-list-icon.png)

*List icon as viewed in the datatree*

## Formulas to manipulate Lists/Arrays
If you would like to retrieve the account records based on a specific filter condition (e.g. only those which are Active), you can use the where function on the "Accounts" list pill. 
If you would like to extract certain field values from each account record (e.g. only the Name pills from the list of account records), you can use the pluck function on the "Accounts"" list pill. 

## Formatting the Results
Do note that using the where or pluck function on the (Accounts) list pill will still return the results in the form of an Array. However, arrays cannot usually be used directly in text fields. You can use additional formulas that convert Arrays into Strings to format the results correctly. Some formulas you can use to do this are: join, smart_join, and to_s.

## Pluck Function
The pluck function allows you to pluck desired fields from an array of objects or hashes. This is useful in a few scenarios. The most common use will be described here.
Sometimes a step in your recipe (e.g. a search action) may output a List containing many objects. For example, the image below shows the step output for a search accounts action. Here, a List of Account objects is returned containing all of the fields displayed under it (Name, Sub account, etc.) for each Account object. List fields are always marked with the symbol.

![List datatree icon](/assets/images/formula-docs/accounts-list-icon.png)

When you have a List, you may want to extract the values of certain fields from each object within it. Continuing with the search accounts example, pretend you want to know the Name and Account Type for all of the Accounts returned by the search.
First, click in the input field where you want to enter this information and turn on formula mode. This will make the List pillable so that you can select it and add it to your field. Now, you can "pluck" any available field from the List you selected and the function will return an array containing the value of that field for each object in the list.

## Finding the API Name
The tricky part now is using the correct name to pluck the field. The names displayed for the pills in the step output are not always the correct name to use, especially when the name contains more than one word. Typically, you can get the API name for multiple word fields by removing the spaces and capitalizing each word. For example, a field named "Account type" will typically have the API name "AccountType". However, this is not always the case. To be sure, there are two places you can locate the API name for the field you want.

The first place you can find the API names for a field is the recipe output from a completed job. For example to find names for Account fields, you can look at successful output for any triggers or actions related to Accounts. You can also create a test recipe and search for an Account that you know exists. Here is the recipe job output for the search accounts action that lists all of the fields available by API name:

!![pluck_where_1](/assets/images/formula-docs/pluck_where_2.png)

The other place you can find the API names for a field is the actual API for the application you are using. Many APIs will publish the fields available for each object. However, not all APIs are easy to navigate so this method may take some more time and effort.

##### Using the Pluck Function
Once you know the API names for the fields you want, you can write your formula. The format for the pluck function is as follows: [List Data Pill].pluck('APIname'). If you want to pluck additional fields, simply separate them with a comma: [List Data Pill].pluck('APIname1', 'APIname2', 'APIname3'). Referring back to the current example, the formula to pluck Name and Account Type from the Accounts List would be:

![Pluck formula](/assets/images/formula-docs/pluck-formula.png)

##### Formatting the Results
The pluck function will return fields in the form of an array. However, arrays cannot usually be used directly in text fields. You can use additional formulas that convert Arrays into Strings to format the results correctly. Some formulas you can use to do this are: join, smart_join, and to_s. 

#### Where Function
The where function can be used in combination with other functions (such as pluck) in order to filter information from a List (a type of Array). Since the where function returns an Array (the filtered List), any added function must be able to work with Arrays. The where function is useful when a step in your recipe (e.g. a search action) outputs a List containing many objects. For example, the image below shows the step output for a search accounts action. Here, a List of Account objects is returned containing all of the fields displayed under it (Name, Sub account, etc.) for each Account object. List fields are always marked with the ![array symbol](/assets/images/formula-docs/array_symbol.png) symbol. 

![List datatree icon](/assets/images/formula-docs/accounts-list-icon.png)

When you have a List, you can work with it in many ways. For example, you may use the pluck function to extract the values of certain fields from each object within the List. However, in some cases you may want to narrow down the objects you want to work with before applying such a function. You can do this using the where function.

###### Finding the API Name 
Just as with the pluck function, you will need to find the correct API name for a field to use as a filter. The names displayed for the pills in the step output are not always the correct name to use, especially when the name contains more than one word. Typically, you can get the API name for multiple word fields by removing the spaces and capitalizing each word. For example, a field named "Account type" will typically have the API name "AccountType". However, this is not always the case. To be sure, there are two places you can locate the API name for the field you want.

The first place you can find the API names for a field is the recipe output from a completed job. For example to find names for Account fields, you can look at successful output for any triggers or actions related to Accounts. You can also create a test recipe and search for an Account that you know exists. Here is the recipe job output for the search accounts action that lists all of the fields available by API name:

!![pluck_where_1](/assets/images/formula-docs/pluck_where_2.png)

The other place you can find the API names for a field is the actual API for the application you are using. Many APIs will publish the fields available for each object. However, not all APIs are easy to navigate so this method may take some more time and effort.

###### Using the Where Function
Once you know the API names for the fields you want, you can write your formula. The format for the where function is as follows: [List Data Pill].where('APIname': 'filterValue'), simply separate them with a comma: [List Data Pill].where('APIname1': 'filterValue1', 'APIname2': 'filterValue2', 'APIname3': 'filterValue3'). Now you can add the main function you want to use to the end of the where formula. You can add on any formula that works with an Array. The combined formula will return whatever the last formula applied returns. Here is an example using the pluck function:

![Where formula](/assets/images/formula-docs/where-formula.png)

Remember that the pluck function will return an array object, so you will typically need to add on another formula such as to_s that converts an Array to a String.