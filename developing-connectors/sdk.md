[![Workato](/assets/images/workato_developer_program.png)](https://www.workato.com)

# Introduction

Here you will find the documentation you need to build application adapters using our SDK.

## Adapter

An Adapter is a connector to an application. Each Adapter has one or more trigger and actions. When an action or trigger is executed, it performs it's respective function with the account instance connected to that application.

Connectors built on the SDK are called **Custom Adapters**. These connectors have private scope. This means that they are only available to the connector owner.

## Recipe

A Workato recipe is a set of predefined instructions to be executed. It is made up of a trigger and one or more actions to one or more adapters.

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
