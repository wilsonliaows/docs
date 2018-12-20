---
title: Workato connectors - Google Drive trigger - New file or folder
date: 2018-12-20 06:00:00 Z
---

# Google Drive action - Download file
This action downloads contents of a file in Google Drive. File contents can be used in subsequent steps of the recipe to upload the file into other applications.

Only binary files can be downloaded. Trying to download a folder or a Google Docs document will result in an error.

## Input fields

| Field name | Description |
|---|---|
| File ID | The ID of the file. Can be found in the output of other Google Drive trigger/actions, or from the file sharable link. To get sharable link, right click on the file and select `Get shareable link`. For example, if the sharable link is https://drive.google.com/file/d/1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh/view?usp=sharing , then file ID will be `1y1nxL1248oiyR2IjW_Rq84d3qEPYRoqh`.|

## Output fields

| Field name | Description |
|---|---|
| File contents | The text contents of the file. Can be used in `Upload file` action of other file connectors such as Box, Dropbox, Amazon S3, etc., to upload the file into those applications.  |
| Size | Size of the file in bytes. |
