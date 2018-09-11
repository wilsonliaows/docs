---
title: Workato connectors - Outlook new email trigger
date: 2018-09-10 12:00:00 Z
---

# Outlook - New email trigger
The new email trigger in Outlook monitors an inbox or a shared inbox for new incoming emails. It is a real-time trigger, meaning that new emails received in the inbox will trigger the recipe and create a trigger event instantly.

![Unconfigured Outlook new email trigger](/assets/images/connectors/outlook/outlook-new-email-trigger.png)
*Unconfigured Outlook new email trigger*

By default, the trigger will monitor emails sent to the connected Outlook account. However, you can choose to monitor emails in a shared mailbox by providing the emaill address of that shared mailbox.

![Entering a shared mailbox that user has permissions to](/assets/images/connectors/outlook/shared-inbox-with-permissions.gif)
*Entering a shared mailbox that user has permissions to*

If the connected user has no permissions to access the shared mailbox, or if an incorrect shared mailbox email address is entered, a 404 error will occur.

![Entering a shared mailbox that user has no permissions to](/assets/images/connectors/outlook/shared-inbox-without-permissions.gif)
*Entering a shared mailbox that user has no permissions to*

## Trigger behaviour when recipe is stopped and restarted
Even if the recipe is stopped, when it's restarted again, all emails created in the time during which the recipe was stopped will be picked up by the recipe.
