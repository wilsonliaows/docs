---
title: Recipe building best practices
date: 2018-06-11 10:00:00 Z
---

# Recipe building best practices

## Recipe naming and management
Proper recipe naming and arrangement is especially critical when there are many recipes in your Workato instance or if you are working with recipes in different phases of development, testing and production. 

### Naming

Recipe names can be changed by simply clicking on the pencil icon next to them in the recipe builder. You can only change a recipe's name when the recipe is not running. 

![Recipe Naming](/assets/images/building-best-practices/recipe-renaming.png)

You should give the recipe a name that is descriptive to what it does. For example, the recipe above mentions the app it is connected to, Google Maps and what it does: Geolocation. It also has '[Prod]' at the beginning of its name, showing that it is the final production recipe that is in use. Proper naming of recipes is important to allow them to be easily searchable in your main recipe page. 

Note that recipe names are not unique to a recipe— the unique identifier for a recipe is the recipe number. You can see the recipe number in the recipe URL. Hence, you can always get to a recipe by entering the URL as www.workato.com/recipes/recipe_number. This works if you are searching for a public recipe, but not a private one.

### Recipe descriptions and comments

Editing and adding recipe descriptions and comments are useful to communicate recipe details to other members in your team and so you can easily keep track of all your recipes. Recipe descriptions are located in the 'Settings' tab and can be used to specify what a recipe is for. 

Comments can be used to specify what actions are for. You can add and edit the comments by clicking on the speech bubble icon on the right of every action. You can also choose to hide the input and output data associated with this step in job history like sensitive information by checking the 'Enable data masking' box.

![Recipe Comments](/assets/images/building-best-practices/recipe-comments.png)


## Deduplication

Removing duplicates, or deduplication, is an important part of maintaining a good record of your data in the apps you use. When using Workato to move data from one app to another, this involves taking steps to check for existing records and ensuring that duplicate records are not created. 

View this [article](/recipes/deduplication.md) that details how deduplication is done.

## Error handling and monitoring 

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

