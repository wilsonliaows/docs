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

![Post message basic example](/assets/images/connectors/slack/post-message-basic-example.png)
*Basic example of the post message action*

The corresponding configuration of the action step can be seen below. In addition, the **Message type** has been configured to **Good**.

![Post message basic configuration 1](/assets/images/connectors/slack/post-basic-message-config-1.png)

![Post message basic configuration 2](/assets/images/connectors/slack/post-basic-message-config-2.png)
*Post message action configuration - basic message. [Example recipe](https://www.workato.com/recipes/604131)*

#### Example message with attachment, customized app name and images
The following shows an example of how the different fields show up in Slack. As the **Post message as** and **Icon image URL** input fields have been configured to have the value of **Workato Chatbot** and the [Workbot icon](https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-04-11/168463184839_7e90d40c4856fdda4c19_512.png), the message displays as being posted by **Workato Chatbot** with the Workbot icon.

![Post message advanced example](/assets/images/connectors/slack/post-message-advanced-example.png)
*Advanced example of the post message action*

The corresponding configuration of the action step can be seen below.

![Post message advanced configuration 1](/assets/images/connectors/slack/post-basic-message-config-1.png)

![Post message advanced configuration 2](/assets/images/connectors/slack/post-basic-message-config-2.png)

![Post message advanced configuration 2](/assets/images/connectors/slack/post-advanced-message-config.png)
*Post message action configuration - basic message. [Example recipe](https://www.workato.com/recipes/604145)*
