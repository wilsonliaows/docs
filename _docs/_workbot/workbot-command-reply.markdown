## Command Reply
You can use Workbot for Slack to send commands to your apps to do things, such as show details for a product or account, show list of opportunities or invoices or tickets, or to create or update existing objects. You are aso able to customise these commands for other apps as well.


First let's understand how a bot handles commands, and then
How it handles Notifications, next see
How to customize a bot, and last
Create one that responds to custom command and interacts with multiple apps

How does this differs from 'Post Notification'?
Post notifications action is a broadcast action, and that means Workbot will post a status on all channels where Workbot notification is turned on. However, the Workbot **Post command reply** works together with New Command Trigger, giving the user the ability to reply an earlier command with a new command.

## How does Workbot Work

Every command in workbot is processed using a Workato Recipe. This recipes help determine what Workbot is to do when a certain command is sent to it. That means that you can create your own custom workflows that correspond to a predetermined command.


### Bot Commands
There are 4 elements in the command that workbot is looking out for:
* Addressed to an **Application** (e.g. Salesforce, QuickBooks) 
* A specific **document** type to be processed (e.g. Account, Lead, Invoice)
* a certain **command** to execute - (e.g. Show, Create, Update)
* One or more **parameters**

The Fields
Here are a list of all Available input fields for a post command reply Action : 

Application
gy8Jlj_mwZv05KJHxY5lX32Dk1MQRwHe7w.png
The Name of the application that will be called for. You may input your own applicaton name, but if this is a reply to a WorkBot Command trigger, use the data pill Application from the trigger's App Data.
hTWzLEcbXE0BQp8fqnHcoUYBrKDt5P0-eg.png

Reply channel
Unless specific, just like Application field, the ideal value to insert here will be the Reply Channel from the New Command trigger output: This ensure that the reply will appear on the same channel as the command.

Message
Pretty Straightforward, simply insert what would you like to reply the user with.

Title
Title will be on the top of the message. 

Title link
Providing a link to the title enables the message to be clickable. Useful for opening a new tab in your browser leading to the actual data enquiried or created.

Description
Description will be the smaller prints of a Slack Message. Note in the screenshot below do not have any Description in it, Hence the field area took its place.

Fields
This is where App Data coming from other steps will usually end up at, as they will be presented to the Slack user here. Note that there is a format to this : Each line should only contain a pair of name-value in the message. Example below : 
AQSXEohg6McMmarXC1gYNCDJcqrh7jlSMQ.png


Image URL
A URL to an image that will be displayed on your Slack message. Usually used for displaying the application's logo unless needed.


Finally, here's a screenshot to demonstrate what each field represents in the form of a Slack command reply
rSjniP1prLrCarI6fditl1yXTtuurWts9A.jpg



Buttons
In recent updates, Slack introduces new user interface call Buttons. Buttons are clickable objects that appear in your Slack that performs a certain functions. With Workato integrations, you can now create your own buttons. Below are some examples of how these buttons look in Slack itself :
71tNA-53ZJrVDC799BN0L2dcJ8TBUmorzw.png
Buttons can be used to start broadcasting recipes



7WrSzPjrYoK9UzkEf3I8T_GSm9wqp7rZIQ.png
Or display a list of actions available to the user



Message Type
Message type shows the different colors available to a Slack response. Currently the available colors are for these status : 


Good - Green
oCxlEGSMTIf6N0aANPQty38RR5qaCsY93g.png


Warning - Orange/Yellow

 
S4O3lwMd8tbyyG-K8nav7d1pqgk2QQqbOw.png


Danger - Red
6jleOu8FoTgFJtrcHroFIFZO0wdSUmgtig.png




Related Documents
Some commands allows it to relate to other Workbot recipes of that works of the same documet type. Documents are labels used for naming the type of objects being processed. These documents resides only in Workbot triggers, as shown here : 

When configuring the trigger, you will be able to choose from a list of default documents, or enter your own custom document name.
H0Wl55mAymVmxYlQj2QDVnIeITM52MFuaQ.png


Now that we understand where doucments come from, what do we do with them?
With Related Documents field, a user will be able to launch another workbot recipe simply by naming the Document name and required parameter in this field. Allowing a more modular, cleaner, and manageable Workbot recipe. 

Here's an example of how you can specify a value that links to a Salesforce Account with the parameter ID
BRhdqpjE3ddZGhjbv_9LJrIsFLE9VbwqsA.png




Related Documents in action
Once they are linked, Workbot will use this to suggest the next command that can be executed. In this screenshot, there are two available commands that can be called after the first : 
ealvohNGTN4GSFu429FEXAj4ixYjUSvfXw.png
