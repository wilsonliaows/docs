---
title: Update Workbot messages
date: 2018-05-21 10:23:00 Z
---

# Updating Workbot messages

![Update message example](/assets/images/workbot/workbot-update-message/update-message-example.gif)
*Message updating from button, menu, and back to button again*

You can update a bot message that was posted earlier by using a post message action. This is especially useful when you want to:
- remove buttons or access menus after users have made their selection (to prevent spam), replacing them with meaningful responses

  ![Update message example](/assets/images/workbot/workbot-update-message/replace-button-example.gif)
  *Buttons removed, replaced with users response and a 'thank you' message*

- reduce clutter in bot conversations by 'reusing' the original bot message (by repeatedly updating the original)

  ![Reduce clutter](/assets/images/workbot/workbot-update-message/reduce-clutter.gif)

## How it works

You can instruct Workbot to use the message contents of a **Post message** action to update an existing bot message.

Each message posted in Slack has a <kbd>Message ID</kbd>, displayed in the output of Workbot triggers & actions.

  >For Workbot triggers, <kbd>Message ID</kbd> only exists when the trigger is invoked by a user interactions in a Workbot message (e.g. button / menu option clicks or dialog submissions). In such a case, the <kbd>Message ID</kbd> would correspond to the bot message containing the interactive component(s).

Hence, the <kbd>Message ID</kbd> datapill can be obtained from the output of a **Post command** trigger or a **Post message**  / **Post command reply** action.

## Using 'Message to update'

To update a message, use its <kbd>Message ID</kbd> in the **Message to update** field of a new **Post message** action. This field can be found under the 'Advanced' section of the action.

![Message to update example](/assets/images/workbot/workbot-actions/message-to-update-example.png)

The message will be replaced by the new message defined in the **Post message** action, along with any interactive components like buttons or message menus.

## Replacing messages containing buttons & message menus
To replace messages containing buttons, message menus, or both, simply add an 'unmapped' button or message menu (depending on what you're replacing) in the updating post message action.

An 'unmapped' button (or message menu) is one where the **Submit button command** (or **Submit menu option command**) does not match any command triggers of any Workbot recipes in the Workato account. This is because 'unmapped' buttons or message menus are not displayed in messages.

![Unmapped button](/assets/images/workbot/workbot-update-message/unmapped-button.png)
*Since 'blank' does not trigger any Workbot recipe, no button will be shown in the message*

## Common mistakes
1. **Updating the wrong message**
  To ensure that you're updating the correct message, make sure that you use the <kbd>Message ID</kbd> from the output step which posted the original message.


2. **Can't find the 'Message to update' field**
  Make sure that it's checked from the 'Add/remove optional fields' list at the bottom of the post message action. After it's enabled, the field can be found in the Advanced group of the post message action.
  ![Message to update optional fields](/assets/images/workbot/workbot-update-message/message-to-update-optional-fields.gif)


3. <kbd>Message ID</kbd> **pill is empty**
  When using a <kbd>Message ID</kbd> pill from the output of a trigger, make sure that the trigger is invoked by a button / menu option click or dialog submission from a bot message (presumably from another recipe). Only triggers that are invoked from interactions with a posted bot message will have a <kbd>Message ID</kbd>.
