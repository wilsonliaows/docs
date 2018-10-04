---
title: Workato connectors - ADP Workforce Now Scheduled Worker Search Trigger
date: 2018-10-04 06:00:00 Z
---

# ADP Workforce Now - Scheduled Worker Search Trigger

## Scheduled worker search
This trigger picks up entries that match a specified search filter. Entries are processed as a list of a specified batch size. It checks for entries based on the specified schedule.

![Scheduled worker search](/assets/images/adp_workforce/scheduled_worker_trigger.png)
*Scheduled worker search*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan=2 width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan=2>Role code</td>
      <td>
        <img src="/assets/images/adp_workforce/role_code.png"/>
        Select the type of worker to filter for this trigger. Available options are:<br>
        - Employee<br>
        - Manager<br>
        - Practitioner<br>
        - Administrator<br>
        - Supervisor<br>
      </td>
    </tr>
    <tr>
      <td colspan=2>Trigger on</td>
      <td>
        <img src="/assets/images/adp_workforce/trigger_on.png"/>
        Select the type of schedule - <b>Specific interval</b> or <b>Specific date/time</b>
      </td>
    </tr>
    <tr>
      <td rowspan=2>Schedule settings (<b>Specific interval</b>)</td>
      <td>Every</td>
      <td>
        Select the interval between each search. Select one of these options:<br>
        - 5 minutes<br>
        - 15 minutes<br>
        - 30 minutes<br>
        - 45 minutes<br>
        - One hour<br>
        - One day<br>
        - One week<br>
        - 30 days<br>
      </td>
    </tr>
    <tr>
      <td>Start at</td>
      <td>
        Date and time to begin the first search. Leave blank to begin immediately when the recipe is first started.
      </td>
    </tr>
    <tr>
      <td rowspan=4>Schedule settings (<b>Specific date/time</b>)</td>
      <td>Timezone</td>
      <td>Choose the timezone for the schedule to be set in.</td>
    </tr>
    <tr>
      <td>Hour</td>
      <td>Configure the hour of the day to run the search.</td>
    </tr>
    <tr>
      <td>Minute</td>
      <td>Configure the minute of the hour to run the search.</td>
    </tr>
    <tr>
      <td>Days of the week</td>
      <td>Select 'Yes' for each of the days you wish to run the search.</td>
    </tr>
    <tr>
      <td colspan=2>Batch size</td>
      <td>
        Configure the batch size of the list of entries in each individual job. This defaults to <b>100</b>. Maximum batch size is <b>100</b>.
      </td>
    </tr>
  </tbody>
</table>

## Output fields
The output of this trigger is a list of workers. The attributes of each worker is based on the worker object in your ADP Workforce Now instance. All custom fields are supported.

![Workers output fields](/assets/images/adp_workforce/workers_output_schema.png)
*Workers output fields*
