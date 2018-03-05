---
title: Workato connectors - SQL Server Upsert actions
date: 2018-02-02 06:10:00 Z
---

# SQL Server - Upsert actions

## Upsert row
This action upserts a single row into the selected table.

![Upsert row action](/assets/images/mssql/upsert-row-action.png)
*Upsert row action*

### Table
First, select a table to upsert rows in. This can be done either by selecting a table from the pick list, or toggle the input field to text mode and type the full table name.

### Columns
Columns in the selected table are then presented as input fields here. Map the required fields from the output datatree here to upsert a row with data from preceding trigger or actions.

#### Primary key
Primary key value will be used to determine if an update or an insert is executed in your SQL Server database. If the primary key value of the given set of values exists in your table, that row will be updated with the values provided. In the absence of a row with the primary key value, a new row will be inserted with the values provided.

## Upsert batch of rows
This action allows you to upsert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to SQL Server. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.

![Upsert batch of rows action](/assets/images/mssql/upsert-rows-batch-action.png)
*Upsert batch of rows action*

### Table
Just like with the single row upsert action, you need to select the target table first.

### Rows source list
Unlike the **Upsert row** action, we are now dealing with a batch of rows. Hence, the next input is the source of the batch of rows to upsert. This can come from any trigger or action that outputs a list in the datatree. Typically, you will map a list from a batch trigger or from results set of a search action.

If you do not map a list datapill to this field, this action will upsert only 1 row and will behave like the **Upsert row** action.

### Columns
Finally, you will need to map the required fields from the output datatree here to upsert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated (mappings like this will become a constant value for all rows).

Similar to the **Upsert row** action, primary key values provided will be used to determine an update or create for each row.

Refer to the [List management](/features/list-management.html) guide for more information about working with batches.
