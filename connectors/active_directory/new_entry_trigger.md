---
title: Workato connectors - Active Directory new entry trigger
date: 2018-04-20 06:00:00 Z
---

# Active Directory - New entry trigger

## New entry
This trigger picks up new entries that are created in your Active Directory instance. Each entry is processed as an individual job. It checks for new entries once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New entry trigger](/assets/images/active_directory/new_entry_trigger.png)
*New entry trigger*

## Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sample entry DN</td>
      <td>
        Used to introspect the attributes in your entry object. Give a distinguished name of an existing entry. Attributes of this object will be available in the output fields of this trigger.
      </td>
    </tr>
    <tr>
      <td>When first started, this recipe should pick up events from</td>
      <td>
        Entries that are created after this date and time will be processed in the trigger. If left blank, the trigger will pick up entries <b>created 1 hour before</b> the first time this recipe is started.
      </td>
    </tr>
    <tr>
      <td>Entry search filter</td>
      <td>
        Use this to filter the entries to be processed by this trigger.<br>
        For example, use <code>&(ou=Dev)(objectClass=Person)</code> to pick up only <b>Person</b> entries from the <b>Dev</b> organization unit.
      </td>
    </tr>
  </tbody>
</table>

## Output fields
The output of this trigger is a single entry. The attributes of each entry is based on the **Sample entry DN** provided in the trigger input.
