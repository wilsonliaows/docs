---
title: Workato connectors - Splunk
date: 2017-06-09 04:45:00 Z
---

# Splunk
[Splunk](https://www.splunk.com/) is a software that provides operational intelligence to monitor, report and analyze real-time data to deliver operational intelligence for security, IT and business.

## Run query action
This action lets you run an ad hoc query from Workato in your Splunk instance.

### Output field list
When working with Splunk queries, you will need to define the output schema for the function being called, as each response is dependent on the individual query. This sample output schema will be used to build the [output datatree](/workato-concepts.md#data-tree-and-pills). This datatree allows you to use the data returned from the Splunk query in subsequent recipe actions.

![Schema Designer](/assets/images/splunk/response_body_input_field.png)
*Response body input field*

There are 2 ways to define this output schema:
1. Add individual fields
2. Use sample JSON

##### Add individual fields
Clicking on `+ Add new field` brings up the following schema designer widget.

![Sample JSON pop up](/assets/images/splunk/individual_field_pop_up.png)
*Schema designer widget (Single field)*

Add the field name and type for each field returned from this search. Clicking on `Add field` will update the output schema with the relevant fields.

##### Use sample JSON
Clicking on `generate from JSON sample` brings up the following schema designer widget.

![Sample JSON pop up](/assets/images/splunk/sample_json_pop_up.png)
*Schema designer widget (JSON)*

If the query returns a sample JSON response like this:

```json
{
  "id": 123,
  "name": "Ee Shan",
  "email": "eeshan@workato.com"
}
```

All you need to do is copy and paste this sample JSON into the schema designer widget. The schema will be automatically generated into the Workato schema definition structure.

### Search query
Refer to the [Search Tutorial](https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Usethesearchlanguage) by Splunk for more details.

### Earliest/latest time
Events stored in Splunk are saved together with its timestamp (time when the event occurred) as the default field `_time` in UNIX time notation. Searches generally contain a time period `earliest` or `latest`, in order to search for events with timestamp beginning/ending, or between the specified timestamps.

Refer to the [Time Modifiers Documentation](https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Usethesearchlanguage) by Splunk for more details.
