---
title: Batch processing
date: 2017-03-06 15:30:00 Z
---

# Batch processing

## Batch triggers
Batch triggers are similar to polling triggers in fetching the same records. However, where polling triggers have trigger events corresponding to a single record, batch triggers have trigger events corresponding to a list of records. Maximum batch size can usually be defined in the trigger configuration.

### Batch trigger example
The Salesforce batch trigger has a default value of 100. In this case, each trigger event will contain a list of maximum 100 account records.

![Batch trigger](/_uploads/triggers-docs/batch_trigger_config.png)

*Batch trigger with a batch size of 100*

The job details for each trigger event will contain the specific details of only the first and last record in the list.

[![https://gyazo.com/1813107b9965a759a4ab7ba92cad18ef](https://i.gyazo.com/1813107b9965a759a4ab7ba92cad18ef.gif)](https://gyazo.com/1813107b9965a759a4ab7ba92cad18ef)

*Job details - trigger output for a batch of new accounts in Salesforce*

As the batch trigger polls at a regular basis, each poll may fetch more or less than the batch size defined in the trigger. For example, when the following recipe was first started, 843 records were fetched from 1 Jan 2015, midnight PST. These records were broken up into 8 trigger events of 100 records each, and 1 trigger event of 43 records. The next poll, 5 minutes later, fetched only 2 new account records created.

![Batch trigger](/_uploads/triggers-docs/batch_trigger_job_report.png)

*Custom job report displaying account batches' details - names of first and last accounts in the batch, as well as batch size*