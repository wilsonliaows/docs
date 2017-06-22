---
title: Workbot examples
date: 2017-03-30 05:00:00 Z
---

# Workbot Examples 

With Workbot, you can easily integrate applications in order communicate, organize, or collaborate within an organization.

In this article we'll walk you through:
1. [Sample recipes](http://docs.workato.com/#sample-recipes)
2. [Detailed walkthrough of a sample recipe](http://docs.workato.com/#detailed-walkthrough-of-a-sample-recipe)
3. [Defining key Workbot terms](http://docs.workato.com/#defining-key-workbot-terms)

## Sample Recipes

To get a start on building your own workbot recipes, take a look at these useful sample recipes that you can copy and adjust as you chose to get a glimpse of the possible workbot recipes you could build.

* [New/updated deal support request on Salesforce posts notification on Slack](https://www.workato.com/recipes/539932-new-updated-dsrs-post-notifications-in-slack-acme360#recipe)

* [Approve or reject deal support request on Slack](https://www.workato.com/recipes/539920-approve-reject-dsr-acme360#recipe)

## Detailed walkthrough of a sample recipe

Let's go through [this recipe](https://www.workato.com/recipes/539920-approve-reject-dsr-acme360#recipe) in detail.

Once you open the link, click on the *Use this recipe* button located on the top right hand corner of the page.

![Use this recipe](/assets/images/Workbot/workbot-examples/use-recipe.png)
*Use this recipe button located on top right hand corner*

After you do this, you will be directed to a page where you will have to fill in your connections. For this example, you will need to fill in your Slack account and Salesforce account. 

![Connecting Apps](/assets/images/Workbot/workbot-examples/connections.png)
*Connect the applications and then press next*

After you click on next, you will have the option to customize any fields you want to change. If you don't want to, proceed to click *Next*
![Customize fields](/assets/images/Workbot/workbot-examples/customize.png)
*Modify, add, and remove anything from the original sample recipe*

If you chose to do so, you can test your recipe. If not, click on *Skip & test later*

![Testing](/assets/images/Workbot/workbot-examples/testing.png)
* Click on test recipe located on the top right corner, or skip and test later.*

Now, you have everything set up on Workato. To see the Workbot recipe in action, we need to set up a deal support request.

To do this, we need to go to Salesforce and create a new deal supoprt rqequest.

Firstly, go to your home page and click on *Create New* on the top left corner of the page. In the drop down bar, click on **Deal Support Request.

![Create new request](/assets/images/Workbot/workbot-examples/create-new.jpg)
**Create new* > *Deal support request**

Once you click on this, you will be directed to a form.

![New Deal](/assets/images/Workbot/workbot-examples/new-deal-form.jpg)
*Fill in the fields of the form and then hit save*

Once you save the request, you will receive a confirmation notification.
![Confirmation](/assets/images/Workbot/workbot-examples/confirmation.jpg)
*Deal support request confirmation*

When you go back to the slack channel, you will have received this notification:

![Slack notification](/assets/images/Workbot/workbot-examples/slack-notification.jpg)
*Slack notification of deal support request, pending approval*

Once the approver hits approve, you will get the following message:

![Approved request](/assets/images/Workbot/workbot-examples/approved.jpg)
*Approved support request*

## Defining key Workbot terms

### Application

The application section of the form refers to the app that is linked to the commands. For this reason, make sure you correctly fill in applications that are on our list of applications.

Start typing in your application or scroll down to find the application you are looking for. If you enter a correct app name, you will see an app icon show up on your slack notification. 

![Correct application](/assets/images/Workbot/workbot-examples/correct.png)
*Correct application fill-in*

If you put in an incorrect application name, you will not see an app icon.
![Incorrect application](/assets/images/Workbot/workbot-examples/incorrect-application.png)
*Correct application fill-in*

### Buttons

Buttons will show up on your slack message through Workbot. 

For example, this deal support request has two buttons- approve or reject- for the designated approver to click on. 

![Button example](/assets/images/Workbot/workbot-examples/button.png)
*Example of buttons in a deal support request on slack*

To design your own buttons, copy and paste the following into your **Buttons** input field:

```ruby
[{"title":"button title", "command":"button command"}]
```

Note that the button title is the name that will show up on the button and that the button command is a string of words that will do the same thing as a button click.

one example button could be:

```ruby
[{"title":"Approve", "command":"Salesforce approve or reject deal support request status:approve dsr:#{_('data.salesforce.updated_custom_object_webhook.Id')} dsr_name:#{_('data.salesforce.updated_custom_object_webhook.Name')} salesrep:#{_('data.salesforce.get_custom_object.get_custom_object(OwnerId>id, sobject_name: User).Name')} message:#{_('data.slack_bot.post_bot_reply.ts')} account: #{_('data.salesforce.get_custom_object1.Name')} approver_slack_handle:#{_('data.salesforce.updated_custom_object_webhook.get_custom_object(Current_approver__c>id, sobject_name: User).Slack_username__c')} salesrep_slack_handle:#{_('data.salesforce.get_custom_object.get_custom_object(OwnerId>id, sobject_name: User).Slack_username__c')}"},
```

### Help text

The help text serves as guidelines or instructions which will be displayed as 'help' on Slack. 

Examples of a help text includes:
* "approve or reject" when talking about a salesforce deal support request
* "create a new case in Salesforce"


### Hide command

When you type @ workbot help in slack, the command will not show up.

### Message drop down bars

Message drop down bars are very similar to buttons. They serve the same function but come in the form of a picklist as opposed to specified buttons.

Use the same text as inserting a button:

```ruby
[{"title":"button title", "command":"button command"}]
```
![Message drop down bar](/assets/images/Workbot/workbot-examples/message-drop.png)
*Message drop down bar*

Note that the button title is the name that will show up on the button and that the button command is a string of words that will do the same thing as a button click.

### Message ID

The message ID refers to the main message on slack. Note that if you use the same message ID, you may overwrite the original.

![Message ID](/assets/images/Workbot/workbot-examples/message-id.png)
*Message on Slack*

### Message type 

While building the recipe for Workbot, you have 3 different message types to chose from: good, warning, danger. These message types are color coded.

Message type good is color coded green, warning is color coded yellow, and message type danger is color coded red.

![Message type](/assets/images/Workbot/workbot-examples/message-type.png)
*Message type drop bar*

### Thread ID 

The thread ID refers to the thread on Slack. If you put in the Thread ID, you will add the message under an existing thread. If you put in the Message ID with no Thread, you will create a new thread. 

![Thread ID](/assets/images/Workbot/workbot-examples/thread-id.png)
*Thread on Slack can be seen when you click on replies*
