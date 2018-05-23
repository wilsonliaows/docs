---
title: Workato connectors - On-premises files's trigger - New CSV file in folder
date: 2018-05-15 06:00:00 Z
---

# On-prem file's trigger: New CSV file in folder

![On-prem file's trigger: New CSV file in folder](/assets/images/connectors/on-prem-files/trigger-new-csv.png)

## 1. How it works
This trigger monitors an on-premises folder. Based on a schedule you define, this trigger will check if there is a new CSV file inside that folder. It will read that CSV file and output the file metadata and CSV rows.

This trigger is useful when you have an on-premises folder, which you frequently add CSV files inside (e.g. weekly sales reports, daily data dumps from other systems). Then you want to read those files and import the records to other system (e.g. Saleforce, databases).

Note that this trigger supports [batching](https://docs.workato.com/features/batch-processing.html), which allows you to process huge amount of data in shorter time.

One thing to note is that every time this trigger processes a file, it will **rename the file** and append the text `processing` at the end of file name. This is to prevent the trigger from picking up the file again in the next run, and make sure it only pickup new file in folder.

![Trigger renames files when processing](/assets/images/connectors/on-prem-files/trigger-csv-processing.gif)
*Trigger renames files when processing them*

## 2. Input fields
For this trigger to work, you need to config 4 sections:
1. Schedule settings
2. Folder settings
3. CSV settings
4. Batch size

### 2.1 Schedule settings
Config this to tell the trigger how often it should check for new CSV file in on-premises folder. There are 2 ways to schedule: **interval** and **date/time**.

Using **interval**, you will tell the trigger to check every certain minutes.

![Interval schedule](/assets/images/connectors/on-prem-files/trigger-interval.png)

Using **date/time**, you will tell the trigger to check at specific time every day.

![Date/time schedule](/assets/images/connectors/on-prem-files/trigger-schedule.png)

Optionally, you can choose which days of the week the trigger should check. Use `Add/remove optional fields` at the bottom of the form to add this.

![Add/remove optional fields](/assets/images/connectors/on-prem-files/add-remove-optional-fields.png)
![Days of week](/assets/images/connectors/on-prem-files/trigger-schedule-days.png)

### 2.2 Folder settings
Config this to specify which on-premises folder the trigger should monitor for new CSV file.

![Folder settings](/assets/images/connectors/on-prem-files/trigger-folder-settings.png)

Optionally, you can define a [naming pattern](https://docs.workato.com/features/wildcard.html) so trigger only pick up files with certain names. Enable this input field using `Add/remove optional fields` at the bottom of the form.

 ![Filename patterns](/assets/images/connectors/on-prem-files/filename-patterns.png)

### 2.3 CSV settings
Config this so the trigger will understand the structure of your CSV file. It is recommended that you upload a sample CSV file for fast and accurate setup.

![CSV file settings](/assets/images/connectors/on-prem-files/trigger-csv-settings.png)

### 2.4 Batch size
Lastly, set a batch size. Batch size determines how many CSV rows trigger will process at the same time. Learn more about [batching here](https://docs.workato.com/features/batch-processing.html).

![Batch size](/assets/images/connectors/on-prem-files/batch-size.png)

This is useful when you want to import the data from your CSV files into other apps, for example Salesforce or databases. Larger batch size will speed up this data import. However, those apps will often have API limit of how much data they can receive at once. Therefore, try to experiment with different batch sizes to see what works best for you.

## 3. Output
The following is how this trigger's output looks like:

![Trigger output](/assets/images/connectors/on-prem-files/trigger-csv-output.png)

| Output pill | Description |
|---|---|
| CSV Rows | This `CSV Rows` output pill represents the list of rows in the CSV file. You can use this pill with [repeat step](https://docs.workato.com/recipes/steps.html#repeat-step) to loop through all rows in the CSV file.<br><br> Expand the pill, you will see all columns in your CSV file, which can be used for mapping. <br>![CSV columns](/assets/images/connectors/on-prem-files/trigger-csv-output-rows.png)  |
| File path (original) | File path **before** trigger processed this file. <br> e.g. C:/Program Files/sales_report.csv |
| File path (processed) | When trigger processes a file, it will rename the file and mark as `processing`. This is the file path **after** trigger processed the file. <br> e.g. C:/Program Files/sales_report.csv.1526632883663.processing |
| File name (processed) | When trigger processes a file, it will rename the file and mark as `processing`. This is the file name **after** trigger processed the file. <br> e.g. sales_report.csv.1526632883663.processing |
| File size (bytes) | File size in bytes. |
| Created time | The time the file was created. |
| Last modified time | The time the file was last modified. |
