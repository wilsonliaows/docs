---
title: Workato connectors - Quick Base
date: 2018-07-30 06:00:00 Z
---

# Quick Base
[Quick Base](https://www.quickbase.com/) is a no-code application development platform that allows business users to quickly create custom business software.

Workato's Quick Base connector enables you to build even more automation around Quick Base and connect with other applications.

## API version
The Quick Base connector uses [Quick Base HTTP API](https://help.quickbase.com/api-guide/index.html).

## How to connect to Quick Base on Workato
The Quick Base connector support 2 types of authentication:
1. Username/Password
2. User token

### Username/Password authentication
To connect using username/password, input your Quick Base **Sub-domain** and **Username** / **Password**, as seen in the example below.

![Authentication using username/password](/assets/images/connectors/quick-base/authentication-user-pass.png)

### User token authentication
This type of authentication allows you to grant access to Workato, without disclosing your Quick Base username and password. To use this authentication, you need to input your Quick Base **Sub-domain** and **User token**, as seen in the example below.

![Authentication using user token](/assets/images/connectors/quick-base/authentication-token.png)

You can find user token in Quick Base from `Your profile name` > `My preferences` > `Manage User Tokens`.

![Finding Quick Base user token](/assets/images/connectors/quick-base/user-token.png)

When creating a new token, please make sure to grant access to the Quick Base apps that you want Workato to access.
