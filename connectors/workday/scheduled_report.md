---
title: Workato connectors - Workday Scheduled Report Trigger
date: 2017-11-05 09:00:00 Z
---

# Workday Scheduled Report Trigger

## How to use

This trigger is a combination of a Scheduler (advanced) and Workday RaaS action. When configured, will run a report in Workday at pre-defined times and return results of the report in batches. The batch size limit is `200`.

### Inputs

The require inputs are naturally a combination of both the Scheduler trigger and Workday RaaS actions. First, provide a valid RaaS JSON URL. Refer to documentation about configuring Workday reports [here](/connectors/workday/workday_raas.html).

Next, configure the schedule. Refer to documentation about configuring an advanced scheduler [here](/features/scheduler.html).

![Scheduled report input](/assets/images/workday/scheduled_report_input.png)
*Scheduled report input*

### Outputs

This trigger returns a number of fields:
1. Scheduled time
2. Total number of records
3. Starting offset
4. Ending offset
5. First batch
6. Last batch
7. Rows

#### Scheduled time
This datapills tells you the time that the report was ran.

#### Total number of records
This tells you the total number of rows generated the scheduled run of the report. If this report has more than 200 rows, they will be split into batches of 200 rows per batch. Each batch will then be processed as individual jobs, in the same sequence as returned by the Workday RaaS endpoint.

#### Starting offset/Ending offset
These 2 datapills are used to indicate the number of rows offset for this batch. For example, if there are a total of 1000 rows and the current job is on the 2th batch (rows `201` to `500`), the Starting offset will be `200` and ending offset will be `499`.

#### First batch/Last batch
These 2 datapills are boolean fields which indicates if the existing batch is the first/last batch. This is useful in scenarios where you want to create a file from the output of a Workday report. Your recipe will contain the following logic:

if `First batch` is `true`
  create a new file with contents of the first batch

if `First batch` is `false`
append lines to an existing file

if `Last batch` is `true`
Send notification about successful transfer of report content

#### Rows
Each batch of rows is returned as an array. Each item in this array corresponds to a row in the report. Similarly, each column in your report will be rendered as a field in the output datatree.

![Scheduled report output](/assets/images/workday/scheduled_report_output.png)
*Scheduled report output*
