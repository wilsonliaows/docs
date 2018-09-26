---
title: Error handling best practices
date: 2018-06-11 10:00:00 Z
---

# Error handling and monitoring

This section covers the best practices for recipe building for handling errors. View this [recipe](https://www.workato.com/recipes/696621) that showcases all the best practices.

![Error Handling Recipe](/assets/images/building-best-practices/error-handling-eg1.png)

**1. Error monitor step**

To monitor specific steps for errors, wrap all the actions within your recipe within an error monitoring step. This allows Workato to monitor all errors, whether user created or system generated, so that they can be universally caught and handled. To do this, click on 'Add a new step', then on 'Action with error monitor'.

![error monitor step](/assets/images/building-best-practices/error-handling-error-monitor.png)

As in the example recipe, you should nest all your recipe steps in 'Monitor actions for error'. This will allow Workato to watch these actions for errors. Once any of the steps within the nest throws an error, you can configure the recipe to retry the monitored steps once, twice or thrice, or to skip to the next steps immediately.

![error monitor step2](/assets/images/building-best-practices/error-handling-error-monitor2.png)

If the recipe still fails after the retries, the recipe will perform the steps nested in 'On error'. In the example, the recipe will send out an email via Workato to the administrator's email address when the actions have been retried three times
and failed. Do note that as the errors are handled according to the logic specified in your error monitoring step, the job will **not** stop running when they occur.

![error monitor step3](/assets/images/building-best-practices/error-handling-eg2.png)

**2. Conditional actions**

Try as much as possible to prevent errors by checking the input values to key actions in your recipe, i.e. when you are writing to a destination system. Use conditional actions to validate the incoming data and stop actions to end or fail a recipe job early to reduce unnecessary processing time and API calls. This will speed up the time taken for all your jobs. You can add conditional actions by clicking on 'Add a new step', then on 'Conditional Action'.

![error monitor step4](/assets/images/building-best-practices/error-handling-eg4.png)

**3. Stop action**

Carry out data validation (using conditional actions) as early as possible in the recipe and stop the recipe using the stop action the moment something is amiss. This will make the recipe more efficient and minimize unwanted processing or excess API calls. This is done in steps 4 and 6 of the recipe. The stop reason can also be changed so that a personalized error message will appear in your job report and in the error emails. The example below stops the recipe when the search object step does not yield any results.

![error monitor step3](/assets/images/building-best-practices/error-handling-eg3.png)


**4. Custom Error Emails**

When configuring the send email action in Workato to send custom error emails, please ensure that the errors are added as an attachment with a descriptive filename such as errors.txt. Also ensure that the email message contains the Job URL, Recipe URL and the time which the recipe ran.

The pills for `Recipe URL`, `Job URL` and `Job created at` can be found in the 'Properties' tab in the data tree.

![error monitor step5](/assets/images/building-best-practices/error-handling-eg5.png)
