---
title: API Collections and Endpoint Management
date: 2018-02-02 18:26:00 Z
---

# API Collections and Endpoint Management

## Creating an API Collection

The first step in setting up an API for external use is to define and test one or more recipes that use the "Callable recipes by Workato" connector as a trigger. Each such recipe is a potential Endpoint for a callable API, but when first created they are not enabled for external access.

The next step is to organize these recipes into one or more API Collections. Generally an API Collection should contain endpoints whose access pattern has some common features, so that you want to manage them together. For example, a set of Salesforce endpoints that are intended to be called by recipes used with the Sales team might be put together in an API Collection.

It may be helpful to place recipes whose endpoints belong to a the same API Collection within the same folder in the Workato UI. An API Collection can be associated with a folder, so that any new callable recipes added to the folder will be placed into the collection automatically (they are not, however, automatically enabled for external calling).

To create an API Collection, navigate to the API Management section from the Tools menu, and then click on the API Collections tab. You will see something like this:

![API Collection Tab](/assets/images/api-mgmt/api-collections.png)
*API Collections Tab*

Click on "Add new API Collection" to create a new collection. This brings up an API Source dialog, as follows:

![Select API Source dialog](/assets/images/api-mgmt/select-api-source.png)
*Select API Source dialog*

After filling in this dialog, the final screen shows a list of the endpoints that will be initially placed into your collection from the folder you have selected. Don't worry if more endpoints are included than you actually to use. You can edit the list later.

Click on "Create API Collection" to create the collection. This returns you to the API Collections list, where you will see the new collection listed.

## Editing an API Collection

Clicking on "Create new endpoint" within the API Collection tab brings up a dialog which allows you to add a new Endpoint to the API Collection. The recipe for this endpoint can be chosen from any callable receipe: it does not have to be in the same folder as any other existing collection endpoints.

The "..." icon in the upper left corner of listed endpoint within the API Collection brings up a menu that allows editing or deleting an individual endpoint within the collection. The editing dialog looks like this:

![Edit endpoint dialog](/assets/images/api-mgmt/edit-endpoint.png)
*Edit endpoint dialog*

Editing allows changing the name, recipe, HTTP Method (such as POST), and the URL path to the API. (Note that changes may require clients of the API to make adjustments on their end, so that their recipes, scripts, etc. still work). Deleting an endpoint removes it from the collection and makes it inaccessible to any clients that had previously been granted access to it through the collection. 

## Activating or Deactivating an Endpoint

When first created as part of creating an API Collection, or when first added to an existing collection, an endpoint is set to the Inactive state. In this state it cannot be called remotely. The slider control next to the "Inactive" label can be used to change the status to "Active." However, to be made active, the recipe associated with the endpoint must first be running.

Sliding the slider back to "Inactive" makes the endpoint not callable again. It does not however stop the associated recipe.

## Machine-readable documentation (Open API)

The API Collection page has a link in the upper-left-hand corner, labeled "Download Open API spec." This gives you access to a downloadable file that contains documentation for all the endpoints within the collection, in a format that can be used by programs and tools. This format is called Open API, also known as Swagger. Currently Workato supports [version 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) of the specification.

## Viewing an Endpoint

The description that is in the Open API file can also be viewed in the Workato UI, by clicking on an Endpoint within the API Collection list. This will bring up a page with detailed documentation on that endpoint.

There are several sections within the information section:

### Implementation notes

These come from the recipe description and describe what the recipe does.

### Response class (status 200)

When a call to the endpoint is made, a status of 200 will be returned to the client if the call was successful. This section also documents any response data that is sent along with the status.

### Parameters

This section lists the parameters that are required to be input as part of the call to the API. For a GET method, parameters should be sent as query strings that are part of the URL. For a POST or PUT method, parameters should be sent in JSON format in the body of the request.

### Response messages

If a call to the API fails, then an error status will be returned to the HTTP client. This section documents the possible error codes that might be returned.

## Testing an Endpoint

At the bottom of the endpoint description section there is a Test button. This can be used to make a REST call to the endpoint for testing purposes.

The input parameters can be entered in the Parameters section of the endpoint description. Frequently the "Example value" shown in the endpoint description will suffice for a test. For example:

![Parameter input](/assets/images/api-mgmt/test-parameters.png)
*Parameter input*

Once the required parameters are entered, click the Test button at the bottom of the screen. A successful test might produce results like this:

![Test response](/assets/images/api-mgmt/test-response.png)
*Test response*

This shows a "Success" return code (200).

If the response value is not 200, the test generated an error. There can be numerous reasons for an error. But probably the most common error when performing a test from the same account that owns the callable recipe is 500 ("Invalid request"). This usually indicates that input parameters were wrong: not all required parameters were supplied, or some had values that are invalid for the target recipe.
