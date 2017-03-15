---
title: Handling CSV files
date: 2017-03-07 22:00:00 Z
---

# Handling CSV files
Workato is able to parse CSV files' content as variables to be used in Workato recipes.

## Example CSV file setup
The following sample CSV file will be used as the example file.

```
Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3
Sierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches
Sierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches
Sierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches
```

## Parsing CSV files via connectors' in-built CSV parsing capability
Certain connectors are able to process CSV files in particular and move individual values from these CSV files into other apps, for example, from the above CSV file:
```
Sierra Gardening
MS-323
Cherry
Natural
```

This is as opposed to simply moving entire files between apps. An example of such a connector is the Box connector. With such connectors, you can simply listen to new CSV files and parse them via the same Workato trigger to move the data into another app.

### Parsing CSV files via connectors' in-built CSV parsing capability - example
In the following recipe, the **Box** trigger **New CSV file** will be used to read the sample CSV file from a Box folder and parse it to Workato as a list of three CSV lines. To try it out, create a CSV file with the above CSV sample and upload into a specific Box folder for the **New CSV file** trigger to pick up.

The Box trigger picks up a sample CSV file within the selected folder and uses the header line of that CSV file to generate a set of **Field names**. Edit this list if it's not correct.

If the above CSV file is the only CSV file in the selected Box folder in the trigger configuration, the fields list will be populated automatically with the column names. The column names has to correspond exactly with the header line in the CSV file in order for the CSV data to be mapped accurately to their columns.

The following recipe parses new CSV files in Box and uses the data parsed to create new NetSuite inventory items.

![Example recipe - CSV file parsing](/_uploads/_features/files-and-attachments/csv-file-parsing-recipe.png)

*Recipe that parses CSV files to retrieve data for use in datatree* [Example recipe](https://www.workato.com/recipes/485023)

When using **Box new CSV file** trigger, the expected columns in CSV files has to be declared for Workato to know how the data is structured. From this declaration, Workato will build the trigger output datatree for use in subsequent actions.

[![https://gyazo.com/52deab1efa9062c4b543f510734dace1](https://i.gyazo.com/52deab1efa9062c4b543f510734dace1.gif)](https://gyazo.com/52deab1efa9062c4b543f510734dace1)

*Defining the expected columns in the CSV files that the recipe will pick up* [Example recipe](https://www.workato.com/recipes/485023)

The columns defined in the **Box new CSV file** trigger shows up as usable variables in the output datatree. These variables can be used to map into subsequent recipe steps.

[![https://gyazo.com/dbab89736dd49284cc000d33c13fd096](https://i.gyazo.com/dbab89736dd49284cc000d33c13fd096.gif)](https://gyazo.com/dbab89736dd49284cc000d33c13fd096)

*Using the variables created from the columns definition* [Example recipe](https://www.workato.com/recipes/485023)

## Parsing CSV files via Utility connector's CSV parsing capability


## Parsing CSV files via Utility connector's CSV parsing capability - example



![Example recipe - CSV file parsing with utilities](/_uploads/_features/files-and-attachments/utilitites-parse-csv-example-recipe.png)


![Utilities action - Parse CSV](/_uploads/_features/files-and-attachments/parse-csv-utilities-step.png)