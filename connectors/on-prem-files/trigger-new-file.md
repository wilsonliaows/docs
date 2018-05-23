---
title: Workato connectors - On-premises files's trigger - New file in folder
date: 2018-05-15 06:00:00 Z
---


# On-prem file's trigger: New file in folder

![On-prem file's trigger: New CSV file in folder](/assets/images/connectors/on-prem-files/trigger-new-file.png)

## 1. How it works
This trigger monitors an on-premises folder. Based on a schedule you define, this trigger will check if there is a new file inside that folder. It will read that file and output the file metadata and file contents.

This trigger is useful when you have an on-premises folder, which you frequently add files inside (e.g. weekly sales reports, daily database dumps). Then you want to transfer those files to other file storage systems (e.g. Amazon S3, SFTP).

Note that this trigger supports [streaming](https://docs.workato.com/features/file-streaming.html), which allows you to transfer huge files from your on-premises system to other systems.

One thing to note is that every time this trigger processes a file, it will **rename the file** and append the text `processing` at the end of file name. This is to prevent the trigger from picking up the file again in the next run, and make sure it only pickup new file in folder.

![Trigger renames files when processing](/assets/images/connectors/on-prem-files/trigger-file-processing.gif)
*Trigger renames files when processing them*

## 2. Input fields
For this trigger to work, you need to config 2 main sections:
1. Schedule settings
2. Folder settings

### 2.1 Schedule settings
Config this to tell the trigger how often it should check for new file in on-premises folder. There are 2 ways to schedule: **interval** and **date/time**.

Using **interval**, you will tell the trigger to check every certain minutes.

![Interval schedule](/assets/images/connectors/on-prem-files/trigger-interval.png)

Using **date/time**, you will tell the trigger to check at specific time every day.

![Date/time schedule](/assets/images/connectors/on-prem-files/trigger-schedule.png)

Optionally, you can choose which days of the week the trigger should check. Use `Add/remove optional fields` at the bottom of the form to add this.

![Add/remove optional fields](/assets/images/connectors/on-prem-files/add-remove-optional-fields.png)
![Days of week](/assets/images/connectors/on-prem-files/trigger-schedule-days.png)

### 2.2 Folder settings
Config this to specify which on-premises folder the trigger should monitor for new file.

![Folder settings](/assets/images/connectors/on-prem-files/trigger-folder-settings.png)

Optionally, you can define a [naming pattern](https://docs.workato.com/features/wildcard.html) so trigger only pick up files with certain names. Enable this input field using `Add/remove optional fields` at the bottom of the form.

 ![Filename patterns](/assets/images/connectors/on-prem-files/filename-patterns.png)

### 2.3 Other settings
#### Chunk size
![Chunk size](/assets/images/connectors/on-prem-files/chunk-size.png)

When you transfer your on-premises files to other systems, the file contents will be [streamed](https://docs.workato.com/features/file-streaming.html) to the destination systems in small chunks. This allows transferring files of unlimited size.

The optimal chunk size is automatically handled by Workato. However, if you need to optimize yourself, this `Chunk size` field allows you to specify the size of each chunk.

Enable this field using `Add/remove optional fields` at the bottom of the form.

## 3. Output
The following is how this trigger's output looks like:

![Trigger output](/assets/images/connectors/on-prem-files/trigger-file-output.png)

| Output pill | Description |
|---|---|
| File path (original) | File path **before** trigger processed this file. <br> e.g. C:/Program Files/sales_report.pdf |
| File path (processed) | When trigger processes a file, it will rename the file and mark as `processing`. This is the file path **after** trigger processed the file. <br> e.g. C:/Program Files/sales_report.pdf.1526632883663.processing |
| File name (processed) | When trigger processes a file, it will rename the file and mark as `processing`. This is the file name **after** trigger processed the file. <br> e.g. sales_report.pdf.1526632883663.processing |
| File contents | Contents of the file. You can use this data pill in other actions, to upload the file to another app. |
| File size (bytes) | File size in bytes. |
| Created time | The time the file was created. |
| Last modified time | The time the file was last modified. |
