---
title: Connecting to CRM Dynamics
date: 2017-06-13 06:15:00 Z
---


# How to register Dynamics CRM App with Azure Active Directory

## 1

Sign in to the Microsoft Azure management portal by using an account with administrator permission. You must use an account in the same Office 365 subscription (tenant) as you intend to register the app with. You can also access the Microsoft Azure portal through the Office 365 admin center by expanding the ADMIN item in the left navigation pane and selecting Azure AD.

## 2

Click on Azure Active Directory in the left side menu.
![Azure Directory](/assets/images/connectors/Register-Dynamics-CRM-App/azure-directory.png)


## 3

Click on App registrations.
![App Registration](/assets/images/connectors/Register-Dynamics-CRM-App/app-registrations.png)


## 4

If you already have an application use that application ID else click Add.

![Add](/assets/images/connectors/Register-Dynamics-CRM-App/add.png)

## 5

Type a name and choose the application type as “Native” and redirect URI as https://www.workato.com/oauth/callback. And click create in the bottom of the page.

![Redirect URI](/assets/images/connectors/Register-Dynamics-CRM-App/microsoft.png)

## 6

Click on the newly created application. 

## 7

In the right side pane click on required permissions link.

![Required permissions](/assets/images/connectors/Register-Dynamics-CRM-App/permission.png)

## 8

Click “Add” in the top of the page -> “Select an API” -> Click on “Dynamics CRM Online” -> Click on “Select”.

![Dynamics CRM](/assets/images/conectors/Register-Dynamics-CRM-App/added.png)

## 9

Click on Access CRM online as organization users -> Click on “Select” -> Done.

![CRM online](/assets/images/connectors/Register-Dynamics-CRM-App/access-CRM.png)

## 10

Use Application ID as client ID.

![Application ID](/assets/images/connectors/Register-Dynamics-CRM-App/appication-id.png)


# How to Register Dynamics CRM App with On-Prem instance

Click [here](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient) to know about how to register dynamics app with on-prem instance

