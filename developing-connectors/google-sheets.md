---
title: Google Sheets
date: 2017-6-12 23:00:00 Z
---

#New row trigger

The new row trigger is able to pick up newly added rows in your selected spreadsheet.

## Setting up the Google sheet
First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![Google spreadsheet sample](/assets/images/google-sheets/sample-google-sheet.jpg)
*Sample Google Sheets spreadsheet with a header row and 4 data rows*

## Configuring the new sheet row trigger

To configure the trigger, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet.

![set up application](/assets/images/google-sheets/application-and-trigger.png)
*Set up the application and the trigger*

![Blank Trigger](/assets/images/google-sheets/trigger-setup-blank.png)
*Blank trigger form*
![Filled trigger](/assets/images/google-sheets/trigger-setup-filled.png)
*Filled trigger form*
Set up your action:
![Scheduler action](/assets/images/google-sheets/scheduler-action.png)
*Scheduler action*

## Running the trigger

Now that we have the trigger configured, let's complete our recipe and run it! For testing, we can simply select the Scheduler action "Get current time". Alternatively, putting a "Stop" step works too. Let's start the below recipe.
Your new recipe should look as follows:

![Google spreadsheet sample](/assets/images/google-sheets/configured-recipe.jpg)
*configured recipe with scheduler action for testing*

In this case, the trigger picks up all 4 data lines in my Google sheet. You can configure the jobs report to display the information relevant to you, as below

![Customizing report](/assets/images/google-sheets/customize-report.png)
*customizing the recipe's job report with data from google sheets*

![Customized job report](/assets/images/google-sheets/updated-job-report.jpg)
*customized job report displaying selected information about the trigger event processed

While the recipe is running, any new rows added will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows created while the recipe was stopped will also be picked up when the recipe is started again.


# New/updated row trigger

The new/updated row trigger is able to pick up changes made to rows in your selected spreadsheet, as well as pick up newly created rows.

## Setting up the Google Sheet 

First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![Google spreadsheet sample](/assets/images/google-sheets/sample-google- sheets.jpg)
*Sample Google Sheets spreadsheet with a header row and 4 data rows*

## Configuring the new/updated sheet row trigger

To configure the trigger, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet, while selecting the sheet would generate your list of columns within that sheet.

![recipe action](/assets/images/google-sheets/application-filling.gif)
*Fill up the application and trigger*

![unconfigured sheet trigger](/assets/images/google-sheets/unconfigured-sheet-trigger.jpg)
*Unconfigured new/updated sheet row trigger*

![configured sheet trigger](/assets/images/google-sheets/configured-sheet-trigger.jpg)
*Configured new/updated sheet row trigger*

In order to pick up updated rows as trigger events, we need to know that an existing row has changed. The column that you select in the "Column to monitor" field, which is driven off your selected sheet, will be monitored for changes. Every time the data in a cell in this column changes, the entire row of data will be picked up by the recipe. In this case, we had selected "Date registered".

Alternatively, you can also select the option "All", in which any changes made to a row will cause it to be picked up by the trigger.

![columns to monitor](/assets/images/google-sheets/column-to-monitor.png)
*Available columns are derived from the selected Google sheet in the trigger*

## Running the trigger

Now that we have the trigger configured, let's complete our recipe and run it! For testing, we can simply select the Scheduler action "Get current time". Alternatively, putting a "Stop" step works too. Let's start the below recipe.


![configured recipe](/assets/images/google-sheets/configured-recipe-with-scheduler-action.png)
*Configured recipe with Scheduler action for testing*

In this case, the trigger picks up all 4 data lines in my Google sheet. You can configure the jobs report to display the information relevant to you, as below.


![customize job report](/assets/images/google-sheets/customization-job-report.jpg)
*customizing the job recipe's job reoprt with data from google sheets*

![new job report](/assets/images/google-sheets/customized-job-report.jpg)
*customized job report displaying selected information about the trigger event processed*

As we've configured the sheet to monitor only changes to the date registered column, the change I've made to Andy's shirt size (as highlighted) will not cause the recipe to pick up any trigger events.


![original sheet](/assets/images/google-sheets/original-sheet.jpg)
*Orginal sample sheet*

![modified google sheets](/assets/images/google-sheets/modified-sheet.jpg)
*Edited sample sheet with changed field highlighted*

However, if I were to further edit Xander's date registered value (in row 5), then the recipe will process row 5 again as a trigger event, and provide me with the latest data.

![edited sheet](/assets/images/google-sheets/edited-sheet.jpg)
*Edit sheet. Cells in row 3 and 5 (highlighted) have been updated with new values*

![date sheet](/assets/images/google-sheets/date-sheet.jpg)
*Only row 5 will be picked up as "Date registered"- the only column we are monitoring changes for*

While the recipe is running, any new rows added or existing rows updated will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows created or existing rows updated while the recipe was stopped will also be picked up when the recipe is started again.

Take note that only the latest version of the row will be picked up. For example, if a row is created and updated thrice, all while the recipe is stopped, the recipe will only pick up the latest version of the row as a trigger event when it's started.


