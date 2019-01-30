---
title: Workato connectors - Box - Download file
date: 2019-01-25 06:00:00 Z
---

# Box Action - Download file
Download contents of a file. File contents can be used in subsequent steps of the recipe to upload the file into other applications.

In the example below, we use `File contents` data pill from Box's Download file action and provide that to Dropbox's Upload file action.

![Upload file from Box to Dropbox](/assets/images/connectors/box/box-upload-dropbox.png)

## Input fields
| Field name | Description |
|---|---|
| File ID | ID of file to download. File ID can be found in the output of other Box triggers/actions or at the end of file URL in Box. |
| Chunk size | File contents will be [streamed](https://docs.workato.com/features/file-streaming.html) in chunks of this size. Enter the size with the unit, Eg. 50KB. Valid units are 'B', 'KB', 'MB'. Default chunk size is 10MB. Minimum is 32KB and maximum is 10MB. Use this when you want to optimize throughput. Bigger chunk size will increase throughput, but may exceed API limit. |

## Output fields
| Field name | Description |
|---|---|
| File contents | Binary contents of the file. When you upload this file contents to other applications, [streaming](https://docs.workato.com/features/file-streaming.html) will be used. |
