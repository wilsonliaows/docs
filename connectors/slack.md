---
title: Slack
date: 2017-09-12 12:00:00 Z
---

# Slack
[Slack](https://slack.com/) is a team collaboration platform that consolidates your team's communication and resources, and integrates easily with the enterprise and productivity products used across your organization. It provides a shared workspace where conversations are organized and accessible, and creates alignment and shared understanding across your team.

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

### Using Slack buttons
You can interact with messages in Slack via [Slack buttons](https://api.slack.com/docs/message-buttons). To use Slack buttons in Slack, you need:

1) A recipe with a **Post mesage** action that has buttons configured. This recipe needs to specifically refer to the second recipe below in its button configuration.

2) A recipe with a **New button action** trigger, which picks up button clicks. In the actions, there should be recipe logic that carries out actions depending on which button has been clicked.

#### Example recipe #1: recipe with a post message action with buttons configured
We're going to add buttons configuration to the [basic recipe](https://www.workato.com/recipes/604131) we had [above](#example-message-with-attachment). The recipe we will be using can be found [here](https://www.workato.com/recipes/604149).

The buttons configured in this recipe show up in Slack as follows.

![Button display](/assets/images/connectors/slack/buttons-display.png)
*Corresponding buttons generated from the above configuration*

There are two available styles for buttons - non-danger and danger style. The non-danger styled buttons, once clicked, records the button click immediately and triggers the second recipe with the **New button action** trigger.

![Interacting with non-danger style button](/assets/images/connectors/slack/interacting-with-normal-button.gif)
*Interacting with non-danger styled button*

The danger styled buttons, when clicked, generates a popup prompt that asks the Slack user for confirmation of their click. The prompt that pops up can be completely configured in the recipe.

![Interacting with danger style button](/assets/images/connectors/slack/interacting-with-danger-button.gif)
*Interacting with danger styled button*

The button configuration for both button styles is in the following screenshot. We're calling a recipe we have pre-built [**New Salesforce account button response recipe - Notify BizDev & Notify Sales**](https://www.workato.com/recipes/602058). All recipes with the Slack trigger **New button action** should show up in this picklist - select the recipe you have built to respond to this particular set of buttons.

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
| Response URL     | Instead of clicking a Slack button, you can send an API call to this URL to simulate the clicking of the button.                                 |

An example of the values can be viewed in the job output, as follows.

![Button action data output](/assets/images/connectors/slack/button-action-output-data.png)
*Button action data output*
