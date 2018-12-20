---
title: Workato connectors - Google Drive trigger - New file or folder
date: 2018-12-20 06:00:00 Z
---

# Google Drive trigger - New file or folder
Triggers immediately in real-time when new file or folder is created in specified folder. Sub-folders will not be monitored.

## Input fields

| Field name | Description |
|---|---|
| Folder | The folder to monitor for new files or folders. Sub-folders will not be monitored. Select a folder from the picklist or follow the hint to enter folder ID directly. |
| When first started, this recipe should pick up events from | When you start recipe for the first time, it picks up new files or folders created from this specified date and time. If left blank, recipe will pick up files or folders created an hour ago. Once recipe has been run or tested, value cannot be changed. Refer to [this doc for more information](https://docs.workato.com/recipes/triggers.html#sincefrom). |

## Output fields

| Field name | Description |
|---|---|
| ID | ID of the file or folder. |
| Name | Name of the file or folder |
| Mime type | Mime type of this file or folder, as stated in [Google documentation](https://developers.google.com/drive/api/v3/mime-types). |
| Description | A short description of the file. |
| Starred | Whether the user has starred the file/folder. |
| Trashed | Whether the file/folder has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash. |
| Explicitly trashed | Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder (e.g. when you trashed the whole parent folder) |
| Parents | The list of the parent folders which contain the file. |
| - ID | The ID of the parent folder which contain the file. |
| - List size | The number of the parent folders which contain the file. |
| Version | A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. |
| Web content link | A link for downloading the content of the file in a browser. This is only available for files with binary content in Drive. |
| Web view link | A link for opening the file in a relevant Google editor or viewer in a browser. |
| Icon link | A static, unauthenticated link to the file's icon. |
| Thumbnail link | A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. |
| Viewed by me | Whether the file has been viewed by this user. |
| Viewed by me time | The last time the file was viewed by this user (RFC 3339 date-time). |
| Created time | The time at which the file was created (RFC 3339 date-time). |
| Modified time | The last time the file was modified by anyone (RFC 3339 date-time). |
| Modified by me time | The last time the file was modified by this user (RFC 3339 date-time). |
| Sharing user | The user who shared the file with the requesting user, if applicable. |
| - Display name | A plain text displayable name for this user. |
| - Email address | The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. |
| - Permission ID | The user's ID as visible in Permission resources. |
| - Photo link | A link to the user's profile photo, if available. |
| - Me | Whether this user is the requesting user. |
| Owners | The list of owners of the file/folder. Currently, only certain legacy files may have more than one owner. Not populated for Team Drive files. |
| - Display name | A plain text displayable name for this user. |
| - Email address | A link to the user's profile photo, if available. |
| - Permission ID | The user's ID as visible in Permission resources. |
| - Photo link | A link to the user's profile photo, if available. |
| - Me | Whether this user is the requesting user. |
| - List size | Number of owners in this list. |
| Last modifying user | The last user to modify the file. |
| - Display name | A plain text displayable name for this user. |
| - Email address | The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. |
| - Permission ID | The user's ID as visible in Permission resources. |
| - Photo link | A link to the user's profile photo, if available. |
| - Me |  |
| Shared |  |
| Owned by me |  |
| Viewers can copy content |  |
| Writers can share |  |
| Original filename |  |
| Full file extension |  |
| File extension |  |
| Md 5 checksum |  |
| Size |  |
| Quota byte used |  |
| Head revision ID |  |
