---
title: Connectors design guide
date: 2018-09-05 15:30:00 Z
---

# Connectors design guide
This guide is meant for citizen developers who are building SDK connectors on the Workato platform, and guides the design of connectors, triggers and actions. This guide is meant to maintain consistency in the style and behaviour of triggers and actions on the Workato platform, so as to provide a consistent experience for the user building Workato recipes.

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

![Components found in triggers](/assets/images/connectors-design-guide/trigger-components.png)
*Components found in triggers*

The `title`, `subtitle` and `description` are often very similar in values.

![Title, subtitle, description components](/assets/images/connectors-design-guide/trigger-components-2.png)
*Title, subtitle, description components*

This is the SDK code that corresponds to the above components.

![Trigger code corresponding to trigger descriptive components](/assets/images/connectors-design-guide/trigger-descriptive-components-code.png)
*Trigger code corresponding to trigger descriptive components*

#### Trigger component - description
The description is a quick summary of what each recipe line does in which app. When looking at a recipe, the trigger and action descriptions should be able to provide a good idea of what the recipe is doing.

We adopt the convention: `New <record> in <app>` and `New/updated <record> in <app>.` where the app and business object should be highlighted. 

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

- New/updated **opportunities** in **Salesforce** (batch)
- New **vendor** in **NetSuite**
- New **file** in **Box**

#### Trigger component - title
The title shows up in the app's trigger picklist to help you make a selection between triggers.

![Picklist of available triggers for an app](/assets/images/connectors-design-guide/trigger-picklist-titles.png)
*Picklist of available triggers for an app*

We adopt the following conventions:
- `New record`
- `New/updated record`
- `New record (real-time)`
- `New/updated record (real-time)`
- `New records (batch)`
- `New/updated records (batch)`

Here's an example of a typical trigger title definition.

```
title: "New/updated candidate"
```

This results in the trigger title below.

![Title for the trigger](/assets/images/connectors-design-guide/trigger-help.png)
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

![Additional help text for the trigger](/assets/images/connectors-design-guide/trigger-help.png)
*Additional help text for the trigger*

### Trigger input
There are 2 common trigger inputs as detailed in the following table.

| Trigger input                            | Description                                                                                                                                                               |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Since/from](#trigger-input---sincefrom) | Input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.                                          |
| API-based filters                        | Filters for triggers to pick only events that user is interested in, e.g. pick up only emails with `Important` label, or pick up only leads marked `Hot`                  |

#### Trigger input - since/from
Almost every trigger has this since input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.

This is useful for use cases such as initial bootstrapping when your company is moving to a new system and wishes to move all existing records from the old system into the new. Using the since field, you can choose to pick records created from exact date times. You can read more about the since input field's function in [this article](/recipes/triggers#sincefrom).

Some key design points to note about the since field:
- It should only allow users to input an exact date time. We are no longer supporting picklists.
- It should be an optional field.
- It should default to a week ago if left blank.
- The label should be `When first started, this recipe should pick up events from`.
- The hint should be `When you start recipe for the first time, it picks up trigger events from this specified date and time. Defaults to fetching trigger events from a week ago if left blank. Once recipe has been run or tested, value cannot be changed. Learn more`
- The learn more link should point to [this article](https://docs.workato.com/recipes/triggers.html#sincefrom).

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

For example, the Gmail connector's new email trigger has an optional filter to pick up only emails with a particular label. If no label is set, the trigger picks up all emails received - which can be a significant number a day. But if we set the label to **INBOX** or **STARRED**, Gmail will send us only the emails that meet this criteria, hence reducing unnecessary traffic. If this API-based was not provided, the user would need to use trigger conditions, which means that Gmail will send Workato all the emails received, and Workato will have to filter for the **INBOX** or **STARRED** emails to process.

![Gmail new email trigger has an optional filter to pick up only emails with certain labels](/assets/images/connectors-design-guide/api-filters-gmail.png)
*Gmail new email trigger has an optional filter to pick up only emails with certain labels*

In another example, Google Sheets have a filter for the user to define which sheet to monitor for new/updated rows. In this case, this is a required value for the Google Sheet API, and therefore marked required.

![Google Sheets new/updated row trigger has required filters to pick up only rows in a specific sheet](/assets/images/connectors-design-guide/api-filters-google-sheets.png)
*Google Sheets new/updated row trigger has required filters to pick up only rows in a specific sheet*

#### Trigger input - batch configuration
For batch triggers where each trigger event returns a list of records instead of a single record, users should have the ability to configure batch settings. 

- Datatree output/fields returned
- Page size

### Trigger output

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

The `title`, `subtitle` and `description` are often very similar in values.

This is the SDK code that corresponds to the above components.

#### Action component - description
The description is a quick summary of what each recipe line does in which app. When looking at a recipe, the trigger and action descriptions should be able to provide a good idea of what the recipe is doing.

We adopt the convention: `New <record> in <app>` and `New/updated <record> in <app>.` where the app and business object should be highlighted. 

![Apps and business objects for triggers and actions](/assets/images/connectors-design-guide/trigger-action-descriptions.png)
*Apps and business objects for triggers and actions*

Here's an example of a typical description definition where the business object `candidate` and app `Greenhouse` are highlighted.

```
description: "New/updated <span class='provider'>candidate</span> in <span class='provider'>Greenhouse</span>"
```

This results in the action description below.

![Description for the trigger](/assets/images/connectors-design-guide/trigger-description.png)
*Description for the trigger*

Some additional examples of action descriptions:

- Create new row in Google Sheets
- Update vendor in NetSuite
- Upsert opportunity in Salesforce

#### Action component - title
The title shows up in the app's trigger picklist to help you make a selection between triggers.

![Picklist of available triggers for an app](/assets/images/connectors-design-guide/trigger-picklist-titles.png)
*Picklist of available triggers for an app*

We adopt the following conventions:
- `New record`
- `New/updated record`
- `New record (real-time)`
- `New/updated record (real-time)`
- `New records (batch)`
- `New/updated records (batch)`

Here's an example of a typical trigger title definition.

```
title: "New/updated candidate"
```

This results in the trigger title below.

![Title for the trigger](/assets/images/connectors-design-guide/trigger-help.png)
*Title for the trigger*

If undefined, the trigger defaults to the action's internal name. For example, the following code will result in a trigger title of `New updated candidate`

![Trigger code without title defined](/assets/images/connectors-design-guide/trigger-components-code.png)
*Trigger code without title defined*

#### Action component - subtitle
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

#### Action component - help
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

![Additional help text for the trigger](/assets/images/connectors-design-guide/trigger-help.png)
*Additional help text for the trigger*

### Action input

### Action output

### Action types
Actions are commonly of the following types.

#### Action type - create record

#### Action type - update record

#### Action type - upsert record

#### Action type - search record
The action 

#### Action type - get record
The action typically returns one record that matches the record ID or key provided. 

Behaviour of get record actions:
- Takes in a unique record ID or key as input.
- Action fails if no record that matches the ID is found.

#### Action type - create record (batch)

#### Action type - update record (batch)

#### Action type - upsert record (batch)

