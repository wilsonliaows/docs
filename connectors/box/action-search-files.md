---
title: Workato connectors - Box - Search files/folders
date: 2019-01-25 06:00:00 Z
---

# Box Action - Search files/folders
This action searches for files or folders in Box.

Searches may not return newly created files or folders in Box due to time delay for indexing files and folders. Learn more about [Box indexing time here](https://community.box.com/t5/Managing-Files-and-Folders/Search-for-Files-Folders-and-Content/ta-p/19269#search_hdsiw). Run the searches again after certain amount of time often solves the problem.

## Input fields
| Field name | Description |
|---|---|
| Search text | Search against file name, description, contents. File name should include extension, e.g. File.csv |
| Type | Whether you want to search files or folders. |
| Starting folder | Narrow down your search to this folder. |
| Exact match | Whether to search using exact match or partial match. |
| File extensions | Comma separated list of file extensions to include. |

## Output fields
| Field name | Description |
|---|---|
| Files | A [list data pill](https://docs.workato.com/features/list-management.html) representing the list of files/folders found from the search. You can loop through all files/folders in the list with a [Repeat step](https://docs.workato.com/recipes/steps.html#repeat-step). |
| ID | ID of the file. |
| Name | File name. |
| Type | Type of this object, which in this case is `file`. |
| Description | Description of file. |
| Size | Size of file. |
| Shared link |  |
| - URL | Shared link URL for viewing file. |
| - Download URL | Shared link URL for downloading file. |
| Created at | Date/time file is created. |
| Modified at | Date/time file is modified. |
| Trashed at | Date/time file is trashed. |
| Purged at | Date/time file is purged. |
| Content created at | Date/time file content is created. |
| Content modified at | Date/time file content is modified. |
| Sequence ID | Position of this object in the folder hierarchy. |
| Etag | Entity tag of this object. |
| Sha 1 | SHA-1 hash value of this object. |
| Parent | Includes details about the file's parent folder. |
| - ID | ID of parent folder. |
| - Name | Name of parent folder. |
| - Type | Object type, which in this case is `folder`. |
| - Sequence ID | Position of this object in the folder hierarchy.  |
| - Etag | Entity tag of this object. |
| Path | File path. |
| Path collection | Includes details of all paths this file belongs to. |
| - Total count | Number of file paths. |
| - Entries | File path entries. |
| -- ID | ID of file path. |
| -- Name | File path. |
| -- Type | Type of file path. |
| -- Sequence ID | Position of this object in the folder hierarchy. |
| -- Etag | Entity tag of this object. |
| -- List size | Number of items in this `Entries` list. |
| Created by | Includes details about user who created this file. |
| - ID | ID of user. |
| - Name | Name of user. |
| - Type | Type of user. |
| - Login | Login email of user. |
| Modified by | Includes details about user who modified this file. |
| - ID | ID of user. |
| - Name | Name of user. |
| - Type | Type of user. |
| - Login | Login email of user. |
| Owned by | Includes details about user who owned this file. |
| - ID | ID of user. |
| - Name | Name of user. |
| - Type | Type of user. |
| - Login | Login email of user. |
| Item status | Status of this file, e.g. active. |
