---
title: Workato connectors - PostgreSQL
date: 2018-03-20 06:00:00 Z
---

# PostgreSQL
[PostgreSQL](https://www.postgresql.org/) is an open-source object-relational database management system hosted either in the cloud or on-premise.

## Supported editions
All releases of PostgreSQL are supported.

## How to connect to PostgreSQL on Workato
The PostgreSQL connector uses basic authentication to authenticate with PostgreSQL.
![Configured PostgreSQL connection](/assets/images/postgresql/connection.png)

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
      <td>Give this PostgreSQL connection a unique name that identifies which PostgreSQL instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.md">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to PostgreSQL.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to PostgreSQL.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>URL of your hosted server.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>Port number that your server is running on, typically <b>5432</b>.</td>
    </tr>
    <tr>
      <td>Database name</td>
      <td>Name of the PostgreSQL database you wish to connect to.</td>
    </tr>
    <tr>
      <td>Schema</td>
      <td>Name of the schema within the PostgreSQL database you wish to connect to. Defaults to <b>public</b>.</td>
    </tr>
  </tbody>
</table>

## Working with the PostgreSQL connector

### Table, view and stored procedure
The PostgreSQL connector works with all tables, views and stored procedures. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](/assets/images/postgresql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/postgresql/table_name_text.png)
*Provide exact table/view name in a text field*

In PostgreSQL, unquoted identifiers are case-insensitive. Thus,

```sql
SELECT ID FROM USERS
```

is equivalent to

```sql
SELECT ID FROM users
```

However, quoted identifiers are case-sensitive. Hence,

```sql
SELECT ID FROM "USERS"
```

is **NOT** equivalent to

```sql
SELECT ID FROM "users"
```

### Single row vs batch of rows
PostgreSQL connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size.

![Batch trigger inputs](/assets/images/postgresql/batch_trigger_input.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](/assets/images/postgresql/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](/assets/images/postgresql/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. This [recipe](https://www.workato.com/recipes/667105) uses a batch trigger for new rows in the `users` table. The output of the trigger is used in a Salesforce bulk upsert action that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](/assets/images/postgresql/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [PostgreSQL documentation](https://dev.postgresql.com/doc/refman/5.7/en/language-structure.html) for a full list of rules for writing PostgreSQL statements.

#### WHERE operators

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Operator</th>
        <th width='40%'>Description</th>
        <th width='40%'>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>=</td>
      <td>Equal</td>
      <td><code>WHERE ID = 445</code></td>
    </tr>
    <tr>
      <td>
        !=<br>
        <>
      </td>
      <td>Not equal</td>
      <td><code>WHERE ID <> 445</code></td>
    </tr>
    <tr>
      <td>
        &gt<br>
        &gt=
      </td>
      <td>
        Greater than<br>
        Greater than or equal to
      </td>
      <td><code>WHERE PRICE > 10000</code></td>
    </tr>
    <tr>
      <td>
        &lt<br>
        &lt=
      </td>
      <td>
        Less than<br>
        Less than or equal to
      </td>
      <td><code>WHERE PRICE > 10000</code></td>
    </tr>
    <tr>
      <td>IN(...)</td>
      <td>List of values</td>
      <td><code>WHERE ID IN(445, 600, 783)</code></td>
    </tr>
    <tr>
      <td>LIKE</td>
      <td>Pattern matching with wildcard characters (<code>%</code> and <code>&#95</code>)</td>
      <td><code>WHERE ID BETWEEN 445 AND 783</code></td>
    </tr>
    <tr>
      <td>
        IS NULL<br>
        IS NOT NULL
      </td>
      <td>
        NULL values check<br>
        Non-NULL values check
      </td>
      <td><code>WHERE NAME IS NOT NULL</code></td>
    </tr>
  </tbody>
</table>

#### Simple statements

String values must be enclosed in single quotes (`''`) and columns used must exist in the table.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that have the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](/assets/images/postgresql/use_datapill_in_where.png)
*Using datapills in `WHERE` condition*

Column names with spaces must be enclosed in double quotes (`""`). For example, **currency code** must to enclosed in brackets to be used as an identifier. Note that all quoted identifiers are case-sensitive.

```sql
"currency code" = 'USD'
```

In a recipe, remember to use the appropriate quotes for each value/identifier.

![WHERE condition with enclosed identifier](/assets/images/postgresql/where-condition-with-enclosed-identifier.png)
*`WHERE` condition with enclosed identifier*

#### Complex statements

Your `WHERE` condition can also contain subqueries. The following query can be used on the `users` table.

```sql
id in (select user_id from tickets where priority = 2)
```

When used in a **Delete rows** action, this will delete all rows in the `users` table where at least one associated row in the `tickets` table has a value of 2 in the `priority` column.

![Using datapills in WHERE condition with subquery](/assets/images/postgresql/use_datapill_in_where_complex.png)
*Using datapills in `WHERE` condition with subquery*
