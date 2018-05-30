---
title: Workato connectors - ServiceNow create record actions
date: 2018-05-30 06:00:00 Z
---

# ServiceNow - Create record actions

## Create record
This action creates a single row into any table in your ServiceNow instance.

![Create record action](/assets/images/connectors/servicenow/create-record-action.png)
*Create record action*

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
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to create a record in.
      </td>
    </tr>
    <tr>
      <td><a href="#columns-to-be-added">Columns to be added</a></td>
      <td>
        Provide data for each column of the record to be created.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action is the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

## Create record using a template
This action creates a single row into any table in your ServiceNow instance by applying a template to the newly created record. Using a template simplifies the process of creating new records by populating fields automatically.

![Create record using a template action](/assets/images/connectors/servicenow/create-record-using-template-action.png)
*Create record using a template action*

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
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to create a record in.
      </td>
    </tr>
    <tr>
      <td><a href="#template">Template</a></td>
      <td>
        Select a template associated with the selected table.
      </td>
    </tr>
    <tr>
      <td><a href="#override-template">Override template</a></td>
      <td>
        Choose whether you want to override the default template values with the data provided in <b>Columns to be added</b>.
      </td>
    </tr>
    <tr>
      <td><a href="#columns-to-be-added">Columns to be added</a></td>
      <td>
        Provide data for each column of the record to be created.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action is the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

Additionally, the sys ID of the template applied to this record is also included in the output.

## Input field definitions

### Table
Select the table to create a record in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

Make sure that the connected user has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected table.

### Template
Select the template to be applied to the newly created record. This can be done either by selecting a template from the pick list, or toggling the input field to text mode and providing the template sys ID. This template must be associated with the selected table.

Make sure that the connected user has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected template.

### Override template
Choose if you wish to override the pre-defined template values that will be automatically applied to the newly created record. If **Yes** is selected, any data provided in the action that conflicts with template default value will have priority. This field defaults to **No**.

### Columns to be added
Provide data for every column that needs to be filled for the record create in the selected table. This can be done by mapping datapills from previous triggers or actions into the respective columns.
