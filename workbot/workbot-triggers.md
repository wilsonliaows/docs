---
title: Workbot triggers
date: 2017-03-30 05:00:00 Z
---

# Workbot triggers
Workbot for Slack allows you to send commands to your apps to do things, such as display details of a customer account or closing opportunities, display a list of invoices or tickets, or create/update existing records.

To do this, you need to build a Workbot trigger to configure the command to Workbot. There are 2 triggers available for Workbot recipes:
- [New command](/workbot/workbot-triggers.md#new-commands-building-custom-commands)
- [New URL mention](/workbot/workbot-triggers.md#new-url-mention)

Every command in Workbot is processed using a Workato recipe. This recipe determines what Workbot does when a command is sent. This means that you can create your own custom workflows that carry out a sequence of actions, given a Workbot command.

## New commands (building custom commands)
When you require Workbot to carry out a workflow, send it a command corresponding to that workflow. This trigger allows you to customize your desired command (e.g. the information you need to provide, what app you will be using) and configure what Workbot should do with data that comes in via the command.

There are 4 elements in the command that Workbot looks out for:
- Addressed to an **application** (e.g. Salesforce, QuickBooks)
- A specific **document** type to be processed (e.g. Account, Lead, Invoice)
- A certain **command** to execute - (e.g. Show, Create, Update)
- One or more **parameters**. Parameters may have the type *file*, which takes as input file content (e.g. text, binary content), that you may upload into Slack. You can use this file in subsequent operations using the Workbot action **[Download Attachment](workbot-actions.md#download-attachment)**.

When creating a recipe with **New Commands** as the trigger, you will see these fields listed in the table below:

|Field   |What they are for   |
|---|---|
|Command   |Name of the action Workbot should perform (e.g. Show, List, Create)|
|Target application   |App that Workbot should work with (e.g. Salesforce, QuickBooks)|
|Document   |Document/record associated with the command (Account, Invoice, Lead)   |
|Hint|Displayed as help in Slack|
|Command input |This is how you configure your expected command input (parameters). The format for specifying input is parameter name `\[optional:true]  \[type:string, date_time or file]   \[hint:help]   \[sample:John]` E.g. `customer_id hint:customer ID sample:12789`. Specify one parameter per line. No spaces allowed in parameter name. Each parameter will show up as a pill available for mapping in a following step.

Trigger has *Context* which contains useful information about command environment.

|Context Field   |Explanation   |
|---|---|
|Team   |Slack Team ID|
|User   |Slack User ID|
|Reply channel   |Slack Channel ID where message was posted|
|User handle| Slack user handle|
|User email | Slack user email |
|User name | Slack user friendly name|
|Thread ID| Thread ID if message was posted to thread or null otherwise|

Triggers may contain **Message ID** in their output. Message ID has a value only when **New command** was triggered by a button action. If command was triggered as result of a manually typed command, this field will be empty.

## New URL mention
When you send a URL in slack, you can have workbot provide certain information into the channel for everyone to see. For example, you can send a Salseforce Lead URL into your sales channel and workbot will automatically send a message showing more information about that particular lead

![workbot triggers](/assets/images/workbot/workbot-trigger/workbot-url.gif)

Simply select the application in the trigger (Currently only Salesforce and Github), and select the Document, and set up your actions as you prefer. By default, giving a salesforce or github URL in a channel workbot is in will trigger a prompt from workbot asking you if you want to show details of the content of the URL that you have sent. CLick on yes to trigger the recipe. You can also edit the recipe in workato if you want to have more or less fields included in the message.

![workbot triggers](/assets/images/workbot/workbot-trigger/workbot-url-mention.gif)