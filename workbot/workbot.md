---
title: Workbot for Slack
date: 2017-03-30 05:00:00 Z
---

# Workbot for Slack
Workbot from Workato helps you work with your business apps from within Slack. You can chat with your apps to access information or ask the the app to create or update business data. To cut down on traffic, apps can now send you smart notifications based on user specified filters.

![Workbot1](/assets/images/Workbot/Workbot/Workbot 1.png)

We will cover four areas in this document to help you get started!
- Adding Workbot to Slack
- Connecting Workbot to Apps
- Sending commands to the Apps
- Setting up Workbot for Smart Notifications

## Adding Workbot to Slack
You can add Workbot to your Slack [here](https://www.workato.com/workbot-slack). This brings you to the following screen to set up Workbot for Slack.

Note: If you do not want to not make Workbot available to all your team members, or if you are doing your own testing, you can create a new Slack team and use that team to set up Workbot.

![Workbot2](/assets/images/Workbot/Workbot/Workbot 2.png)
*Workbot introduction page*

Click on the **Add to Slack** button. This brings up a pop-up showing the Slack team you're connected to. To authorize Workbot to have access to that Slack team, click on **Authorize**.

![Workbot3](/assets/images/Workbot/Workbot/Workbot 3.png)
*Click on Authorize to let Workbot chat with and help your team on Slack*

If authorized, you should see the following screen:

![Workbot4](/assets/images/Workbot/Workbot/Workbot 4.png)
*Popup shown when authorization is successful*

That's cool, you've now added Workbot to your Slack team!

## Connecting Workbot to Apps
Next, you have to connect to the apps you want Workbot to interact with. Toggle the switches to **On** if you wish to interact with that app.

![Workbot5](/assets/images/Workbot/Workbot/Workbot 5.png)
*List of available apps to connect Workbot to*

Authorize the connection by providing your user credentials or other required authentication information. For example, connecting to Salesforce brings up a popup to connect to Salesforce and authorize Salesforce access to Workato.

![Workbot6](/assets/images/Workbot/Workbot/Workbot 6.png)
*Popup generated when we turn on the Salesforce connection in Workbot*

Once connected, the switch turns **On**.

Now you're ready to get Workbot to fetch or push data from your connected apps!

## Sending commands to the app
There is a defined list of commands for each app that tells you what data you can retrieve or what data you can write to each app. Simply click on **Commands** right under the app name to view the list.

For example, you can request Workbot to display the details of an opportunity in Salesforce, or list recent opportunities. You can even create accounts and cases from Slack with Workbot!

![Workbot16](/assets/images/Workbot/workbot/Workbot 16.png)
*List of commands available for Salesforce*

Note that direct messages (DMs) are private exchanges with Workbot and won’t be seen by others.

### Example of using commands
Let’s ask workbot to **show details for a customer** from QuickBooks.

![Workbot7](/assets/images/Workbot/Workbot/Workbot 7.png)
*Using show customer details command with Workbot in Slack*

Workbot checks if the QuickBooks customer GenePoint already exists. If it does, the customer details will be retrieved and posted on Slack. It also asks if we would want to create a corresponding account in Salesforce. if we want to do that, all we need to do is say "@workbot Yes", and Workbot proceeds to create and display the data for the newly created Salesforce account.

Workbot will do a search to check for duplicates - if the Salesforce account GenePoint already exists, the customer details will be retrieved and posted on Slack. If it does not exist yet, the account will be created and details will be posted on Slack.

![Workbot8](/assets/images/Workbot/Workbot/Workbot 8.png)
*If Workbot finds a duplicate record, it will not create the new Salesforce account*

## Setting up notifications
Commands are one way to interact with Workbot. At the same time, you can get Workbot to monitor your apps for important events and notify you about them. Invite Workbot to any channel and configure notifications to be posted to that channel. To set up notifications in your channel for specific recipes, follow the steps below:

1. Go to channel for Workbot to post notifications to

![Workbot9](/assets/images/Workbot/Workbot/Workbot 9.png)
*Go to, or create, the channel where Workbot should post notifcations*

2. Invite Workbot to the channel

![Workbot10](/assets/images/Workbot/workbot/workbot-adding-channel.gif)
*Invite Workbot to the channel*

3. Turn on notifications via Workbot command

The command should follow this format:
```@workbot appname start notifications name:\[document] [event]```

If the app has not been turned on, you will not be able to start notifications. But if the app has been turned on earlier, Workbot will confirm that notifications is started.

![Workbot12](/assets/images/Workbot/Workbot/Workbot 12.png)
*Workbot confirming that the specified notification has been turned on*

Subsequently, when the event occurs in your app, Workbot will send you notifications accordingly on this channel.

![Workbot13](/assets/images/Workbot/Workbot/Workbot 13.png)
*Notifications posted to the specified channel by Workbot*

4. Optionally, turn off notifications via Workbot command

The command should follow this format:
```@workbot appname stop notifications name:\[document] [event]```

Workbot will confirm that it has stopped notifications for the specified event.

![Workbot15](/assets/images/Workbot/Workbot/Workbot 15.png)
*Workbot confirming that the specific notifications will be stopped*

### Final notes

1. Make sure that Workbot is always in the channel to run commands. Do this by inviting it to the channel.
2. Just like talking to a real person, always use @workbot because you want it to be alerted.
3. When you talk to Workbot in his direct message channel, you do not need to use @workbot because it knows you are talking to it.
4. When you invite Workbot into the channel, **anyone** in that channel can interact with Workbot via commands.
5. When first installing Workbot into your Slack team, Workbot will detect the **latest** app connections you have made in your Workato account and automatically connect to them.
