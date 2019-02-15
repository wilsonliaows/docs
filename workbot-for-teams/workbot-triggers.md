---
title: Workbot for Teams triggers
date: 2017-03-30 05:00:00 Z
---

# Workbot for Teams triggers
## Workbot command trigger
Workbot commands allow you to perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities) from within Teams.

![Command example](/assets/images/workbot-for-teams/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters in Teams, then receiving a reply*

In a recipe, a Workbot command is a trigger you can use to start your workflow.
![Command recipe](/assets/images/workbot-for-teams/command-recipes.png)
*A typical Workbot command recipe*

When the command is sent to Workbot in Teams, it will trigger the recipe and execute its actions.

### Configuring the command
![New command](/assets/images/workbot-for-teams/new-command.png)
*Example 'newissue' command*

#### Input fields
The table below lists the input fields in the trigger and what they do.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Command name</td>
            <td>
              Name of the command. Can be invoked by: <br>
              <ol type="a">
                <li>
                  Sending the command name in a direct message to Workbot, e.g. <b>newissue</b>
                </li>
                <li>
                  Sending the command name in a channel and tagging Workbot, e.g. <b>@workbot newissue</b>
                </li>
                <li>
                  Submitting a button with the command name configured:<br><img src="/assets/images/workbot-for-teams/button-command.png"></img><br><i>Example button in post message action</i><br><br><img src="/assets/images/workbot-for-teams/button-submission.png"></img><br><i>Submitting this button invokes the 'newissue' command and executes the 'newissue' command recipe.</i></li>
                <li>
                  Submitting a choice with the command name configured:<br><img src="/assets/images/workbot-for-teams/choice-command.png"></img><br><i>Example choice in post message action</i><br><br><img src="/assets/images/workbot-for-teams/choice-submission.png"></img><br><i>Example choice in post message</i></li>
            </td>
        </tr>
        <tr>
            <td>Parameters</td>
            <td>
              Prompts the user for input for each parameter specified. These parameters can be used as pills in follow-up recipe actions. For example, to create an incident
            </td>
        </tr>
        <tr>
            <td>Command hint</td>
            <td>
            Short description of what the command does. Shows up in the Workbot app page under <b>Commands</b>.
            </td>
        </tr>
        <tr>
            <td>Hidden command</td>
            <td>
              If <b>yes</b>, command will not show up as a button in the Slack channel when the user types app name. If <b>no</b>, command will show up as a button in the Slack channel when the user types app name.
            </td>
        </tr>
    </tbody>
</table>

#### Workbot command format
The Workbot command is created by piecing 3 elements together, the `app`, `action` and `action data`:

```
app action action-data
```

In the following case, the application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore:

```
Salesforce show account
```

#### Workbot command input parameters format
The **command input fields** field lets you decide what data is needed from the user to carry out the recipe actions successfully.

Each input parameter has to be provided in the following format:

```
param_name optional:true prompt:false type:string hint:hint_to_help_users sample:example_data
```

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Command input fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>Required. Needs to be a single word.</td>
        </tr>
        <tr>
            <td>Optional</td>
            <td>
              Not required. If not defined, defaults to <code>optional:true</code>. Input parameter will be optional.
            </td>
        </tr>
        <tr>
            <td>Prompt</td>
            <td>
              Not required. If not defined, defaults to <code>prompt:false</code>. No prompt will be generated.
            </td>
        </tr>
        <tr>
            <td>Data Type</td>
            <td>
              Not required. If not defined, defaults to <code>type:string</code>. Possible types are <code>string</code>, <code>boolean</code>, <code>number</code>, <code>file</code>, and <code>date_time</code>.
            </td>
        </tr>
        <tr>
            <td>Hint</td>
            <td>
            Not required. If not defined, defaults to no hint.
            </td>
        </tr>
        <tr>
            <td>Example</td>
            <td>
              Not required. If not defined, defaults to no sample data.
            </td>
        </tr>
    </tbody>
</table>


In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user.

```
name optional: false prompt: false type: string hint: Exact account name sample: IBM
```

The configured command input fields will be displayed as follow up questions for the user after the Workbot command.

![Salesforce show account input parameters](/assets/images/workbot/workbot-trigger/salesforce-show-account-input-params-display.png)
*A command input field displayed on Slack*

### New command trigger output datapills
The **New command** trigger also provides a set of datapill variables as that holds data about the command, such as the user making the command, the channel the command was made it, etc. The following table details these datapill variables.

![New command trigger output datatree](/assets/images/workbot/workbot-trigger/new-bot-command-trigger-datatree.png)
*New bot command output datatree*

The following table lists the output datapills from the trigger, and what data each field contains.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>New command trigger datapill variables</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>App</td>
            <td>
              1st part of the Workbot command. The app that the Workbot command is working with e.g. <br><code>Salesforce</code>
            </td>
        </tr>
        <tr>
            <td>Action data</td>
            <td>
              2nd part of the Workbot command. What the Workbot command is doing with the action data, e.g.<br><code>show</code>, <code>create</code>, <code>update</code>.
            </td>
        </tr>
        <tr>
            <td>Action</td>
            <td>
              3rd part of the Workbot command. The record that the Workbot command works with, e.g.<br><code>invoice</code>, <code>customer</code>, <code>ticket</code>.
            </td>
        </tr>
        <tr>
            <td>Message ID</td>
            <td>
              The epoch time when the Workbot command was sent. Can be used to populate <b>Thread ID</b> input fields to create a thread under this Workbot command message.<br> Can also be used in <b>Message to update</b>, to overwrite a previously posted message.
            </td>
        </tr>
        <tr>
            <td>Context</td>
            <td>
            Slack data about this Workbot command, e.g. the team and channel it was posted in, the user who posted it, ID of the thread it was in, if applicable.
            </td>
        </tr>
        <tr>
            <td>Command input parameters</td>
            <td>
              Data obtained from the user by asking follow up questions to their Workbot command.
            </td>
        </tr>
    </tbody>
</table>


The following table holds additional information about the **Context** object and the data it correspondingly holds.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Context datapill variables</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Team</td>
            <td>Slack team ID</td>
        </tr>
        <tr>
            <td>User</td>
            <td>Slack user ID</td>
        </tr>
        <tr>
            <td>Reply Channel</td>
            <td>
            Slack channel ID where message was posted
            </td>
        </tr>
        <tr>
            <td>User handle</td>
            <td>Slack user handle</td>
        </tr>
        <tr>
            <td>User e-mail</td>
            <td>Slack user email</td>
        </tr>
        <tr>
            <td>User name</td>
            <td>Slack user friendly name</td>
        </tr>
        <tr>
            <td>Thread ID</td>
            <td>
              Thread ID if message was posted to thread, <code>null</code> otherwise
            </td>
        </tr>
    </tbody>
</table>

Triggers may contain **Message ID** in their output. Message ID has a value only when **New command** was triggered by a button action. If command was triggered as result of a manually typed command, this field will be empty.

### Example: Salesforce show account command
In the following gif, we're chatting directly with Workbot via a DM. When we type in the app name "Salesforce", Workbot generates a list of available commands and displays them as buttons. The command can also be manually typed into the DM as `Salesforce show account`.

![Salesforce show account command](/assets/images/workbot/workbot-trigger/salesforce-show-account-command.gif)
*Salesforce show account command*

When the `Salesforce show account` command is called, either via the button click or the typed command, a corresponding recipe with a Workbot for Slack **new command trigger** will trigger. This recipe will have a Workbot **New command** trigger that listens specifically to the command `Salesforce show account`. The [pre-built Workbot for Slack recipe](https://www.workato.com/recipes/57662) that does this can be found below.

![Salesforce show account command recipe](/assets/images/workbot/workbot-trigger/salesforce-show-account-recipe.png)
*Salesforce show account command recipe [Example recipe](https://www.workato.com/recipes/57662)*

The trigger configuration for the `Salesforce show account` command is as follows.

![Salesforce show account command trigger configuration 1](/assets/images/workbot/workbot-trigger/salesforce-show-account-config-1.png)

![Salesforce show account command trigger configuration 2](/assets/images/workbot/workbot-trigger/salesforce-show-account-config-2.png)
*Salesforce show account command trigger configuration*

We know that Workbot commands are created by piecing 3 elements together, the `app`, `action` and `action data`. In this case, application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore `Salesforce show account`.

The **command input parameters** field lets you decide what data is needed from the user to carry out the recipe actions successfully. In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user, so we define the parameter as follows:

```
name optional: false prompt: false type: string hint: Exact account name sample: IBM
```

The configured command input parameters will be displayed as follow up questions for the user after the Workbot command.

![Salesforce show account input parameters](/assets/images/workbot/workbot-trigger/salesforce-show-account-input-params-display.png)
*Input parameters display on Slack*

When the user has finished providing all the required input, the recipe actions will be executed. In this case, the recipe action was to display the Salesforce account details as a message attachment in a grid format.

![Salesforce show account command results](/assets/images/workbot/workbot-trigger/salesforce-show-account-results.png)
*Salesforce show account command results*

## New URL mention
When you send a URL in Slack, you can have Workbot provide certain information into the channel for everyone to see. For example, you can send a Salesforce lead URL into your sales channel and workbot will automatically send a message showing more information about that particular lead.

![workbot triggers](/assets/images/workbot/workbot-trigger/workbot-url.gif)

Simply select the application in the trigger (Currently only Salesforce and Github), and select the Document, and set up your actions as you prefer. By default, giving a Salesforce or Github URL in a channel that Workbot is in will trigger a prompt from Workbot asking you if you want to show details of the content of the URL that you have sent. Click on yes to trigger the recipe. You can also edit the recipe in Workato if you want to have more or less fields included in the message.

![workbot triggers](/assets/images/workbot/workbot-trigger/workbot-url-mention.gif)
