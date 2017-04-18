---
title: App connections
date: 2017-03-04 18:00:00 Z
---

# App connections
For every app your recipe interacts with, Workato needs to be authorized to communicate with the apps on your behalf. Workato typically uses the apps API and it may require Oauth based authorization, or API keys, etc.

This authorization is referred to as an app **connection**.

In many cases recipes will require a valid app connection before triggers and actions can be configured, to retrieve custom objects and fields, picklist values and other information ('meta-data') that helps with recipe construction.

![Unconnected Salesforce action](/assets/images/recipes/connections/unconnected-salesforce-action.png)
*Recipe prompts user to connect to their Salesforce organization. You will notice that the picklist is greyed out. This is because the recipe needs a valid connection to Salesforce to get the list of available Salesforce objects.*

Connections are created when a user authenticates with the app via Workato, and gives permission to Workato to access the data. Each connection should correspond to one app instance, hence multiple recipes can and should utilize the same connection if working with the same app instance.

# Authentication
Authentication (or authorization) usually occur the following standard ways, although there are some apps with custom authentication flows.
- OAuth2
- OAuth1 (and variations)
- Basic authentication
- API key or secret

In each of the highlighted authentication flows, an app user has to authorize Workato with the permission to access app data. The exact permissions Workato will get to read from and write to the app usually corresponds with the permissions of the connected app user.

For more information on connecting to a specific app, refer to the specific app connector documentation.

## Example: Authentication flow for Salesforce
The following recipe requires both Salesforce and a Zendesk connections, which are both OAuth2. The **Connection** tab within the recipe shows further details about the app connections.

![Example recipe](/assets/images/recipes/connections/example-recipe.png)
*Recipe syncing new/updated Salesforce accounts to Zendesk as organizations [Example recipe](https://www.workato.com/recipes/480360)*

The following shows the **Connections** tab. Zendesk has been connected, but the Salesforce connector has no connection established yet.

![Unconnected Salesforce](/assets/images/recipes/connections/unconnected-salesforce.png)
*Recipe without a Salesforce connection established*

Clicking on the **Connect** button generates a popup that requests for Salesforce login credentials. Because Salesforce utilizes the standard OAuth2 authentication flow, usernames and passwords are provided only to Salesforce. Providing these credentials assure Salesforce that the user is giving permission for Workato to access their Salesforce data.

![Salesforce connection popup](/assets/images/recipes/connections/salesforce-connection-popup.png)
*OAuth2 authentication popup for Salesforce*

After providing credentials, Salesforce will show up as connected. Now the recipe can use this connection for construction and running.

![Connected Salesforce](/assets/images/recipes/connections/connected-salesforce.png)
*Recipe with Salesforce and Zendesk connections established*

# Integration user
Workato recipes typically automate workflows for a company or a department, on behalf of many users. i.e. the integrations will work no matter who created an invoice or a ticket. This requires that the connection used has broader permission that spans multiple users. As a result, the connected user is typically a special integration user created just for integration purposes.

For example:
- A recipe that moves new Salesforce accounts into Zendesk as new organizations will need read access to Salesforce accounts and write access for Zendesk organizations.
- A recipe that moves new Salesforce cases into JIRA as new issues will need read access to Salesforce cases and write access for JIRA issues.

Apps have different granularity when it comes to defining user roles and permissions. Refer to the specific connector documentation for more information on required permissions to connect to the app.

# Using connections
Typically a company may only have a single instance of an app and they may have another instance a sandbox for testing, etc. So a user would need just one connection for multiple recipes that work with the same app instance.

In cases whereby there are more than one app instance to connect to, e.g. when working with sandboxes and production organizations or teams, multiple connections should be created, with each connection authenticated with each separate instance.

Most Workato connectors allow only one connection to an app within a recipe.There are some connectors which allows you to work with two app instances within the same recipe.

Here is an example where the same recipe works with two Saleforce instances i.e. primary and secondary connectors.

![Secondary Salesforce connections](/assets/images/recipes/connections/primary-secondary-connectors.gif)
*Recipe with primary and secondary Salesforce connectors [Example recipe](https://www.workato.com/recipes/487648)*

The recipe requires two Salesforce connections.

![Secondary Salesforce connections](/assets/images/recipes/connections/secondary-app-connections.png)
*Primary and secondary Salesforce connections*

Refer to the [secondary connectors article](/features/secondary-connections.md) to find out more.
