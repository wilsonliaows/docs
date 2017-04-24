---
title: Troubleshooting Workbot
date: 2017-03-30 05:00:00 Z
---

# Troubleshooting Workbot
Sometimes when interacting with Workbot, he may raise some errors or issues. Here are some common errors and issues that Workbot might tell you about, and how to handle them.

## Recipe execution error
Workbot is powered by Workato recipes to fetch your app data, such as retrieve Salesforce opportunities' data, or to write data to your apps, such as creating a new account in Salesforce. When Workbot tries to execute your command, but meets with an unexpected error, he will respond with the following message.

![workbot recipe execution](/assets/images/Workbot/troubleshooting-workbot/troubleshooting-workbot-1.png)
*Workbot error message about recipe execution error*

Usually, there is also a short description included about the error. To fix this error, you will have to go to the recipe, look for the failed job, and [debug the error](/recipes/jobs.md#job-details) that happened in the job.

## Workbot offline
At times, you may find that despite having an active recipe or connection, Workbot appears to be offline. This is usually temporary - he might be undergoing maintenance, or gone out for a coffee break!

Occasionally, reconnecting your Workbot connection helps to get him back online. Reconnect just like how you would reconnect to Slack. Navigate to **Connections**, find the Workbot connection, disconnect and connect again.

![Reconnect Workbot connection](/assets/images/Workbot/troubleshooting-workbot/reconnect-connections.gif)
*Navigate to Connections and reconnect to Workbot*
