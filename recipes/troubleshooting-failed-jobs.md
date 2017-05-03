# Troubleshooting Failed Jobs

A big part of achieving success with Workato integrations lies in your ability to manage recipe errors. Whenever you run a recipe, your objective is to complete all jobs successfully. However, more often than not, you will encounter errors in one or more of the jobs. But that's okay, Workato offers an easy way for you to identify job errors so that you can quickly begin to resolve them. 

From your Recipes Home, you can already see which recipes have errors, and specifically how many errors (failed jobs).

![troubleshooting-failed-jobs-1](/assets/images/recipes/troubleshooting-failed-jobs/troubleshooting-failed-jobs-1.png)

**Jobs History**: To see a summary about your jobs, click into the Jobs tab in your recipe page to view your Jobs Report - you will see a list of jobs that the recipe ran through, with basic details such as Job ID, Start date, and Description provided. You can choose what details you would like to see by customizing your job report. You can also Filter the jobs by Job status e.g. Completed, Pending, or Failed, or Data range, or Job type e.g. rerun which means any job that has ran more than once. You can easily identify jobs that have failed, indicated by the RED colored Job ID.

**Job Reports**: From the Jobs History view, you can click into each individual job to about up the job report for that job. You will be able to see the input and output of each recipe step that was processed for that particular job. Take a look at the next section to learn more about understanding the job report.


## Understanding Job Reports

Now that you learnt how to view failed jobs, its time to learn how to understand failed job reports. When you click into any job, you will be able to take a look at the specific job report. You can click into each step of the recipe to look into each step's input and output for that particular job.

![troubleshooting-failed-jobs-2](/assets/images/recipes/troubleshooting-failed-jobs/troubleshooting-failed-jobs-2.png)

Interpreting the Job Report - Basic information that you should know:

|Name|Description|
|------|-------|
|Description|Gives you brief information on the job that was run, you can also customise it under your job reports|
|Version|Tells you what version of your recipe this job was run on. You can click on it to see the recipe in that version|
|Error|A description of the error, may include the field that caused the error|
|Error type|A description of the nature of the error|
|Source|Which connector (app) the error is coming from|
|ErrorID|The Error ID is generally for our engineering team's analysis if the error message has not been informative at all. (eg. internal error)|
|Red Line \|  |The red line shows the step that is throwing the error. (In the above case, this is on step 5)|


Common Root Causes for Job Failure are: 
  1. A Required input field was empty. It may not be filled with any value, or the data pill used in that field does not have any value.
  2. An object couldn't be found using the key/ID provided in the field.
  3. You attempted to create an object with the same/existing names available.
  4. Improper Formula mode conditions were applied on a null pill 


Tracing your Recipe Steps

When your recipes get too complicated, errors are hard to follow. The best way to trace your errors is a bottom-up approach. Start from where the error is coming from, and work your way from there and follow the data. Here is the general flow of steps to identify errors.
1. Identify which step and which field is giving/causing the error. 
2. Open up your recipe in a new browser tab. Check what is filled up in that specific field
3. If there's a pill involved, hover over it and you can see which step's output you used the pill from. 
4. Based on that the pill and the output step number, go back to your job details page and check out what is the value that is given in the output. .
5. You can keep going down the chain to reach the root of the data source. 


To see an example of using the above workflow, check out this solution article. 
