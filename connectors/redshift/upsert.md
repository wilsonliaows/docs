---
title: Workato connectors - Redshift Upsert actions
date: 2018-05-06 06:00:00 Z
---

# Redshift - Upsert actions

## Upsert row
This action upserts a single row into the selected table.

![Upsert row action](/assets/images/redshift/upsert-row-action.png)
*Upsert row action*

### Table
First, select a table to upsert rows in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Columns
Columns in the selected table are then presented as input fields here. Map the required fields from the output datatree here to upsert a row with data from preceding trigger or actions.

#### Unique key
Unique key values will be used to determine whether an update or an insert is executed in your Redshift database. If the unique key value of the given set of values exists in your table, that row will be updated with the values provided. In the absence of a row with the unique key value, a new row will be inserted with the values provided.
