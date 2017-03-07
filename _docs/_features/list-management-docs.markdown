---
title: List management
date: 2017-03-06 16:00:00 Z
---

# List management
App integrations often work with lists, e.g. syncing sales invoices involves moving of line items, syncing customer accounts involves moving of associated leads and contacts, etc.

Workato is able to read from and write to lists in various ways.

# Reading from lists
Certain Workato triggers and actions returns a list of records in the output datatree. Lists are identified by their list icons in datatrees, as highlighted below.

![List datatree icon](/_uploads/_features/list-management/list-datatree-icon.png)

*List icon within datatree*

In the following examples, the example csv file is used:

```
Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3
Sierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches
Sierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches
Sierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches
```

## Using datapills directly from a list datatree
When using pills directly from a list, only the values of the first list item will be retrieved. In the following recipe, pills from the list are used directly in the **Log message** action.

![Recipe using list pills directly](/_uploads/_features/list-management/example-recipe-using-list-pills-directly.png) [Example recipe](https://www.workato.com/recipes/487919)

*Recipe using list pills directly in Log message action* [Example recipe](https://www.workato.com/recipes/487919)

[![https://gyazo.com/8b35298c73eddf54d629e8c323a05673](https://i.gyazo.com/8b35298c73eddf54d629e8c323a05673.gif)](https://gyazo.com/8b35298c73eddf54d629e8c323a05673)

*Field mappings for Log message action* [Example recipe](https://www.workato.com/recipes/487919)

In the job details page, the trigger output displays all three lines within the CSV file.

![CSV trigger output](/_uploads/_features/list-management/csv-trigger-output.png)

*Trigger output details displaying lines within the CSV file*

As the **Log message** action uses only datapills directly from the list, without handling the list in any way, only the first line's data is retrieved.

![Log message result](/_uploads/_features/list-management/log-message-result.png)

*Log message input displaying only the first line of data*

## Using datapills from a list datatree using Repeat step
[![https://gyazo.com/52deab1efa9062c4b543f510734dace1](https://i.gyazo.com/52deab1efa9062c4b543f510734dace1.gif)](https://gyazo.com/52deab1efa9062c4b543f510734dace1)

*Defining the expected columns in the CSV files that the recipe will pick up* [Example recipe](https://www.workato.com/recipes/485023)

The columns defined in the **Box new CSV file** trigger shows up as usable variables in the output datatree. These variables can be used to map into subsequent recipe steps.


[![https://gyazo.com/dbab89736dd49284cc000d33c13fd096](https://i.gyazo.com/dbab89736dd49284cc000d33c13fd096.gif)](https://gyazo.com/dbab89736dd49284cc000d33c13fd096)

*Mapping variables into input fields*

[![https://gyazo.com/ddeaa437a58a5068b5c4198a6a93a6b8](https://i.gyazo.com/ddeaa437a58a5068b5c4198a6a93a6b8.gif)](https://gyazo.com/ddeaa437a58a5068b5c4198a6a93a6b8)

*Lists as viewed in the datatree*

# Writing to lists

## Repeat step


## Input array


# Staging lists

## List connector (Accumulator)
