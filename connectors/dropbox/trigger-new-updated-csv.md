---
title: Workato connector - Dropbox - New/updated CSV file in directory
date: 2019-01-31 06:00:00 Z
---

# Dropbox trigger - New/updated CSV file in directory
Triggers when a new CSV file is added or existing CSV file is updated in a specified folder. New and updated CSV files in subfolders will also be picked up.

Checks selected folder for new/updated CSV files every 5 minutes.

## Input fields

| Field name | Description |
|---|---|
| When first started, this recipe should pick up events from | When you start recipe for the first time, it picks up CSV files modified from this specified date and time. Defaults to fetching CSV files created/updated an hour ago if left blank. Once recipe has been run or tested, value cannot be changed. [Learn more about this field here.](https://docs.workato.com/recipes/triggers.html#sincefrom) |
| Folder / Folder path | The folder to monitor for new/updated CSV files. Sub-folders will also be monitored. |
| Column delimiter | The character used to separate column values in your CSV file. |
| Batch size | Number of CSV rows to process per batch. Instead of reading rows one by one, Workato reads a batch of CSV rows at a time to increase throughput. [Learn more about batch processing](https://docs.workato.com/features/batch-processing.html). |
| Obtain a direct URL to file? | Generate a public URL that lives for 4 hours. This URL can be obtained from the `URL` data pill in the trigger output. |
| Add column names manually? | Set column names manually. Otherwise the first row of the latest CSV file in the selected folder will be taken to get column names. |
| Column names | Enter CSV column names, each on a new line. By default, the column names of the latest CSV file in your selected folder will be retrieved. |

## Output fields

| Field name | Description |
|---|---|
| Path | File path. |
| Bytes | File size in bytes. |
| Size | File size in string format. |
| Mime type | The Mime type of this file. |
| URL | File's public URL. Can be used to download file using [Workato Utility connector](https://docs.workato.com/features/utilities.html#download-file-from-url). |
| URL expires | Date/time the file's public URL will expire. |
| Rev | A unique identifier for the current revision of the file. |
| Modified | Date/time the file was last modified. |
| Client modified time | This is the modification time set by the desktop client when the file was added to Dropbox. Since this time is not verified (the Dropbox server stores whatever the desktop client sends up), this should only be used for display purposes (such as sorting) and not, for example, to determine if a file has changed or not. |
| Is directory | Whether this is a directory/folder. |
| Read only | Whether this file is read only. |
| Modifier | The user who modified this file. |
| Content hash | A hash of the file content. This field can be used to verify data integrity. For more information see [Box's  Content hash page](https://www.dropbox.com/developers/reference/content-hash). |
| Thumb exists | Whether thumbnail exists. |
| Icon | String contents of file icon. |
| First batch | Whether this is the first batch of CSV lines. |
| Last batch | Whether this is the first batch of CSV lines. |
| Lines | A [list data pill](https://docs.workato.com/features/list-management.html) representing the list of CSV lines. Can be used with [Repeat step](https://docs.workato.com/recipes/steps.html#repeat-step) to loop through the CSV lines.  |
| - Line | The CSV line number. |
| - Columns | Contains the CSV columns' values in this CSV line. |
| - List size | Total number of CSV lines. |
