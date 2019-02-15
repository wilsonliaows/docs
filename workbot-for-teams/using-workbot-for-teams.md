---
title: Using Workbot for Teams
date: 2018-03-20 10:23:00 Z
---

# Using Workbot for MS Teams
## Workbot commands
You can perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities) by sending Workbot commands from within Teams.

![Command example](/assets/images/workbot-for-teams/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters in Teams, then receiving a post message reply*

A Workbot command is a trigger that allows you to run a Workbot command recipe.

![New command](/assets/images/workbot-for-teams/new-command.png)
*Example 'newissue' command in a recipe*

>To learn more about Workbot commands, see [Workbot commands](/workbot-for-teams/workbot-triggers.md).

### Invoking Workbot commands in Teams
Workbot commands can be invoked in 3 distinct ways:
1. Sending the command in a direct message to Workbot or in a channel (in a channel, this requires tagging Workbot i.e. **@workbot your_command**)<br>
![Command recipes](/assets/images/workbot-for-teams/create-ticket-command.png)
<br>
2. Sending the command when a button is clicked<br>
![Command recipes](/assets/images/workbot-for-teams/create-ticket-button.png)

3. Submitting a task module form.

>To learn more about how buttons, choices and task modules work, see [Buttons, choices and task modules](/workbot-for-teams/buttons-choices-task-modules.md).

Commands can also prompt users for additional parameters. For example, to create a new ServiceNow incident, the user should provide the urgency, summary and description of the incident. In this case, you can add 3 parameters; `urgency`, `summary` & `description`. When the command is invoked, Workbot will prompt the user for each parameter when the command is invoked.

![Parameter prompts](/assets/images/workbot-for-teams/workbot-params-prompt.png)
*Workbot can ask users for info if you specify additional parameters in your command*

## Event notifications using Post message action
Workbot can also be used to notify you when any events occur in your apps. This can be done via the **Post message** action.

![Closed SNow incident](/assets/images/workbot-for-teams/closed-snow-incident.png)
*A Post message action notifying user about a closed ticket in ServiceNow*

The **Post message** action allows you to post a message to a user or in a channel.

![Notification recipe](/assets/images/workbot-for-teams/notification-recipe.png)
*A recipe where a Post message action notifies the user when a ServiceNow incident is closed*

>To learn more about how the Post message action works, see [Workbot actions](/workbot-for-teams/workbot-actions.md).

# Learn more
- [Workbot triggers](/workbot-for-teams/workbot-triggers.md)
- [Workbot actions](/workbot-for-teams/workbot-actions.md)
- [Workbot buttons, pick lists, and task modules](/workbot-for-teams/buttons-choices-task-modules.md)
