---
title: Workbot New message action trigger
date: 2018-10-09 10:23:00 Z
---

# New message action trigger (real-time)
The Message actions trigger is a powerful way to kickstart your workflows. Turn any Slack message into tasks, tickets, leads and more — without leaving your Slack workspace.

![Message action gif](/assets/images/workbot/workbot-message-actions/message-actions-example.gif)
*Message actions in action*

Similar to the <b>[Post command](/workbot/workbot-commands.md)</b> trigger, command input fields can be defined if you need user input for follow-up actions. If command input fields are specified, message actions will launch a dialog to get user input.

## How message actions work
Message actions can be triggered on any message in any channel, direct message, or multi-party message that your custom bot is a member of.

Hover on a message, and click on the horizontal ellipsis menu to bring up a list of actions. If configured correctly, your message action(s) can be found at the bottom of the list.

![Message action list](/assets/images/workbot/workbot-message-actions/message-actions-list.gif)

What's unique about message actions is that the content of the message (which the message action was performed on) can be used in follow-up actions. Combined with the dialog (for collecting structured user input), you can transform any conversation into tasks, tickets, and more.

## Requirements: Custom bot
To use message actions, you first need to create a [custom bot](/workbot/workbot-custom-bots.md).

The message action must be added and configured under a custom bot in Slack before they can be used in Workato.

If you already have a custom Workbot, proceed on to learn how to use message actions with your custom bot.

## Configuring the message action
In this section, we will go through how to configure a message action.

![Message actions trigger](/assets/images/workbot/workbot-message-actions/message-actions-trigger.png)

The table below shows the input schema for the message actions trigger.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Field</th>
            <th>Explanation</th>
            <th>What goes in here</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Message action name</td>
          <td>Name of the message action</td>
          <td>
            The name of the message action should be descriptive of its function, e.g. Create Jira ticket. <br><br>The message action name also doubles as a <b>Callback ID</b>, which is used in configuring the corresponding message action in Slack.<br><br>Message action names should be unique across all recipes.
          </td>
        </tr>
        <tr>
          <td>Command input fields</td>
          <td>
            Fields you need from the user
          </td>
          <td>
          Often, you need your bot to obtain more information from users before it can carry out subsequent recipe actions. <br><br>If you've defined any command input fields, the custom bot will automatically launch a dialog for users to key in each input field (up to a maximum of 5 fields).
          </td>
        </tr>
        <tr>
          <td>Dialog title</td>
          <td>
            Title of dialog that is launched
          </td>
          <td>
            Define the title of the dialog that launches when collecting user input for command input fields. Maximum of 24 characters.
          </td>
        </tr>
        <tr>
          <td>Copy original text into dialog field</td>
          <td>
            Copy the original text from the message action into one of the dialog fields
          </td>
          <td>
            When a dialog is launched, you can choose to copy the original message into one of the defined command input fields. Only fields of type <code>string</code> are supported. <br><br>For example, in a <i>Create Jira issue</i> message action, choosing the <code>description</code> field copies the contents of the original message into the <code>description</code> field in the dialog.<br><br><img src="/assets/images/workbot/workbot-message-actions/copy-original-message.gif"></img>
          </td>
        </tr>
    </tbody>
</table>

### Callback ID
When message actions are triggered from Slack, the **Callback ID** is used to match the trigger event with the correct recipe.

![Callback ID](/assets/images/workbot/workbot-message-actions/callback-id.png)
*Callback ID generated from Message action name*

**Callback ID** is generated from the message action name — so make sure that the name you choose is unique.

