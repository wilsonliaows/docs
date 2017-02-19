---
title: Workato connectors
date: 2017-02-19 06:15:00 Z
---

# Salesforce

## Connector information

### API version
The Salesforce connector uses [Salesforce REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

### Supported editions and versions
The Salesforce connector works with all Salesforce cloud instances. 

## How to connect to Salesforce on Workato

### Salesforce connection
The Salesforce connector uses basic authentication to authenticate with JIRA.
![Configured Salesforce connection](/_uploads/Salesforce-docs-img/Salesforce New connection.PNG)
* **Connection name**

  Give this Salesforce connection a unique name that identifies which Salesforce instance it is connected to.

* **Sandbox**

  To connect to a Salesforce Sandbox instance, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

* **Enable restricted IP**

  Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

Once you have filled up the above fields, click on connect a Salesforce connection pop-up will show up, allowing you to either chose an account that has been saved in your browser, or provide new login credentials. ![SF authentication](/_uploads/Salesforce-docs-img/Salesforce authentication.PNG | width=100)

* **Username**

  Username to connect to Salesforce.

* **Password**

  Password to connect to Salesforce.
  

### Roles and permissions required to connect
JIRA users who can login to JIRA can connect to JIRA from Workato. The user will have the same [project permissions](https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html) on Workato as in JIRA, and will be able to read and write to the same projects and issues.

To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).

## Working with the JIRA connector
### Using real-time triggers
To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).
