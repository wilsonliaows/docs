---
title: Workato connectors - JIRA
date: 2017-02-16 06:15:00 Z
---

# JIRA

[JIRA](https://www.atlassian.com/software/jira) gives users a simple way to organize and plan the release of any software. This allows any software developer to lay out key steps to follow when releasing the software including 'Plan', 'Track','Release','and Report' to guide users.

With Workato, you can use triggers such as 'New/update issue', 'New Project' or 'New Issue' and keep track of these issues and projects on [JIRA](https://www.workato.com/integrations/jira). For example, you can file new issues and projects into separate files on DropBox which can help further organize the process of developing software.

On this page we'll walk you through:
	1. [Connector information](http://docs.workato.com/connectors/jira.html#connector-information)
	2. [How to connect to JIRA on Workato](http://docs.workato.com/connectors/jira.html#how-to-connect-to-jira-on-workato)
	3. [Working with the JIRA connector](http://docs.workato.com/connectors/jira.html#working-with-the-jira-connector)

## Connector information

### API version
The JIRA connector uses [JIRA Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

### Supported editions and versions
The JIRA connector works only with JIRA cloud instances. These instances can be hosted on cloud or on-premise.

## How to connect to JIRA on Workato

### JIRA connection
The JIRA connector uses basic authentication to authenticate with JIRA.
![Configured JIRA connection](/assets/images/jira-docs/configured_jira_connection.png)
* **Connection name**

  Give this JIRA connection a unique name that identifies which JIRA instance it is connected to.

* **On-prem secure agent**

  To connect to on-premise JIRA instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

* **Host name**

  Complete JIRA instance URL used to login to JIRA.

* **Username**

  Username to connect to JIRA.

* **Password**

  Password to connect to JIRA.

* **Enable firewall-friendly IP**

  Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

### Roles and permissions required to connect
JIRA users who can login to JIRA can connect to JIRA from Workato. The user will have the same [project permissions](https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html) on Workato as in JIRA, and will be able to read and write to the same projects and issues.

To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).

## Working with the JIRA connector
### Using real-time triggers
To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).
