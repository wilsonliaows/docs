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

