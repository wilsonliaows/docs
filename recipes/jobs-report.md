---
title: Job details
date: 2017-02-18 22:15:00 Z
---

# Jobs report
Every recipe has a jobs report that shows a high-level view of processed jobs. The entire flow of each trigger event through the recipe is called a job.

Information such as date, time processed and job IDs, can be found here. The following shows the default jobs report page.

![Default jobs report](/assets/images/job-details/default-jobs-report.png)

*Non-customized, default jobs report page*

# Customized jobs report
Jobs report can be further customized to show the relevant information for the jobs processed, as seen in the following.

![Custom jobs report](/assets/images/job-details/custom-jobs-report.png)

*Customized jobs report page*

To cuztomize your jobs report, go to the Jobs tab and click on 'Customize report' next to the Rerun and Refresh buttons.

![customize report](/assets/images/job-details/customize-report.JPG)

You can use data pills from any datatrees in your recipe for the column values. After a job has been processed, the relevant data will show up in the custom jobs report. In the example below, the custom jobs report contains the Xero invoice ID, Infusionsoft invoice ID, as well as payment and contact information. It is good practice to customize the job report to be able to easily identify jobs.

![customize report2](/assets/images/job-details/customize-report2.JPG)

# Job details
From the jobs report, you can view detailed information about each job as well as step-level information. This is useful in several ways:

- Debugging your recipe

In the early stages of testing a recipe, jobs may show up as completed in the jobs report, but they might not be processed in the manner you expect - taking a look at the exact steps processed by the recipe will help in ensuring the recipe is processing jobs in the expected workflow.

- Troubleshooting your job errors
If jobs fail, you can take a look at the run-time data to understand why the job failed at specific step it failed at.

To view a job's details, simply click on the job you are interested in seeing.

![jobs](/assets/images/job-details/jobs.JPG)

Each line of the report gives the details of one job. A job is shown in this report every time the recipe is triggered, whether complete, pending or with error.

## How to read the job report

The general details of the job are displayed on the top of the job report. This includes the Status of the job, it's Description, the date and time this job Started at and was Completed, and the recipe version with which this job ran.

![report1](/assets/images/job-details/report1.JPG)

Below these details, you should see the recipe's steps that were run in this job. Click on each line to see what data was used in the step.

### Input

The input is the data used as specified on the action in the recipe.

For example, in this search step, which uses the specific string **"Xero Invoice + `Invoice Number`** to search for an order title, the input contains the string and the number of the invoice used in this job.

![recipevsreport](/assets/images/job-details/recipevsreport.png)

### Output

The output is the information is found from the specific input. In this case, the invoice number used yielded the following information:

![reportoutput](/assets/images/job-details/reportoutput.JPG)

Looking at the output in the steps can tell you vital information about why a job has failed. Often, the output used in a specific step may be empty, thus using the data pills from that step in a later part of the recipe will not yield anything.

### Errors

When the job throws an error, view which step this occurs at and the error details on this page. The step with the error is indicated with a red line.

![report5](/assets/images/job-details/report5.JPG)

### For-each Loops

### Conditional Actions

In conditional actions, there is only an "Output" tab. The output will have one of two values: "True" or "False" which determines whether the nested actions will take place.

When the value is "False", the nested actions will be skipped and the recipe proceeds to the next possible action.

![report3](/assets/images/job-details/report3.JPG)

When the value is "True", the nested actions will be completed.

![report4](/assets/images/job-details/report4.JPG)

