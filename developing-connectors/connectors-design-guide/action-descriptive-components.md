---
title: Connectors design guide - action descriptive components
date: 2018-09-05 15:30:00 Z
---

# Action descriptive components
There are some common descriptive components that appear in all actions, corresponding to visual components in Workato.

Actions and trigger descriptive components are largely similar. If you understand `description`, `title`, `subtitle` and `help` components in triggers, you will see that they have similar functions in actions. The main difference is the adopted product copy conventions.

The following table details these action components.

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

## Action component - description
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

- Create row in Google Sheets
- Update vendor in NetSuite
- Upsert opportunity in Salesforce
- Search orders in SAP

## Action component - title
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

If undefined, the trigger defaults to the action's internal name. For example, the following code will result in an action title of `Add prospect`

![Action code without title defined](/assets/images/connectors-design-guide/action-components-code.png)
*Action code without title defined*

## Action component - subtitle
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

## Action component - help
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
