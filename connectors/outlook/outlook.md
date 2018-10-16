---
title: Workato connectors - Outlook
date: 2018-09-10 12:00:00 Z
---

# Outlook
[Outlook](https://products.office.com/en-us/outlook/email-and-calendar-software-microsoft-outlook) is an email and calendar app by Microsoft, and is part of the Office 365 productivity suite.

## Supported editions
Office 365 and Outlook.com are supported.

## How to connect to Outlook
The Outlook connector uses OAuth2 authentication to authenticate with Outlook.

Click on the **Link your account** button.

![Link your Outlook account](/assets/images/connectors/outlook/link-your-outlook-account.png)
*Link your Outlook account*

That should generate a popup that brings you to Outlook's login page. 

![Outlook login page](/assets/images/connectors/outlook/microsoft-outlook-login-screen.png)
*Outlook login page*

Once you login, Outlook will ask you to confirm that you're giving Workato certain [permissions](#permissions-required-to-connect) to access your Outlook account.

## Permissions required to connect
Workato needs the following permissions in order to automate your workflows. Microsoft will confirm the set of permissions with you.

```
https://outlook.office.com/mail.read
https://outlook.office.com/mail.send
https://outlook.office.com/calendars.readwrite
offline_access
https://outlook.office.com/mail.Read.Shared
```

If you do not have the above set of permissions, you might not be able to successfully connect to Outlook, or be unable to fully use the Outlook connector's triggers and actions.
