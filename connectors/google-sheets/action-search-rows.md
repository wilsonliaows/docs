---
title: Google Sheets' action - Search rows
date: 2017-6-12 23:00:00 Z
---

# Google Sheets' action - Search rows

The **Search rows** action allows you to get specific rows using a search query.

It's often used together with an [Update row](https://docs.workato.com/connectors/google-sheets/action-update-row.html) action. So that you will first search for the rows you want to update, then update those rows.

## How to use this action
### Setting up the Google sheet
First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![Sheet sample](/assets/images/connectors/google-sheets/five-row-sample.jpg)
*Sample Google Sheets spreadsheet with a header row and 5 data rows*

### Configuring the Search rows action

To configure the action, we need to select the spreadsheet and the actual sheet to search within.

![unconfigured](/assets/images/connectors/google-sheets/unconfigured-search.jpg)
*Unconfigured search action*

![configured](/assets/images/connectors/google-sheets/configured-search.jpg)
*Configured search rows action with selected spreadsheet and sheet*

#### Search query structure
Search query has to be structured in a certain way for the API to process them. For example, if I want to search for an attendee with the name "Jennifer Avery", with an age older than 30, and shirt size "M", I'd input the following query:

```ruby
name = "jennifer avery" and age > 30 and shirtsize = "M"
```

The following are of the common things to take note when forming queries:

- **Column names**
Column names have to be a single word. Even if your column names have 2 or more words in them, simply remove the spaces, e.g. "Shirt size" column label becomes "shirtsize".

- **Queries are not case sensitive**
Column names or values doesn't have to be case sensitive.

- **Operators**
The common operators are equal to (=), greater than (>), greater than or equal to (>=), lesser than (<), lesser than or equal to (<=). All these operators can be used for numbers and datetime timestamps (e.g. comparing ages).
Only equal to (=) can be used for strings (e.g. comparing names and shirt sizes as in the example sheet). Only exact matches will be fetched in this case.

- **AND and OR**
Use ANDs as well as ORs for a variety of queries. You can combine them as well, using parentheses to signify order of operations (i.e. we evaluate whatever is within the parentheses first).
For example, (age < 35 or age > 50) and name = "jennifer avery" will return nothing, but age < 35 or (age > 50 and name = "jennifer avery") will return you rows 3 and 5.

#### Query errors
If your query has the wrong structure, or if your operators are incorrect (e.g. if you tried using unsupported operators such as LIKE or CONTAINS, the search rows action will fail with the following error message.

![Failed jobs](/assets/images/connectors/google-sheets/failed-jobs.jpg)
*Failed job because of an incorrect search query*

### Testing the search rows action
If configured correctly, the search rows action should return you a list of rows that match the search conditions. In this case, I have only one matching row.

![Input for search](/assets/images/connectors/google-sheets/search-input.jpg)
*Input for search rows action, as viewed form the job details page*

![Output](/assets/images/connectors/google-sheets/job-results.jpg)
*Results retrieved from the search rows action, as viewed from the job details page's output tab*

Okay, we know that our specific query works. Now, we don't want to search for someone called Jennifer Avery every single time a new contact comes into Salesforce, so we need to replace these hardcoded values with variables (AKA pills from the datatree, in Workato context). We'll be replacing these hardcoded values with pills in the following scenario.

### Example Scenario
In this case, let's assume that we wish to move any new or updated contacts from Salesforce to a Google sheet. The following shows the recipe and data mappings I've done to ensure my search will find the right row in Google Sheets, and direct new data coming in from Salesforce to the matching fields in Google Sheets.

![Complete recipe](/assets/images/connectors/google-sheets/completed-recipe.jpg)
*Completed recipe to move new or updated Salesforce contacts to selected google sheet*

![Row searching](/assets/images/connectors/google-sheets/row-searching.jpg)
*Searching for rows in my sheet with my query. Here, we search to see if the Salesforce contact already exists (assuming email is the unique ID).*

![Data Tree](/assets/images/connectors/google-sheets/data-treee.jpg)
*Mapping data from the Salesforce new/updated contact datatree into the update row action.*

Be careful to pull data from the right datatree! A common mistake is to use the pills from the search sheet action, which would take the existing data from your Google Sheets row and write that back into the exact same row. That's essentially doing nothing at all, so it's not very useful!

![Incorrect mapping](/assets/images/connectors/google-sheets/incorrect-mapping.jpg)
*Incorrect mapping of the update row action with pills from the wrong data tree*

### Running the recipe
Now that we have the trigger and action configured, let's run our recipe!

![Configured recipe](/assets/images/connectors/google-sheets/configured-recipe-test.jpg)
*Configured recipe for testing*

![Job report customized](/assets/images/connectors/google-sheets/customize-jobs.jpg)
*Customizing my job report to show data from salesforce*

![Customized report](/assets/images/connectors/google-sheets/new-updated-contact.jpg)
*Customized job report with showing details of the job processed*

We'll take a quick look at the details of the job that was processed. In our sample sheet, it looks like there was a contact Anna Sharpay with a mismatched email address huilin@workato.com. It looked like the recipe managed to pick up an update made by a Salesforce user to edit the name of the contact to Huilin Yang instead, and it moved that update to our Google Sheets.

![Trigger data](/assets/images/connectors/google-sheets/trigger-datas.jpg)
*The trigger data retrieved for an updated contact, as viewed in the job details page's output tab*

![Corresponding row](/assets/images/connectors/google-sheets/corresponding-row.jpg)
*As we found a corresponding row in Step 1, we proceed to update the row containing the email hulin@workato.com. In Step 3, we pass the corresponding data from Salesforce into the update row action, sa viewed from the job details page.*

![Update row](/assets/images/connectors/google-sheets/updated-row.jpg)
*Updated row in example sheet*
