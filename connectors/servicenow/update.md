---
title: Workato connectors - ServiceNow update record actions
date: 2018-05-30 06:00:00 Z
---

# ServiceNow - Update record actions

## Update record
This action updates a single record into any table in your ServiceNow instance.

![Update record action](/assets/images/connectors/servicenow/update-record-action.png)
*Update record action*

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
        Select a table to update a record in.
      </td>
    </tr>
    <tr>
      <td><a href="#sys-id">Sys ID</a></td>
      <td>Sys ID of the record to be updated.</td>
    </tr>
    <tr>
      <td><a href="#columns-to-be-updated">Update record values</a></td>
      <td>
        Provide data for each column of the record to be updated.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output datatree of this action contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

![Output fields](/assets/images/connectors/servicenow/extended-output.gif)
*Output fields*

## Update record using a template
This action updates a single record into any table in your ServiceNow instance by applying a template to the record.

After a template is chosen, you can map additional datapills to the record. The template values will be applied on top of your mapping. You can choose to retain or override the template values in this action.

![Update record using a template action](/assets/images/connectors/servicenow/update-record-using-template-action.png)
*Update record using a template action*

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
        Select a table to update a record in.
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
        Choose whether you want to override the default template values with the data provided in <b>Update record values</b>.
      </td>
    </tr>
    <tr>
      <td><a href="#sys-id">Sys ID</a></td>
      <td>Sys ID of the record to be updated.</td>
    </tr>
    <tr>
      <td><a href="#update-record-values">Update record values</a></td>
      <td>
        Provide data for each column of the record to be updated.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output datatree of this action contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

Additionally, the sys ID of the template applied to this record is also included in the output.

## Input field definitions

### Table
Select the table to update a record in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

Make sure that the connected user has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected table.

### Template
Select the template to be applied to the newly updated record. This can be done either by selecting a template from the pick list, or toggling the input field to text mode and providing the template sys ID. This template must be associated with the selected table.

Make sure that the connected user has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected template.

### Override template
You can choose to override the pre-defined template values that will be automatically applied to the record. If **Yes** is selected, any data provided for columns will be applied instead of template default values. This field defaults to **No**.

### Sys ID
Sys ID of the record to be updated. The record associated with this sys ID must belong to the selected table.

### Update record values
Provide data for every column that needs to be filled for the record update in the selected table. This can be done by mapping datapills from previous triggers or actions into the respective columns.
