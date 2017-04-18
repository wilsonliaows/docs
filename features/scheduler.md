---
title: Scheduler
date: 2017-02-23 15:15:00 Z
---

# Scheduler
There are scenarios where a workflow needs to occur at a specific time, or at a specific frequency e.g. generate a report every Monday morning at 9am, check for new CSV files uploaded in your FTP server every 6 hours. The scheduler connector (AKA clock connector) supports such scenarios.

## Triggers
Scheduler triggers allows you to schedule when exactly your recipe will run. There are two triggers:

- New scheduled event

This trigger allows you to specify the time the recipe should first trigger, and subsequently, the time intervals to continue triggering on.

![Basic scheduler trigger](/assets/images/recipes/triggers/basic-scheduler-trigger.png)
*Basic scheduler trigger that triggers the first time when recipe is started, then subsequently every hour after that*

- New scheduled event (advanced)

This trigger allows you to specify the days of the week the recipe should trigger on, as well as the times it should trigger on. If you specify only the minutes, e.g. 30, the recipe will trigger 24 times in a day, every 30 minutes past the hour. If both hour and minute inpur fields are filled, the recipe will trigger once a day.

![Advanced scheduler trigger](/assets/images/recipes/triggers/advanced-scheduler-trigger.gif) *Advanced scheduler trigger that triggers every Monday at midnight 0000*

Note that all times set using Scheduler are in the user's time zone, which can be viewed and edited in the user's account settings.

### Example of configuring new scheduler event (advanced) trigger
For instance, we might want to specify the trigger to run at 1:15pm every Monday and Tuesday. First, select the "Scheduled task" trigger, and then add the "Hour" optional field.

* In the "Hour" field, fill in 13.
* In the "Minute" field, fill in 15.
* Choose your time zone.
* Choose "yes" for Monday and Tuesday, and "no" for the rest.
Now, the recipe will run at 1:15pm every Monday and Tuesday.

## Actions
The following 2 actions are also supported:

- Get current time

This action returns the specific date and time when this step is executed in a job.

- Wait

The job waits for the specified amount of time before executing the next step in the recipe.