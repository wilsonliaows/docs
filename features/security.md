
---
title: Security

date: 2017-12-12 18:00:00 Z
---


# Security

## IP/domain whitelists
Whitelisting allows you to ensure traffic to/from Workato is not hijacked by a malicious website.

### Traffic from Workato
Al traffic from Workato comes through following IP addresses:
- **52.5.142.59**
- **34.226.132.221**
- **52.54.43.157**

You can add these IP addresses to your application/firewall whitelist. Add all three IP addresses to the whitelist to ensure continious access.

#### Example whitelist configuration
You have recipe that accesses a MySQL server running on an Amazon EC2 machine using a special user called **integrationuser**.

You can run the following SQL command on your database to whitelist the Workato IP addresses.

```sql

GRANT ALL ON db1.*
TO 'integrationuser'@'52.5.142.59',
'integrationuser'@'34.226.132.221',
'integrationuser'@'52.54.43.157';
```

### Traffic from On premise agent

The Workato on-premise agent(OPA) provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases and folders without having to open inbound ‘ports’ in the corporate firewall. The OPA makes an outbound connection to Workato via on-premise gateway(OPG). 

If your organization has strict outbound traffic rules you should whitelist the OPG IP address.

OPG has the following IP address **52.206.58.244**.
