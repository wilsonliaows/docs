---
title: API Access Policies
date: 2018-02-02 18:26:00 Z
---
# API Access Policies

Access policies enable control over client's usage of APIs. Note that
creating an access policy is optional: 
if no policy is associated with a client, then currently no API
usage limits apply (Workato may, however, impose such limits in the
future).

API Management is accessible from the Tools menu. Once in the main
API Management screen, select the "Policies" tab to create and
manage API access policies. A typical screen would look like this:

![Create API Policy](/assets/images/api-mgmt/api-policy-create.png)
*Create API Policy*

This screen allows setting two different types of policies (both
are required):

1) A rate limit policy restricts the number of API calls that can be
made within a specified short time period, such as a minute.

2) A request limit policy restricts the total number of API calls that can
be made within a longer time period, such as 30 days.

These limits can help prevent overuse of an API by a single client, which could result in degraded peformance for the community of API users.

