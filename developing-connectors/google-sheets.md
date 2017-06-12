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


# Create row action 

The create row action allows you to add new rows to a selected spreadsheet.

## Setting up the Google sheet

First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![Google spreadsheet sample](/assets/images/google-sheets/sample-google-sheet.jpg)
*Sample Google Sheets spreadsheet with a header row and 4 data rows*

## Configuring the create row action

To configure the action, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet, while selecting the sheet would generate your list of columns within that sheet.

![Trigger set up](/assets/images/google-sheets/app-trigger.png)
*Application and trigger set up*


![Unconfigured row actions](/assets/images/google-sheets/unconfigured.png)
*Unconfigured row actions*

![configured row actions](/assets/images/google-sheets/configured-row-action.jpg)
*Configured row actions*

I've previously set my trigger to be a Scheduler new scheduled event trigger for speed to get to configuring my action, but to build a useful recipe, we need to build a template for how data will be processed when it is moved into Google Sheets.

# Example scenario

In this case, let's assume that we wish to move any new contacts created in Salesforce into a Google Sheet. The following shows the data mapping I've done to direct data coming in from Salesforce (as provided by the datatree on the right) to the matching fields in Google Sheets.

![available columns](/assets/images/google-sheets/available-columns.jpg)
*Available columns are derived from the selected Google sheet in the trigger*

# Running the action

Now that we have the trigger and action configured, let's run our recipe!

![configured recipe](/assets/images/google-sheets/configured recipe.jpg)
*Configured recipe for testing*

We'll take a quick look at the details of a specific job as follows, where we can see that a new contact, Anna Sharpay, was created in Salesforce. As we've mapped 'Name', 'Email' and 'Date created' in the recipe, we can see that these are the values passed to the create row action in Step 1.

![trigger data](/assets/images/google-sheets/trigger-data.jpg)
*The trigger data recieved for a specific contact, as viewed in the job details page's output rab*

![data recieved](/assets/images/google-sheets/data-recieved.jpg)
*The data input into the create row action, as viewed from the job detail's page input tab*

The output of the recipe, as viewed from our sheet, is below.

![edited sheet](/assets/images/google-sheets/edited-sample-sheet.jpg)
*Edited sample sheet with added row*


# Search rows and update row action

The search rows action allows you to pinpoint specific rows you would like to retrieve, by specifying search conditions via a query. The update row action allows you to change the values of cells in any existing row.

These two actions are often used together to first search for the rows you'd like to update, then updating these rows.

## Setting up the Google sheet

First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![sheet sample](/assets/images/google-sheets/five-row-sample.jpg)
*Sample Google Sheets spreadsheet with a header row and 5 data rows*

## Configuring the search rows action

To configure the action, we need to select the spreadsheet and the actual sheet to search within.


![unconfigured](/assets/images/google-sheets/unconfigured-search.jpg)
*Unconfigured search action*

![configured](/assets/images/google-sheets/configured-search.jpg)
*Configured search rows action with selected spreadsheet and sheet*

The query needs to be in a certain structure as defined by the Google Sheets API. In this case, I want to search for an attendee with the name "Jennifer Avery", with an age older than 30, and shirt size "M". I'll pass the following query into the action. For further details on how to work with queries, check out the following articles in this course.


Query for search rows action:

```ruby
name = "jennifer avery" and age > 30 and shirtsize = "M"
```

## Testing the search rows action

If configured correctly, the search rows action should return you a list of rows that match the search conditions. In this case, I have only one matching row.

![Input for search](/assets/images/google-sheets/search-input.jpg)
*Input for search rows action, as viewed form the job details page*

![Output](/assets/images/google-sheets/job-results.jpg)
*Results retrieved from the search rows action, as viewed from the job details page's output tab*

Okay, we know that our specific query works. Now, we don't want to search for someone called Jennifer Avery every single time a new contact comes into Salesforce, so we need to replace these hardcoded values with variables (AKA pills from the datatree, in Workato context). We'll be replacing these hardcoded values with pills in the following scenario.

## Configuring the update row action

Once we have the search rows action working, it's time to configure our update row action. We have to select our specific spreadsheet and sheet, then pass in the row ID from the search rows action's datatree. This ID will tell the recipe the exact row to update.

![Unconfigured row](/assets/images/google-sheets/unconfigured-row-action.jpg)
*Unconfigured update row action*

![Configured row](/assets/images/google-sheets/configured-row-actions.jpg)
*Unconfigured update row action*

![Row-ID](/assets/images/google-sheets/configured-row-action.jpg)
*Provide row ID from the search rows action into the update row action. This lets the recipe know the row to update*

