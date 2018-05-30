---
title: Workato connectors - ServiceNow search records action
date: 2018-05-30 06:00:00 Z
---

# ServiceNow - Search records action

## Search records
This action lets you search for rows from any table matching a search criteria. Records that match all your search criteria will be returned as a list of records.

![Search records action](/assets/images/connectors/servicenow/search-records-action.png)
*Search records action*

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
        Select a table to pick up new records from.
      </td>
    </tr>
    <tr>
      <td><a href="#columns-to-search-by">Columns to search by</a></td>
      <td>
        Provide data to match records. Only records that match all the search criteria will be returned in the output.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action is a list of records that match your search criteria. The output datatree contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

## Input field definitions

### Table
Select the table to process records from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

Make sure that the user used in the connection has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected table.

### Columns to search by
Search criteria to match records against in the selected table. This action will only return records that match all your search criteria. Maximum size of batch of records returned is **100**.

You can search using all standard and custom columns in the selected table.
