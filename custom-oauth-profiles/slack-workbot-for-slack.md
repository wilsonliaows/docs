---
title: Custom OAuth profiles for Slack & Workbot for Slack
date: 2018-04-9 10:23:00 Z
---

# What are custom OAuth profiles?
For your [Slack apps](workbot/workbot.md#slack-connector-vs-workbot-for-slack-connector) or [custom Workbot for Slack](workbot/workbot-custom-bots.md) to perform actions, they require certain permission scopes. At the minimum, Slack app triggers & actions require the following permission scopes:
- channels:read
- channels:write
- chat:write:bot
- chat:write:user
- groups:read
- groups:write
- users:read

However, your organization may have pre-approved a specific set of permission scopes for use — and you need anyone creating Slack recipes to adhere to it.

![Custom permission scopes](/assets/images/connectors/slack/custom-permission-scopes.png)
*A custom set of permission scopes*

Custom OAuth profiles are a way for you to 'share' your Slack app (and its specific set of permission scopes) with your team members. Your team can connect your Slack app (using its custom OAuth profile) for use in their Slack recipes. This way, they don't have to create an app of their own from scratch. More importantly, you can enforce the approved permission scopes across your team.

Currently, custom OAuth profiles are available for Slack & Workbot for Slack connectors.

### Creating a custom OAuth profile
To get started, head to Tools ➤ View all tools. Under **Connect apps**, click on **Custom OAuth profiles**. Once there, click on **Create a new custom OAuth profile**.

![Custom OAuth profile](/assets/images/connectors/slack/custom-oauth-profile.png)
*If you don't see Custom OAuth profile, make sure your Workato team or account has access to it*

Next, choose **Slack** as your application.
![Slack custom OAuth profile](/assets/images/connectors/slack/new-custom-oauth-1.png)

In Step 2, click on **Create new app**.

![Creating a new Slack app](/assets/images/connectors/slack/new-custom-oauth-2.png)

This will open a new tab that brings you to https://api.slack.com/apps. Keep both the Workato tab and this new tab open - you'll need both to complete Steps 3 and 4.

Sign in to your team (if you haven't already), then click on **Create New App**.

![Create new app in Slack 1](/assets/images/workbot/workbot-slash-commands/create-new-app-in-slack-1.png)

In the form that pops up, give your app a name - it typically describes its intended functionality, e.g. HRBot or SupportBot.

Choose which Slack team this app belongs to, then click on **Create App**.

![Create new app in Slack](/assets/images/workbot/workbot-slash-commands/create-new-app-in-slack-2.png)

Your app should now be created. You should be greeted with your new app's **Basic Information** page. If not - don't sweat it. Just click on **Basic Information** from the left navigation menu.

![New app created](/assets/images/workbot/workbot-slash-commands/new-app-created.png)

Scroll down to **App Credentials** you'll need this information back in your Workato tab. With this info handy, we can now head back to the Workato tab to complete Step 3.

In Step 3, fill up:
- **Name**: This should be the same name you used when creating the app e.g. HRBot
- **Client ID**
- **Client secret**
- **Verification token**

![App credentials](/assets/images/connectors/slack/new-custom-oauth-3.png)
*Configuring Workato to talk to your app*

Hit **Save** once you're done. We can now configure your app to talk to Workato in Step 4.

### Enabling event subscriptions
To enable event subscriptions, go to your Slack app's page (it should look something like 'https://api.slack.com/apps/{your_app_id}' &mdash; your app ID is unique to your app). Under Event Subscriptions, turn on 'Enable Events', then paste the URL from your New event trigger into the Request URL field and click Save.

![Event subscriptions](/assets/images/connectors/slack/event-subscriptions.gif)
*Enabling event subscriptions*

For a [new event trigger](/connectors/slack/triggers.md#new-event-trigger-real-time) to pick up events, your app needs to know where to send these events to. That's why it comes with a target URL. This Target URL is generated once you've entered an **Event name**. Once your app is sending events to your recipe's target URL, the recipe can take over and execute your recipe's actions.

### Subscribing to workspace events
Slack provides an entire list of workspace events that you can subscribe to &mdash; any of these events can kick-start your recipes.

In this example, customer success users are given the option to create a private channel between themselves & their customers whenever messages containing the word 'resolve' are posted in certain channels and direct messages (DMs). Hence, the events `message.channels`, `message.groups` and `message.im` were chosen as triggers.

![Event subscription example](/assets/images/connectors/slack/event-subscription-example.png)
*Whenever a message is posted to a channel, a private channel, or a DM, an event is sent to the recipe*

Subscribing to events will automatically add scopes that your app does not already have. This may give your app unintended permissions from the additional scopes. After subscribing to events, we strongly recommend going to **OAuth & Permissions** → **Scopes** to confirm your app's permission scopes.

### Installing your app
Once you've subscribed to at least 1 workspace event, a permission scope is automatically added. This allows you to install the app to your workspace. From the left navigation menu, under **Settings**, head over to **Install App**.
- Click on **Install App to Workspace**

![Install app](/assets/images/workbot/workbot-slash-commands/install-app.png)

Choose your Slack team and authorize it to complete the installation.

Jumping back to your custom OAuth profile in Workato, under Step 4, click on **Done** to finish configuring the custom OAuth profile. You can now use this custom OAuth profile in other Slack connections in Workato!

### Using your custom OAuth profile
Once you've created a custom OAuth profile, anyone in your Workato workspace can use it in their own Slack connections to the Slack workspace &mdash; without having to create and configure a new Slack app.

![Using custom OAuth profiles](/assets/images/connectors/slack/using-custom-oauth-profiles.png)
*Using custom OAuth profiles in a new Slack connection*

Note that custom OAuth profiles, by definition, can only connect to a single Slack workspace, i.e. 1 custom OAuth profile cannot be used across multiple Slack workspaces.
