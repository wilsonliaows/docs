---
title: Workbot personal connections
date: 2017-05-15 05:00:00 Z
---

# Workbot personal connections
In some cases, Workbot commands should be carried out based on the permissions and identity of the individual user and not on the permissions of the admin user who installed Workbot, e.g. when sales reps creates or edits an opportunity, they wants the creator to be identified as them instead of as the admin user, and when a user approves a workflow, they want the approver to be listed as them and not the admin user.

Most recipes have a single connection defined in its setup, and uses that connection, e.g. a Workbot recipe to Salesforce will use the connection of the user who installed Workbot, and accordingly rely on this connected user's permission set to retrieve data from Salesforce or write data to Salesforce. In Workbot recipes, however, there is the concept of Workbot personal connections, which asks individual users for their credentials to verify identity before carrying out their actions in other apps, e.g. asking sales reps to log in to Salesforce via Slack before creating the opportunity in Salesforce for them. This connection persists for users, meaning that the user doesn't have to provide credentials everytime they use a Workbot command.

To enable personal connections, go to **Recipe > Settings** page and enable Runtime connection binding.

![recipe-setting](/assets/images/workbot/workbot-latebinding/recipe-settings.png)

When this feature is enabled, Workbot recipes will request individual users to authenticate (i.e. login) to the app, from Slack, before carrying out the app action.

![personal-connection-flow](/assets/images/workbot/workbot-latebinding/slack-flow.gif)
*Personal connection setup for Salesforce Approval flow*

Users can view their personal connections by typing *connections* in the Workbot DM. Alternatively, they can type *help* in the Workbot DM, and click on the *personal accounts* button. It is possible to disconnect personal connections or connect them again. Note, if not in the Workbot DM, you can type the same commands, but add the @Workbot mention, e.g. *@Workbot connections* or *@Workbot help*.

![personal-connection-control](/assets/images/workbot/workbot-latebinding/manage.gif)
*Personal connections management*

If the command is ran by the Workbot admin (user who installed Workbot into Slack team), recipe will automatically be executed with the default recipe connection. Therefore, Workbot admins will not have personal connections.
