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
