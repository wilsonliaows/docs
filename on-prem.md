---
title: On-Premise Agent
date: 2017-02-22 12:00:00 Z
---

# On-Premise Agent
Enterprises have on-premise applications and databases that are deployed within their corporate datacenter. These apps are protected via firewalls, and therefore are typically not easily accessible to cloud services like Workato.

The Workato on-premise agent provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases and folders without having to open ‘ports’ in the corporate firewall.

On-premise access is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at **+1 (844) 469-6752** to find out more.

For Workato accounts with on-prem access, users are able to view the on-prem option in the Tools menu.

![On-prem option](assets/images/on-prem/navigate-to-opa.png)
*On premise menu option*

## Overview
The following is a conceptual model of Workato's on-premise agent and how it interacts with databases and applications behind the firewall.

![On-prem model](/assets/images/on-prem/on_prem_conceptual_model.png)
*Conceptual model for on-prem agent and connector*

Workato on-premise connectivity has 2 core components:

- Tunneling
- Database and filesystem access.

The on-prem agent runs within the customer’s data center, behind the firewall, and establishes a TLS websocket tunnel to connect out to Workato.

The on-prem agent can be configured to access the selected databases and filesystems behind the firewall. Since 2.2.x it also supports connections to [JMS-compliant systems](/connectors/jms.md).

## Supported operating systems
The on-prem agent runs on the following systems:

- Linux (64-bit)

- Windows 7, 10 (64-bit)

- Mac OS X

Minimum hardware requirements for the system running the on-prem agent are:

- 8GB of RAM
- 250 MB of disk space
- 800 Mhz 64-bit CPU (Intel/AMD).

## Common errors when using the on-prem agent
If connecting to on-prem applications fail, check that:
- Selected agent is active
- Credentials provided in the app connection are correct
- Credentials of user provided in the app connection has correct role and permission to connect

If connecting to on-prem databases fail, check that:
- Selected agent is active
- Credentials provided in the connection profile are correct
- Database name and type provided in the connection profile is correct

## Example recipes

### Example on-premise database recipes
- [Salesforce case sync with on-prem SQL Server](https://www.workato.com/recipes/280605)
<!-- [Quickbase data sync with SQL Server](https://www.workato.com/recipes/280610-demo-qb-data-sync-with-sql-server#recipe)
[On-prem Postgres sync with Postgres](https://www.workato.com/recipes/268936)-->