I've previously set my trigger to be a Scheduler new scheduled event trigger for speed to get to configuring my action, but to build a useful recipe, we need to build a template for how data will be processed when it is moved into Google Sheets.

## Example Scenario

In this case, let's assume that we wish to move any new contacts created in Salesforce into a Google Sheet, as well as move any updates to that existing contact to Google Sheets. The following shows the recipe and data mapping I've done to ensure my search will find the right row in Google Sheets, and direct new data coming in from Salesforce (as provided by the datatree on the right) to the matching fields in Google Sheets.

![Complete recipe](/assets/images/google-sheets/completed-recipe.jpg)
*Completed recipe to move new or updated Salesforce contacts to selected google sheet*

![Row searching](/assets/images/google-sheets/row-searching.jpg)
*Searching for rows in my sheet with my query. Here, we search to see if the Salesforce contact already exists (assuming email is the unique ID).*

![Data Tree](/assets/images/google-sheets/data-treee.jpg)
*Mapping data from the Salesforce new/updated contact datatree into the update row action.*

Be careful to pull data from the right datatree! A common mistake is to use the pills from the search sheet action, which would take the existing data (if it exists) from your Google Sheets row and write that back into the exact same row. That's essentially doing nothing at all, so it's not very useful!


![Incorrect mapping](/assets/images/google-sheets/incorrect-mapping.jpg)
*Incorrect mapping of the update row action with pills from the wrong data tree*

## Running the recipe

Now that we have the trigger and action configured, let's run our recipe!

![Configured recipe](/assets/images/google-sheets/configured-recipe-test.jpg)
*Configured recipe for testing*

![Job report customized](/assets/images/google-sheets/customize-jobs.jpg)
*Customizing my job report to show data from salesforce*

![Customized report](/assets/images/google-sheets/new-updated-contact.jpg)
*Customized job report with showing details of the job processed*

We'll take a quick look at the details of the job that was processed. In our sample sheet, it looks like there was a contact Anna Sharpay with a mismatched email address huilin@workato.com. It looked like the recipe managed to pick up an update made by a Salesforce user to edit the name of the contact to Huilin Yang instead, and it moved that update to our Google Sheets.

![Trigger data](/assets/images/google-sheets/trigger-datas.jpg)
*The trigger data retrieved for an updated contact, as viewed in the job details page's output tab*

![Corresponding row](/assets/images/google-sheets/corresponding-row.jpg)
*As we found a corresponding row in Step 1, we proceed to update the row containing the email hulin@workato.com. In Step 3, we pass the corresponding data from Salesforce into the update row action, sa viewed from the job details page.*

![Update row](/assets/images/google-sheets/updated-row.jpg)
*Updated row in example sheet*


# Working with queries in Google Sheets

## Example sheet

First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot. We'll be using this example sheet for our queries in this article.

![Google spreadsheet sample](/assets/images/google-sheets/sample-google-sheet.jpg)
*Sample Google Sheets spreadsheet with a header row and 4 data rows*

## Query structure
All queries have to be structured in a certain way for the API to process them. For example, if I wish to search for an attendee with the name "Andy Hermans", with shirt size of "M" and with an age smaller than 40, I'd pass in the following query.


Query for an attendee named Andy Hermans with shirt size M who is younger than 40:

```ruby
name = "Andy Hermans" and shirtsize = "M" and age < 40
```

## The following are of the common things to take note when forming queries:

### Column names
Column names have to be a single word. Even if your column names have 2 or more words in them, simply remove the spaces, e.g. "Shirt size" column label becomes "shirtsize".

### Queries are not case sensitive
Column names or values doesn't have to be case sensitive.

###Operators
The common operators are equal to (=), greater than (>), greater than or equal to (>=), lesser than (<), lesser than or equal to (<=).

All these operators can be used for numbers and datetime timestamps (e.g. comparing ages).

Only equal to can be used for strings (e.g. comparing names and shirt sizes as in the example sheet). Only exact matches will be fetched in this case.

### AND and OR
Use ANDs as well as ORs for a variety of queries. You can combine them as well, using parentheses to signify order of operations (i.e. we evaluate whatever is within the parentheses first).

For example, (age < 35 or age > 50) and name = "jennifer avery" will return nothing, but age < 35 or (age > 50 and name = "jennifer avery") will return you rows 3 and 5.

## Query Errors

If your query has the wrong structure, or if your operators are incorrect (e.g. if you tried using unsupported operators such as LIKE or CONTAINS, the search rows action will fail with the following error message.

![Failed jobs](/assets/images/google-sheets/failed-jobs.jpg)
*Failed job because of an incorrect search query*

