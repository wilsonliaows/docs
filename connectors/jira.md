---
title: Workato connectors - JIRA
date: 2017-02-16 06:15:00 Z
---

# JIRA

## Connector information

### API version
The JIRA connector uses [JIRA Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/)

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

To use JIRA real-time triggers (which registers a JIRA webhook via the API), the authenticated user needs to have the JIRA Administrators global permission. To set up real-time triggers without requiring the JIRA Administrators global permission, use the HTTP connector to set up a JIRA webhook trigger via the JIRA admin console.

Select the Workato HTTP trigger New event via webhook and provide an event name to generate a unique webhook target URL.
When setting up your webhook in JIRA, provide this URL as the target URL so that real-time notifications from JIRA will be directed specifically to this recipe.

![JIRA](/assets/images/connectors/jira/jira.png)

## Working with Attachments in JIRA

### Upload attatchments

You can upload a text file by entering your text into the File Content field. Specify a filename including the file extension you want to use (txt, doc, csv). You will also need to enter a JIRA Ticket ID or Key corresponding to the issue you are uploading the attachment for.

![JIRA](/assets/images/connectors/jira/upload-jira.png)
*upload attatchment*

### Download Attachment

You can download a text file by entering the Attachment URI. The "downloaded" attachment can then be used in following steps by selecting the data pill from the Download attachment step output.

![JIRA](/assets/images/connectors/jira/download-jira.png)
*Download attatchment*

![JIRA](/assets/images/connectors/jira/log-message-jira.png)
*In this example, the Attachment is being logged as a message to output to show how a downloaded attachment is read*

## Troubleshooting

### [JIRA: 404 error when making a connection](https://workato.freshdesk.com/support/solutions/articles/1000250388-jira-404-error-when-making-a-connection)

### [JIRA Error Message: Connection Host Name](https://workato.freshdesk.com/support/solutions/articles/1000189657-jira-error-message-connection-host-name)
