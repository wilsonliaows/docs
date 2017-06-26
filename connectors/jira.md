---
title: Workato connectors - JIRA
date: 2017-02-16 06:15:00 Z
---

# JIRA

## Connector information

### API version
The JIRA connector uses [JIRA Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/)

### Supported editions and versions
The JIRA connector works only with JIRA cloud instances. These instances can be hosted on cloud or on-premise.

## How to connect to JIRA on Workato

### JIRA connection
The JIRA connector uses basic authentication to authenticate with JIRA.
![Configured JIRA connection](/assets/images/jira-docs/configured_jira_connection.png)
* **Connection name**

  Give this JIRA connection a unique name that identifies which JIRA instance it is connected to.

* **On-prem secure agent**

  To connect to on-premise JIRA instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

* **Host name**

  Complete JIRA instance URL used to login to JIRA.

* **Username**

  Username to connect to JIRA.

* **Password**

  Password to connect to JIRA.

* **Enable firewall-friendly IP**

  Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

### Roles and permissions required to connect
JIRA users who can login to JIRA can connect to JIRA from Workato. The user will have the same [project permissions](https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html) on Workato as in JIRA, and will be able to read and write to the same projects and issues.

To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).

## Working with the JIRA connector

### Using real-time triggers

To use JIRA real-time triggers (which registers a JIRA webhook via the API), the authenticated user needs to have the JIRA Administrators global permission. To set up real-time triggers without requiring the JIRA Administrators global permission, use the HTTP connector to set up a JIRA webhook trigger via the JIRA admin console.

Select the Workato HTTP trigger New event via webhook and provide an event name to generate a unique webhook target URL.
When setting up your webhook in JIRA, provide this URL as the target URL so that real-time notifications from JIRA will be directed specifically to this recipe.

![JIRA](/assets/images/connectors/jira/jira.png)

## Working with Attachments in JIRA

### Upload attatchments

You can upload a text file by entering your text into the File Content field. Specify a filename including the file extension you want to use (txt, doc, csv). You will also need to enter a JIRA Ticket ID or Key corresponding to the issue you are uploading the attachment for.

![JIRA](/assets/images/connectors/jira/upload-jira.png)
*Upload attatchment*

### Download Attachment

You can download a text file by entering the Attachment URI. The "downloaded" attachment can then be used in following steps by selecting the data pill from the Download attachment step output.

![JIRA](/assets/images/connectors/jira/download-jira.png)
*Download attatchment*

![JIRA](/assets/images/connectors/jira/log-message-jira.png)
*In this example, the Attachment is being logged as a message to output to show how a downloaded attachment is read*


## Troubleshooting

### JIRA: 404 error when making a connection

When making a connection to JIRA, you may sometimes encounter a 404 error. To fix this, you need to make sure that your host name and username are properly given. 

**Host name**
The hostname is your company's JIRA domain, and is typically in the form of <companyname>.atlassian.net (e.g. workato.atlassian.net)

**Username**
Typically, your account name should be the first part of your company email address (part before the "@"). So if your email is johndoe@workato.com, your Username will be johndoe. For admin's the default username should be "admin"

### JIRA Error Message: Connection Host Name

If the error message reads **Connection Host Name invalid**,the connection host name was given in an invalid format.

To solve this issue, make sure the host name is in this format:

{companyName}.atlassian.net

### How to Deal With JIRA Listbox Fields

Sometimes, JIRA list box **datapills** come up looking strange. Here's an example:


```ruby 
{"self"=>"https://jira.xyz.com/rest/api/2/customFieldOption/123", "value"=>"Acceptable", "id"=>"123”} 
```


#### What is it, and how do we fix it? 

Firstly, this means that your Workato recipe is getting a JIRA value from a list box like this:

| ----| -------------|
| 1   | OPTIONS:     |
| 2   | Acceptable   |
| 3   | Unacceptable |

JIRA stores the option, "Acceptable", as a data point with a unique ID of "123", and a value of "Acceptable".

{"self"=>"https://jira.xyz.com/rest/api/2/customFieldOption/123", "value"=>"Acceptable", "id"=>"123”}

In order for Workato to choose the right option, the recipe needs to know the "value". To extract "Acceptable" out of this example, we can use **formula mode**. Here's one way that it could be accomplished (replaced OPTIONS with the Workato data **pill**):

```ruby
OPTIONS.to_s.split("value=\"")[1].split("\"")[0]
```

If you run the recipe now, you will get "Acceptable". Great!

However, one more step is required for Workato to choose the right dropdown option. For instance, Workato may understand the list's values like this:

| ----| ------------------------------|
| 1   | option_accept: "Acceptable",  |
| 2   | option_refuse: "Unacceptable" |


In this example, we would still need to fill in "option_accept" in order for Workato to choose "Acceptable". To find out what each value is mapped to, click the blue button on the right of the list field to switch between the list value and custom value.

To do so, we can map values like this:

```ruby
{"self"=>"https://jira.xyz.com/rest/api/2/customFieldOption/123", "value"=>"Acceptable", "id"=>"123”}
```
