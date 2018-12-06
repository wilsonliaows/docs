---
title: Workato connectors - File streaming
date: 2018-12-06 06:00:00 Z
---

# File Streaming
File streaming is the concept of reading and writing a file in smaller parts (chunks) in a sequence. This allows us to transfer large files between applications or file systems without worrying about hitting size or memory limits of the sending and receiving system. A common example is transferring records from a shared file system (SFTP) to a file hosting platform to for analysis (Amazon S3).

## How it works
When transferring contents of a file (download then upload), Workato automatically splits the file into smaller chunks. These chunks are sent to the destination application in separate requests. This approach allows us to stay within the size or memory limit of the application, regardless of the total size of the file.

As a result, Workato is able to transfer files of any size between applications that support streaming.

The following diagram illustrates how this works:

![File streaming](/assets/images/features/file-streaming/streaming-illustration.png)

## How to use it
File streaming is an automatic feature. It is initiated when you map a <kbd>File contents</kbd> datapill to a **File contents** input field that both supports streaming.

If either one of the datapill and input field is not streaming-enabled, a standard data mapping is performed - the entire file is downloaded and uploaded as a single string. In this case, the size limit for the action is limited by the respective application.

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
        - New file trigger<br>
        - Download file action<br>
      </td>
      <td>
        - Upload file action<br>
      </td>
    </tr>
    <tr>
      <td>Anaplan</td>
      <td>- Download file action</td>
      <td>- Upload file action</td>
    </tr>
    <tr>
      <td>Box</td>
      <td>
        - Download file action<br>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td>Microsoft Sharepoint</td>
      <td>-</td>
      <td>- Upload file to folder action</td>
    </tr>
    <tr>
      <td>On-prem files</td>
      <td>
        - New file in folder trigger<br>
        - Download file action<br>
      </td>
      <td>
        - Upload file action<br>
      </td>
    </tr>
    <tr>
      <td>Quickbase</td>
      <td>- </td>
      <td>- Create and update records in bulk from CSV file action</td>
    </tr>
    <tr>
      <td>Salesforce</td>
      <td>-</td>
      <td>
        - Insert object in bulk from CSV file action<br>
        - Update object in bulk from CSV file action<br>
        - Upsert object in bulk from CSV file action<br>
      </td>
    </tr>
    <tr>
      <td>SFTP</td>
      <td>-</td>
      <td>
        - Upload file action<br>
      </td>
    </tr>
  </tbody>
</table>

*Table of all current triggers/actions that support file streaming.*

This [sample recipe](https://www.workato.com/recipes/867852#recipe) transfers files from an On-prem file system to Amazon S3 with file streaming.
