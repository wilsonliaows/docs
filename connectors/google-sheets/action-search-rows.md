---
title: Google Sheets' action - Search rows
date: 2017-10-04 23:00:00 Z
---

# Google Sheets action - Search rows
![Action Search rows](/assets/images/connectors/google-sheets/action-search-rows.png)

## How it works
This action allows you to search for rows in a sheet using search values in each individual column. The action will search for **exact matches** of the search values you provide.

## How to use it
The following example will demonstrate how to use actions `Search rows` and `Update rows` together.

Our sample sheet is a list of items from different countries. For Google Sheets connector to work, the sheet needs to have at least 1 header row and 1 data row.

![Sample sheet](/assets/images/connectors/google-sheets/sample-sheet.png)

We realise there is an error in rows 3 & 4: `Region` of "Australia" should be "Australia and Oceania", not "Asia". Let's use the following Workato recipe to correct that. It will search for rows with `Country` = "Australia" and `Region` = "Asia", then update the `Region` to "Australia and Oceania" instead.

![Sample recipe of Google Sheets Search & Update ](/assets/images/connectors/google-sheets/sample-search-update-recipe.png)

This is how we setup the Search & Update actions:
- **Step 1 - Search rows**: We set `Region` = "Asia" and `Country` = "Australia". The action will search for rows matching those conditions.

   ![Search rows](/assets/images/connectors/google-sheets/sample-search-rows.png)

- **Step 2 - Repeat action**: Loop through the rows from `Search rows` result, using the `Rows` data pill.

    ![Search rows](/assets/images/connectors/google-sheets/sample-loop-rows.png)

- **Step 3 - Update row**: Use `Row number` data pill from the the `Foreach` loop to tell the action which row to update. We set the new `Region` value to "Australia and Oceania".

    ![Search rows](/assets/images/connectors/google-sheets/sample-update-row.png)

After we run the recipe, rows 3 & 4 are correctly updated:

![Sample sheet](/assets/images/connectors/google-sheets/sample-sheet-updated.png)

## Input
| Input field | Description |
|---|---|
| Spreadsheet | You can either select a spreadsheet from the dropdown, or use `Spreadsheet ID` data pill from the output of other Google Sheets triggers & actions. |
| Sheet | You can either select a sheet from the dropdown, or use `Sheet name` data pill from the output of other Google Sheets triggers & actions. |
| Columns | ![CSV columns](/assets/images/connectors/google-sheets/search-columns.png)<br>After you select a spreadsheet and a sheet, the columns in that sheet will be displayed here. Enter the values you want to search and Workato will search for **exact matches** of all those values.<br><br>For example, in the screenshot above, Workato will return all rows that satisfy this condition:<br>`Region` = `"Asia"` AND `Country` = `"Vietnam"` AND `Item` = `"Rice"` |

## Output
| Output pill | Description |
|---|---|
| Spreadsheet ID | ID of the spreadsheet. You can map this into `Spreadsheet` input field of other Google Sheets actions, instead of selecting the spreadsheet from the dropdown. |
| Spreadsheet name | Name of the spreadsheet. |
| Sheet name | Name of the sheet. You can map this into `Sheet` input field of other Google Sheets actions, instead of selecting the sheet from the dropdown. |
| CSV Rows | ![CSV columns](/assets/images/connectors/google-sheets/output-rows.png)<br>This `Rows` output pill represents the list of rows in the sheet. You can use this pill with [repeat step](https://docs.workato.com/recipes/steps.html#repeat-step) to loop through all rows in the sheet.<br><br> Expanding the pill, you will see the each row's `Row number` and all sheet columns, which can be used for mapping. |
