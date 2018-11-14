[![Workato](/assets/images/workato_developer_program.png)](https://www.workato.com)

# Introduction

Here you will find the documentation you need to build application connectors using our SDK.

## Connector

A connector allows you to interact with an application. Each connector have [triggers](/recipes/triggers.md) and/or [actions](/recipes/actions.md). Triggers monitor for events that happen in your app, while actions carry out read/write operations with the connected account. Users typically build [recipes](/workato-concepts.md#recipes), which are sets of predefined instructions to be executed, with these triggers and actions.

Connectors built on the SDK are called **custom connectors**. These connectors have a private scope by default. This means that they are only visible and available to the connector owner.

## Format

Presently, we support the following types
  - JSON
  - XML
  - www-form-urlencoded
  - multipart-form

## Pagination

Pagination helps with response data that is more manageable. It is definitely a bonus if the intended API supports that.

## Query

It is very useful to be able to query resources instead of locating them based on IDs. With Search by query, the API allows you to return a list of results that matches your field criterias. You may also want to look out for the ability to query based on created/updated time which will be crucial when building out your triggers.

## Custom connector sharing

There are 3 modes of using a custom SDK based connector

1. Private connector
2. Shared connector
3. Public connector

## Build a private custom connector
When you create a custom connector on the SDK, it is visible and available only in your account by default, i.e. it is private. You will be the only one who can use the triggers and actions of this custom connector when building recipes.

If someone else tries to install a copy of your recipe in their account to use it, they will be notified that this recipe utilizes a custom connector that they don't have access to.

## Share your custom connector
Custom connectors can be shared with other Workato accounts. As owner of the custom connector, you can allow specific Workato accounts to view and install the connector in their own account for use.

Sharing is achieved by copying. Each Workato account you share the connector with will have the ability to make a copy of your custom connector code at that point in time. Subsequently, these Workato accounts can make modifications on their copy of the custom connector.

### Install someone else's connector
When users try to copy a recipe that uses a custom connector, they will be asked if they wish to request a **share link** for the custom connector. If they request for it, as the custom connector owner, you will be notified via email, and you can choose to share this link with them. Workato will send the requester a **share link**. The requester can click through this link to install the connector in their account.

This creates a copy of the connector in their account.

### Upgrade your copied connector to the latest available version
When the custom connector owner makes a change to the custom connector code, all Workato accounts with a copy of this custom connector will see an upgrade link. They can choose to upgrade their installed connector by clicking the link.

The upgrade function will overwrite the copy of the custom connector code with the latest version of the master copy of the custom connector. This means that any changes to the custom connector code made by the requester will be overwritten. Do take note that this upgrade link appears whenever there is any change to the master copy of the custom connector, not necessarily when the custom connector owner has made a curated change.

## Public connector
To enable global scope for your private connector, and make it such that all Workato users will be able to view and use your custom connector, you have to submit your code to Workato for review. Our team will approve or request for modifications within a few days.

You can begin this process by submitting a pull request to our [custom connectors repository](https://github.com/workato/custom_connector_docs).
