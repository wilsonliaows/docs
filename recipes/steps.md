---
title: Steps
date: 2017-02-20 13:00:00 Z
---

# Steps
Recipe steps can be actions, or control flow statements that help you describe business logic.

![Available steps](/assets/images/recipes/steps/available_steps.png)
*Various recipe steps available in recipe editor*

## Action step
Actions carry out an operation in your target app, usually a create, update, or search operation. Each action requires a set of input fields and typically returns data i.e. output data tree.

### Example: Action step
The following step carries out a **Search organizations** action in a Zendesk integration. The input fields on the left shows the available fields to search for a Zendesk organization by:
- Name
- Tags
- Notes
- Details

In the following case, the **Search organization** action is carried out by name.

![Search Zendesk organizations by Salesforce account name](/assets/images/recipes/steps/search-zendesk-organizations.gif)
*Searching Zendesk organizations by Salesforce account name. [Example recipe](https://www.workato.com/recipes/480358)*

When the **Search organizations** action has been carried out, Zendesk returns data about the organizations found, if any. The output datatree displays available fields for mapping in subsequent steps.

In the following case, the **Update organization** action uses the ID field from the **Search organizations** action to identify which Zendesk organization to update (ID field as highlighted).

![Updating Zendesk organization identified by ID](/assets/images/recipes/steps/update-zendesk-organization.gif)
*Updating Zendesk organization identified by ID. [Example recipe](https://www.workato.com/recipes/480358)*

## Conditional action step
Conditional actions will only be carried out if the specified condition is true. All actions indented within a conditional action block will be carried out only if that condition is true.

### Example: Conditional action step
The following recipe has two conditional steps:
- If Zendesk organization was found, update Zendesk organization
- If Zendesk organization was not found, create new Zendesk organization

![Conditional step examples](/assets/images/recipes/steps/conditional_step_examples.png)
*Recipe that uses conditional steps to decide whether to create or update Zendesk organization. [Example recipe](https://www.workato.com/recipes/480358)*

In this example, any job can only proceed through either one of the conditional steps, as the Zendesk organization must have either been found or not.

## Repeat step
When working with a list of items (e.g. a list of invoice line items), you may need to carry out a set of actions for every item in the list. The repeat step helps you do that. Actions indented within a repeat block will be carried out for all items in the list.

The input to the repeat step is a list. Actions within a repeat block should use data output from the **Repeat** step's datatree. This ensures that every item in the list is processed.

### Example: Repeat step
Refer to the example scenario of syncing Salesforce accounts (using the batch trigger) to Zendesk as organizations.

![Foreach step example scenario](/assets/images/recipes/steps/foreach_example_scenario.png)
*Recipe that uses the Repeat step to iterate through list of Salesforce accounts. [Example recipe](https://www.workato.com/recipes/480695)*

In this example, the trigger returns a list of Salesforce accounts. Since Zendesk does not support batch actions, each Salesforce account must be added one at a time from Salesforce to Zendesk.

The list datapill has to be passed into the repeat step. When the input list field is selected, only list type datapills are usable in the datatree, as shown below. List type pills can be identified via their stack icon.

![Map list data pill into the Repeat step](/assets/images/recipes/steps/map-list-pill-into-repeat-step.gif)
*Mapping a list data pill into the Repeat step's input list field. [Example recipe](https://www.workato.com/recipes/480695)*

Datapills from the **Foreach** output datatree should be mapped to ensure that values from each list item are used when the action is repeated. For example, if two Salesforce accounts are fetched by the trigger, using pills from the **Foreach** datatree ensures that the **Create organization** action creates a Zendesk organization with the data from the first Salesforce account on its first iteration, then with the data from the second Salesforce account on its second iteration.

![Use datapills from Repeat step](/assets/images/recipes/steps/use-datapills-from-repeat-step.gif)
*Using datapills from the Repeat step's datatree. This ensures values from the list being iterated through are used. [Example recipe](https://www.workato.com/recipes/480695)*

The following displays the mapping from the **Foreach** datatree.

![Foreach step example](/assets/images/recipes/steps/foreach_example.png)
*Datapills are mapped from the Repeat step's datatree. [Example recipe](https://www.workato.com/recipes/480695)*

For further Repeat step examples or more info about list processing, refer to the [list management article](http://docs.workato.com/features/list-management.html).

## Call recipe step
Call recipe will run another recipe (named a callable recipe). Callable recipes are like functional calls in programming languages. They offer an easy way to reuse recipe logic.

You should note that callable recipes are executed synchronously. i.e. the calling recipe will be blocked waiting for the called recipe to finish processing.

Callable recipes are an advanced feature in Workato that you can read more about in the [callable recipes article](http://docs.workato.com/features/callable-recipes.html).

## Stop step
The stop step ends a single job from being processed any further. It is usually used in cases when there is a an error in the business logic and further processing of the job is not required.

The stop step can be configured to mark the job as a failed or a successful, depending on business logic.

### Example: Stop step
The following recipe expects all Salesforce accounts to be present in Zendesk as organizations. In cases where no corresponding Zendesk organization is found, the recipe will stop processing further actions.

![Stop step example](/assets/images/recipes/steps/stop_step_example.png)
*Recipe that utilizes the Stop step to send email and end job. [Example recipe](https://www.workato.com/recipes/480360)*

Any job ran by this recipe can proceed through either one of the conditional step, as the Zendesk organization must have either been found or not. If not found, the job will stop at Step 4. If found, the job will not carry out actions within the conditional step (Steps 3 and 4), instead only updating the matching Zendesk organization.

This recipe marks the job as an error, so that the recipe owner will take notice of this job and attempt to rerun it.

![Stop step with error](/assets/images/recipes/steps/stop_with_error.png)
*Configuring the Step step's error message. [Example recipe](https://www.workato.com/recipes/480360)*

## Action with error handler step
This step allows you to monitor for errors in actions, similar to the try/catch concept in programming lanaguages.. When an error occurs, you have the chance to:

1) retry the sequence of actions again, in case it was a temporary error such as network issues, or

2) take remedial actions, such as notifying users of the error via email or error messages in the app, or to carry out a rollback (i.e. reversing the job by deleting any created or half-created records).

This step consists of 2 blocks: the **Monitor** block and the **Error** block. Actions to be monitored for errors should be within the **Monitor** block. If all actions are successful, the **Error** block will be ignored. However, if any action in the **Monitor** block results in an error, the actions within the **Error** block will be executed.

### Auto-retry
When using the error monitor step, you can setup the actions within the **Monitor** block to be auto-retried by Workato in cases of action failures. By default, the **Monitor** block actions will not be reran.

![Do not retry default configuration](/assets/images/recipes/steps/do-not-retry-default.png)
*Error block defaults to the do-not-retry selection*

You have the option of retrying up to 3 times, and of selecting the time interval to wait between each retry.

![Retry configuration fields](/assets/images/recipes/steps/retry-configuration.png)
*Retry configuration fields*

You can also define a condition that has to be met before the **Monitor** block can be auto-retried.

![Retry condition](/assets/images/recipes/steps/retry-condition.png)
*Configuring the retry condition field. In this example, the actions in the Monitor block will only be carried out again if the error message does not contain the 401 error code.*

## Example: Error monitor step
The following recipe tries to update the Zendesk organization right after the search step, regardless of whether any Zendesk organizations were found. In cases where no matching Zendesk organization is found, the **Update organization** action will fail.

![Error monitor step example](/assets/images/recipes/steps/error_monitor_example.png)
*Recipe that uses the error monitor to monitor failures in updating Zendesk organizations. [Example recipe](https://www.workato.com/recipes/480361)*

As the recipe catches failed actions within the error monitor block, failed **Update organization** actions will be caught, and the recipe proceeds to carry out steps within the **Error** block immediately, as no auto-retry was configured. In this case, it seems that the only reason for the update failing is because no matching Zendesk organization was found. Hence the remedial step creates a new Zendesk organization.

## Example: Error monitor with retry step
If the actions in your **Monitor** block tends for fail for temporary reasons such as network issues or timeout issues, it would make sense to use auto-retry, such that the recipe will attempt to execute the steps again until it succeeds, for a maximum of 3 tries.

We will reuse the same same error monitor exmaple recipe from above, where we try to update the Zendesk organization right after the search step, regardless of whether any Zendesk organizations were found. In cases where no matching Zendesk organization is found, the **Update organization** action will fail.

![Auto-retry example](/assets/images/recipes/steps/recipe-with-error-monitor-and-retry.png)
*Recipe that uses the auto-retry to recover from action failures in updating Zendesk organizations. [Example recipe](https://www.workato.com/recipes/599962)*

If updating the Zendesk organization fails, the recipe will check to see if the error message contains a 401 error code (i.e. unauthorized). If the error is an unauthorized error message, we know that further attempts will still fail as this means we don't have the right permissions to update the Zendesk organization, perhaps because of changed permissions. If the error is not an unauthorized error message, we will proceed to retry the update organization action again after the specified period of time, e.g. 5 seconds.