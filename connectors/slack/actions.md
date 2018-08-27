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

# Post message action
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
When enabled, this field allows you to tag users in the message by enclosing their user ID or user name with `<` `>`, e.g. **&lt;UA12345&gt;** or **&lt;@johndoe&gt;** for user ID and user name respectively.

![Tagging users](/assets/images/connectors/slack/tagging-users.png)
*Tagging users by allowing Slack formatting*

### Thread ID
[Slack threads](https://api.slack.com/docs/message-threading) allow you to group related messages together, making it easier to follow conversations in Slack channels or groups.

To post a message in an existing thread, use the <kbd>Thread ID</kbd> datapill in this field. Passing the <kbd>Message ID</kbd> of the parent message also works the same way.

#### Example recipe #1: Passing a parent message's message ID to continue a thread
![Notify BD thread configuration](/assets/images/connectors/slack/notify-bd-thread-config.png)
*The parent message's Message ID is used in the **Thread ID** input field.*

![Messages are posted under the same thread via parent message ID](/assets/images/connectors/slack/posting-to-existing-thread-via-parent-id.gif)
*Messages are posted under the same thread via parent message ID*

Check out this [Button action example recipe](https://www.workato.com/recipes/602058) if you want to explore how thread ID works.

If a thread does not exist yet, but you want to post a message threaded under a parent message, supply the <kbd>Message ID</kbd> of the parent message.

#### Example #1: Passing the message ID to start a thread
![Notify BD thread example](/assets/images/connectors/slack/notify-bd-thread.png)
*Thread created and message posted if parent message ID is supplied*

![Notify BD thread configuration](/assets/images/connectors/slack/notify-bd-thread-config.png)
*Example use of Message ID used in the* ***Thread ID*** *input field.*

### Post message as
This field allows you to change the name of who the message is posted by. By default, messages will be posted as **Workato [app]**.

![Post message as](/assets/images/connectors/slack/post-message-as.png)
*How it will look like in Slack*

### Icon image URL
This field allows you to change the icon of who the message is posted by. By default, the Workato icon will be used.

![Post message as icon](/assets/images/connectors/slack/post-message-as-icon.png)
*How it will look like in Slack*

# Respond to button click action
The **Respond to button click** action works together with the [button click (real-time) trigger](/connectors/slack/triggers.md#button-click-real-time) to post messages in response to the button click.

![Respond to button action example recipe](/assets/images/connectors/slack/respond-to-button-action-example-recipe.png)
*Respond to button action. [See the example recipe](https://www.workato.com/recipes/605785).*

## How it works
By passing the <kbd>Response URL</kbd> pill from the output of a [button click (real-time) trigger](/connectors/slack/triggers.md#button-click-real-time), the recipe will know which button has been clicked at run-time.

Similar to the post message action, this action can post messages that just be a simple line of text, or it can include a combination of text, buttons, menus, icons & images — depending on your use case.

![Respond to button action configuration](/assets/images/connectors/slack/respond-to-button-action-config.png)
*Respond to button action configuration*

## Input
The following are the additional input fields that the Slack action **Respond to button** has on top of the usual input fields in the **Post message** action.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>
              Input field
            </th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Button response URL</td>
            <td>
              Obtained from the output datatree of the Slack trigger <b>New button action</b>. This tells the action what button click to respond to.
            </td>
        </tr>
        <tr>
            <td>Response type</td>
            <td>
              <b>In channel</b> will post the message like a normal chat message. <b>Ephemeral</b> will post the message visible only to the user who clicked the button.
            </td>
        </tr>
        <tr>
            <td>Replace original</td>
            <td>
            If <b>yes</b>, the new message will overwrite the original message with buttons and be posted in the same position in the channel.  
            <p>If <b>no</b>, the original message with buttons will remain in the same position in the channel. The new message will be added to the end of the channel conversation.
            </td>
        </tr>
        <tr>
            <td>Delete original</td>
            <td>
              If <b>yes</b>, the original message with buttons will be removed from the channel. The new message will be added to the end of the channel conversation.
              <p>If <b>no</b>, the original message with buttons will remain in the same position in the channel. The new message will be added to the end of the channel conversation.
            </td>
        </tr>
    </tbody>
</table>

# Invite user to channel action
The **Invite user to channel** action invites a user to a public channel. To invite users to multiparty direct messages or private channels, use the [Invite user to group](#invite-user-to-group) action.

## Input fields
### User
You can use either the user ID/name or user ID datapill. Prefix user names with ‘@’, e.g. **@johndoe**. However, use user IDs and user ID datapills as-is, e.g. **UA12345** or <kbd>ID</kbd>, without prefixing them with '@'.

To select available users, switch to 'Select user'.
![select-user](/assets/images/connectors/slack/select-user-channel-invite.png)

### Channel
You can use either the channel ID/name or channel ID datapill. Prefix channel names with ‘#’, e.g. **#general**. However, use channel IDs and channel datapills as-is, e.g. **CANUXC4MU** or <kbd>ID</kbd>, without prefixing them with '#'.

To select available channels, switch to ‘Select channel’.
![select-channel](/assets/images/connectors/slack/select-channel-channel-invite.png)

# Invite user to group action
The **Invite user to group** action invites a user to multiparty direct message group or private channels. To invite users to a public channel, use the [Invite user to channel](#invite-user-to-channel) action.

## Input fields
### User
You can use either the user ID/name or user ID datapill. Prefix user names with ‘@’, e.g. **@johndoe**. However, use user IDs and user ID datapills as-is, e.g. **UA12345** or <kbd>ID</kbd>, without prefixing them with '@'.

To select available users, switch to 'Select user'.
![select-user](/assets/images/connectors/slack/select-user-group-invite.png)
*Switching to 'Select user'*

### Group
You can use either the group ID/name or group ID datapill. Prefix group names with ‘#’, e.g. **#general**. However, use group IDs and channel datapills as-is, e.g. **GCNUXC4MU** or <kbd>ID</kbd>, without prefixing them with '#'.

To select available groups, switch to ‘Select group'.
![select-channel](/assets/images/connectors/slack/select-group-group-invite.png)
*Switching to 'Select group'*

# Archive channel action
The **Archive channel** action allows you to archive public channels only. Note that the **#general** channel of a Slack workspace cannot be archived.

## Input fields
### Channel
You can use either the channel ID/name or channel ID datapill. Prefix channel names with ‘#’, e.g. **#general**. However, use channel IDs and channel datapills as-is, e.g. **CANUXC4MU** or <kbd>ID</kbd>, without prefixing them with '#'.

To select available channels, switch to ‘Select channel’.
![select-channel](/assets/images/connectors/slack/select-channel-archive-channel.png)
*Switching to 'Select channel'*

# Unarchive channel action
The **Unarchive channel** action allows you to unarchive a public channels only.

## Input fields
### Channel
You can use either the channel ID/name or channel ID datapill. Prefix channel names with ‘#’, e.g. **#general**. However, use channel IDs and channel datapills as-is, e.g. **CANUXC4MU** or <kbd>ID</kbd>, without prefixing them with '#'.

To select available channels, switch to ‘Select channel’.
![select-channel](/assets/images/connectors/slack/select-channel-unarchive-channel.png)
*Switching to 'Select channel'*

# Create channel action
The **Create channel** action creates a channel with a specified channel name. You can also create private channels. Names will be converted to lowercase, while the following characters will be replaced accordingly:
- spaces replaced with hyphens,
- periods replaced with underscores.

For example, the channel name **SUPPORT.ticket 101** will be converted to **support_ticket-101**. Names must also be shorter than 22 characters.

##Input fields
### Private channel?
Set to 'Yes' to create a private channel. Defaults to 'No'.

### Return channel details if already exists?
By default, if a channel already exists, action will return an error. Set this input to 'Yes' if to prevent this — action will return the existing channel's details instead.

# Set channel purpose action
The **Set channel purpose** action allows you to set the channel purpose of public channels only.

## Input fields
### Channel
You can use either the channel ID/name or channel ID datapill. Prefix channel names with ‘#’, e.g. **#general**. However, use channel IDs and channel datapills as-is, e.g. **CANUXC4MU** or <kbd>ID</kbd>, without prefixing them with '#'.

To select available channels, switch to ‘Select channel’.
![select-channel](/assets/images/connectors/slack/select-channel-channel-purpose.png)
*Switching to 'Select channel'*

### Channel purpose
Set the channel's purpose. Slack formatting works in this field, including tagging of users.
For example:

**Input**
- "Hi \<@johndoe\>, how \~you\~ \*doing\*?"

**Output**
- Hi @johndoe, how *you* **doing**?

Learn more about Slack's message formatting in their [documentation](https://api.slack.com/docs/message-formatting).

# Set channel topic action
The **Set channel topic** action allows you to set the topic of public channels only. Slack formatting works in this field, including tagging of users.
For example:

**Input**
- "Hi \<@johndoe\>, how \~you\~ \*doing\*?"

**Output**
- Hi @johndoe, how *you* **doing**?

Learn more about Slack's message formatting in their [documentation](https://api.slack.com/docs/message-formatting).

## Input fields
### Channel
You can use either the channel ID/name or channel ID datapill. Prefix channel names with ‘#’, e.g. **#general**. However, use channel IDs and channel datapills as-is, e.g. **CANUXC4MU** or <kbd>ID</kbd>, without prefixing them with '#'.

To select available channels, switch to ‘Select channel’.
![select-channel](/assets/images/connectors/slack/select-channel-channel-topic.png)
*Switching to 'Select channel'*

### Channel topic
Set the channel's purpose. The maximum limit of this field is 250 characters. Slack formatting works in this field, including tagging of users.
For example:

**Input**
- "Hi \<@johndoe\>, how \~you\~ \*doing\*?"

**Output**
- Hi @johndoe, how *you* **doing**?

Learn more about Slack's message formatting in their [documentation](https://api.slack.com/docs/message-formatting).
