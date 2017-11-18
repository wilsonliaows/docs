---
title: Workato connectors - Workday Connection
date: 2017-11-17 09:00:00 Z
---

# Workday Connection

## How to connect to Workday on Workato
In order to connect to Workday and allow for data to flow to and from Workday via Workato, the following needs to be done in Workday. In this section, we'll be going through how to set these up in detail.

1. Register Integration System User

2. Create API Client (optional)

### 1. Register Integration System User
Using named accounts to run integrations is not recommended. You should create an Integration System User specifically for this.

### 2. Create API Client (optional)
This step is required only if you wish to work with custom objects in Workday. The Workday connector uses the Workday REST API, which uses an OAuth 2.0 for authentication. You need to create an API Client to allow connection to the REST API.

### 3. Connect to Workday on Workato
Workday asks for the following information to connect.

![Information to connect to Workday](/assets/images/workday/workday-connection-1.png)

The following details more information about each field.

- Email and password

This is the email and password of the integration system user you just created.

- Tenant ID

Retrieve the Tenant ID of your Workday instance from 

- Use custom objects?

Choose if this connection requires additional connection details to work with custom objects in your Workday instance.

The following fields are only required if you select Yes.

![Additional information to connect to Workday](/assets/images/workday/workday-connection-2.png)

- Client ID (optional)

Client ID of the API Client your just created

- Client secret (optional)

Client secret of the API Client your just created

- Authorization endpoint (optional)

Authorization endpoint of the API Client your just created

- Token endpoint (optional)

Token endpoint of the API Client your just created
