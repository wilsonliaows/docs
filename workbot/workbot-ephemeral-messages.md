---
title: Ephemeral messages
date: 2018-04-14 10:23:00 Z
---

# Ephemeral messages

Ephemeral messages are messages that can only be seen by the user invoking a Post command trigger. Ephemeral messages can be posted to a user by using a Workbot Post command reply action.

![Ephemeral message](/assets/images/workbot/workbot-ephemeral-messages/ephemeral-message-1.png)

Ephemeral message delivery is not guaranteed — the user must be currently active in Slack. By nature, ephemeral messages do not persist across reloads, desktop and mobile apps, or sessions.

Use ephemeral messages to send users context-sensitive messages, relevant to the channel where the Post command trigger is invoked.

## Configuring ephemeral messages

Ephemeral messages can be configured in a Workbot Post command reply action, under the **Send only to the user** section.

![Send only to the user](/assets/images/workbot/workbot-ephemeral-messages/send-only-to-the-user-1.png)

When set to **Yes**, only the user invoking the command will see the reply. If set to **No**, everyone in the channel will see the reply. This field defaults to **No** by default.
