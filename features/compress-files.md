---
title: Compressing files
date: 2018-04-13 18:00:00 Z
---

# Compress files

`Compress files` action allows you to compress multiple files into one **.zip** file. It is one of the actions under `Files by Workato` application.

![Compress files](/assets/images/features/files-and-attachments/compress-files-action.png)
*Compress files action*

## Example: Compress files in a folder
In this section, we will go through one example of how to compress multiple files in a folder. We will use SFTP server for this example. You can find the [sample recipe here](https://www.workato.com/recipes/680470-compress-files-in-a-directory-on-sftp#recipe).

![Compress files in SFTP directory](/assets/images/features/files-and-attachments/compress-files-static-list-recipe.png)
*Recipe to compress files in an SFTP folder*

To understand how the recipe is built, let's go through the thought process step by step:
1) We have a folder in SFTP with several files. We need to compress all files in that folder into one .zip file.

2) Examining the `Compress files` action, we see that it expects a list of `File name` and `File contents`:

![Compress files list input](/assets/images/features/files-and-attachments/compress-files-static-list-input.png)
*Compress files list input*

3) Therefore, we need to find a way to loop through all files in the SFTP folder; for each file, produce a pair of `File name` and `File contents` pills; then pass those pills to `Compress files` action.

i. Looping is straight forward using [Repeat step](https://docs.workato.com/recipes/steps.html#repeat-step):
![Loop through all files in folder](/assets/images/features/files-and-attachments/list-files-then-loop.png)

ii. Then for each file, we put file name & file contents into a  [List](https://docs.workato.com/features/list-management.html). The output of each list give us `File name` and `File contents` pills of that file.
![Put files into list](/assets/images/features/files-and-attachments/put-files-into-list.png)
*Create 3 lists for presumably 3 files in folder*

![List input](/assets/images/features/files-and-attachments/loop-files-list-input.png)
*In each list, we put File name and File contents of 1 file*

![List output](/assets/images/features/files-and-attachments/loop-files-list-output.png)
*Each list will output File name and File contents pills*

iii. Now we just need to drag & drop `File name` and `File contents` pills from those lists into `Compress files` action:

![Compress files list mapping](/assets/images/features/files-and-attachments/compress-files-static-list-mapping.gif)
*Mapping the lists' output pills into Compress file action*

4) Putting everything together, we have the complete recipe:

![Compress files in SFTP directory](/assets/images/features/files-and-attachments/compress-files-static-list-recipe.png)
*Recipe to compress files in an SFTP folder*
