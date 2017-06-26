---
title: Microsoft Dynamics CRM
date: 2017-06-13 06:15:00 Z
---

# Microsoft Dynamics CRM

## How to connect to a cloud Microsoft Dynamics CRM instance
In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering your Microsoft CRM Dynamics app with Azure Active Directory. We walk through the process of registering Microsoft CRM Dynamics below.

1. Sign in to the Microsoft Azure management portal by using an account with administrator permission. You must use an account in the same Office 365 subscription (tenant) as you intend to register the app with. You can also access the Microsoft Azure portal through the Office 365 admin center by expanding the ADMIN item in the left navigation pane and selecting Azure AD.

2. Click on **Azure Active Directory (AAD)** in the left side menu.

![Azure Directory](/assets/images/connectors/microsoft-dynamics-CRM/azure-directory.png)
*Azure Active Directory is located on the navigation menu on the left*

3. Click **App registrations**.

![App Registration](/assets/images/connectors/microsoft-dynamics-CRM/app-registrations.png)
*App registrations is located on the navigation menu on the left*

4. If you already have an application, use that ID. If not, proceed to click **Add**. Provide a name for the application to add (typically "Workato"). Choose the application type as “Native” and provide a redirect URI value of `https://www.workato.com/oauth/callback`. Click **Create** in the bottom of the page.

![Add application](/assets/images/connectors/microsoft-dynamics-CRM/add.gif)
*Create the application*

5. Click on the newly created application to look at the app details. 

![Add](/assets/images/connectors/microsoft-dynamics-CRM/click-on-app.png)
*Click on the newly created application*

6. In the right menu click **Required permissions**.

![Required permissions](/assets/images/connectors/microsoft-dynamics-CRM/permission.png)
*Click Required permissions*

7. Add API access. Click *Add* > *Select an API* > *Dynamics CRM Online*

![Dynamics CRM](/assets/images/connectors/microsoft-dynamics-CRM/dynamics.gif)
*Add Dynamics CRM Online API access*

8. Check the *Access CRM Online as organization users* checkbox. Click on **Done**

![CRM online](/assets/images/connectors/microsoft-dynamics-CRM/access-crm.png)
*Check the Access CRM Online as organization users checkbox*

9. Use the application ID as the client ID to connect to Workato.

![Application ID](/assets/images/connectors/microsoft-dynamics-CRM/application.png)
*Retrieve the Application ID*

## How to connect to an on-premise Microsoft Dynamics CRM instance
In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering Microsoft CRM Dynamics App with Azure Active Directory. Click [here](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient) to read more on how to register an on-premise Dynamics app with Azure Active Directory.
