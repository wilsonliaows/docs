---
title: Workato connectors - NetSuite - Upsert records in bulk
date: 2019-02-15 06:00:00 Z
---

# NetSuite Action - Upsert records in bulk

The actions `Upsert standard records in bulk` and `Upsert custom records in bulk` allow you to upsert in bulk standard records or custom records.

They accept a list of a maximum 200 records. Actions will fail if more than 200 records are provided.

## Input fields

Select the `Standard record` or `Custom record` you want to upsert. In this example, we select `Customer`:

![Select Netsuite record](/assets/images/connectors/netsuite/standard-record.png)

After that, you can proceed to configure the next sections.

### Field configuration
This section allows you to shortlist which NetSuite fields you want to use. Only those shortlisted fields will be displayed in action's input and output. This makes it easier to work with complex NetSuite objects with hundreds of fields.

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

### Record
This section's name will change based on your selected `Standard record` or `Custom record`. In this section, you will provide data mappings to upsert the NetSuite records.

In the example below, we map the data from the Box trigger `New CSV file in directory` into NetSuite record `Customer`. Notice that only the shortlisted fields `First name`, `Last name`, `Email`, `phone` are displayed here.

You also need to map the record's `External ID` so NetSuite can know which records to upsert. In this case, our CSV records from Box contain `Emp ID`, which is mapped to NetSuite 's `External ID`. Based on this mapping, NetSuite will update the record if the provided External ID exists, or create a new record if the provided External ID does not exist.

![Field mappings](/assets/images/connectors/netsuite/batch-mapping-upsert.png)

The followings are all input fields in this section:

| Field name | Description |
|---|---|
| Record source list | You need to provide a [list data pill](/features/list-management.md) here. For example, list of rows in a CSV file. The action will automatically iterate through all items in the list and map them to NetSuite records. |
| External ID | NetSuite record can have an External ID, which refers to the corresponding record ID from another system (e.g. Salesforce record ID). When importing data from another system, NetSuite uses this to determine which record to upsert. |
| Record fields | Here you need to map the data pills under the list data pill provided above. For example, CSV column names under the `CSV Rows` list data pill. The action will automatically iterate through all items in the list and map them to NetSuite records. |

### Output fields

| Field name | Description |
|---|---|
| Number of processed records | Total number of records processed. |
| Number of successful records | Number of records successfully upserted. |
| Number of failed records | Number of records failed to be upserted. |
| Successful records | A list data pill containing all successful records. You can use this to [iterate through all records in the list](/features/list-management.md). The data fields of each record is shown below: |
| - Internal ID | Internal ID of this record. |
| - External ID | External ID of this record. |
| - Record | Contains all data fields of this record. |
| - List size | Number of successful records in this list. |
| Failed records | A list data pill containing all failed records. You can use this to [iterate through all records in the list](/features/list-management.md). The data fields of each record is shown below: |
| - Error | A list data pill containing all errors of this record. You can use this to [iterate through all errors in the list](/features/list-management.md). |
| - Record | Contains all data fields of this record.  |
| - List size | Number of failed records in this list. |
