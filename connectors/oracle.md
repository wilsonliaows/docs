---
title: Workato connectors - Oracle
date: 2018-02-02 06:10:00 Z
---

# Oracle
[Oracle database](https://www.oracle.com/database/index.html) is a multi-model database management system by Oracle Corporation. It can be hosted on-premise or in a private cloud.

## Supported editions
All releases of Oracle database are supported.

## How to connect to Oracle on Workato
The Oracle connector uses basic authentication to authenticate with Oracle.
![Configured Oracle connection](/assets/images/oracle/connection.png)

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
      <td>Give this Oracle connection a unique name that identifies which Oracle instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.md">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to Oracle.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to Oracle.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>URL of server where your server is hosted.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>Port number that your server is running on, typically <b>1521</b>.</td>
    </tr>
    <tr>
      <td>SID/Service name</td>
      <td>SID or Service name of your Oracle database instance you wish to connect to.</td>
    </tr>
  </tbody>
</table>

## Working with the Oracle connector

### Table, view and stored procedure
Oracle connector works with all tables, views and stored procedures. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](/assets/images/oracle/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/oracle/table_name_text.png)
*Provide exact table/view name in a text field*

Case sensitivity of the name of a table/view depends on your database implementation. The underlying OS that your database is hosted determines if you need to provide exact table/view names. Typically, database and table names are case insensitive in Windows.
