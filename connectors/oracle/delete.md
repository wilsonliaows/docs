---
title: Workato connectors - Oracle Delete actions
date: 2018-03-19 06:00:00 Z
---

# Oracle - Delete actions

## Delete rows

This action lets you delete rows based on certain criteria defined by a ` WHERE` condition.

> **Warning: This action should be tested and used with care as is it will PERMANENTLY delete rows in your table.**

![Delete action](/assets/images/oracle/delete-rows-action.png)
*Delete rows action*

### Table
First, select a table to delete rows from. This can be done either by selecting a table from the pick list, or toggling the input to text mode and typing the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be deleted. This condition can be as simple as filtering a single record to delete based on `ID`.

```sql
CUSTOMER_ID = 123
```

Alternatively, it can be used to delete multiple rows.

```sql
STATUS = 'closed'
```

Complex `WHERE` conditions with subqueries can also be used. Refer to the Oracle [WHERE condition](/connectors/oracle.md#where-condition) guide for more information.
