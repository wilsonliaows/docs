---
title: Workato connectors - On-prem files move file action
date: 2018-12-04 06:00:00 Z
---

# On-prem files - Move file

This action moves an existing file to a different folder. The file and destination folder must exist for this action to work.

![Move file action](/assets/images/connectors/on-prem-files/move-file-action.png)
*Move file action*

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
        Select the file to move. This can be done either by selecting a file from the pick list, or toggling the input field to text mode and providing the file path. Only files can be moved.
      </td>
    </tr>
    <tr>
      <td>Destination folder</td>
      <td>
        Select the destination folder to move the selected file. This can be done either by selecting a folder from the pick list, or toggling the input field to text mode and providing the destination folder path.
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
      <td>File path (original)</td>
      <td>This is the original path of the file. This path is relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
    </tr>
    <tr>
      <td>File path (new)</td>
      <td>This is the new path of the file. This path is relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
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
  </tbody>
</table>
