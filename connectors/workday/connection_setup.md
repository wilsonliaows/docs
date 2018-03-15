---
title: Workato connectors - Workday Connection
date: 2017-11-17 09:00:00 Z
---

# Workday Connection

## How to connect to Workday on Workato
In order to connect to Workday and allow for data to flow to and from Workday via Workato, the following needs to be done in Workday. In this section, we'll be going through how to set these up in detail.

1. Register Integration System User

2. Register API Client (optional)

### 1. Register Integration System User
Using a user account of a worker to run integrations is not recommended. There are a few reasons for this. Firstly, if this worker security profile changes, or if the worker is terminated, integrations that rely on this worker's user account will no longer work. Furthermore, all operations performed by the integration will be logged under this worker.

The recommended approach to access web services is through an Integration System User (ISU) account. For security reasons, each ISU is restricted to a single integration system.

1. Access the **Create Security Group** task and create an Integration System Security Group.
2. To grant the security group access to the domains required by your integration, follow these steps for each domain:
    * Access the **View Domain** report and find the domain.
    * As a related action on the domain, select **Domain** > **Edit Security Policy Permissions**.
    * Add the security group that you created in Step 1 to the **Integration Permissions** and select **GET** and **PUT**.
3. Access the **Activate Pending Security Policy Changes** task and active the changes that you made in Step 2.
4. Access the **Create Integration System User** task and configure a Workday user account for the integration.
    * Keep the **Session Timeout Minutes** default value of 0 to prevent session expiration. An expired session can cause the integration to time out before it successfully completes.
    * Select the **Do Not Allow UI Sessions** check box if you wish to prevent the integration system user from signing in to Workday through the UI.
5. As a related action on the Workday user, select **Security Profile** > **Assign Integration System Security Groups**.
6. At the **Integration System Security Group to Assign** prompt, select the security group that you created in Step 1.
7. Access the **View Integration System** report and access the **Connector or Studio integration**.
8. Select **Workday Account** > **Edit** as a related action on the integration system.
9. On the **Edit Account for Integration System** task, select the **Workday Account** that you created in Step 4.
10. This step is optional. In the **Global Preferences** area, select a preferred locale and display language for the integration system user. These settings control what language Workday uses for the integration data. An outbound integration sends data in the preferred language and an inbound integration saves data in the preferred language.
    * If you leave these fields blank, Workday uses the default locale and display language for integration data.
11. If the integration system user will authenticate using user name and password, access the **Maintain Password Rules** task and add the integration system user to the **System Users exempt from password expiration** field.
    * To avoid integration errors caused by expired passwords, Workday recommends that you prevent Workday user passwords from expiring.

To do this, navigate to the "Create Integration System User" task in your Workday instance.

![Integration System User](/assets/images/workday/integration-system-user.png)

Find out more about setting up an ISU [here](https://doc.workday.com/reader/Z9lz_01hqDMDg6NSf7wCBQ/esBDCh5D66sgBhIxmQ5U5g).

The should ISU have all permissions needed to perform the required actions for your integration scenario. When building recipes, you may encounter a `403` error, it means that the ISU does not have sufficient permission for the action.

![403 error](/assets/images/workday/permission-error.png)

To add the appropriate permission for the action,

- Navigate to "View Security for Securable Item" in your Workday instance.
- Select the appropriate operation you wish to add permission for (Example: Get Get Recruiting Agency Users)

![View Security for Securable Item](/assets/images/workday/view-security-for-securable-item.png)

- Select a Security Policy to edit
- Click on Actions > Domain Security Policy > Edit Permissions

![Edit Permissions for Security Policy](/assets/images/workday/edit-permission-security-policy.png)

- Add "Workato Security Group" to Integration Permissions

![Add Security Group](/assets/images/workday/add-security-group.png)

Finally, run "Activate Pending Security Policy Changes" task to update the security changes

![Activate Pending Security Policy Changes](/assets/images/workday/activate-pending-security-policy-change.png)

### 2. Register API Client (optional)
This step is required only if you wish to work with custom objects in Workday. The Workday connector uses the Workday REST API, which uses an OAuth 2.0 for authentication. You need to register an API Client to allow connection to the REST API.

![Register API Client](/assets/images/workday/api-client-1.png)

Navigate to "Register API Client" in your Workday instance.

- Select Authorization Grant
- Use `https://www.workato.com/oauth/callback` as the Redirection URL
- Add the necessary scope you wish to grant access for

![API Client credentials](/assets/images/workday/api-client-2.png)

Remember to save the Client ID, Client Secret, Authorization Endpoint and Token Endpoint. This will be required for connecting to Workday via Workato.

### 3. Connect to Workday on Workato
Workday asks for the following information to connect.

![Information to connect to Workday](/assets/images/workday/workday-connection-1.png)

The following details more information about each field.

- Email and password

This is the email and password of the integration system user you just created.

- Tenant ID

Retrieve the Tenant ID of your Workday instance from 

- Use custom objects?

Choose if this connection requires additional connection details to work with custom objects in your Workday instance.

The following fields are only required if you select Yes.

![Additional information to connect to Workday](/assets/images/workday/workday-connection-2.png)

- Client ID (optional)

Client ID of the API Client you just created

- Client secret (optional)

Client secret of the API Client you just created

- Authorization endpoint (optional)

Authorization endpoint of the API Client you just created

- Token endpoint (optional)

Token endpoint of the API Client you just created
