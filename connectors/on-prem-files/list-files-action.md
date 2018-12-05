---
title: Workato connectors - On-prem files list files in folder action
date: 2018-12-04 06:00:00 Z
---

# On-prem files - List files in folder

This action lists all files in the selected folder. All files will be returned in a single list in alphabetical order, based on the file path value.

You can choose to include files in sub-folders. This action also allows you to filter files based on the file name.

![List files in folder action](/assets/images/connectors/on-prem-files/list-files-action.png)
*List files in folder action*

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
        Select the parent folder to list files from. This can be done either by selecting a folder from the pick list, or toggling the input field to text mode and providing the folder path.<br>
        This should be relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
      </td>
    </tr>
    <tr>
      <td>Include files in sub-folders?</td>
      <td>
        Choose if you want to include files in sub-folders. Note that all files will be returned in a flat list, instead of a directory. Files will be ordered by the file path.
      </td>
    </tr>
    <tr>
      <td>Filter files by name</td>
      <td>Only file names matching this naming pattern will be returned. Learn how to use <a href="/connectors/on-prem-files.md#naming-pattern">naming patterns</a>.</td>
    </tr>
  </tbody>
</table>

## Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th colspan=2>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=5>Files</td>
      <td>File path</td>
      <td>This is the relative path of the file. This path is relative to the base path you define in the connection profile. Learn about <a href="/connectors/on-prem-files.md#relative-path">relative path</a>.</td>
    </tr>
    <tr>
      <td>File name</td>
      <td>Name of the file, with extension.</td>
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
