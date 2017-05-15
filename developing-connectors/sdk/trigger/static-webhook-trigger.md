# Static Webhook Trigger

A static webhook trigger is one that requires manual registration. This usually involves a user creating a webhook in the application user interface with a pre-defined webhook URL. It defers from a dynamic webhook because it requires a fixed webhook URL for use in the manual registration process, instead of having it be done in the background (programmatic subscription through the API when a user starts a recipe).

```ruby
webhook_keys: lambda do |params, headers, payload|
  params['spaceId']
end,

triggers: {
  new_message: {
    input_fields: lambda do
      [
        {
          name: 'space_id',
          label: "Space",
          control_type: "select",
          pick_list: "space_list",
          optional: false
        }
      ]
    end,

    webhook_key: lambda do |connection, input|
      input['space_id']
    end,

    webhook_notification: lambda do |connection, payload|
      payload
    end,

    dedup: lambda do |messages|
      messages['messageId']
    end,

    output_fields: lambda do |object_definitions|
      object_definitions['message']
    end
  }
}
```

## webhook_keys

This is a top level key (connnector-wide definition). This code block is called for each webhook notification. This code block should return the key(s) in the webhook notification that will be used to match any running triggers.

In a statically-registered webhook, this will be compared with each recipe that has a trigger running under this connector.
Those with matching results from their `webhook_key` hook (if any) will be "notified". When that happens, the webhook notification will be translated into trigger events to be processed in each respective recipe.

### webhook_keys Arguments

| Argument | Description |
| -- | ----- |
| params | A hash of all response URL parameters |
| headers | A hash of all response headers |
| payload | Original payload from the webhook POST/PUT notification. |

### Example

```ruby
webhook_keys: lambda do |params, _headers, _payload|
  params['spaceId']
end
```

In this example, the `webhook_keys` uses the spaceId of the webhook notification. Each webhook event received by this connector will be processed and identified by the spaceId. It is then matched against individual active triggers that have the same `webhook_key` value.

## webhook_key

This code block is used to filter incoming webhook notifications. All webhook notifications that have `key`s matching the one defined here will be translated into trigger events.

### webhook_key Arguments

| Argument | Description |
| -- | ----- |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |

### Example

```ruby
webhook_key: lambda do |connection, input|
  input['space_id']
end
```

In this example, the `key` defined here is the spaceId selected by the user from trigger input. When the recipe is started, only webhook notifications with matching spaceId values will be translated into a trigger event.

## webhook_notification

When the webhook trigger receives a webhook notification, the payload is processed through this block. Here, we can access the desired key that contains the webhook notification data.

### webhook_notification payload

| Argument | Description |
| -- | ----- |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| payload | Original payload from the webhook POST/PUT notification. |

### Example

```ruby
webhook_notification: lambda do |input, payload|
  payload
end
```
