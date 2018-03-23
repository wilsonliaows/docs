---
title: Workato connectors - SQL Server new/updated row triggers
date: 2018-03-23 06:00:00 Z
---

# SQL Server - New/updated row triggers

## New/updated row
This trigger picks up rows that are inserted/updated in the selected table or view. Each row is processed as a separate job. It checks for new/updated rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated row trigger](/assets/images/mssql/new-updated-row-trigger.png)
*New/updated row trigger*

### Table
First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Unique key
Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view. This is used to deduplicate rows in the selected table.

As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`). It should be incremental and sortable. This column can also be indexed for better performance.

### Sort column
Select a column to identify updated rows. Typically, this is a timestamp column.

When a row is updated, the Unique key value remains the same. However, it should have it's timestamp updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected [**Unique key**](#unique-key) column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

### WHERE condition
Finally, provide an optional `WHERE` condition to filter rows. This condition can be used to filter rows based on one or more column values.

```sql
status = 'closed' and priority > 3
```

Leave blank to process all rows from the selected table.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mssql.md#where-condition) guide for more information.

## New/updated batch of rows
This trigger picks up rows that are inserted/updated in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new/updated rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated batch of rows trigger](/assets/images/mssql/new-updated-batch-of-rows-trigger.png)
*New/updated batch of rows trigger*

### Table
Just like with the new/updated row trigger, you need to select the target table.

### Unique key
Just like with the new/updated row trigger, you will need to select a unique key column to deduplicate rows.

### Sort column
Just like with the new/updated row trigger, you will need to select a sort column to observe updated rows events.

### Batch size
Batch size of rows to return in each job. This can be any number between **1** and the maximum batch size. Maximum batch size is **100** and default is **100**.

In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.

### WHERE condition
Finally, provide an optional `WHERE` condition to filter rows. This is identical to the [WHERE condition](#where-condition) used in new/updated row trigger.
