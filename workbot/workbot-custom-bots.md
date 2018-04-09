---
title: Custom Bots
date: 2018-04-9 10:23:00 Z
---

# What are custom bots?
Custom bots are Slack apps you can use together with Workato for triggers and/or actions. They're useful for when you want to customize your bot for specific functions; giving it a name related to that function, as well as giving it its own icon e.g. HRBot, SupportBot. This allows you greater flexibility in customizing your bot's functionalities and identity.

### Creating a custom bot
To get started, head to Tools ➤ Workbot like so:

![Tools > Workbot](/assets/images/workbot/workbot-slash-commands/tools-workbot.png)*If you don't see Workbot, make sure your Workato team or account has access to Workbot*
Under the **Custom** tab, click on **Create a custom bot**.

![Create a custom bot](/assets/images/workbot/workbot-slash-commands/create-custom-bot.png)*If you don't see the **Custom** tab, make sure your Workato team or account has access to Custom OAuth profiles*

In Step 1, click on **Create new app**.

![Creating a new Slack app](/assets/images/workbot/workbot-slash-commands/custom-oauth-step-1.png)

This will open a new tab that will bring you to https://api.slack.com/apps. Keep both the Workato tab and this new tab open - you'll need both to complete Steps 2 and 3.

Sign in to your team (if you haven't already), then click on **Create New App**.

![Create new app in Slack 1](/assets/images/workbot/workbot-slash-commands/create-new-app-in-slack-1.png)

In the form that pops up, give your bot a name - it typically describes the functionality of the bot e.g. HRBot or SupportBot.

Choose which Slack team this custom bot belongs to, then click on **Create App**.

![Create new app in Slack](/assets/images/workbot/workbot-slash-commands/create-new-app-in-slack-2.png)

Your custom bot should now be created! You should be greeted with your new bot's **Basic Information** page. If not - don't sweat it. Just click on **Basic Information** from the left navigation menu.

![New app created](/assets/images/workbot/workbot-slash-commands/new-app-created.png)

Scroll down to **App Credentials** you'll need this information back on your Workato tab. With this info handy, we can now head back to the Workato tab to complete Step 2.

In Step 2, fill up:
- **Name**: This should be the same name you used to name your custom bot when creating the app e.g. HRBot
- **Client ID**
- **Client secret**
- **Verification token**

It should look like this:

![App credentials](/assets/images/workbot/workbot-slash-commands/app-credentials-workato.png)

Hit **Save** once you're done. We can now configure your custom bot to talk to Workato in Step 3.

### Configuring your custom bot to talk to Workato
Now that your custom bot has been created, we'll need to configure him to be able to talk to Workato. Step 3 is done completely on your app page on Slack, so let's head back to the Slack tab (you kept it open, right?).

Don't fret if you didn't - you can always head to Tools ➤ Workbot ➤ Custom, and clicking on your custom bot:

![Edit bot profile](/assets/images/workbot/workbot-slash-commands/edit-bot-profile.png)*Getting back to configuring your custom bot*

![Step 3 of custom bot creation](/assets/images/workbot/workbot-slash-commands/step-3.png)*Step 3 of configuring your custom bot to talk to Workato*

#### Setting up OAuth & Permissions
You'll want to allow your custom bot to perform certain functions in your Slack team - so you'll need to set some scopes and permissions for him. On your app page on Slack, from the left navigation menu under **Features**, head over to **OAuth & Permissions**.
![OAuth & Permissions](/assets/images/workbot/workbot-slash-commands/oauth-permissions.png)

Scroll down to **Redirect URLs** and click on **Add a new Redirect URL**. Copy <code>https://www.workato.com/oauth/callback</code> into the field and click **Add**. If you get an error saying 'This doesn’t seem like a proper link' check to make sure there are no extra spaces at the start/end of the link. Once you're done, remember to hit **Save URLs**.

![Redirect URLs](/assets/images/workbot/workbot-slash-commands/redirect-urls.png) *Remember to click on **Save URLs** to save your newly added redirect URL!*

Scroll down to **Scopes**, and select the following **Permission Scopes**:
- bot
- users:read
- im:write

![Scopes](/assets/images/workbot/workbot-slash-commands/scopes.png)

Click on **Save Changes**.

#### Adding the custom bot as a user in your Slack team
You'll want to add your custom bot to your team so he can interact with users in a more conversational manner. From the left navigation menu, under **Features**, head over to **Bot Users** and click on **Add a Bot User**.

- Set the Display name and Default username as the name of your bot e.g. HRBot
- Turn ON Always Show My Bot as Online option
- Click on Add Bot User

![Adding a bot user](/assets/images/workbot/workbot-slash-commands/adding-a-bot-user.png)

#### Subscribing to your custom bot events
You'll want your custom bot to subscribe to events related to the channels and conversations they're a part of, so he can respond to them.

From the left navigation menu, under **Features**, head over to **Event Subscriptions** and enable events.

- Copy + paste your custom bot's unique request URL into this field. Jumping back to your open Workato tab, you can find this URL in the Step 3 details, you can find it in the Step 3 details (under the **Go to *Event Subscriptions* and turn <code>ON</code> *Enable Events*** section).

![Events subscription request URL](/assets/images/workbot/workbot-slash-commands/event-subscriptions-request-url.png)*It should look something like: <code>https://www.workato.com/slack_webhooks/event?coak_id=18</code>*

Scroll down to **Subscribe to bot events**, click on **Add Bot User Event** and add the following events:

- file_shared
- message.channels
- message.groups
- message.im
- message.mpim

![Subscribe to bot events](/assets/images/workbot/workbot-slash-commands/subscribe-to-bot-events.png)

Click on **Save Changes**.

#### Enabling interactive components
Enabling this allows your custom bot to respond to message buttons, menus or dialogs - by sending these commands to our specified request URL.

- Copy + paste your custom bot's unique request URL into this field. Jumping back to your open Workato tab, you can find this URL in the Step 3 details (under the **Go to the *Interactive Components* section and click on *Enable Interactive Components*** section).

![Interactive components](/assets/images/workbot/workbot-slash-commands/interactive-components.png)*It should look something like: <code>https://www.workato.com/slack_webhooks/event?coak_id=18</code>*

![Enable interactive components](/assets/images/workbot/workbot-slash-commands/enable-interactive-components.png)

Click on **Save changes**. Your custom bot is now ready to be installed into your Slack team!

#### Installing your custom bot to your Slack team
Now that you've finished configuring your custom bot, you can now install it to your Slack team. From the left navigation menu, under **Settings**, head over to **Install App**.
- Click on **Install App to Workspace**

![Install app](/assets/images/workbot/workbot-slash-commands/install-app.png)

Choose your Slack team and authorize it to complete the installation.

Jumping back to your open Workato tab, under Step 3, click on **Done** to finish configuring the custom bot. You should now be prompted to connect this custom bot to your slack team:

![Connect custom bot to Slack team](/assets/images/workbot/workbot-slash-commands/connect-custom-bot-to-slack-team.png)

- Name your connection
- Click **Connect**
- Choose your Slack team and authorize it to complete the connection.

![Authorize custom bot](/assets/images/workbot/workbot-slash-commands/authorize-custom-bot.png)

With that, your custom bot is now ready to be used with Workato recipes! You should be able to see your custom bot in your slack team.

![HRBot](/assets/images/workbot/workbot-slash-commands/hr-bot.png)

You should also be able to use this custom bot with recipes:

![Recipe with custom bot](/assets/images/workbot/workbot-slash-commands/recipe-with-custom-bot.png)

![Recipe connection to custom bot](/assets/images/workbot/workbot-slash-commands/recipe-connection-to-custom-bot.png)
