# Customize or Create Your Own Workbot commands
You can use Workbot for Slack to send commands to your apps to do things, such as show details for a product or account, show list of opportunities or invoices or tickets, or to create or update existing objects. You are aso able to customise these commands for other apps as well.


First let's understand how a bot handles commands, and then
How it handles Notifications, next see
How to customize a bot, and last
Create one that responds to custom command and interacts with multiple apps


## How does Workbot Work

Every command in workbot is processed using a Workato Recipe. This recipes help determine what Workbot is to do when a certain command is sent to it. That means that you can create your own custom workflows that correspond to a predetermined command.


## Bot Commands
There are 4 elements in the command that workbot is looking out for:
* Addressed to an **Application** (e.g. Salesforce, QuickBooks) 
* A specific **document** type to be processed (e.g. Account, Lead, Invoice)
* a certain **command** to execute - (e.g. Show, Create, Update)
* One or more **parameters**



Once the bot is activated, it follows a set of actions - such as search for a product, lookup the price book for it, and then it posts the response to the Slack channel it came from.

Insert GIF

These are all the fields available in a Post Command reply action. We will get into the details of each field means in the later part of the section.


Here is what the Post Command Reply action's output will look like in Slack : 
Tvr30tfHqlfCwUHweB2nuuLAszLoY_gvrg.png


## Bot Notifications
Bots can also listen for activity inside an app (e.g. Salesforce, Quickbooks) and notify you of events of interest. For example in the example below, it is looking for Closed/Won notifications and sending it to the channel. It will send it to the channel from where the notifications were enabled. You can create our own notifications or modify existing ones to suit your needs.




And the End result of a Post Notification Action in Slack :
s7uLKOhJxqrh3xH8uMyo7sTrxucJ75leMw.png

Learn more about the Post Notification Step here



## Bot Customization
You can customize the existing commands or notifications by just changing the script for the bot, or you could create new commands or notifications.



Creating your own Workbot functions require a minimum required understanding of the Workato platform. To get started, click here.



Multi-App Bots
Creating a completely new command with all your own vocabulary is as easy, and while you are at it, with Workato Recipes you can have your Workbot command to combine data from multiple apps.Here's an example. As a Project manager you may be introduced to new users that work in the same project, and you may need create new them in QuickBooks as new customers. You would then need an automation that create a customer in QuickBooks from a Salesforce Account. 




With Workato recipe, I can now create my own Workbot command that does the sync on demand.  You can specify the command, the App itself, and the values needed to perform the action. In this case, the application will be QBO, my customer as cust and the action as copyfromsf. The work to be done: 
lookup the customer in QuickBooks, 
if not there lookup the account in salesforce and then 
copy the data to create a customer

With the below configuration, calling command copyfromsf cust name:UnitedSF on Slack will now perform the above integration, and creates a new Account in Salesforce only when necessary.
Let's watch how the bot looks and how the command works from Slack.
Here are all the fields available in the **Workbot - New Command** Action
|Field   |Explanation   |
|---|---|
|Command   |Name of the action you want Workbot to perform (e.g. Show, List, Create)   |
|Target application   |App you want Workbot to work with (e.g. Saleseforce, QuickBooks)   |
|Document   |Document associated witht he command (Account, Invoice, Lead)   |   |
|Hint|Displayed as help in Slack|   |
|Command input |Commands can take input parameters. The format for specifying input is parameter name \[optional:true]  \[type:string or date_time]   \[hint:help]   \[sample:John] E.g. customer_id hint:customer ID sample:12789. Specify one parameter per line. No spaces allowed in parameter name. Each parameter will show up as a pill available for mapping in a following step|


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
|Related documents|Commands can be linked to other commands via the document they operate on. Workbot uses this to recommend commands in a conversation. Specify links using this format: document name identifier_1:"App data from data tree" identifier_2:"App data from data tree" E.g. ticket id:"[data tree pill]" Specify one parameter per line. No spaces allowed in document name.


