---
title: Workbot message menus
date: 2018-05-21 10:23:00 Z
---

# Workbot message menus
Menu menus are an important building block in designing conversational interfaces that simplify complex workflows.

Workbot uses specific post command triggers, which need to be communicated to the user in order to execute a recipe.

Menu options allow multiple calls-to-action to be collapsed into a drop-down menu. Each menu option can execute a command in one click, allowing the user to quickly decide what they want, without having to remember additional Workbot commands.

![Anatomy of message menus](/assets/images/workbot/workbot-message-menus/message-menus.png)*Message menus use menu option clicks to trigger another recipe or workflow*

## Features

Message menus can:

1. Trigger another recipe that has a Workbot post command trigger

2. Pass command input values to that recipe

3. Invoke dialogs, as covered in the ['Using dialogs with Workbot'](https://docs.workato.com/workbot/using-dialogs-with-workbot.html) guide.

4. Be posted as a set list, or a [dynamically generated one](#dynamic-list).

For a positive conversational interface, keep the number of message options to less than 5.

## Anatomy of a message menu

A message menu can be used in either a Workbot post command reply or a post message action.

![Button fields](/assets/images/workbot/workbot-message-menus/message-menu-fields.png)

The following table shows what goes into the message menu fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
          <td>Menu name</td>
          <td>
            Menu name e.g. <kbd>Accounts</kbd>
          </td>
          <td>
            Key in the name of the menu to be displayed.
            <img src="/assets/images/workbot/workbot-message-menus/menu-name.png"></img>
          </td>
        </tr>
        <tr>
          <td>Menu options</td>
          <td>
            -
          </td>
          <td>
            Add multiple menu options to the menu.
            <img src="/assets/images/workbot/workbot-message-menus/menu-options-example.png"></img>
          </td>
        </tr>
        <tr>
          <td>Display text</td>
          <td>
            Menu option text e.g. <kbd>Account Name</kbd>
          </td>
          <td>
            The text of the menu option to be displayed.
            <img src="/assets/images/workbot/workbot-message-menus/menu-options-example.png"></img>
          </td>
        </tr>
        <tr>
          <td>Submit menu option command</td>
          <td>Workbot command to execute when menu option is clicked, e.g.
          <pre>salesforce update account</code>
          </td>
          <td>
            Choose from a list of existing post command triggers (from different recipes), or key in your own 3-word command. Clicking on this menu option will trigger the recipe with the corresponding command trigger.
          </td>
        </tr>
        <tr>
          <td>Command input values</td>
          <td>
            Command input values to pass onto the next recipe when menu option is clicked, e.g.<br>
            <b>account_id</b>: <kbd>Account ID</kbd>
            <b>account_description</b>: <kbd>Account Description</kbd>
          </td>
          <td>
          Key in name-value pairs to pass onto the next recipe as command input fields.
          </td>
        </tr>
      </tbody>
    </table>

When a menu option is clicked, it triggers another recipe and passes onto it any command input values you define in each menu option field.

For example, in the message menu fields below, where:

- **Menu name**: ``Accounts``
- **Menu options**
  - **Display Text**: ``Edge Communications``
  - **Submit menu option command**: ``salesforce update account``
  - **Command input values**: ``account_id``, ``account_description``

![Message menu example](/assets/images/workbot/workbot-message-menus/message-menu-example.png)

This posts a message menu to the user like so:

![Menu option Slack](/assets/images/workbot/workbot-message-menus/menu-option-slack.png)

When clicked, the menu option triggers the following recipe:

![Triggered recipe](/assets/images/workbot/workbot-message-menus/triggered-recipe.png)*The recipe triggered by the menu option*

Notice that the command trigger:<br>```salesforce update account```<br>of the triggered recipe matches the **Submit menu option command** of the menu option.

## Dynamic list of menu options

The menu options of message menus can also be generated dynamically using a list datapill (for more information on lists, see the [list management guide](https://docs.workato.com/features/list-management.html))

From **Message menu**, under **Menu options**, click on the horizontal ellipses on the top-right and choose 'Dynamic List'. This should bring up the dynamic menu options fields.

![Dynamic menu options](/assets/images/workbot/workbot-message-menus/dynamic-menu-options.png)

The following table shows what goes into the dynamic menu options fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
          <td>Menu options source list</td>
          <td>
            Input a list datapill. <kbd>Accounts</kbd>
          </td>
          <td>
            List datapills have a list icon next to them in the datatree, e.g. Salesforce Accounts, a list:
            <img src="/assets/images/workbot/workbot-message-menus/list-datapill.png"></img>
          </td>
        </tr>
        <tr>
          <td>Display text</td>
          <td>
            Display text e.g. <kbd>Account Name</kbd>
          </td>
          <td>
            The text of the menu option to be displayed. Typically, you want to use datapills from the list datapill, e.g. Salesforce Account name, a datapill from the Salesforce Accounts list:
            <img src="/assets/images/workbot/workbot-message-menus/datapill-from-list-datapill.png"></img>
          </td>
        </tr>
        <tr>
          <td>Submit menu option command</td>
          <td>Workbot command to execute when menu option is clicked, e.g.
          <pre>salesforce update account</code>
          </td>
          <td>
            Choose from a list of existing post command triggers (from different recipes), or key in your own 3-word command. Clicking on this menu option will trigger the recipe with the corresponding command trigger.
          </td>
        </tr>
        <tr>
          <td>Command input values</td>
          <td>
            Command input values to pass onto the next recipe when the menu option is clicked, e.g.<br>
            <b>account_id</b>: <kbd>Account ID</kbd>
            <b>account_description</b>: <kbd>Account Description</kbd>
          </td>
          <td>
          Key in name-value pairs to pass onto the next recipe as command input fields.
          </td>
        </tr>
      </tbody>
    </table>

For example, in the dynamic menu option fields below, where:

- **Menu name**: Accounts
- **Menu options**
  - **Menu options source list**: ``Accounts``
  - **Display Text**: ```Account Name```
  - **Submit menu option command**: ``salesforce update account``
  - **Command input values**: ``account_id``, ``account_description``

![Dynamic menu option fields example](/assets/images/workbot/workbot-message-menus/dynamic-menu-option-fields-example.png)

This posts a dynamically generated list of menu options in the message menu to the user like so:

![Dynamic menu options slack example](/assets/images/workbot/workbot-message-menus/dynamic-menu-options-slack-example.png)
