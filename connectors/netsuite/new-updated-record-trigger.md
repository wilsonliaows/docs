---
title: Workato connectors - NetSuite new/updated record trigger
date: 2018-10-25 16:15:00 Z
---

# New/updated record trigger
The new/updated standard object and new/updated custom object trigger are similar. This section covers both. [Certain records are not supported](/connectors/netsuite.md#unsupported-records) in the trigger due to API limitations.

## Configuring the trigger
To use this trigger, we need to first select the standard object or the custom object to monitor. We also need to input the datetime from the **From** field to pinpoint the exact date from which the recipe should start processing records.

![Unconfigured NetSuite new/updated object trigger](/assets/images/connectors/netsuite/unconfigured-netsuite-new-updated-trigger.png)
*NetSuite new/updated object trigger - unconfigured. Select the object to monitor for newly created or updated records.*

When the recipe is first started, all the existing records of the selected object created or updated after the datetime in the **From** field will be picked up by the recipe. Subsequently, any newly created records or updated records will be processed by the recipe.

For example, I've selected sales order and 1 Oct, 2018 midnight for my trigger as below.

![Configured NetSuite new/updated object trigger](/assets/images/connectors/netsuite/configured-netsuite-new-updated-trigger.png)
*NetSuite new/updated object trigger - configured*

When I first start my recipe, all sales orders created or updated from or after 1 Oct, 2018 midnight, will be processed. Subsequently, if the recipe is kept running, any sales orders which have been newly created or updated will be picked up by the recipe.

## Output datatree configuration
In this trigger, you can configure the data to fetch from NetSuite so as to optimize your NetSuite API traffic. You can use the following custom fields and custom segment input fields to define the custom data to retrieve from NetSuite.

![Input fields for output datatree configuration](/assets/images/connectors/netsuite/output-datatree-configuration.png)
*Input fields for output datatree configuration*

Select only the fields you wish to use in your recipe, and your trigger datatree will generate only those fields. Refer to the [custom fields article](custom-fields.md) for more details on configuring this.

## Trigger behaviour when recipe is stopped and restarted
If the recipe is stopped, it will resume from the time it was stopped at when restarted, i.e. all sales orders created or updated while the recipe was stopped will still be picked up by the restarted recipe.

Do note, however, that the recipe will only pick up the last (most updated) version of the record. For example, if a record was newly created and had 3 updates made to it while the recipe was stopped, the recipe will only pick up the last updated version of the record when it's restarted again.
