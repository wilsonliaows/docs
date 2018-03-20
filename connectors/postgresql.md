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
