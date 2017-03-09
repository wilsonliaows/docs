# Workato Actions

Workbot currently supports 2 actions
* Post Command Reply
*
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
