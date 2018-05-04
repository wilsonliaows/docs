---
title: Workato connectors - SQL Server new/updated row triggers
date: 2018-03-23 06:00:00 Z
---

# SQL Server - New/updated row triggers

## New/updated row
This trigger picks up rows that are inserted/updated in the selected table or view. Each row is processed as a separate job. It checks for new/updated rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated row trigger](/assets/images/mssql/new-updated-row-trigger.png)
*New/updated row trigger*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        First, select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td><a href="#sort-column">Sort column</a></td>
      <td>
        Now, select a column to identify updated rows.
      </td>
    </tr>
    <tr>
      <td><a href="#where-condition">WHERE condition</a></td>
      <td>
        Finally, provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## New/updated batch of rows
This trigger picks up rows that are inserted/updated in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new/updated rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated batch of rows trigger](/assets/images/mssql/new-updated-batch-of-rows-trigger.png)
*New/updated batch of rows trigger*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        First, select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td><a href="#sort-column">Sort column</a></td>
      <td>
        Now, select a column to identify updated rows.
      </td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Next, configure the batch size to process in each individual job for this recipe.
      </td>
    </tr>
    <tr>
      <td><a href="#where-condition">WHERE condition</a></td>
      <td>
        Finally, provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## New/updated batch of rows via custom SQL
This trigger picks up rows when any rows matching the custom SQL are inserted/updated. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated batch of rows via custom SQL trigger](/assets/images/mssql/new-updated-batch-of-rows-via-custom-sql-trigger.png)
*New/updated batch of rows trigger via custom SQL*

**This trigger is not supported for SQL Server 2008 version or earlier.**

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#sql">SQL</a></td>
      <td>
        Custom SQL query to be executed at each poll interval to pick up new rows.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Next, select a unique key column to uniquely identify rows. This list of columns are generated from custom SQL provided.
      </td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Next, configure the batch size to process in each individual job for this recipe. This defaults to 100.
      </td>
    </tr>
  </tbody>
</table>

## Input fields

### Table
Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Unique key
Values from this selected column is used to deduplicate rows in the selected table.

As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`). It should be incremental and sortable. This column can also be indexed for better performance.

### Sort column
Sort column is a column that is updated whenever a row in the table is updated. Typically, this is a timestamp column.

When a row is updated, the Unique key value remains the same. However, it should have it's timestamp updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected [**Unique key**](#unique-key) column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

### Batch size
Batch size of rows to return in each job. This can be any number between **1** and the maximum batch size. Maximum batch size is **100** and default is **100**.

In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.

### WHERE condition
This condition is used to filter rows based on one or more column values.

```sql
status = 'closed' and priority > 3
```

Leave blank to process all rows from the selected table.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mssql.md#where-condition) guide for more information.

### SQL
Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`).

Avoid using limit clauses like `TOP` in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the [**Batch size** input field](#batch-size). Adding your own limit clause will cause the action to fail.
