---
title: List management
date: 2017-03-06 16:00:00 Z
---

# List management
App integrations often work with lists, e.g. syncing sales invoices involves moving of line items, syncing customer accounts involves moving of associated leads and contacts, etc.

Workato is able to read from and write to lists in various ways.

# List setup
Various examples will be provided in this article on list management. The following sample CSV file will be used as the example list.

```
Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3
Sierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches
Sierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches
Sierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches
```

In most of the examples, the **Box** trigger **New CSV file** will be used to read this CSV file from a Box folder and parse it to Workato as a list of three CSV lines. Create a CSV file with the above CSV sample and upload into a specific Box folder for the **New CSV file** trigger to pick up.

If the above CSV file is the only CSV file in the selected Box folder in the trigger configuration, the fields list will be populated automatically with the column names. The column names has to correspond exactly with the header line in the CSV file in order for the CSV data to be mapped accurately to their columns.

[![https://gyazo.com/52deab1efa9062c4b543f510734dace1](https://i.gyazo.com/52deab1efa9062c4b543f510734dace1.gif)](https://gyazo.com/52deab1efa9062c4b543f510734dace1)

*Defining the expected columns in the CSV files that the recipe will pick up* [Example recipe](https://www.workato.com/recipes/485023)

The columns defined in the **Box new CSV file** trigger shows up as a list of usable variables in the output datatree. These variables can be used to map into subsequent recipe steps.

[![https://gyazo.com/ddeaa437a58a5068b5c4198a6a93a6b8](https://i.gyazo.com/ddeaa437a58a5068b5c4198a6a93a6b8.gif)](https://gyazo.com/ddeaa437a58a5068b5c4198a6a93a6b8)

*Row of CSV columns in the trigger output datatree*

Notice the row icon in the datatree. This identifies lists in the datatree.

![List datatree icon](/_uploads/_features/list-management/list-datatree-icon.png)

*List icon within datatree*

These datapills can be used to map into Workato actions' input fields. There are three ways to map datapills from lists:
- directly into an action without list processing
- into an action with a list input (action handles list processing implicitly)
- into an action with a Repeat step (action does not handle list processing, list processing needs to be done explicitly at the recipe logic level)

# Using datapills from lists

## Using datapills directly in an action without list processing
When using pills directly from a list, only the values of the first list item will be retrieved. In the following recipe, pills from the list are used directly in the **Log message** action.

![Example recipe using list pills directly](/_uploads/_features/list-management/example-recipe-using-list-pills-directly.png) [Example recipe](https://www.workato.com/recipes/487919)

*Recipe using list pills directly in Log message action*

[![https://gyazo.com/8b35298c73eddf54d629e8c323a05673](https://i.gyazo.com/8b35298c73eddf54d629e8c323a05673.gif)](https://gyazo.com/8b35298c73eddf54d629e8c323a05673)

*Field mappings for Log message action*

In the job details page, the trigger output displays all three lines within the CSV file.

![CSV trigger output](/_uploads/_features/list-management/csv-trigger-output.png)

*Trigger output details displaying lines within the CSV file*

As the **Log message** action uses only datapills directly from the list, without handling the list in any way, only the first line's data is retrieved.

![Log message result](/_uploads/_features/list-management/log-message-result.png)

*Log message input displaying only the first line of data*

## Using datapills in an action with a list input (action handles list processing implicitly)


## Using datapills in an action with a Repeat step (action does not handle list processing, list processing needs to be done explicitly at the recipe logic level)
In this example scenario, let's import a list of new inventory items (recorded within a CSV file just uploaded into Box) into a NetSuite instance. There is a list to read from with the Box connector's **New CSV file** trigger, but no list processing capabilities in the NetSuite connector's **Add inventory item** action.

In order to move through the list and create three NetSuite inventory items, the Repeat step should be used to iterate through the list, and carry out the same action for each iteration.

![Example recipe using repeat step](/_uploads/_features/list-management/example-recipe-using-repeat-step.png) [Example recipe](https://www.workato.com/recipes/487921)

To iterate through the Rows list, pass the Rows list object as input for the repeat step. The recipe will therefore iterate through the list thrice to repeat the "Add inventory item" action thrice, with different values from different CSV lines each time.

![Repeat step input list](/_uploads/_features/list-management/repeat-step-input-list.png)

*Provide the list object as input for repeat step*

When using the Repeat step, the important thing to note is to retrieve datapills from the For each datatree.

[![https://gyazo.com/217a8b83b7d15d8f3dc0fde77cefe3c5](https://i.gyazo.com/217a8b83b7d15d8f3dc0fde77cefe3c5.gif)](https://gyazo.com/217a8b83b7d15d8f3dc0fde77cefe3c5)

*Mapping datapills from the Foreach datatree*

This ensures that, when the list is being iterated through, the first **add inventory item** step uses the first line:

```
Sierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches
```

The second **Add inventory item** step uses the second line:
```
Sierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches
```

And the third **Add inventory item** step uses the third line:
```
Sierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches
```



# Staging lists

## List connector (Accumulator)
