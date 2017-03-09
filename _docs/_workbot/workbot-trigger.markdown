# Workbot Triggers
You can use Workbot for Slack to send commands to your apps to do things, such as show details for a product or account, show list of opportunities or invoices or tickets, or to create or update existing objects. You are aso able to customise these commands for other apps as well.

In order to do this, you will need to build a workbot trigger to configure the command that you will send to workbot. This section. There are currently 2 triggers available for workbot recipes
* New Command
* New URL Mention

Every command in workbot is processed using a Workato Recipe. This recipes help determine what Workbot is to do when a certain command is sent to it. That means that you can create your own custom workflows that correspond to a predetermined command.


## New Commands
When you require workbot to process particular object for you, you will need to send it a command. This trigger allows you to customize your desired command (e.g. the information you need to provide, what app you will be using) by allowing you to configure what workbot is to do with data that comes in. 

There are 4 elements in the command that workbot is looking out for:
* Addressed to an **Application** (e.g. Salesforce, QuickBooks) 
* A specific **document** type to be processed (e.g. Account, Lead, Invoice)
* a certain **command** to execute - (e.g. Show, Create, Update)
* One or more **parameters**

When you create a new recipe with **New Commands** as the trigger, you will see these fields listed in the table below:

|Field   |What they are for   |
|---|---|
|Command   |Name of the action you want Workbot to perform (e.g. Show, List, Create)|
|Target application   |App you want Workbot to work with (e.g. Saleseforce, QuickBooks)|
|Document   |Document associated witht he command (Account, Invoice, Lead)   |
|Hint|Displayed as help in Slack|
|Command input |This is how you configure your expected command input. The format for specifying input is parameter name \[optional:true]  \[type:string or date_time]   \[hint:help]   \[sample:John] E.g. customer_id hint:customer ID sample:12789. Specify one parameter per line. No spaces allowed in parameter name. Each parameter will show up as a pill available for mapping in a following step|

To visualize how each field needs to be filled up, take a look at the example below

A recipe is set up in order to fill up a google sheets for basic order taking (2 columns, Name and Quantity ordered) based on commands coming in to workbot. 
This is how to set up the fields

|Field|Data|
|---|---|
|Cammand|Create|
|Target Application|Google Sheets|
|Document|New Row|
|Hint|Input data for new row|
|Command input|Name  hint:Name sample:John <br> Quantity hint:Quantity sample:12|

Once a command is sent to workbot, he follows a set of actions - such as search for a product, or create a new lead. If you want data to come back to you through workbot, you will have to [set up a **Workbot Command Reply** action]

These are all the fields available in a Post Command reply action. We will get into the details of each field means in the later part of the section.


Here is what the Post Command Reply action's output will look like in Slack : 
Tvr30tfHqlfCwUHweB2nuuLAszLoY_gvrg.png



## Command Customization
You can customize the existing commands or notifications by just changing the script for the bot, or you could create new commands or notifications.



Creating your own Workbot functions require a minimum required understanding of the Workato platform. To get started, click here.



Multi-App Bots
Creating a completely new command with all your own vocabulary is as easy, and while you are at it, with Workato Recipes you can have your Workbot command to combine data from multiple apps.Here's an example. As a Project manager you may be introduced to new users that work in the same project, and you may need create new them in QuickBooks as new customers. You would then need an automation that create a customer in QuickBooks from a Salesforce Account. 



The following table shows what you get for the command reply action, which you can use to notify you that a set task has been completed based on the information that was provided, and can also show you information on that task (e.g. when an object is created, what does it look like, URL of the object, URL of a search result)

|Field   |Explanation   |
|---|---|
|Application|Use the **Application** Pill from the Workato Trigger output for this|
|Reply Channel|Use the **Reply channel** Field from the Workato Trigger output|
|Message|The message that will be displayed|
|Title|Title as seen in Slack message|
|Title Link|Titles can be clickable. Provide URL of a page to view on click|
|Description|Detailed message|
|Buttons|Array of JSON objects. (e.g.\[{"title":"button title", "command":"button command"}])|
|Message Type|Choose a display time for your message (Good=Green, Warning=Amber, Danger=Red)|
|Fields|Fields to display in a grid. One name-value pair per line (e.g. Name:John)
|Image URL|URL of an image that will be displayed below the message
|Related documents|Commands can be linked to other commands via the document they operate on. Workbot uses this to recommend commands in a conversation. Specify links using this format: document name identifier_1:"App data from data tree" identifier_2:"App data from data tree" E.g. ticket id:"[data tree pill]" Specify one parameter per line. No spaces allowed in document name.|

### New URL mention

New URL mention allows you to
