---
title: Workato connectors - Jira
date: 2017-02-16 06:15:00 Z
---

# Jira
[Jira](https://www.atlassian.com/software/jira) gives users a simple way to organize and plan the release of any software. This allows development teams to lay out key steps to follow when releasing the software including 'Plan', 'Track','Release','and Report' to guide users.

With Workato, you can keep projects and issues in sync between Jira and other issue tracking systems used by other departments such as Zendesk, ServiceNow, or Salesforce's Desk.com.

## API version
The Jira connector uses [Jira Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

## Supported editions and versions
The Jira connector works with Jira cloud instances and Jira on-premise instances from 7.x onwards.

## How to connect to Jira on Workato
There are 2 ways to connect to Jira — [API tokens](#api-tokens) and [basic authentication with password](#basic-authenticaiton-with-password).
>**From 1 December 2018, Atlassian is deprecating basic authentication with password for Jira (cloud only) in favor of [API tokens](#api-tokens). On-premise Jira will not be affected. Read more about this in our [announcement](https://support.workato.com/support/solutions/articles/1000267662-jira-cloud-only-jira-service-desk-deprecation-of-basic-authentication-with-password).**

We strongly recommend using API tokens to connect to Workato.

### API tokens
API tokens are the primary method to authenticate with Jira. For on-premise Jira, you can also use basic authentication with password.

![API token auth](/assets/images/jira-docs/api-token-auth.png)

- **Connection name**
  Give this Jira connection a unique name that identifies which Jira instance it is connected to.

- **Host name**
  Complete Jira instance URL used to login to Jira.

- **API token authentication?**
  Set this to 'Yes' to authenticate using API tokens. You must then provide an e-mail and API token. Set this to 'No' to authenticate using basic authentication with password.

- **Email**
  Email of Jira account to link to Workato.

- **API token**
  To create an API token from your Atlassian account:
  - Log in to https://id.atlassian.com.
  - Click API tokens, then Create API token
    ![Generate API token](/assets/images/jira-docs/generate-api-token.png)
  - Use Copy to clipboard, then return to your Jira connection in Workato and paste your API token into this field


- **Is this app in a private network?**
  To connect to on-premise Jira instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

### Basic authentication with password
Basic authentication with password can be used to authenticate with Jira.
>**From 1 December 2018, Atlassian is deprecating basic authentication with password for Jira (cloud only) in favor of [API tokens](#api-tokens). On-premise Jira will not be affected. Read more about this in our [announcement](https://support.workato.com/support/solutions/articles/1000267662-jira-cloud-only-jira-service-desk-deprecation-of-basic-authentication-with-password).**

![Configured Jira connection](/assets/images/jira-docs/configured_jira_connection.png)

- **Connection name**
  Give this Jira connection a unique name that identifies which Jira instance it is connected to.

- **Host name**
  Complete Jira instance URL used to login to Jira.

- **Username**
  Username to connect to Jira.

- **Password**
  Password to connect to Jira.

- **Is this app in a private network?**
  To connect to on-premise Jira instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

## Roles and permissions required to connect
Jira users who have login access to their Jira instance can connect to Workato using their credentials. However, we recommend that a separate user (with Jira Administrator global permissions) be created for integration purposes.

### Project permissions

As your Jira connection respects the project permissions scheme(s) in your Jira project, you must ensure that your Jira account has sufficient permissions to perform the desired actions on the relevant Jira objects.

There are 3 main ways a user can have access to objects within a project:
- People
- Issue security schemes
- Permission schemes

#### People
Users [can be added to a project](https://confluence.atlassian.com/get-started-with-jira-core/add-users-to-your-project-917965377.html) (via **Project Settings → People**) using 2 methods:

1. Searching & selecting a specific user, and then specifying the user's project role. ![People project roles](/assets/images/jira-docs/project-people-roles-1.png)*Choosing a project role for a user Jan Donyada*

    Project roles allow users to be associated with functional roles. For example, if your organization requires all software development issues to be tested by a 'QA' person before being closed, you could:
    - Create a project role called 'QA'.
    - Create a permission scheme called 'Software Development', in which you assign the 'Close issue' permission to the 'QA' role.
    - Associate the 'Software Development' permission scheme with all software development projects.
    - For each software development project, add your QA engineers, assigning them the 'QA' project role.

2. Searching for a Group and then specifying the group's project role.
![People project group](/assets/images/jira-docs/project-people-group.png)*Choosing a project role for a the Jira Administrators group*
  A 'group' contains multiple members. Groups are similar to project roles, but with 1 key difference: group membership is global whereas project role membership is project-specific. Also, group membership can only be altered by Jira administrators, whereas project role membership can be altered by project administrators.

#### Issue Security Schemes
[Issue security schemes](https://confluence.atlassian.com/adminjiracloud/configuring-issue-level-security-776636711.html) can be created and added to each project, allowing control over who can view and edit the issues of the project.

A scheme can have several security levels - and users or groups of users can be assigned to each security level. This ensures that only users who are assigned the appropriate security level may view the issue.

If your project has a defined issue security scheme, your linked Jira account must be a member of the appropriate security level in the security scheme. Typically, a security level's members may consist of:
- Individual members
- Groups
- Project Roles
- Issue roles such as 'Reporter', 'Project Lead', and 'Current Assignee'
- 'Anyone' (e.g. to allow anonymous access)

In the example below, the issue security scheme has a defined security level which allows access to only certain users, groups and project roles.

![Issue security scheme](/assets/images/jira-docs/issue-security-scheme-example.png)
*Only user 'Jan Donyada', users in the 'Jira Administrators' group, and users with the 'QA' project role have access to the issues, as defined by the 'Top-secret' security level*

#### Permission Schemes
Project permissions are created within **Permissions schemes**, which are then assigned to specific projects by your Jira Administrators.

Permissions can be granted for specific actions like creating issues, edit issues, assign issues, and so on. Permissions can be found by selecting **Project Settings → Permissions**.

Each permission can be granted across:
1. Project roles
2. Applications (JIRA, JIRA service desk users etc)
3. Groups

##### 1. Project role
If a permission scheme associated with a project has defined role-specific permissions for specific actions, your linked Jira account *must* be assigned the same role to be authorized to use those actions in your Workato recipes.

For example, in the project permission scheme below, only the 'QA' role has been permitted to perform the 'Close Issues' action.
![QA role](/assets/images/jira-docs/qa-role.png)

Hence, if the Workato recipe wants to perform any 'Close issue' actions, the linked Jira account must also be assigned the role 'QA' for the action to be authorized.

##### 2. Application access
Application access settings let you control which person has access to which product(s). If your site only has one product (i.e. if you have a Confluence-only or Jira-only instance, for example) – users are automatically granted access to that product when they sign up.

![Application permission schemes](/assets/images/jira-docs/application-permission-schemes-1.png)

If your Workato recipes only need to perform specific actions on your Jira Software instance, then **Jira Software** must be selected for those actions.

![Jira Software only](/assets/images/jira-docs/jira-software-only.png)
*Only users of Jira Software are permitted to assign issues*

Likewise, if your Workato recipes only need to perform specific actions on your Confluence instance, then **Confluence** must be selected for those actions.

If your Workato recipes performs specific actions on both Jira Software & Confluence, then **Any logged in user** must be selected for those actions.

![any logged in user](/assets/images/jira-docs/any-logged-in-user.png)
*Any logged in user of either Jira Software or Confluence is permitted to assign issues*

##### 3. Groups
If a permission scheme associated with a project has defined group-specific permissions for specific actions, your linked Jira account *must* be a member of that group to be authorized to use those actions in your Workato recipes.
![Jira admin group](/assets/images/jira-docs/jira-admin-group.png)
*The Jira Administrators group is permitted to manage sprints*

### Supported Jira actions and their required permissions

#### Upload/download actions
To use the upload and download attachment actions, your linked Jira account must be added to the permissions under the **Attachment Permissions** tab of the permissions page.

![Upload/download actions](/assets/images/jira-docs/upload-download-attachments-1.png)

#### Comments triggers and actions
To use triggers and actions relating to **Comments**, your linked Jira account must be added to the permissions under the **Comments Permissions** tab of the permissions page.

![Comments triggers and actions](/assets/images/jira-docs/comments-permission-schemes-1.png)

#### Issues triggers and actions
To use triggers and actions relating to **Issues**, your linked Jira account must be added to the permissions under the **Issues Permissions** tab of the permissions page.

![Issues triggers and actions](/assets/images/jira-docs/issues-permission-schemes-1.png)


If the JIRA user does not have access to an object through any of the above methods, the object cannot be retrieved from the JIRA project, and will return a '403 - Forbidden' error.

For a comprehensive guide on how to manage project permissions, head over to [Jira's permissions guide](https://confluence.atlassian.com/jirakb/jira-permissions-made-simple-717062767.html).

To troubleshoot why a user is unable to access or perform actions on certain projects, issue types, or fields, you can use the [Jira permission helper](https://confluence.atlassian.com/adminjiracloud/using-the-permission-helper-868982879.html).

## Jira permissions helper
You can use the Jira permissions helper to find out why a user is unable to view/edit certain projects or fields.

![Jira permissions helper](/assets/images/jira-docs/permissions-helper.png)

To utilize this, you'll need to have Jira Administrator access to your Jira instance. Learn more by heading over to [Jira's permissions helper guide](https://confluence.atlassian.com/adminjiracloud/using-the-permission-helper-868982879.html).

### Using Jira real-time triggers
To use Jira real-time triggers, a webhook must first be registered in your connecting Jira instance. Registering webhooks to Jira instances requires Jira Administrator global permissions.

If your linked Jira account has **Jira Administrators global permissions**, then Workato automatically registers a webhook in your Jira instance when your Workato recipe (containing a Jira real-time trigger) is started for the first time.

For more information on Jira administrators & global permissions, check out [Jira's global permissions guide](https://confluence.atlassian.com/adminjiraserver073/managing-global-permissions-861253290.html?_ga=2.23273789.68011281.1530500434-2085645607.1519723142#Managingglobalpermissions-sysadminAboutJIRASystemAdministratorsandJIRAAdministrators).

If your linked Jira account does not have **Jira Administrators global permissions**, you will not be authorized to register webhooks, and will require assistance from a user with **Jira administrators global permissions** to register one for you. You can still perform a Jira real-time trigger, but you'll have to use an [HTTP webhook trigger](https://resources.workato.com/http-connector/#/list/2?_k=5qaw2y) instead.

### Registering a webhook trigger as a Jira Administrator
If you're a Jira Administrator with global permissions, you can register a webhook for your fellow Jira instance users who want to use it for their HTTP webhook trigger recipes.

This can be done from the Jira administration console. For more information on how to register a webhook via the Jira administration console, check out the Jira guide on [registering a webhook](https://developer.atlassian.com/server/jira/platform/webhooks/#registering-a-webhook).

#### How to do it
1. Go to Jira administration console → System → Webhooks (in the Advanced section).
![Jira webhooks](/assets/images/jira-docs/jira-admin-console-webhook.png)
*You should see a list of webhooks in the webhook summary page*

2. Click Create a webhook at the top right-hand corner of the page. This should open up the webhook form.
![Jira webhook form](/assets/images/jira-docs/jira-webhook-form.png)
*Form for registering a Jira webhook*

3. In the form that is shown, enter the details for your new webhook:
    1. Enter a name for your webhook
    2. Set the status to **Enabled**
    3. Under URL, paste the target URL of the HTTP webhook trigger your Jira user is using for his recipe.
    ![HTTP webhook target URL](/assets/images/jira-docs/http-webhook-target-url.png)
    *Obtain the URL from an HTTP 'New event via webhook' trigger in the Jira user's recipe*
    4. Lastly, check the boxes for the Jira events you want to listen to, then click **Create**.
    For a full list of events and how to configure them, check out the Jira documentation for [available Jira webhook events](https://developer.atlassian.com/cloud/jira/platform/webhooks/#configuring-a-webhook).
