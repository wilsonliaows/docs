# Workbot Triggers
You can use Workbot for Slack to send commands to your apps to do things, such as show details for a product or account, show list of opportunities or invoices or tickets, or to create or update existing objects. You are aso able to customise these commands for other apps as well.

In order to do this, you will need to build a workbot trigger to configure the command that you will send to workbot. This section. There are currently 2 triggers available for workbot recipes
* New Command
* New URL Mention

Every command in workbot is processed using a Workato Recipe. This recipes help determine what Workbot is to do when a certain command is sent to it. That means that you can create your own custom workflows that correspond to a predetermined command.


## New Commands (Building Custom Commands)
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
|Command|Create|
|Target Application|Google Sheets|
|Document|New Row|
|Hint|Input data for new row|
|Command input|Name  hint:Name sample:John <br> Quantity hint:Quantity sample:12|

Once you have confirgured the trigger as above, you will need to set up the google sheets action **Add New Row** actions. You can also add in an extra (optional) step to notify you when the row is created. Simply add a Workbot **Post Command Reply** action and set up the first 2 fields as instructed and your message in the 3rd field.

In this case, there are 2 pieces of data that need to be provided as shown in the **Command Input** field, namely Name and Quantity. Thus, the command in this case would be **Google Sheets** > **Create New Row** > **\<Name>** > **\<Quantity>** 
Take a look at the GIF below for a better understanding of how to use the command.

![command-example](/_uploads/Workbot/workbot-trigger/workbot-trigger-example.gif)

With this simple example, you should now be able to build your own workbot command recipe. 

## New URL mention

Click on this link to learn about workbot actions

