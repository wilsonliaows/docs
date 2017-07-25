---
title: Slack
date: 2017-06-13 06:15:00 Z
---
 
# Slack

[Slack](https://api.slack.com) provides users with an easy to use platform to communicate within groups and provides numerous other beneficial programs such as creating applications on Slack as well as internal integration. 

Through Workato, users can benefit from many triggers and actions that further facilitate Slack integration. Some triggers and actions include “Button Action”, “Post message” and “Invite User to Channel”. With the help of these fundamental actions and triggers, users can build recipes that could, for example, post a message on Slack each time a new contact is created on Google Contacts.

Workato also provides users with Workbot which helps automate work in businesses and enterprises. To learn more about Workbot, click [here](https://www.workato.com/workbot-slack). 

## Sample slack recipes

To get started on building some recipes with Slack integration on Workato, take a look at some of our sample recipes for the following triggers and actions.

**New Button**

https://www.workato.com/recipes/569291-new-button-action-from-slack-will-send-email-via-workato?st=78ded7#recipe

Respond to Button action
https://www.workato.com/recipes/569291-new-button-action-from-slack-will-send-email-via-workato?st=78ded7#recipe

**Post message**

https://www.workato.com/recipes/563608-new-user-in-zendesk-will-post-message-create-channel-and-send-email?st=a9e632#recipe

**Create channel**

https://www.workato.com/recipes/563608-new-user-in-zendesk-will-post-message-create-channel-and-send-email?st=a9e632#recipe

**Archive channel**

https://www.workato.com/recipes/563728-new-or-updated-card-in-trello-will-post-message-in-slack?st=81e932#recipe

**Set channel topic**

https://www.workato.com/recipes/567067-new-updated-issue-in-jira-will-invite-user-to-channel-in-slack?st=d42723#recipe


## Building recipes

Let’s walk through a sample recipe- a new google contact will post a message on Slack with key user details. 

![Recipe form input](/assets/images/connectors/slack/input-boxes-msg.png)
*Start by filling in the channel and message*

**Channel**
This refers to the slack channel where you want the message to be displayed. 

**Message**
This is the message you want to post on Slack. In this example, we’ll include the new contact’s ID, full name, and email.

**Title URL**
This is the link that the user will be directed to when the title is clicked. 
 

Next, we’ll fill in the Button action handler recipe, Button actions, Message type, Slack formating, Thread ID and User name. 

![Form fill](/assets/images/connectors/slack/button-input.png)
*Proceed to fill in the fields of the form*

**Thread ID**
The Thread ID can be found in the URL of the thread. 

![Thread ID](/assets/images/connectors/slack/thread-id.png)
*Locate Thread ID*

**Message Type**
The message type on Slack is used to represent the urgency or importance of a particular message. There are three different types which are color coded- green represents good, amber represent warning, and red represent danger. 

**Slack Formatting**
Slack formatting allows parsing of <URL link|title> <user|name> <channel|name>. Learn more about this [here](https://api.slack.com/docs/message-formatting).

**User name**
This is the account that the Slack message will be posted from. 

**Thumb URL**
The Thumb URL is the image that is displayed on the right side of the message.

**Image URL**
The image URL is shown in the body of the message. 

**User Image URL**
The User Image is the image that will show up next to the user name that was inputted.

**Buttons**
To create buttons on Slack messages, we’ll need two things- a handler recipe and the button action.

Handler recipes need to be built with the “Button action” trigger. This is essentially the recipe that Workato will execute upon pressing the button. For our example, we’ll use a recipe that sends an Email via Workato. The recipe will look as follows:

![Handler recipe](/assets/images/connectors/slack/handler-recipe.png)
*Handler recipe*

The button action defines what exactly the button should do and how it will look on the Slack message. 

Use the format **action name, id, [style], confirmation text, ok button title, dismiss button title]**. The button in this example will send an email stating that a contact has been created.

The message on Slack will look as follows:
![Slack Message](/assets/images/connectors/slack/final.png)
*Slack message*

## Using lookup tables to build Slack recipes

You can use lookup tables in two different ways - manual entry or by uploading a CSV file. To learn more about populating lookup tables with CSV files, click [here](http://docs.workato.com/features/lookup-tables.html#importing-an-existing-csv-file)

Let’s go through a sample recipe for Slack where lookup tables would be useful. For this recipe, a new issue on JIRA will invite all users in the lookup table to a Slack channel. To start building a lookup table, locate your name on the top right hand corner and click on it.  Next, go to lookup tables and create a new one. 

![Lookup tables](/assets/images/connectors/slack/create.gif)
*Create a lookup table*

Let’s start populating a lookup table.

![Lookup table](/assets/images/connectors/slack/add-new.jpg)
*Filled lookup table*

With the help of the **repeat step**, you can look through every user in the lookup table, find their corresponding Slack handles and invite them to your channel.

Using lookup tables for Slack can further facilitate the recipe building process. These tables can be referred to throughout the recipes for easier access. 
