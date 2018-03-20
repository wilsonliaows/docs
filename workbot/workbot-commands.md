---
title: Commands
date: 2018-03-20 10:23:00 Z
---

# Commands
### What is a command?
Did you know that you can command Workbot to do things for you from Slack? Workbot has been helping our users perform all kinds of tasks like:
- [Adding subscribers to a list in Mailchimp](https://www.workato.com/recipes/57785-workbot-command-to-add-subscriber-to-list-in-mailchimp#recipe) by telling Workbot: “**Mailchimp add subscriber**”
- [Getting a breakdown of incident reports from ServiceNow via a pie chart](https://www.workato.com/recipes/146385-incident-report-pie-chart-in-servicenow#recipe) (in Slack!) by telling Workbot: “**ServiceNow report incident**”
- [Creating an issue in Github](https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe) by telling Workbot: “Github create issue”

![Workbot Command trigger diagram](/assets/images/workbot/workbot-trigger/anatomy-of-a-command.gif)
*Anatomy of a Command trigger*

A command is a 3-word phrase users can say to Workbot (in Slack) to trigger recipes. Each command has a name, and can also prompt users for more info if they’re required to perform the recipe actions.

You can find the list of all the input fields for Command below, but for now, let’s focus on **Application**, **Command action**, **Business data** and **User input fields** so we can [create our very first command](/workbot/workbot-commands.md#creating-a-command).

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>New command trigger input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Application</td>
            <td>
               This is the 1st word of the phrase; it defines which application this command relates to, e.g.<br>Github, ServiceNow, etc.
            </td>
        </tr>
        <tr>
            <td>Command action</td>
            <td>
              This is the 2nd word of the phrase; it defines what action to perform onto the **Business data**, e.g.<br>Create, Show, List, etc.
            </td>
        </tr>
        <tr>
            <td>Business data</td>
            <td>
              The 3rd and last word of the phrase; it defines what sort of data to act on e.g. <br>Opportunity, Issue, Invoice, etc.
            </td>
        </tr>
        <tr>
            <td>Input parameters</td>
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
            <td>Hide command</td>
            <td>
              If <b>yes</b>, command will not show up as a button in the Slack channel when the user types app name. <br>If <b>no</b>, command will show up as a button in the Slack channel when the user types the app name.
            </td>
        </tr>
    </tbody>
</table>

### Creating a Command
#### Getting Started
In this exercise, we'll be creating a command that triggers a recipe that creates an issue in Github.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>New command trigger input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Application</td>
            <td>1st part of the Workbot command. The app the Workbot command is working with. Groups the command under this application (when user types app name, command will show up as a button).
            </td>
        </tr>
        <tr>
            <td>Command action</td>
            <td>
              2nd part of the Workbot command. What the Workbot command is doing with the business data, e.g. show, create, update.
            </td>
        </tr>
        <tr>
            <td>Business data</td>
            <td>
              3rd part of the Workbot command. The record that the Workbot command works with, e.g. invoice, customer, ticket.
            </td>
        </tr>
        <tr>
            <td>Input parameters</td>
            <td>
              The data to ask from the user so as to successfully carry out recipe actions, defined in a specific format. Parameters may have the type file, which takes as input file content (e.g. text, binary content), that you may upload into Slack. You can use this file in subsequent operations using the Workbot action <a href="/workbot/workbot-actions.html">Download Attachment.</a>
            </td>
        </tr>
        <tr>
            <td>Help text</td>
            <td>
            Short description of what the command does. Shows up in the Workbot app page under <b>Commands</b>.
            </td>
        </tr>
        <tr>
            <td>Hide command</td>
            <td>
              If <b>yes</b>, command will not show up as a button in the Slack channel when the user types app name. If <b>no</b>, command will show up as a button in the Slack channel when the user types app name.
            </td>
        </tr>
    </tbody>
</table>

#### Creating a command
1. Create a new recipe
2. Under Application, choose Workbot. This allows you to choose Workbox-related triggers.
3. Under Trigger, choose New Command

![Creating a Command](/assets/images/workbot/workbot-trigger/creating-a-command.png)
*Creating a new Command*

#### Defining the command
Workbot understands commands in 3-word phrases in this format:   `application` `command-action` `business-data`.

We’ll be creating a command that tells Workbot: “Github create issue”. 
  1. `Application`: This is the 1st word of the phrase; it defines which application this command relates to. In this case, “Github” is the application we want.
  2. `Command action`: This is the 2nd word of the phrase; it defines what action to perform onto the <business data>. “Create” is what we’ll go with here.
  3. `Business Data`: The 3rd and last word of the phrase; it defines what sort of data to act on e.g. Opportunity, Issue, Invoice, etc. Let’s go with “issue” here.

#### User input fields
Sometimes, Workbot needs more input from the user before it can trigger the recipe and carry out its actions. User input fields let you define each input, along with how they should behave in Slack. Click on **+Add Field** to add user input fields.

![User input fields](/assets/images/workbot/workbot-trigger/user-input-fields.png)
*Add user input fields*

In this case, Workbot will need 3 things from the user before he can create an issue in Github: the issue "title", the “description” of the issue, and the “assignee” to assign the issue to. Hence, `title`, `description` and `assignee` are the 3  user input fields we’ll define.   Since only `name` is required here, we’ll skip configuring the others for now.

![Adding a new user input field](/assets/images/workbot/workbot-trigger/add-new-user-input-field.png)
*Adding a new user input field*

How your command should look like at this point:
![Defining the command](/assets/images/workbot/workbot-trigger/defining-the-command.png)
["*Github Create Issue" recipe*](https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe)*: Command section*

How it will look like on Slack:

![Commands on Slack](/assets/images/workbot/workbot-trigger/commands-on-slack.png)
*Before Workbot can create the issue on Github, we’ll need to define follow-up recipe actions. Also, notice the final message Workbot sent? That’s a [command reply](workbot/workbot-command-reply.md) - we’ll go through that later!*

### Command output datapills 
Command will also provide you with a set of datapills that hold additional info about the command e.g. the user making the command, the channel which the command was made it, etc. The following table details these datapill variables:
![Command datapills](/assets/images/workbot/workbot-trigger/command-datapills.png)
*Command output datatree. Notice the input parameters we included in the earlier step? They’re datapills too!*

And with that, we're done configuring the command! Now it’s time to add a series of actions to this trigger. Remember, we’re trying to get Workbot to create an issue in Github from Slack (link to the top), so we still need to create action steps in the recipe to do that.
