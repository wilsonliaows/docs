---
title: Workato connectors - ServiceNow
date: 2017-02-16 06:15:00 Z
---

# ServiceNow
[ServiceNow](https://www.servicenow.com/) is a cloud software solution that offers a comprehensive suite of IT management software in the areas of IT service, IT operations, and IT business.

## API version
The ServiceNow connector uses [ServiceNow REST API V1](http://wiki.servicenow.com/index.php?title=REST_API#ServiceNow_REST_API_Resources).

## Supported editions and versions
The ServiceNow connector works with ServiceNow and ServiceNow Express editions.

All versions of ServiceNow is supported. However, only Istanbul (or later) supports OAuth 2.0 connection.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Version</th>
      <th>Release Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kingston</td>
      <td>Latest version</td>
    </tr>
    <tr>
      <td>Jakarta</td>
      <td>July 2017</td>
    </tr>
    <tr>
      <td>Istanbul</td>
      <td>January 2017</td>
    </tr>
    <tr>
      <td>Helsinki</td>
      <td>May 2016</td>
    </tr>
    <tr>
      <td>Geneva</td>
      <td>December 2015</td>
    </tr>
  </tbody>
</table>

## How to connect to ServiceNow on Workato
The ServiceNow connector supports 2 types of authentication
1. Username/Password (Basic authentication)
2. OAuth 2.0 (Authorization code grant)

### Choosing authentication type



### Username/Password

Select **Username/Password** authentication type to connect to your ServiceNow instance with your login credentials.

![Username/Password connection](/assets/images/connectors/servicenow/basic_connection.png)
*Username/Password connection*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this ServiceNow connection a unique name that identifies which ServiceNow instance it is connected to.</td>
    </tr>
    <tr>
      <td>Authentication type</td>
      <td>Choose an authentication type for this ServiceNow connection. The ServiceNow connector supports Username/Password (Basic) authentication and OAuth 2.0 using the authorization code grant.</td>
    </tr>
    <tr>
      <td>Instance name</td>
      <td>If your ServiceNow url is https://acme.service-now.com, then instance name is **acme**</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to ServiceNow.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to ServiceNow.</td>
    </tr>
  </tbody>
</table>

### OAuth 2.0

Select **OAuth 2.0** authentication type to connect to your ServiceNow instance without using your login credentials. This authentication type allows you to grant access to Workato by obtaining a token rather than disclosing your login credentials.

Only Istanbul (or later) versions of ServiceNow supports OAuth 2.0 connection with authorization code grant flow. Make sure that your ServiceNow version supports this when selecting this authentication type.

![OAuth 2.0 connection](/assets/images/connectors/servicenow/oauth_connection.png)
*OAuth 2.0 connection*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this ServiceNow connection a unique name that identifies which ServiceNow instance it is connected to.</td>
    </tr>
    <tr>
      <td>Authentication type</td>
      <td>Choose an authentication type for this ServiceNow connection. The ServiceNow connector supports Username/Password (Basic) authentication and OAuth 2.0 using the authorization code grant.</td>
    </tr>
    <tr>
      <td>Instance name</td>
      <td>If your ServiceNow url is https://acme.service-now.com, then instance name is **acme**</td>
    </tr>
    <tr>
      <td>Client ID</td>
      <td>Client ID to connect to use for authorization. More details about setting up Application Registry for an OAuth client below.</td>
    </tr>
    <tr>
      <td>Client secret</td>
      <td>Client secret for this OAuth application. Remember to click on the lock to reveal the actual secret.</td>
    </tr>
  </tbody>
</table>

### Setting up OAuth 2.0 client

Setting up an OAuth 2.0 client requires **admin** role.

Before creating a client application in **Application Registries**, remember to activate OAuth. Refer to this [guide](https://docs.servicenow.com/bundle/istanbul-platform-administration/page/administer/security/task/t_ActivateOAuth.html) for more details.

![Activate OAuth plugin](/assets/images/connectors/servicenow/oauth_plugin.png)
*Activate OAuth plugin*

Next, create an endpoint for a client application to gain access to your ServiceNow instance. Refer to this [guide](https://docs.servicenow.com/bundle/istanbul-platform-administration/page/administer/security/task/t_CreateEndpointforExternalClients.html) for more information. During this setup step, you will need to use the following URLs:

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Redirect URL</td>
      <td>https://www.workato.com/oauth/callback</td>
    </tr>
    <tr>
      <td>Logo URL</td>
      <td>https://www.workato.com/blog/wp-content/uploads/2015/10/workato-logo-small.png</td>
    </tr>
  </tbody>
</table>

![OAuth 2.0 client](/assets/images/connectors/servicenow/oauth_client.png)
*OAuth 2.0 client*

When the client application is successfully setup, use the Client ID and Client secret in when creating a ServiceNow connection in Workato. This will trigger an OAuth authorization code grant flow that opens a new brower window that requests for authorization.

![Authorization window](/assets/images/connectors/servicenow/authorization_window.png)
*Authorization window*

### Roles and permissions required to connect
ServiceNow users need the **rest_service** role in order to connect to ServiceNow on Workato.

In addition, to use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role in order to access the full list of possible tables (ServiceNow objects, such as incidents), as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description).

## Working with the ServiceNow connector

### Using generic triggers and actions
In addition, to use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role in order to access the full list of possible tables (ServiceNow objects, such as incidents), as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description).
