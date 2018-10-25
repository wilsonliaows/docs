---
title: Workato connectors - NetSuite classification record trigger
date: 2018-10-25 16:15:00 Z
---

# New classification record trigger
This trigger monitors classification records in NetSuite, such as departments, locations and classifications. Classification records are different from other NetSuite standard and custom records as they do not have a `Last modified` timestamp. As a result, classification records are not able to have a **New/updated classification record** trigger.

When the recipe is first started, all the existing records of the selected classification object will be picked up by the recipe. Subsequently, only newly created records will be processed by the recipe.

![New classification object trigger that monitors Location records](/assets/images/connectors/netsuite/new-classification-object-trigger.png)
*New classification object trigger that monitors Location records*

For example, if locations is selected as the object to trigger upon, all existing location records will be picked up by the recipe when it's first started. Subsequently, if the recipe is kept running, only newly created location records will be picked up.

## Output datatree configuration
In this trigger, you can configure the data to fetch from NetSuite so as to optimize your NetSuite API traffic. You can use the following custom fields and custom segment input fields to define the custom data to retrieve from NetSuite.

![Input fields for output datatree configuration](/assets/images/connectors/netsuite/output-datatree-configuration.png)
*Input fields for output datatree configuration*

Select only the fields you wish to use in your recipe, and your trigger datatree will generate only those fields. Refer to the [custom fields article](custom-fields.md) for more details on configuring this.

## Trigger behaviour when recipe is stopped and restarted
If the recipe is stopped, it will resume from the time that it was stopped at when restarted, i.e. all location records created while the recipe as stopped will still be picked up by the restarted recipe.
