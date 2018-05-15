---
title: Configuring slash commands
date: 2018-04-9 10:23:00 Z
---

# Custom Workbot vs Legacy slash commands
Workato supports both [slash commands that are part of a custom Workbot](https://api.slack.com/slash-commands) (i.e. a custom Slack app) and legacy slash commands (i.e. [Custom Integrations slash commands](https://slack.com/apps/A0F82E8CA-slash-commands)).

We strongly recommend using custom Workbots to configure your slash command, as custom integrations is a legacy feature that will eventually be deprecated (no news as to when just yet). Legacy slash commands also does not support some of the functionalities that custom Workbots have.

Custom Workbot slash commands requires [creating a new Slack app](/workbot/workbot-custom-bots.md), and connecting it to Workato via a custom OAuth profile, while legacy slash commands does not. You can add legacy slash commands to a Slack workspace directly from the Slack app directory.

Here is a detailed comparison table between the custom Workbot slash commands and the legacy slash commands.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Features</th>
            <th>Custom Workbot slash commands</th>
            <th>Legacy slash commands</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
              Can invoke dialogs?
            </td>
            <td>
              Yes
            </td>
            <td>
              No
            </td>
        </tr>
        <tr>
            <td>
              Dialog for missing command input fields
            <td>
              Yes
            </td>
            <td>No</td>
        </tr>
        <tr>
            <td>
              Requires a custom Slack app
            </td>
            <td>Yes</td>
            <td>No</td>
        </tr>
        <tr>
            <td>
              Supports ephemeral messages in Post command reply
            </td>
            <td>
              Yes
            </td>
            <td>No</td>
        </tr>
        <tr>
            <td>Connection method</td>
            <td><a href="/workbot/configuring-slash-commands.md#workbot-connection"> Workbot with Custom OAuth profile</a></td>
            <td><a href="/workbot/legacy-slash-commands.md#configuring-the-workbot-connection">Slash command verification token</a></td>
        </tr>
        <tr>
            <td>Customize app icon</td>
            <td>
              Yes, from Slack app page
            </td>
            <td>Yes, from the <a href="https://slack.com/apps/A0F82E8CA-slash-commands">slash command page</a></td>
        </tr>
        <tr>
            <td>
              Pass command input field values to subsequent messages/recipes
            </td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Posting in channels</td>
            <td>
              Yes, but only in channels it is invited to.
            </td>
            <td>Yes, can post in any channel within the Slack workspace it is installed to.</td>
        </tr>
        <tr>
            <td>Multiple slash commands</td>
            <td>
              Yes, each Workbot recipe can have its own unique slash command.
            </td>
            <td>Yes, each Workbot connection can store the slash command verification tokens of multiple slash commands.</td>
        </tr>
    </tbody>
</table>

## Notes for custom Workbot slash commands

1. Make sure that Workbot is always in the channel to run commands. Do this by inviting it to the channel.
2. When you invite Workbot into the channel, **anyone** in that channel can interact with Workbot via commands.
