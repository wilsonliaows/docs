---
title: Developing connectors
date: 2018-05-21 17:00:00 Z
---

# Developing connectors
If you're stuck on an integration because of a missing trigger, action, or connector, Workato has platform extensions that enable you to easily build a working trigger or action with minimal work. In this section, we have guides to walk you through the building process.

However, before building your own, consider some possible alternatives to connect to your apps.

- **Use CSV file import/export via a file connector**

Many apps support [CSV import/export](/features/handling-csv-files.md). Workato can help to automatically import data from a CSV file into your apps, or write data to CSV files.

If you're missing a trigger to read data from your apps, you can configure your apps to create a CSV file and upload it to an SFTP server for Workato to read.

If you're missing an action to write data to your apps, Workato can upload a CSV file into your app's file server for you to mass import at your convenience.

- **Connect with the database directly**

If you want to connect to a proprietary app developed in-house or a self-hosted app that Workato doesn't connect with, you can check if Workato has a connector for the database used by the app, e.g. MySQL, SQL Server. If yes, you might consider connecting directly to the database to read or write data.

Documentation on the databases can be found under the [connectors section](/connectors.md).

## Workato connector extensions
You can build your own triggers, actions and connectors on Workato via custom actions, the [HTTP universal connector](/developing-connectors/http.md) or the [SDK](/developing-connectors/sdk.md). Here's a flowchart to guide you on the best framework to use.

![Flowchart to decide what framework to use](/assets/images/developing-connectors/connector-dev-flowchart.png)
*Flowchart to decide what framework to use*

### Custom actions
Custom actions allow you to build an action on top of an existing Workato connector. This allows you to focus on the HTTP request and response, and the Workato connector handles the authorization flow.

### HTTP universal connector
The [HTTP connector](/developing-connectors/http.md) allows you to work with any API that supports HTTP connectivity. The HTTP connector works with a variety of auth models, content types, and HTTP methods.

### Connector SDK
The [connector SDK](/developing-connectors/sdk.md) is a developer framework for developing a connector. You can choose to share the connectors you build with other Workato users, or submit your code via the Developers Program to make your connector public to all Workato users.
