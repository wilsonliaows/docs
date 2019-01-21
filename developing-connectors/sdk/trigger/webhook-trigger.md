# Dynamic Webhook Trigger

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

    dedup: lambda do |message|
      message["id"]
    end,

    output_fields: lambda do |object_definitions|
      object_definitions["message"]
    end
  }
}
```

## webhook_subscribe

When a recipe is started, a webhook subscription should be created. This webhook subscription should be given the "callback url" specific to the recipe to receive and process as jobs. This block is responsible for this subscription.

This block is executed whenever a recipe is started. The block usually contains the necessary API requests to create a webhook subscription. This request is typically a **POST** request with a payload containing the relevant data for successful event notifications.

```ruby
webhook_subscribe: lambda do |webhook_url, connection, input, recipe_id|
  post("https://api.ciscospark.com/v1/webhooks",
       name: "Workato recipe #{recipe_id}",
       targetUrl: webhook_url,
       resource: "messages",
       event: "created",
       filter: "roomId=#{input['id']}")
end
```

### webhook_subscribe Arguments

| Argument | Description |
| -- | ----- |
| webhook_url | URL specific to the recipe. This URL is randomly generated and points to the recipe that uses this trigger. A second recipe that uses the same trigger will have a different unique URL. All webhook subscription will require this URL. |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| recipe_id | Recipe ID of the recipe using this trigger. This is useful to identify webhook-recipe pairs in the event of multiple pairs. |

### Output

Output of the webhook_subscribe block is the response from the **POST** request in this example. It usually contains useful information about the webhook that is used in the future. This output will be stored and passed to the webhook_unsubscribe block as an argument.

```json
{
  "id" : "96abc2aa-3dcc-11e5-a152-fe34819cdc9a",
  "name" : "My Awesome Webhook",
  "targetUrl" : "https://example.com/mywebhook",
  "resource" : "messages",
  "event" : "created",
  "filter" : "roomId=Y2lzY29zcGFyazovL3VzL1JPT00vYmJjZWIxYWQtNDNmMS0zYjU4LTkxNDctZjE0YmIwYzRkMTU0",
  "secret" : "86dacc007724d8ea666f88fc77d918dad9537a15",
  "created" : "2015-10-18T14:26:16+00:00"
}
```

## webhook_unsubscribe

This block will be called when a running recipe is stopped. It should contain an expression to unsubscribe from the existing webhook notifications.

```ruby
webhook_unsubscribe: lambda do |webhook, connection|
  delete("https://api.ciscospark.com/v1/webhooks/#{webhook['id']}")
end
```

### webhook_unsubscribe Arguments

| Argument | Description |
| -- | ----- |
| webhook | This will contain the output of the webhook_subscribe block. In this example, it will contain the JSON response shown above. For this particular API, making a DELETE request to the resource endpoint will unsubsribe the webhook from notifications and effectively stop the recipe from receive any new notifications. |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |

## webhook_notification

When the webhook trigger receives a webhook notification, the payload is processed through this block. Here, we can access the desired key that contains the webhook notification data.

### webhook_notification payload

| Argument | Description |
| -- | ----- |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| payload | original payload from the webhook POST/PUT notification. |

Extract from the CiscoSpark API documentation:
> "When one of your webhooks is triggered, Spark will send an HTTP POST to your backend at the specified targetUrl. The body of the POST will look something like this:"

```json
{
  "id":"Y2lzY29zcGFyazovL3VzL1dFQkhPT0svZjRlNjA1NjAtNjYwMi00ZmIwLWEyNWEtOTQ5ODgxNjA5NDk3",
  "name":"Guild Chat to http://requestb.in/1jw0w3x1",
  "resource":"messages",
  "event":"created",
  "filter":"roomId=Y2lzY29zcGFyazovL3VzL1JPT00vY2RlMWRkNDAtMmYwZC0xMWU1LWJhOWMtN2I2NTU2ZDIyMDdi",
  "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi8xZWI2NWZkZi05NjQzLTQxN2YtOTk3NC1hZDcyY2FlMGUxMGY",
  "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8xZjdkZTVjYi04NTYxLTQ2NzEtYmMwMy1iYzk3NDMxNDQ0MmQ",
  "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
  "ownedBy": "creator",
  "status": "active",
  "actorId": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8xZjdkZTVjYi04NTYxLTQ2NzEtYmMwMy1iYzk3NDMxNDQ0MmQ",
  "data":{
    "id":"Y2lzY29zcGFyazovL3VzL01FU1NBR0UvMzIzZWUyZjAtOWFhZC0xMWU1LTg1YmYtMWRhZjhkNDJlZjlj",
    "roomId":"Y2lzY29zcGFyazovL3VzL1JPT00vY2RlMWRkNDAtMmYwZC0xMWU1LWJhOWMtN2I2NTU2ZDIyMDdi",
    "personId":"Y2lzY29zcGFyazovL3VzL1BFT1BMRS9lM2EyNjA4OC1hNmRiLTQxZjgtOTliMC1hNTEyMzkyYzAwOTg",
    "personEmail":"person@example.com",
    "created":"2015-12-04T17:33:56.767Z"
  }
}
```

Looking at the sample payload, the main message data is bested in the "data" object. Hence, we just need to access and return this "data" object in the webhook_notification block output. This output is then processed in through the trigger into the recipe as a job.

```ruby
webhook_notification: lambda do |input, payload|
  payload["data"]
end
```
