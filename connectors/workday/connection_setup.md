---
title: Workato connectors - Workday Connection
date: 2017-11-17 09:00:00 Z
---

# Workday Connection

## How to connect to Workday on Workato
The Workday connector uses the [Workday Web Services](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html), [RaaS](/connectors/workday/workday_raas.md) and [REST API](https://doc.workday.com/reader/wsiU0cnNjCc_k7shLNxLEA/HvgwLwxCHVdBlZUTNd9s7A). Workday recommends using an [Integration System User (ISU)](#register-integration-system-user) for integration using third party services like Workato.

Both the Web Services and RaaS requires basic authentication. This should use credentials of the ISU. REST API is used to work with custom objects. This requires a separate [OAuth client setup](#register-api-client).

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
We do not recommend using a user account of a worker to run integrations. There are a few reasons for this. Firstly, if this worker security profile changes, or if the worker is terminated, integrations that rely on this worker's user account will no longer work. Furthermore, all operations performed by the integration will be logged under this worker.

The recommended approach to access web services is through an Integration System User (ISU) account. For security reasons, each ISU is restricted to a single integration system (like Workato).

The ISU should have all permissions needed to perform the required actions for your integration scenario. When building recipes, you may encounter a `403` error, it means that the ISU does not have sufficient permission for the action.

![403 error](/assets/images/workday/permission-error.png)
*Error message when ISU does not have enough permission*

 Here are the steps to create an ISU.

1. Access the **Create Security Group** task and create an Integration System Security Group.

![Add Security Group](/assets/images/workday/add-security-group.png)

2. To grant the security group access to the domains required by your integration, follow these steps for each domain:
    * Access the **View Domain** report and find the domain.
    * As a related action on the domain, select **Domain** > **Edit Security Policy Permissions**.
    * Add the security group that you created in Step 1 to the **Integration Permissions** and select **GET**, **POST** and **PUT**.
3. Access the **Activate Pending Security Policy Changes** task and activate the changes that you made in Step 2.

![Edit Permissions for Security Policy](/assets/images/workday/edit-permission-security-policy.png)

4. Access the **Create Integration System User** task and configure a Workday user account for the integration.
    * Keep the **Session Timeout Minutes** default value of 0 to prevent session expiration. An expired session can cause the integration to time out before it successfully completes.
    * Select the **Do Not Allow UI Sessions** check box if you wish to prevent the integration system user from signing in to Workday through the UI.

![Integration System User](/assets/images/workday/integration-system-user.png)

5. As a related action on the Workday user, select **Security Profile** > **Assign Integration System Security Groups**.
6. At the **Integration System Security Group to Assign** prompt, select the security group that you created in Step 1.
7. Access the **View Integration System** report and access the **Connector or Studio integration**.
8. Select **Workday Account** > **Edit** as a related action on the integration system.
9. On the **Edit Account for Integration System** task, select the **Workday Account** that you created in Step 4.
10. This step is optional. In the **Global Preferences** area, select a preferred locale and display language for the integration system user. These settings control what language Workday uses for the integration data. An outbound integration sends data in the preferred language and an inbound integration saves data in the preferred language.
    * If you leave these fields blank, Workday uses the default locale and display language for integration data.
11. If the integration system user will authenticate using user name and password, access the **Maintain Password Rules** task and add the integration system user to the **System Users exempt from password expiration** field.
    * To avoid integration errors caused by expired passwords, Workday recommends that you prevent Workday user passwords from expiring.

Find out more about setting up an ISU [here](https://doc.workday.com/reader/Z9lz_01hqDMDg6NSf7wCBQ/esBDCh5D66sgBhIxmQ5U5g).

### Register API Client
This step is required only if you wish to work with custom objects in Workday. The Workday connector uses the Workday REST API, which uses an OAuth 2.0 for authentication. You need to register an API Client to allow connection to the REST API.

![Register API Client](/assets/images/workday/api-client-1.png)

Navigate to "Register API Client" in your Workday instance.

- Select Authorization Grant
- Use `https://www.workato.com/oauth/callback` as the Redirection URL
- Add the necessary scope you wish to grant access for

![API Client credentials](/assets/images/workday/api-client-2.png)

Remember to save the Client ID, Client Secret, Authorization Endpoint and Token Endpoint. This will be required for connecting to Workday via Workato.
