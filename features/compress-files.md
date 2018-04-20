---
title: Compress files
date: 2018-04-13 18:00:00 Z
---

# Compress files

`Compress files` action allows you to compress multiple files into one **.zip** file. It is one of the actions under `Files by Workato` application.

![Compress files](/assets/images/features/files-and-attachments/compress-files-action.png)
*Compress files action*

## Example: Compress files in a folder
In this section, we will go through one example of how to compress multiple files in a folder.

We will use an SFTP folder for this example. But you can use this same method with any other app like Amazon S3, Box, Dropbox, Salesforce, etc.

You can find the [sample recipe here](https://www.workato.com/recipes/680470-compress-files-in-a-directory-on-sftp#recipe).

![Compress files in SFTP directory](/assets/images/features/files-and-attachments/compress-files-static-list-recipe.png)
*Recipe to compress files in an SFTP folder*

The recipe may look a bit daunting at first, but once you get the idea it is actually quite straightforward. Let's go through the thought process step by step:
1) We have a folder in SFTP with several files. We need to compress all files in that folder into one .zip file.

2) Examining the `Compress files` action, we see that it needs a list of `File name` and `File contents`:

![Compress files list input](/assets/images/features/files-and-attachments/compress-files-static-list-input.png)

3) To get `File name` and `File contents` of every file in the folder, follow these steps:

- List all items in the folder (including both files & sub-folders)
![List items in SFTP folder](/assets/images/features/files-and-attachments/compress-files-list-directory.png)

- Now we will go through each item one by one. To do this, we use a "For each" step (a.k.a. [Repeat Step](http://docs.workato.com/recipes/steps.html#repeat-step)):
!["For each" step](/assets/images/features/files-and-attachments/compress-files-for-each.png)
- First we need make sure this item is a file and not a folder:
![Check if item not a folder](/assets/images/features/files-and-attachments/compress-files-check-folder.png)
- If it's a file, then get the `File contents`
![Get file contents](/assets/images/features/files-and-attachments/compress-files-get-file-contents.png)
- Now we will save `File name` and `File contents` into a list. The first file in the folder (index = 0) will be saved into `list-0`:
![Add file to a list](/assets/images/features/files-and-attachments/compress-files-add-list-0.png)
![list-0 contents](/assets/images/features/files-and-attachments/compress-files-list-0-contents.png)
- Repeat this step for the rest of the files. In this example, there are 3 files in total. We save them into 3 list: `list-0`, `list-1`, `list-2`
![Add 3 files into 3 lists](/assets/images/features/files-and-attachments/compress-files-3-lists.png)

4) Now we are ready to use `Compress files` action.
From the App data box, drag & drop `File name` and `File contents` pills from the 3 lists into `Compress files` action:

![Compress files list mapping](/assets/images/features/files-and-attachments/compress-files-static-list-mapping.gif)
*Mapping the lists' output pills into Compress file action*

5) Putting everything together, we have the complete recipe:

![Compress files in SFTP directory](/assets/images/features/files-and-attachments/compress-files-static-list-recipe.png)
