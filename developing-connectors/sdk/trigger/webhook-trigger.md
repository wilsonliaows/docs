# Webhook Trigger

```ruby
triggers: {
  new_message: {
    type: :paging_desc,

    input_fields: lambda do |object_definitions|
      object_definitions["room"].only("id")
    end,

    webhook_subscribe: lambda do |webhook_url, connection, input, recipe_id|
      post("https://api.ciscospark.com/v1/webhooks",
           name: "Workato recipe #{recipe_id}",
           targetUrl: webhook_url,
           resource: "messages",
           event: "created",
           filter: "roomId=#{input['id']}")
    end,

    webhook_notification: lambda do |input, payload|
      payload["data"]
    end,

    webhook_unsubscribe: lambda do |webhook|
      delete("https://api.ciscospark.com/v1/webhooks/#{webhook['id']}")
    end,

    dedup: lambda do |message) {
      message["id"]
    end,

    output_fields: lambda do |object_definitions|
      object_definitions["message"]
    end
  }
}
```

## webhook_subscribe

This block is called when the recipe is being started to run necessery API calls to subscribe for further webhook notifications. The endpoint that supposed to be register is passed in `webhook_url` parameter with other data that could be useful while registering the webhook.

## webhook_unsubscribe

This block will be called after recipe start to unsubscribe from webhook notifications.

## webhook_notification

POST/PUT HTTP requests can be used to notify about new trigger events. JSON-encoded payload is expected. This block is called to extract trigger output data from webhook notification payload (`payload` attribute). Original trigger input is also available in this block (`input` attribute)