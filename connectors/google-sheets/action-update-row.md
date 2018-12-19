---
title: Google Sheets' action - Update row
date: 2017-6-12 23:00:00 Z
---

# Google Sheets action - Update row using row ID (old version)
**Note**: This article is about action Update row (old version), using Google Sheets API v3 which will be deprecated in the near term. We recommend using this [new action Update row](https://docs.workato.com/connectors/google-sheets/action-update-row-v4.html) instead.

The **Update row** action allows you to change the values of any existing row.

It's often used together with a [Search rows](https://docs.workato.com/connectors/google-sheets/action-search-rows.html) action. So that you will first search for the rows you want to update, then update those rows.

## How to use this action
### Setting up the Google sheet
First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least 1 header row and 1 data row, as shown the following screenshot.

![Google sheet sample](/assets/images/connectors/google-sheets/sample-google-sheet.jpg)
*Sample Google sheet with 1 header row and 1 data rows*

### Configuring the Update row action
We have to select our specific spreadsheet and sheet, then pass in the row ID from the search rows action's datatree. This ID will tell the recipe the exact row to update.

![Unconfigured row](/assets/images/connectors/google-sheets/unconfigured-row-action.jpg)
*Unconfigured update row action*

![Row-ID](/assets/images/connectors/google-sheets/row-id.jpg)
*Provide row ID from the search rows action into the update row action. This lets the recipe know the row to update*

### Example Scenario
In this case, let's assume that we wish to move any new or updated contacts from Salesforce into this Google sheet.
![Sample Google sheet](/assets/images/connectors/google-sheets/sample-two-rows.png)

The following pictures show the recipe and data mappings I've done to ensure my search will find the right row in Google Sheets, and direct new data coming in from Salesforce to the matching fields in Google Sheets.

![Complete recipe](/assets/images/connectors/google-sheets/completed-recipe.jpg)
*Completed recipe to move new or updated Salesforce contacts to selected google sheet*

![Row searching](/assets/images/connectors/google-sheets/row-searching.jpg)
*Using `Search rows` action to search for rows in my sheet with query. Here, we search for Google Sheet row that has `email` column matching the Salesforce Contact's `Email`.*

![Data Tree](/assets/images/connectors/google-sheets/data-treee.jpg)
*We pass `Row ID` from `Search rows` action's output to this `Update row` action, to indicate what row it should update. Then map data pill from the `Salesforce new/updated Contact` into the `Update row` action.*

Be careful to pull data from the right datatree! A common mistake is to use the pills from the `Search rows` action, which would take the existing data from your Google Sheets row and write that back into the exact same row. That's essentially doing nothing at all, so it's not very useful!

### Running the recipe
Now that we have the trigger and action configured, let's run our recipe!

![Configured recipe](/assets/images/connectors/google-sheets/configured-recipe-test.jpg)
*Configured recipe for testing*

![Customized report](/assets/images/connectors/google-sheets/new-updated-contact.jpg)
*Customized job report with showing details of the job processed*

Now we will update the name of a contact in Salesforce from `Anna Sharpay` to `Anna Mccoy`. Notice the email address is `anna@workato.com`.

![Updated Salesforce contact](/assets/images/connectors/google-sheets/updated-salesforce-contact.png)

Let's take a look at the job report to see how the recipe picks up this change:

![Trigger data](/assets/images/connectors/google-sheets/trigger-datas.jpg)
*The trigger did pick up the updated contact, as viewed in the job details page's output tab*

![Corresponding row](/assets/images/connectors/google-sheets/corresponding-row.jpg)
*The `Search rows` action tries to find email `anna@workato.com`. It finds 1 row and passes the `Row ID` to the `Update row` action. `Update row` action then update the name to `Anna Mccoy`*

And here is the result sheet after recipe has updated the row. Notice that the name has been changed from `Anna Sharpay` to `Anna Mccoy`.
![Sample Google sheet](/assets/images/connectors/google-sheets/sample-two-rows.png)
*Original sheet*
![Update row](/assets/images/connectors/google-sheets/updated-row.jpg)
*Updated sheet*
