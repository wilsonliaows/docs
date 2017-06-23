---
title: Google Calendar
date: 2017-04-28 06:15:00 Z
---

# Google Calendar

With the help of Workato, you can easily link Google Calendar to organize and set up important meeting dates. One specific example where this could be useful is if an adminstrator wanted to set a meeting in an employee's calendar. 

## Trouble shooting

### Google Calendar Error: 404 Resource not found

![Error message](/assets/images/connectors/google-calendar/error-message.png)

If you recieve a 404 resource not found notification, this error means that the account connected to recipe cannot access to the particular event. Do ensure that your event ID is accessible to that particular account. When updating a Google Calendar Event, you would require a Google Calendar Event ID.

To solve this issue:

Always ensure that the account connected to the Workato recipe that is updating the Calendar have access to that particular Calendar. Let more about best practices on how to update Google Calendar Events here: https://support.workato.com/support/solutions/articles/1000239293


###  Why does my date appear wrongly in Google Calendar?

When you create a recipe that involve dates in Google Calendar, you might face the problem of the dates appearing wrongly (date output either jumps back or forth), due to possible time-zoning issues. 

One possible solution to this problem would be to manually manipulate the dates. Please follow our support article on the right way to manipulate your dates [here](https://support.workato.com/support/solutions/articles/1000177317-formula-mode-date-functions%20).

###  Where do I find Google Calendar Event ID required when updating a Google Calendar Event?


The Google Calendar Event ID is an automatically generated ID that is created whenever you create a new calendar event in Google Calendar. 

In order to update a Google Calendar Event, you are required to provide Workato the ID of the Google Event that you would like us to update.


![Event ID](/assets/images/connectors/google-calendar/google-calendar-message.png)


To get the Google Calendar Event ID, here are two ideas:

* Store the Google Calendar ID in the app object that triggers the recipe (or any other related object/app), and simply use that field to update the Google Calendar Event. For example, if you have an Event Object in Salesforce, you can simply add a Custom Field in the Event Object to store the Google Calendar ID. In this case, you can either 1) Build a recipe that creates a Salesforce Event whenever a Google Calendar Event is created and simply fill in the Google Calendar Event ID into Salesforce when you create the Salesforce Event OR 2) Build a recipe that create the Google Calendar whenever the Salesforce Event is created and simply update the Salesforce Event with the Google Calendar ID after the Google Calendar Event is created.

* Alternatively, you can simply do an event search in Google Calendar. You can search based on Calendar ID, Calendar Name, Event Name, Date From and Date to. Do note that this method is not as accurate as the first one provided above because your search result may yield more than one record. In that case, the recipe will simply update the first result returned by the API or you can use the Repeat Action to cycle through each of the records and take actions conditionally. Additionally, changing event names will not yield any results in your search action.

![Search](/assets/images/connnectors/google-calendar/search-events.png)
*correct form*
