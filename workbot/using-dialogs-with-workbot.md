---
title: Using Dialogs with Workbot
date: 2018-04-26 00:00:00 Z
---

# Using Dialogs with Workbot
Workbot can be used to invoke Slack Dialogs; an awesome Slack feature that allows you to elicit info in a more interactive way.

![Dialog gif](/assets/images/workbot/workbot-dialogs/dialog-gif.gif)

Workbot can invoke dialogs to, say, collect info from a user to open a ticket in Github, amongst other things.

## Concept
To create a dialog workflow, you need 3 recipes to perform 3 high-level functions:
1. **Invoke dialog**
When triggered, the action in this recipe ***invokes*** a dialog.

2. **Post dialog**
When triggered, the action in this recipe ***configures*** the dialog.

3. **Execute actions**
When the dialog is submitted, the actions in this recipe ***executes*** the follow-up actions.

![Dialog diagram](/assets/images/workbot/workbot-dialogs/anatomy-of-a-dialog.png)

From a recipe standpoint, the **Invoke dialog** recipe triggers the **Post dialog** reicpe, which in turn triggers the **Execute actions** recipe.

This is because invoking dialogs requires `Trigger ID`, something that's only generated from button or menu option click events on Slack.

Check out these simple recipes to see dialogs in action: [Invoke dialog](https://www.workato.com/recipes/673215-1-invoke-dialog#recipe), [Post dialog](https://www.workato.com/recipes/673218-2-configure-dialog#recipe), and [Execute actions](https://www.workato.com/recipes/673219-3-actions#recipe)

### Invoking dialogs

To invoke dialogs, use either the **Post command reply** or **Post message** Workbot actions.

Regardless of which Workbot action you choose, a dialog can be invoked using 2 methods:

#### 1. Buttons

![Buttons](/assets/images/workbot/workbot-dialogs/invoke-with-buttons.png)

The **Submit button command** field is especially important - this command will trigger the recipe that posts the dialog (i.e. the **Invoke dialog** recipe).

![Submit button command](/assets/images/workbot/workbot-dialogs/submit-button-command.png)

#### 2. Menu options

![Menu options](/assets/images/workbot/workbot-dialogs/invoke-with-menu-options.png)

The **Submit menu option command** field is especially important - this command will trigger the recipe that posts the dialog (i.e. the **Invoke dialog** recipe)

![Submit menu option command](/assets/images/workbot/workbot-dialogs/submit-menu-option-command.png)

Clicking either buttons or menu options in Slack triggers an event that comes with a `Trigger ID`, a parameter necessary for invoking dialogs.

In the example above, both the button and the menu option sends a Workbot command to `collect issue details`.

### Posting a dialog
To ensure that the dialog in this recipe is the one to be invoked, the submit button or menu option commands in the **Invoke dialog** recipe must map to the **Post command** trigger in this post dialog recipe.

![Mapping invocation with dialog](/assets/images/workbot/workbot-dialogs/mapping-invocation-to-dialog.png)

The **Post dialog** recipe uses the Workbot **Post command** trigger to receive commands from the buttons or menu options in the **Invoke dialog** recipe.

In this example **Post dialog** [recipe](https://www.workato.com/recipes/673218-2-configure-dialog#jobs), both the submit button and submit menu option commands `collect issue details` are identical to the **Post dialog** trigger `collect issue details`.

![Mapping invocation with dialog](/assets/images/workbot/workbot-dialogs/mapping-invocation-to-dialog-2.png)

#### Setting up the post dialog
Use the **Post dialog** action to set up the post dialog.

The following table lists the available fields in the **Post dialog** action.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Field</th>
            <th>Explanation</th>
            <th>What goes in here</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Trigger ID</td>
            <td>The ID of a submit button or submit menu option triggered event.
            </td>
            <td>Use the <kbd>Trigger ID</kbd> pill from <b>Post command</b> trigger.
        </tr>
        <tr>
            <td>Callback ID</td>
            <td>
              Identifier for the dialog. Maximum length of 255 characters.
            </td>
            <td>
            Pass command input values from the <b>Submit button</b> or <b>Submit menu option</b> commands defined in the recipe that <i>invokes</i> the dialog. <br><br>Ensure that the parameter names in the dialog-invoking recipe match the command input fields in the recipe that <i>posts</i> the dialog.
            </td>
        </tr>
        <tr>
            <td>Dialog title</td>
            <td>The title of the invoked dialog. Maximum length of 24 characters.</td>
            <td>
              Explain the purpose of the dialog, e.g.<br><br> <i>Create a ticket</i><br><br>
        </tr>
        <tr>
            <td>Submit button label</td>
            <td>
              Text label to display on the dialog <b>Submit</b> button. Single word input only.
            </td>
            <td>Defaults to <b>Submit</b> when left blank. All dialogs will have a <b>Cancel</b> button by default.
            </td>
        </tr>
        <tr>
            <td>Submit button command</td>
            <td>Workbot command to execute when Slack user clicks on the <b>Submit</b> button in the dialog
            </td>
            <td>Use a Workbot command that matches the <b>Post command</b> trigger of the recipe to execute.
            </td>
        </tr>
        <tr>
            <td>Dialog form fields</td>
            <td>
              JSON generated from the command input fields of recipe that is executed from the <b>Submit button command</b> above. Max of 5 fields</td>
            <td>
              This defines the fields that appear in the dialog. <br><br>Modify this to include hints, error handling, picklist options, etc. for your dialog.<br><br>Do not change the "name" values as they should match that of the command input fields of the recipe executed from the <b>Submit button command</b> above. See the example JSON from the <b>Post dialog</b> <a href='https://www.workato.com/recipes/673218-2-configure-dialog#recipe'> recipe.
            </td>
    </tbody>
</table>

The **Submit button command** field is especially important - this command will trigger the recipe that executes the actions (i.e. the Execute actions recipe).

### Executing actions

To ensure that this recipe is the one to be executed by the dialog, the submit button command in the **Post dialog** recipe must map to this recipe's **Post command** trigger.

![Mapping dialog to another recipe](/assets/images/workbot/workbot-dialogs/mapping-dialog-to-another-recipe.png)

The last recipe (responsible for executing follow-up actions) uses the Workbot **Post command** trigger to receive commands from the submit button command in the **Post dialog** recipe.

In this example, the **Post dialog** [recipe's](https://www.workato.com/recipes/673218-2-configure-dialog#recipe) submit button command `github new issue` is identical to the **Execute actions** [recipe's](https://www.workato.com/recipes/673219-3-actions#recipe) **Post command** trigger `github new issue`.

![Mapping invocation with dialog](/assets/images/workbot/workbot-dialogs/mapping-dialog-to-another-recipe-2.png)

## Common pitfalls when using dialogs
Given that dialogs involve using multiple recipes, it's normal to encounter some issues at the start. Here are some common pitfalls when using dialogs.

### 1. Using the same Post command trigger words on more than 1 recipe.

![App, action, action data](/assets/images/workbot/workbot-dialogs/app-action-actiondata.png)

Ensure that the App, Action, and Action data of Post command triggers in any of your recipes are unique across your Workato account. Any submit button or submit menu option command should only be mapped to 1 recipe only.

For example, the recipe above should be the only recipe in that Workato account to have `github report bug` as its Post command trigger.

### 2. Submit button / menu option commands incorrectly mapped
Ensure that the **Submit button command** and/or **Submit menu option command** of a recipe is correctly mapped to the Post command trigger of the secondary (or tertiary) recipe.

### 3. Incorrect mapping of dialog form fields with command input fields of subsequently triggered recipe
Ensure that dialog form field names from the **Post dialog** recipe correspond with the command input fields of the subsequently triggered recipe.

![Mapping dialog form fields with command input fields](/assets/images/workbot/workbot-dialogs/mapping-dialog-form-fields-to-command-input-fields.png)

## Try it out!
Try dialogs out by adding these example **[Invoke dialog](https://www.workato.com/recipes/673215-1-invoke-dialog#recipe)**, **[Post dialog](https://www.workato.com/recipes/673218-2-configure-dialog#recipe)** and **[Execute actions](https://www.workato.com/recipes/673219-3-actions#recipe)** recipes, invoking them from Slack.

![Invoke, post, execute](/assets/images/workbot/workbot-dialogs/invoke-post-execute.gif)
