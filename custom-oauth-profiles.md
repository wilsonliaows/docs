---
title: Custom OAuth profiles
date: 2018-04-9 10:23:00 Z
---

# What are custom OAuth profiles?
For certain custom apps (e.g. [custom Workbot for Slack](workbot/workbot-custom-bots.md)) to perform actions, they require certain permission scopes.

However, your organization may have pre-approved a specific set of permission scopes for use — and you need anyone creating recipes for that app to adhere to it.

![Custom permission scopes](/assets/images/connectors/slack/custom-permission-scopes.png)
*A custom set of permission scopes*

Custom OAuth profiles are a way for you to 'share' your custom app (and its specific set of permission scopes) with your team members. Your team can connect your app (using its custom OAuth profile) for use in their recipes. This way, they don't have to create an app of their own from scratch. More importantly, you can enforce the approved permission scopes across your team.

Currently, custom OAuth profiles are available for [Slack & Workbot for Slack](/custom-oauth-profiles/slack-workbot-for-slack.md) connectors.
