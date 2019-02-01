---
title: Workato connectors - Box - New CSV file in directory
date: 2019-01-25 06:00:00 Z
---

# Box Trigger - New CSV file in directory
Triggers when a new CSV file is added to a specified folder and processes CSV lines in batches. Trigger will not pick up newly uploaded versions of the same file. Checks selected folder for CSV files every 5 minutes. CSV rows are delivered in batches of 100 by default, maximum is 50000.

## Input fields
| Field name | Description |
|---|---|
| When first started, this recipe should pick up events from. | When you start recipe for the first time, it picks up files created from specified time. Defaults to fetching files created an hour ago if left blank. Once recipe has been run or tested, value cannot be changed. [Learn more](https://docs.workato.com/recipes/triggers.html#sincefrom) |
| Folder | Monitor for new CSV files in this folder. Select from the pick list or enter folder ID. |
| Include sub-folders? | If Yes, trigger will pick up new CSV files in sub-folders as well. |
| Sample CSV file / Field names | Select a CSV file for Workato to understand the data columns in your files. Otherwise, toggle to provide column names manually. |
| Column delimiter | The character used to separate column values within each CSV row. |
| Contains header row? | Set to Yes if the first CSV row is a header row, containing column names. Workato will then not process the first row as CSV data. |
| Batch size | Number of CSV rows per batch. Instead of reading rows one by one, Workato reads a batch of CSV rows at a time to increase throughput. Modify batch size to optimize throughput. [Learn more about batch processing](https://docs.workato.com/features/batch-processing.html) |
| Expected encoding | Expected encoding of the CSV files. |

## Output fields
| Field name | Description |
|---|---|
| ID | ID of the file. |
| Name | File name. |
| Type | Type of this object, which in this case is `file`. |
| Description | Description of file. |
| Size | Size of file. |
| Shared link |  |
| - URL | Shared link URL for viewing file. |
| - Download URL | Shared link URL for downloading file. |
| Created at | Date/time file is created. |
| Modified at | Date/time file is modified. |
| Trashed at | Date/time file is trashed. |
| Purged at | Date/time file is purged. |
| Content created at | Date/time file content is created. |
| Content modified at | Date/time file content is modified. |
| Sequence ID | Position of this object in the folder hierarchy. |
| Etag | Entity tag of this object. |
| Sha 1 | SHA-1 hash value of this object. |
| Parent | Includes details about the file's parent folder. |
| - ID | ID of parent folder. |
| - Name | Name of parent folder. |
| - Type | Object type, which in this case is `folder`. |
| - Sequence ID | Position of this object in the folder hierarchy.  |
| - Etag | Entity tag of this object. |
| Path | File path. |
| Path collection | Includes details of all paths this file belongs to. |
| - Total count | Number of file paths. |
| - Entries | File path entries. |
| -- ID | ID of file path. |
| -- Name | File path. |
| -- Type | Type of file path. |
| -- Sequence ID | Position of this object in the folder hierarchy. |
| -- Etag | Entity tag of this object. |
| -- List size | Number of items in this `Entries` list. |
| Created by | Includes details about user who created this file. |
| - ID | ID of user. |
| - Name | Name of user. |
| - Type | Type of user. |
| - Login | Login email of user. |
| Modified by | Includes details about user who modified this file. |
| - ID | ID of user. |
| - Name | Name of user. |
| - Type | Type of user. |
| - Login | Login email of user. |
| Owned by | Includes details about user who owned this file. |
| - ID | ID of user. |
| - Name | Name of user. |
| - Type | Type of user. |
| - Login | Login email of user. |
| Item status | Status of this file, e.g. active. |
| First | Whether this is the first batch of CSV rows. |
| Last | Whether this is the last batch of CSV rows. |
| Rows | This is a [List data pill](https://docs.workato.com/features/list-management.html), representing the list of CSV rows. |
| - Columns | Include all data pills representing CSV columns and CSV data. |
| - Row | The row number of this row. |
| - List size | Total number of rows. |
