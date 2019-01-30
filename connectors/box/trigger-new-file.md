---
title: Workato connectors - Box - New file in directory
date: 2019-01-25 06:00:00 Z
---

# Box Trigger - New file in directory
Triggers when a new file is added to a specified folder. Trigger will pick up new files created from the time recipe has started. Checks selected folder for new files every 5 minutes.

## Input fields
| Field name | Description |
|---|---|
| Folder | Folder to monitor for new files. Select from the dropdown list or input folder ID. |
| Include sub-folders | Whether the trigger will pick up files in sub-folders as well. |

This trigger supports [Trigger conditions](https://docs.workato.com/recipes/triggers.html#trigger-conditions), which can filter incoming trigger events.

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
