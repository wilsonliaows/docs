---
title: Workato connectors
date: 2017-02-16 06:15:00 Z
---

# JIRA

## Connector information

### API version
The JIRA connector uses [JIRA Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

### Supported editions and versions
The JIRA connector works only with JIRA cloud instances. These instances can be hosted on cloud or on-premise.

## How to connect to JIRA on Workato

### JIRA connection
The JIRA connector uses basic authentication to authenticate with JIRA.
![Configured JIRA connection](/_uploads/configured_jira_connection.png)
- Connection name
  Give this JIRA connection a unique name that identifies which JIRA instance it's connected to.

- On-prem secure agent
  If your JIRA instance is on-premise, you need to set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on your Workato plan.

- Host name
  Complete your JIRA instance URL, which is the URL you use to login to JIRA.

- Username
  Provide your username to connect to JIRA.

- Password
  Provide your password to connect to JIRA.

- Enable firewall-friendly IP
  Relevant for organizations with IP whitelisting. Select *yes* if you wish to have all requests from Workato originate from a consistent, known IP address.

### Roles and permissions required to connect
JIRA users who can login to JIRA can connect to JIRA from Workato. The user will have the same [project permissions](https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html) on Workato as in JIRA, and will be able to read and write to the same projects and issues.

To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the *JIRA Administrators global permission*. To set up real-time triggers without requiring the *JIRA Administrators global permission*, use the HTTP connector to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).

## Working with the JIRA connector
### Using real-time triggers
To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the *JIRA Administrators global permission*. To set up real-time triggers without requiring the *JIRA Administrators global permission*, use the HTTP connector to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).