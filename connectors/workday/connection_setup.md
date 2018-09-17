---
title: Workato connectors - Workday Connection
date: 2017-11-17 09:00:00 Z
---

# Workday Connection

## How to connect to Workday on Workato
The Workday connector uses the [Workday Web Services](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html), [RaaS](/connectors/workday/workday_raas.md) and [REST API](https://doc.workday.com/reader/wsiU0cnNjCc_k7shLNxLEA/HvgwLwxCHVdBlZUTNd9s7A). Workday recommends using an [Integration System User (ISU)](#register-integration-system-user) for integration using third party services like Workato.

Both the Workday Web Services and RaaS requires basic authentication. REST API is used to work with custom objects. This requires a separate [OAuth client setup](#register-api-client).

### Connect to Workday on Workato
Workday asks for the following information to connect.

![Information to connect to Workday](/assets/images/workday/workday-connection-1.png)
*Workday connection fields*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Connection field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>
        Give this Workday connection a unique name that identifies which Workday tenant it is connected to.
      </td>
    </tr>
    <tr>
      <td>Login name</td>
      <td>
        This should be the login name for the <a href='#register-integration-system-user'>ISU</a>.
      </td>
    </tr>
    <tr>
      <td>Password</td>
      <td>
        This should be the login name for the <a href='#register-integration-system-user'>ISU</a>.
      </td>
    </tr>
    <tr>
      <td>Tenant ID</td>
      <td>
      Tenant ID can be found in the URL when you are logged into Workday.<br>
  For example, if the URL of your Workday tenant is <b>https://impl.workday.com/sample_company/d/home.html</b>, tenant ID is <b>sample_company</b>
      </td>
    </tr>
    <tr>
      <td>WSDL URL</td>
      <td>
        This URL is used to generate schema and forms the base URI for every API requests. Find out how to obtain this URL from this <a href='https://community.workday.com/articles/6120#endpoint'>Workday article</a>.<br>
        The default is <b>https://wd2-impl-services1.workday.com/ccx/service/</b>
      </td>
    </tr>
    <tr>
      <td>Use custom objects?</td>
      <td>
        Choose <b>No</b> if your use cases do no involved custom objects.<br>
        Choose <b>Yes</b> if it does. Additional <a href='#register-api-client'>client information</a> will be required.
      </td>
    </tr>
    <tr>
      <td>Client ID</td>
      <td>
        Client ID of the API Client you created to connect to Workato. Only required if using custom objects.
      </td>
    </tr>
    <tr>
      <td>Client secret</td>
      <td>
        Client secret of the API Client you created to connect to Workato. Only required if using custom objects.
      </td>
    </tr>
    <tr>
      <td>Authorization endpoint</td>
      <td>
        Authorization endpoint of the API Client you created to connect to Workato. Only required if using custom objects.
      </td>
    </tr>
    <tr>
      <td>Token endpoint</td>
      <td>
        Token endpoint of the API Client you created to connect to Workato. Only required if using custom objects.
      </td>
    </tr>
  </tbody>
</table>

### Register Integration System User
We do not recommend using a user account of a worker to run integrations. There are a few reasons for this.

Firstly, all operations performed by the integration will be logged under this worker instead of one dedicated for integration and workflow processes.

Furthermore, if this worker security profile changes, or if the worker is terminated, integrations that rely on this worker's user account will no longer work.

The recommended approach to access web services is through an Integration System User (ISU) account. For security reasons, each ISU should restricted to a single integration system (like Workato).

The ISU should have all permissions needed to perform the required actions for your integration scenario. When building recipes, you may encounter a `403` error, it means that the ISU does not have sufficient permission for the action.

![403 error](/assets/images/workday/permission-error.png)
*Error message when ISU does not have enough permission*

### Create an ISU

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='20%'>Step</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Security Group</td>
      <td>
        <p>
          Access the <b>Create Security Group</b> task and create an Integration System Security Group.
        </p>
        <img src="/assets/images/workday/add-security-group.png" alt="Add Security Group">
        <i>Add Security Group</i>
      </td>
    </tr>
    <tr>
      <td>Grant Domain access  to Security Group</td>
      <td>
        <p>To grant the security group access to the domains required by your integration, follow these steps for each domain:</p>
        <ul>
          <li>
            Access the <b>View Domain</b> report and find the domain
          </li>
          <li>
            As a related action on the domain, select <b>Domain</b> > <b>Edit Security Policy Permissions</b>
          </li>
          <li>
            Add the Security Group that you created in the previous step to the <b>Integration Permissions</b> and select <b>GET</b>, <b>POST</b> and <b>PUT</b> operations.
          </li>
        </ul>
        Additionally, grant <b>GET</b> operation for the following <b>Domain Security Policies</b>:
        <ul>
          <li>Integration Build</li>
          <li>Integration Process</li>
          <li>Integration Debug</li>
          <li>Integration Event</li>
        </ul>
        <p>
          Next, access the <b>Activate Pending Security Policy Changes</b> task and activate these changes.
        </p>
        <img src="/assets/images/workday/edit-permission-security-policy.png" alt="Edit Permissions for Security Policy">
        <i>Edit Permissions for Security Policy</i>
      </td>
    </tr>
    <tr>
      <td>Create ISU account</td>
      <td>
        <p>
          Access the <b>Create Integration System User</b> task and configure a Workday user account for the integration.
        </p>
        <p>
          Keep the <b>Session Timeout Minutes</b> default value of 0 to prevent session expiration. An expired session can cause the integration to time out before it successfully completes.
        </p>
        <p>
          Select the <b>Do Not Allow UI Sessions</b> check box if you wish to prevent the integration system user from signing in to Workday through the UI.
        </p>
        <img src="/assets/images/workday/integration-system-user.png" alt="Create Integration System User">
        <i>Create Integration System User</i>
      </td>
    </tr>
    <tr>
      <td>Assign Security Group to ISU</td>
      <td>
        <p>
          As a related action on the Workday user, select <b>Security Profile</b> > <b>Assign Integration System Security Groups</b>.
        </p>
        <p>
          At the <b>Integration System Security Group to Assign</b> prompt, select the security group that you created. Access the <b>View Integration System</b> report and access the <b>Connector or Studio integration</b>.
        </p>
        <p>
          Select <b>Workday Account</b> > <b>Edit</b> as a related action on the integration system.
        </p>
        <p>
          On the <b>Edit Account for Integration System</b> task, select the ISU account that you created.
        </p>
      </td>
    </tr>
    <tr>
      <td>Optional</td>
      <td>
        <p>
          In the <b>Global Preferences</b> area, select a preferred locale and display language for the integration system user. These settings control what language Workday uses for the integration data. An outbound integration sends data in the preferred language and an inbound integration saves data in the preferred language.
          If you leave these fields blank, Workday uses the default locale and display language for integration data.
        </p>
        <p>
          If the integration system user will authenticate using user name and password, access the <b>Maintain Password Rules</b> task and add the integration system user to the <b>System Users exempt from password expiration</b> field.
        </p>
        <p>
          To avoid integration errors caused by expired passwords, Workday recommends that you prevent Workday user passwords from expiring.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Find out more about setting up an ISU [here](https://doc.workday.com/reader/Z9lz_01hqDMDg6NSf7wCBQ/esBDCh5D66sgBhIxmQ5U5g).

### Register API Client
This step is required only if you wish to work with custom objects in Workday. The Workday connector uses the Workday REST API, which uses an OAuth 2.0 for authentication. You need to register an API Client to allow connection to the REST API.

![Register API Client](/assets/images/workday/api-client-1.png)
*Registering a new client*

Navigate to "Register API Client" in your Workday instance.

- Select Authorization Grant
- Use `https://www.workato.com/oauth/callback` as the Redirection URL
- Add the necessary scope you wish to grant access for

![API Client credentials](/assets/images/workday/api-client-2.png)
*API client details*

Remember to save the Client ID, Client Secret, Authorization Endpoint and Token Endpoint. This will be required for connecting to Workday via Workato.
