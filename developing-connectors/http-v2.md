---
title: HTTP connector V2
date: 2018-07-23 15:00:00 Z
---

# HTTP connector V2
The HTTP connector enables integration with any cloud applications that has a HTTP based API. You can create a new connector as well as add new triggers or actions to existing Workato connectors.

This article covers the V2 HTTP connector, which launched in July 2018. If you are using the V1 HTTP connector (which has been deprecated), refer to the [V1 HTTP connector documentation](http.md).

## What is the HTTP connector and what is it useful for?
The generic HTTP connector allows you to interact with cloud applications with an application program interface (API). This allows you to build additional triggers or actions on the Workato platform to power your integration recipes.

With the HTTP connector, it takes less than 20 minutes to build your own action on Workato. This article walks you through:

- [Setting up a connection to your app](#setup-your-http-connection)

- [Building a webhook trigger](http.md#building-webhook-triggers)

- [Building an HTTP action](#building-a-workato-action-example---create-venue-in-eventbrite)

Want to create an invoice in your accounting system? You can make a POST request with a JSON request body. Want to retrieve metrics from your analytics application? You can make a GET request with your query parameters. Want to trigger off upon new leads filling out your online form? Create a webhook trigger that notifies Workato immediately whenever a new lead completes your form.

## HTTP triggers and action
The HTTP connector can be found in the connector picklist. It has 2 triggers and 1 action:

- New event via webhook trigger (real-time)

Workato provides you with an unique target URL to send webhooks to. Webhooks received will be immediately processed by the recipe as a trigger event.

- New event via polling trigger

Workato polls the app endpoint regularly to check for new trigger events. Each new/updated record will be processed by the recipe as a trigger event.

- Make request action

Formulate and send a request to an endpoint and receive a response back.

![HTTP connector where make request action has been selected](/assets/images/developing-connectors/http/select-http-action.png)
*HTTP connector where make request action has been selected*

## Setup your HTTP connection
In order to interact with an API, we first need to set up our connection to the app to interact with. Click the `Link your account` button and the connection popup appears.

![Connection popup for HTTP connector](/assets/images/developing-connectors/http/connection-popup.png)
*Connection popup for HTTP connector*

Configure the following input fields to connect successfully. Apart from authentication type and fields subsequently generated when a type is selected, most fields can usually be left to their default values.

| Input field                       | Description                                                                                                                                                                                             |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connection name                   | Give your HTTP connection a name to identify this connection.                                                                                                                                           |
| Authentication type               | Type of authentication used to connect to your app. Refer to the API documentation of the app you're connecting to for more information.                                                                |
| Use client SSL certificate        | `Yes` if your API requires client SSL certificates. `No` if it does not require client SSL certificates.                                                                                                |
| Enable restricted IP              | Platform level IP whitelisting has replaced connection-level IP whitelisting. This field will be deprecated on 1 Aug 2018. Refer [here](/security.md#ip-whitelists) for IP addresses whitelist.         |
| Is this app in a private network? | `Yes` if you're connecting to an on-premise app behind the firewall. This requires an [on-premise agent](/on-prem.md) to be set up in Workato. `No` if you're connecting to an app on the public cloud. |

The following section details the different authentication types and how to set them up. The process of setting up a non-OAuth2 connection on Workato is similar regardless of the authentication type. This is because after setting up the non-OAuth2 connection, you would need to test it out to ensure that it's valid. To do that, you would need to send out a test API request - a simple one would be a GET request. If it succeeds, you know that the connection is valid.

In this article, we provide a [basic auth example](#authentication-type-basic) as an example of a non-OAuth2 connection and an [OAuth2 example](#authentication-type-oauth2).

### Authentication type: None
This allows you to create a connection without providing any authentication details. This is usually the case when you wish to just receive a webhook trigger from the app. Workato generates a URL for you to direct your webhooks to, and retrieves information from the webhook payload sent in.

![HTTP connector authentication type: None](/assets/images/developing-connectors/http/http-connector-auth-none.png)
*HTTP connector authentication type: None*

### Authentication type: Basic
This requires your username and password. An alternative to your username and password would be an API key or API token, retrieved from your account settings. This is encoded with Base64 in transit, over SSL. This is a common authentication flow.
![HTTP connector authentication type: Basic](/assets/images/developing-connectors/http/http-connector-auth-basic.png)
*HTTP connector authentication type: Basic*

### Example - connecting to Jira via basic authentication and testing the connection via a GET action
Let’s try to connect to Jira using basic authentication - Jira's documentation for basic authentication can be found [here](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/?_ga=1.137752242.320850437.1478498822). In the case of JIRA, we need to provide several things: subdomain (which tells us what JIRA company instance to connect to, essentially - your company’s Jira database), username, password.

For this example, I’ve created a company instance in Jira with a company name Workato321, and Jira has automatically assigned my subdomain to be workato321.atlassian.net

I’ve also created a project in my new Jira instance, named PPP, to be used for testing out my connection later.

#### Setting up your Jira connection

![Jira Connection](/assets/images/http/jira-connection.png)
*Jira screenshot with subdomain workato321.atlassian.net and existing project PPP*

We can provide our username and password in the connection settings as below. For the field **On-prem secure agent**, I selected no gateway as my Jira instance is on the cloud.

![Jira Connection settings](/assets/images/http/connection-settings-jira.png)
*Jira connection settings*

Click `Connect`. For non-OAuth2 connections, remember to send a quick test request, e.g. a GET request, to verify that you are successfully connected to the app.

### Authentication type: Header auth
For applications which require additional headers outside of the usual username and password or API key, or if you want to customize the headers sent in the request. Header authentication can be used when you have a generated token ready for use.
![HTTP connector authentication type: Header auth](/assets/images/developing-connectors/http/http-connector-auth-header.png)
*HTTP connector authentication type: Header authorization*

### Authentication type: Query params
For applications where the authentication structure is based on validating an API key as a parameter. What you need to do is to add the parameter key/value pair in the params authorization field.
![HTTP connector authentication type: Query params](/assets/images/developing-connectors/http/http-connector-auth-query-params.png)
*HTTP connector authentication type: Query params*

### Authentication type: Custom
Custom allows you to use a combination of input fields as needed.
![Custom http connector](/assets/images/developing-connectors/http/http-connector-auth-custom.png)
*HTTP connector authentication type: Custom*

| Input field                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization URL                                   | URL that Workato redirects you to when you click on the ‘Connect’ button. This usually brings you to the login screen of your app. Some APIs require that you include certain parameters in the authorization URL. Common examples are response_type (`code` or `token`) and scope (`read`, `write`, `admin`, etc).,This should be publicly available from the API documentation of the app you’re connecting to, under the Authentication section. |
| Token URL                                           | URL that Workato will retrieve an auth token from. This auth token is used to verify that we have permission to access your app and its data. This should be publicly available from the API documentation of the app you’re connecting to, under the Authentication section.                                                                                                                                                                       |
| Client ID and client secret                         | The client ID identifies you as the user who’s sending these API calls, while the client secret authenticates that you as this user. This is usually found in the Settings or Integrations page (or equivalent) of your logged in app account that you wish to connect to. This is specific to your account and should be kept secret.                                                                                                              |

In addition, it requires you to have the following information ready.

### Authentication type: OAuth2 (authorization code grant)
OAuth2 is the authentication standard adopted by a number of cloud apps. It’s widely adopted because it allows you to give third parties access to your apps without having to disclose your username and password to the third party. In this case, Workato simply redirects you to your app, where you key in your login credentials, and that’s sufficient for the app to trust that Workato is acting on your behalf when it makes API requests.

The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.

![HTTP (OAuth2 auth code grant) connector's connection fields](/assets/images/developing-connectors/http/http-connector-auth-oauth2-code-grant.PNG)
*HTTP (OAuth2 authorization code grant) connector's connection fields*

### Authentication type: OAuth2 (client credentials grant)
Using the client credentials grant, the client can request an access token using only its client credentials. This is usually used when the client is requesting access to the protected resources under its control or for machine-to-machine authentication where a specific user’s permission to access data is not required.

The client credentials grant type must only be used by confidential clients.

![HTTP (OAuth2 client cred grnat) connector's connection fields](/assets/images/developing-connectors/httphttp-connector-auth-oauth2-cred-grant.PNG)
*HTTP (OAuth2 client credentials grant) connector's connection fields*

OAuth2 authentication type requires the following fields.


| Information                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Credentials                                         | A set of username and password for logging into your app to give permission for Workato to access the data in the app. This user (to whom the credentials belong) should have the correct permissions to read/write to the records (e.g. customer records, sales invoice records) you want to access. |
|  Redirect/callback URL (to be configured in the app) | The URL provided to the app for redirection back to Workato after going through the authentication flow and credentials/token exchange. Provide this URL `https://www.workato.com/oauth/callback` to the app if it asks for it in the Integration setup screen.                                                                                                              |


#### Example - connecting to Eventbrite via OAuth2
Let us run through an example of how we can connect to an OAuth2 application. In this case, we’ll use Eventbrite, an events management and ticketing application.

![Eventbrite OAuth2 authentication page](/assets/images/http/eventbrite-authentication.png)
*Eventbrite OAuth2 authentication page*

From the documentation page, we can obtain 2 of the required fields for our connection - the authorization URL and the access token URL. We would need to append further parameters to the URL. Eventbrite's documentation mentions that we'd need to post to this URL: `https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_KEY`

But as Workato will handle the client key, the following is what's needed in the input field to connect.

Eventbrite authorization URL:
```ruby
https://www.eventbrite.com/oauth/authorize?response_type=code
```
Eventbrite access token URL:
```ruby
https://www.eventbrite.com/oauth/token
```

In order to connect to your Eventbrite account successfully, you would also need a set of client ID and client secret. To obtain this, you will need to register an app with Eventbrite so that they can assign the app with a client ID and secret. Log into Eventbrite and navigate to Account Settings > App Management.

![Eventbrite's App Management screen](/assets/images/http/eventbrite-app-management.png)
*Eventbrite's app management screen*

In the app management page, you will be able to find your client ID (also called key). Expand the Show Client Secret and OAuth Token section to retrieve the client secret, and navigate to the App Extension section to input the callback URL `https://www.workato.com/oauth/callback` into Eventbrite.

![Completed Eventbrite connection](/assets/images/developing-connectors/http/http-connector-auth-oauth2.png)
*Completed Eventbrite connection*

## Building a Workato action example - Create venue in Eventbrite
You’re able to build any actions supported by an API on the HTTP connector - for example, create, update, search, get, delete actions. Workato has a 3-step HTTP wizard that prompts you to make a test request to the API endpoint. This wizard will try to provide a recommended HTTP configuration for your endpoint as much as possible.

To start, give your request a name to identify it. This also changes the Workato action name at the recipe-level.

![Provide request name](/assets/images/developing-connectors/http/provide-request-name.gif)
*Provide request name*

Subsequently, click `Configure action`.

### Step 1: Provide HTTP method and request URL
To begin, provide the absolute API endpoint you wish to call, and the HTTP method of that endpoint. These should be available via the app's API documentation.

![Step 1: Provide HTTP method and request URL](/assets/images/developing-connectors/http/step1-provide-request-url.png)
*Step 1: Provide HTTP method and request URL*

In this example, we wish to create a venue in Eventbrite. When referring to the documentation, we see that this API is a POST call with an endpoint of `https://www.eventbriteapi.com/v3/venues/`. We'll fill out the fields as follows.

![Configuring HTTP method and request URL](/assets/images/developing-connectors/http/step1-configured-method-and-url.gif)
*Configuring HTTP method and request URL*

### Step 2: Configure and send sample request
Step 2 is where you configure the sample request to send to the API endpoint. For some endpoints, Workato recommends a sample request to send, which you can either choose to customize further or remove entirely to build it from scratch. In our example, Workato recommends a sample request body for Eventbrite's create venue endpoint, which we'll choose to use.

![Step 2: RecipeIQ recommendations for HTTP configuration](/assets/images/developing-connectors/http/step2-recipeiq-recommendation.png)
*Step 2: RecipeIQ recommendations for HTTP configuration*

For endpoints which Workato has not seen before, or if you chose to remove RecipeIQ recommendations, you'll see the following screen.

![Step 2: Configure and send sample request](/assets/images/developing-connectors/http/step2-unconfigured.png)
*Step 2: Configure and send sample request*

You can copy and paste sample request JSON from the API docs to create your sample request body and add required headers.

To create a sample Eventbrite venue, we used the recommended JSON request body and added values for Madison Square Garden:

```ruby
{
  "venue": {
    "name": "Madison Square Garden",
    "address": {
      "address_1": "4 Pennsylvania Plaza",
      "city": "New York City",
      "region": "",
      "postal_code": "10001",
      "country": "US"
    }
  }
}
```

Once all required fields are filled in, we're able to click `Send request`. Workato sends the request you've built to the app, and provides the full response back. In the following, we see that there's an error with the country we sent to Eventbrite as they only accept 2 character country codes.

![Request error due to wrong country code value](/assets/images/developing-connectors/http/request-error.png)
*Request error due to wrong country code value*

Changing the country value from "USA" to "US" should resolve that. Click on `Back` to edit the JSON request, then on `Send request` again. Our request should be successful this time.

![Request successful](/assets/images/developing-connectors/http/request-success.png)
*Request successful*

Check the connected application to see if your changes are successfully reflected on the system. In our example, we should see that the venue Madison Square Garden has been added to our Eventbrite venues list.

### Step 3: Review HTTP configuration
With a successful request, we know that:
- the connection has been set up successfully,
- the API endpoint we're sending our request to is correct, and
- we're sending the right set of request body fields e.g. all required fields with valid values

We can choose to customize our request further by going back to Step 2 to configure our request and sending another sample request. When we're happy with the configuration, click `Apply configuration`. The request and response will be saved to the Workato HTTP action, and the HTTP wizard returns you to the recipe page.

![Configuration applied for HTTP action](/assets/images/developing-connectors/http/configuration-applied.gif)
*Configuration applied for HTTP action*

## Final HTTP configuration
We know that this configuration works - now it's time to replace the static values with datapills that hold dynamic values. This is because we don't want every single job to create the venue Madison Square Garden - we want each job to automatically create the new venue that had been created in Salesforce. We should do the same for any values that should be dynamic instead of static.

![Replace static values with datapills](/assets/images/developing-connectors/http/replace-static-values-with-datapills.gif)
*Replace static values with datapills*

This is what the HTTP configuration should look like after I've put in my relevant datapills. This HTTP action is now ready to be used!

![Completed HTTP action](/assets/images/developing-connectors/http/completed-http-action.gif)
*Completed HTTP action*
