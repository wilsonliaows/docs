---
title: Workato connector - Google Sheets - Add rows in bulk
date: 2019-02-19 12:00:00 Z
---

# Google Sheets action - Add rows in bulk

This action adds multiple rows at the bottom of a selected sheet in Google Sheets.

## Input

First, select the drive, spreadsheet and sheet that you want to add rows into.

![Sheet selector](/assets/images/connectors/google-sheets/sheet-selector.png)

The action will then display the list of columns in the sheet. Here you can do the mappings to create multiple rows in the sheet. In this example, we map the CSV columns from Box's trigger `New CSV file in directory` into the Google sheet's columns. The action will then iterate through all rows from the Box's CSV file, then add them into the Google sheet.

![Column mappings](/assets/images/connectors/google-sheets/bulk-mappings.png)

The followings are all input fields in this action:

| Field name | Description |
|---|---|
| Google Drive | Whether you are using `My Drive` or `Team Drive`. |
| Spreadsheet | The spreadsheet that you want to add rows into. |
| Sheet | The sheet that you want to add rows into. |
| Rows source list | You need to provide a [list data pill](/features/list-management.md) here. For example, list of rows in a CSV file. The action will automatically iterate through all items in the list and create multiple Google sheet rows. |
| Rows fields | This section will display all columns in the Google sheet. Here you need to map the data pills under the list data pill provided above (e.g. CSV column names under the `CSV Rows` list data pill). The action will automatically iterate through all items in the list and create multiple Google sheet rows. |

## Output

| Field name | Description |
|---|---|
| Spreadsheet ID | ID of the spreadsheet. |
| Sheet name | Name of the sheet. |
| All rows successfully added? | Whether all rows have been successfully added. |
| Number of rows added | Number of rows that are successfully added. |
| Number of rows failed | Number of rows that are failed to be added. |
| Contents of failed rows | Contents of all failed rows are stored here. |
| List of batches | To optimize performance, this action adds rows in small batches. This data pill is a list containing all batches, which you can [iterate through](/features/list-management.md). The status of each batch is shown below:  |
| - Batch number | The order of this batch. |
| - All rows successfully added? | Whether all rows in this batch have been successfully added.  |
| - Starting row | Starting row of this batch. |
| - Ending row | Ending row of this batch. |
| - Number of rows added | Number of rows in this batch that are successfully added. |
| - Number of rows failed | Number of rows in this batch that are failed to be added. |
| - Error code | Error code if there are failed rows. |
| - Error text | Error message if there are failed rows. |
| - List size | Total number of batches. |
