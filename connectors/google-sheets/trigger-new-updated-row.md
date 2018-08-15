---
title: Google Sheets' trigger - New/updated row in sheet
date: 2017-6-12 23:00:00 Z
---

# Google Sheets' trigger - New/updated row in sheet
The **New/updated row in sheet** trigger is able to pick up changes made to rows in your selected sheet, as well as new rows **added at the bottom** of your sheet.

Note that at the moment, this trigger can monitor up to **1000 rows**. New or updated rows after row 1000 will not be picked up.

## How to use this trigger
### Setting up the Google Sheet
First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![Google spreadsheet sample](/assets/images/connectors/google-sheets/sample-google-sheets.jpg)
*Sample Google Sheets spreadsheet with a header row and 4 data rows*

### Configuring the New/updated row in sheet trigger
To configure the trigger, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet, while selecting the sheet would generate your list of columns within that sheet.

![recipe action](/assets/images/connectors/google-sheets/application-filling.gif)
*Select the application and trigger*

![unconfigured sheet trigger](/assets/images/connectors/google-sheets/unconfigured-sheet-trigger.jpg)
*Unconfigured new/updated sheet row trigger*

![configured sheet trigger](/assets/images/connectors/google-sheets/configured-sheet-trigger.jpg)
*Configured new/updated sheet row trigger*

In order to pick up updated rows as trigger events, we need to know that an existing row has changed. The column that you select in the **Column to monitor** field, which is driven off your selected sheet, will be monitored for changes. Every time the data in a cell in this column changes, the entire row of data will be picked up by the recipe. In this case, we had selected "Date registered".

Alternatively, you can also select the option "All", in which any changes made to a row will cause it to be picked up by the trigger.

### Running the trigger
Now that we have the trigger configured, let's complete our recipe and run it! For testing, we can simply select the Scheduler action **Get current time**. Alternatively, putting a "Stop" step works too. Let's start the below recipe.

![configured recipe](/assets/images/connectors/google-sheets/configured-recipe-with-scheduler-action.png)
*Configured recipe with Scheduler action for testing*

In this case, the trigger picks up all 4 data lines in my Google sheet. You can configure the jobs report to display the information relevant to you, as below.

![new job report](/assets/images/connectors/google-sheets/customized-job-report.jpg)
*Customized job report displaying selected information about the trigger event processed*

The following shows the customization of the job report.

![customize job report](/assets/images/connectors/google-sheets/customization-job-report.jpg)
*Customizing the job recipe's job reoprt with data from Google Sheets*

As we've configured the sheet to monitor only changes to the date registered column, the change I've made to Andy's shirt size (as highlighted) will not cause the recipe to pick up any trigger events.

![modified google sheets](/assets/images/connectors/google-sheets/modified-sheet.jpg)
*Edited sample sheet with changed field highlighted*

However, if I were to further edit Xander's date registered value (in row 5), then the recipe will process row 5 again as a trigger event, and provide me with the latest data.

![edited sheet](/assets/images/connectors/google-sheets/edited-sheet.jpg)
*Edited sheet. Cells in row 3 and 5 (highlighted) have been updated with new values*

Row 5 will be picked up as a trigger event, as seen in the recipe. Let's click on the job line to examine the job details.

![date sheet](/assets/images/connectors/google-sheets/date-sheet.jpg)
*Only row 5 will be picked up as "Date registered"- the only column we are monitoring changes for*

While the recipe is running, any new rows added or existing rows updated will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows created or existing rows updated while the recipe was stopped will also be picked up when the recipe is started again.

Take note that only the latest version of the row will be picked up. For example, if a row is created and updated thrice, all while the recipe is stopped, the recipe will only pick up the latest version of the row as a trigger event when it's started.
