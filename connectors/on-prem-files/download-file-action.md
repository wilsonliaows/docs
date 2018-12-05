---
title: Workato connectors - On-prem files download file action
date: 2018-12-04 06:00:00 Z
---

# On-prem files - Download file

This action downloads an existing file. The output of this action is the raw contents and it supports [streaming](/features/file-streaming.md) contents of large files.

![download file action](/assets/images/connectors/on-prem-files/download-file-action.png)
*download file action*

## Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Input field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File</td>
      <td>
        Select the file to download. This can be done either by selecting a file from the pick list, or toggling the input field to text mode and providing the file path. Only files can be downloaded.
      </td>
    </tr>
    <tr>
      <td>Chunk size (KB)</td>
      <td>Large files will be broken into smaller chunks to be downloaded in parts. Default is <b>256 KB</b> and the minimum is <b>32 KB</b>. The maximum chunk size depends on the upload chunk size of the application you are uploading it to.</td>
    </tr>
  </tbody>
</table>

## Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File contents</td>
      <td>Content of the downloaded file. This datapill supports <a href='/features/file-streaming.md'>streaming</a>. To transfer large files, make sure you map this to an input field that supports streaming.</td>
    </tr>
  </tbody>
</table>
