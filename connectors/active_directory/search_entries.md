---
title: Workato connectors - Active Directory Search entries action
date: 2018-02-02 06:10:00 Z
---

# Active Directory - Search entries action

## Search entries
This action searches for entries that match your criteria in your Active Directory.

![Search entries action](/assets/images/active_directory/search_entries.png)
*Search entries action*

### Input fields

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
      <td>Search entries by</td>
      <td>
        Provide values for each attribute you wish to filter. Only entries that match all of the values will be processed.
      </td>
    </tr>
    <tr>
      <td>Entry search filter</td>
      <td>
        Use this to filter the entries to be processed by this trigger. This is similar to <b>Search by</b>. However, this allows you to use LDAP syntax to perform more complex conditionals. Use this input if you need to filter using compound conditionals or nested conditionals.<br><br>
        For example, use <code>&(ou=Dev)(objectClass=Person)</code> to pick up only <b>Person</b> entries from the <b>Dev</b> organization unit.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this trigger is a list of entries. The attributes of each entry is based on the **Sample entry DN** provided in the trigger input.

![Entries output fields](/assets/images/active_directory/entries_output_schema.png)
*Entries output fields*
