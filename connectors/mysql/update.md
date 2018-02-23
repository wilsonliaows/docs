---
title: Workato connectors - MySQL Update actions
date: 2018-02-02 06:10:00 Z
---

# MySQL - Update actions

## Update rows
This action updates one or more rows with the single set of values. It uses a `WHERE` condition to select the row(s) to perform the update.

![Update row(s) action](/assets/images/mysql/update-row-action.png)
*Update row(s) action*

### Table
First, select a table to update. This can be done either by selecting a table from the pick list, or toggle the input field to text mode and type the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be updated. This condition can be as simple as filtering a single record to update based on `ID`.

```sql
id = 123
```

Alternatively, it can be used to select and update multiple rows.

```sql
status = 'closed'
```

Take note that all rows matching this criteria will be updated with the same values provided in **Columns** input.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mysql.md#where-condition) guide for more information.

### Columns
Columns in the selected table are presented as input fields here. Map the required fields from the output datatree here to update row(s) with data from preceding trigger or actions.
