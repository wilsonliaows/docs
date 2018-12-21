---
title: Workato connectors - Google Drive trigger - New file or folder
date: 2018-12-20 06:00:00 Z
---

# Google Drive action - Rename/move file or folder
This action renames or moves a file/folder in Google Drive.

## Input fields

| Field name | Description |
|---|---|
| File or folder ID | Can be found in the output of other Google Drive trigger/actions.<br><br>Alternatively, click on the required folder and the folder ID can be found at the end of URL. For file ID, right click on the file and select `Get shareable link`. The sharable link looks like this: https://drive.google.com/file/d/1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh/view?usp=sharing ; then the file ID is `1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh`. |

## Output fields
Note that in Google Drive API, the terms `folder` and `file` are used interchangeably. A `folder` is technically a special `file`. So whenever the field name or field description mentions `file`, it also applies to `folder`.

| Field name | Description |
|---|---|
| Kind | Identifies what kind of resource this is. E.g. is this a file or folder. |
| Name | The name of the file/folder. |
| File ID | The ID of the file/folder. |
| Mime type | The mime type of the file/folder, as stated in [Google documentation](https://developers.google.com/drive/api/v3/mime-types). |
| Parents | The list of the parent folders which contain the file/folder. |
| - ID | The ID of this parent folder. |
| - List size | The number of parent folders in this list. |
