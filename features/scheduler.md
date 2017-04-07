---
title: Scheduler
date: 2017-02-23 15:15:00 Z
---

#Scheduler
There are use cases where a workflow needs to occur at a specific time, or at a specific frequency e.g. every Monday morning a report is generated and distributed before a status meeting, every 6 hours a file is available via FTP that needs to be uploaded. The scheduler (aka clock) connector supports such use cases.

The scheduler connectors supports two types of triggers:
* New scheduled event: This trigger can be configured to fire periodically. The user can select from every 5 minutes to days and weeks.
* New scheduled event (advanced): This trigger can be configured to fire at a specific time, and specific frequency. e.g. 1:15pm every Monday and Tuesday.

It is important to note that all times are in the user's time zone. The user's time zone setting is defaulted to the locale from which they sign up to Workato. The timezone setting can be modified (in the user settings section) at any time. All new jobs will then use the new time zone setting.

The following 2 actions are also supported:
* Get current time - returns the specific time when this step is executed within in a job. 
* Wait - The job waits for the specified amount of time before executing the next step in the recipe. 

## Triggers

### New scheduled event
This triggers at regular time intervals based on the user configuration. You can select from as low as 5 minutes to weeks. Specify the time interval at when you would like the recipe to run.

You can also set the time you want the recipe to start running using "Start at". e.g. Start running this recipe at 4:00 pm on Friday the 13th of August, and from then on run it every 15 minutes.

### New scheduled event (advanced) 
This trigger will run the recipe at specific times. For instance, you can specify the trigger to run at 1:15pm every Monday and Tuesday. First, select the "Scheduled task" trigger, and then add the "Hour" optional field.

* In the "Hour" field, fill in 13.
* In the "Minute" field, fill in 15.
* Choose your time zone.
* Choose "yes" for Monday and Tuesday, and "no" for the rest.
Now, the recipe will run at 1:15pm every Monday and Tuesday.

**What happens if I don't fill in the "Hour" field?**
In that case, your recipe will run at MM minutes, every hour of every day specified. In this example, on Monday and Tuesday, the recipe would be triggered at 0015, 0115, etc.
