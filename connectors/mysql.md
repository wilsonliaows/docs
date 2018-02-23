---
title: Workato connectors - MySQL
date: 2018-02-02 06:10:00 Z
---

# MySQL
[MySQL](http://www.MySQL.com/) is an open-source relational database management system hosted either in the cloud or on-premise.

## Supported editions
All editions of MySQL are supported.

## How to connect to MySQL on Workato
The MySQL connector uses basic authentication to authenticate with MySQL.
![Configured MySQL connection](/assets/images/mysql/connection.png)

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this MySQL connection a unique name that identifies which MySQL instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the [On-premise agent](/on-prem.md) guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to MySQL.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to MySQL.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>URL of server where your server is hosted.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>Port number that your server is running on, typically <b>3306</b>.</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>Name of the MySQL database you wish to connect to.</td>
    </tr>
  </tbody>
</table>

## Working with the MySQL connector

### Table, view and stored procedure
MySQL connector works with all tables, views and stored procedures. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](/assets/images/mysql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/mysql/table_name_text.png)
*Provide exact table/view name in a text field*

### Single row vs batch of rows
MySQL connector triggers/actions read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide a batch size you wish to work with. Batch size can be any number between 1 and 100, the maximum size limit. The default batch size is 100.

![Batch trigger inputs](/assets/images/mysql/batch_trigger_input.png)
*Batch trigger inputs*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. This is used in the following way.
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. String values must be enclosed in single quotes (`''`) and columns used must exist in the table.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that has the value 'USD' in the `currency` column.

Your `WHERE` condition can also contain subqueries. The following query can be used on the `users` table.

```sql
id in (select user_id from tickets where priority = 2)
```

When used in a **Delete rows** action, this will delete all rows in the `users` table where at least one associated row in the `tickets` table has a value of 2 in the `priority` column.

![Using subquery in WHERE condition](/assets/images/mysql/subquery-in-where-condition.png)
*Using subquery in WHERE condition*
