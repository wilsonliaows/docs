---
title: Slack
date: 2017-09-12 12:00:00 Z
---

# Slack
[Slack](https://slack.com/) is a team collaboration platform that consolidates your team's communication and resources, and integrates easily with the enterprise and productivity products used across your organization. It provides a shared workspace where conversations are organized and accessible, and creates alignment and shared understanding across your team.

## Slack VS Workbot for Slack connectors
Workato supports both the Slack connector and the Workbot for Slack connector.

The Slack connector allows you to authorize to your Slack team as a team member, and immediately post messages onto channels, send direct messages to Slack team members, and manage channels and groups. It does not require any app installation onto your Slack team. Recipes built on the Slack connector allows you to respond to message buttons and menus.

The Workbot for Slack connector enables you to build additional recipes on top of Workbot for Slack, which is an app that needs to be installed onto your Slack team, and comes with pre-built recipes. Messages posted in Slack via this connector will show up as being posted by **Workbot**. Recipes built on top of the Workbot connector has the ability to facilitate more complex interactions and communicate with Workbot to read or write data to other connected apps.

A detailed comparison table for both the Slack connector and the Workbot for Slack connector is below.

| Features                                                      | Slack connector                                                                                                                   | Slack for Workbot connector                                                                                                                                                                                                     |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Attachment](https://api.slack.com/docs/message-attachments)  | [Yes](/connectors/slack.md#example-message-with-attachment)                                                                       | [Yes](/workbot/workbot-actions.md#post-command-reply)                                                                                                                                                                           |
| [Message buttons](https://api.slack.com/docs/message-buttons) | [Yes](/connectors/slack.md#using-slack-message-buttons)                                                                           | Yes                                                                                                                                                                                                                             |
| [Message menus](https://api.slack.com/docs/message-menus)     | Yes                                                                                                                               | No                                                                                                                                                                                                                              |
| [Threads](https://api.slack.com/docs/message-threading)       | [Yes](connectors/slack.md#using-slack-threads)                                                                                    | Yes                                                                                                                                                                                                                             |
| Need to install into Slack team?                              | No                                                                                                                                | Yes                                                                                                                                                                                                                             |
| Post as user customization                                    | [Yes](/connectors/slack.md#example-message-with-attachment-customized-app-name-and-images)                                        | No, always posts as Workbot                                                                                                                                                                                                     |
| Pre-built recipes/commands?                                   | No                                                                                                                                | [Yes](https://www.workato.com/workbot-slack)                                                                                                                                                                                    |
| Notifications need to be set up?                              | No. Recipes that post Slack messages just have to be started, and notifications will start being posted to the specified channel. | [Yes](/workbot/using-workbot-for-slack.md#2-set-up-smart-notifications). Recipes that post Workbot notifications have to be started, and notifications turned on in the Slack channels that should receive these notifications. |
| Verified user access?                                         | No                                                                                                                                | [Yes](/workbot/workbot-latebinding.md)                                                                                                                                                                                          |
| Pass data (parameters) to subsequent messages/recipes         | No                                                                                                                                | Yes                                                                                                                                                                                                                             |

## Connector information

### API version
The Slack connector uses the [Slack API](https://api.slack.com/web) with the endpoint URLs `https://slack.com/api/METHOD`.

### Supported editions and versions
Workato connects to all Slack organizations.

## How to connect to Slack on Workato

### Slack connection
Authorize Workato to access your Slack organization via the OAuth2 standard. This will require you to login to Slack and authorize the permissions that Workato requests.

![Configuring Slack connection](/assets/images/connectors/slack/slack-connection.gif)
*Setting up the Slack connection*

## Working with the Slack connector

### Using the post message action
The **Post message** action can be used to post a message to a channel or a direct message to a Slack user. By default, the message will be posted as the Workato app, but it can be configured to post under another name and corresponding icon image.

#### Example message with attachment
The following shows an example of how the different fields show up in Slack. As the **Post message as** and **Icon image URL** input fields have not been configured, the message displays as being posted by the Workato app.

![Post message example with attachment](/assets/images/connectors/slack/post-message-basic-example.png)
*Basic example of the post message action with attachment*

The corresponding configuration of the action step can be seen below. In addition, the **Message type** has been configured to **Good**.

![Post message basic configuration 1](/assets/images/connectors/slack/post-basic-message-config-1.png)

![Post message basic configuration 2](/assets/images/connectors/slack/post-basic-message-config-2.png)
*Post message action configuration - message with attachment. [Example recipe](https://www.workato.com/recipes/604131)*

#### Example message with attachment, customized app name and images
The following shows an example of how the different fields show up in Slack. As the **Post message as** and **Icon image URL** input fields have been configured to have the value of **Workato Chatbot** and the [Workbot icon](https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-04-11/168463184839_7e90d40c4856fdda4c19_512.png), the message displays as being posted by **Workato Chatbot** with the Workbot icon.

![Post message example with attachment, customized app name and images](/assets/images/connectors/slack/post-message-advanced-example.png)
*Example of the post message action with attachment, customized app name and images*

The corresponding configuration of the action step can be seen below.

![Post message advanced configuration 1](/assets/images/connectors/slack/post-basic-message-config-1.png)

![Post message advanced configuration 2](/assets/images/connectors/slack/post-basic-message-config-2.png)

![Post message advanced configuration 2](/assets/images/connectors/slack/post-advanced-message-config.png)
*Post message action configuration - message with attachment, customized app name and images. [Example recipe](https://www.workato.com/recipes/604145)*

### Using Slack message buttons
You can interact with messages in Slack via [Slack buttons](https://api.slack.com/docs/message-buttons). To use Slack buttons in Slack, you need:

1) A recipe with a **Post mesage** action that has buttons configured. This recipe needs to specifically refer to the second recipe below in its button configuration.

2) A button action handler recipe - a recipe with a **New button action** trigger, which picks up button clicks. In the actions, there should be recipe logic that carries out actions depending on which button has been clicked.

#### Example recipe #1: recipe with a post message action with buttons configured
We're going to add buttons configuration to the [basic recipe](https://www.workato.com/recipes/604131) we had [above](#example-message-with-attachment). The recipe we will be using can be found [here](https://www.workato.com/recipes/604149).

The buttons configured in this recipe show up in Slack as follows.

![Button display](/assets/images/connectors/slack/buttons-display.png)
*Corresponding buttons generated from the above configuration*

There are two available styles for buttons - non-danger and danger style. The non-danger styled buttons, once clicked, records the button click immediately and triggers the second recipe with the **New button action** trigger.

![Interacting with non-danger style button](/assets/images/connectors/slack/interacting-with-normal-button.gif)
*Interacting with non-danger styled button*

The danger styled buttons, when clicked, generates a popup prompt that asks the Slack user for confirmation of their click.

![Interacting with danger style button](/assets/images/connectors/slack/interacting-with-danger-button.gif)
*Interacting with danger styled button*

The prompt that pops up can be completely configured in the button configuration in the Slack action **Post message**.

![Popup prompt example](/assets/images/connectors/slack/popup-prompt-example.png)
*Popup prompt*

The button configuration for both button styles is in the following screenshot. We're calling a recipe we have pre-built: [**New Salesforce account button response recipe - Notify BizDev & Notify Sales**](https://www.workato.com/recipes/602058). All recipes with the Slack trigger **New button action** should show up in this picklist - select the recipe you have built to respond to this particular set of buttons.

![Button configuration for action](/assets/images/connectors/slack/button-config.png)
*Button configuration for post message action step*

The following is the button configuration we used in the recipe. For non-danger styled actions, only the first 2 parameters need to be filled in, as there is no popup prompt generated. For danger styled actions, all 7 parameters need to be filled in.

```
Notify BizDev, bd, , , , ,
Notify Sales, sales, danger, Confirm, Are you sure?, Yes, Cancel
```

The above button configuration follows this format for button actions:

```
action name, action ID, style, confirmation title, confirmation text, ok button title, dismiss button title
```

The following is an elaboration on each field in the definition of a button.

| Name                 | Explanation                                                                                                                                                                                                                  |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Action name          | Button label visible to Slack user interacting with the buttons.                                                                                                                                                             |
| Action ID            | Internal value of the button. This needs to be unique. Not visible on Slack to anyone.                                                                                                                                       |
| Style                | EITHER: leave blank for a simple button. Leave the following fields blank as well. OR: put **danger** for a red button with a popup prompt requiring the user to confirm the button click. Fill in the following fields too. |
| Confirmation title   | Shows up in the popup prompt as the header.                                                                                                                                                                                  |
| Confirmation text    | Shows up in the popup prompt as the body text.                                                                                                                                                                               |
| Ok button title      | Button label in the popup prompt to confirm the button click.                                                                                                                                                                |
| Dismiss button title | Button label in the popup prompt to cancel the button click.

#### Example recipe #2: recipe with a new button action trigger with logic defining the actions to carry out upon each button click
This following recipe has been built for the above scenario. It posts different messages as a thread under the first Salesforce account notification message, depending on which button has been clicked.

![Button action example recipe](/assets/images/connectors/slack/button-action-example-recipe.png)
*Button response [example recipe](https://www.workato.com/recipes/602058)*

This is the output datatree from the Slack trigger **New button action**. It shows the variables that the recipe builder can use while building the recipe actions.

![Button action datatree output](/assets/images/connectors/slack/button-action-datatree-output.png)
*Output datatree of the new button trigger*

The following table elaborates upon these datapill variables and what they can be used for.

| Name             | Explanation                                                                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Action name      | Button label visible to Slack user interacting with the buttons.                                                                                 |
| Action ID        | Internal value of the button. This needs to be unique. Not visible on Slack to anyone.                                                           |
| Channel          | The channel where the button click occurred. You can obtain both the channel internal Slack ID and the channel name.                             |
| User             | The user who clicked the button. You can obtain both the user internal Slack ID and the username.                                                |
| Team             | The Slack team where the button click occurred. You can obtain both the unique domain and the internal team ID.                                  |
| Action timestamp | The epoch time when the button click occurred.                                                                                                   |
| Message ID       | The epoch time when the message with buttons was sent. Can be used to populate **Thread ID** input fields to create a thread under this message. |
| Attachment ID    | ID of the attachment sent with the initial Slack message with buttons, if any.                                                                   |
| Response URL     | Used by Workato to respond to the button click.                                 |

An example of the values can be viewed in the job output, as follows.

![Button action data output](/assets/images/connectors/slack/button-action-output-data.png)
*Button action data output*

### Using Slack threads
[Slack threads](https://api.slack.com/docs/message-threading) allow you to group related messages together, making it easier to follow conversations in Slack channels or groups. To use Slack threads, you can either:

1) continue a conversation by replying to a message ID and starting a thread,
2) continue a conversation by replying to the parent message ID (the very first message of the thread), or
3) continue an existing thread by replying to the thread ID.

You need to specify the message ID, parent message ID or thread ID in the **Thread ID** input field in order to start or continue a thread.

#### Example recipe #1: recipe that replies to a message ID and starts a thread
Let us relook at the [above example recipe](#example-recipe-2-recipe-with-a-new-button-action-trigger-with-logic-defining-the-actions-to-carry-out-upon-each-button-click) that responds to a button click.

![Button action example recipe](/assets/images/connectors/slack/button-action-example-recipe.png)
*Button response [example recipe](https://www.workato.com/recipes/602058)*

If a Slack user clicks on the **Notify BizDev** button, we can see that it creates a new thread by posting under the original message,

![Notify BD thread example](/assets/images/connectors/slack/notify-bd-thread.png)
*Thread created and message posted if Slack user clicks on the Notify BizDev button*

The configuration in the recipe is as follows. We're passing the message ID of the original Slack message into the **Thread ID** input field. As the message has no thread currently, it will create a new thread.

![Notify BD thread configuration](/assets/images/connectors/slack/notify-bd-thread-config.png)
*Action configuration for the Notify BizDev action. Message ID is used in the **Thread ID** input field.*

Correspondingly, if a Slack user clicks on the **Notify Sales** button, we can see that it creates a new thread by posting under the original message.

![Notify sales thread example](/assets/images/connectors/slack/notify-sales-thread.png)
*Thread created and message posted if Slack user clicks on the Notify Sales button*

The configuration in the recipe is as follows. We're passing the message ID of the original Slack message into the **Thread ID** input field. As the message has no thread currently, it will create a new thread.

![Notify sales thread configuration](/assets/images/connectors/slack/notify-sales-thread-config.png)
*Action configuration for the Notify Sales action. Message ID is used in the **Thread ID** input field.*

#### Example recipe #2: recipe that replies to a parent message ID and continues a thread
Using the [same recipe](https://www.workato.com/recipes/602058) as [above](#example-recipe-1-recipe-that-replies-to-a-message-ID-and-starts-a-thread), we can see that putting the parent message ID also works to post to an existing thread.

![Button action example recipe](/assets/images/connectors/slack/button-action-example-recipe.png)
*Button response [example recipe](https://www.workato.com/recipes/602058)*

For example, when I click on the **Notify BizDev** button for the second time, it posts to the same thread.

![Messages are posted under the same thread via parent message ID](/assets/images/connectors/slack/posting-to-existing-thread-via-parent-id.gif)
*Messages are posted under the same thread via parent message ID*

Referring back to the action's thread configuration, we see that we're specifying the parent message ID in the **Thread ID** input field, which is the initial message that the thread is under.

![Notify BD thread configuration](/assets/images/connectors/slack/notify-bd-thread-config.png)
*Action configuration for the Notify BizDev action. Message ID is used in the **Thread ID** input field.*
