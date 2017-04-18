---
title: Rerunning jobs
date: 2017-02-18 22:15:00 Z
---

# Rerunning jobs
Workato allows for jobs to be reran. In such cases, the trigger event will run through the sequence of actions in the recipe again. This feature is useful when:

- You've edited the recipe and want to test it

- An error occured in a job, you've fixed the recipe/data and wish to rerun the job

**Note:** When jobs are reran, the trigger event is ran through the entire recipe. Duplication may occur, so be sure to check and remove duplicates (if present) before re-running the job.

To rerun jobs from the jobs report page, check the jobs to rerun and click on the rerun button.

![Job rerun from jobs report page](/assets/images/recipes/_actionerror/job-rerun-from-report.gif)
*Rerunning jobs from jobs report page*

You can also rerun jobs when within the job details page. Simply click on the rerun button.

![Job rerun from job details page](/assets/images/recipes/_actionerror/job-rerun-from-details.gif)
*Job rerun from job details page*

Job reruns are in-place - meaning that the position of the job will not change within hte jobs report. A job which was first processed in August and reran in September will retain its position amongst the other jobs processed in August.

# Cached trigger data in job reruns
All job reruns use cached data. This means that the original trigger event's data is reused for the rerun, and any changes made to the trigger event in the trigger app will not be picked up by a job rerun. This means that there are scenarios whereby a job rerun will not resolve your issues:

- when the failed job is due to data issues in the trigger

- when you update the trigger event and wish to see how the recipe processes the new trigger event

In such cases, if you have a **New object** trigger, you might need to delete the existing trigger event and recreate a new trigger event, e.g. if you have a **New Salesforce account** trigger, you would have to delete that newly created Salesforce account and recreate a new Salesforce account for the recipe to pick up the Salesforce account with the correct data.

However, if you have a **New/updated object** trigger, you wouldn't have to delete the record with the wrong data, but simply update the record and let the recipe pick up the update, e.g. if you have a *New/updated Salesforce account** trigger, you can update the newly created/updated Salesforce account to fix the wrong data, and the recipe will pick up that account again with the correct data.

# Job rerun history
Within the job details page, you can view the rerun history of the job.

![Jobs history](/assets/images/recipes/rerun-jobs/jobs-history.png)
*Jobs history*

In the job details screen, if you're viewing a job rerun which is not the latest version of the job reran, the *Rerun* button will be greyed out.

![Deactivated rerun jobs button](/assets/images/recipes/rerun-jobs/non-latest-job-rerun.png)
*Rerun button is greyed out if you're not in the latest ran job details screen*

# Common scenarios for rerunning jobs

- Testing a new recipe

When testing your recipe after building or after editing, it's a good idea to test all scenarios. If your recipe has conditional actions, it is best practice to test out all logical branches in the recipe.

For example, in the following recipe, a trigger event carries out either steps 2-3, or steps 4-5. In this case, we should test out the recipe flow for a Salesforce account which has no matching Zendesk organization, as well as a Salesforce account which has a matching Zendesk organization.

![Example recipe](/assets/images/recipes/rerun-jobs/example-recipe.png)
*Recipe with two logical branches. [Example recipe](https://www.workato.com/recipes/480358) *

Because the trigger is **New/updated Salesforce account**, we can simply create a new Salesforce account and let the recipe pick it up and process it through steps 2-3 to create a corresponding Zendesk account. After that, we can make a quick edit to the Salesforce acccount for the recipe to pick up the updated record, in which case it will run this Salesforce account through steps 4-5 as it will now have a matching Zendesk organization.

Had the trigger been **New Salesforce account**, we would have to stage our tests differently. We would need to create a Salesforce account with a matching Zendesk organization, as well as a Salesforce account with no matching Zendesk organization, adn check that both jobs are carried out correctly.

For any times, during testing, people incrementally build and test a recipe with the same job. During the testing phase, rerunning jobs is commonly used to fix the errors encountered in recipes.

Rather than creating new trigger events, rerunning the same job will allow you to fix the errors 1 step at a time with the same event.

- Errors

When an error occurs in your recipe, the job will be incomplete as it will have ended where the error occurred (unless you're using the [Error monitor step](steps.md#action-with-error-handler-step) to recover from errors). In such cases, rerunning the job is necessary to ensure the job runs to completion as specified in the recipe, unless the issue is with the trigger data, in which case you should refer to [this section](#cached-trigger-data-in-job-reruns) about handling trigger errors.

## Data retention policy
Data retention applies to processed trigger events. This means that older jobs might not be able to be reran. Find out how the data retention policy affects job reruns [here](data-retention.md).
