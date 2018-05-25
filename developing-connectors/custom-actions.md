---
title: Custom actions
date: 2018-05-24 14:00:00 Z
---

# Custom actions
If you're looking to build additional actions for a connector that Workato already supports, custom actions enable you to utilize the existing connector framework instead of developing from scratch via the HTTP connector or the SDK. This allows you to easily build your action by telling Workato what the action's request and response should look like, which can be obtained from the API documentation.

Building a custom action is an accelerated way of building an action via the HTTP connector. This is because the custom action utilizes the connector's existing authorization framework and already understands the API for that app.

## App support for custom actions
Most apps on Workato support custom actions. The custom action is typically found in the actions picklist of the connector.

![Selecting the custom action](/assets/images/developing-connectors/custom-actions/custom-action-selection.png)
*Selecting the custom action*

The custom action will list the scopes available. Typically, you can only read or write to objects that you have scopes for. We see that we have the following scopes for Slack:

```
channels:read, channels:write, chat:write:bot, chat:write:user, groups:read, groups:write,
identify, users:read
```

![App scopes available for the custom action](/assets/images/developing-connectors/custom-actions/app-scopes.png)
*App scopes available for the custom action*

If you build an action that requires additional scopes the connector doesn't provide, the action will throw an error when it tries to make the request with the API. For example, this error is returned when we try to build a create reminder action in Slack.

![Scope error returned by the API when call is made](/assets/images/developing-connectors/custom-actions/custom-action-scope-error-output.png)
*Scope error returned by the API when call is made*

If you'd like to see custom actions or additional scopes added to a connector on Workato, contact the Workato team to file an enhancement request!

## Custom action input fields
This section details the configuration input fields in the custom action.

| Input field                     | Description                                                                                                                                                       |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Action name                     | Give the custom action you're building a name. This shows up in the action title.                                                                                 |
| Request type                    | HTTP method of the API endpoint you're calling.                                                                                                                   |
| Path                            | URL path of the endpoint you're calling. Absolute URI or relative URI are accepted.  Use the absolute URI if you wish to use a different version of the API, etc. |
| URL params (For GET and DELETE) | If the API endpoint you're calling is a GET or a DELETE, you can pass in URL params.                                                                              |
| Input (For POST, PUT and PATCH) | If the API endpoint you're calling is a POST, PUT or a PATCH, you can pass in a JSON request body.                                                                |
| Output                          | Describe to Workato the output schema you expect the API to return. This will be used to generate the output datatree.                                            |

## Custom action example - building a Slack "List channels" action
Let's build a custom action on the Slack connector to add a reminder. We can refer to the [Slack API documentation](https://api.slack.com/methods/channels.list).

First, select the custom action on the Slack connector.

![Select the Slack custom action](/assets/images/developing-connectors/custom-actions/select-slack-custom-action.png)
*Select the Slack custom action*

Give this action a name. We'll name it "List channels" in this case. Notice that this changes the title of the action as well.

![Naming your custom action](/assets/images/developing-connectors/name-custom-action.gif)
*Naming your custom action*

Select the HTTP method of the request, based on the API endpoint you're calling. The API documentation should tell you the HTTP method. Slack's API tells us that `list channels` uses a GET method.

