---
title: Jobs
date: 2017-03-23 14:00:00 Z
---

# Jobs
Jobs are a single run of the recipe, and refer to a trigger event that is picked up by the recipe and processed through the recipe steps.

# Job statuses
Jobs can have the following statuses:

- Completed

Completed indicates that the job has ended without getting an error.

- Pending

Pending indicates that the job is still being processed, or waiting for something, e.g. Scheduler's **Wait** action will wait for a specified period of time, while People Task's **Request task approval** action will wait for the reviewer to respond or the task to expire.

- Failed

Failed indicates that the job has ended unexpectedly because of an error. Such jobs may create incomplete records in your apps as it failed before it could manage to complete its run.

- Aborted

Aborted is a rare state that a job gets into if it had been pending when the recipe was stopped and changed in a manner that affects those jobs (i.e. if we changed steps that the job had already carried out). Because the recipe logic has changed, any pending jobs will be aborted.

## Jobs report
Every recipe has a jobs report that shows a high-level view of processed jobs. Clicking on a single job brings you into a detailed job history that shows step-level execution data flows.

![Jobs history](/assets/images/workato-concepts/jobs-history.png)

*Jobs report page*

You can find out more about jobs reports [here](/recipes/jobs-report.md).

## Rerunning jobs
When a job fails, it can be reran easily once the issues causing its failure has been remedied. You can find out more about job reruns [here](recipes/rerun-job.md).

## Data retention policy
Data retention applies to jobs reports and job histories. This means that older jobs might have their details cleared. Find out how the data retention policy affects recipe jobs [here](data-retention.md).