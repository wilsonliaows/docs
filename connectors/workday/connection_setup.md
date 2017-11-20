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
Using named accounts to run integrations is not recommended. You should create an Integration System User (ISU) specifically for this. To do this, navigate to the "Create Integration System User" task in your Workday instance.

![Integration System User](/assets/images/workday/integration-system-user.png)

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
