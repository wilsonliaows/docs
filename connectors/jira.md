---
title: Workato connectors - Jira
date: 2017-02-16 06:15:00 Z
---

# Jira
[Jira](https://www.atlassian.com/software/jira) gives users a simple way to organize and plan the release of any software. This allows development teams to lay out key steps to follow when releasing the software including 'Plan', 'Track','Release','and Report' to guide users.

With Workato, you can keep projects and issues in sync between Jira and other issues or tickets tracking apps used by other departments such as Zendesk, ServiceNow, Salesforce's Desk.com.

## API version
The Jira connector uses [Jira Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

## Supported editions and versions
The Jira connector works with Jira cloud instances and Jira on-premise instances from 7.x onwards.

## How to connect to JIRA on Workato
The Jira connector uses basic authentication to authenticate with Jira.
![Configured Jira connection](/assets/images/jira-docs/configured_jira_connection.png)

- **Connection name**

Give this Jira connection a unique name that identifies which Jira instance it is connected to.

- **On-prem secure agent**

To connect to on-premise Jira instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

- **Host name**

Complete Jira instance URL used to login to Jira.

- **Username**

Username to connect to Jira.

- **Password**

Password to connect to Jira.

- **Enable firewall-friendly IP**

Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

### Roles and permissions required to connect
JIRA users can connect to JIRA from Workato. We recommend that a separate user be created for integration purposes.

There are 3 main ways a user can have access to objects:
- People roles in Project Settings
- Issue security Schemes
- Permission schemes

If the JIRA user does not have accesss to an object through any of these methods, the object cannot be retrieved from the JIRA project, and will instead return a status 401 'Unauthorized'.

#### People roles in Project Settings
Users [can be added to a project](https://confluence.atlassian.com/get-started-with-jira-core/add-users-to-your-project-917965377.html) by selecting **Project Settings → People**. Each user can be assigned 1 or more roles:

- **Developers**
- **Administrators**
- **Service Desk Customers**
- **Service Desk Team**

![People project roles](/assets/images/jira-docs/project-people-roles.PNG)

Permissions to each role vary and can be configured in JIRA. Hence, JIRA users connecting from Workato must be added to the project with the appropriate roles to use relevant actions, i.e Create issue, Update issue, etc.

#### Issue Security Schemes
[Issue security schemes](https://confluence.atlassian.com/adminjiracloud/configuring-issue-level-security-776636711.html) can be created and added to each project, allowing control over who can view and edit the issues of the project.

If a project has issue security schemes, the JIRA user connecting from Workato must have access to the project’s issues in order to use Workato triggers and actions related to issues.

![Issue security scheme](/assets/images/jira-docs/issue-security.PNG)

#### Permission Schemes
Permissions can be granted for specific actions like creating issues, edit issues, assign issues, etc. Permissions can be found by selecting **Project Settings → Permissions**.

Each permission can be granted across:
1. Roles
2. Applications (JIRA and JIRA service desk users)
3. Groups

##### 1. Roles
Available roles are **Developers**, **Administrators**, **Service Desk**, **Service Desk Customers** and **Service Desk Team**. If permission scheme is defined for any of these roles, the JIRA user connecting from Workato must also have the same role(s) to use particular actions, i.e Create issue, Update issue, etc.

![Permission schemes](/assets/images/jira-docs/roles-permission-schemes.PNG)

##### 2. Applications
For permissions across **Applications**, **Any logged in user** permission must be granted to use the Workato triggers and actions.

![Application permission schemes](/assets/images/jira-docs/application-permission-schemes.PNG)

##### 3. Groups
For permissions assigned to **Groups**, the JIRA user connecting from Workato must be a member of the selected group to use the triggers and actions. Selecting **Anyone** grants access to all the users.

![Group permission schemes](/assets/images/jira-docs/group-permission-schemes.PNG)

##### Upload/download actions
To use upload and download attachment actions, the JIRA user connecting from Workato must be added to the permissions under the **Attachment Permissions** tab of the permissions page.

![Upload/download actions](/assets/images/jira-docs/upload-download-attachments.PNG)

##### Comments triggers and actions
To use triggers and actions relating to **Comments**, the JIRA user connecting from Workato must be added to the permissions under the **Comments Permissions** tab of the permissions page.

![Comments triggers and actions](/assets/images/jira-docs/comments-permission-schemes.PNG)

##### Issues triggers and actions
To use triggers and actions relating to **Issues**, the JIRA user connecting from Workato must be added to the permissions under the **Issues Permissions** tab of the permissions page.

![Issues triggers and actions](/assets/images/jira-docs/issues-permission-schemes.PNG)

## Working with the Jira connector

### Using real-time triggers
To use Jira real-time triggers (which [registers a Jira webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **Jira Administrators global permission**. To set up real-time triggers without requiring the **Jira Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a Jira webhook trigger via the Jira admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).
