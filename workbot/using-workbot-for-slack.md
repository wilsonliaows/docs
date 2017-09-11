---
title: Using Workbot for Slack
date: 2017-03-30 05:00:00 Z
---

# Using Workbot for Slack
In this article, we cover the two ways you can use Workbot in your Slack organization:

1. Carry out Workbot commands
2. Setup smart notifications (optional)

## 1. Carry out Workbot commands

As previously mentioned, there is a pre-built list of commands for each app. Click **Commands** right under the app name to view the list.

![Salesforce commands list](/assets/images/workbot/workbot/salesforce-commands-list.png)
*List of available Workbot commands for Salesforce*

For example, you can request Workbot to display the details of an opportunity in Salesforce, or list recent opportunities. You can also create accounts and cases from Slack with Workbot.

You can interact with Workbot on channels it has been invited to, or via direct message. Note that conversations with Workbot on channels are visible to all team members in that channel, and direct message with Workbot are not visible to anyone but you.

### Example of Salesforce show account command
Let’s ask Workbot to display account details for a customer in Salesforce. If the account exists (Salesforce accepts case-insensitive searches too), Workbot will display the account details in the channel or direct message, corresponding to where you were having the conversation with Workbot.

![Salesforce show account example](/assets/images/workbot/workbot/salesforce-show-account-example.png)
*Using the Salesforce show account command in Slack. Workbot displays the account details if found.*

If the account does not exist, Workbot will return with an error message.

![Salesforce show account example - account not found](/assets/images/workbot/workbot/salesforce-show-account-not-found-example.png)
*Using the Salesforce show account command in Slack. Workbot responds with an error if the accoun is not found.*

## 2. Set up smart notifications
You can configure Workbot to monitor your apps for important events and notify your team about them. You have to [invite Workbot to the channel](#3-invite-workbot-to-channels) you wish for the notifications to be posted to, before configuring notifications to be posted to that channel.

To set up notifications, follow the steps below:

1. Go to the channel where notifications should be posted to. Make sure Workbot is a member of the channel.

2. Turn on the notification via Workbot command

The command should follow this format:

```@workbot appname start notifications name:[document] [event]```

If you have not [toggled the app on and connected successfully](#2-connect-workbot-to-your-apps), you will not be able to start notifications. But if the app has been turned on earlier, Workbot will confirm that notifications is started.

![Workbot12](/assets/images/workbot/workbot/workbot-12.png)
*Workbot confirming that the specified notification has been turned on*

Subsequently, when the event occurs in your app, Workbot will send you notifications accordingly on this channel.

![Workbot13](/assets/images/workbot/workbot/workbot-13.png)
*Notifications posted to the specified channel by Workbot*

4. Optionally, turn off the notification via Workbot command

The command should follow this format:
```@workbot appname stop notifications name:[document] [event]```

Workbot will confirm that it has stopped notifications for the specified event.

![Workbot15](/assets/images/workbot/workbot/workbot-15.png)
*Workbot confirming that the specific notifications will be stopped*

### Final notes

1. Make sure that Workbot is always in the channel to run commands. Do this by inviting it to the channel.
2. Just like talking to a real person, always use @workbot because you want it to be alerted.
3. When you talk to Workbot in his direct message channel, you do not need to use @workbot because it knows you are talking to it.
4. When you invite Workbot into the channel, **anyone** in that channel can interact with Workbot via commands.
5. When first installing Workbot into your Slack team, Workbot will detect the **latest** app connections you have made in your Workato account and automatically connect to them.
