---
title: Command Reply
date: 2018-03-20 10:23:00 Z
---

# Creating a Command Reply
### What is a command reply?
A Command Reply is how Workbot responds to the user on Slack *after* it has received a command and completed the necessary actions. If it's your first time here, you may want to read up on [creating a command](/workbot/workbot-commands.md) first.

In practice, you should always pair a command with a command reply (in your recipe), because you want your users to be updated on the success (or failure) of the recipe actions.

If you're here after just [completing your first command](/workbot/workbot-commands.md), great job on getting this far! In this exercise, we'll be using the same recipe as before - [creating an issue in Github from Slack](https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe) using a Workbot command.


![Workbot Command trigger and the Command response diagram](/assets/images/workbot/workbot-actions/anatomy-of-a-command-reply.gif)
*Anatomy of a Command reply*

The [recipe](https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe) we're working with creates an issue in Gtihub based on inputs provided to Workbot in the command. Here's how they're mapped:

![Creating an issue in Github](/assets/images/workbot/workbot-actions/create-issue-github.png)
*We've used the user input datapills to form the Issue title, Body, and Assignee of the issue. More on this [here.](/workbot/workbot-commands.md#user-input-fields)*

You can set the Organization and Repository of your choice - this is where Workbot will create new Github issues.

As we've mentioned before, we want Workbot to reply to the user *after* it has finished creating the issue in Github, furnished with some details.

![Command Reply](/assets/images/workbot/workbot-actions/command-reply.png)

The Slack message above is how we want Workbot's command reply (to the user) to look like after successfully creating the rather unfortunate issue above in Github. Now that we know what we want to do, let's get cracking!

### Getting Started

In the [recipe](https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe), after the "Create issue in Github" action step,
1. Add a new step and choose **Action**.
2. Under **Application**, choose **Workbot for Slack**
3. Under **Action**, choose **Post command reply**.

How it should look like at this point:

![Getting started with command reply](/assets/images/workbot/workbot-actions/getting-started-with-command-reply.png)

Now we're ready to start formatting the message!

### Message text
**Message text**: Issue <kbd>Number</kbd> created
The message text is the simplest message that Workbot can reply with in a Slack message. Here we use the <kbd>Number</kbd> datapill in the previous step's output datatree.
![Command Reply datapills](/assets/images/workbot/workbot-actions/command-reply-datapills.png)

### Message attachments
Next, you should see a list of collapsed fields:

![Command reply collapsed](/assets/images/workbot/workbot-actions/command-reply-collapsed.png)

We want to focus on **Message attachment** for now. The rest of the fields like **Buttons** and **Message menu** make your command reply a *lot* more interactive, but we can keep things simple for now.

Expand the **Message Attachments** input fields:

![Message attachment expanded](/assets/images/workbot/workbot-actions/message-attachments-expanded.png)
*Message attachment expanded*

There are a lot of fields here, but to achieve our goal for this exercise, we only need to focus on 4 fields:
1. **Title**
2. **Title Link**
3. **Attachment text**
4. **Attachment Color**

![Command reply explained](/assets/images/workbot/workbot-actions/command-reply-explained-2.png)
*Command reply explained*

Here's what we want to fill up in these 4 fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
          <td>Title</td>
          <td>Name of issue: <kbd>Title</kbd></td>
          <td>
          Here we use the <kbd>Title</kbd> datapill from the Command trigger output (in step 2). Back in the ["Creating a command"](/workbot/workbot-commands.md#user-input-fields) guide, we defined **Issue** as a user input field that users can provide in Slack. Now that the issue has been created, <kbd>Title</kbd> can be used in subsequent action steps - this is how we're letting users populate Github issue fields from Slack!
          </td>
        </tr>
        <tr>
          <td>Title link</td>
          <td><kbd>URL</kbd></td>
          <td>
            Here we take the <kbd>URL</kbd> of the created issue. It's yet another output datapill from the issue creation in Github.
          </td>
        </tr>
        <tr>
          <td>Attachment text</td>
          <td>
            Description: <kbd>Body</kbd><br>Assignee: <kbd>Username</kbd><br>
          </td>
          <td>
            Just like with <kbd>Title</kbd>, we're using the datapills of the created Github issue output.
          </td>
        <tr>
          <td>Attachment color</td>
          <td>Good</td>
          <td>
            Since we're expecting a positive command reply from Workbot, we set it to <b>Good</b> so that the vertical bar to the left of the message is green.
          </td>
        </tr>
      </tbody>
    </table>
How your form should look like at this point:

![Message attachment with expanded fields](/assets/images/workbot/workbot-actions/message-format-expanded-with-fields.png)

When you're confident that you've configured the Message attachment correctly, hit Save.

With that, we're done configuring the command reply! Let's test it out by starting the recipe. You'll also want to sign into both the Github repo that you've connected this recipe to (to check that the issue has indeed been created), as well as the Slack workspace with the installed Workbot (that's connected to this recipe).

### Testing the command reply

Before you start, make sure that you're signed in to the Slack workspace where the connected Workbot is installed.

Next, make sure that the recipe has been started. All good? Let's go!

1. In Slack, send a DM to Workbot, and say "github create issue"
2. Workbot should respond with "Enter issue:"
![Github create issue](/assets/images/workbot/workbot-actions/github-create-issue.png)
3. Enter the issue title
4. Workbot should respond with "Enter description"
![Github enter description](/assets/images/workbot/workbot-actions/github-enter-description.png)
5. Enter the description of the issue.
6. Workbot should respond with "Enter assignee:"
![Github enter assignee](/assets/images/workbot/workbot-actions/github-enter-assignee.png)
7. At this point, Workbot should have all the input he needs from the user to create the issue in Github. You should see the command reply next:
![Github command reply](/assets/images/workbot/workbot-actions/github-command-reply.png)

We've come to the end of this guide - you're awesome for making it this far.

You can make your command reply more interactive by including [attachment fields fields](/connectors/slack.html#example-message-with-attachment), [images](/connectors/slack.html#example-message-with-attachment), [buttons](http://docs.workato.com/connectors/slack.html#using-slack-message-buttons), and even message menus. Buttons and menu options allow Workbot to pass commands back to a recipe to carry out its actions.

Explore other ways Workbot has automated tasks for our community of users in [Community Recipes](https://www.workato.com/recipes/browse?q=workbot).
