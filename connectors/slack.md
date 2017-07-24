---
title: Slack
date: 2017-06-13 06:15:00 Z
---
 
# Slack

[Slack](https://slack.com/) is a modern team communication platform that enables users to work more productively in their teams and organizations by sharing tools and resources.

Slack teams can utilize Workato to integrate their other apps with Slack, such as by posting notifications in Slack whenever a lead fills out a form on their website, or when a new users signs up. Slack teams can also use Workato to automate processes such as creating project-based channels for new projects and inviting the project team members to join the channel.

In addition to the Slack connector, Workato also has a Slack chatbot, called Workbot for Slack, which comes with a prebuilt set of integrations which enables Slack teams to retrieve data from and interact with their other business apps from within Slack. Learn more about Workbot [here](https://www.workato.com/workbot-slack). 

## Building recipes

Let’s walk through a sample recipe- a new google contact will post a message on Slack with key user details. 

![Recipe form input](/assets/images/connectors/slack/input-boxes-msg.png)
*Start by filling in the channel and message*

**Channel**
This refers to the slack channel where you want the message to be displayed. 

**Message**
This is the message you want to post on Slack. In this example, we’ll include the new contact’s ID, Full name, and Email.

**Title URL**
This is the link user will be directed to when the title is clicked. 
 

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
Images that are displayed on the right side of the message.

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

You can use lookup tables in two different ways- manual entry or by uploading a CSV file.  To learn more about populating lookup tables with CSV files, click [here](http://docs.workato.com/features/lookup-tables.html#importing-an-existing-csv-file)

Let’s go through a sample recipe for Slack where lookup tables would be useful. For this recipe, a new issue on JIRA will invite all users in the lookup table to a Slack channel. To start building a lookup table, locate your name on the top right hand corner and click on it.  Next, go to lookup tables and create a new one. 

![Lookup tables](/assets/images/connectors/slack/create.gif)
*Create a lookup table*

Let’s start populating a lookup tables.

![Lookup table](/assets/images/connectors/slack/add-new.jpg)
*Filled lookup table*

With the help of the **repeat step**, you can look through every user in the lookuptable, find their corressponding slack handles and invite them to your channel.

Using lookup tables for slack can further facilitate the recipe building process. The oranized tables can be reffered to throughout the recipes for easier access. 
