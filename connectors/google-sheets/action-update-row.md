---
title: Google Sheets' action - Update row
date: 2017-10-04 23:00:00 Z
---

# Google Sheets action - Update row
![Action Update row](/assets/images/connectors/google-sheets/action-update-row.png)

## How it works
This action allows you to update a row in a sheet. It is often used together with action [Search rows](https://docs.workato.com/connectors/google-sheets/action-search-rows.html), so you will first search for the rows you want then update them.

## Input
| Input field | Description |
|---|---|
| Spreadsheet | You can either select a spreadsheet from the dropdown, or use `Spreadsheet ID` data pill from the output of other Google Sheets triggers & actions. |
| Sheet | You can either select a sheet from the dropdown, or use `Sheet name` data pill from the output of other Google Sheets triggers & actions. |
| Row number | Indicate which row you want to update. For example, if you want to update row number 9 in the spreadsheet, enter `9`.|
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
