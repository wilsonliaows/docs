---
title: Workato connectors
date: 2017-02-21 12:00:00 Z
---

# Box

## Connector information

### API version
The Box connector uses #(KIV). 

### Supported editions and versions
The Box connector works with all Box Plans - Individual, Business, Platform. 

## How to connect to Box on Workato

### Box connection
The Box connector uses OAuth2 authentication to authenticate with Box. 

* **Connection name**

  Give this Box connection a unique name that identifies which Box instance it is connected to.

* **Email**

  Email to connect to Box.

* **Password**

  Password to connect to Box.
  
* **SSO**
(Need to fill in content)
  

### Roles and permissions required to connect
Box users who can login to Box can connect to Box from Workato. The user will have the same [permissions](https://community.box.com/t5/Collaboration-and-Sharing/What-Are-The-Different-Access-Levels-For-Collaborators/ta-p/144) on Workato as in Box. This means that they will have the same capabilities to view, share, upload and download to those files and folders as per their respective permissions on the Box platform.

## Working with the Box Connector

## Working with generic triggers in Box

## Working with generic create/update/search actions in Box

## Working with attachments in Box

## Articles on how to use additional special actions, such as get related objects, etc.

## Best practices in working with the Box connector

## More Generation Information on Box

### Box Role Privelleges

1. Uploader
* Can only upload content and see names of items in the folder. Cannot view or download any content.
2. Previewer
  Can only preview items in the folder. Cannot upload, edit, delete, or share any content.
3. Viewer
  Can preview/download content, make comments, and generate shared links. Cannot add tags, invite new collaborators, edit shared links, or upload/edit/delete items in the folder.
4. Previewer uploader
  Can preview content, add comments, add tasks, and upload content to the folder. Cannot add tags, generate shared links, invite new collaborators, or edit/delete items in the folder.
5. Viewer uploader
  Can preview content, download content, add comments, generate shared links, and upload content to the folder. Cannot add tags, invite new collaborators, or delete items in the folder. Can still download, edit, and re-upload files under the same name manually or using Box Edit.
6. Editor
  Can view, download, upload, edit, delete, copy, move, and rename content. Can also generate/edit shared links, make comments, assign tasks, create tags, and invite/remove collaborators. Cannot delete or move root level folders.
7. Co-owner
  Has all permissions of an editor. Can also manage users in the folder: add new collaborators, change access levels of collaborators, remove collaborators.
8. Owner
  Full access.
  
When using Box with Workato, you will only be able to perform the actions that are allowed by the level of access of the Box account used to make the connection on Workato. 

## Troubleshooting
