---
title: Workato connectors - On-prem files upload file action
date: 2018-12-04 06:00:00 Z
---

# On-prem files - Upload file

This action uploads a file to an existing folder. You can choose to overwrite contents of an existing file, or upload copies of it with an incremental number appended to the name.

![Upload file action](/assets/images/connectors/on-prem-files/upload-file-action.png)
*Upload file action*

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
      <td>Folder</td>
      <td>
        Select the folder to upload the file to. This can be done either by selecting a folder from the pick list, or toggling the input field to text mode and providing the folder path.<br>
        This should be relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
      </td>
    </tr>
    <tr>
      <td>File name</td>
      <td>
        Name of the file to be uploaded. This should only be the file name without any path.
      </td>
    </tr>
    <tr>
      <td>File contents</td>
      <td>
        Content of the file to upload. This input field supports <a href='/features/file-streaming.md'>streaming</a>.
      </td>
    </tr>
    <tr>
      <td>Overwrite existing file?</td>
      <td>
        If <b>Yes</b>, contents in an existing file with the <b>same name and extension</b> will be replaced.<br>
        If <b>No</b>, a new file will be created with an incremental number appended to the end of the file name. For example, if you are trying to upload <b>report.csv</b> to a folder that already has a file with that name, <b>report_1.csv</b> will be created with the new contents. Subsequent uploads will create <b>report_2.csv</b> and <b>report_3.csv</b>.
      </td>
    </tr>
  </tbody>
</table>

## Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File name</td>
      <td>Name of the file, with extension.</td>
    </tr>
    <tr>
      <td>File path</td>
      <td>This is the path of the file. This path is relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
    </tr>
    <tr>
      <td>File size (bytes)</td>
      <td>Size of the file contents in bytes.</td>
    </tr>
    <tr>
      <td>Created time</td>
      <td>This is the time that the file was created. This value is set by your OS.</td>
    </tr>
    <tr>
      <td>Last modified time</td>
      <td>This is the last modified time of the file. This value is updated by your OS.</td>
    </tr>
    <tr>
      <td>File existed before upload?</td>
      <td>If there was a file with the <b>same name and extension</b> in the selected folder, this datapill with return <code>true</code>. Otherwise, <code>false</code>.</td>
    </tr>
  </tbody>
</table>
