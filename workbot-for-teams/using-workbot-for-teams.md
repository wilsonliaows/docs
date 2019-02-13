---
title: Using Workbot for Teams
date: 2018-03-20 10:23:00 Z
---

# Using Workbot for Teams
## Carrying out Workbot commands
You can perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities) by sending Workbot commands from within Teams.

![Command example](/assets/images/workbot-for-teams/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters in Teams, then receiving a response*

A Workbot command is a special trigger you can define to run a specific recipe. Commands must be unique, one word, and contain no spaces. Commands can also take in additional parameters, but more on that later.

![Command recipe](/assets/images/workbot-for-teams/command-recipes.png)
*A typical Workbot command recipe*

In Teams, Workbot commands can be invoked in 3 distinct ways:
1. Sending the command in a direct message to Workbot or in a channel (requires tagging Workbot i.e. `@workbot your_command`)<br>
![Command recipes](/assets/images/workbot-for-teams/create-ticket-command.png)
<br>
2. Sending the command when a button is clicked<br>
![Command recipes](/assets/images/workbot-for-teams/create-ticket-button.png)
<br>
3. Sending the command when a choice is submitted<br>
![Command recipes](/assets/images/workbot-for-teams/create-ticket-choice.png)
<br>

>To learn more about how buttons & choices work, see [Buttons & choices](/workbot-for-teams/buttons-and-choices.md).

Commands can also prompt users for additional parameters. For example, to create a new ServiceNow incident, the user should at least provide the summary and description of the incident. In this case, you can add 2 parameters; `summary` & `description`, and Workbot will prompt the user for them when the command is invoked.

![Parameter prompts](/assets/images/workbot-for-teams/workbot-params-prompt.png)
*Workbot can ask users for info if you specify additional parameters in your command*

## Posting notifications
Workbot can also be used to notify you when an event occurs in your apps.

Generally, Workbot notification recipes follow this structure:
(insert workflow here)
[Trigger] New event in app --> [Action] Post message in Teams

## New command trigger


### Creating a Command
#### Getting Started
In this exercise, we'll be creating a command that triggers a recipe that creates an issue in Github.

#### Creating a command
1. Create a new recipe
2. Under Application, choose Workbot. This allows you to choose Workbox-related triggers.
3. Under Trigger, choose New Command

![Creating a Command](/assets/images/workbot/workbot-trigger/creating-a-command-1.png)
*Creating a new Command*

#### Defining the command
Workbot understands commands in 3 parts: `app` `action` `action-data`.

We’ll be creating a command that tells Workbot to **Create a Github issue**”. Because Workbot has built-in Natural Language Understanding (NLU) capabilities, Workbot is flexible with how the command is phrased. You have the freedom to type in the commands in any sequence that's most natural to you, e.g. "create an issue in Github"
  1. `app`: This is the 1st word of the phrase; it defines which application this command relates to. In this case, “Github” is the application we want.
  2. `action`: This is the 2nd part of the command; it defines what action to perform onto the `action data`. “Create” is what we’ll go with here.
  3. `action data`: The 3rd part of the command; it defines what sort of data to act on e.g. Opportunity, Issue, Invoice, etc. Let’s go with “issue” here.

#### Command input fields
Sometimes, Workbot needs more input from the user before it can trigger the recipe and carry out its actions. Command input fields let you define each input, along with how they should behave in Slack. Click on **+ Add command input** to add command input fields.

![Command input fields](/assets/images/workbot/workbot-trigger/command-input-fields-1.png)
*Add command input fields*

In this case, Workbot will need 3 things from the user before he can create an issue in Github: the issue "title", the “description” of the issue, and the “assignee” to assign the issue to. Hence, `title`, `description` and `assignee` are the 3 command input fields we’ll define. Since only `name` is required here, we’ll skip configuring the others for now.

![Adding a new command input field](/assets/images/workbot/workbot-trigger/add-new-command-input-field-1.png)
*Adding a new user input field*

How your command should look like at this point:
![Defining the command](/assets/images/workbot/workbot-trigger/defining-the-command-1.png)
<i>**Github Create Issue recipe**: Command section</i>

How it will look like on Slack:

![Commands on Slack](/assets/images/workbot/workbot-trigger/commands-on-slack-1.png)
*Before Workbot can create the issue on Github, we’ll need to define follow-up recipe actions. Also, notice the final message Workbot sent? That’s a [command reply](https://docs.workato.com/workbot/workbot-command-reply.html) - we’ll go through that later!*

### Command output datapills
Command will also provide you with a set of datapills that hold additional info about the command e.g. the user making the command, the channel which the command was made it, etc. The following table details these datapill variables:
![Command datapills](/assets/images/workbot/workbot-trigger/command-datapills-1.png)
*Command output datatree. Notice the command input parameters we included in the earlier step? They’re datapills too!*

And with that, we're done configuring the command! Now it’s time to add a series of actions to this trigger. Remember, we’re trying to get Workbot to create an issue in Github from Slack (link to the top), so we still need to create action steps in the recipe to do that. Next, we'll take a look at [how to create a Command Reply](/workbot/workbot-command-reply.md).
