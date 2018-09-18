---
title: Connectors design guide - trigger output
date: 2018-09-05 15:30:00 Z
---

# Trigger output
There are some common trigger outputs as detailed in the following table.

| Trigger output                                                | Description                                                                                                                                                                                  |
|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Record fields](#trigger-output---record-fields)              | All the data fields of the record that the trigger is fetching as a trigger event. E.g. if the trigger event is **New lead**, then the record fields would be lead name, email, mobile, etc. |
| [Batch metafields](#trigger-output---batch-metafields)        | Specific for batch triggers. Metafields such as boolean fields `First batch?`, `Last batch?`, `ID of first record in batch`, `ID of first record in batch`, etc.                             |

## Trigger output - record fields
We usually return the full API response back to the user in the trigger datatree. In the following, we see that the **New/updated Salesforce lead** trigger has all the data fields of the lead available.

![Trigger output datatree for new/updated Salesforce lead trigger](/assets/images/connectors-design-guide/trigger-output-single-record.gif)
*Trigger output datatree for new/updated Salesforce lead trigger*

For batch triggers that return a list, we correspondingly return a list in the trigger datatree. In the following, we see that the **New/updated Salesforce lead (batch)** trigger has a list of leads.

![Trigger output datatree for new/updated Salesforce lead (batch) trigger](/assets/images/connectors-design-guide/trigger-output-batch-records.gif)
*Trigger output datatree for new/updated Salesforce lead (batch) trigger*

If we expand this list, we see all the data fields of the lead available for use in our recipe.

![Trigger output datatree for new/updated Salesforce lead (batch) trigger](/assets/images/connectors-design-guide/trigger-output-batch-records.png)
*Trigger output datatree for new/updated Salesforce lead (batch) trigger*

## Trigger output - batch metafields
Batch metafields are specific to batch triggers that return lists of records per trigger event.

Examples of batch metafields are:
- First batch?
- Last batch?
- ID of first record in batch
- ID of last record in batch

These fields are useful in cases where the number of records returned by the regular [polling trigger](/recipes/triggers.md#polling-triggers) or the [scheduled query trigger](/recipes/triggers.md#scheduled-triggers) exceeds the batch number. For example, if a user is loading records into a CSV file, it is useful to identify the first batch so that she can creata a new CSV file for storing all the data, and then to identify the last batch so she stops writing to that CSV file. In another example use case where records are moved in bulk daily to a data warehouse, identifying the first batch allows the user to create a status update that the daily data sync is "In progress", and identifying the last batch allows them to update the status to "Completed".
 
Batch metafields are returned in Salesforce's new leads (batch) trigger, as the trigger returns lead records in batches.

![Batch metafields in Salesforce's new leads (batch) trigger](/assets/images/connectors-design-guide/salesforce-new-leads-batch-metafields.png)
*Batch metafields in Salesforce's new leads (batch) trigger*

Batch metafields are also returned in Box's new CSV file trigger, as the trigger returns a CSV file in batches of CSV lines.

![Batch metafields in Box's new CSV file trigger](/assets/images/connectors-design-guide/box-new-csv-file-batch-metafields.png)
*Batch metafields in Box's new CSV file trigger*
