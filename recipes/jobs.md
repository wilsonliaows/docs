---
title: Jobs
date: 2017-03-23 14:00:00 Z
---

# Jobs
When an 'active' recipe processes a trigger event i.e. actions in the recipe are executed, it results in a **job**. The set and sequence of actions executed depends on the data of the specific trigger event.

Workato provides complete details into the execution flow of a job i.e. what steps were executed, and the data input and output from every step.

Workato also supports rerunning jobs.

# Job status
Jobs can have the following statuses:

- Completed
Completed indicates that the job was processed successfully.

- Failed
Failed indicates that the job ended because of an error. Errors can generally be attributed to failures in executing actions. e.g. an app was not reachable, or a contact being added already exists, etc. A

When an error is encountered, job execution stops i.e. downstream steps are not executed.

Such jobs may create incomplete records in your apps as it failed before finishing all steps.

- Pending
Pending indicates that the job is still being processed.

- Aborted
Aborted is a rare state that a job can get into if it has pending jobs and the recipe has been affected in a manner that these pending jobs cannot finish processing.

## Jobs report
The jobs report is a record of all processed jobs. For each processed job, you can view complete details i.e. execution flow, data input/output from every step.

![Jobs history](/assets/images/workato-concepts/jobs-history.png)
*Jobs report page*

You can find out more about jobs reports [here](/recipes/jobs-report.md).

## Rerun jobs
Any job (completed, failed, etc.) can be rerun. Workato stores the trigger event, and will rerun a job using this copy of the trigger event.

Rerun of a job will always use the latest version of the recipe. i.e. if the recipe has been modified since the job ran, rerun will use the most recent version.

You can find out more about job reruns [here](recipes/rerun-job.md).

# Jobs report
The jobs report is a record of all processed jobs. For each processed job, you can view complete details i.e. execution flow, data input/output from every step.

Information such as date, time processed and job IDs, can be found here. The following shows the default jobs report page.

![Default jobs report](/assets/images/job-details/default-jobs-report.png)
*Non-customized, default jobs report page*

# Custom report
Jobs report can be further customized to show any data available in the recipe. e.g. if processing invoices, your job report can have Invoice ID, Invoice amount, etc.

![Custom jobs report](/assets/images/job-details/custom-jobs-report.png)
*Customized jobs report page*

To create a custom jobs report, click on 'Customize report' next to the Rerun and Refresh buttons.

![customize report](/assets/images/job-details/customize-report.JPG)
*Customize report button*

You can use data pills from any data tree in your recipe for the column values. In the example below, the custom jobs report contains the Xero invoice ID, Infusionsoft invoice ID, as well as payment and contact information.

![customize report2](/assets/images/job-details/customize-report2.JPG)
*Popup where customization of jobs report takes place*

# Job details
From the jobs report, you can view detailed information about each job as well as step-level information. This is useful in several ways:

- Debugging your recipe

During testing, jobs may show up as completed in the jobs report, but they might not be processed in the manner you expect - taking a look at the exact steps processed by the recipe will help in ensuring the recipe is processing jobs in the expected manner.

- Troubleshooting your job errors

If jobs fail, you can take a look at the run-time data to understand why the job failed at specific step.

To view job details, simply click on the job you are interested in seeing.

![jobs](/assets/images/job-details/jobs.JPG)
*Job details*

## How to read the job report
The summary of the job is displayed on top of the job report. This includes the status, description, start and end time, and the recipe version.

![report1](/assets/images/job-details/report1.JPG)
*Job detail header*

For every action, the input and output data is available.

In the image below, in the search step, which uses the specific string **"Xero Invoice + `Invoice Number`** to search for an order title, the input contains the string and the number of the invoice used in this job.

![recipevsreport](/assets/images/job-details/recipevsreport.png)
*Fields mapping showing recipe input*

Here is how the output looks like.

![reportoutput](/assets/images/job-details/reportoutput.JPG)
*Job details showing step output*

Looking at the output in the steps can tell you vital information about why a job has failed. Often, the output used in a specific step may be empty, thus using the data pills from that step in a later part of the recipe will not yield anything.

### Errors
When the job throws an error, view which step this occurs at and the error details on this page. The step with the error is indicated with a red line.

![report5](/assets/images/job-details/report5.JPG)
*Error in recipe step*

### Conditional step

In conditional actions, there is only an "Output" tab. The output will have one of two values: "True" or "False" which determines whether the nested actions will take place.

When the value is "False", the nested actions will be skipped and the recipe proceeds to the next possible action.

![report3](/assets/images/job-details/report3.JPG)

When the value is "True", the nested actions will be completed.

![report4](/assets/images/job-details/report4.JPG)