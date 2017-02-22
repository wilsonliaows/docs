---
title: Workato connectors - Salesforce
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
The Salesforce connector uses basic authentication to authenticate with Salesforce.
![Configured Salesforce connection](/_uploads/Salesforce-docs-img/Salesforce New connection.PNG)
* **Connection name**

  Give this Salesforce connection a unique name that identifies which Salesforce instance it is connected to.

* **Sandbox**

  To connect to a Salesforce Sandbox instance, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

* **Enable restricted IP**

  Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

Once you have filled up the above fields, click on connect a Salesforce connection pop-up will show up, allowing you to either chose an account that has been saved in your browser, or provide new login credentials. ![SF authentication](/_uploads/Salesforce-docs-img/Salesforce authentication.PNG)

* **Username**

  Username to connect to Salesforce.

* **Password**

  Password to connect to Salesforce.
  

### Roles and permissions required to connect
JIRA users who can login to Salesforce can connect to Salesforce from Workato. The user will have the same [permissions](https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/admin_userperms.htm) on Workato as in Salesforce, and will be able to read and write to the same projects and issues.

To use Salesforce real-time triggers, the authenticated user needs to be on the **Workato Enteprise Plan**

## Working with the Salesforce connector

## What versions and editions we work with or don't work with

## Using real-time triggers

## Working with generic triggers in Salesforce

## Working with generic create/update/search actions in Salesforce

## Working with attachments in Salesforce

## Working with SOQL in Salesforce

## Articles on how to use additional special actions, such as get related objects, etc.

## Best practices in working with the connector

## Troubleshooting
