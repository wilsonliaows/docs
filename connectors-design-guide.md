---
title: Connectors design guide
date: 2018-09-05 15:30:00 Z
---

# Connectors design guide
This guide is meant for developers building SDK connectors on the Workato platform, and guides the design of connectors, triggers and actions. This guide is meant to maintain consistency in the style and behaviour of triggers and actions on the Workato platform, so as to provide a consistent experience for users building Workato recipes.

We recommend that you adopt these design patterns in SDK connectors that you're submitting for certification. This will help shorten the approval turnaround time and get your connector published on the Workato platform sooner.

## Connectors

### Name
The connector must have the official name of the app it connects to. For example, `Salesforce` instead of `SalesForce` or `SFDC`.

### Logo
The connector must have the official logo of the app it connects to.

## Triggers
In this section, we discuss triggers in Workato. We cover:

- [Trigger descriptive components](#trigger-descriptive-components)

The components of a trigger that allows you to describe and elaborate what it does for a user.

- [Trigger input](#trigger-input)

The input fields to include in triggers.

- [Trigger output](#trigger-output)

The output fields to include in trigger datatrees.

- [Trigger types](#trigger-types)

The common triggers you tend to see in Workato.

### Trigger descriptive components
There are some common descriptive components that appear in all triggers. The following table details these components.

| Trigger component | Description                                                                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Description](#trigger-component---description)       | A short line that shows up at the recipe level to describe what the trigger does.                                                                   |
| [Title](#trigger-component---title)             | Title that shows up in the app's trigger picklist to help you make a selection between triggers.                                             |
| [Subtitle](#trigger-component---subtitle)          | Subtitle that shows up in the app's trigger picklist. Further elaborates what the trigger does to help you make a selection between triggers. |
| [Help](#trigger-component---help)              | Trigger-level help that elaborates how the trigger works. Usually also comprises of the subtitle.                                                    |

Here is how `description`, `title` and `help` show up in the trigger.

![Description, title and help components in the trigger](/assets/images/connectors-design-guide/trigger-components.png)
*Description, title and help components in the trigger*

The `title`, `subtitle` and `description` are often very similar in values.

![Title, subtitle, description components](/assets/images/connectors-design-guide/trigger-components-2.png)
*Title, subtitle, description components in the trigger*

This is the SDK code that corresponds to the above components.

![Trigger code corresponding to trigger descriptive components](/assets/images/connectors-design-guide/trigger-descriptive-components-code.png)
*Trigger code corresponding to trigger descriptive components*

#### Trigger component - description
The description is a quick summary of what each recipe line does in which app. When looking at a recipe, the trigger and action descriptions should be able to provide a good idea of what the recipe is doing.

We adopt the convention: `New <record> in <app>` and `New/updated <record> in <app>` where the app and business object should be highlighted. 

![Apps and business objects for triggers and actions](/assets/images/connectors-design-guide/trigger-action-descriptions.png)
*Apps and business objects for triggers and actions*

Here's an example of a typical description definition where the business object `candidate` and app `Greenhouse` are highlighted.

```
description: "New/updated <span class='provider'>candidate</span> in <span class='provider'>Greenhouse</span>"
```

This results in the trigger description below.

![Description for the trigger](/assets/images/connectors-design-guide/trigger-description.png)
*Description for the trigger*

Some additional examples of trigger descriptions:

- New **rows** in **SQL Server** (batch)
- New/updated **opportunities** in **Salesforce** (batch)
- New **email** in **Outlook** (real-time)
- New **vendor** in **NetSuite**
- New **file** in **Box**

#### Trigger component - title
The title shows up in the app's trigger picklist to help you make a selection between triggers.

![Picklist of available triggers for an app](/assets/images/connectors-design-guide/trigger-picklist-titles.png)
*Picklist of available triggers for an app*

We adopt the following conventions:
- New record
- New/updated record
- New record (real-time)
- New/updated record (real-time)
- New records (batch)
- New/updated records (batch)

Here's an example of a typical trigger title definition.

```
title: "New/updated candidate"
```

This results in the trigger title below.

![Title for the trigger](/assets/images/connectors-design-guide/trigger-title.png)
*Title for the trigger*

If undefined, the trigger defaults to the action's internal name. For example, the following code will result in a trigger title of `New updated candidate`

![Trigger code without title defined](/assets/images/connectors-design-guide/trigger-components-code.png)
*Trigger code without title defined*

#### Trigger component - subtitle
The subtitle complements the title by elaborating on what the trigger does, to help you make a decision between triggers.

![Picklist of available triggers for an app](/assets/images/connectors-design-guide/trigger-picklist-subtitles.png)
*Picklist of available triggers for an app*

We adopt the convention: `Triggers when <description>`, e.g. `Triggers when a new email is received in Outlook`. This format isn't grammatically correct everytime, so we can adjust it accordingly.

Here's an example of a trigger subtitle definition.

```
subtitle: "Triggers when a candidate is created or updated in Greenhouse"
```

This results in the trigger subtitle below.

![Subtitle for the trigger](/assets/images/connectors-design-guide/trigger-subtitle.png)
*Subtitle for the trigger*

If undefined, the subtitle defaults to the trigger description. For example, the following code will result in a trigger subtitle of `New/updated candidate in Greenhouse`.

![Trigger code without subtitle defined](/assets/images/connectors-design-guide/trigger-components-code.png)
*Trigger code without subtitle defined*

Some additional examples of trigger descriptions:

- Triggers immediately when a new company is created in Intercom
- Triggers when an order is created or updated in SAP
- Triggers when a lead is created in Marketo

#### Trigger component - help
The trigger help is trigger-level text that elaborates how the trigger works.

This usually comprises of:

- Subtitle, e.g. "Triggers when a new email is received in Outlook."
- Limitations of the trigger/action, if any, e.g. "This search action will retrieve a maximum of 200 records.", "This upload action can handle a maximum of 25GB."
- Common edge cases, e.g. "This Salesforce search action may time out if you're searching by non-indexed fields."
- Complementary actions, if any, e.g. "To retrieve email attachments, use the **Download attachments** action."
- Link to a relevant [documentation article](/) or [solution article](https://support.workato.com/support/solutions) for additional information

Here's an example of a help text definition.

```
help: "Triggers when a candidate is created or updated."
```

This results in the trigger help text below.

![Additional help text for the trigger](/assets/images/connectors-design-guide/trigger-help.png)
*Additional help text for the trigger*

### Trigger input
There are some common trigger inputs as detailed in the following table.

| Trigger input                                                 | Description                                                                                                                                                                              |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Since/from](#trigger-input---sincefrom)                      | Input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.                                                         |
| [API-based filters](#trigger-input---api-based-filters)       | Filters for triggers to pick only events that user is interested in, e.g. pick up only emails with `Important` label, or pick up only leads marked `Hot`                                 |
| [Batch configuration](#trigger-input---batch-configuration)   | Specific for batch triggers. Collection of fields that allow user to define the batches of data returned, e.g. batch size, type of records and specific fields in the records to return. |

#### Trigger input - since/from
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

#### Trigger input - API-based filters
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

#### Trigger input - batch configuration
For batch triggers where each trigger event returns a list of records instead of a single record, users should have the ability to configure batch settings.

- Datatree output: the fields returned by the trigger, e.g. only return the ID and name of customer records and exclude their addresses. This is useful for optimizing API requests to retrieve only needed data from the app.
- Batch size: the number of records to return per trigger event. This is useful for users designing recipes to work in batches, e.g. fetch a list of 2000 records from one app for batch insert into another app.

### Trigger output
There are some common trigger outputs as detailed in the following table.

| Trigger output                                                | Description                                                                                                                                                                                  |
|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Record fields](#trigger-output---record-fields)              | All the data fields of the record that the trigger is fetching as a trigger event. E.g. if the trigger event is **New lead**, then the record fields would be lead name, email, mobile, etc. |
| [Batch metafields](#trigger-output---batch-metafields)        | Specific for batch triggers. Metafields such as boolean fields `First batch?`, `Last batch?`, `ID of first record in batch`, `ID of first record in batch`, etc.                             |

#### Trigger output - record fields
We usually return the full API response back to the user in the trigger datatree. In the following, we see that the **New/updated Salesforce lead** trigger has all the data fields of the lead available.

![Trigger output datatree for new/updated Salesforce lead trigger](/assets/images/connectors-design-guide/trigger-output-single-record.gif)
*Trigger output datatree for new/updated Salesforce lead trigger*

For batch triggers that return a list, we correspondingly return a list in the trigger datatree. In the following, we see that the **New/updated Salesforce lead (batch)** trigger has a list of leads.

![Trigger output datatree for new/updated Salesforce lead (batch) trigger](/assets/images/connectors-design-guide/trigger-output-batch-records.gif)
*Trigger output datatree for new/updated Salesforce lead (batch) trigger*

If we expand this list, we see all the data fields of the lead available for use in our recipe.

![Trigger output datatree for new/updated Salesforce lead (batch) trigger](/assets/images/connectors-design-guide/trigger-output-batch-records.png)
*Trigger output datatree for new/updated Salesforce lead (batch) trigger*

#### Trigger output - batch metafields


### Trigger types
Triggers are commonly of the following types.

| Trigger type                   | Description                                                                                                                                                               | Example                                                    |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [New record](#trigger-type---new-record)                     | Trigger checks app regularly for new records and picks up newly created records.                                                                                          | `OneDrive` - New file                                      |
| [New/updated record](#trigger-type---newupdated-record)             | Trigger checks app regularly for new or updated records and picks up records when they are newly created or when they get updated.                                        | `OneDrive` - New/updated file                              |
| [New record (real-time)](#trigger-type---new-record-real-time)         | Trigger picks up records instantly when they are created.                                                                                                                 | `Google Sheets` - New row in sheet (real-time)             |
| [New/updated record (real-time)](#trigger-type---newupdated-record-real-time) | Trigger picks up records instantly when they are created or when they get updated.                                                                                        | `Google Sheets` - New/updated row in sheet (real-time)     |
| [New records (batch)](#trigger-type---new-records-batch)            | Trigger picks up newly created records when they are created. Records are grouped together such that each trigger event contains a list of records.                       | `Salesforce` - New leads (batch)                           |
| [New/updated records (batch)](#trigger-type---newupdated-records-batch)    | Trigger picks up records when they are newly created or when they get updated. Records are grouped together such that each trigger event contains a list of records.      | `Salesforce` - New/updated leads (batch)                   |
| [Scheduled records search](#trigger-type---scheduled-records-search-batch)       | Trigger executes a search at scheduled intervals and retrieves a list of results. Records are grouped together such that each trigger event contains a list of records.   | `Quick Base` - Scheduled record search using query (batch) |

#### Trigger type - new record
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new records and picks up newly created records since the last time the trigger checked the app.

Behavior of new records triggers:
- Each trigger event in the recipe corresponds to one new record.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and newer records should be processed last.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new records should be missing even if the recipe was stopped and started.

#### Trigger type - new/updated record
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new or updated records and picks up any records that has changed since the last time the trigger checked the app.

Behavior of new/updated records triggers:
- Each trigger event in the recipe corresponds to one new or one updated record.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and latest records should be processed last.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new or updated records should be missing even if the recipe was stopped and started.
- The latest version of the record will be picked up when the trigger polls the app, e.g. if a record was updated 3 times between polls, the poll will pick up only the 3rd update as a trigger event.

#### Trigger type - new record (real-time)
This is a [real-time trigger](/recipes/triggers.html#real-time-triggers) where the app sends a webhook about newly created records to the trigger as soon as the record is created.

Behavior of new records (real-time) triggers:
- Each trigger event in the recipe corresponds to one new record.
- Trigger should return records in the order they were received, i.e. webhook events received earlier should be processed first.
- When recipe is stopped, it stops listening to webhook events. If possible, the app should try to resend webhook events until it receives a 200 OK from Workato that the trigger has received the webhook. If not possible, a note about webhook events being missed when the recipe is stopped should be included in the trigger's help text, so as to inform users about the limitation.

#### Trigger type - new/updated record (real-time)
This is a [real-time trigger](/recipes/triggers.html#real-time-triggers) where the app sends a webhook about newly created or updated records to the trigger as soon as the record is created or updated.

Behavior of new/updated records (real-time) triggers:
- Each trigger event in the recipe corresponds to one new or one updated record.
- Trigger should return records in the order they were received, i.e. webhook events received earlier should be processed first.
- When recipe is stopped, it stops listening to webhook events. If possible, the app should try to resend webhook events until it receives a 200 OK from Workato that the trigger has received the webhook. If not possible, a note about webhook events being missed when the recipe is stopped should be included in the trigger's help text, so as to inform users about the limitation.

#### Trigger type - new records (batch)
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new records and picks up newly created records since the last time the trigger checked the app. Results are returned as a list of record (in batches) instead of as single records.

As this is a batch trigger, it should have [batch configuration input](#trigger-input---batch-configuration).

Behavior of new records (batch) triggers:
- Each trigger event in the recipe correspond to a list of newly created records.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and latest records should be processed last.
- If the list of records returned is large, it should be returned as multiple trigger events. E.g. if user sets the batch size to 100, a result list of 215 should be returned in 4 trigger events of list sizes 100, 100, 15 respectively.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new records should be missing even if the recipe was stopped and started.

#### Trigger type - new/updated records (batch)
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new or updated records and picks up any records that has changed since the last time the trigger checked the app. Results are returned as a list of record (in batches) instead of as single records.

As this is a batch trigger, it should have [batch configuration input](#trigger-input---batch-configuration).

Behavior of new/updated records (batch) triggers:
- Each trigger event in the recipe correspond to a list of newly created records.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and latest records should be processed last.
- If the list of records returned is large, it should be returned as multiple trigger events. E.g. if user sets the batch size to 100, a result list of 215 should be returned in 4 trigger events of list sizes 100, 100, 15 respectively.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new records should be missing even if the recipe was stopped and started.

#### Trigger type - scheduled records search (batch)
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app on scheduled intervals for records that matches the specified search criteria. Results are returned as a list of record (in batches) instead of as single records. As the search criteria is the same every time the search is conducted (unless the recipe was changed in between intervals), a similar set of records might be returned with this trigger across searches.

As this is a batch trigger, it should have [batch configuration input](#trigger-input---batch-configuration).

Behavior of scheduled records search (batch) triggers:
- Each trigger event in the recipe correspond to a list of newly created records.
- If the list of records returned is large, it should be returned as multiple trigger events. E.g. if user sets the batch size to 100, a result list of 215 should be returned in 4 trigger events of list sizes 100, 100, 15 respectively.

## Actions
In this section, we discuss actions in Workato. We cover:

- [Action descriptive components](#action-descriptive-components)

The components of an action that allows you to describe and elaborate what it does for a user.

- [Action input](#action-input)

The input fields to include in actions.

- [Action output](#action-output)

The output fields to include in action datatrees.

- [Action types](#action-types)

The common actions you tend to see in Workato.

### Action descriptive components
There are some common descriptive components that appear in all actions. The following table details these components.

| Action component | Description                                                                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Description](#action-component---description)       | A short line that shows up at the recipe level to describe what the action does.                                                                   |
| [Title](#action-component---title)             | Title that shows up in the app's action picklist to help you make a selection between actions.                                             |
| [Subtitle](#action-component---subtitle)          | Subtitle that shows up in the app's action picklist. Further elaborates what the action does to help you make a selection between actions. |
| [Help](#action-component---help)              | Action-level help that elaborates how the action works. Usually also comprises of the subtitle.                                                    |

Here is how `description`, `title` and `help` show up in the action.

![Description, title and help components in the trigger](/assets/images/connectors-design-guide/action-components.png)
*Description, title and help components in the trigger*

The `title`, `subtitle` and `description` are often very similar in values.

![Title, subtitle, description components](/assets/images/connectors-design-guide/action-components-2.png)
*Title, subtitle, description components*

This is the SDK code that corresponds to the above components.

![Action code corresponding to action descriptive components](/assets/images/connectors-design-guide/action-descriptive-components-code.png)
*Action code corresponding to action descriptive components*

#### Action component - description
The description is a quick summary of what each recipe line does in which app. When looking at a recipe, the trigger and action descriptions should be able to provide a good idea of what the recipe is doing.

We adopt the convention: `Create <record> in <app>`, `Update <record> in <app>`, `Search <records> in <app>` where the app and business object should be highlighted. 

![Apps and business objects for triggers and actions](/assets/images/connectors-design-guide/trigger-action-descriptions.png)
*Apps and business objects for triggers and actions*

Here's an example of a typical description definition where the business object `prospect` and app `Greenhouse` are highlighted.

```
description: "Create <span class='provider'>prospect</span> in <span class='provider'>Greenhouse</span>"
```

This results in the action description below.

![Description for the action](/assets/images/connectors-design-guide/action-description.png)
*Description for the action*

Some additional examples of action descriptions:

- Create new row in Google Sheets
- Update vendor in NetSuite
- Upsert opportunity in Salesforce

#### Action component - title
The title shows up in the app's action picklist to help you make a selection between actions.

![Picklist of available actions for an app](/assets/images/connectors-design-guide/action-picklist-titles.png)
*Picklist of available actions for an app*

We adopt the following conventions:
- Create record
- Update record
- Upsert record
- Search records
- Get record by ID
- Create records (batch)
- Update records (batch)
- Upsert records (batch)
- Download file/attachment
- Upload file/attachment

Here's an example of a typical action title definition.

```
title: "Create prospect"
```

This results in the action title below.

![Title for the action](/assets/images/connectors-design-guide/action-title.png)
*Title for the action*

If undefined, the trigger defaults to the action's internal name. For example, the following code will result in a action title of `Add prospect`

![Action code without title defined](/assets/images/connectors-design-guide/action-components-code.png)
*Action code without title defined*

#### Action component - subtitle
The subtitle complements the title by elaborating on what the action does, to help you make a decision between actions. Most subtitles read like a more specific version of its associated description.

![Picklist of available actions for an app](/assets/images/connectors-design-guide/action-picklist-subtitles.png)
*Picklist of available actions for an app*

If undefined, the subtitle defaults to the action description. For example, the following code will result in a trigger subtitle of `Create prospect in Greenhouse`.

![Action code without subtitle defined](/assets/images/connectors-design-guide/action-components-code.png)
*Action code without subtitle defined*

Here's an example of an action subtitle definition.

```
subtitle: "Create a new prospect in Greenhouse"
```

This results in the action subtitle below.

![Subtitle for the action](/assets/images/connectors-design-guide/action-subtitle.png)
*Subtitle for the action*

#### Action component - help
The trigger help is action-level text that elaborates how the action works.

This usually comprises of:

- Subtitle, e.g. "Download email attachments from email in Outlook"
- Limitations of the trigger/action, if any, e.g. "This search action will retrieve a maximum of 200 records.", "This upload action can handle a maximum of 25GB."
- Common edge cases, e.g. "This Salesforce search action may time out if you're searching by non-indexed fields."
- Complementary actions, if any, e.g. "To retrieve email attachments, use the **Download attachments** action."
- Link to a relevant [documentation article](/) or [solution article](https://support.workato.com/support/solutions) for additional information

Here's an example of a help text definition.

```
help: "Creates a new prospect. A prospect can be on no jobs or many jobs. " \
	  "A prospect application cannot be added to a job stage. " \
      "When a prospect is ready to be added to a job stage, they can be converted to a candidate in Greenhouse."
```

This results in the action help text below.

![Additional help text for the action](/assets/images/connectors-design-guide/action-help.png)
*Additional help text for the action*

### Action input
Actions take in data inputs via input fields.

![Input fields in an action](/assets/images/connectors-design-guide/action-input-fields.png)
*Input fields in an action*

There are several components of an input field, as detailed below.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field component</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='#input-field-component---name' target'_blank'>Name</a></td>
      <td>API name of the field. Field label also defaults to this name if undefined.</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---label' target'_blank'>Label</a></td>
      <td>The name of the field that user sees on Workato. Label should match the name of the field that user sees in their app. If undefined, label defaults to the internal API name of the field.</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---type' target'_blank'>Type</a></td>
      <td>Data type of the field. Valid types are: 
      	<ul>
	        <li>string</li>
	        <li>integer</li>
	        <li>number</li>
	        <li>date_time</li>
	        <li>date</li>
	        <li>timestamp</li>
	        <li>boolean</li>
	        <li>object. Must be accompanied with <code>properties</code></li>
	        <li>array. Must be accompanied with <code>properties</code></li>
      	<ul>
      </td>
    </tr>
    <tr>
      <td><a href='#input-field-component---control-type' target'_blank'>Control type</a></td>
      <td>The UI component that is used by the field. Valid control types are:
      	<ul>
      		<li>text</li>
      		<li>text-area</li>
      		<li>plain-text</li>
      		<li>plain-text-area</li>
      		<li>number</li>
      		<li>url</li>
      		<li>select</li>
      		<li>checkbox</li>
      		<li>multiselect</li>
      		<li>date</li>
      		<li>date_time</li>
      		<li>email</li>
      		<li>subdomain</li>
      		<li>static-list</li>
      	</ul>
      </td>
    </tr>
    <tr>
      <td><a href='#input-field-component---hint' target'_blank'>Hint</a></td>
      <td>Elaboration on the input field. Some common hints:
      	<ul>
      		<li>Description of the field from the API documentation</li>
      		<li>Field clarification, e.g. "ID of the record to update"</li>
      		<li>Valid values, e.g. "Valid values are <b>High</b>, <b>Medium</b> and <b>Low</b>"</li>
      		<li>Input precision, e.g. "Express percentage out of 100, e.g. <b>25</b> would be <b>25%</b>"</li>
      		<li>Case sensitivity, e.g. "Provide case sensitive name of file to search for"</li>
      		<li>Default values, e.g. "If left blank, filename defaults to the uploaded document name"</li>
      		<li>A how-to example, e.g. "Use a SOQL query like <b>StageName = 'Closed Won'</b>"</li>
      	</ul>
      </td>
    </tr>
    <tr>
      <td><a href='#input-field-component---optional-flag' target'_blank'></a>Optional flag</td>
      <td>Boolean that decides whether the input field is marked `(Required)` or `(Optional)`</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---default' target'_blank'></a>Default</td>
      <td>Provides a default value for the input field. Set a default if the field is commonly used and there is a common value for most use cases.</td>
    </tr>
  </tbody>
</table>

#### Input field component - name
This needs to be the exact API name of the field, as specified in the API documentation.

Taking the Greenhouse Harvest API's add prospect endpoint as example, the first name and last name API names are `first_name` and `last_name`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We therefore define our input fields as the following:

```
{ name: "first_name" },
{ name: "last_name" }
```

Labels for input fields default to the API name if undefined. Workato titleizes API names and converts underscores to spaces. The above definition will generate the following input fields.

![Input fields first name and last name with Workato generated labels](/assets/images/connectors-design-guide/input-fields-names.png)
*Input fields first name and last name with Workato generated labels*

The icon on the leftmost side of the field ("ABC") signifies that this field has a control type `string`. If undefined, the data type defaults to `string` and the control type defaults to `text`, as that is the most common input field definition.

#### Input field component - label
This should be the name that an app user sees when logged into their application. This defaults to the API name if undefined. Workato titleizes API names and converts underscores to spaces.

Taking the Greenhouse example of adding a prospect, we see that the fields are named exactly like their API names.

![Greenhouse input fields when adding prospect](/assets/images/connectors-design-guide/greenhouse-add-prospect-screen.png)
*Greenhouse input fields when adding prospect*

In this case, we technically don't have to define the labels as they default to the right labels, but we can go ahead and add labels to the fields definition anyway.

```
{ name: "first_name", label: "First name" },
{ name: "last_name", label: "Last name" }
```

The above definition will generate the following input fields.

![Input fields first name and last name with Workato generated labels](/assets/images/connectors-design-guide/input-fields-labels.png)
*Input fields first name and last name with Workato generated labels*

#### Input field component - type
This needs to be the data type of the field, as specified in the API documentation.

Taking the Greenhouse Harvest API's add prospect endpoint as example, the first name and last name are of type `string`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can therefore define the fields as:

```
{ name: "first_name", type: "string" },
{ name: "last_name", type: "string" }
```

This won't affect how the input fields show up in Workato, but it affects how the values in these fields are processed and handled by Workato and the app, so they should be defined correctly.

#### Input field component - control type
The control type defines the Workato UI controls and affects how a user can interact with the field.

The following lists the typical control type for each data type. You can find further elaboration about control types [here](/developing-connectors/sdk/object-definition.html#control-types).

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Data type</th>
        <th>Control type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>string</td>
      <td>
      	<ul>
      		<li>text</li>
      		<li>text-area</li>
      		<li>plain-text</li>
      		<li>plain-text-area</li>
      		<li>url</li>
      		<li>email</li>
      		<li>subdomain</li>
      	</ul>
      </td>
    </tr>
    <tr>
      <td>integer</td>
      <td>number</td>
    </tr>
    <tr>
      <td>number</td>
      <td>number</td>
    </tr>
    <tr>
      <td>date_time</td>
      <td>date_time</td>
    </tr>
    <tr>
      <td>date</td>
      <td>date</td>
    </tr>
    <tr>
      <td>timestamp</td>
      <td>date_time</td>
    </tr>
    <tr>
      <td>boolean</td>
      <td>checkbox</td>
    </tr>
    <tr>
      <td>object</td>
      <td>Not applicable</td>
    </tr>
    <tr>
      <td>array</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

The control types select, multiselect and static lists can be used for all data types. These control types generate a picklist. However, we recommend that a text control type toggle be added to these picklist control types, so that a user is able to use a datapill if needed. This is because, in a recipe, data tends to be variable instead of hardcoded, e.g. a **Create issue** action usually creates issues with a priority that depends on the source, not a hardcoded priority of **Low** every time.

Taking the Greenhouse Harvest API's add prospect endpoint as example, the first name and last name are of type `string`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

As we won't expect the names to be too long, we can use the `text` control type for the field. We can define the fields as:

```
{ name: "first_name", control_type: "text" },
{ name: "last_name", control_type: "text" }
```

The above definition will generate the following fields.

![Input fields first name and last name as text control types](/assets/images/connectors-design-guide/input-fields-control-types.png)
*Input fields first name and last name as text control types*

#### Input field component - hint
Elaboration on the input field. Typically a maximum of 2 lines per input field. If more help is needed, provide a link to a documentation article, support article, or to the API documentation.

Some common hints:
- Description of the field from the API documentation
- Field clarification, e.g. "ID of the record to update"
- Valid values, e.g. "Valid values are **High**, **Medium** and **Low**"
- Input precision, e.g. "Express percentage out of 100, e.g. **25** would be **25%**"
- Case sensitivity, e.g. "Provide case sensitive name of file to search for"
- Default values, e.g. "If left blank, filename defaults to the uploaded document name"
- A how-to example, e.g. "Use a SOQL query like **StageName = 'Closed Won'**"

Taking the Greenhouse Harvest API's add prospect endpoint as example, there is not much limitations or complexity with the first name and last name fields.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can take the API description to be the hint.

```
{ name: "first_name", hint: "The prospect’s first name" },
{ name: "last_name", hint: "The prospect’s last name" }
```

The above definition will generate the following fields.

![Input fields first name and last name with hints](/assets/images/connectors-design-guide/input-fields-hints.png)
*Input fields first name and last name with hints*

#### Input field component - optional flag
The optional flag allows you to mark input fields as optional or required. This should correspond with the API documentation, and required fields in the API request should be marked as `optional:false`. If this flag is undefined, field will be marked optional.

Users will not be able to start a recipe if a required field has no data or value at design-time. If a field is marked optional but is actually required, the request will throw an error at run-time if no value is provided.

Taking the Greenhouse Harvest API's add prospect endpoint as example, we see that first and last name are required fields.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can mark them as `optional: false`.

```
{ name: "first_name", optional: false },
{ name: "last_name", optional: false }
```

The above definition will generate the following fields.

![Input fields first name and last name marked required](/assets/images/connectors-design-guide/input-fields-optional-flag.png)
*Input fields first name and last name marked required*

There are cases where either one or another field is required, e.g. when creating a customer, either provide a **Company name** or the **Full name**. In such cases, both fields should be marked optional, and the hints for both fields should explain that either one or the other field should contain input data.

There are some cases where fields are only required if you wish to create an associated object, e.g. when creating an invoice, line items may be optional. But if user wishes to create a line item, the item code, price and quantity is required. In such cases, these fields should be marked optional, but the hints for these fields should explain that they are required in order to create a line item.

#### Input field component - default
Provides a default value for the input field. Set a default if the field is commonly used, and there is a common value for most use cases. When a default is set, the input field behaves as if it has a `sticky:true` flag, and shows up on the form when the action is selected. If the field is not commonly used, we don't have to set a default for it - this is so that it won't appear on the form and add unnecessary clutter.

Taking the Greenhouse example of adding a prospect, we see that there are 2 fields which may make sense to add a default value to - the `is_private` and `phone_type` fields. We make the former default to "false", and the latter default to "mobile".

```
  { name: "is_private", label: 'Is private?', type: "boolean", control_type: "checkbox", default: "false" },
  { name: "phone_numbers", type: "array", hint: 'List of phone numbers for the prospect', of: "object", properties: [
    { name: "value" },
    { name: "type",
      control_type: "select",
      pick_list: "phone_type",
      default: "mobile",
      toggle_hint: "Select from list",
      toggle_field: {
        name: "type",
        label: "type",
        type: "string",
        control_type: "text",
        toggle_hint: "Use custom value"
      } }
  ] },
```

The above definition will generate the following fields.

![Input fields with default values](/assets/images/connectors-design-guide/input-fields-default.png)
*Input fields with default values*

### Action types
Actions are commonly of the following types:

- [Create record](#action-type---create-record)
- [Update record](#action-type---update-record)
- [Upsert record](#action-type---upsert-record)
- [Search records](#action-type---search-records)
- [Get record by ID](#action-type---get-record)

#### Action type - create record
This action uses the data input to create a new record. It should return the internal ID of the record created, at a minimum.

Behavior:
- New record should be created with the provided data.
- Add an input field hint to the unique key to highlight to the user that it should be a disinct value, e.g. email of a contact should be unique.
- If the new record was not successfully created, action should throw an error with an explanatory error message, e.g. "Record with duplicate email exists".
- If the API allows for duplicate records to be created, i.e. record does not need any unique keys, highlight this in the help text.

#### Action type - update record
This action uses the data input to update an existing record. The record to update should be identified using a unique key, e.g. internal ID or external ID.

Behavior: 
- The input data provided should be written to the existing record.
- If an input field doesn't have data inputs provided by the user, it should not erase existing values in the app by passing in a `null` value, unless the user explicitly uses the `clear` formula. Fields without data inputs should be stripped from the API request so that a null value is not sent.
- For records with lists, e.g. invoice with invoice line items, include an option to append to/overwrite the existing list with the new list input. If the API only allows for a certain behavior, highlight this behaviour in the input list section's hint.

#### Action type - upsert record
This action uses the data input to update an existing record, or create a new record if no existing record is found. The record to update should be identified using a unique key, e.g. internal ID or external ID.

Behavior: 
- The input data provided should be written to the existing record.
- If an input field doesn't have data inputs provided by the user, it should not erase existing values in the app by passing in a `null` value, unless the user explicitly uses the `clear` formula. Fields without data inputs should be stripped from the API request so that a null value is not sent.
- For records with lists, e.g. invoice with invoice line items, include an option to append to/overwrite the existing list with the new list input. If the API only allows for a certain behavior, highlight this behaviour in the input list section's hint.

#### Action type - search records
This action takes in one or more parameters as search criteria, and returns only records matching all the search criteria.

Behavior of get record actions:
- Takes in one or more inputs as search criteria.
- Only records matching all search criteria should be returned.
- Search should return only exact matches. If API can only return records which does a partial match, highlight this behavior in the help text.
- Possible to return a list of records. Highlight the maximum number of records which can be returned in the help hint.

#### Action type - get record
This action returns one record that matches the record ID or key provided. 

Behavior of get record actions:
- Takes in a unique record ID or key as input.
- Action fails if no record that matches the ID is found.
