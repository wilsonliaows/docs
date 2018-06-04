---
title: Workato connectors - ServiceNow new record triggers
date: 2018-05-30 06:00:00 Z
---

# ServiceNow - New record triggers

## New record
This trigger picks up records that are created in the selected table. Each record is processed as a separate job. It checks for new records once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New record trigger](/assets/images/connectors/servicenow/new-record-trigger.png)
*New record trigger*

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
      <td><a href="#from">From</a></td>
      <td>
        Records created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to pick up new records from.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

![Output fields](/assets/images/connectors/servicenow/extended-output.gif)
*Output fields*

## New record (real-time)
This trigger picks up records in the selected table as soon they are created. Each record is processed as a separate job. It makes use of business rules to detect and trigger a new record event to be processed.

**To use this trigger, the connected user must have sufficient access control to sys_script table. Learn how to configure [access control for real time triggers](/connectors/servicenow.md#real-time-trigger).**

![New record trigger](/assets/images/connectors/servicenow/new-record-trigger-real-time.png)
*New record trigger*

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
        Records created after this time will be processed by the recipe.  If left blank, the default time will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to pick up new records from.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

## Input field definitions

### From
This is a user-defined time that marks the earliest time that the trigger should pick up created records.  If left blank, the default time will be set to <b>one day</b> before the recipe is first started.

The **Created (sys_created_on)** column is used to determine the time that a record is created. Only records with **Created (sys_created_on)** timestamp later than the time specified in **From** will be processed by the trigger.

![Created (sys_created_on) timestamp](/assets/images/connectors/servicenow/sys-created-on.png)
*Created (sys_created_on) timestamp*

### Table
Select the table to process records from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

Make sure that the user used in the connection has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected table.
