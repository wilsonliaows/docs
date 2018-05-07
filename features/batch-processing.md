---
title: Batch processing
date: 2017-03-06 15:30:00 Z
---

# Batch processing

Typically, 1 Workato [job](https://docs.workato.com/recipes/jobs.html) processes 1 row of data or 1 record. Batch processing simply means that 1 job processes multiple rows of data or multiple records. This will increase speed and data throughput when you move a large number of records from one app to another.

Let's look at the example below to understand the concept of batch processing (or Batching).

![Batching example](/assets/images/features/batch-processing/batching-example.png)
*Simple example of Batching*

Larger batch size means we need fewer jobs and fewer API calls to move the same amount of data. As a result, [recipe](https://docs.workato.com/workato-concepts.html#recipes) run time often decreases. The following chart shows how different batch sizes can reduce running time when Workato moves 100,000 rows of data.

![Batching example](/assets/images/features/batch-processing/batching-graph.png)
*Time saving using Batching*

You can find batching-supported [triggers](https://docs.workato.com/recipes/triggers.html) and [actions](https://docs.workato.com/recipes/actions.html) in certain connectors, such as database connectors (SQL Server, MySQL, etc.), cloud storage connectors that work with CSV files (e.g. Box, Amazon S3), Salesforce connector, etc. For best result, always match a batch trigger with batch actions.

![Batch trigger example](/assets/images/features/batch-processing/batch-trigger.png)
*Example of a Batch trigger*

![Batch action example](/assets/images/features/batch-processing/batch-action.png)
*Example of a Batch action*

## Batch triggers

For normal triggers, 1 [trigger event](https://docs.workato.com/recipes/triggers.html) often contains 1 data record. For example, "a new account is created in Salesforce" is 1 trigger event. It will trigger a Workato [recipe](https://docs.workato.com/workato-concepts.html#recipes) to create a [job](https://docs.workato.com/recipes/jobs.html) and process 1 data record (i.e. that new account in Salesforce).

For Batch triggers, 1 trigger event contains multiple records (e.g. 50 accounts in Salesforce). A job will thus process multiple records at once. The `Batch size` determines the maximum number of records in 1 trigger event.

### Batch trigger example
The Salesforce batch trigger has a default value of 100. In this case, each trigger event will contain a maximum 100 account records.

![Batch trigger](/assets/images/features/batch-processing/batch_trigger_config.png)
*Batch trigger with a batch size of 100*

The job details for each trigger event will contain the specific details of only the first and last record in the list.

![Batch trigger](/assets/images/features/batch-processing/trigger-output-new-accounts-batch.gif)
*Job details - trigger output for a batch of new accounts in Salesforce*

 For example, when the following recipe was first started, 843 records were fetched from 1 Jan 2015, midnight PST. These records were broken up into 8 trigger events of 100 records each, and 1 trigger event of 43 records. The next poll, 5 minutes later, fetched only 2 new account records created.

![Batch trigger](/assets/images/features/batch-processing/batch_trigger_job_report.png)
*Custom job report displaying account batches' details - names of first and last accounts in the batch, as well as batch size*

## Batch actions
Batch actions are typically of the form **Create batch** or **Update batch** or **Upsert batch**. Accordingly, these actions create a list of new records, update a list of existing records, or upsert (create if record doesn't exist, update if record exists) a list of records.

### Batch create actions
Batch create actions create multiple records in a single action (typically corresponding to a single API call). Batch create actions usually accept a list of records as input, therefore typically recipes will:
- move a list of records from source app to target app, or
- prepare a list of records via building and accumulating data in a custom list, then moving that prepared list into the target app

## Batch create action example
The following is an example scenario that imports new products from a Box CSV file into Salesforce via the **Bulk insert** action.

![Example recipe using list input](/assets/images/features/batch-processing/example-recipe-using-input-list.png)
*Example recipe using list input.*

Actions that take lists as inputs will have a input field called **Source list**, which will only take in list pills. When these list input fields are selected, the datatree changes to offer only list pills. The Rows list object pill is mapped into the Salesforce product source list input field.

![Example input source list](/assets/images/features/batch-processing/example-input-source-list.png)
*Rows list object is mapped into the Salesforce products input source list*

For the list object passed into the input source list, the list will be transferred from the source app to the target app, with the values being trasnferred based on the fields mapped in the recipe. The three inventory items will be moved from Box into Salesforce as products.

![Mapping of list pills](/assets/images/features/batch-processing/mapping-of-list-pills.gif)
*Mapping of list datapills to list input*

The following shows the CSV file content.

![CSV trigger output](/assets/images/features/batch-processing/csv-trigger-output.png)
*Trigger output details displaying lines within the CSV file*

The action output in the job history shows that three products have been created accordingly in Salesforce.

![Salesforce bulk insert via input list](/assets/images/features/batch-processing/job-output-sf-bulk-insert.png)
*Salesforce bulk insert via list input*

## Maximize data throughput with batch processing
To maximize data throughput, you always want to match batch triggers with batch actions.

You can also raise throughput even further by increasing recipe concurrency. This means Workato will run multiple jobs at the same time, instead of running them one by one.

The following pictures show how to enable concurrency in a Workato recipe, and how batching & concurrency work together.

![Enable concurrency](/assets/images/features/concurrency/concurrency.png)
*Setup concurrency in a Workato recipe*

![Increasing throughput in Workato via different mechanisms](/assets/images/features/batch-processing/increasing-throughput.png)
*Increasing throughput in Workato via batching & concurrency*
