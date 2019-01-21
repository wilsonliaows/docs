---
title: Workato connectors - MySQL Delete actions
date: 2018-02-02 06:10:00 Z
---

# MySQL - Delete actions

## Delete rows

This action lets you delete rows based on certain criteria defined by a ` WHERE` condition.

> **This action should be tested and used with care, as it will PERMANENTLY delete rows in your table.**

![Delete action](/assets/images/mysql/delete-rows-action.png)
*Delete rows action*

### Table
First, select a table to delete rows from. This can be done either by selecting a table from the pick list, or toggle the input to text mode and type the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be deleted. This condition can be as simple as filtering a single record to delete based on `ID`.

```sql
id = 123
```

Alternatively, it can be used to delete multiple rows.

```sql
status = 'closed'
```

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mysql.md#where-condition) guide for more information.
