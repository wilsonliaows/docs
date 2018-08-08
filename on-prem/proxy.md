---
title: On-premises Agent - Proxy Server Support
date: 2018-05-09 12:00:00 Z
---

# Proxy Server Support
The on-premises agent can be run in the environment with limited internet connectivity by using a proxy server. Proxy settings are defined by adding a `proxy` section to the configuration file:

```YAML
proxy:
  host: 192.168.1.1
  port: 8080
  username: proxy_user
  password: proxy_password

database:
  ...

jms:
  ...
```

In this setup, username and password are optional.

Using a proxy server for establishing a secure tunnel requires support for [CONNECT](https://en.wikipedia.org/wiki/HTTP_tunnel#HTTP_CONNECT_tunneling) feature; make sure the proxy server is configured to allow `CONNECT` requests to the Workato gateway (`sg.workato.com`).
