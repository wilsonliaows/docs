---
title: Workato connectors - Active Directory Scheduled query trigger
date: 2018-05-08 06:00:00 Z
---

# Active Directory - Scheduled query trigger

## Scheduled entry search using search filter
This trigger picks up entries that match a specified search filter. Entries are processed as a list of a specified batch size. It checks for entries based on the specified schedule.

![Scheduled entry search using search filter](/assets/images/active_directory/scheduled_trigger.png)
*Scheduled entry search using search filter*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan=2 width='35%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan=2>Trigger on</td>
      <td>Select the type of schedule - <b>Specific interval</b> or <b>Specific date/time</b></td>
    </tr>
    <tr>
      <td rowspan=2>Schedule settings (<b>Specific interval</b>)</a></td>
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
      <td rowspan=4>Schedule settings (<b>Specific date/time</b>)</a></td>
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
      <td colspan=2>Sample entry DN</td>
      <td>
        Used to introspect the attributes in your entry object. Give a distinguished name of an existing entry. Attributes of this object will be available in the output fields of this trigger.
      </td>
    </tr>
    </tr>
    <tr>
      <td colspan=2>Search by</td>
      <td>Provide values for each attribute you wish to filter. Only entries that match all of the values will be processed.</td>
    </tr>
    </tr>
    <tr>
      <td colspan=2>Entry search filter</td>
      <td>
        Use this to filter the entries to be processed by this trigger.<br>
        For example, use <code>&(ou=Dev)(objectClass=Person)</code> to pick up only <b>Person</b> entries from the <b>Dev</b> organization unit.
      </td>
    </tr>
    </tr>
    <tr>
      <td colspan=2>Batch size</td>
      <td>
        Configure the batch size of the list of entries in each individual job. This defaults to <b>100</b>. Maximum batch size is <b>1000</b>.
      </td>
    </tr>
  </tbody>
</table>

## Output fields
The output of this trigger is a list of entries. The attributes of each entry is based on the Sample entry DN provided in the trigger input.
