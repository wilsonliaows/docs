---
title: Workato connectors - Snowflake Delete actions
date: 2019-01-10 06:10:00 Z
---

# Snowflake - Delete actions

## Delete rows

This action lets you delete rows based on certain criteria defined by a ` WHERE` condition.

> **This action should be tested and used with care, as it will PERMANENTLY delete rows in your table.**

![Delete action](/assets/images/snowflake/delete-rows-action.png)
*Delete rows action*

### Table
First, select a table to delete rows from. This can be done either by selecting a table from the pick list, or toggling the input to text mode and typing the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be deleted. This condition can be as simple as filtering a single record to delete based on `ID`.

```sql
ID = 123
```

Alternatively, it can be used to delete multiple rows.

```sql
STATUS = 'closed'
```

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/snowflake.md#where-condition) guide for more information.
