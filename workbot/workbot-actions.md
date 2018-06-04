---
title: Workbot actions for Slack
date: 2017-03-30 05:00:00 Z
---

# Workato actions for Slack
Workbot actions allow Workbot to post notifications into a specified channel when there are events to take note of, or respond to a command.

Workbot supports 3 actions:
* [Post command reply](#post-command-reply)
* [Post notifications](#post-notifications)
* [Post messages](#post-messages)
* [Download attachment](#download-attachment)

## Post command reply
Post command reply allows you to customize how Workbot replies when an event is completed. This reply can be a simple message about the task completion, or a prompt for the user to take a subsequent action once the first has been done, e.g. after retrieving data for a custom account in Salesforce, ask if the user wishes to copy that information across to another application.

Here is what the Post Command Reply action's output will look like in Slack.

![Workbot post command reply](/assets/images/workbot/workbot-custom-commands/post-command-reply.png)
*Workbot's post command reply action in Slack*

The corresponding action with mapped fields can be found below.

![Workbot post command reply](/assets/images/workbot/workbot-custom-commands/post-command-action-mapping.png)
*Post command reply action fields mapping*

The following table lists the fields available in a **Post command reply** action.

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
            <td>App</td>
            <td>The application you are dealing with (e.g. Salesforce, JIRA)
            </td>
            <td>Use the <kbd>App</kbd> pill from the Workato Trigger output for this
        </tr>
<!--        <tr>
            <td>Reply Channel</td>
            <td>The channel Workbot replies in</td>
            <td>Use the <b>Reply channel</b> Field from the Workato Trigger output
        </tr>Reply channel has been moved to Post message > Advanced
        <tr>
            <td>Message to update</td>
            <td>
              ID of an existing message that you want to replace with the new message. This overwrites the existing message in the channel
            </td>
            <td>
              Message ID can be obtained from the output of a <b>Post command reply</b> or <b>Post notification</b> action, or the <b>New command trigger</b>. Note: manual user inputs cannot be overwritten.
            </td>
        </tr> Message to update has been moved to Post message action
        <tr>
            <td>Thread ID</td>
            <td>
              Pass in a thread ID to post your new message in that thread. Pass in a message ID if you wish to create a new thread and post your new message under that existing message.
            </td>
            <td>For replying to the current thread use thread ID value from <b>New command</b> trigger. For creating new thread pass here message ID from output of another <b>Post command reply</b> or <bold>New command</b> trigger - make sure it is not empty in the last case.
            </td>
        </tr> Thread ID has been moved to Post message > Advanced-->
        <tr>
            <td>Message text</td>
            <td>
              Message posted in the channel
            </td>
            <td>
            Whatever you want. Slack Emojis are supported too. This field is optional if you use the <b>Fields</b> input field.
            </td>
        </tr>
        <tr>
            <td>Message menu</td>
            <td>A drop-down menu in the message posted in the channel
            <td>
              Decide what text to display for each menu option.
        </tr>
        <tr>
            <td>Title</td>
            <td>Title as seen in Slack message</td>
            <td>
              Whatever you want. Slack Emojis are supported too.
            </td>
        </tr>
        <tr>
            <td>Title link</td>
            <td>Allows you to embed a link in the title
            </td>
            <td>URL of a page you want to be brought to.
            </td>
        </tr>
        <tr>
            <td>Message attachments</td>
            <td>Detailed message</td>
            <td>
              Whatever you want. Slack Emojis are supported too.
            </td>
        </tr>
        <tr>
            <td>Buttons</td>
            <td>
              Buttons will be shown on the message, and you can click them in lieu of typing out another command
            </td>
            <td>
              You can define the button label, as well as what command is executed when the button is clicked. You can also choose to pass multiple parameters with this button click e.g. <br><code>name: John Smith age: 42</code>
            </td>
        </tr>
        <tr>
            <td>Attachment color</td>
            <td>
              Color displayed with the message to indicate message's importance or type
            </td>
            <td>
              Good = Green<br>
              Warning = Amber<br>
              Danger = Red<br>
            </td>
        </tr>
        <tr>
            <td>Attachment Fields</td>
            <td>Fields to display in a grid</td>
            <td>
              One name-value pair per line, e.g.<br>Name: <kbd>Full Name</kbd><br> Address: <kbd>Address</kbd>
            </td>
        </tr>
        <tr>
            <td>Image URL</td>
            <td>Attach a picture to the message</td>
            <td>
              URL of an image that will be displayed below the message.
            </td>
        </tr>
<!--     <tr>
            <td>Related documents</td>
            <td>
              Commands can be linked to other commands via the document they operate on. Workbot uses this to recommend commands in a conversation
            </td>
            <td>
              Specify links using this format: document name identifier_1:"App data from data tree" identifier_2:"App data from data tree" E.g. ticket id:"[data tree pill]" Specify one parameter per line. No spaces allowed in document name.
        </tr>
Related commands are deprecated-->
    </tbody>
</table>

## Post messages
This action will post a message response to a user who invokes a command. By default, Workbot posts direct messages only to the user who installed Workbot. Note, it is also possible to subscribe from a channel (where Workbot participates) to these notifications.

The fields available are simillar to that of the **Post command reply** action, with all the typical fields you see in a Slack message. However, there is the advanced section with 2 fields: **Message to update** and **Thread ID**.

**Message to update** allows you to overwrite a previously posted message from an earlier action step. Simply use the <code>Message ID</code> datapill from a **Post message** or **Post notification** output datatree.

![Message to update example](/assets/images/workbot/workbot-actions/message-to-update-example.png)
*Message to update example*

**Thread ID** allows you to post a message within an existing thread in Slack. Simply use the <code>Thread ID</code> datapill from a **Post message** or **Post notification** output datatree.

![Thread ID example](/assets/images/workbot/workbot-actions/thread-id-example.png)

## Post notifications
This action allows you to define which Slack channel to post customized notifications to. By default, Workbot posts direct messages only to the user who installed Workbot. Note, it is also possible to subscribe from a channel (where Workbot participates) to these notifications.

The fields available are simillar to that of the **Post command reply** action, with all the typical fields you see in a Slack message. However, there is the addition of the field **Notification filter**. This field allows you to set parameters for filters, which acts like a trigger filter for sending out notifications (i.e. the notification will only get sent when the set criteria is met).

## Download attachment
This action allows you to download attachments from Slack, received as input to [**New command** trigger](workbot-triggers.md#new-commands-building-custom-commands). Make sure command parameter for uploaded content has type *file*, e.g. `attachment type:file`. Pass file URL from **New command** output into the **URL** field to get attachment content. Then you may further pass this file content to Dropbox, Box or other connectors to upload them as files.
