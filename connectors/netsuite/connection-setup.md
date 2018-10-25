---
title: Workato connectors - NetSuite connection setup
date: 2017-04-28 06:15:00 Z
---

# How to connect to NetSuite on Workato
You can connect to NetSuite via token based authentication. In order to do so, we need to generate an application ID, consumer key and consumer secret as well as a token ID and token secret. 

In this section, we'll go through how to get these.

1. Enable Web Services and Token-based Authentication in your NetSuite instance

2. Create an integration record

3. Create an integration role with required permission levels for your integration

4. Assign the integration role to the integration user

5. Create access token for this integration user

## 1. Enable Web Services access in your NetSuite instance
First, API Access and Token-based Authentication needs to be enabled in NetSuite. Go to *Setup* > *Company* > *Enable Features* > *SuiteCloud*.

![Setup > Company > Enabled Features > SuiteCloud](/assets/images/connectors/netsuite/enable-web-services-1.png)
*In NetSuite, go to Setup > Company > Enable Features > SuiteCloud*

Under the SuiteCloud tab, check the **Client SuiteScript** and **Server SuitScript** checkboxes.

![Check the Client SuiteScript and Server SuitScript checkboxes](/assets/images/connectors/netsuite/netsuite-suitescript-setup.png)
*In the SuiteCloud tab, check the Client SuiteScript and Server SuitScript checkboxes*

Under the SuiteTalk (Web Services) section, check the **Web Services** checkbox. Under the **Manage Authentication** section, check the **Token-based Authentication** checkbox.

![Check the SuiteTalk Web Services and Token-based Authentication checkbox](/assets/images/connectors/netsuite/enable-web-services-2.png)
*In the SuiteCloud tab, check the SuiteTalk Web Services and Token-based Authentication checkbox*

You can also refer to the [NetSuite documentation](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=#bridgehead_4253254429) on enabling the Token-based Authentication feature.

## 2. Create an integration record
We need to create an [integration record](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4389727047.html#bridgehead_4430959588) to represent an external application connecting to NetSuite.

Go to *Setup* > *Integration* > *Manage Integrations* > *New*.

![Setup > Integration > Manage Integrations > New](/assets/images/connectors/netsuite/integration-record-1.png)
*In NetSuite, go to Setup > Integration > Manage Integrations > New*

Now, add a name for this integration. Make sure to select **Enabled** in the State pick list and check the **Token-based Authentication** checkbox, then save this integration.

![Check the Token-based Authentication checkbox](/assets/images/connectors/netsuite/integration-record-2.png)
*Check the Token-based Authentication checkbox*

Now that we have created an integration record, save the consumer key and consumer secret. This will be used for connecting to NetSuite on Workato.

You can also refer to the [NetSuite documentation](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4393879073.html) on creating integration records.

## 3. Create an integration role with required permission levels for your integration
We recommend that you create a separate integration role just for your integrations. This integration role needs to have permissions to read and write to the records relevant for your integrations. This integration role also needs the ability to login through RESTlets or SuiteTalk (web services).

The minimum set of permissions needed for this user are:
3A) Permissions to read/write to records required for integration
3B) Web Services (Full level)
3C) Log in using Access Tokens (Full level) or User Access Tokens (Full level) for more privileges to create and revoke own tokens
3D) Set Up Company (Full level)

3A) Assign integration specific read/write permissions

We recommend that you make a copy of an existing role that already has the permissions required for the integrations to work and proceed to customize it further for your integration needs. This role can then be assigned to the integration user. Alternatively, you can create a new role and add the permissions required for the integrations to work.

In NetSuite, go to your integration role via *Setup* > *Users/Roles* > *Manage Roles*.

![Setup > Users/Roles > Manage Roles](/assets/images/connectors/netsuite/setup-integration-role-1.png)
*Setup > Users/Roles > Manage Roles*

Under the other tabs in Permissions, set up the permissions and permission levels you wish this role to have. This should correspond with what you wish to do with your Workato integration, e.g. if you wish to create sales orders in NetSuite, you should have the **Sales Order - Create** permission level, and if you wish to be able to create and update and read sales order data, select the **Full** permission level.

![Set up integration specific permissions](/assets/images/connectors/netsuite/setup-integration-role-4.png)
*Set up integration specific permissions*

