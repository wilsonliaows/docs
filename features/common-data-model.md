---
title: Common data model
date: 2017-09-07 14:00:00 Z
---

# Common data model
The common data model, also known as the canonical data model or the abstract data model, is a standard schema that organizations define in order to simplify data flow and interaction between the different applications they use across the organization. This enables integrations to be built based on the common data model instead of being based on the application - and as a result, minimizes impact on organizations when they add, edit or remove integrations and applications.

The common data model feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Applications of the common data model
The shared schemas created in the common data model in Workato can be currently used in the following connectors:

- [Java messaging service connector](/connectors/jms.md)
- [Mapper connector](/connectors/mapper.md)

## Working with the common data model
When using the PubSub connector, you can listen to messages in a topic or publish messages to a topic. In order to do so, you have to first create a topic, and define the message structure for that topic, so that publishers and consumers alike know what to expect when sending or receiving messages.

You can create and manage your shared schema on the shared schema feature page.

![Shared schema management](/assets/images/features/common-data-model/shared-schema-management.png)
*Create and manage shared schema on the shared schema page*

When creating shared schemas, you will need to define what the data structure of the schema will look like. This structure can be subsequently edited.

![Editing shared schema](/assets/images/features/common-data-model/editing-schema.gif)
*Editing the shared schema definition*

## Message templates

The message templates enables you to create static templates for commonly used messages. Templates can be used to generate HTML/text/JSON/XML messages. You can use template variables to substitute dynamic content within a template. Templates allows you to separate the message composition logic from the message generation logic. Workato templates use [Mustache](https://mustache.github.io/mustache.5.html) as templating language.

E.g:
The UI developer builds the HTML template for the outgoing mails. The template contains the branding CSS
and it uses template variables for dynamic content.

```html
<html>
  <body>
    <h1>Your order for {{product_name}} was shipped on {{shipping_date}}</h1>
    <p>
      Your tracking number is
      <a href="https://www.foo.com/tracking/{{tracking_no}}">{{tracking_no}}</a>
    </p>
    <p>
      Thanks,<br>
      Dan Wilmer
    </p>
  <body>
</html>
```

The recipe developer generates mail message by providing the template name and the values for message 
variables.

![Creating a message from a template](/assets/images/features/message-template/creating-message.gif)
*Creating a message from a template*

This enables the UI developer to change the format of the message without making changes to the recipe.
