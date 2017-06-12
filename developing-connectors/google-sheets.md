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

![Customized job report](/assets/images/google-sheets/updated-job-report.png)
*customized job report displaying selected information about the trigger event processed

While the recipe is running, any new rows added will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows created while the recipe was stopped will also be picked up when the recipe is started again.



