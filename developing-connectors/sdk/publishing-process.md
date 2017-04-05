# Custom connector sharing

There are 3 modes of using a custom SDK based connector

1. Private connector
2. Shared connector 
3. Public connector

## Private connector
When you create a SDK based connector, by default, it is available only in your account. i.e. it is private.

## Shared connector
SDK based connectors can be shared on an account by account basis i.e. as owner of shared connector you can allow specific accounts to use the connector.

Please note, sharing is achieved by copying, i.e. each account you share the connector will have their own copy that they can modify.

### Install
When copying a recipe that uses a private connector, the user will be asked to obtain a **share link** for the connector. As the connector owner you can choose to share this link. If you do, you can mail the **share link**. The end user can click through this link to install the connector to their account. 

This creates a copy of the connector.

### Upgrade
When you make a change to the connector, the end user will see an upgrade link. They can choose to upgrade their installed connector by clicking through the link.

Upgrade will overwrite any changes made by end user.

## Public connector
To enable global scope for your private connector, the code will need to submitted to Workato for review. Workato will usually approve or request for modifications within a few days. 

You can begin this process by submitting a pull request to our [repository](https://github.com/workato/connector_sdk).
