---
title: Workato connectors - Redshift Update actions
date: 2018-05-06 06:00:00 Z
---

# Redshift - Update actions

## Update rows
This action updates one or more rows with a single set of values. It uses a `WHERE` condition to select the row(s) to perform the update.

![Update row(s) action](/assets/images/redshift/update-row-action.png)
*Update row(s) action*

### Table
First, select a table to update. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be updated. This condition can be as simple as filtering a single record to update based on `ID`.

```sql
id = 123
```

Alternatively, it can be used to select and update multiple rows.

```sql
status = 'closed'
```

Take note that all rows matching this criteria will be updated with the same values provided in **Columns** input.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/redshift.md#where-condition) guide for more information.

### Columns
Lastly, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to insert datapills.

## Update batch of rows
This action allows you to update multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to Redshift. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.

![Update batch of rows action](/assets/images/redshift/update_rows_batch_action.png)
*Update batch of rows action*

### Table
Just like with the single row update action, you need to select the target table first.

### Rows source list
Unlike the **Update row** action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the *source* of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.

![A list datapill from the datatree](/assets/images/redshift/list_datapill_in_output_tree.png)
*A list datapill from the datatree*

If you do not map a list datapill to this field, this action will update only 1 row and will behave like the **Update row** action.

### Columns
Finally, you will need to map the required fields from the output datatree here to update rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.

### Unique key
Use this input field to determine which field to use to identify unique rows. This is an optional field. If left blank, primary keys in the selected table will be used to match. If you with to use columns other than the primary key, or inclusive of it, select all relevant columns in this input field.

Refer to the [List management](/features/list-management.md) guide for more information about working with batches.