Refer to the [NetSuite documentation](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N285937.html) for more details about customizing or creating roles and setting permissions.

3B. Assign Web Services permissions to integration role

Check the **Web Services Only Role** checkbox if you don't want this role to have the ability to login to NetSuite (i.e. if you want this user to only have the ability to connect to NetSuite via the API).

![Check Web Services Only Role checkbox if relevant](/assets/images/connectors/netsuite/setup-integration-role-2.png)
*Check Web Services Only Role checkbox if relevant*

Under *Permissions* > *Setup*, add the Web Services permissions with a **Full** level.

![Assign Full level Web Services permissions](/assets/images/connectors/netsuite/setup-integration-role-3.png)
*Assign Full level Web Services permissions*

3C. Assign token-based authentication permissions to integration role

There are 3 types of [token-based authentication permissions](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html#bridgehead_4249074259):
- Access Token Management
- User Access Tokens
- Log in using Access Tokens

We need the **Log in using Access Tokens** permission at a minimum to enable the user to authenticate via token-based authentication. If you would like the integration user to be able to create and revoke access tokens for their own use, you can give the role the **User Access Tokens** permissions. We recommend that the integration user not have the **Access Token Management** permissions for better security maintenance.

Under *Permissions* > *Setup*, add the **Log in using Access Tokens** permission with a **Full** level.

![Assign Login using access token permissions](/assets/images/connectors/netsuite/assign-login-using-access-token-permissions.png)
*Assign Login using access token permissions*

3D. Assign Set Up Company (Full level) permissions to integration role

Lastly, add the Set Up Company (Full level) permissions to the integration role.

![Assign Set Up Company permissions](/assets/images/connectors/netsuite/assign-set-up-company-permissions.png)
*Assign Set Up Company permissions*

## 4. Set up an integration user
Once we've set up our integration role, we need to assign this role to our integration user. We recommend creating a separate user for your integrations.

In NetSuite, go to *Setup* > *Users/Roles* > *Manage Users* to edit an existing user or create a new user.

![Set up other permissions and permission levels](/assets/images/connectors/netsuite/setup-integration-user-1.png)
*Navigate to Setup > Users/Roles > Manage Users*

When editing a user, under the Access tab, ensure you assign this user the integration role you've just created/edited above.

![Assign integration role](/assets/images/connectors/netsuite/setup-integration-user-2.png)
*Assign integration role to user*

## 5. Create access token
Finally, create an access token for the integration user. If the integration user has **User Access Tokens** permissions, they will be able to create and revoke their own tokens. If the integration user has only **Log in using Access Tokens** permissions, you will need to use a user with **Access Token Management** permissions to create an access token for the integration user.

Go to *Setup* > *Users/Roles* > *Access Tokens* > *New*.

![Setup > Users/Roles > Access Tokens > New](/assets/images/connectors/netsuite/access-token.png)
*In NetSuite, go to Setup>Users/Roles>Access Tokens>New*

Select the integration record, integration user and role we created earlier, then click save. Record the token ID and token secret somewhere and keep it confidential - these will not be retrievable again from NetSuite. These will be used for connecting to NetSuite on Workato.

## 6. Connect to NetSuite on Workato
NetSuite asks for the following information to connect.

![Information to connect to NetSuite](/assets/images/connectors/netsuite/information-to-connect-to-netsuite.png)
*Information to connect to NetSuite*

| Field                   | Description                                                                                                                                                                                                                               |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Account ID              | Retrieve the account ID of your NetSuite instance from Integration>Web Services Preferences                                                                                                                                               |
| Consumer key            | Consumer key from the integration record that you've just created                                                                                                                                                                         |
| Consumer secret         | Consumer secret from the integration record that you've just created                                                                                                                                                                      |
| Token ID                | Token ID from the access token that you've just created                                                                                                                                                                                   |
| Token secret            | Token secret from the access token that you've just created                                                                                                                                                                               |
| Account timezone        | Select the timezone of your NetSuite instance in order to ensure that the dates in your NetSuite account are handled accurately. All datetime values used in actions/triggers for the NetSuite connection will be based on this timezone. |
| Ignore read-only fields | If set to Yes, read-only fields will be omitted from create and update actions. If set to No, read-only field will appear in create and update actions. Trying to create or update these read-only field will cause an error.             |
