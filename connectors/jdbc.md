---
title: Workato connectors - JDBC
date: 2018-04-20 06:00:00 Z
---

# JDBC


## Supported databases
All database with a JDBC driver

## How to connect to JDBC on Workato
To create a connection to a JDBC source, you **must** use an [On-premise agent](/on-prem.md). The JDBC connector uses JDBC authentication through an On-premise agent to establish a secure connection with your JDBC driver. Learn how to configure an [on-premise agent profile](/on-prem/profile.md#jdbc-connection-profile) to connect to a JDBC-compliant database.

![JDBC connection using on-premise agent](/assets/images/jdbc/connection.png)
*JDBC connection using on-premise agent*

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
      <td>Give this JDBC connection a unique name that identifies which JDBC instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.md">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>On-prem connection profile</td>
      <td>Profile name of the database you wish to connect to. This should be predefined in your <code>config.yml</code> file in your On-premise agent.</td>
    </tr>
    <tr>
      <td>Schema</td>
      <td><b>Optional</b> Name of the schema you wish to use in this connection.</td>
    </tr>
  </tbody>
</table>

## Working with the JDBC connector

### Table and view
The JDBC connector works with all tables and views available to the credentials used to establish the connection. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](/assets/images/jdbc/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/jdbc/table_name_text.png)
*Provide exact table/view name in a text field*

Case sensitivity of the name of a table/view depends on your database implementation.

### Single row vs batch of rows
JDBC connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size.

![Batch trigger inputs](/assets/images/jdbc/batch_trigger_input.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](/assets/images/jdbc/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](/assets/images/jdbc/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. The output of the trigger can be used in actions with batch operations (like Salesforce **Create objects in bulk action**) that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](/assets/images/jdbc/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax.

#### Simple statements

String values must be enclosed in single quotes (`''`) and columns used must exist in the table/view.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that has the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](/assets/images/jdbc/use_datapill_in_where.png)
*Using datapills in `WHERE` condition*

Column names with spaces must be enclosed in double quotes (`""`) or square brackets (`[]`). For example, **currency code** must to enclosed in brackets to be used as an identifier.

```sql
[currency code] = 'USD'
```

![WHERE condition with enclosed identifier](/assets/images/jdbc/where-condition-with-enclosed-identifier.png)
*`WHERE` condition with enclosed identifier*

#### Complex statements

Your `WHERE` condition can also contain subqueries. The following query can be used on the `compensation` table.

```sql
id in (select compensation_id from users where active = 0)
```

When used in a **Select rows** action, this will select all rows in the `compensation` table related to users who are no longer active (`active = 0`).

![Using subquery in WHERE condition](/assets/images/jdbc/subquery-in-where-condition.png)
*Using subquery in WHERE condition*
