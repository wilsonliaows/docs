---
title: On-premises Agent - Connection Profiles
date: 2017-02-22 12:00:00 Z
---

# Connection Profiles
A single Workato on-premises agent can be used to connect with multiple on-premises applications. A **connection profile** uniquely identifies each one and contains configuration information required to connect to that application.

 Profiles are configured in the `<INSTALL_HOME>/conf/config.yml`. A config file can contain profiles to a few types of systems:
 - [Databases](#database-connection-profile)
 - [On-premises file systems](#on-premises-files-connection-profile)
 - [Java messaging service](#jms-connection-profile)
 - [Apache Kafka](#apache-kafka-connection-profile)
 - [Active directory](#active-directory-connection-profile)
 - [HTTP resource](#http-resources)
 - [NTLM](#ntlm-connection-profile)

 Additionally, you can configure [proxy servers](/on-prem/proxy.md) for on-premises agents installed in a server with limited internet connectivity.

 A typical config file will look something like this:

```YAML
database:
  profile1:
    ...
  profile2:
    ...

files:
  profile3:
    ...
  profile4:
    ...

jms:
  profile5:
    ...

ldap:
  profile6:
    ...
```

**Do not use spaces or special characters in connection profile names.**

## Applying a new configuration

A running on-premises agent automatically applies any changes made to the configuration file. Changes to proxy server settings require you to restart the agent.

## Database connection profile
Database connection profiles are located in the `database` section of `<INSTALL_HOME>/conf/config.yml`.

A database type is specified either by using the `adapter` property or a complete JDBC URL provided in the `url` property. Using the following `adapter` values for the respective database you are connecting to. The following databases are supported by the on-premises agent - use them as `adapter` values for the respective databases you connect to.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Database</th>
        <th>adapter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Microsoft SQL Server</td>
      <td><code>sqlserver</code></td>
    </tr>
    <tr>
      <td>Oracle Database</td>
      <td><code>oracle</code></td>
    </tr>
    <tr>
      <td>PostgreSQL</td>
      <td><code>postgresql</code></td>
    </tr>
    <tr>
      <td>MySQL</td>
      <td><code>mysql</code></td>
    </tr>
    <tr>
      <td>Other JDBC-compatible database</td>
      <td><code>jdbc</code></td>
    </tr>
  </tbody>
</table>

`port` numbers can be omitted when matching defaults for a given database type.

Here's a sample SQL server configuration for connecting to a specific instance:

```YAML
database:
  sales:
    adapter: sqlserver
    host: localhost
    port: 1433
    database: sales
    username: me
    password: foobar
```

Here's a sample PostgreSQL database using `url` property in the configuration:

```YAML
database:
  sales:
    url: jdbc:postgresql://sales.database:5432/sales
    username: joe
    password: Secret123
    ApplicationName: workato
```

### JDBC connection profile
When creating connection profile to other JDBC-compatible databases, the configuration is special. These profiles require `url` and `driverClass` properties, where `url` is a valid JDBC URL and `driverClass`  provides fully-qualified name of JDBC driver class for the given database. The driver class must be available on the agent's classpath;
note that your agent's classpath can be extended in the `server` section of the configuration file:
```YAML
database:
  tpc:
    url: jdbc:presto://warehouse.intra:8889/tpch
    driverClass: com.facebook.presto.jdbc.PrestoDriver
    adapter: jdbc
    user: my_user
    SSL: false

server:
  classpath: /opt/workato-agent/jdbc
```

## On-premises files connection profile
Working with on-premises files requires you to define a file system profile in the `files` section.
You need to specify the base folder for file access as it will be used for resolving relative paths. A folder named `HR` in the `C:/Documents/` directory will be configured like this:

```YAML
files:
  hrfiles:
    base: "C:/Documents/HR"
```

In another example, if wish to provide access to the `employees` folder in the Desktop directory, the configuration will have a file path that looks something like this:

```YAML
files:
  hrfiles:
    base: "/Users/me/Desktop/employees"
```

## JMS connection profile
JMS connection profiles must be defined in the `jms` section. A JMS provider is specified by `provider` property of a connection profile. The following JMS providers are supported by the on-premises agent:

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Messaging service</th>
        <th>provider</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Amazon Simple Queue Service</td>
      <td><code>amazon-sqs</code> or <code>sqs</code></td>
    </tr>
    <tr>
      <td>Apache ActiveMQ</td>
      <td><code>activemq</code></td>
    </tr>
  </tbody>
</table>

### Amazon SQS
You need the following configuration properties when connecting to Amazon SQS:
```YAML
jms:
  MyAmazonProfile:
    provider: amazon-sqs
    region: <Your Amazon API region, eg 'us-east-2'>
    accessKey: <Your Amazon API access key>
    secretKey: <Your Amazon API secret>
```

Note that you need to make sure your SQS queue is created before sending messages.

### Apache ActiveMQ
For connecting to a running ActiveMQ broker you only need to specify the broker URL:
```YAML
jms:
  MyActiveMQProfile:
    provider: activemq
    url: tcp://localhost:61616
```

ActiveMQ broker cannot be embedded into the agent. Using any `vm://` broker connections is not supported.

## Apache Kafka connection profile
Kafka connection profiles must be defined in the `kafka` section. You need the following configuration properties when connecting to Kafka:
```YAML
kafka:
  MyKafkaProfile:
    ... connection properties ...
```

You can provide any Kafka [consumer](https://kafka.apache.org/documentation/#producerconfigs) or [producer](https://kafka.apache.org/documentation/#newconsumerconfigs) configuration properties, e.g. `bootstrap.servers` or `batch_size`.

However, some properties are overridden by the on-premises agent and cannot be configured. You will get a warning when trying to redefine a protected property. Some examples of these protected properties:

| Property name | Comment |
|------------------|-------------------------------------------|
| key.serializer | Only `StringSerializer` is supported by agent |
| value.serializer | Only `StringSerializer` is supported by agent |
| key.deserializer | Only `StringSerializer` is supported by agent |
| value.deserializer | Only `StringSerializer` is supported by agent |
| auto.offset.reset | Defined by recipes |
| enable.auto.commit | Defined internally |

Workato Agent also supports the following (non-Kafka) configuration properties:

| Property name | Description |
|------------------|-------------------------------------------|
| timeout | General operation timeout, milliseconds. |
| url | Comma-separated list of server URLs where protocol is either `kafka` or `kafka+ssl`. |
| ssl.truststore | Allows inlining of PEM-encoded truststore for secure connection to Kafka |
| ssl.keystore.key | Allows inlining of private key for secure connection to Kafka |
| ssl.keystore.cert | Allows inlining of client certificate for secure connection to Kafka |

`ssl.*` options above can be used when connecting to Kafka using SSL/TLS and allows you to keep PEM-encoded certificates and private keys inside the `config.yml` file. Any YAML-compatible multiline syntax could be used, for instance:

```YAML
kafka:
  MyKafkaProfile:
    ssl.truststore:
    |
      -----BEGIN CERTIFICATE-----
      502mPNNAYkY4a7Zu84DLCXLFurEa4BhLBqLkzC6WdTrBN9z6Rp/svTIl6VgjSTP6
      .....
      -----END CERTIFICATE-----
```

Note that password-protected private keys cannot be inlined.

## Active Directory connection profile
Active Directory connection profiles must be defined in the `ldap` section.  Example profile:
```YAML
ldap:
  MyLdapProfile:
    url: ldap://ldap.intra:389
    base: DC=intra,DC=company,DC=co
    username: CN=company,CN=Users,DC=intra,DC=company,DC=co
    password: secret
```

where profile configuration properties are:

| Property name | Description |
|------------------|-------------------------------------------|
| url | Defines Active Directory server URL using `ldap://` schema with optional port number. |
| base | Defines root (base) DN for LDAP binding. |
| username or userDN | Defines user DN for LDAP binding. |
| password | Password used for LDAP binding. |
| timeout | Common LDAP operations timeout, in seconds. |

## HTTP resources

The `http` configuration section allows configuring agent access to internal HTTPS resources:
```YAML
http:
  trustAll: true
  verifyHost: true
```

The agent may be configured to allow accessing internal HTTPS resources which use self-signed certificates. To enable self-signed certificates set `trustAll` property to `true`.

Normally a server certificate's Common Name (or Subject Alternate Name) field should match the target hostname. If you want the agent to accept server certificates with non-matching hostname, disable hostname verification by setting `verifyHost` property to `false` (defaults to `true`).

## NTLM connection profile
Certain HTTP resources require NTLM authentication. This can be done using a NTLM connection profile. An example profile should look like this:
```YAML
ntlm:
  MyNtlmProfile:
    auth: "username:password@domain/workstation"
    base_url: "http://myntlmhost.com"
    cm_default_max_per_route: 15
    cm_max_total: 100
    verifyHost: true
    trustAll: false
```

The following profile properties are supported:

| Property name | Description |
|------------------|-------------------------------------------|
| auth | NTLM authentication credentials |
| base_url | The base URL for NTLM resources |
| cm_default_max_per_route | **Optional**. Sets the number of connections per route/host (must be a positive number, default 5) |
| cm_max_total | **Optional**. Sets the maximum number of connections (must be a positive number, default 10) |
| http_connect_timeout | **Optional** The timeout in milliseconds used when requesting a connection (must be a positive number, default 10000) |
| http_connection_request_timeout | **Optional** The timeout in milliseconds until a connection is established (must be a positive number, default 10000) |
| http_socket_timeout | **Optional** The socket timeout in milliseconds, which is the timeout for waiting for data or, put differently, a maximum period inactivity between two consecutive data packets (must be a positive number, default 10000) |
| verifyHost | **Optional**. Specifies whether to enable verification of the host name for SSL/TLS connections (default true) |
| trustAll | **Optional**. Specifies whether trust all certificates for SSL/TLS connections (default false) |

HTTP methods supported for NTLM connections are `GET`, `POST`, `PUT`, `PATCH`, `DELETE` and `HEAD`.
