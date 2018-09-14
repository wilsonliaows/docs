---
title: Connectors design guide - trigger input
date: 2018-09-05 15:30:00 Z
---

# Trigger input
There are some common trigger input fields as detailed in the following table. Input fields should generally follow the input fields design guide.

| Trigger input                                                 | Description                                                                                                                                                                              |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Since/from](#trigger-input---sincefrom)                      | Input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.                                                         |
| [API-based filters](#trigger-input---api-based-filters)       | Filters for triggers to pick only events that user is interested in, e.g. pick up only emails with `Important` label, or pick up only leads marked `Hot`                                 |
| [Batch configuration](#trigger-input---batch-configuration)   | Specific for batch triggers. Collection of fields that allow user to define the batches of data returned, e.g. batch size, type of records and specific fields in the records to return. |

## Trigger input - since/from
Almost every trigger has this since input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.

This is useful for use cases such as initial bootstrapping when your company is moving to a new system and wishes to move all existing records from the old system into the new. Using the since field, you can choose to pick records created from exact date times. You can read more about the since input field's function in [this article](/recipes/triggers#sincefrom).

Some key design points to note about the since field:
- It should only allow users to input an exact date time. We are no longer supporting picklists.
- It should be an optional field.
- It should default to a week ago if left blank.
- The label should be `When first started, this recipe should pick up events from`.
- The hint should be `When you start recipe for the first time, it picks up trigger events from this specified date and time. Defaults to fetching trigger events from a week ago if left blank.`
- This will be appended automatically to every since input field: "**Once recipe has been run or tested, value cannot be changed.** [Learn more](https://docs.workato.com/recipes/triggers.html#sincefrom)" 

Here's an example of how the since field should look like.

![Trigger since field allowing users to fetch historical records](/assets/images/connectors-design-guide/trigger-since-field.png)
*Trigger since field allowing users to fetch historical records*

## Trigger input - API-based filters
Some triggers have input fields which act as trigger filters - they filter for only the specific trigger events you're interested in. This makes sure that the trigger events getting picked up by your recipe are relevant, and this is useful for reducing noise/clutter in your recipes as well as keeping your transaction counts low.

We recommend adding API-based filters for triggers where there are common use cases for filters. Some examples:
- `Report status` filter for expense reports, because most companies want to sync expense reports to finance systems only when they have been approved by the manager.
- `Payment status` or `Opportunity stage` filter for opportunities or sales orders, because most companies want to sync sales to ERP or finance systems only when they're closed or when payment is made.
- `Applicant stage` for applicants in an applicant tracking system, because companies only want to sync employees to HR systems when the hire is confirmed.
- `Issue status` or `Issue priority` for issues/tickets in an issue or project management system, or a customer support system, because there are different workflows in place depending on how critical an issue is, or whether it's newly opened or closed.

[Trigger conditions](/recipes/triggers.md#trigger-conditions) play a similar function by filtering for only the records you're interested in. Trigger conditions are supported automatically by the Workato platform, and allows for greater flexibility in defining the conditions to check records for, but at the expense of reduced efficiency. The following table elaborates on the differences between API-based filters and trigger condition filters.

| Feature     | API-based filters                                                                                                                                                                                                                                               | Trigger condition filters                                                                                                                                                                                                                                                                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Performance | Better performance as your app sends only relevant data to Workato for processing. This reduces the amount of traffic from your app, which makes it more efficient and cheaper if the app charges for API calls.                                                | Less efficient as your app sends the delta to Workato, i.e. all records which have been created or updated since the last time Workato polled the app, and Workato filters the relevant records. There is additional API traffic for the records which gets filtered out. This makes it less efficient and more expensive if the app charges for API calls. |
| Flexibility | Less flexibility as the connector developer decides what are the fields a user can filter on, and exposes them as input fields, e.g. lead scores or lead ratings for lead records. Users wishing to add additional filters will need to use trigger conditions. | More flexibility as the user can decide which fields to filter on, as well as use formula mode in their conditions.                                                                                                                                                                                                                                         |

For example, the Gmail connector's new email trigger has an optional filter to pick up only emails with a particular label. If no label is set, the trigger picks up all emails received - which can be a significant number a day. But if we set the label to **INBOX** or **STARRED**, Gmail will send us only the emails that meet this criteria, hence reducing unnecessary traffic.

If this API-based was not provided, the user would need to use trigger conditions, which means that Gmail will send Workato all the emails received, and Workato will have to filter for the **INBOX** or **STARRED** emails to process.

![Gmail new email trigger has an optional filter to pick up only emails with certain labels](/assets/images/connectors-design-guide/api-filters-gmail.png)
*Gmail new email trigger has an optional filter to pick up only emails with certain labels*

In another example, Google Sheets have a filter for the user to define which sheet to monitor for new/updated rows. In this case, this is a required value for the Google Sheet API, and therefore marked required.

![Google Sheets new/updated row trigger has required filters to pick up only rows in a specific sheet](/assets/images/connectors-design-guide/api-filters-google-sheets.png)
*Google Sheets new/updated row trigger has required filters to pick up only rows in a specific sheet*

## Trigger input - batch configuration
For batch triggers where each trigger event returns a list of records instead of a single record, users should have the ability to configure batch settings.

- Datatree output: the fields returned by the trigger, e.g. only return the ID and name of customer records and exclude their addresses. This is useful for optimizing API requests to retrieve only needed data from the app.
- Batch size: the number of records to return per trigger event. This is useful for users designing recipes to work in batches, e.g. fetch a list of 2000 records from one app for batch insert into another app.
