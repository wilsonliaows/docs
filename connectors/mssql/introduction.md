---
title: Workato connectors - Introduction
date: 2018-03-13 12:40:00 Z
---
# SQL Server
[SQL Server](https://www.microsoft.com/en-us/sql-server/) is a relational database management system by Microsoft. It supports transactional processes, business intelligence and analytics applications for enterprises.

## Supported versions
All versions of SQL Server are supported. However, some triggers/actions are restricted to newer versions. Refer to individual trigger/action documentation to find out.

## How to connect to SQL Server on Workato
The SQL Server connector uses basic authentication to authenticate with SQL Server.
![Configured SQL Server connection](/assets/images/mssql/connection.png)

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
      <td>Give this SQL Server connection a unique name that identifies which SQL Server instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.md">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to SQL Server.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to SQL Server.</td>
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
      <td>Name of the SQL Server database you wish to connect to.</td>
    </tr>
    <tr>
      <td>Azure SQL</td>
      <td>Choose 'Yes' if connecting to an Azure SQL instance.</td>
    </tr>
  </tbody>
</table>

### Permissions required to connect 

At minimum, the database user account must be granted `SELECT` permission to the database specified in the [connection](#how-to-connect-to-sql-server-on-workato).

If we are trying to connect to a named database (`HR_PROD`) in a SQL Server instance, using a new database user `workato`, the following example queries can be used.

First, create a new login and user dedicated to integration use cases with Workato.
```sql
CREATE LOGIN workato WITH PASSWORD = 'password1234';
USE HR_PROD;
CREATE USER workato FOR LOGIN workato;
```
Replace `password1234` with a secure password. Remember to set a password that you and others in your organisation can remember.

This allows the user to have login access to the SQL Server instance. However, this user will not have access to any tables.

The next step is to grant permission to the necessary tables. There are a few ways to do this. One of the simplest ways is to grant access based on a **ROLE**.

```sql
ALTER ROLE db_datareader ADD MEMBER workato;
```

Alternatively, we can grant access to all tables defined by a **SCHEMA**, `HR`.

```sql
GRANT SELECT,INSERT ON SCHEMA :: HR TO workato;
```

To grant permissions only for certain tables, specify their table names separately and run this query.
```sql
GRANT SELECT,INSERT ON tablename1 TO workato;
GRANT SELECT,INSERT ON tablename2 TO workato;
```
Granting selective permission are useful for databases that have sensitive information. Only give Workato access to the tables that contain the information you need for recipes.

Finally, check that this user has the necessary permissions. Run a query to see all permissions.

```sql
SELECT
  pr.name,
  pr.type_desc,
  perm.permission_name,
  perm.class_desc,
  object_name(perm.major_id) AS "object",
  schema_name(perm.major_id) AS "schema"
FROM sys.database_principals pr
LEFT JOIN sys.database_permissions perm ON perm.grantee_principal_id = pr.principal_id
WHERE pr.name = 'workato';
```

This should return the following minimum permission to create a SQL Server connection on Workato.

```
+---------+-----------+-----------------+------------+--------+-------------+
| name    | type_desc | permission_name | class_desc | object | schema      |
+---------+-----------+-----------------+------------+--------+-------------+
| workato | SQL_USER  | CONNECT         | DATABASE   | NULL   | NULL        |
| workato | SQL_USER  | INSERT          | SCHEMA     | NULL   | workatodemo |
| workato | SQL_USER  | SELECT          | SCHEMA     | NULL   | workatodemo |
+---------+-----------+-----------------+------------+--------+-------------+
3 rows in set (0.20 sec)
```

## Working with the SQL Server connector

### Tables, views and stored procedures

#### Tables & Views
The SQL Server connector works with all tables and views. These are available in pick lists in each trigger/action or you can provide the exact name. Views can be called using this as well and be used in the same way as a table.

![Table selection from pick list](/assets/images/mssql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/mssql/table_name_text.png)
*Provide exact table/view name in a text field*

Case sensitivity of the name of a table/view depends on your database implementation. A default SQL Server is case insensitive. Databases or database objects with `CS` in the **COLLATION** indicates that it is case sensitive.

#### Stored Procedures
The SQL Server connector also works with all stored procedures in the connected database. Stored procedures can be triggered in recipes using our SQL Server `Execute stored procedure` action. All stored procedures in your database will be available in the pick lists the action.

![Stored procedure selection from pick list](/assets/images/mssql/stored-procedure-view-1.png)
*Select your stored procedure from the pick list*

If applicable, you will be prompted to enter in the parameters for your stored procedure. Use this to execute store procedures based on returned datapills from your previous steps by the relevant datapills into the parameter fields.

![Store procedure input fields for parameters](/assets/images/mssql/stored-procedure-view-2.png)
*Select your stored procedure from the pick list*

### Single row vs batch of rows
SQL Server connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size. Batch triggers and actions are great for jobs when you expect to read, create or update a large number of rows. Choosing to batch your job runs rather than having them split into separate jobs runs not only saves tasks but [reduces recipe runtimes and decreases load on your servers](/features/batch-processing.md). 

![Batch trigger inputs](/assets/images/mssql/batch_trigger_input.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](/assets/images/mssql/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](/assets/images/mssql/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. This [recipe](https://www.workato.com/recipes/666198) uses a batch trigger for new rows in the `users` table. The output of the trigger is used in a Salesforce bulk upsert action that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](/assets/images/mssql/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [SQL Server documentation](https://docs.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql) for a comprehensive list of rules for constructing `WHERE` statements. Below, we go through some of the basics needed to form your `WHERE` statements.

#### Operators

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
      <td>Pattern matching with wildcard characters (<code>%</code> to represent zero or more characters and <code>&#95</code> to represent a single character)</td>
      <td><code>WHERE EMAIL LIKE '%@workato.com'</code></td>
    </tr>
    <tr>
      <td>BETWEEN</td>
      <td>Retrieve values with a range</td>
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

String values must be enclosed in single quotes (`''`) and columns used must exist in the table/view.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that has the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs. 

![Using datapills in WHERE condition](/assets/images/mssql/use_datapill_in_where.png)
*Using datapills in `WHERE` condition*

Column names with spaces must be enclosed in double quotes (`""`) or square brackets (`[]`). For example, **currency code** must to enclosed in brackets to be used as an identifier.

```sql
[currency code] = 'USD'
```

![WHERE condition with enclosed identifier](/assets/images/mssql/where-condition-with-enclosed-identifier.png)
*`WHERE` condition with enclosed identifier*

`WHERE` conditions can also be used in conjunction with basic SQL logical operators like `AND` and `OR` to add more filters on the rows you return.

```sql
([currency code] = 'USD' AND totalAmt >1000) OR totalAmt>2000
```

When used together,  this `WHERE` condition will return all rows that either have the value 'USD' in the `currency code` column **AND** more than 1000 in the `totalAmt` column **OR** more than 2000 in the `totalAmt` column

#### Complex statements

Your `WHERE` condition can also contain subqueries. The following query can be used on the `compensation` table.

```sql
id in (select compensation_id from users where active = 0)
```

When used in a **Delete rows** action, this will delete all rows in the `compensation` table related to users who are no longer active (`active = 0`).

![Using subquery in WHERE condition](/assets/images/mssql/subquery-in-where-condition.png)
*Using subquery in WHERE condition*

### Trigger configuration

SQL Server connector has triggers for both new and updated rows. For the trigger to work, both **Unique key** and **Sort column** must be configured.

A table must satisfy some constraints to be used in a trigger. The following sections contain more information about specific constraints.

<details><summary><h4>Unique key</h4></summary>
In all triggers and some actions, this is a required input. Values from this selected column are used to uniquely identify rows in the selected table.

As such, the values in the selected column must be unique. Typically, this column is the <b>primary key</b> of the table (e.g. `ID`).





</details>







When used in a trigger, this column must be incremental. This constraint is required because the trigger uses values from this column to look for new rows. In each poll, the trigger queries for rows with a unique key value greater than the previous greatest value.

Let's use a simple example to illustrate this behavior. We have a **New row trigger** that processed rows from a table. The **unique key** configured for this trigger is `ID`. The last row processed has `100` as it's `ID` value. In the next poll, the trigger will use <var>>= 101</var> as the condition to look for new rows.

Performance of a trigger can be improved if the column selected to be used as the <b>unique key</b> is indexed. 

</details>





<details>
<summary>What is an index and how do I index a key?</summary>
    <br>
    All primary keys in SQL server are immediately defined as unique and are indexed by default. <b>Uniqueness</b> means there are no other records with the same primary key and <b>indexed</b> means these primary keys are sorted. This makes searching for rows very easy as the whole table needn't be scanned to find all relevant rows.
    <br>
    To index other keys that are not primary key's

#### Sort column

This is required for **New/updated row triggers**. Values in this selected column are used to identify updated rows.

When a row is updated, the **Unique key** value remains the same. However, it should have it's **Sort column** updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected **Unique key** column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

Let's use a simple example to illustrate this behavior. We have a **New/updated row trigger** that processed rows from a table. The **Unique key** and **Sort column** configured for this trigger is `ID` and `UPDATED_AT` respectively. The last row processed by the trigger has `ID` value of `100` and `UPDATED_AT` value of `2018-05-09 16:00:00.000000`. In the next poll, the trigger will query for new rows that satisfy either of the 2 conditions:
1. `UPDATED_AT > '2018-05-09 16:00:00.000000'`
2. `ID > 100 AND UPDATED_AT = '2018-05-09 16:00:00.000000'`

For SQL Server, only **datetime2** and **datetime** column types can be used.
