---
title: Workato connectors - Snowflake Run custom SQL action
date: 2019-01-10 06:10:00 Z
---

# Snowflake - Run custom SQL action

## Run custom SQL

This action lets you send a SQL string to the Snowflake instance to be executed. It can be used to execute Data Manipulation Language (DML) statements like `INSERT`, `UPDATE`, `SELECT` and `DELETE`, as well as Data Definition Language (DDL) commands, like `CREATE`, `ALTER` and `DROP`.

Snowflake specific commands such as `COPY INTO` and `PUT` are also supported for data pipeline use cases. See the full list of [Snowflake SQL commands](https://docs.snowflake.net/manuals/sql-reference-commands.html).

This action is not optimized for easy configuration. For SELECT statements with a large number of columns, use the [Select rows using custom SQL](/connectors/snowflake/select.md#select-rows-using-custom-sql) action instead.

![Run custom SQL action](/assets/images/snowflake/run_sql.png)
*Run custom SQL action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SQL</td>
      <td>
        <p><b>This field is required</b>. Provide a valid SQL string to be executed. This SQL string will be executed in your Snowflake instance.</p>
        <p>Snowflake does not support multiple statements in a single API call. Use one SQL statement per action.</p>
        <p>You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (<code>''</code>) when string values are expected.</p>
      </td>
    </tr>
    <tr>
      <td>Output fields</td>
      <td>
        <p>Use this input to describe the columns that you are expecting from your SQL statement.</p>
        <p>If you do not expect any return values or do not need any, you may ignore this input field.</p>
      </td>
    </tr>
  </tbody>
</table>

### Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rows</td>
      <td>
        <p>List of rows returned from the SQL execution. The fields in this list are defined by the <b>Output fields</b> input field.</p>
        <p>If left blank, this row will be available in the datatree as an array datapill.</p>
      </td>
    </tr>
    <tr>
      <td>Rows affected</td>
      <td>
        <p>This is an integer value indicating the number of rows inserted/updated/deleted from the SQL string.</p>
        <p>When executing <code>SELECT</code> statements, this will return <code>nil</code>.</p>
        <p>When executing a DDL (for example, creating a table), the value <code>0</code> will be returned.</p.>
      </td>
    </tr>
  </tbody>
</table>

### Limitations

There is a size limit of `1000` rows when your custom SQL statement returns data.
