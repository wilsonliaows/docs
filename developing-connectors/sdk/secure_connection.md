---
title: SDK - Secure Connection
date: 2018-10-10 00:00:00 Z
---

# Secure Connection
HTTP requests made in a custom adapter will be sent from Workato by default. This means that all traffic will come through our [IP addresses](/security.md#traffic-from-workato). However, you can also configure it to route all requests through an [on-prem agent](/on-prem.md).

## Enable connection through on-prem agent
By default, a custom adapter does not provide an option to connect through an on-prem agent. As a result, when setting up a connection, there will not be a way to configure it.

![Connection without option to use OPA](/assets/images/sdk/connection_without_secure_tunnel_option.png)
*Connection without option to use OPA*

To enable the option for connecting through an OPA, all you have to do is add the `secure_tunnel` property in your custom adapter code. This should be set to `true` and be defined as a top level property.
```ruby
{
  title: "Mandrill",

  secure_tunnel: true,

  connection: {
    fields: [
      {
        name: 'api_key',
        label: 'API key',
        control_type: 'password',
        optional: false
      }
    ],
  },
}
```

With this property added, an input field will be visible when setting up a connection to choose an existing on-prem agent in your account.

![Connection with option to use OPA](/assets/images/sdk/connection_without_secure_tunnel_option.png)
*Connection with option to use OPA*

Learn how to setup an on-prem agent [here](/on-prem/setup.md).
