---
title: Connectors design guide - trigger input
date: 2018-09-05 15:30:00 Z
---

# Trigger input
There are some common trigger input fields as detailed in the following table. Input fields should generally follow the [input fields design guide](/developing-connectors/connectors-design-guide/input-fields-design-guide.md).


<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Trigger input</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#trigger-input---sincefrom" target="_blank">Since/from</a></td>
      <td>
      	Input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.
      </td>
    </tr>
    <tr>
    	<td><a href="#trigger-input---api-based-filters" target="_blank">API-based filters</td>
    	<td>Filters for triggers to pick only events that user is interested in, e.g. pick up only emails with `Important` label, or pick up only leads marked `Hot`</td>
    </tr>
    <tr>
    	<td><<a href="#trigger-input---batch-configuration" target="_blank">Batch configuration</td>
    	<td>Specific for batch triggers. Collection of fields that allow user to define the batches of data returned, e.g. batch size, type of records and specific fields in the records to return.</td>
    </tr>
    <tr>
    	<td><a href="trigger-input---output-configuration" target="_blank">Output configuration</a></td>
    	<td>Fields that allow users to optimize their requests to retrieve only data they're interested in using. These fields are particularly important for batch operations where we expect lots of records, or for apps which we expect lots of fields per record.</td>
    </tr>
  </tbody>
</table>



| Trigger input                                                 | Description                                                                                                                                                                              |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                       |                                                          |
|        |                                  |
|    |  |

## Trigger input - since/from
Almost every trigger has this since input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.

This is useful for use cases such as initial bootstrapping when your company is moving to a new system and wishes to move all existing records from the old system into the new. Using the since field, you can choose to pick records created from exact date times. You can read more about the since input field's function in [this article](/recipes/triggers#sincefrom).

Some key design points to note about the since field:
- It should only allow users to input an exact date time via a date_time data type and date_time control type. This field should not support toggles or other data types, such as picklists.
- It should be an optional field.
- It should default to a week ago if left blank.
- The label should be `When first started, this recipe should pick up events from`.
- The hint should be `When you start recipe for the first time, it picks up trigger events from this specified date and time. Defaults to fetching trigger events from a week ago if left blank.`
- This will be appended automatically to every since input field: "**Once recipe has been run or tested, value cannot be changed.** [Learn more](https://docs.workato.com/recipes/triggers.html#sincefrom)" 

Here's an example of how the since field should be defined.

```
  {
    name: "since",
    label: "When first started, this recipe should pick up events from",
    type: :date_time,
    optional: true,
    sticky: true,
    hint: "When you start recipe for the first time, it picks up new or updated candidates from this specified date and time. Defaults to fetching records created or updated from a week ago if left blank."
  }
```

This definition will generate the following since field.

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
For batch triggers where each trigger event returns a list of records instead of a single record, users should have the ability to configure batch sizes, which determines the number of records to return per trigger event. This is useful for users designing recipes to work in batches, e.g. fetch a list of 2000 records from one app for batch insert into another app.

![Batch size input field](/assets/images/connectors-design-guide/batch-size-field.png)
*Batch size input field*

## Trigger input - output configuration
For apps which enable users to define specifically the data fields to return for an object, you can implement the output configuration fields that allow users to optimize their request to retrieve only data they're interested in using in their recipes. These fields are particularly important for batch operations where we expect lots of records, or for apps which we expect lots of fields per record.

![Output configuration fields](/assets/images/connectors-design-guide/output-configuration-fields.png)
*Output configuration fields*

These fields have a multiselect control type, and should give the user the full list of record fields to choose from.

![Record fields available for user to select in the picklist](/assets/images/connectors-design-guide/fields-list.png)
*Record fields available for user to select in the picklist*

They typically have the following definition:

Label: `Fields`
Hint: `Select only the <app> record fields you wish to use in the recipe. Recommended for better recipe performance and management. All fields will be returned if left blank.`

For triggers and actions which support joins, e.g. Salesforce, NetSuite and database connectors where you can retrieve elated records/tables with a JOIN clause, you can support an additional `Related objects` field that allows users to decide which join records to retrieve, before deciding which fields from the base object and join object to retrieve.

![Output configuration fields with related objects](/assets/images/connectors-design-guide/output-configuration-fields-with-related-objects.png)
*Output configuration fields with related objects*

The `Related objects` field should have a list of related object that can be fetched together with the base object with a JOIN.

![Related objects available for user to select in the picklist](/assets/images/connectors-design-guide/related-objects-list.png)
*Related objects available for user to select in the picklist*

They typically have the following definition: 

Label: `Related objects` or `Related records`
Hint: `Select the related join objects wanted. Then, select the fields you're interested in using in the recipe via the Fields input field.`

These output configuration fields should be grouped together in an object schema with the following label and hint text.

Object label: `Output configuration`
Hint: `Select fields you wish to use in the recipe. Selected fields show up in the output datatree.`
