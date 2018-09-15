---
title: Connectors design guide - trigger descriptive components
date: 2018-09-05 15:30:00 Z
---

# Trigger descriptive components
There are some common descriptive components for all triggers. The following table details these components.

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

## Trigger component - description
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

## Trigger component - title
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

## Trigger component - subtitle
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

## Trigger component - help
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
