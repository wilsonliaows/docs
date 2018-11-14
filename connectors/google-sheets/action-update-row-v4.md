---
title: Google Sheets' action - Update row
date: 2017-10-04 23:00:00 Z
---

# Google Sheets action - Update row
![Action Update row](/assets/images/connectors/google-sheets/action-update-row.png)

## How it works
This action allows you to update a row in a sheet. It is often used together with action [Search rows](https://docs.workato.com/connectors/google-sheets/action-search-rows-v4.html), so you will first search for the rows you want then update them.

## How to use it
The following example will demonstrate how to use the `Update row` action in conjunction with `Search rows`.

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
| Row number | Indicate which row you want to update.|
| Columns | ![CSV columns](/assets/images/connectors/google-sheets/update-columns.png)<br>After you select a spreadsheet, a sheet and a row in the sheet, the columns in that row will be displayed here. Enter the new values for Workato to update those columns.<br><br>For example, in the screenshot above, Workato will update the selected row with new values: <br>`Region` = `"Europe"` AND `Country` = `"Sweden"` AND `Item` = `"Car"` |

## Output
| Output pill | Description |
|---|---|
| Spreadsheet ID | ID of the spreadsheet. You can map this into `Spreadsheet` input field of other Google Sheets actions, instead of selecting the spreadsheet from the dropdown. |
| Spreadsheet name | Name of the spreadsheet. |
| Sheet name | Name of the sheet. You can map this into `Sheet` input field of other Google Sheets actions, instead of selecting the sheet from the dropdown. |
| Updated range | The range in the sheet that this action have updated. |
| Updated columns count | The number of columns this action has updated. |
| Columns | ![CSV columns](/assets/images/connectors/google-sheets/output-columns.png)<br>This contains the values of all updated columns in the selected row.|
