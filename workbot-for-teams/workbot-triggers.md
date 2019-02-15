---
title: Workbot for Teams triggers
date: 2017-03-30 05:00:00 Z
---

# Workbot command trigger
Workbot commands allow you to trigger recipes from Teams. These recipes can then perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities).

This means you can from perform actions in your apps from within Teams!

![Command example](/assets/images/workbot-for-teams/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters in Teams, then receiving a reply*

When a command is sent to Workbot in Teams, it will trigger the Workbot recipe and execute its actions.

![Command recipe](/assets/images/workbot-for-teams/command-recipes.png)
*A Workbot recipe with a command trigger*

## Configuring the command
![New command](/assets/images/workbot-for-teams/new-command.png)
*Example 'newissue' command*

### Input fields
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
              Name of the command.
            </td>
        </tr>
        <tr>
            <td>Parameters</td>
            <td>
              Parameter can store additional data that can be used as datapills in follow-up recipe actions.
            </td>
        </tr>
        <tr>
            <td>Command hint</td>
            <td>
            Display this instead of command name in response to <b>help</b> messages.
            </td>
        </tr>
        <tr>
            <td>Hidden command</td>
            <td>
              If <b>Yes</b>, command will not show up as a command in <b>help</b> messages. Defaults to <b>No</b>.
            </td>
        </tr>
    </tbody>
</table>

### Command name
Workbot commands can invoke their recipes by:
1.  Sending the command name in a direct message to Workbot, e.g. **newissue**
2. Sending the command name in a channel and tagging Workbot, e.g. **@workbot newissue**
3. Submitting a button with the command name configured:
![Command name in button](/assets/images/workbot-for-teams/button-command.png)
*A button can be configured to invoke a Workbot command of another recipe*

![Command name in button example](/assets/images/workbot-for-teams/button-submission.png)
*The 'Create issue' button invokes the 'newissue' command and executes the recipe when submitted*

### Parameters
Each parameter can store additional data that can be used as datapills in follow-up recipe actions.

For example, to create an incident in ServiceNow, you may want to prompt users for additional info like **Urgency**, **Summary** and **Description**. By adding **Urgency**, **Summary** and **Description** as parameters, Workbot can prompt users for each parameter value.

![Parameters](/assets/images/workbot-for-teams/parameters.png)
*Parameters in the 'newissue' command*

![Param prompt](/assets/images/workbot-for-teams/workbot-params-prompt.png)
*Workbot prompting for parameter values*

Users can also skip the prompts by supplying the parameters together with the command.

![Button command](/assets/images/workbot-for-teams/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters Urgency, Summary and Description*

#### Advanced methods to pass parameter values
Parameter values can also be passed by buttons and task modules as they invoke a Workbot command. Typically, you use parameters to pass context to the invoked Workbot recipe.

![Button with params example](/assets/images/workbot-for-teams/button-with-params.png)
*The 'Re-open issue' button not only invokes the 'reopen_issue' command - it's also passing parameters!*

![Button with params recipe](/assets/images/workbot-for-teams/button-with-params-recipe.png)
*The 'Re-open issue' button is configured to pass the 'sys_id' so that the 'reopen_issue' recipe knows which issue to re-open*

Another way to pass a parameter is by using a pick list **Choice parameter**.

![Choice param recipe](/assets/images/workbot-for-teams/choice-param-recipe.png)
*The choice parameter will take its value from a choice (if it's chosen)*

The choice parameter is passed when a button from the same message is submitted (along with any other parameters the button may have).

![Choice param](/assets/images/workbot-for-teams/choice-param.png)
*The 'Next' button also passes the 'opportunity_id' of 'Google' onto the command recipe that it invokes*
