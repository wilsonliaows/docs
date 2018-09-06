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

- trigger components: the pieces that form a trigger
- trigger types: the common triggers you tend to see in Workato

### Trigger components
There are some common components that appear in all triggers. The following table details these components.

| Trigger component | Description                                                                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Description](#trigger-component-description)       | A short line that shows up at the recipe level to describe what the trigger does.                                                                   |
| [Title](#trigger-component-title)             | Title that shows up in the app's trigger picklist to help you make a selection between triggers.                                             |
| [Subtitle](#trigger-component-subtitle)          | Subtitle that shows up in the app's trigger picklist. Further elaborates what the trigger does to help you make a selection between triggers. |
| [Help](#trigger-component-help)              | Trigger-level help that elaborates how the trigger works. Usually also comprises of the subtitle.                                                    |
| [Since/from](#trigger-component-sincefrom)        | Input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.                   |

Here is how `description`, `title` and `help` show up in the trigger.

![Components found in triggers](/assets/images/connectors-design-guide/trigger-components.png)
*Components found in triggers*

The `title`, `subtitle` and `description` are often very similar in values.

![Title, subtitle, description components](/assets/images/connectors-design-guide/trigger-components-2.png)
*Title, subtitle, description components*

And almost every trigger should have a `Since` field with the label `When first started, this recipe should pick up events from`.

![Trigger since field](/assets/images/connectors-design-guide/trigger-since-field.png)
*Trigger since field*

This is the SDK code that corresponds to the above components.

![Trigger code corresponding to trigger components](/assets/images/connectors-design-guide/trigger-full-components-code.png)
*Trigger code corresponding to trigger components*

#### Trigger component - description
The description is a quick summary of what each recipe line does in which app. The app and business object should be highlighted. When looking at a recipe, the trigger and action descriptions should be able to provide a good idea of what the recipe is doing.

![Apps and business objects for triggers and actions](/assets/images/connectors-design-guide/trigger-action-descriptions.png)
*Apps and business objects for triggers and actions*

Here's an example of a description definition where we highlight the business object `candidate` and app `Greenhouse`.

```
description: "New or updated <span class='provider'>candidate</span> in <span class='provider'>Greenhouse</span>"
```

This results in the trigger description below.

![Description for the trigger](/assets/images/connectors-design-guide/trigger-description.png)
*Description for the trigger*

#### Trigger component - title
The title shows up in the app's trigger picklist to help you make a selection between triggers.

![Picklist of available triggers for an app](/assets/images/connectors-design-guide/trigger-picklist-titles.png)
*Picklist of available triggers for an app*

Here's an example of a trigger title definition.

```
title: "New or updated candidate"
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

Here's an example of a trigger subtitle definition.

```
subtitle: "New or updated candidate in Greenhouse"
```

This results in the trigger subtitle below.

![Subtitle for the trigger](/assets/images/connectors-design-guide/trigger-subtitle.png)
*Subtitle for the trigger*

If undefined, the subtitle defaults to the trigger description. For example, the following code will result in a trigger subtitle of `New or updated candidate in Greenhouse`.

![Trigger code without title defined](/assets/images/connectors-design-guide/trigger-components-code.png)
*Trigger code without title defined*

#### Trigger component - help
The trigger help is trigger-level text that elaborates how the trigger works. This usually comprises of the subtitle.

Here's an example of a help text definition.

```
help: "Triggers when candidates is created/updated"
```

![Additional help text for the trigger](/assets/images/connectors-design-guide/trigger-help.png)
*Additional help text for the trigger*

#### Trigger component - since/from
Almost every trigger has this since input field that allows you to pick up records created or updated some time ago, e.g. process new candidates created a week ago.

This is useful for use cases such as initial bootstrapping when your company is moving to a new system and wishes to move all existing records from the old system into the new. Using the since field, you can choose to pick records created from exact date times. You can read more about the since input field's function in [this article](/recipes/triggers#sincefrom).

Some key design points to note about the since field:
- It should only allow users to input an exact date time. We are no longer supporting picklists.
- It should be an optional field.
- It should default to a week ago if left blank.

Here's an example of how the since field should look like.

![Trigger since field allowing users to fetch historical records](/assets/images/connectors-design-guide/trigger-since-field.png)
*Trigger since field allowing users to fetch historical records*

### Trigger types
Triggers are conventionally of the type:
New record
New/updated record
New records (batch)
New/updated records (batch)
Scheduled search for records (batch)

### Since/from
The 

### Hint
The trigger-level hints provide an elaboration of how the trigger works.




## Actions
Try to be generic.

