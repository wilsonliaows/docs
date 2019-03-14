---
title: On-premises Agent - Connections using On-premises Agent
date: 2017-02-22 12:00:00 Z
---

# Connections Using On-premises Agent
A [connection](/connections.md) determines where requests will be made from. With a direct connection, requests will be executed from Workato servers. A connection using an on-premises agent will have requests sent from the environment where the agent is installed in.

For some of your connections, you may want to specify whether it connects through Workato servers or through your on-premises agent. The triggers and actions available in the chosen connector are the same regardless of your choice of connection. An on-premises app connection needs to point to a specific [connection profile](/on-prem/profile.md) in your on-premises agent.

## Connecting to database profiles
All database connectors give you the option to connect through an on-premises agent. In the connection fields, Select the desired on-premises agent from the field labelled **Is this app in a private network?**.

Once you select the on-premises agent, enter the **On-prem connection profile** name. This profile name should be the same as what you configured in the `database` section of the `config.yml` configuration file.

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

![Database connection using on-premises agent ](/assets/images/on-prem/database-opa-connection.png)
*Database connection using on-premises agent*

## Connecting to on-premises file system profiles
All on-premises files connectors must be connected through an on-premises agent. In the connection fields, Select the desired on-premises agent from the field labelled **Is this app in a private network?**.

Once you select the on-premises agent, enter the **On-prem connection profile** name. This profile name should be the same as what you configured in the `database` section of the `config.yml` configuration file.

```YAML
files:
  hrfiles:
    base: "C:/Documents/HR"
```

When configuring an on-premises files connection to this profile, we will need to provide the profile name accordingly.

![On-premises file connection using on-premises agent](/assets/images/on-prem/files-opa-connection.png)
*On-premises file connection using on-premises agent*

## Next Steps
1) [Upgrade your on-premises agent](/on-prem/upgrade.md)
2) [Avoid exposure of any sensitive data by using the encryptor tool provided](/on-prem/password-encryption.md)
3) [Run your on-premises agent in environments with limited internet connectivity](/on-prem/proxy.md)
4) [Connect to legacy applications using Java](/on-prem/extension.md)
