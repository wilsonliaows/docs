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
This is a [polling trigger] where trigger checks app regularly for new records and picks up newly created records.


#### Trigger type - new/updated record

#### Trigger type - new record (real-time)

#### Trigger type - new/updated record (real-time)

#### Trigger type - new records (batch)

#### Trigger type - new/updated records (batch)

#### Trigger type - scheduled records search (batch)



## Actions
Try to be generic.

