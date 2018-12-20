---
title: Workato connectors - Google Drive trigger - New file or folder
date: 2018-12-20 06:00:00 Z
---

# Google Drive action - Upload file
This action uploads a file to Google Drive.

## Input fields

| Field name | Description |
|---|---|
| File contents | Binary contents of the file to upload. Accept a data pill such as `File contents` from other Workato triggers and actions. |
| Mime type | Mime type of this file, as stated in [Google documentation](https://developers.google.com/drive/api/v3/mime-types). |
| File name | Name of the uploaded file. |
| Description | Description of the file. |
| Parent folder | The parent folder where the file will reside. Select a folder from the picklist or follow the hint to enter folder ID directly. |
| Starred | Whether you want to starred the file. |
| Viewers can copy content | Deprecated. |
| Writers can share | Whether users with only `writer` or `edit` permission can modify the file's permissions. Not populated for Team Drive files. |

## Output fields

| Field name | Description |
|---|---|
| Kind | Identifies what kind of resource this is. E.g. is this a file or folder. |
| ID | ID of the file. |
| Name | Name of the file. |
| Mime type | The mime type of the file, as stated in [Google documentation](https://developers.google.com/drive/api/v3/mime-types). |
| Parents | The list of the parent folders which contain the file. |
| - ID | The ID of this parent folder. |
| - List size | The number of parent folders in this list. |
| Description | A short description of the file. |
| Starred | Whether you has starred the file. |
| Viewers can copy content | Deprecated |
| Writers can share | Whether users with only `writer` or `edit` permission can modify the file's permissions. Not populated for Team Drive files. |
