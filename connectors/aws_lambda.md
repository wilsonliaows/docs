---
title: AWS Lambda
date: 2017-02-16 06:15:00 Z
---

# AWS Lambda

## Configure output schema

Since the output data from a Lambda function is not static and varies with the function, a sample response is needed to generate an action's output schema, also known as [output datatree](/workato-concepts.md#data-tree-and-pills). This datatree allows you to map the output from the function into another recipe step.

All you need to do is provide a sample response to the `Response body` input field. Now the format of your response will determine what the sample output should look like. We will explore how to format a sample response for 2 cases: JSON response body and single primitive data.

## Response body input field

![Schema Designer](/assets/images/aws_lambda/response_body_input_field.png)
*Response body input field*

There are 2 ways to configure this input field: Using a sample JSON or creating a schema definition. This article will focus on using sample JSON.

Clicking on `generate from JSON sample` will open a pop up which looks like this:

![Sample JSON pop up](/assets/images/aws_lambda/sample_json_pop_up.png)
*Sample JSON pop up*

Provide a valid JSON. More details about formatting a valid JSON body for the AWS lambda connector in the next section.

## JSON response

Workato requires all data be presented as key & value pairs. This is done so that we can map values using it's respective key. JSON data format is a good example. For the AWS lambda connector, we require all response JSON to be wrapped in a parent `"response"` object. Hence using a given response like this:

```json
{
  "id": 123,
  "name": "Ee Shan",
  "email": "eeshan@workato.com"
}
```

Wrap it in a parent `"response" object:

```json
{
  "response": {
    "id": 123,
    "name": "Ee Shan",
    "email": "eeshan@workato.com"
  }
}
```

We recommend forming this JSON in a text editor before you copy/paste into the input field.

Remove the default example and paste this formatted JSON over and click `Generate`. This will generate an output datatree which looks like this:

![JSON body output datatree](/assets/images/aws_lambda/json_output_datatree.png)
*JSON body output datatree*

## Primitive data response

If the lambda function returns non-JSON data structure, like a single string, integer or a simple boolean value, it will likewise need to be wrapped in a parent `"response"` object. Let's look at a simple function that returns an integer value (ID for example). A sample response will be:

```json
4990
```

Wrap it in a parent `"response" object:

```json
{
  "response": 4990
}
```

Remove the default JSON example in the pop up and paste this JSON. Clicking `Generate` will create this output datatree:

![Primitive response output datatree](/assets/images/aws_lambda/primitive_output_datatree.png)
*Primitive response datatree*

