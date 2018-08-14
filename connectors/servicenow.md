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

### Username/Password

Select **Username/Password** authentication type to connect to your ServiceNow instance with your login credentials.

![Username/Password connection](/assets/images/connectors/servicenow/basic_connection.png)
*Username/Password connection*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
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
      <td>If your ServiceNow url is https://acme.service-now.com, then instance name is <b>acme</b>.</td>
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
        <th width='25%'>Field</th>
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
      <td>If your ServiceNow url is https://acme.service-now.com, then instance name is <b>acme</b>.</td>
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
        <th width='25%'>Field</th>
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

## Roles and permissions required to connect

To use the ServiceNow connector, the connection must be established with a user that has roles(s) with access control to the following tables.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Table</th>
      <th>Purpose</th>
      <th>Operation</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='https://docs.servicenow.com/bundle/jakarta-platform-administration/page/administer/table-administration/reference/r_TablesModule.html'>Tables</a> (sys_db_object)</td>
      <td><b>Tables</b> is a table that contains a row for each table in your ServiceNow instance. This table is used to generate a list of tables to perform an action or trigger events from.</td>
      <td>read</td>
      <td>
        sys_db_object<br>
        sys_db_object.*
      </td>
    </tr>
    <tr>
      <td><a href='https://docs.servicenow.com/bundle/jakarta-platform-administration/page/administer/data-dictionary-tables/concept/c_SystemDictionary.html'>Dictionary Entry</a> (sys_dictionary)</td>
      <td>Contains details for each table and columns in each table in your ServiceNow instance. This table is used to generate input and/or output fields when you select a table to perform and action.</td>
      <td>read</td>
      <td>
        sys_dictionary<br>
        sys_dictionary.*
      </td>
    </tr>
  </tbody>
</table>

Some [Base system roles](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/roles/reference/r_BaseSystemRoles.html) (such as **admin**) will include access control to these tables. However, if you wish to grant only the minimum required access control to use the ServiceNow connector, you may want to [create a custom role](#create-a-custom-role) with these access control.

On top of these, the user must also have the necessary access control to the tables that are required in the integration use case. For example, to create an integration user that can perform standard ITIL helpdesk actions (open, update, close incidents, problems, changes, configuration management items), you will need to assign it the **itil** role. To grant access only to specific tables or tables besides those available in the base system roles, we recommend [creating custom roles](#create-a-custom-role) and assigning the appropriate access control as needed.

### Create a custom role

If you do not wish to use any of the [Base system roles](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/roles/reference/r_BaseSystemRoles.html) to connect to Workato. You can create a custom role with sufficient access control for the tables you want to work with.

First, create a role in your ServiceNow instance with a name that indicates usage with the Workato connector (For example, *Workato integrator*). Refer to this [documentation ](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/roles/task/t_CreateARole.html) for more details about creating roles. When this is completed, your new role must be given the following access control rules to use the ServiceNow connector.

Only a user with **security_admin** role has the ability to edit or create access control. Check with your ServiceNow administrator if you are unsure. Refer to this [documentation](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/contextual-security/concept/access-control-rules.html) for more details about access control.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Table</th>
      <th>Type</th>
      <th>Operation</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tables</td>
      <td>record</td>
      <td>read</td>
      <td>
        sys_db_object<br>
        sys_db_object.*
      </td>
    </tr>
    <tr>
      <td>Dictionary Entry</td>
      <td>record</td>
      <td>read</td>
      <td>
        sys_dictionary<br>
        sys_dictionary.*
      </td>
    </tr>
  </tbody>
</table>

*Basic Access Control required*

Next, this role should be assigned the relevant access control to use the triggers/actions you need in your integration use case. For a workflow that requires triggering of closed incident events, the user must have a custom role that includes access control to *read* and *write* to the incident table.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Table</th>
      <th>Type</th>
      <th>Operation</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Incident</td>
      <td>record</td>
      <td>read</td>
      <td>incident</td>
    </tr>
    <tr>
      <td>Incident</td>
      <td>record</td>
      <td>write</td>
      <td>incident</td>
    </tr>
  </tbody>
</table>

*Additional Access Control required for specific table(s)*

Remember to elevate to a privileged role (security_admin) to edit Access Control records.

![Elevate to privilege role](/assets/images/connectors/servicenow/elevate_privilege_acl.gif)
*Elevate to privilege role*

![Granting access control rule for `incident` table to custom role](/assets/images/connectors/servicenow/incident_table_access_control.png)
*Granting access control rule for `incident` table to custom role*

### Real-time trigger

The ServiceNow connector features a set of real-time triggers for new and updated records in a selected table. This trigger uses the `sys_script` table to send HTTP requests to Workato's webhook gateway when the specified event (new or new and updated records) occurs in your ServiceNow instance.

When you start a recipe with one of these triggers, a record is automatically created in the `sys_script` table which points to a webhook URL unique to your recipe. Similarly, when the recipe is stopped, the same record in the `sys_script` table is deleted.

To enable this feature, the user account used to establish the ServiceNow connection must be assigned role(s) with the following access control rules.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Table</th>
      <th>Type</th>
      <th>Operation</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Business Rules</td>
      <td>record</td>
      <td>read</td>
      <td>
        sys_script<br>
        sys_script.*
      </td>
    </tr>
    <tr>
      <td>Business Rules</td>
      <td>record</td>
      <td>write</td>
      <td>
        sys_script<br>
        sys_script.*
      </td>
    </tr>
    <tr>
      <td>Business Rules</td>
      <td>record</td>
      <td>create</td>
      <td>sys_script</td>
    </tr>
    <tr>
      <td>Business Rules</td>
      <td>record</td>
      <td>delete</td>
      <td>sys_script</td>
    </tr>
  </tbody>
</table>

*Access Control required to use real-time triggers*
