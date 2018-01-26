---
title: Recipe design-time errors
date: 2018-01-24 15:00:00 Z
---

# Recipe logic errors
Even when your recipe doesn't encounter design-time errors that prevent it from running, or execution errors that causes job failures, there might be other recipe logic issues. These issues might not be easily caught unless you look into the job details, which is why we recommend monitoring your data and recipes closely during testing and the first couple of days after the recipe has been started.

We cover some common recipe logic errors in this article.

## Infinite looping 
Single recipe infinite looping can occur when a recipe trigger monitors updates in the same object that it updates in an action, e.g. the recipe has the trigger `New/updated order in NetSuite`, and the action `Update order in NetSuite`. In such cases, the update that the recipe carries out will create a new event that the recipe will proceed to pick up as a trigger event (an update to a NetSuite order).

Multi-recipe infinite looping can also occur, e.g. when I have recipes that keeps my Salesforce cases and Zendesk tickets in sync. An updated case in Salesforce will update the Zendesk ticket, and then the updated Zendesk ticket will update the Salesforce case, and vice versa again and again.

In order to prevent infinite looping, we can set trigger conditions to prevent recipes from picking up trigger events that we know to be duplicates. We can create a separate integration user for Workato and filter out any changes made by this integration user, so that the recipe only picks up trigger events not created by a Workato integration. We can also explicitly mark records that we don't wish to process, and filter out those records via a trigger condition.

You can learn more about preventing infinite looping [here](/recipes/infinite-loops.md).

## Unexpected trigger events/data duplication


## Incorrect list management

## Missing trigger events
