The primary reason for lookup tables (also termed as cross reference tables) is to enable fast and easy lookup of frequently used data that are static and immutable. 

Some of examples of such data include:
Given a city name, you want to get the zip code 
Conversion from metric to SI for distances 
Given a department, rank, retrieve vacation accrual rate

Lookup tables is currently only available to Business plans and up.

Limits
You cannot have more than 5000 entries in one lookup table
We support only 5 columns. Each column can be used as a key to lookup the entry

How to setup your lookup tables
There are two ways your recipes can upload data from your lookup tables:
By importing an existing CSV file 
By adding new entries via a recipe

Note: Lookup tables are immutable and the existing entries cannot be modified or deleted.

Importing an existing CSV file
The GIF below walks you through the process of creating a lookup table and loading it with data imported from a CSV file.
lookup-tables-3.gif

 
You can also manually enter additional rows from the UI.




You can select what columns you choose to view. At present we support only 5 columns.




2. By adding new entries via a recipe
We will cover this in the next section where we talk about the different recipe actions.


How to use lookup tables in a recipe
There is a special connector called ‘Lookup table’ that allows you to work with your tables. This connectors support these actions:
Lookup entry
Search entries
Add entry

1. Lookup entry
As the name suggests, data is typically organized like in a database table columns and rows of data. You can then lookup any row by one or more columns. You can lookup an entry within the specified lookup table by using
Any column
Multiple columns
In the example below, all 4 available columns are displayed. It returns the first entry based on the column value provide. 


This GIF walks you through the entire flow:
lookup-tables-recipe-4.gif


2. Search entries
Works similar to lookup, except that it will return all matched entries. It returns a list.

3, Add entry
Add a new entry to an existing lookup table. Great for reading a data source and creating a lookup table based on it. E.g. read titles from your HR apps and create a title lookup table.
