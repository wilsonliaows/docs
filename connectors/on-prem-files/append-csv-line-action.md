---
title: Workato connectors - On-prem files append line to CSV file action
date: 2018-12-04 06:00:00 Z
---

# On-prem files - Append line to CSV file

This action appends a new line to an existing CSV file. Select the CSV file and map data to each column.

Be careful not to use this action concurrently on the same CSV file from multiple recipes or with concurrency setting greater than 1. The file may be corrupted as a result.

![Append line to CSV file action](/assets/images/connectors/on-prem-files/append-csv-line-action.png)
*Append line to CSV file action*

## Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CSV file</td>
      <td>
        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the input schema of the trigger.
      </td>
    </tr>
    <tr>
      <td>Column delimiter</td>
      <td>
        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.
      </td>
    </tr>
    <tr>
      <td>Columns</td>
      <td>Columns of the selected CSV file will be available as input fields here. Map data for each column to be appended to the file.</td>
    </tr>
  </tbody>
</table>

## Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File path</td>
      <td>This is the path of the file. This path is relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
    </tr>
    <tr>
      <td>File size (bytes)</td>
      <td>Size of the file contents in bytes.</td>
    </tr>
    <tr>
      <td>Last modified time</td>
      <td>This is the last modified time of the file. This value is updated by your OS.</td>
    </tr>
  </tbody>
</table>
