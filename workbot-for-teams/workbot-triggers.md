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

For example, to create an incident in ServiceNow, you may want to prompt users for additional info like **Urgency**, **Summary** and **Description**. By adding **Urgency**, **Summary** and **Description** as parameters, Workbot will open a task module and prompt the user for each parameter.

![Task module](/assets/images/workbot-for-teams/task-module.png)
*Workbot can ask users for info if you specify additional parameters in your command*

Users can also skip the prompts by supplying the parameters together with the command.

![Command with in-line parameters](/assets/images/workbot-for-teams/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters Urgency, Summary and Description*

#### Defining parameters
![Parameters configured](/assets/images/workbot-for-teams/parameters-configured.png)
*3 parameters configured for the 'newissue' command*

When you define parameters, Workbot opens a task module to collect each parameter's value from the user.

To add a parameter, click on the **+Add parameter** button under the **Parameters** section of a Workbot command trigger.

![Adding a parameter](/assets/images/workbot-for-teams/adding-a-parameter.png)
*Adding a new parameter*


By configuring the parameter, you can control how the users interact with the parameter in the task module.

![Parameter form empty](/assets/images/workbot-for-teams/parameter-form-filled.png)
*Configuring a parameter*


The table below describes in further detail what each parameter configuration field does.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>
              Name of the parameter. This is the name you use to reference the parameter in:<br>
              <ul>
                <li>
                  In-line commands</li><br><img src="/assets/images/workbot-for-teams/workbot-command-example.png"></img>
                </li>
                <li>
                  Choice parameters<br><img src="/assets/images/workbot-for-teams/choice-param-recipe.png"></img>
                </li>
                <li>
                  Additional parameters in buttons<br><img src="/assets/images/workbot-for-teams/button-command.png"></img>
                </li>
            </td>
        </tr>
        <tr>
            <td>Data type</td>
            <td>
              Data type of the parameter. Currently only supports <code>string</code> and <code>date</code> data types. The data type will influence the input type used to collect this parameter in task modules. For example, if <code>Date</code> is chosen, a date picker will be used to collect the parameter in task modules.
            </td>
        </tr>
        <tr>
            <td>Optional?</td>
            <td>
              If set to <b>Yes</b>, users can skip this input. If set to <b>No</b>, users are required to provide this input.
            </td>
        </tr>
        <tr>
            <td>Hint</td>
            <td>
              Hints are displayed just below the input field  for users when filling in the input field.
            </td>
        </tr>
        <tr>
            <td>Example input value</td>
            <td>
              Displays the example input value when the field is empty in the task module. Useful in giving the user a sense of what the requested input should look like, as well as the desired format.
            </td>
        </tr>
        <tr>
            <td>Visible?</td>
            <td>
              If <b>Yes</b>, command will not show up in task modules. Useful if the parameter is a record ID that is not human-readable. Defaults to <b>No</b>.
            </td>
        </tr>
        <tr>
            <td>Options</td>
            <td>
              Comma-separated list of options, e.g. <b>APPROVED, REJECTED, EXPIRED</b>. If the display name and athe value are different, separate the two by a colon, e.g. <b>High:1,Medium:2,Low:3</b>.
            </td>
        </tr>
    </tbody>
</table>

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

# Learn more
- [Using Workbot for MS Teams](/workbot-for-teams/using-workbot-for-teams.md)
- [Workbot actions](/workbot-for-teams/workbot-actions.md)
- [Workbot buttons, pick lists, and task modules](/workbot-for-teams/buttons-choices-task-modules.md)
