---
title: Workbot actions for MS Teams
date: 2017-03-30 05:00:00 Z
---

# Workato actions for MS Teams
Workbot actions allow you to post messages & replies to users or channels as Workbot.

Additionally, Workbot also includes custom actions. This action allows you to utilize [Microsoft Graph APIs (v1.0)](https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0).

Workbot supports 3 actions:
* [Post reply](#post-reply)
* [Post message](#post-messages)
* [Custom action](#download-attachment)

## Post reply
Post reply allows you to post a message back to a user when a Workbot command is invoked. Replies are posted directly to the user or in-channel, depending on where the command was invoked.

![Post reply](/assets/images/workbot-for-teams/post-reply.png)
*Example of a post reply listing open opportunities from Salesforce*

This reply can be a simple text message about a task's completion, or more advanced like prompting users on subsequent actions.

You can optionally include 1 fact set (a set of name-value pairs), 1 pick list, buttons and images.

>Post reply must always be paired with a Workbot commands

![Post reply recipe](/assets/images/workbot-for-teams/post-reply-recipe.png)
*Recipe perspective of the post reply example above*

### Input fields
![Post reply fields](/assets/images/workbot-for-teams/post-reply-fields.png)
*Post reply & Post message follow the same message structure*

The post reply action follows a fixed structure, with a preceding **Envelope text** and **Message container**. Text input fields support markdown syntax.

The table below lists the input fields in the post reply action.

<table class="unchanged rich-diff-level-one">
<colgroup>
<col style="width: 117px">
<col style="width: 165px">
<col style="width: 632px">
</colgroup>
  <tr>
    <th>Group</th>
    <th>Input</th>
    <th>Description<br></th>
  </tr>
  <tr>
    <td></td>
    <td>Envelope text</td>
    <td>First message, preceding any text, images, or other elements in the message container. Support markdown.</td>
  </tr>
  <tr>
    <td rowspan="4">Heading</td>
    <td>Heading</td>
    <td>Heading text. Supports markdown.</td>
  </tr>
  <tr>
    <td>Subheading</td>
    <td>Subheading text. Support markdown.</td>
  </tr>
  <tr>
    <td>Link text</td>
    <td>Use markdown to add text links, e.g. [Salesforce](https://www.salesforce.com/).<br></td>
  </tr>
  <tr>
    <td>Heading thumbnail</td>
    <td>Provide image URL of thumbnail. Displays to the left of heading text.</td>
  </tr>
  <tr>
    <td rowspan="2">Body</td>
    <td>Body text</td>
    <td>Main body text of message. Supports markdown</td>
  </tr>
  <tr>
    <td>Image</td>
    <td>Provide image URL. Displays below body text.</td>
  </tr>
  <tr>
    <td rowspan="2">Fact set<br></td>
    <td>Text</td>
    <td>Title of fact. Supports markdown.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>Value of fact. Supports markdown.</td>
  </tr>
  <tr>
    <td rowspan="5">Pick list</td>
    <td>Pick list name</td>
    <td>Name of picklist. Displays before choices. Supports markdown.</td>
  </tr>
  <tr>
    <td>Pick list style</td>
    <td>Compact displays choices in a drop-down menu, while Expanded displays all choices with radio buttons.</td>
  </tr>
  <tr>
    <td>Choice parameter</td>
    <td>Parameter name to store the choice value. This parameter-value pair will be passed on as additional parameters.</td>
  </tr>
  <tr>
    <td>Text (choice)</td>
    <td>Text to display for choice.</td>
  </tr>
  <tr>
    <td>Value (choice)</td>
    <td>Value to pass to <span style="font-weight:bold">Choice parameter </span><span style="font-weight:normal">if chosen.</span></td>
  </tr>
  <tr>
    <td rowspan="4">Buttons</td>
    <td>Prompt text for buttons</td>
    <td>Prompt that displays before buttons. Useful in providing context for the buttons that follow.</td>
  </tr>
  <tr>
    <td>Text (button)</td>
    <td>Text to display for button.</td>
  </tr>
  <tr>
    <td>Submit button command</td>
    <td>Workbot command to invoke when users submit this button.</td>
  </tr>
  <tr>
    <td>Additional parameters</td>
    <td>Pass additional parameters when user submits by clicking a button. Format should be JSON with name-value pairs, e.g.<br><br><pre>{
   "opportunity_id":"<kbd>Opportunity ID</kbd>",
   "stage":"<kbd>Stage</kbd>"
}<samp></td>
  </tr>
  <tr>
    <td rowspan="2"></td>
    <td>Post as raw JSON</td>
    <td>For advanced users to fully customize the message formatting.</td></td>
  </tr>
  <tr>
    <td>Message to update</td>
    <td>Use message ID from the output of a post reply or post message action to update that message with this one.</td>
  </tr>
</table>

## Post message
The post message actions allows you to post a message to a user or a channel. It is similar to **Post reply**, but with an additional field called **Message recipient**. This field allows you to specify where to post the message (direct to user, or to channel).

Use post message if you:

1. Are using Workbot to post event notifications from another application, e.g. New/updated incident in ServiceNow. Since the trigger is not a Workbot command, **Post message** must be used so you can specify the 'Message recipient' for the event.

2. Want control over where Workbot should post the message, instead of sending it where the Workbot command was invoked (which is what **Post reply** does automatically)

3. Want to use advanced features like updating a previous message.

### Message recipient
**Message recipient** allows you post a message to directly to a user or to a channel you specify. Use the <kbd>ID</kbd> datapill (under **Conversation**) from the output of a Workbot command. To pick a member or channel instead, toggle to "Select from list".

![Message recipient](/assets/images/workbot-for-teams/message-recipient.png)
*Message recipient example*

### Advanced section
 The advanced section has 2 fields: **Post as raw JSON** and **Message to update**.

- #### Post as raw JSON
  This field is for advanced users who want to fully customize the message formatting. When set to **Yes**, all other fields will be hidden. Should include <code>"type": "message"</code>, followed by <code>"attachments"</code>, e.g.
```
  {
   "type":"message",
   "attachments":[
      {
         "contentType":"application/vnd.microsoft.card.adaptive",
         "content":{
            "type":"AdaptiveCard",
            "version":"1.0",
            "body":[
               {
                  "type":"TextBlock",
                  "text":"Hello World!",
                  "size":"large"
               }
            ]
         }
      }
   ]
}
```
- #### Message to update
  **Message to update** allows you to overwrite a previously posted message from an earlier action step. Simply use the <code>Message ID</code> datapill from a Workbot command, **Post message** or **Post reply** action.

  ![Message to update example](/assets/images/workbot-for-teams/message-to-update.png)
*Message to update*
