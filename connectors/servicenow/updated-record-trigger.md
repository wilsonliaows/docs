---
title: Workato connectors - ServiceNow new/updated record triggers
date: 2018-05-30 06:00:00 Z
---

# ServiceNow - New/updated record triggers

## New/updated record
This trigger picks up records that are created/updated in the selected table. Each record is processed as a separate job. It checks for new/updated records once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated record trigger](/assets/images/connectors/servicenow/updated-record-trigger.png)
*New/updated record trigger*

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
      <td><a href="#unique-key">From</a></td>
      <td>
        Records created/updated from this time will be processed by the recipe. If left blank, the trigger will only pick up records created/updated <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to pick up new/updated records from.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this trigger is a full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

## New/updated record (real-time)
This trigger picks up records in the selected table as soon they are created/updated. Each record is processed as a separate job. It makes use of business rules to detect and trigger a new/updated record event to be processed.

**To use this trigger, the connected user must have sufficient access control to sys_script table. Learn how to configure it [here](/connectors/servicenow.md#real-time-trigger).**

![New/updated record trigger](/assets/images/connectors/servicenow/updated-record-trigger-real-time.png)
*New/updated record trigger*

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
      <td><a href="#unique-key">From</a></td>
      <td>
        Records created/updated from this time will be processed by the recipe. If left blank, the trigger will only pick up records created/updated <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to pick up new/updated records from.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this trigger is a full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

## Input field definitions

### From
This is a user-defined time that marks the earliest time that the trigger should pick up created/updated records. If left blank, the trigger will only pick up records created/updated <b>one day</b> before the recipe is first started.

The **sys_updated_on** column is used to determine the time that a record is created/updated. Only records with **sys_updated_on** timestamp later than the time specified in **From** will be processed by the trigger.

### Table
Select the table to process records from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

Make sure that the user used in the connection has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected table.
