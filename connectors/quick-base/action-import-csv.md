---
title: Workato connectors - Quick Base's action - Create and update records in bulk from CSV file
date: 2018-07-30 06:00:00 Z
---

# Quick Base's action: Create and update records in bulk from CSV file
![Quick Base's action: Create and update records in bulk from CSV file](/assets/images/connectors/quick-base/action-import-csv.png)

## 1. How it works
This action takes a CSV file then create or update Quick Base records in bulk. Note that this action is not an Upsert operation: if you provide a record ID that does not exist in Quick Base, this action will reject the record instead of creating a new one.

The followings are key details to understand when using this action:

### 1.1 Create records vs. Create & Update records
This action can either create new Quick Base records only, or create & update Quick Base records at the same time. The way to control this behaviour depends on your provided CSV file and field mappings.

#### Create new records only
If you only want to create new Quick Base records, just leave the first field in the `Column mappings` section, which is your table's `Record ID#`, blank. If you use custom record ID column in your table, such as Order ID or Customer ID, this field name will change accordingly.

![Blank Record ID](/assets/images/connectors/quick-base/csv-import-record-id-blank.png)
#### Create & update records at the same time
If you want to create & update Quick Base records at the same time, first you need to include a column containing Quick Base record ID in your CSV file.

![Record ID column in CSV file](/assets/images/connectors/quick-base/csv-record-id.png)

Then in the `Column mappings` section, map your table's `Record ID#` column with the record ID column in your CSV file.

![Mapped Record ID](/assets/images/connectors/quick-base/csv-import-record-id-mapped.png)

Workato uses these record ID columns to decide whether to create or update records. The rule is that for each CSV row:
- If record ID is empty, create a new Quick Base record.
- If record ID is present, search for the matching record ID in Quick Base then update that record. If no matching record ID is found in Quick Base, that CSV row will be fail.

### 1.2 Handling failed CSV rows:
This action uses [batch processing](https://docs.workato.com/features/batch-processing.html), so it will divide your CSV file into smaller chunks of rows (or batches) then submit to Quick Base. When 1 row in a chunk failed to be created/updated into Quick Base records, Quick Base will reject that whole chunk, but other chunks will not be affected.

When some rows fail, however, the action may still be considered "complete". It is because Quick Base has successfully accepted the CSV file. Quick Base API will then send back a "success" response with list of successful and failed records.

In this example, the job report shows "Complete" status. However, when we check the action output, there is actually 1 failed chunk.
![Job complete](/assets/images/connectors/quick-base/csv-import-job-complete.png)

![Chunk error](/assets/images/connectors/quick-base/csv-import-chunk-error.png)

It is thus important to always handle failed CSV rows in your recipe. The output pill `CSV contents of failed records` contains all failed CSV rows. You can use this to save the failed rows into a CSV file. Then check the job report for error reason, fix those failed rows and use this action to re-import them later.

Here is [a sample recipe](https://preview.workato.com/recipes/25445#recipe) in which we saved the failed rows into a CSV file in Box. You can save the CSV file into other file storage systems, using connectors such as Amazon S3, SFTP, On-premises file, etc.

![Handling failed CSV rows](/assets/images/connectors/quick-base/csv-import-error-handling.png)

## 2. Input fields
For this action to work, you need to configure these 4 sections:
1. Quick Base table
2. CSV file input
3. Column mappings
4. Advanced settings

### 2.1 Quick Base table
![Quick Base table settings](/assets/images/connectors/quick-base/input-quick-base-table.png)

Configure what Quick Base table you want to import the data to.

Pay attention to the field `Record ID`. It is important to select the correct column that represents Quick Base record ID in your table. This ID needs to be unique for each record. Workato uses this field to search for and update the correct record.

By default, Quick Base uses a field named `Record ID`. But in some cases, you may use custom column as record ID, for example `Sales Order ID`, `Customer ID`, etc.

### 2.2 CSV file input
![CSV file input](/assets/images/connectors/quick-base/input-CSV.png)

Provide the contents of your CSV file and describe the column structure.

You can get `File contents` data pill from [other connectors' actions or triggers](https://docs.workato.com/features/handling-csv-files.html). Some examples include: `New CSV file in folder` trigger from file connectors (such as [Box](https://docs.workato.com/connectors/box.html), [Amazon S3](https://docs.workato.com/connectors/s3.html), [On-premises file](https://docs.workato.com/connectors/on-prem-files.html)); or Workato Utility's `Compose CSV` action.

Note that the file contents must be **comma-separated and UTF-8 format**.

### 2.3 Column mappings
![Quick Base - CSV column mappings](/assets/images/connectors/quick-base/input-CSV-column-mappings.png)

This section lists down all columns in your Quick Base table. You need to map them with the respective columns in your CSV file.

Pay attention to the first input field, `Record ID`. Make sure to map it with the correct record ID column in your CSV file, so Workato can use that to search for and update records in Quick Base. In this sample CSV file, we use column `Quick Base Record ID`:

![Record ID in CSV file](/assets/images/connectors/quick-base/csv-record-id.png)

### 2.4 Advanced settings
![Chunk size](/assets/images/connectors/quick-base/csv-advanced-settings.png)

Since this action uses [batch processing](https://docs.workato.com/features/batch-processing.html), it divides your CSV file into smaller chunks of rows to submit to Quick Base. This allows you to submit a large CSV file without hitting Quick Base API limit.

Using this `Chunk size (KB)`, you can customise the chunk size (in kilobytes) to your need. In general, larger chunk size will shorten the time to transfer a large file.

## 3. Output
![Output pills](/assets/images/connectors/quick-base/csv-import-output-1.png)
![Ouput pills](/assets/images/connectors/quick-base/csv-import-output-2.png)

| Output pill | Description |
|---|---|
| Number of records created | Number of records successfully created in Quick Base. |
| Number of records updated | Number of records successfully updated in Quick Base. |
| Number of records failed | Number of CSV rows failed to be created or updated into Quick Base records. |
| Number of records unchanged | Number of records unchanged after this action. |
| List of records created or updated | This is a [List pill](https://docs.workato.com/features/list-management.html). This list includes the Quick Base Record IDs of all successfully created/updated records. |
| CSV contents of failed records | This pill include the contents of all CSV rows that are failed to be created/updated into Quick Base. You can use this pill to create a CSV file containing all failed rows, for you to fix and re-submit later. |
| List of chunks | This is a [List pill](https://docs.workato.com/features/list-management.html). Since the action divides your CSV into smaller chunks of rows, this list includes all of those chunks with their attributes below. |
| Chunk number | The ID of this chunk. |
| Successful import to Quick Base? | True or False. |
| Starting row | The first CSV row in this chunk |
| Ending row | The last CSV row in this chunk |
| Error code | The error code Quick Base returns when there is problem importing this chunk. |
| Error text | The error message Quick Base returns when there is problem importing this chunk. This is useful when you need to figure out what is wrong with your CSV file. |
