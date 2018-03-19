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
        <th width='25%'>Field</th>
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
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.md">On-premise agent</a> guide for more information.</td>
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
      <td>URL of your hosted server.</td>
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
The MySQL connector works with all tables, views and stored procedures. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](/assets/images/mysql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/mysql/table_name_text.png)
*Provide exact table/view name in a text field*

Case sensitivity of the name of a table/view depends on your database implementation. The underlying OS that your database is hosted determines if you need to provide exact table/view names. Typically, database and table names are case insensitive in Windows.

### Single row vs batch of rows
MySQL connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size.

![Batch trigger inputs](/assets/images/mysql/batch_trigger_input.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](/assets/images/mysql/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](/assets/images/mysql/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. This [recipe](https://www.workato.com/recipes/660208) uses a batch trigger for new rows in the `users` table. The output of the trigger is used in a Salesforce bulk upsert action that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](/assets/images/mysql/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/language-structure.html) for a full list of rules for writing MySQL statements.

#### Simple statements

String values must be enclosed in single quotes (`''`) and columns used must exist in the table.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that have the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](/assets/images/mysql/use_datapill_in_where.png)
*Using datapills in `WHERE` condition*

Backticks (` `` `) in `WHERE` statements are for tables and columns identifiers. This is required when the identifier is a MySQL reserved keyword or contains special characters.

```sql
`currency` = 'USD'
```

In a recipe, remember to add backticks to the column identifiers.

![Using datapills in WHERE condition with backticks](/assets/images/mysql/use_datapill_in_where_backticks.png)
*Using datapills in `WHERE` condition backticks*

Double quotes (`""`) can also be used for string values but is less commonly accepted in other databases. For this reason, single quotes are used more widely than double quotes.

MySQL also expects `DATE` and `DATETIME` values to be single quoted. You can use double quotes for other column types.

```sql
created_date > '2018-03-01' and currency = "USD"
```

In a recipe, remember to use the appropriate quotes for each value.

![Using datapills in WHERE condition with mixed column types](/assets/images/mysql/use_datapill_in_where_mixed.png)
*Using datapills in `WHERE` condition with mixed column types*

#### Complex statements

Your `WHERE` condition can also contain subqueries. The following query can be used on the `users` table.

```sql
id in (select user_id from tickets where priority = 2)
```

When used in a **Delete rows** action, this will delete all rows in the `users` table where at least one associated row in the `tickets` table has a value of 2 in the `priority` column.

![Using datapills in WHERE condition with subquery](/assets/images/mysql/use_datapill_in_where_complex.png)
*Using datapills in `WHERE` condition with subquery*

![Using subquery in WHERE condition](/assets/images/mysql/use_datapill_in_where_complex.png)
*Using subquery in WHERE condition*
