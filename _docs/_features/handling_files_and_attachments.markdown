---
title: Handling files and attachments
date: 2017-02-22 12:00:00 Z
---

# Working with files and attachments in Workato
Workato allows uploading of files into cloud or on-premise FTP servers and applications. Workato also allows for temporary downloading of files (for the duration of the job), and stores the file content for use in subsequent steps of the job, e.g. to be uploaded into another app or parsed as data.

## Working with text files
Text files refers to files which can be opened with any text editor and is generally human-readable. Workato can act as the intermediary to move files from one app to another, as well as extract data from text files and parse it for use in Workato. For example, a recipe can retrieve CSV file content and parse it immediately as data to be written to another app.

### Examples of text file extensions
Some examples of text files as [provided by Nayuki](https://www.nayuki.io/page/what-are-binary-and-text-files) are:
- Web standards, e.g. html, xml, css, svg, json
- Source code, e.g. c, cpp, h, cs, js, py, java, rb, pl, php, sh
- Documents, e.g. txt, tex, markdown, asciidoc, rtf, ps
- Configuration, e.g. ini, cfg, rc, reg
- Tabular data, e.g. csv, tsv, etc.

### Example of moving text files between apps
There is no difference between moving text files and moving binary files between apps. Refer to [this section](#moving-textbinary-files-between-apps).

### Example of parsing text file data to be used in Workato recipes
[![https://gyazo.com/52deab1efa9062c4b543f510734dace1](https://i.gyazo.com/52deab1efa9062c4b543f510734dace1.gif)](https://gyazo.com/52deab1efa9062c4b543f510734dace1)
Declaring the expected columns in CSV files when using **Box new CSV file** trigger.
[Example recipe](https://www.workato.com/recipes/485023)

[![https://gyazo.com/dbab89736dd49284cc000d33c13fd096](https://i.gyazo.com/dbab89736dd49284cc000d33c13fd096.gif)](https://gyazo.com/dbab89736dd49284cc000d33c13fd096)
The columns defined in the **Box new CSV file** trigger shows up as usable variables in the output datatree.
[Example recipe](https://www.workato.com/recipes/485023)

![Example recipe - CSV file parsing](/_uploads/_features/_files_and_attachments/csv-file-parsing-recipe.png)
[Example recipe](https://www.workato.com/recipes/485023)

## Working with binary files
Binary files usually refer to any file which is not human readable. Workato can act as the intermediary to move entire files and attachments from one system to another, but content text within binary files cannot be parsed for use in Workato, e.g. Workato cannot read the text or images in your PDFs and move it into Salesforce, but it can upload the entire PDF into Salesforce as an attachment.

### Examples of binary file extensions
Some examples of binary files as [provided by Nayuki](https://www.nayuki.io/page/what-are-binary-and-text-files):
Images, e.g. jpg, png, gif, bmp, tiff, psd
Videos, e.g. mp4, mkv, avi, mov, mpg, vob
Audio, e.g. mp3, aac, wav, flac, ogg, mka, wma
Documents, e.g. pdf, doc, xls, ppt, docx, odt
Archive, e.g. zip, rar, 7z, tar, iso
Database, e.g. mdb, accde, frm, sqlite
Executable, e.g. exe, dll, so, class

### Example of moving binary files between apps
There is no difference between moving text files and moving binary files between apps. Refer to [this section](#moving-textbinary-files-between-apps).

# Moving text/binary files between apps
Workato can move files (regardless of text or binary) from app to app. There are 2 ways of moving files:
- Via moving actual file content from one app to the other
- Via providing the destination app with a public URL to the file

### Moving text/binary files via public URL
This is typically a 2-step process:
1. Get the public URL of the file to move. Generally found in the datatree output of **New file** triggers.
2. Pass in this public URL to the destination app. Generally a **Upload file via URL** action.

### Example of moving text/binary files via public URL


## Moving text/binary files via file content
This is typically a 2-step process:
1. Download the file content of the file to move. Generally found in the datatree output of **New file** triggers.
2. Pass in this public URL to the destination app. Generally a **Upload file via content** action.

### Example of moving text/binary files via file content
Let's take the scenario where Gmail email attachments need to be moved to Box. This is how the recipe looks.

![Example recipe - moving files between apps](/_uploads/_features/_files_and_attachments/moving-files-betwen-apps-recipe.png)
[Example recipe: Move Gmail attachments to Box](https://www.workato.com/recipes/485475)

From the **New email** trigger output, each email event that comes in has potentially a list of attachments. Therefore, the conditional action checks if the email has attachments. If not, nothing is processed for that email. In this case, the datapill from the attachment list in **New email** trigger is used. As the pills within a list refer to the first list item in that list (e.g. the first attachment within the list of attachments) unless when used in a for each step or in an input array, this allows us to verify if there's at least one attachment in the list.

[![https://gyazo.com/0b634d20aef35341badebee9a9b5e674](https://i.gyazo.com/0b634d20aef35341badebee9a9b5e674.gif)](https://gyazo.com/0b634d20aef35341badebee9a9b5e674)

In cases whereby the email event has one or more attachments, the for each step ensures that the recipe iterates through the list of attachments, and that for each attachment, the attachment content is downloaded from Gmail before being uploaded into Box.

[![https://gyazo.com/4b4d87f395b652c25fb5348769f6e35e](https://i.gyazo.com/4b4d87f395b652c25fb5348769f6e35e.gif)](https://gyazo.com/4b4d87f395b652c25fb5348769f6e35e)

In this case, file content is used as Gmail does not provide public URLs to attachments. For scenarios where the source app provides public URLs to files and the target app accepts URLs for file uploads, [moving of files via URLs](#moving-textbinary-files-via-public-URL) should be the preferred method for recipe efficiency.

## Downloading files

## Uploading files
### Upload file via public URL
### Upload file via file content

## Base64 encoding