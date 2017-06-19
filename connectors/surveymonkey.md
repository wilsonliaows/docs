---
title: Workato connectors - SurveyMonkey
date: 2017-02-16 06:15:00 Z
---

# SurveyMonkey

## Connector information

### API version
The SurveyMonkey connector uses [SurveyMonkey REST API V3](https://developer.surveymonkey.com/api/v3/#getting-started).

### Supported editions and versions
The SurveyMonkey connector works with all SurveyMonkey plans. However, the [**Extract data** capability](https://www.surveymonkey.com/pricing/details/) is required to retrieve survey responses from SurveyMonkey, i.e. using the **Completed survey response** trigger or the **Send survey invite via email and wait for response** action.

## How to connect to SurveyMonkey on Workato

### SurveyMonkey connection
The SurveyMonkey connector uses [OAuth2 authentication](https://developer.surveymonkey.com/api/v3/#authentication) to authenticate with SurveyMonkey.

## How to set up SurveyMonkey

### Creating a new survey

Once you are logged in, first thing you'll need to do is create a new survey and have your questions all set up. 

![Create survey](/assets/images/connectors/survey-monkey/create-survey.png)
*Create a new survey*

The next step will prompt you to create your own collector. Collectors are methods that sends your survey out and stores all responses within this collector. A free Surveymonkey account will allow you to have up to 3 collectors. In this case, we will choose the web link collector.

![SurveyMonkey URL](/assets/images/connectors/survey-monkey/link.png)
*With your survey ready and your collector created, you are now ready to send out surveys.*

### Getting information of respondents

With new survey respondent triggers, you will be able to collect any new responses to your survey directly in any application that you want. 

**Conditions that sets off this trigger:**
In order for Workato to pick up a new record using this trigger, you will need to make sure that the individual that the survey was sent to has successfully completed the whole survey. Once completed, you will be able to retrieve data related to the individual, such as First Name, Last Name, and more.

[Here](https://www.workato.com/recipes/165975#recipe) is a simple recipe that posts new slack messages via Workato's Workbot to notify you whenever a user has replied to your survey. If you are unfamiliar with Workbot, check out our forums regarding how you can manage all your application's data without leaving Slack at all. Make sure you have [set up Workbot](https://support.workato.com/support/solutions/articles/1000224467-getting-started-with-workbot) in your Slack and [turn on notifications](https://support.workato.com/support/solutions/articles/1000223782-not-receiving-any-notifications-) as well. 

![RecipeL](/assets/images/connectors/survey-monkey/surveyyy.gif)
*information*

Once you have chosen which survey the recipe should listen to, you will be able to start the recipe and wait for incoming notifications. Workbot notifications will only activate if you have invited workbot into the channel and started the notification for that particular recipe.

### Gathering answers from survey responses when completed

[With a very similar recipe](https://www.workato.com/recipes/165981#recipe), you can easily post your data into slack itself to notify you regarding the completed response. However, most users would likely store these information in their own CRM system, or store them in a Google Sheets. The main difference between a new survey response trigger and a new survey respondent trigger is that it will be able to access all the responses to your survey's questions : 

![Survey Questions](/assets/images/connectors/survey-monkey/survey-questions.png)
*Completed survey response*

In this section, we're going to use a spreadsheet to store all of our responses. Once it is set up, all your responses will be stored automatically, and you will be able to see them on Slack itself. Pairing together with other Workbot functions, you can even modify some of these data, or query for related data in Slack using Workbot. 

![Spreadsheet](/assets/images/connectors/survey-monkey/surveyyy-1.gif)
*spreadsheet*

### Sending out surveys via email

So far the recipes that we had been looking at was responsive : Giving alerts, storing data, and so on. Triggering only when a new response was received. We will now look at how you can send out surveys using Workato itself. Some of the common use cases are whenever a new campaign member in Salesforce is added, send a survey via email, or whenever an Eventbrite attendee is added, send out a survey.

To send out surveys, you will use the Sending out survey via email action. You will also need an Email collector. Make sure that your survey has an email collector before proceeding to Workato.

![My survey](/assets/images/connectors/survey-monkey/my-survey.png)
*My survey*

Click on your survey, and choose New Collector. Now choose new email Collector. When setting up your collector, you do not have to fully set it up. Simply put your email in it as the first person to receive the response, and click next. Keep going without configuring much of them until you reach a button for you to resume later.

Your collector will be categorised as NOT CONFIGURED. That is alright because Workato will be automatically configuring it. 

![Collectors](/assets/images/connectors/survey-monkey/collectors.png)
*Collectors*

You can start of with [this recipe](https://www.workato.com/recipes/166014#recipe) as a template. This recipe will send out a survey to any new attendee that attends a specific event. Note that I will need to specify which collector do I use when I send out the survey, and you will be able to choose your collector.

![Email invitation](/assets/images/connectors/survey-monkey/email-invitation)
*Email invitation*

Once all is set, you may try testing the recipe. When a job has been processed, you can take a look at your SurveyMonkey Collector. The Email Collector is not in OPEN status, and will be sending out a survey to the email in 5 minutes. Make sure that you turn on notification for that recipe in your Slack in order to receive notifications. To know how to turn on your recipe, Slack @workbot notifications at the channel that you'd like workbot to notify.

![Email](/assets/images/connectors/survey-monkey/email.png)
*Email*

After 5 minutes, your recipient should be able to receive the survey email. 

### Send survey, wait for response, and working with response data

The difference between this action and the previous discussed is that this action will hold on to the process in Workato recipe until a response had been received. This will be very useful if you wish to automatically send out surveys, and then process them once they have completed the response. When the job is picked up, it will remain at Pending status until the survey has been completed by the recipient. The recipe will not proceed until the survey has been completed.

## Troubleshooting

### Collectors cannot be chosen from picklist.

![Survey Monkey troubleshooting](/assets/images/connectors/survey-monkey/survey-monkey-trouble-shooting.png)
*Collector can't be chosen*

There is no available Email collector in the survey. You will need to create one. Once you have done so. Press the keyboard combination of R and F to refresh schema, and your collector should be available in the dropdown menu again.

### I have not received any test email response

To know if the email has indeed be prepared for sending, you can check in your SurveyMonkey UI if it has been done. Usually, your email response will be withheld for at least 5 minutes before being sent
