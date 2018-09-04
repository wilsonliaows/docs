---
title: Workato connectors - Active Directory Add entry action
date: 2018-02-02 06:10:00 Z
---

# Active Directory - Add entry action

## Add entry
This action adds a single entry into your Active Directory.

![Add entry action](/assets/images/active_directory/add_entry.png)
*Add entry action*

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
      <td>Entry DN</td>
      <td>
        Distinguished name of the entry to add.
      </td>
    </tr>
    <tr>
      <td>Attributes to add</td>
      <td>
        Attributes to add to the new entry. This list of attributes depends on the <b>Sample entry DN</b> provided.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action is the full details of the added entry. The attributes of this entry is based on the **Sample entry DN** provided in the action input.

![Entry output fields](/assets/images/active_directory/entry_output_schema.png)
*Entry output fields*
