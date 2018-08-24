---
title: Workato connectors - Slack actions
date: 2017-09-12 12:00:00 Z
---

# Slack actions
## Requirements
Slack actions use the [Slack Web API](Slack Web API | Slack) to perform recipe actions.

Before using Slack actions, you'll first need to create a Slack app. The app also needs to be installed to your workspace. This should be your first step before building Slack recipes.

Fortunately, Slack has made it really easy to create an app. Head over to https://api.slack.com/apps and click on **Create New App**. Choose a name for your Slack app and as well as your workspace, to create your app.

![Creating a Slack app](/assets/images/connectors/slack/create-slack-app.gif)
*Creating a Slack app*

## Permission scopes
Slack actions are performed on behalf of the user by the connected Slack app. To perform each action, the app has must have the associated permission scope. For example, the **Create channel** action uses the [`channels.create`](https://api.slack.com/methods/channels.create) method, which requires the connected Slack app to have the `channels:write` scope.

If you'd like to ensure that any Slack action used in your recipes has the correct scopes, add the following permission scopes to your Slack app:

- `channels:read`
- `channels:write`
- `chat:write:user`
- `groups:read`
- `groups:write`
- `users:read`
- `users:read.email`

# New event trigger (real-time)
The New event trigger picks up all workspace events in your connected Slack instance. Each new event trigger comes with a target URL, generated once you've entered an **Event name**. As explained [above](/connectors/slack/triggers.md#enabling-event-subscriptions), this target URL is used to enable event subscriptions.

## Input fields
### Event name
Key in an **Event name** to generate a unique target URL for subscribing to workspace events. This should be descriptive of the event(s) you're subscribing to.

![Event name](/assets/images/connectors/slack/event-name.gif)
*Keying in the event name generates the target URL used for subscribing to workspace events*

## Output fields
<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th colspan="2">Input fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td colspan="2">Team ID</td>
          <td>ID of Slack workspace.</td>
        </tr>
        <tr>
          <td colspan="2">API app ID</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Event ID</td>
          <td>ID of event.</td>
        </tr>
        <tr>
          <td colspan="2">Event time</td>
          <td>Timestamp of event.</td>
        </tr>
        <tr>
          <td rowspan="6">Event</td>
          <td>Type</td>
          <td>Type of event.</td>
        </tr>
        <tr>
          <td>User</td>
          <td>User ID of user who triggered the event.</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Message content of text.</td>
        </tr>
        <tr>
          <td>Ts</td>
          <td>Timestamp of event.</td>
        </tr>
        <tr>
          <td>Channel</td>
          <td>Channel ID where event occurred.</td>
        </tr>
        <tr>
          <td>Event ts</td>
          <td>Timestamp of event.</td>
        </tr>
    </tbody>
</table>
