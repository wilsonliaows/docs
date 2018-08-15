---
title: Google Sheets' action - Update row
date: 2017-6-12 23:00:00 Z
---

# Google Sheets' action - Update row
The **Update row** action allows you to change the values of any existing row.

It's often used together with a [Search rows](https://docs.workato.com/connectors/google-sheets/action-search-rows.html) action. So that you will first search for the rows you want to update, then update those rows.

## How to use this action
### Setting up the Google sheet
First, in order for us to retrieve the custom data in a sheet, the sheet must contain, at a minimum, a header line for the first row and a data line for the second row, as in the following screenshot.

![Sheet sample](/assets/images/connectors/google-sheets/five-row-sample.jpg)
*Sample Google Sheets spreadsheet with a header row and 5 data rows*

### Configuring the Update row action
We have to select our specific spreadsheet and sheet, then pass in the row ID from the search rows action's datatree. This ID will tell the recipe the exact row to update.

![Unconfigured row](/assets/images/connectors/google-sheets/unconfigured-row-action.jpg)
*Unconfigured update row action*

![Configured row](/assets/images/connectors/google-sheets/configured-row-actions.jpg)
*Unconfigured update row action*

![Row-ID](/assets/images/connectors/google-sheets/configured-row-action.jpg)
*Provide row ID from the search rows action into the update row action. This lets the recipe know the row to update*

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
