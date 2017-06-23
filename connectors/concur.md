---
title: Concur
date: 2017-02-16 06:15:00 Z
---

# Concur

## Concur: Troubleshooting Step Failures - Create list item

Some common reasons for your recipe failing at this step are:

### 1) Duplicated same-level code
Concur does not allow codes to be duplicated at the same level, hence jobs that attempt to give a list item a code that already exists at that same level will fail.

![Concur List Item](/assets/images/connectors/concur/create_list_item.png)
*Create List Item*

### 2) Invalid parent codes
If you are creating a Level 2 list item, you have to provide a valid Level 1 code that corresponds to the parent of the Level 2 list item you wish to create (for example, a Level 1 code corresponding to an existing client will need to be provided when you wish to create a Level 2 code corresponding to projects under that client).

If the Level 1 code specified in your recipe does not exist, you will have to either manually create the list item, or run a recipe that syncs your higher-level (parent list items, i.e. Level 1) list items across your apps before running the recipe that syncs your lower-level (child list items, i.e. Level 2) list items.

## Concur Error: 401 or 503 errors because of privilege

### Error: 
When working with Concur, you may get this error: Unauthorized: 401 Unauthorized or 503
 
### What does this mean?: 
The issue is caused by the concur credentials not having access to web service settings. 

### Solution: 
Please check with your administrator.

## Why don't I see my expense sheet custom fields in Workato?

If you're using the new expense sheet trigger in the Concur connector, you should be able to view the standard fields and custom fields in the datatree of the trigger (i.e. datatree will be visible in subsequent recipe steps).

However, if you're not seeing your custom fields, it might be because these custom fields were not configured in the Default Expense Entry type form. Workato currently pulls the custom fields out from the Expense Entry type form > Default form. For example, in the following screenshot, Project and Customer will show up as custom fields as they're found within the Default form.

![Concur List Item](/assets/images/connectors/concur/expense_entry.jpg)
*Concur List Item*

If you can't view the custom fields you care about, check that:
1) the form is named exactly "Default", and
2) the fields you wish to see are within this "Default" form. If not, simply proceed to add them, then refresh your recipe schema in Workato.

