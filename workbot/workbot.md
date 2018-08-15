---
title: Workbot for Slack
date: 2017-03-30 05:00:00 Z
---

# Workbot for Slack
Workbot for Slack is a Workato chatbot that helps you monitor and interact with your business apps from within Slack.

Your team can configure Workbot to post notifications to Slack channels when important events happen, such as when a key customer files a ticket, a lead from a Fortune 500 company fills in a form on your website, or when a DevOps alert is created.

You can also retrieve information from your apps and post it to Slack, or create and update business data from within Slack. To cut down on notifications volume, apps can now send you smart notifications based on user-specified filters.

![Workbot1](/assets/images/workbot/workbot/workbot-1.png)

By default, Workbot comes with a set of pre-built recipes that allows you to interact with your applications and enable notifications with minimal setup.

## Slack connector VS Workbot for Slack connector
Workato supports both the Slack connector and the Workbot for Slack connector.

The Slack connector allows you to authorize to your Slack team as a team member, and immediately post messages onto channels, send direct messages to Slack team members, and manage channels and groups. It does not require any app installation onto your Slack team. Recipes built on the Slack connector allows you to respond to message buttons and menus.

The Workbot for Slack connector enables you to build additional recipes on top of Workbot, which is an app that needs to be installed onto your Slack team, and comes with pre-built recipes. Messages posted in Slack via this connector will show up as being posted by **Workbot**. Recipes built on top of the Workbot connector has the ability to facilitate more complex interactions and communicate with Workbot to read or write data to other connected apps.

A detailed comparison table for both the Slack connector and the Workbot for Slack connector is below.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Features</th>
            <th>Slack connector</th>
            <th>Slack for Workbot connector</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
              <a href="https://api.slack.com/docs/message-attachments">Attachments</a>
            </td>
            <td>
              <a href="/connectors/slack.html#example-message-with-attachment">Yes</a>
            </td>
            <td>
              <a href="/workbot/workbot-actions.html#post-command-reply">Yes</a>
            </td>
        </tr>
        <tr>
            <td>
              <a href="https://api.slack.com/docs/message-buttons">Message buttons</a>
            </td>
            <td>
              <a href="/connectors/slack.html#using-slack-message-buttons">Yes</a>
            </td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>
              <a href="https://api.slack.com/docs/message-menus">Message menus</a>
            </td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>
              <a href="https://api.slack.com/docs/message-threading">Threads</a>
            </td>
            <td>
              <a href="/connectors/slack.html#using-slack-threads">Yes</a>
            </td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Need to install into Slack team?</td>
            <td>No</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Post as user customization</td>
            <td>
              <a href="/connectors/slack.html#example-message-with-attachment-customized-app-name-and-images">Yes</a>
            </td>
            <td>No, always post as Workbot.</td>
        </tr>
        <tr>
            <td>Pre-built recipes/commands?</td>
            <td>No</td>
            <td>
              <a href="https://www.workato.com/workbot-slack">Yes</a>
            </td>
        </tr>
        <tr>
            <td>Notifications need to be set up?</td>
            <td>
              No. Recipes that post Slack messages just have to be started, and notifications will start being posted to the specified channel.
            </td>
            <td>
              No. Recipes that post Slack messages just have to be started, and notifications will start being posted to the specified channel.
            </td>
        </tr>
        <tr>
            <td>Verified user access?</td>
            <td>No</td>
            <td>
              <a href="/workbot/workbot-latebinding.html">Yes</a>
            </td>
        </tr>
        <tr>
            <td>
              Pass data (parameters) to subsequent messages/recipes
            </td>
            <td>No</td>
            <td>Yes</td>
        </tr>
    </tbody>
</table>

## Notes

1. Make sure that Workbot is always in the channel to run commands. Do this by inviting it to the channel.
2. Just like talking to a real person, always use @workbot because you want it to be alerted.
3. When you talk to Workbot in his direct message channel, you do not need to use @workbot because it knows you are talking to it.
4. When you invite Workbot into the channel, **anyone** in that channel can interact with Workbot via commands.
5. When first installing Workbot into your Slack team, Workbot will detect the **latest** app connections you have made in your Workato account and automatically connect to them.
