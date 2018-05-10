---
title: On-Premise Agent - Connections using On-Premise Agent
date: 2017-02-22 12:00:00 Z
---

# Connections Using On-Premise Agent
A [connection](/connections.md) determines where requests will be made from. With a direct connection, requests will be executed from Workato servers. A connection using an on-premise agent will have requests sent from the environment where the agent is installed in.

For some of your connections, you may want to specify whether it connects through Workato servers or through your on-premise agent. The triggers and actions available in the chosen connector are the same regardless of your choice of connection. An on-premise app connection needs to point to a specific [connection profile](/on-prem/profile.md) in your on-premise agent.

## Connecting to database profiles
All database connectors give you the option to connect through an on-premise agent. In the connection fields, Select the desired on-premise agent from the field labelled **Is this app in a private network?**.

Once you select the on-premise agent, enter the **On-prem connection profile** name. This profile name should be the same as what you configured in the `database` section of the `config.yml` configuration file.

In the following example, we are connecting to a SQL Server database with the profile name `production`.

```YAML
database:
  production:
    adapter: sqlserver
    host: localhost
    username: me
    password: foobar
```
When configuring a SQL Server connection to this profile, we will need to provide the profile name accordingly.

![Database connection using on-premise agent ](/assets/images/on-prem/database-opa-connection.png)
*Database connection using on-premise agent*

## Connecting to on-premise file system profiles
All on-premise files connectors must be connected through an on-premise agent. In the connection fields, Select the desired on-premise agent from the field labelled **Is this app in a private network?**.

Once you select the on-premise agent, enter the **On-prem connection profile** name. This profile name should be the same as what you configured in the `database` section of the `config.yml` configuration file.

```YAML
files:
  hrfiles:
    base: "C:/Documents/HR"
```

When configuring an On-premise files connection to this profile, we will need to provide the profile name accordingly.

![On-premise file connection using on-premise agent](/assets/images/on-prem/files-opa-connection.png)
*On-premise file connection using on-premise agent*
