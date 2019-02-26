---
title: SharePoint
date: 2019-02-25 23:00:00 Z
---

# SharePoint
[SharePoint](https://products.office.com/en-us/sharepoint/collaboration) is a web-based collaboration, document management and storage system integrated with Microsoft Office.

Workato's SharePoint connector enables you to build even more integrations and automations around Sharepoint and other third-party applications.

## API
The SharePoint connector uses [SharePoint REST API](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service).

## How to connect to SharePoint on Workato

### Register Workato app in SharePoint
1. Login to https://portal.azure.com/
2. Click on `Azure Active Directory` -> `App Registrations` -> `New Application Registration`

    ![Step 2](/assets/images/connectors/sharepoint/img24.jpg)

3. Give a unique name for the application, select the Application type as `Web app / API` and Sign In URL as `​https://www.workato.com`​ and click on `Create`.

    ![Step 3](/assets/images/connectors/sharepoint/img2.jpg)

4. Click on `Settings` -> `Keys`. Make sure to save the `Application ID`, you will use this connect with Workato later.

    ![Step 4](/assets/images/connectors/sharepoint/img5.jpg)

5. Create a new Password with Key as `client_secret` and set the desired expiry time and click on `Save`. Upon clicking `Save`, a new password will be generated. Make sure to save the generated client secret password, you will use this to connect with Workato later.

    ![Step 6](/assets/images/connectors/sharepoint/img6.jpg)

6. In Settings, click on `Required Permission` -> `Add` -> `Select an API` -> `Office 365 Sharepoint Online` -> `Select`

    ![Step 6.1](/assets/images/connectors/sharepoint/img9.jpg)

    ![Step 6.2](/assets/images/connectors/sharepoint/img10.jpg)

7. Choose the permissions you want to give Workato and click on `Select`

    ![Step 7](/assets/images/connectors/sharepoint/img13.jpg)

8. In Settings, click on `Reply URLs` and add the URL `https://www.workato.com/oauth/callback​` as Reply URL and click on `Save`

    ![Step 8](/assets/images/connectors/sharepoint/img16.jpg)

### Configure SharePoint connection in Workato

9. Login to Workato to create SharePoint connection. Go to `App Connections` tab -> `Create a new connection` -> select the Sharepoint Connector

    ![Step 9](/assets/images/connectors/sharepoint/image10.png)

10. Enter the required fields. Use `Application ID` from Step 4 as `Client ID` and `client_secret password` from Step 5 as `Client Secret`

    ![Step 10](/assets/images/connectors/sharepoint/image27.png)

11. Click on `Link your account` to connect Sharepoint and enter username and password in pop-up window.

    ![Step 11](/assets/images/connectors/sharepoint/image26.png)

12. Connection should be established in Workato as shown below

    ![Step 12](/assets/images/connectors/sharepoint/image28.png)
