[![Workato](/assets/images/workato_developer_program.png)](https://www.workato.com)

# Introduction

Here you will find the documentation you need to build application Connectors using our SDK.

## Connector

An Connector is a connector to an application. Each Connector has one or more trigger and actions. When an action or trigger is executed, it performs it's respective function with the account instance connected to that application.

Connectors built on the SDK are called **Custom Connectors**. These connectors have private scope. This means that they are only available to the connector owner.

## Recipe

A Workato recipe is a set of predefined instructions to be executed. It is made up of a trigger and one or more actions to one or more connectors.

It execute a variety of tasks to all the applications supported by the Workato platform.

## Trigger

Defines an event that triggers the execution of a Workato recipe

## Action

Steps that will be executed when a recipe is triggered.

There are 4 types of actions:

1. **Action**
  - Basic actions perform tasks like Search, Create, Update
2. **Conditional action**
  - These actions behave like traffic control. They provide users with the capability to restrict certain actions based on conditions.
  - Example: Create a new Account only if it does not already exist
3. **Repeat action**
  - Repeat actions are simple loops. They perform predefined tasks multiple times based on an array (list) of records.
  - Example: Add line items in QuickBooks for each opportunity item in Salesforce
4. **Stop**
  - Allows users to terminate a run of the recipe (a job). This is useful if you wish to stop performing any actions if a certain condition is met.
  - Optionally, you can define an error for this action. What this does is let you generate exceptions in certain scenarios. These jobs that stops with errors will show up in job history as errors

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
