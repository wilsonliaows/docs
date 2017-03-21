---
title: Handling JSON files
date: 2017-04-05 16:00:00 Z
---

# JSON data format

JSON (JavaScript Object Notation) is a syntax for storing data. It is perhaps the most popular and widely used data format in the world of APIs. JSON is based on name/value pairs and arrays, put together in a simple format which makes it highly readable and easily transmitted.

JSON is mostly hidden from regular Workato users because we expose data as input fields and output datapills in the recipe. However, you may occassionally have to work with JSON data in your specific workflow automation. Workato provides a few options for handling such instances.

## HTTP connector

The HTTP connector is the most straightforward way to handle raw data from APIs. Refer to our [HTTP connector course](http://resources.workato.com/http-connector/#/?_k=1szm77) for a detailed guide and examples on building HTTP triggers and actions to handle JSON data.

## Workato SDK

Workato SDK provides developers with fewer constraints when building connectors to APIs. It is an extension of the Workato framework. It supports a variety of authentication procedures and allows developers to easily build, maintain and distribute connectors to integration-seekers. The Workato SDK is not just a framework to serve external developers. Many of the existing Application connectors on the Workato platform are built on top of this framework. Workato aims to leverage this robust and powerful framework constantly and improve it's capabilities.

Please refer to the main [Workato SDK documentation](/developing-connectors/sdk.md) for more details.

## Which should I use?

Refer to our documentation on the [HTTP vs SDK](/developing-connectors/http-vs-sdk.md) for a detailed comparison of the two options.
