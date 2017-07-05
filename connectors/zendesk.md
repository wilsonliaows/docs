---
title: Zendesk
date: 2017-06-23 06:15:00 Z
---

# Zendesk

## Actions

### Zendesk search tickets action

When searching for tickets by filters, you will get a list of tickets in return that correspond to your filters. Your filters can be specific, or a combination of two or more fields.
A combination of fields will result in a more narrow search, where only tickets satisfying all specified filters will be returned.

#### Search tickets by tags

When searching for tickets by tags, partial matches will be returned as well in the result set of tickets. 

For example, if you searched for tickets by the tags: 'urgent' and 'important', any tickets with either tags or with both the tags will be returned in the result set of tickets.

![Zendesk Tags](/assets/images/connectors/zendesk/search_tickets_by_tags.png)
*Search Tickets by Tags*

### Uploading attachments into Zendesk

With Workato, you will be able to upload attachment files onto Zendesk as an attachment, and provide that attachment to a ticket. This is particularly useful when syncing important screenshots or data files coming from your other applications such as Salesforce, JIRA Service Desk, or even cloud storages like Box or SFTP.


Uploading an attachment to a ticket in Zendesk requires two actions:


#### 1. Upload attachment

First, you need to upload the attachment. You can upload a text file by entering your text into the body field. Specify a filename including the file extension you want to use (txt, doc, csv). For text files, you can leave the Content type field blank.

![Zendesk Attachment](/assets/images/connectors/zendesk/upload_attachment.png)
*Upload Attachment*

If you are transferring a file from another application, say Box, you will need to be able to provide the file's Body Content in this section. Here's an example of how you can do so : [**1) JIRA -> Zendesk Attachment**](https://www.workato.com/recipes/341176-new-issue-from-jira-will-search-for-tickets-in-zendesk-and-upload-attachment#recipe)

Note step 9, 10, and 11, where attachment from JIRA is downloaded using Workato's utility and uploaded into Zendesk.

![Zendesk Download Attachment](/assets/images/connectors/zendesk/download_attachment.png)
*Download Attachment*

#### 2. Update ticket

In order to update the ticket, you must provide the attachment token from the upload attachment step output. Pass in this token to the Upload Attachment token field. You will also need to provide the ID for the ticket you want to update along with a comment that the attachment will be uploaded with.

![Zendesk Update Ticket](/assets/images/connectors/zendesk/update_ticket.png)
*Update Ticket*

#### Zendesk update does not update the record if there is no change

Zendesk is quite smart in how it handles updates. We have noticed that although we issued an update via the API, if the record was the same as before it does not generate a new trigger event. This is a good thing and helps in stopping update cascades going between two systems. The reason it is especially good is that zendesk does not expose the 'last updated by user' field and so there is no way to filter out updates made by the API.

This is true of contacts, and we haven't verified if all records behave the same way. We don't believe tickets do.

### Zendesk : Assigning user to Organization(s)

##### Allocating Organization membership
Assigning New user/Reassigning existing user to Organizations

One of the more prominent features of Zendesk is the distribution of tasks based on workplace environment for each user. When performing syncs between Zendesk and other applications, it is common that relocation of organization is needed. This section will show you various techniques on how you may allocate users to different organizations for different workplace environments.

##### 1) Assigning Organization during creation of the user

You will be able to assign a newly created user to an organization based on the organization's ID or name. This is done by providing the value in the organization field in Create New User step.

![Zendesk Assign Organization ID](/assets/images/connectors/zendesk/assign_organization_id.png)
If you do not see the Organization field, click on Add/Remove Optional field, and select Organization ID
*Assign Organization ID*

You may also toggle it by clicking on the small error beside the field to use organization name instead. 

![Zendesk Assign Organization Name](/assets/images/connectors/zendesk/assign_organization_name.png)
*Assign Organization Name*

##### 2) Updating an exiting user's organization
Similar to the creation of a new user, you may also update a user's organization by the update user action. If the user already belongs to an organization, doing so will reallocate  the user's membership from the currently holding organization to the new updated organization.

##### 3) Create organization membership action
If you have users that are enabled for multiple organization membership, you may use the Create Organization membership action to allocate the user to the organization

![Zendesk Create Organization Membership](/assets/images/connectors/zendesk/create_organization_membership.png)
*Create Organization Membership*

### Updating a batch of existing tickets

There can be various situations where tickets of a certain type, belonging to one organization, or applied of a certain tags, need to be updated. Whether it is a reassignment, a broadcasting comment, or simply closing these tickets, updating each ticket one by one can be taxing upon your Zendesk API limits each day.

With Bulk Ticket Updates action, you will be able to save on your API usage, as well as make your recipes  more efficiently. Here are a few simple steps on how you can do so.

#### 1) Obtain a tickets list item datapill

The Bulk Ticket Updates action requires a number of **Ticket ID**s concatenated by commas in order to work. If you'd like to auto-generate a list of those tickets under a specific filter, simply perform a Search Tickets action.

![Zendesk Generate List](/assets/images/connectors/zendesk/generate_list.png)
*Generate List*

#### 2) Listing tickets in a comma separated format

With its output, you can now use Workato's formula mode to extract its **Ticket ID** in a comma separated structure. First, click on the formula mode on beside the field. 

![Zendesk Formula Mode](/assets/images/connectors/zendesk/formula_mode.png)
*Formula Mode*

Then, simply drag the Tickets datapill from your Search ticket action. The Tickets datapill will be the one accompanied by a List symbol (one with multiple stripes). 

![Zendesk Tickets Datapill](/assets/images/connectors/zendesk/tickets_data_pill.png)
*Tickets Datapill*

Next, we are going to use the .pluck() formula to assist us in getting the **Ticket ID**s of all of the tickets. Simply copy and paste the following Formula below and place it right after the datapill in the field : 

![Zendesk Ticket ID Formula](/assets/images/connectors/zendesk/ruby_code.png)
***Ticket ID** Formula in Ruby*

It should now look like this :  
![Zendesk Inputted Formula](/assets/images/connectors/zendesk/inputted_formula.png)
*Inputted Formula*

#### 3) Specify the fields to update
With this, you can now specify the fields that you'd like to update with. In this example, we are closing all tickets that have the tag 'completed'. 

![Zendesk Status](/assets/images/connectors/zendesk/status.png)
*Zendesk Status*

You have now successfully automated a long, repetitive work in only two simple Workato steps!

![Zendesk Bulk Tickets Recipe](/assets/images/connectors/zendesk/bulk_tickets_final_recipe.png)
*Bulk Tickets Final Recipe*

## Zendesk : What is User Identity

In Zendesk, each user may be assigned with multiple "identities", pieces of information or profiles that will put you in contact with the person. Examples of such user identities are : email, Twitter, Facebook, Google, etc.

### List User Identities
In Workato, a user's identities may be retrieved by providing a user ID. The output of the action will contain a List Item named Identity, while a series of datapills will be made available, however the main output to focus on would be these :  

![Zendesk List User Identities](/assets/images/connectors/zendesk/list_user_identities.png)
*List User Identities*

**Type** : The kind of identity that it is.
**Value** : The value contained in this Identity field.

If you'd like to populate all Identities to another application, remember to use a Repeat Action to go through every single User Identity available for this user. To learn more about how to use Repeat Action, check out [this link](https://support.workato.com/support/solutions/articles/1000235840-recipe-basics-understanding-action-3-repeat-actions) for a detailed guide.


