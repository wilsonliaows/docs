---
title: Google Sheets' trigger - New row in sheet
date: 2017-6-12 23:00:00 Z
---

# Google Sheets trigger - New row in sheet
The **New row in sheet** trigger is able to pick up new rows **added at the bottom** of your selected sheet, in real-time.

Note that rows added in the middle of the sheet will not picked up. Also, once you have started this trigger, **do NOT delete any row** from the sheet, the trigger will stop tracking correctly.

## How to use this trigger
### Setting up the Google sheet
First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least one header line for the first row and one data line for the second row, as in the following screenshot.

![Google sheet sample](/assets/images/connectors/google-sheets/sample-google-sheet.jpg)
*Sample Google sheet with 1 header row and 1 data rows*

### Configuring the New row in sheet trigger
Select the **New row in sheet** trigger.

![Set up application](/assets/images/connectors/google-sheets/application-and-trigger.png)
*Set up the application and the trigger*

To configure the trigger, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet.

![Blank Trigger](/assets/images/connectors/google-sheets/trigger-setup-blank.png)
![Blank Trigger](/assets/images/connectors/google-sheets/trigger-setup2-blank.png)
*Select the spreadsheet to monitor for new rows*

Select the specific sheet to monitor for new rows.

![Filled trigger](/assets/images/connectors/google-sheets/trigger-setup-filled.png)
*Once the spreadsheet has been selected, an additional picklist is generated asking for the specific sheet to monitor*

Set up your action:

![Scheduler action](/assets/images/connectors/google-sheets/scheduler-action.png)
*Scheduler action*

### Running the trigger
Now that we have the trigger configured, let's complete our recipe and run it!

We just want to test if the trigger really picks up any new row in the sheet, so we don't care too much about the action. In this test, we just simply select the Scheduler action "Get current time".

Let's start the below recipe. Your new recipe should look as follows:

![Google spreadsheet sample](/assets/images/connectors/google-sheets/configured-recipe.jpg)
*configured recipe with scheduler action for testing*

In this case, the trigger picks up all 4 data lines in my Google sheet.

![Customized job report](/assets/images/connectors/google-sheets/updated-job-report.jpg)
*Customized job report displaying selected information about the trigger event processed*

While the recipe is running, any new rows added **at the bottom of the sheet** will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows added while the recipe was stopped will also be picked up when the recipe is started again.
