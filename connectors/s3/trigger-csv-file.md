---
title: Workato connectors - Amazon S3 trigger - New/updated CSV file
date: 2018-12-13 23:00:00 Z
---

# Amazon S3 trigger - New/updated CSV file
Triggers when a CSV file is added or updated in a selected bucket/folder in Amazon S3.

Checks selected folder for new or updated CSV file every 5 minutes. The output includes the file’s metadata and file contents, which are CSV rows delivered in batches.

Note that in Amazon S3, when a file is renamed, it is considered a new file. When a file is uploaded and overwrites an existing file with the same name, it is considered an updated file but not a new file.

## Input fields
| Field name | Description |
|---|---|
| When first started, this recipe should pick up events from |  |
| Bucket region |  |
| Bucket |  |
| Folder |  |
| Include sub-folders |  |
| Chunk size (in kilobytes) |  |

This trigger supports [Trigger Condition](https://docs.workato.com/recipes/triggers.html#trigger-conditions), which allows you to filter trigger event.

## Output fields
| Field name | Description |
|---|---|
| File name |  |
| Last modified |  |
| E tag |  |
| Size |  |
| Storage class |  |
| File contents | Contents of the file. This is a [streaming object](https://docs.workato.com/features/file-streaming.html) and can technically support unlimited file size. |
