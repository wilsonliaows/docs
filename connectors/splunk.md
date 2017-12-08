---
title: Workato connectors - Splunk
date: 2017-06-09 04:45:00 Z
---

# Splunk

## Run query
This action lets you run an ad hoc query from Workato in your Splunk instance.

### Output field list

When working with Splunk queries, you will need to define the output schema for the function being called, as each response is dependent on the individual query. This sample output schema will be used to build the [output datatree](/workato-concepts.md#data-tree-and-pills). This datatree allows you to use the data returned from the Splunk query in subsequent recipe actions.

There are 2 ways to define this output schema:
1. Use sample output
2. Add individual fields

#### Use sample output

To define the output schema, provide a sample response to the `Response body` input field. This should describe the data structure and schema of the output. There are 2 ways to configure this input field:
- Use a sample JSON
- Manually define schema using the schema designer widget

![Schema Designer](/assets/images/aws_lambda/response_body_input_field.png)
*Response body input field*

This article focuses on defining the output schema via sample JSON. Clicking on `generate from JSON sample` brings up the following schema designer widget.

![Sample JSON pop up](/assets/images/aws_lambda/sample_json_pop_up.png)
*Schema designer widget*

## JSON response
Workato requires all data be presented as key & value pairs. This is done so that we can map values using its respective key. If the query returns a sample JSON response like this:

```json
{
  "id": 123,
  "name": "Ee Shan",
  "email": "eeshan@workato.com"
}
```

All you need to do is copy and paste this sample JSON into the schema designer widget. The schema will be automatically generated into the Workato schema definition structure.

#### Add individual fields


### Search query

Refer to the [Search Tutorial](https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Usethesearchlanguage) by Splunk for more details.

### Earliest/latest time

Events stored in Splunk are saved together with its timestamp (time when the event occurred) as the default field `_time` in UNIX time notation. Searches generally contain a time period `earliest` or `latest`, in order to search for events with timestamp beginning, ending, or between the specified timestamps.

Refer to the [Time Modifiers Documentation](https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Usethesearchlanguage) by Splunk for more details.
