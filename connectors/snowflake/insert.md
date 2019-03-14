---
title: Workato connectors - Snowflake Insert actions
date: 2018-02-02 06:10:00 Z
---

# Snowflake - Insert actions

## Insert row
This action inserts a single row into the selected table.

![Insert row action](/assets/images/snowflake/insert-row-action.png)
*Insert row action*

### Table
First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name. Snowflake is case insensitive so you do not need to be precise with the case.

### Columns
Next, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to map datapills.

Data mapped into these fields will be inserted into the table when this action runs in a job.
