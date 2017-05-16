---
title: Workbot Personal Connections
date: 2017-05-15 05:00:00 Z
---

# Workbot Personal Connections

This feature allows to use in Workbot commands personal user connection instead of one provide by Admin during Workbot recipe setup. Here is the simple example: for command *list salesforce opportunity* you may want to pull opportunities information from user's account who typed the command. By default information will be pulled from Admin Salesforce connectionset up during recipe composing. To enable personal user connection usage go to Recipe->Settings page and enable Runtime connection binding before starting recipe.

![recipe-setting](/assets/images/Workbot/workbot-latebinding/recipe-settings.png)

Enabling this feature forces user to connect his personal account, for the example above - personal Salesforce account. During recipe execution he would see extra dialog requesting him to connect his personal account. Once it is done recipe execution continues automatically.

![personal-connection-flow](/assets/images/Workbot/workbot-latebinding/slack-flow.gif)
*Personal connection setup for Salesforce Approval flow*

User may see his personal connection by typing *help* command and then pressing *personal accounts* button. It is possible to disconnect personal connections or connect them again.

![personal-connection-control](/assets/images/Workbot/workbot-latebinding/manage.gif)
*Personal connection management*

If command is run by Workbot Admin (person who installed Workbot into Slack team) then recipe is executed with the connection he set up in the recipe. So he is not asked to connect personal account.
