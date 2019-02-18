---
title: Workato connectors - Snowflake Bulk Load
date: 2019-01-10 06:10:00 Z
---

# Snowflake - Bulk Load from external stage action

Load a file from an external stage Amazon S3 bucket as an external source into a target table. This action uses the [COPY](https://docs.snowflake.net/manuals/sql-reference/sql/copy-into-table.html#output) command to load data directly from an external source to a target table.

This action will execute the load and wait for completion before moving onto the next step. Load time depends on the size of source file, number of columns, additional validation in the target table and network speed (faster if loading data from S3 to an AWS-deployed Snowflake instance). **1 GB** CSV file with **30 columns** and **3 million rows** will take 60 seconds.

The source file can contain data in CSV format, JSON, PARQUET and [other semi-structured file types](https://docs.snowflake.net/manuals/sql-reference/sql/copy-into-table.html#format-type-options-formattypeoptions).

## Load data from an Amazon S3 bucket to a table

![Bulk Load from Amazon S3 action](/assets/images/snowflake/bulk-load-s3.png)
*Bulk Load from Amazon S3 action*

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
      <td>Table</a></td>
      <td>
        Select a target table to load data into. Typically, this is a staging table for loading data. Subsequently, rows in this table is merged into your production table.
      </td>
    </tr>
    <tr>
      <td>Stage</td>
      <td>
        <p>Select an existing external stage that points to an Amazon S3 bucket. If a file is not specified in this stage, all new files will be loaded. This external stage contains information about file location, AWS credentials, encryption and file format details.</p>
        <p>Learn how to create an <a href="https://docs.snowflake.net/manuals/user-guide/data-load-s3-create-stage.html">S3 external stage</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

### Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bucket URL</td>
      <td>Relative path and name of the source file.<br>Example: <b>s3://bucket-name/parent_folder/file_name.csv</b></td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        <table class="unchanged rich-diff-level-one">
          <thead>
            <tr>
              <th>Values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LOADED</td>
              <td>All rows successfully loaded.</td>
            </tr>
            <tr>
              <td>LOAD FAILED</td>
              <td>Unsuccessful load. Entire data file was not loaded.</td>
            </tr>
            <tr>
              <td>PARTIALLY LOADED</td>
              <td>Unsuccessful load. Data file was partially loaded. Use <b>First error line</b> to find out exactly where the load failed.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Rows parsed</td>
      <td>Number of rows read from the source file.</td>
    </tr>
    <tr>
      <td>Rows loaded</td>
      <td>Number of rows successfully loaded from the source file into target table.</td>
    </tr>
    <tr>
      <td>Error limit</td>
      <td>If the number of errors reaches this limit, then abort the load. This is typically <b>0</b>, meaning that the load will abort on the first error.</td>
    </tr>
    <tr>
      <td>Errors seen</td>
      <td>Number of rows with error in the source file.</td>
    </tr>
    <tr>
      <td>First error</td>
      <td>Error details of the first error in the source file.</td>
    </tr>
    <tr>
      <td>First error line</td>
      <td>Line number of the first row that caused an error.</td>
    </tr>
    <tr>
      <td>First error character</td>
      <td>Position of the first character that caused an error.</td>
    </tr>
    <tr>
      <td>First error column name</td>
      <td>Column name where the first error occurred.</td>
    </tr>
  </tbody>
</table>
