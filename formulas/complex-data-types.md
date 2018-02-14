---
title: Complex data types
date: 2018-02-13 00:00:00 Z
---

# Complex data types
Up to this point, we have only discussed primitive data types like Strings and Integers. With most APIs, data is represented with more complex structures. These can be broadly classified into JSON Objects and Arrays.

## Mapping complex data in formula mode
Benefits
  - Deal with primitive arrays
  - You may not have prior knowledge of schema
  - Too many fields in a single object to map

## Example
In the following example, we apply tags to Zendesk tickets for associated campaigns, which are tracked in Salesforce. For the purpose of demonstration, we will perform this using a custom action. According to Zendesk API [documentation](https://developer.zendesk.com/rest_api/docs/core/tickets#update-ticket), tags should be sent as an array of strings. The payload should look like this:

```JSON
{
  "ticket": {
    "tags": ["WorkJam", "ProductHour"]
  }
}
```

Now, this presents a problem for us, because Workato input field mapping exist primary as key/value pairs. This required format is a primitive array of strings. This requires a complex data type (Array of Strings).

To do this, simply toggle the **Tags** input field to formula mode, and form the required structure. This can be done in a few ways.

First, we can perform a test with a statically defined array of strings. Make sure that the input value observes proper JSON syntax. Invalid values in formula mode will raise [design time formula errors](recipes/recipe-design-time-errors.md#design-time-formula-errors).

![Static array input](/assets/images/formula-docs/formula-static-array-input.png)
*Static array input in formula mode*

Next, it is a good idea to perform some tests to make sure that the custom action updates the ticket with the new tags as expected. At this point, you can improve the recipe further to update tickets with tags dynamically. Since **Tags** expect an Array of Strings, we need to retrieve only the <kbd>Name</kbd> values from the <kbd>Campaigns</kbd> returned from a previous action.

We do this by simply using the [`pluck`](/formulas/array-list-formulas.html#pluck) formula. This formula conveniently returns an array of <kbd>Name</kbd> values, perfect!

![Dynamic array input](/assets/images/formula-docs/formula-dynamic-array-input.png)
*Dynamic array input in formula mode*

Finally, make sure that the right data is sent by checking the job details.

![Data structure preserved in formula mode](/assets/images/formula-docs/formula-array-job-details.png)
*Data structure preserved in formula mode*
