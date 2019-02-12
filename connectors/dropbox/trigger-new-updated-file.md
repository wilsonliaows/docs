---
title: Workato connector - Dropbox - New/updated file in directory
date: 2019-01-31 06:00:00 Z
---

# Dropbox trigger - New/updated file in directory
Triggers when a new file is added or existing file is updated in a specified folder. New and updated files in subfolders will also be picked up.

Checks selected folder for new/updated files every 5 minutes. When recipe is first started, picks up files created or updated an hour ago.

## Input fields

| Field name | Description |
|---|---|
| Folder / Folder path | The folder to monitor for new/updated files. Sub-folders of this folder will also be monitored. |
| Obtain a direct URL to file | Generate a public URL that lives for 4 hours. This URL can be obtained from the `URL` data pill in the trigger output. |

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
