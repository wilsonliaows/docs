---
title: Workato connectors - Box - Upload file
date: 2019-01-25 06:00:00 Z
---

# Box Action - Upload file using file contents
Upload a file to Box by providing contents of the file. Input file ID to update an existing file, or input file name to upload a new file.

## Input fields
| Field name | Description |
|---|---|
| File contents | Contents of the file. File contents can be obtained by using Box's Download file action, or from other actions/trigger. |
| File size | Only required if file is more than 20 MB. File size can be found in the output of other triggers/actions. You can also enter the value in bytes. |
| Destination folder / Folder ID | Only input `Destination folder` to upload a new file. Leave blank if you want to upload new version of an existing file. |
| File name | Only input `File name` to upload a new file. Leave blank if you want to upload new version of an existing file. File name should include extension, e.g. my_report.csv. |
| File ID | Only input `File ID` to upload new version of an existing file. Leave blank if you want to upload a new file. File ID can be found in other Box's triggers/actions, or in the file URL in Box. For example: "https://app.box.com/file/310024886990", then file ID is `310024886990`. |

## Output fields
| Field name | Description |
|---|---|
| File version | Include details of current version of the file. Useful when you use the action to upload a new version of an existing file. |
| - Type | Type of this object, which in this case is `file_version`. |
| - ID | ID of this file version. |
| - Sha 1 | SHA-1 hash value of this object. |
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
