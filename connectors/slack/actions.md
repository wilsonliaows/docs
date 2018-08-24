---
title: Workato connectors - Slack actions
date: 2017-09-12 12:00:00 Z
---

# Slack actions
## Requirements
All Slack actions use the [Slack Web API](https://api.slack.com/web) to perform recipe actions.

Before using Slack actions, you'll first need to create a Slack app. Check out our [Slack trigger documentation](/connectors/slack/triggers.md#requirements) to learn more about creating a Slack app.

## Permission scopes
Slack actions are performed on behalf of the user by the connected Slack app. To perform each action, the app has must have the associated permission scope. For example, the **Create channel** action uses the [`channels.create`](https://api.slack.com/methods/channels.create) method, which requires the connected Slack app to have the `channels:write` scope.

At the minimum, Slack actions require the following permission scopes:

- `channels:read`
- `channels:write`
- `chat:write:user`
- `groups:read`
- `groups:write`
- `users:read`
- `users:read.email`

To add/remove permission scopes for your app, go to your Slack app's page (it should look something like 'https://api.slack.com/apps/{your_app_id}' — your app ID is unique to your app). Go to **OAuth & Permissions** → **Scopes** to select your app's permission scopes.

![Add permission scopes](/assets/images/connectors/slack/add-permission-scopes.gif)
*Remember to click 'Save changes' after selecting your permission scopes!*

### Event subscriptions & Permission scopes
Subscribing to events will automatically add scopes that your app does not already have. This may give your app unintended permissions from the additional scopes. After subscribing to events, we strongly recommend going to **OAuth & Permissions** → **Scopes** to confirm your app's permission scopes.

# Post message actions
The post message action posts a message to your specified channel or user. By default, messages are posted as bot user "Workato".

![Workato post message](/assets/images/connectors/slack/workato-post-message.png)

If a custom OAuth profile is used, the Slack app's name and icon will be used instead.

![Custom ap post message](/assets/images/connectors/slack/custom-app-post-message.png)

For more on custom OAuth profiles, go to our [Custom OAuth profiles documentation](/connectors/slack/custom-oauth.md).

## How it works
Your post messages can just be a simple line of text, or it can include a combination of text, buttons, menus, icons & images — depending on your use case.

## Input fields
### Channel
You can post messages to channels (public & private), or to a specific user.

If you're using channel names to post messages to a channel, prefix them with '#', e.g. **#support-ticket-101**. Otherwise, use channel IDs & channel datapills as-is, e.g. **CANUXC4MU** or <kbd>Channel</kbd> respectively.

![Channel datapill](/assets/images/connectors/slack/channel-datapill.gif)

Similarly, if you're using user names to post a direct message (DM) to a user, prefix them with '@', e.g. **@johndoe**. Otherwise, use user IDs & user datapills as-is, e.g. **UA12345** or <kbd>User ID</kbd>  respectively.

![User datapill](/assets/images/connectors/slack/user-datapill.gif)

### Basic text
This is the most basic text field for a post message.

![Basic text](/assets/images/connectors/slack/basic-text.png)
*How it will look like in Slack*

If [Allow Slack formatting](#allow-slack-formatting) is enabled, you can tag users in the message by enclosing their user ID or user name with `<` `>`, e.g. **&lt;UA12345&gt;** or **&lt;@johndoe&gt;** for user ID and user name respectively.

### Attachment title
This input adds an attachment title to the post message.

![Attachment title](/assets/images/connectors/slack/attachment-title.png)
*How it will look like in Slack*

### Attachment title link
When you provide a valid URL, this fields will hyperlink the [attachment title](#attachment-title), redirecting users there if clicked.

![Attachment title link](/assets/images/connectors/slack/title-link.png)
*How it will look like in Slack*

### Attachment text
This field adds attachment text to the post message, below the attachment title.

![Attachment text](/assets/images/connectors/slack/attachment-text.png)
*How it will look like in Slack*

### Attachment message fields
This field creates a two-column layout below the message text. Enter one name-value pair per line, e.g.**Name: John**.

![Attachment message fields](/assets/images/connectors/slack/attachment-message-fields.png)
*How it will look like in Slack*

### Buttons
This field adds a button to the post message. When this button is clicked, it triggers a button click event. Another recipe is required to handle this event. Learn more at about button click triggers in our [Slack triggers documentation](/connectors/slack/triggers.md#button-click-real-time).

#### Button action handler recipes
This field lists any Slack recipes with a button click trigger. Choosing a recipe ensures that button clicks from this button will trigger it.

#### Button actions
This field specifies certain characteristics of the button. Enter one button action per line in this format:

```
action name, action ID, style, confirmation title, confirmation text, ok button title, dismiss button title
```

For non-danger styled actions, only the first 2 parameters need to be filled in, as there is no popup prompt generated. For danger styled actions, all 7 parameters need to be filled in, e.g.

```
Notify BizDev, bd, , , , ,
```

Here's an example of a danger-styled button.

```
Notify Sales, sales, danger, Confirm, Are you sure?, Yes, Cancel
```

A more detailed description of each button parameter can be seen in the table below.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Button definition input fields</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Action name</td>
            <td>Button label visible to Slack user interacting with the buttons.</td>
        </tr>
        <tr>
            <td>Action ID</td>
            <td>
              Internal value of the button. This needs to be unique. Not visible on Slack to anyone.
            </td>
        </tr>
        <tr>
            <td>Style</td>
            <td>
            Leave this field as well as the remaining 4 fields blank for non-danger styled actions since no pop-up will be generated.<br> Otherwise, put <b>danger</b> to generate a red button with a pop-up prompt, requiring the user to confirm the button click. You will then need to fill up the rest of the fields too.
            </td>
        </tr>
        <tr>
            <td>Confirmation title</td>
            <td>
              Shows up in the popup prompt as the header.
            </td>
        </tr>
        <tr>
            <td>Confirmation text</td>
            <td>
              Shows up in the popup prompt as the body text.
            </td>
        </tr>
        <tr>
            <td>Ok button title</td>
            <td>
              Button label in the popup prompt to confirm the button click.
            </td>
        </tr>
        <tr>
            <td>Dismiss button title</td>
            <td>
              Button label in the popup prompt to cancel the button click.
            </td>
        </tr>
    </tbody>
</table>

![Buttons](/assets/images/connectors/slack/buttons.png)
*How it will look like in Slack*

### Attachment color
This field allows you to choose the color of the vertical line to the left of the message.

![Attachment color](/assets/images/connectors/slack/attachment-color.png)
*How it will look like in Slack*

### Thumb URL
When a valid image URL is provided, this field will display a thumb image to the right of the message.

### Image URL
When a valid image URL is provided, this field will display the image at the bottom of the message. Image will be resized to max width of 400px or a max height of 500px.

![Image URL](/assets/images/connectors/slack/attachment-image.png)
*How it will look like in Slack*

### Allow Slack formatting
This field allows parsing of **URL link|title> <channel|name>** tags in the message.

![Allow Slack formatting](/assets/images/connectors/slack/basic-text.png)
*How it will look like in Slack*

### Thread ID
This is the most basic input for a post message.

![Thread iD](/assets/images/connectors/slack/basic-text.png)
*How it will look like in Slack*

### Post message as
This is the most basic input for a post message.

![Post message as](/assets/images/connectors/slack/basic-text.png)
*How it will look like in Slack*

### Icon image URL
This is the most basic input for a post message.

![Icon image URL](/assets/images/connectors/slack/basic-text.png)
*How it will look like in Slack*

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
          <td colspan="2">Channel</td>
          <td>ID of Slack workspace.</td>
        </tr>
        <tr>
          <td colspan="2">Basic text</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Attachment title</td>
          <td>ID of event.</td>
        </tr>
        <tr>
          <td colspan="2">Attachment title link</td>
          <td>Timestamp of event.</td>
        </tr>
        <tr>
          <td rowspan="2">Buttons</td>
          <td>Button action handler recipe</td>
          <td>Description</td>
        </tr>
        <tr>
          <td>Button actions</td>
          <td>Description</td>
        </tr>
        <tr>
          <td colspan="2">Attachment color</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Thumb URL</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Image URL</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Allow Slack formatting</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Thread ID</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Post message as</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
        <tr>
          <td colspan="2">Icon image URL</td>
          <td>ID of your Slack app that's subscribed to the workspace event.</td>
        </tr>
    </tbody>
</table>
