---
title: Slash Commands
date: 2018-03-21 10:23:00 Z
---

# Creating a Slash Command trigger
- It's a trigger
- use Slack guidelines for naming conventions

### What is a Slash Command?
- use cases
- popular Recipes
- Anatomy of a Slash Command
- Mention that we need 4 things:
  1. Build a recipe with a Slash Command trigger
  2. Create a slash command on slack, connect it to trigger (paste the trigger's webhook URL here)
  3. Connect the custom Slack app (by using the Slack app token) to the Slash Command

### Getting started
- Mention referenced recipe
- State the goal of exercise (to get the referenced recipe up and running)

### Building a recipe with the Slash Command trigger
- Build recipe
  - Choose I'm an expert
  - Don't connect workbot first, focus on the recipe actions
  - In the trigger step, configure the Slash Commands trigger
  - Take note of copy+paste fields (including the Slash command URL), will use it later in Slack

### Creating a slash command in Slack
  - Sign-in to Slack workspace
  - Head to manage apps
  ![Manage apps from Slack](/assets/images/workbot/workbot-triggers/manage-apps-from-slack.png)

### Create Slash Command
  - From your Slack custom app page, go to Features > Slash Commands, and click Create a Command
  - Copy+paste the recipe fields here, including the slash command URL
  - Make sure the fields are the same as in the slash command trigger
  - Save the slash command

### Connecting the Slack slash command to the Slash Command trigger
