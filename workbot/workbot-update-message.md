---
title: Update Workbot messages
date: 2018-05-21 10:23:00 Z
---

# Updating Workbot messages

![Update message example](/assets/images/workbot/workbot-update-message/update-message-example.gif)

You can update a post command reply / post message (that was posted in an earlier step or recipe) with a new post message by inputting its Message ID in the Message to update field.

This is especially useful when you don't want users to click a button or a menu option more than once.

## How it works

The 'Message to update' field must be checked from the 'Add/remove optional fields' list at the bottom of the post message action. After it's enabled, the field can be found in the Advanced group of the post message action.

![Message to update optional fields](/assets/images/workbot/workbot-update-message/message-to-update-optional-fields.gif)

Populate the 'Message to update' field of a post message action with the Message ID of a post command reply or a post message that you want to update.

Message IDs can also be found in a post command trigger but on one condition - the post command trigger must be triggered by a post command reply or a post message when the job is run.
