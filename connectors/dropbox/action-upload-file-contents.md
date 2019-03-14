---
title: Workato connector - Dropbox - Upload file using file contents
date: 2019-01-31 06:00:00 Z
---

# Dropbox action - Upload file using file contents
Upload a file to Dropbox by providing the file contents. If a file with the same name already exists in the folder, action will fail.

The following is an example of uploading a file using `File contents` from the [Download file](/connectors/dropbox/action-download-file.md) action:

![Download & upload file in Dropbox](/assets/images/connectors/dropbox/download-upload-file.png)

## Input fields

| Field name | Description |
|---|---|
| Folder | The folder where the new file will be uploaded |
| File name | Name for the uploaded file. |
| File contents | File contents can be obtained using action [Download file](/connectors/dropbox/action-download-file.md) in Dropbox connector or other connectors. |
| Obtain a direct URL to file | Whether to generate a public URL that lives for 4 hours. |

## Output fields

| Field name | Description |
|---|---|
| Path | File path. |
| Bytes | File size in bytes. |
| Size | File size in string format. |
| Mime type | The Mime type of this file. |
| URL | File's public URL. Can be used to download file using [Workato Utility connector](/features/utilities.md#download-file-from-url). |
| URL expires | Date/time the file's public URL will expire. |
| Rev | A unique identifier for the current revision of the file. |
| Modified | Date/time the file was last modified. |
| Client modified time | This is the modification time set by the desktop client when the file was added to Dropbox. Since this time is not verified (the Dropbox server stores whatever the desktop client sends up), this should only be used for display purposes (such as sorting) and not, for example, to determine if a file has changed or not. |
