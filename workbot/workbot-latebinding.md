---
title: Workbot personal connections
date: 2017-05-15 05:00:00 Z
---

# Workbot personal connections
By default, recipes perform actions based on the identity & permissions of the credentials used to connect the application.

![Connection credentials](/assets/images/workbot/workbot-latebinding/connection-credentials.png)
*A sales manager's credentials used in Salesforce connection*

In the example above, Workbot commands create opportunities in Salesforce — but solely as the sales manager, i.e. the Salesforce connection owner. This means that even though sales reps are creating opportunities in Slack, they would all be reflected as creations of the sales manager in Salesforce. This is also an issue for approvals workflows — approving users need to perform approvals as themselves, not as the connection owner.

Using personal connections, Workbot allows users to authenticate themselves before carrying out actions for them in other apps, e.g. asking sales reps to log in to Salesforce before dispatching Workbot to create the opportunity in Salesforce on their behalf. These personal connection persist, meaning that the user doesn't have to provide credentials every time they use a Workbot command.

To enable personal connections, go to **Recipe > Settings** page and enable **Verify user access at runtime**. Currently, Workbot supports personal connections to apps with OAuth2 connections only, e.g. Salesforce, ServiceNow, Box.

![recipe-setting](/assets/images/workbot/workbot-latebinding/recipe-settings.png)

When this feature is enabled, Workbot recipes will request individual users to authenticate (i.e. login) to the app, from Slack, before carrying out the app action.

![personal-connection-flow](/assets/images/workbot/workbot-latebinding/slack-flow.gif)
*Personal connection setup for Salesforce Approval flow*

# Viewing personal connections
You can view your personal connections sending '*connections*' in a DM to Workbot.

![Personal connections - DM 'connections'](/assets/images/workbot/workbot-latebinding/dm-connections.gif)
*Sending a 'connections' DM to Workbot to view personal connections*

You can also type '*help*'' in the DM, followed by clicking on the *personal accounts* button.

![personal-connection-control](/assets/images/workbot/workbot-latebinding/manage.gif)
*Viewing personal connections*

If Workbot has been invited to your channels, you can use '*@Workbot connections*'' or '*@Workbot help*' to view your personal connections in those channels.

# Disconnecting your personal connections
You can disconnect your personal connections anytime by viewing your personal connections and clicking 'Disconnect'.

![Disconnecting personal connections](/assets/images/workbot/workbot-latebinding/disconnect-personal-connections.gif)
*Disconnecting a personal connection*
