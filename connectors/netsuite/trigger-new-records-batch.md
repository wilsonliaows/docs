---
title: Workato connectors - NetSuite - New/updated records (batch)
date: 2019-02-20 06:00:00 Z
---

# NetSuite trigger - New/updated records (batch)

Triggers every 5 minutes. Depending on the name of the trigger you selected, the trigger will retrieve a list of NetSuite records created and/or updated since the last time the recipe was triggered. Maximum batch size is 200 records.

## Input fields
Select the NetSuite object to monitor. In this example, we select `Customer`.

![Select Netsuite record](/assets/images/connectors/netsuite/standard-record.png)

Optionally, you can configure these 2 optional fields:

| Field name | Description |
|---|---|
| When first started, this recipe should pick up events from | Trigger will retrieve NetSuite records created/updated from this date/time. |
| Batch size | Trigger may detect many new NetSuite records and process the records in several smaller batches. This field determines how many NetSuite records to retrieve in a batch. |

After that, you can proceed to configure the section `Output field configuration`. This section allows you to shortlist which NetSuite fields you want to use. Only those shortlisted fields will be displayed in trigger's output. This makes it easier to work with complex NetSuite objects with hundreds of fields.

In this example, we just want to use the fields `First name`, `Last name`, `Email`, `phone` from the `Customer` record:

![Field configuration](/assets/images/connectors/netsuite/field-config.png)

The followings are all input fields in this section:

| Field name | Description |
|---|---|
| Fields | The Netsuite record's main fields to be shortlisted. |
| Custom fields | The Netsuite record's custom fields to be shortlisted. |
| Custom segment schema | If your Netsuite record has custom schema, you can define the custom schema here. |
| Line item custom fields | The Netsuite record's line item custom fields to be shortlisted. |
| Line item custom segment schema | If your Netsuite line item has custom schema, you can define the custom schema here. |

## Output fields

| Field name | Description |
|---|---|
| Range | Trigger may detect many new NetSuite records and process the records in several smaller batches, based on the configured `Batch size`. This output field contains the first batch's job ID and last batch's job ID. |
| First batch's job ID | Trigger may detect many new NetSuite records and process the records in several smaller batches, based on the configured `Batch size`. This output field is the job ID of the first batch. |
| Last batch's job ID | Trigger may detect many new NetSuite records and process the records in several smaller batches, based on the configured `Batch size`. This output field is the job ID of the first batch. |
| Records | A [list data pill](/features/list-management.md) containing all NetSuite records retrieved by the trigger in this batch. You can use this to [iterate through all records in the list](/features/list-management.md).<br><br>Expand this data pill to find the NetSuite record's fields. Only fields shortlisted in the `Output field configuration` section will be displayed here. |
| Total number of record | Total number of records in this batch. |
| First batch | Whether this is the first batch. |
| Last batch | Whether this is the last batch. |
