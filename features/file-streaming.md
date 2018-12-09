---
title: Workato connectors - File streaming
date: 2018-12-06 06:00:00 Z
---

# File Streaming
File streaming is the concept of reading and writing a file in smaller parts (chunks) in sequence. This allows us to transfer large files between apps or file systems without worrying about hitting the size limit of the sending and receiving systems. A common example is transferring records from a shared file system (SFTP) to a file hosting platform for analysis (Amazon S3).

## How it works
When transferring a file from a source app to a destination app, Workato splits the file into smaller chunks and downloads them. These chunks are then uploaded to the destination app in separate requests. This allows us to stay within the size limit of both apps, regardless of the total size of the original file.

The following diagram illustrates how this works:

![File streaming](/assets/images/features/file-streaming/streaming-illustration.png)

As a result, Workato is able to transfer files of any size between apps that support streaming.

## How to use it
File streaming is supported only if both the source download and destination upload actions support this feature. It is automatically initiated when you map a <kbd>File contents</kbd> datapill (from the source app) to a **File contents** input field (of the destination app).

If either the source datapill or the destination input field does not support streaming, then standard data mapping is performed, i.e. the entire file is downloaded and then uploaded without any chunking. In this case, the file transfer is limited by the size limit imposed by the respective apps. The smaller of the 2 will be the resultant limit.

In either case, no additional configuration is required in the recipe.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th rowspan=2>Connector</th>
      <th colspan=2>Triggers/Actions that support  file streaming</th>
    </tr>
    <tr>
      <th>Download</th>
      <th>Upload</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Amazon S3</td>
      <td>
        <li>New file trigger</li>
        <li>Download file action</li>
      </td>
      <td><li>Upload file action</li></td>
    </tr>
    <tr>
      <td>Anaplan</td>
      <td><li>Download file action</li></td>
      <td><li>Upload file action</li></td>
    </tr>
    <tr>
      <td>Box</td>
      <td><li>Download file action</li></td>
      <td></td>
    </tr>
    <tr>
      <td>Microsoft Sharepoint</td>
      <td></td>
      <td><li>Upload file to folder action</li></td>
    </tr>
    <tr>
      <td>On-prem files</td>
      <td>
        <li>New file in folder trigger</li>
        <li>Download file action</li>
      </td>
      <td><li>Upload file action</li></td>
    </tr>
    <tr>
      <td>Quickbase</td>
      <td></td>
      <td><li>Create and update records in bulk from CSV file action</li></td>
    </tr>
    <tr>
      <td>Salesforce</td>
      <td></td>
      <td>
        <li>Insert object in bulk from CSV file action</li>
        <li>Update object in bulk from CSV file action</li>
        <li>Upsert object in bulk from CSV file action</li>
      </td>
    </tr>
    <tr>
      <td>SFTP</td>
      <td></td>
      <td><li>Upload file action</li></td>
    </tr>
  </tbody>
</table>

*Table of all current triggers/actions that support file streaming.*

This [sample recipe](https://www.workato.com/recipes/867852#recipe) transfers files from an On-prem file system to Amazon S3 with file streaming.
