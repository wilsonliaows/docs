---
title: Workato connectors - Slack triggers
date: 2017-09-12 12:00:00 Z
---

# Slack triggers
## Requirements
Before using Slack triggers, you'll first need to create a Slack app. The app also needs to be installed to your workspace. This should be your first step before building Slack recipes.

Fortunately, Slack has made it really easy to create an app. Head over to https://api.slack.com/apps and click on **Create New App**. Choose a name for your Slack app and as well as your workspace, to create your app.

![Creating a Slack app](/assets/images/connectors/slack/create-slack-app.gif)
*Creating a Slack app*

Before you can install it to your workspace, you'll need to define at least 1 permission scope &mdash; but we'll go through that later.

### Enabling event subscriptions
For the trigger to pick up events, your Slack app needs to know where to send these events to. That's why the **New event trigger** comes with a target URL, generated once you've entered an **Event name**. Once your app is sending events to your recipe's target URL, the recipe can take over and execute your recipe's actions.

![Target URL](/assets/images/connectors/slack/target-url.png)
*Target URL for your app to send events to*

Event names don't have to be unique in your Workato workspace &mdash; this means that you can use same event name in multiple Slack recipes. This allows you to trigger those recipes using a single event, if it suits your use case.

To enable event subscriptions, go to your Slack app's page (it should look something like 'https://api.slack.com/apps/{your_app_id}' &mdash; your app ID is unique to your app). Under Event Subscriptions, turn on 'Enable Events', then paste the URL from your New event trigger into the Request URL field and click Save.

![Event subscriptions](/assets/images/connectors/slack/event-subscriptions.gif)
*Enabling event subscriptions*

### Subscribing to workspace events
Slack provides an entire list of workspace events that you can subscribe to &mdash; any of these events can kick-start your recipe.

In this example, customer success users are given the option to create a private channel between themselves & their customers whenever messages containing the word 'resolve' are posted in certain channels and direct messages (DMs). Hence, the events `message.channels`, `message.groups` and `message.im` were chosen as triggers.

![Event subscription example](/assets/images/connectors/slack/event-subscription-example.png)
*Whenever a message is posted to a channel, a private channel, or a DM, an event is sent to the recipe*

Event subscriptions require permission scopes to be defined for your Slack app, but fret not &mdash; once event(s) are subscribed, Slack automatically adds the required scopes.

### Installing your app
Once you've subscribed to at least 1 workspace event, a permission scope is automatically added, allowing you to install the app to your workspace.

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
          <td>Channel ID where event occurred./td>
        </tr>
        <tr>
          <td>Event ts</td>
          <td>Timestamp of event.</td>
        </tr>
    </tbody>
</table>

## Button click (real-time)
The button click trigger handles button clicks. These button clicks come from another recipe that posts a message with buttons to the user. Learn more about using buttons in our [Using Slack message buttons](/connectors/slack.md#using-slack-message-buttons) document.

### Input fields
There are no input fields.

### Output fields
<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th colspan="2">Output fields</th>
            <th>Description</th>
        </tr>
        <tr>
            <td colspan="2">Action name</td>
            <td>Button label visible to Slack user interacting with the buttons.</td>
        </tr>
        <tr>
            <td colspan="2">Action ID</td>
            <td>
              Internal value of the button.
            </td>
        </tr>
        <tr>
            <td rowspan="2">Channel</td>
            <td>ID</td>
            <td>ID of channel where button was clicked.</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>
              Name of channel.
            </td>
        </tr>
        <tr>
            <td rowspan="2">User</td>
            <td>ID</td>
            <td>
              User ID of user who clicked the button.
            </td>
        </tr>
        <tr>
            <td>Name</td>
            <td>
              Name of user who clicked the button.
            </td>
        </tr>
        <tr>
            <td rowspan="2">Team</td>
            <td>ID</td>
            <td>ID of Slack workspace.</td>
        </tr>
        <tr>
            <td>Domain</td>
            <td>Domain of Slack workspace.</td>
        </tr>
        <tr>
            <td colspan="2">Action timestamp</td>
            <td>Timestamp when button was clicked. </td>
        </tr>
        <tr>
            <td colspan="2">Message ID</td>
            <td>ID of message that contained the button that was clicked.</td>
        </tr>
        <tr>
            <td colspan="2">Attachment ID</td>
            <td>ID of the button that was clicked. Buttons are a form of message attachments in the context of Slack.</td>
        </tr>
        <tr>
            <td colspan="2">Response URL</td>
            <td>URL for responding to button clicks, used in the <b>Respond to button click</b> action.</td>
        </tr>
    </tbody>
</table>
