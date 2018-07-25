---
title: Webhooks
date: 2018-07-23 16:30:00 Z
---

# Webhooks
You can use Workato's [HTTP connector](http-connector.md) to receive webhooks from your applications. In this article, we walk you through how to setup a webhook trigger.

## Authentication
If you’re interested only in receiving webhooks from your app, you won’t even need to set up any connection or go through the authentication flow. When setting up your HTTP connection, select the authentication type as `None`.

## Building webhook triggers
If the app you wish to integrate with supports webhooks, that should be listed in the app’s API documentation. Webhooks are notifications sent out immediately by your app to a target URL when an event happens. Usually, you’re able to define what specific event you wish to receive notifications for. To build a webhook trigger in Workato, we’ll direct these notifications to your Workato recipe, so that it will trigger and execute the recipe actions whenever the event happens in your app.

For example, you can choose to build a webhook trigger that notifies your recipe whenever new customer tickets are marked with status ‘Urgent’, and have an action to send out an SMS to the account manager for this customer. In this case, the recipe will help to ensure urgent tickets are responded to in a timely fashion.

These are the input fields in Workato's webhook trigger. Let's run through the key fields to note when building a webhook trigger.

![HTTP connector's webhook trigger](/assets/images/http/http-webhook-trigger.png)
*HTTP connector's webhook trigger*

### Webhook configuration input fields 

#### Workato-generated target URL
URL address to direct your app-generated webhooks. The string of 36 characters generated in this URL is unique to your account, so keep it safe - otherwise anyone else on the internet can send you random data!

By default, this URL is incomplete. Provide an event name in order to generate a full URL to be used as a target URL.

#### Event name
Used to describe what you’re doing in this trigger. Put a descriptive name here so that you remember what is the specific event you’re receiving notifications for.

The event name will also be appended to the end of the Workato-generated URL in order to generate an URL which is unique to this recipe. 

#### Webhook type
Tell the recipe what is the type of webhook to expect, as well as the format of the data coming in, so that it knows how to decipher and process the payload. This depends on the specifications provided in the API documentation.

Some APIs may be able to send you webhook payloads in various formats - in that case, select the one you’re more comfortable with, and make sure to provide the payload in the correct format in the Webhook payload example input field.

#### Webhook payload example
Provide a sample of the webhook payload that’s expected to be sent by your app to Workato. Typically found in the API documentation - simply copy and paste it in the appropriate JSON, XML or form encoded format as you've defined previously. You can also add additional fields to this, in the correct format, if you know that there are custom values that will be sent by your app.

This payload example provided does not affect the actual payload being sent to Workato when a trigger event occurs. Instead, this sample schema is used to build the output datatree and its data pills, thus ensuring that you’re able to map the data coming in with your webhook properly to subsequent steps in your datatree.

![Configured Web Hook](/assets/images/http/configured-webhook.png)
*Example of a configured webhook trigger*

![trigger datatree](/assets/images/http/trigger-datatree.png)
*The trigger data schema corresponds to the webhook payload example provided in configuration*

### Example - building a new order trigger in Eventbrite
Perhaps we would like to build a real-time webhook trigger that triggers whenever a new order is placed in Eventbrite for your event “Christmas Marathon”. Let’s check out [Eventbrite’s webhook](https://www.eventbrite.com/developer/v3/reference/webhooks/)

#### Setting up the Workato HTTP trigger
We need to first get an URL from Workato to send our webhooks to. To do that, let’s start creating a webhook trigger on Workato. I've filled in the event name I want to create a complete target URL, and I've selected a PUT/POST with JSON payload as I know that's the format for Eventbrite webhooks.

I've entered an empty JSON schema into the webhook payload example as I'm not too sure what my payload looks like yet.

![Configuring Webhook](/assets/images/http/configuring-webhook-trigger.png)
*Configuring webhook trigger with the event name and empty payload example*

#### Setting up the Eventbrite webhook
In Eventbrite, navigate to *Account Settings* > *Webhooks* to add a webhook. Input the payload URL obtained from Workato, and select the event you wish to monitor (‘All events’ is also available as an option). You can see that you’re able to select a variety of events to listen to and trigger upon, but in this case we just want to monitor new order for our Christmas Marathon event.

![Configuring Webhook](/assets/images/http/creating-a-webhook.png)
*Creating webhook to monitor new orders placed in Eventbrite*

You can send in a test order to test the trigger, either via the webhook configuration page, or by creating an order on the event you’re monitoring. If you’ve set up the webhook trigger successfully, you should receive a job.

In this case, I've successfully ran a test job, and I can view the webhook payload by going to the trigger output tab in my job details page.

![Job details output](/assets/images/http/job-details-output.png)
*Job details output tab showing the actual JSON response from Eventbrite*

#### Testing the trigger & retrieving API response to generate datatree
We're almost done with our webhook, but we still need to be able to generate a datatree for use in subsequent steps in our recipe. With the empty payload we had entered above, there's no trigger datatree available in subsequent recipe steps.

![Empty webhook](/assets/images/http/empty-webhook.png)
*With an empty webhook payload example, no datatree is generated in the action steps*

We can move the JSON response we obtained in the job history details to the payload example section with some tweaking to ensure it's formatted in JSON. Alternatively, we can also simply retrieve the JSON from the API documentation, if available.

![Manage webhook](/assets/images/http/request-payload.png)
*Request payload can be retrieved via the webhook management console in Eventbrite*

The following is the JSON response that we should be inputting into the webhook payload example field.

JSON formatted webhook payload example:
```ruby
{
"config": {
"action":"order.placed",
"user_id":"144138753572",
"endpoint_url":"https://www.workato.com/webhooks/rest/4c364864-e1f8-4c58-b6af-29127d1f6b60/order",
"webhook_id":"287968"
},
"api_url":"https://www.eventbriteapi.com/v3/orders/579759447/"
}
```

#### Completed webhook trigger
That’s it! You have now created an Eventbrite webhook trigger for yourself. Take note that this trigger only passes you the API URL to fetch the actual data of the order that has been placed. To fetch this data, you can create a quick REST action to GET an order with this API URL, which we covered [here]().

![Configured webhook trigger](/assets/images/http/configured-web-hook-trigger.png)
*Configured webhook trigger*

We can see the datatree of this webhook trigger, which is generated by the sample webhook payload provided in the trigger configuration.

![Webhook datatree trigger](/assets/images/http/webhook-trigger-datatree.png)
*Webhook datatree*
