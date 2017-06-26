---
title: Microsoft Dynamics CRM
date: 2017-06-13 06:15:00 Z
---

# Microsoft Dynamics CRM

## How to connect to a cloud Microsoft Dynamics CRM instance
In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering Microsoft CRM Dynamics App with Azure Active Directory. We walk through the process of registering Microsoft CRM Dynamics below.

1. Sign in to the Microsoft Azure management portal by using an account with administrator permission. You must use an account in the same Office 365 subscription (tenant) as you intend to register the app with. You can also access the Microsoft Azure portal through the Office 365 admin center by expanding the ADMIN item in the left navigation pane and selecting Azure AD.

2. Click on **Azure Active Directory (AAD)** in the left side menu.

![Azure Directory](/assets/images/connectors/microsoft-dynamics-CRM/azure-directory.png)
*The AAD is located on the left colummn and is highlighted*

3. Click on App registrations.

![App Registration](/assets/images/connectors/microsoft-dynamics-CRM/app-registrations.png)
*App registration can be located on the menu in the left column*

4. If you already have an application, use that ID. If not, proceed to click **Add**. Then, type a name. Choose the application type as “Native” and redirect URI as https://www.workato.com/oauth/callback. Click **create** in the bottom of the page.

![Add](/assets/images/connectors/microsoft-dynamics-CRM/add.gif)
*Fill in the application as directed*

5. Click on the newly created application. 

![Add](/assets/images/connectors/microsoft-dynamics-CRM/click-on-app.png)
*Click on the newly created application*

6. In the right side pane click on **Required permissions** link.

![Required permissions](/assets/images/connectors/microsoft-dynamics-CRM/permission.png)
*Click on Required permissions link*

7. Click *Add* > *Select an API* > *Dynamics CRM Online*

![Dynamics CRM](/assets/images/connectors/microsoft-dynamics-CRM/dynamics.gif)
*Add Dynamics CRM Online API access*

8. Check the *Access CRM Online as organization users* checkbox. Click on **Done**

![CRM online](/assets/images/connectors/microsoft-dynamics-CRM/access-crm.png)
*Check the Access CRM Online as organization users checkbox*

9. Use the application ID as client ID.

![Application ID](/assets/images/connectors/microsoft-dynamics-CRM/application.png)
*Retrieve the Application ID*

## How to connect to an on-premise Microsoft Dynamics CRM instance
In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering Microsoft CRM Dynamics App with Azure Active Directory. Click [here](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient) to read more on how to register an on-premise Dynamics app with Azure Active Directory.