**Callback ID** is required to configure your message actions in Slack. More on this in a [later section](#creating-the-message-action-on-your-custom-bot-in-slack).

### Dialog for command input fields
If you've defined any command input fields, a dialog is automatically launched to collect values for each of them from the user. Up to 5 command input fields can be defined for each message actions trigger.

![Adding command input fields](/assets/images/workbot/workbot-message-actions/message-actions-dialog.png)
*Message action dialog in Slack, with 5 different fields*

Each time you add a command input field, you can control how it shows up in the dialog.

![Adding command input fields](/assets/images/workbot/workbot-message-actions/add-command-input-field.png)
*Adding a command input field*

#### Display text field in dialog
Under **Dialog control type**, choose **text** to display a text field.

![Text field config](/assets/images/workbot/workbot-message-actions/text-config.png)
*Text control type in command input field*

![Text field](/assets/images/workbot/workbot-message-actions/text-field-dialog.png)
*Example text field in a Slack dialog*

Text fields are capped at 150 characters. If you're copying original messages into this input field, the original field cannot be longer than 150 characters. To avoid this issue, choose **text area** as your control type.

#### Display textarea field in dialog
Under **Dialog control type**, choose **text area** to display a text area field. Text area fields are capped at 3,000 characters. This control type is useful when copying original messages that are up to 3,000 characters long into this input field.

![Text area field config](/assets/images/workbot/workbot-message-actions/text-area-config.png)
*Text area control type in command input field*

![Text area field](/assets/images/workbot/workbot-message-actions/text-area-dialog.png)
*Example text area field in a Slack dialog*

#### Display a select menu in dialog
Under **Dialog control type**, choose **select** to display a select menu with menu options. This enables a new setting called **Select menu options type**.

![Select control type](/assets/images/workbot/workbot-message-actions/select-control-type.png)

You can choose from 3 different types of select menus. Each differ by the type of menu options displayed:
  - **Channels** displays the list of all public channels in your Slack workspace.

  ![Channel menu options](/assets/images/workbot/workbot-message-actions/channels-select.gif)
  *Example of a channels menu in a Slack dialog*

  When a channel is selected, the channel ID is returned, e.g. **CA83MDSK0**.

  - **users** displays the list of all users (including bots) in your Slack workspace.

    ![Users menu options](/assets/images/workbot/workbot-message-actions/users-select.gif)
    *Example of a users menu in a Slack dialog*

    When a user is selected, the user ID is returned, e.g. **UBTDVPFMM**.

  - **Custom** allows you to define a list of comma-separated menu options in the **Options** field.

    ![Custom menu config](/assets/images/workbot/workbot-message-actions/custom-select.png)
    *Custom menu config*

    ![Custom menu dialog](/assets/images/workbot/workbot-message-actions/custom-select.gif)
    *Example of a custom menu in a Slack dialog*

#### Copy original text into dialog field
You can also choose to copy the original message into a defined command input field, so that it shows up in the dialog. You can do so by selecting a command input field from the picklist in the **Copy original text into dialog** field.

![Copy original field config](/assets/images/workbot/workbot-message-actions/copy-original-field-example.png)
*Copying original message into the 'description' command input field*

![Copy original field example](/assets/images/workbot/workbot-message-actions/copy-original-message.gif)
*Original text copied onto 'description' field in dialog*

Note that only fields of type `string` are selectable.

After configuring your message action trigger, you'll need to create the message action in Slack.

## Creating the message action on your custom bot in Slack
Head to https://api.slack.com/apps and go to your custom bot.

![Custom bot](/assets/images/workbot/workbot-slash-commands/custom-bot.png)
*Click on your custom bot*

Under **Interactive components**, click on **Create New Action**.

![Create new action](/assets/images/workbot/workbot-message-actions/create-new-action.png)
*Click on **Create New Action***

In the message action configuration, choose a descriptive name for your message action, a short description of its function, followed by the **Callback ID**.

As mentioned above, the **Callback ID** used here must be identical to the **Callback ID** in the message actions trigger.

![Message actions config](/assets/images/workbot/workbot-message-actions/message-actions-config.png)

Click **Create** to finish setting up the message action on Slack. You can test it out by performing a message action on any message in the #general channel (bots are automatically added to the #general channel by default).

## Troubleshooting
### Channel not found
If this error occurs, ensure that your custom bot is added to the relevant channels where the message action can be triggered from.

### Too many characters in text field
This error occurs when the original text fails to copy into the command input field in the dialog because it exceeds the allowed number of characters.

By default, command input fields of type `string` default to control type 'text', which supports up to 150 characters.

To allow up to 3,000 characters, update the control type of the field to 'text-area'. Under **Dialog control type**, choose **text area**. This control type is useful when copying original messages that are up to 3,000 characters long.

![Text area field](/assets/images/workbot/workbot-message-actions/text-area-config.png)
*Text area control type in command input field*

![Text area in dialog](/assets/images/workbot/workbot-message-actions/copy-original-message.gif)
*Text area in dialog*
