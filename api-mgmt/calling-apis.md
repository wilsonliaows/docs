---
title: Calling APIs
date: 2018-02-03 06:23:00 Z
---

APIs that are exposed through the API Management console can be called from recipes in accounts other than one owning the recipe, as well as from third-party tools, programs, and scripts.

# Calling an API Endpoint from a Recipe

An API Endpoint can be called from a recipe using the HTTP Connector. Select the "Send request" action of the Connector. The following screen shows a typical configuration for this action (in this case a POST request):

![API Client Request](/assets/images/api-mgmt/api-client-request.png)
*API Client Requset*

Make sure that the type of request (POST, PUT, GET) matches the API that you are calling. Any required fields need to be specified in the body (for POST and PUT) or as query parameters in the URL (for GET).

Also note that an "API-Token" request header has been added. Its value should be set to the token that the API owner has supplied to you.

Caution: the API token should not be shared with other users. Therefore it is recommended not to make a recipe public that contains such as token.

Also configure if necessary the expected Response schema from the API call.

# Testing a Call to an API

Using the recipe test feature, you can run the recipe a single time and have it generate a call to the REST API. If successful, the API will return a 200 status and the recipe execution will continue to completion. There are several possible errors that can occur. Some of the common ones are:

1) A 500 error code ("Internal error"). This usually indicates that the request parameters were missing or invalid for the API.

2) A 401 error code ("Unauthorized"). This indicates a problem with the API token. It is missing, or does not match the correct code for the API you are trying to call.

3) A 404 error ("Not found") may indicate that you have the incorrect URL in the Request configuration on your side. Another possible cause is that the recipe you are calling is not running. Yet another possibility is that the recipe owner has either the API Collection or your your client configuration set to "Disabled."

# Calling the API from other clients

Clients can access the Open API description for the service by performing a GET request on the API url and adding "swagger" to the path. This URL should also have the API token as a query parameter. So for example if the API URL is "https://workato.com/doc/service/sales-api-v1," the Open API description is avaiable at a URL like:

`https://workato.com/doc/service/sales-api-v1/swagger?token=e6883d64843aaed62d48bcdf3cf4ebbf`

The Open API description can be used by tools such as the [Swagger UI](https://swagger.io/tools/swagger-ui/) to make requests. For programmers, it is possible to generate API client code using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).

Any other standard HTTP request tool, such as the command-line tool "curl," can also be used to make requests.

