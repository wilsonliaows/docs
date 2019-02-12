---
title: Managing API Clients and Access Policies
date: 2018-02-02 19:41:00 Z
---
# Managing API Clients and Access Policies

API owners can manage and monitor clients' usage of their APIs from
the Workato UI.

API Management is accessible from the Tools menu. Once in the main
API Management screen, select the "Clients" tab to create and
manage API clients. A typical screen would look like this:

![Create API Cliient](/assets/images/api-mgmt/api-new-client.png)
*Create API Client*

A client must have a name, and may have a description and an associated
logo or image.

Note that there is actually no requirement that an API client be a
human individual. A client is associated with an API key, which grants
access to a certain group of APIs, under the control of certain
policies.  The actual API caller might be a script or automated
program, rather than a person. However, as a best practice, it is
recommended that you distribute one API token per person you permit to
access your API, so that you can identify the users who
are making calls to your API endpoints.

Once a client is created in the UI, the API owner will then be prompted
to create a new access profile for that client.

![New Access Profile](/assets/images/api-mgmt/api-new-access-profile.png)
*New Access Profile*

An access profile specifies the API Collections to which a client has
access, and the policy that applies to that access (a policy is
optional). It is also possible in this screen to specify one or more
IP addresses as a whitelist. When this is done, only requests
initiated from those addresses will be allowed: all other access will
be denied.

One the access profile fields have been filled in, click on "Add
profile" to create the client and save that client's associated
profile. After this step, the screen will loook something like this:

![API client creation](/assets/images/api-mgmt/api-client-creation.png)
*API client creation*

Note the "API Key" field. A unique API key is generated for each client. This key is a long string of characters. It needs to be supplied to the client so that the client can connect to the API. Treat this API key as confidential information: it should be known only to the API owner and the client.

An API key can be revoked, and a new one issued, by clicking on the "Refresh" button next to the key.

Note that the new client is shown as "Disabled" by default. A disabled client cannot call any APIs. Moving the slider right will switch the client's status to "Enabled," after which he/she will be allowed to make API calls.


