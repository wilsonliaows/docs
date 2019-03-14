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

At minimum, the database user account must be granted `SELECT` permission to the database specified in the [connection](#how-to-connect-to-sql-server-on-workato). Check out the example below to find out more about how to set permissions if you are the one setting up the SQL server connection for your business

<details><summary><b>Detailed Example</b></summary>

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

</details>

## Working with the SQL Server connector

### Using tables, views and stored procedures

After successfully connecting to your SQL Server and selecting an action/trigger in your recipe, you will often be prompted to select either a table, view or stored procedure. This tells Workato where to pull or send data to. 

#### Tables & Views
The SQL Server connector works with all tables and views. These are available in pick lists in each trigger/action or you can provide the exact name. Views can be called using this as well and be used in the same way as a table.

![Table selection from pick list](/assets/images/mssql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/mssql/table_name_text.png)
*Provide exact table/view name in a text field*

Case sensitivity of the name of a table/view depends on your database implementation. A default SQL Server is case insensitive. Databases or database objects with `CS` in the **COLLATION** indicates that it is case sensitive.

#### Stored Procedures
Stored procedures are custom written workflows that have to be written and saved within your SQL server. They are able to do a range of functionalities including creating, reading, updating and deleting rows. They can also accept parameters. Check out the details below if you want to know more about how Workato works with stored procedures.
<details><summary>Executing stored procedures in Workato</summary>
The SQL Server connector also works with all stored procedures in the connected database. Stored procedures can be triggered in recipes using our SQL Server `Execute stored procedure` action. All stored procedures in your database will be available in the pick lists the action. Stored procedures are written and stored within your SQL server

![Stored procedure selection from pick list](/assets/images/mssql/stored-procedure-view-1.png)
*Select your stored procedure from the pick list*

If applicable, you will be prompted to enter in the parameters for your stored procedure. Use this to execute store procedures based on returned datapills from your previous steps by the relevant datapills into the parameter fields.

![Store procedure input fields for parameters](/assets/images/mssql/stored-procedure-view-2.png)
*Select your stored procedure from the pick list*
</details>

### Using `WHERE` conditions

This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [SQL Server documentation](https://docs.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql) for a comprehensive list of rules for constructing `WHERE` statements. Below, we go through some of the basics needed to form your `WHERE` statements.

#### Operators 

At the foundation of any `WHERE` statement, we have operators that help us filter and identify what rows we want returned in triggers and actions in Workato. By chaining operators in the same syntax one would do it in SQL, you'll be able to use them to create robust and complex filters on your data directly from Workato. Check out the sections below on some of the supported operators on Workato that'll help if you're not already familiar with SQL.

<details><summary><b>List of operators</b></summary>
  
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
    <tr>
      <td>
        AND
      </td>
      <td>
        Requires both preceding and proceeding conditions to be fulfilled to be true
      </td>
      <td><code>WHERE ID = 445 AND NAME IS NOT NULL</code></td>
    </tr>
    <tr>
      <td>
        OR
      </td>
      <td>
        Requires either the preceding and proceeding conditions to be fulfilled to be true
      </td>
      <td><code>WHERE ID = 445 OR NAME IS NOT NULL</code></td>
    </tr>
  </tbody>
</table>
<br>
</details>

#### Data types

The other component of a `WHERE` condition would be to properly use these operators in conjunction with the proper datatypes. This means making sure you compare an integer in your table with another integer instead of a string. Failing to do so would result in unexpected behaviour or failed jobs 

Workato also helps reveal the data types expected for each input field when you select 
- **Select rows** actions
- **Update rows** actions
- **Upsert rows** actions

They appear directly below the output field, allowing you to know the expected data type to be sent while building the recipe. Use these hints to send the proper data types over to your SQL server as failing to do so might lead to unexpected behaviour or failed jobs. 

![input field hints](/assets/images/mssql/Mssql-input-field-date-type.png)
*Hints below each input field inform you about the data type expected*

Here are some of the common data types you can expect to see. A more comprehensive list can be found [here](https://www.w3schools.com/sql/sql_datatypes.asp)

<details><summary><b>List of common data types</b></summary>
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Data type</th>
        <th width='40%'>Description</th>
        <th width='40%'>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>Allows whole numbers between -2,147,483,648 and 2,147,483,647</td>
      <td><code>-100</code>,<code>1</code>,<code>30,000</code></td>
    </tr>
    <tr>
      <td>decimal</td>
      <td>Fixed precision and scale numbers that are exact. This is commonly used. Max length can be specified but defaults to </td>
      <td><code>1.11</code>,<code>2.0761</code>,<code>1.61803398875</code></td>
    </tr>
    <tr>
      <td>smallint</td>
      <td>Allows whole numbers from 0 to 255</td>
      <td><code>1</code>,<code>245</code>,<code>100</code></td>
    </tr>
    <tr>
      <td>bigint</td>
      <td>Allows whole numbers between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807</td>
      <td><code>10,000,000,000`</td>
    </tr>
    <tr>
      <td>bit</td>
      <td>Integer that can be 0, 1, or NULL</td>
      <td><code>1</code>,<code>0</code>,<code>NULL</code></td>
    </tr>
    <tr>
      <td>varchar(n)</td>
      <td><b>Variable</b> width character string of length `n`</td>
      <td><code>Foo_bar</code></td>
    </tr>
    <tr>
      <td>nchar(n)</td>
      <td><b>Fixed</b> width character string of length `n`</td>
      <td><code>Foo</code> where n = 3</td>
    </tr>
    <tr>
      <td>datetime</td>
      <td>From January 1, 1753 to December 31, 9999 with an accuracy of 3.33 milliseconds</td>
      <td><code>2011-09-16 13:23:18.767</code></td>
    </tr>
    <tr>
      <td>datetime2</td>
      <td>From January 1, 0001 to December 31, 9999 with an accuracy of 100 nanoseconds</td>
      <td><code>2011-09-16 13:23:18.7676720</code></td>
    </tr>
    <tr>
      <td>date</td>
      <td>Store a date only. From January 1, 0001 to December 31, 9999</td>
      <td><code>2012-10-11</code></td>
    </tr>
    <tr>
      <td>time</td>
      <td>Store a time only to an accuracy of 100 nanoseconds. Minimum length `hh:mm:ss` and maximum length `hh:mm:ss.nnnnnnnn`</td>
      <td><code>08:30:12</code>,<code>09:12:20.12898400</code></td>
    </tr>
  </tbody>
</table>
</details>

#### Writing `WHERE` conditions

Now that we've gone through operators and data types, we are ready to write our `WHERE` conditions. String values must be enclosed in single quotes (`''`) and columns used must exist in the table/view.

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

Check out the details below for more functionality you can explore with your `WHERE` conditions. 

<details><summary>Using <code>AND</code> and <code>OR</code> in your <code>WHERE</code> conditions</summary>
`WHERE` conditions can also be used in conjunction with basic SQL logical operators like <code>AND</code> and <code>OR</code> to add more filters on the rows you return.

```sql
([currency code] = 'USD' AND totalAmt >1000) OR totalAmt>2000
```

When used together,  this `WHERE` condition will return all rows that either have the value 'USD' in the `currency code` column **AND** more than 1000 in the `totalAmt` column **OR** more than 2000 in the `totalAmt` column
</details>

<details><summary>Using sub-queries in your <code>WHERE</code> conditions</summary>

Your `WHERE` condition can also contain subqueries. The following query can be used on the `compensation` table.

```sql
id in (select compensation_id from users where active = 0)
```

When used in a **Delete rows** action, this will delete all rows in the `compensation` table related to users who are no longer active (`active = 0`).

![Using subquery in WHERE condition](/assets/images/mssql/subquery-in-where-condition.png)
*Using subquery in WHERE condition*

</details>

### Configuring triggers

SQL Server connector has triggers for both new and updated rows. For the trigger to work, both **Unique key** and **Sort column** must be configured.

A table must satisfy some constraints to be used in a trigger. The following sections contain more information about specific constraints.

#### Unique key
In all triggers and some actions, this is a required input. Values from this selected column are used to uniquely identify rows in the selected table. As such, the values in the selected column must be unique. Typically, this column is the **primary key** of the table (e.g. `ID`).

When used in a trigger, this column must be incremental. This constraint is required because the trigger uses values from this column to look for new rows. In each poll, the trigger queries for rows with a unique key value greater than the previous greatest value.

<details><summary><b>Example</b></summary>
Let's use a simple example to illustrate this behavior. We have a <b>New row trigger</b> that processed rows from a table. The <b>unique key</b> configured for this trigger is `ID`. The last row processed has `100` as it's `ID` value. In the next poll, the trigger will use `>= 101` as the condition to look for new rows.
Performance of a trigger can be improved if the column selected to be used as the <b>unique key</b> is indexed. 
</details>

#### Sort column
This is required for **New/updated row triggers**. Values in this selected column are used to identify updated rows.

When a row is updated, the **Unique key** value remains the same. However, it should have it's **Sort column** updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected **Unique key** column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

For SQL Server, only **datetime2** and **datetime** column types can be used.

<details><summary><b>Detailed Example</b></summary>
Let's use a simple example to illustrate this behavior. We have a **New/updated row trigger** that processed rows from a table. The **Unique key** and **Sort column** configured for this trigger is `ID` and `UPDATED_AT` respectively. The last row processed by the trigger has `ID` value of `100` and `UPDATED_AT` value of `2018-05-09 16:00:00.000000`. In the next poll, the trigger will query for new rows that satisfy either of the 2 conditions:
1. `UPDATED_AT > '2018-05-09 16:00:00.000000'`
2. `ID > 100 AND UPDATED_AT = '2018-05-09 16:00:00.000000'`
</details>

### Using single row actions/triggers vs using batch of rows actions/triggers
SQL Server connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size. Batch triggers and actions are great for jobs when you expect to read, create or update a large number of rows. Choosing to batch your job runs rather than having them split into separate jobs runs not only saves operations but [reduces recipe runtimes and decreases load on your servers](/features/batch-processing.md). 

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

Outputs from batch triggers/actions can also be used outside of actions that work specifically with lists. By using Workato's repeat step, you'll be able to control batch outputs and [use them with any action built for single rows.](/features/list-management.md#using-datapills-in-an-action-with-a-repeat-step-action-does-not-handle-list-processing-list-processing-needs-to-be-done-explicitly-at-the-recipe-logic-level)

### Best practices when using SQL server
We compiled a few of our best practices that make your life easier when developing workflows with Workato. Read more to learn some crucial tips that result in less bugs and time wasted.

#### When to use batch of rows triggers/actions vs single row triggers/actions
While single row triggers/actions can almost always accomplish the same functionality as batch triggers/actions and vice versa, ultimately the decision to use one or the other becomes a matter of business requirements. Whilst batch actions offer the ability to improve time efficiency of recipe, reduce the number of operations required per run and load on servers, there exists a trade-off between the flexibility since batch actions that do fail, fail on a batch level. 

When examined, most workflows with applicable batch triggers/actions can be accomplished in 3 ways:
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='30%'>Method</th>
        <th width='70%'>Benefits/Drawbacks</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>The use of a batch trigger, followed by a batch action and using Workato's repeat step for any single row actions.</td>
      <td>Using this method is the most efficient across all metrics. Since Workato employs a step-by-step (Synchronous) process within each job run so any error that causes the run to stop also prevents the following steps from being executed for the entire batch. In some cases, this could be useful behaviour where we would want to fix our recipe before letting it run on to further steps. To strike a balance between efficiency and stopping too many records from being process during a failed job run, toggle the batch size setting.
        <details><summary><u>Business use case example</u></summary>
        If we were to pull batchs of new leads from a SQL server for batch inserts into Salesforce, we could follow this up with emails to individuals on the sales team with links to the leads newly created on Saleforce directly. In cases where our information flowing in raised an error during the batch insert action, no email would be sent out to our sales team with links that didnt work! We can now safely make adjustments to our recipe to accomodate this error before repeating the job.
        </details>
     </td>
    </tr>
       <td>The use of a single row trigger, followed by a single row actions</td>
      <td>Using this method is the least efficient across all metrics, especially for triggers/actions that work with large numbers of records. Workato employs a step-by-step (Synchronous) process within each job run so any error that causes the run to stop also prevents the following steps from being executed. In some cases, this could be useful behaviour where we would want to fix our recipe before letting it run on to further steps and yet remains different from the batch trigger version as it only stops the job runs for those that raise errors. In time sensitive business use cases where all new rows should be processed as soon as possible, this might be the best design choice.
        <details><summary><u>Business use case example</u></summary>
        For time sensitive job runs such as new rows in a SQL server table indicating new orders, the following actions may be crucial in ensuring the timely delivery of your product to your customer. Having entire batches of orders be stopped due to a single failed record may result in lost revenue for you. In this scenario, single row triggers/actions may be the best way to minimise disruptions to your company's operations.
        </details>
     </td>
    </tr>
    </tr>
       <td>The use of a batch trigger, followed by all required batch actions. A separate recipes can be used with a single row action and single row actions.</td>
      <td>Using this method is allows records to be process concurrently. This allows errors to be contained at a recipe level and only affect the steps that follow after it. In cases where steps are independent of each other and one need not be completed before the other can begin, this might be the best solution.
        <details><summary><u>Business use case example</u></summary>
        New records in a table signify new customer sign ups for a free trial for your product. With this trigger in mind, you hope to add them in batches to a drip campaign as well as send their details individually over to your sales team for followups. As both cases need not be dependent on each other and both can be accomplished without diminishing the others effectiveness, this workflow could be accomplished as separate recipes.
        </details>
     </td>
    </tr>
  </tbody>
</table>


#### Using custom SQL in Workato
Workato allows you to write your own custom SQL queries in 2 ways:
1. [Using our `Select rows using custom SQL` action](/connectors/mssql/select.md#select-rows-using-custom-sql) (Recommended for **only** select queries)
2. [Using our `Run custom SQL` action](/connectors/mssql/run_sql.md)

With these custom SQL queries, you can do a wide range of create, read, update and delete actions on your SQL server. Since writing your own queries might get messy, remember manage your step output by giving your returned columns **meaningful aliases** and **only returning the columns that you need**. This makes maintaining your recipe easier and more readable for others as well.

Also remember not to end your `Select rows using custom SQL` action with a `;` as this would cause it to error out.

#### Preparing a table for use in Workato
When looking to make triggers using our `New row` and `New/updated row` triggers, trigger configurations require either the use of a unique key or unique key and sorted column to enable Workato to ensure your trigger doesn't miss out on any records. Not all tables that you encounter may be ready to be used as a trigger so here are some best practices to prepare your table for use in Workato.

**Unique keys**
1. An auto incrementing unique integer key should be present in the table that can act as your unique key. In most cases where your table's `primary` key is set to be auto incrementing, this is usable. 
2. When this is not the case, an auto incrementing unique integer key can be created to accomplish 
  * Finding a proxy key that is an integer, unique and auto incrementing
  * Creating a new auto incrementing unique integer key
  <details><summary><b> How to create an auto incrementing key in SQL server</b> </summary>
      1. Make sure no other column has been declared as an `IDENTITY` column in your table. (if this has been done so, you may use that directly as your unique interger key
      2. Enter the following commands to create an new `IDENTITY` column
  ```sql
ALTER TABLE yourTable
ADD yourAutoIncrementUniqueKey INT UNIQUE NOT NULL IDENTITY ;
```
      3. After this, you should be able to use your new key as a unique column!
      4. Creating a new `IDENTITY` column in SQL server backfills all your previous records. Take note of the initial recipe run!
  </details>

**Sort column**
1. Tables that have `updated_at` columns within them should be suitable as the sort column. 
2. Failing that, any column that can be sorted based on the time the record was updated can be used.
3. If no column is suitable, an `updated_at` column can be created to fulfill this purpose.
<details><summary><b> How to create an <code>updated_at</code> column</b> </summary>
      1. Enter the following commands to create an <code>updated_at</code> column
```sql
ALTER TABLE yourTable
add updatedAt datetime2
CONSTRAINT DF_myTable_updatedAt DEFAULT GETDATE()
```
      2. After this, now we need to add this column to trigger and update whenever a record is changes
```sql
create trigger trg_myTable_update on yourTable for update as
begin
  update yourTable
	set updatedAt = getDate()
	from yourTable inner join deleted d
	on yourTable.id=d.id
end
```
      4. This new <code>updated_at</code> column in SQL server can now be used as an sort column
  </details>

