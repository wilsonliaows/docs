---
title: Workato connectors - PostgreSQL Run custom SQL action
date: 2018-09-20 06:10:00 Z
---

# PostgreSQL - Run custom SQL action

## Run custom SQL

This action lets you send a SQL string to the PostgreSQL instance to be executed. It can be used to execute Data Manipulation Language (DML) statements like `INSERT`, `UPDATE`, `SELECT` and `DELETE`, as well as Data Definition Language (DDL) commands, like `CREATE`, `ALTER` and `DROP`.

Unlike [Select rows using custom SQL](/connectors/postgresql/select.md#select-rows-using-custom-sql), this action is not optimized for easy configuration. For `SELECT` statements with large number of columns, use that action instead.

**This action requires a connection using OPA version 2.4.3 or newer.**

![Run custom SQL action](/assets/images/postgresql/run_sql.png)
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
        <p><b>This field is required</b>. Provide a valid SQL string to be executed. This SQL string will be executed in your PostgreSQL instance.</p>
        <p>If multiple SQL statements are provided, all of them will be executed. However, only results from the first statement will be returned. Make sure each statement is separated by a <code>;</code> character.</p>
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
        <p>List of rows returned from the SQL execution. The fields in this list is defined by the <b>Output fields</b> input field.</p>
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
