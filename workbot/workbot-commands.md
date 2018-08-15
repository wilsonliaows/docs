---
title: Commands
date: 2018-03-20 10:23:00 Z
---

# Creating a Command

Did you know that you can command Workbot to do things for you from Slack? Workbot has been helping our users perform all kinds of tasks like:
- [Adding subscribers to a list in Mailchimp](https://www.workato.com/recipes/57785-workbot-command-to-add-subscriber-to-list-in-mailchimp#recipe) by telling Workbot: “**Mailchimp add subscriber**”
- [Getting a breakdown of incident reports from ServiceNow via a pie chart](https://www.workato.com/recipes/146385-incident-report-pie-chart-in-servicenow#recipe) (in Slack!) by telling Workbot: “**ServiceNow report incident**”
- [Creating an issue in Github](https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe) by telling Workbot to "**Create a Github issue**”

![Workbot Command trigger diagram](/assets/images/workbot/workbot-trigger/anatomy-of-a-command-1.gif)
*Anatomy of a Command trigger*

A command consists of 3 parts; <code>app</code>, <code>action</code>, <code>action data</code> - and can be used to trigger recipes. You can also prompt users for more info if they’re required to perform the recipe actions via **Command input fields**.

You can find the list of all the input fields for Command below, but for now, let’s focus on **App**, **Action**, **Action data** and **Command input fields** so we can [create our very first command](/workbot/workbot-commands.md#creating-a-command).

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>New command trigger input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>App</td>
            <td>
               This is the 1st part of the command; it defines which application this command relates to, e.g.<br>Github, ServiceNow, etc.
            </td>
        </tr>
        <tr>
            <td>Action</td>
            <td>
              This is the 2nd part of the command; it defines what action to perform onto the <b>App data</b>, e.g.<br>Create, Show, List, etc.
            </td>
        </tr>
        <tr>
            <td>Action data</td>
            <td>
              The 3rd and last part of the command; it defines what sort of data to act on e.g. <br>Opportunity, Issue, Invoice, etc.
            </td>
        </tr>
        <tr>
            <td>Command input fields</td>
            <td>
              The data to ask from the user so as to successfully carry out recipe actions, defined in a specific format. Parameters may have the type:<code>file</code>, which takes file content as input (e.g. text or binary content) that you may upload into Slack. <br>You can use this file in subsequent operations using the Workbot action <a href="/workbot/workbot-actions.html">Download Attachment.</a>
            </td>
        </tr>
        <tr>
            <td>Help text</td>
            <td>
            Short description of what the command does. Shows up in the Workbot app page under <b>Commands</b>.
            </td>
        </tr>
        <tr>
            <td>Hidden command</td>
            <td>
              If <b>yes</b>, command will not show up as a button in the Slack channel when the user types app name. <br>If <b>no</b>, command will show up as a button in the Slack channel when the user types the app name.
            </td>
        </tr>
    </tbody>
</table>

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