![Slack's API documentation for list channels](/assets/images/developing-connectors/custom-actions/slack-list-channels-http-method-docs.png)
*Slack's API documentation for list channels*

Once selected, relevant fields show up in the action for you to fill.

![Additional fields show up when you select HTTP method](/assets/images/developing-connectors/custom-actions/select-http-method.gif)
*Additional fields show up when you select HTTP method*

For the API path, put either `channels.list` or `https://slack.com/api/channels.list`.

![Adding URL endpoint for list channels](/assets/images/developing-connectors/custom-actions/add-url-endpoint.png)
*Adding URL endpoint for list channels*

Next, we'll define the request sent. For this API endpoint, there are no required arguments except for the authentication token, which is already handled by Workato via your established Slack connection.

![Slack API documentation on arguments for list channel endpoint](/assets/images/developing-connectors/custom-actions/slack-list-channels-http-method-docs.png)
*Slack API documentation on arguments for list channel endpoint*

We'll send in arguments anyway to optimize the response we get from the Slack API. Let's exclude archived channels, exclude member lists, and limit the number of chanels returned to 20. To do that, we'd need to define the params of the request, before actually providing any values. We're defining 3 params manually: `exclude_archived`, `exclude_members`, `limit`.

![Adding URL params for the custom action](/assets/images/developing-connectors/custom-actions/add-custom-action-params.gif)
*Adding URL params for the custom action*

After defining the params, we need to provide the values we want for them. In this case, we're hardcoding the values, but you can also replace these values with datapills if you wish to pass in variables.

![Filling in values for params](/assets/images/developing-connectors/custom-actions/fill-in-param-values.gif)
*Filling in values for params*

There's just one last thing to provide - the output schema. This can be typically copied from the API documentation and pasted into Workato. Here's the JSON response in Slack.

![Slack API documentation for list channels response](/assets/images/developing-connectors/custom-actions/slack-docs-list-channels-api-response.png)
*Slack API documentation for list channels response*

```
{
    "ok": true,
    "channels": [
        {
            "id": "C0G9QF9GW",
            "name": "random",
            "is_channel": true,
            "created": 1449709280,
            "creator": "U0G9QF9C6",
            "is_archived": false,
            "is_general": false,
            "name_normalized": "random",
            "is_shared": false,
            "is_org_shared": false,
            "is_member": true,
            "is_private": false,
            "is_mpim": false,
            "members": [
                "U0G9QF9C6",
                "U0G9WFXNZ"
            ],
            "topic": {
                "value": "Other stuff",
                "creator": "U0G9QF9C6",
                "last_set": 1449709352
            },
            "purpose": {
                "value": "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
                "creator": "",
                "last_set": 0
            },
            "previous_names": [],
            "num_members": 2
        },
        {
            "id": "C0G9QKBBL",
            "name": "general",
            "is_channel": true,
            "created": 1449709280,
            "creator": "U0G9QF9C6",
            "is_archived": false,
            "is_general": true,
            "name_normalized": "general",
            "is_shared": false,
            "is_org_shared": false,
            "is_member": true,
            "is_private": false,
            "is_mpim": false,
            "members": [
                "U0G9QF9C6",
                "U0G9WFXNZ"
            ],
            "topic": {
                "value": "Talk about anything!",
                "creator": "U0G9QF9C6",
                "last_set": 1449709364
            },
            "purpose": {
                "value": "To talk about anything!",
                "creator": "U0G9QF9C6",
                "last_set": 1449709334
            },
            "previous_names": [],
            "num_members": 2
        }
    ],
    "response_metadata": {
        "next_cursor": "dGVhbTpDMUg5UkVTR0w="
    }
}
Typical error response

{
    "ok": false,
    "error": "invalid_auth"
}
```

We can copy this and paste it in Workato to generate the output datatree.

![Generate output datatree in Workato with JSON response sample in API documentation](/assets/images/developing-connectors/custom-actions/generate-output-schema.gif)
*Generate output datatree in Workato with JSON response sample in API documentation*

This tells Workato what response schema to expect, and the datapills generated can be used in subsequent steps of the recipe to move data into other apps.

![Generated output datatree in Workato](/assets/images/developing-connectors/custom-actions/generated-output-datatree.gif)
*Generated output datatree in Workato*

However, if the actual response does not contain the data you have specified in this response sample, the datapills will not have a value.

For example, the above response body contains the member list, which we have excluded with the URL params `exclude_members` is `true` in our custom action. If we include the member list in our response sample, it will show up as datapills in the datatree, but will not have values until we change the value of `exclude_members` to `false`.

We now have our completed Slack custom action - we should now test it. If you want to quickly test a custom action without a trigger, you can use the Scheduler `New scheduled event` trigger.

![Completed Slack custom action to list channels](/assets/images/developing-connectors/custom-actions/full-slack-custom-action.png)
*Completed Slack custom action to list channels*

When the above action was tested, we cna see the input passed into the action in the detailed job history.

![Job history - input data](/assets/images/developing-connectors/custom-actions/list-channels-action-input.png)
*Job history - input data*

We can also see the detailed output returned by the Slack API and review if the API call was successful. As `ok` is `true`, it looks like this call was successful.

![Job history - output showing channel data returned](/assets/images/developing-connectors/custom-actions/list-channels-action-input.png)
*Job history - output showing channel data returned*
