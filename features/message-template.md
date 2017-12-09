
---
title: Message template

date: 2017-12-09 18:00:00 Z
---

# Message template

The message template enables you to create static templates for commonly used messages. Template can be used to generate HTML/text/JSON/XML messages. You can use template variables to substitute dynamic content within a template. Template allows you to separate the message composition logic from the message generation logic. Workato templates use [Mustache](https://mustache.github.io/mustache.5.html) as templating language.

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
