---
title: Workato action steps
date: 2017-02-20 13:00:00 Z
---

# Steps
There are various types of recipe steps that can be added to recipes, each with different logic.

![Available steps](/_uploads/steps-docs/available_steps.png)

## Action
Actions carry out an operation in your target app, usually a create, update, or search operation. Each action usually have a set of input fields and an output datatree.

### Action step example
The following step carries out a **Search organizations** action in Zendesk. The input fields on the left shows the available fields to search for a Zendesk organization by:
- Name
- Tags
- Notes
- Details

In the following case, the **Search organization** action is carried out by name.

![Action step input fields](/_uploads/steps-docs/action_step_input.png)
[Example recipe](https://www.workato.com/recipes/480358)

When the **Search organizations** action has been carried out, Zendesk will return data about the organizations found, if any. The output datatree in subsequent steps will display available fields for mapping.

In the following case, the **Update organization** step uses the ID field from the **Search organizations** step to identify which Zendesk organization to update (ID field as highlighted).

![Action step output fields](/_uploads/steps-docs/action_step_output.png)
[Example recipe](https://www.workato.com/recipes/480358)

## Conditional action
Conditional actions will only be carried out if the defined condition is true. All actions indented within a conditional action block will be carried out if that condition is true.

### Conditional step example
The following recipe has two conditional steps:
- If Zendesk organization was found, update Zendesk organization
- If Zendesk organization was not found, create new Zendesk organization

![Conditional step examples](/_uploads/steps-docs/conditional_step_examples.png)
[Example recipe](https://www.workato.com/recipes/480358)

Any job ran by this recipe can only proceed through either one of the conditional step, as the Zendesk organization must have either been found or not.

## Repeat action
The repeat action works with lists to carry out a series of actions on every item in that list. Actions indented within a repeat block will be carried out for all items in the list.

## Call recipe
Call recipe will run another recipe (named a callable recipe). Callable recipes are usually built to extract a set of common steps, which multiple recipes use, into a separate recipe that all main recipes can use. This reduces the complexity of individual recipes.

## Stop
The stop step ends a single job from being processed any further. It is usually used in cases whereby there are no recipe errors (i.e. no error is thrown in the job), but where there may be business errors and no data should be processed.

The stop step can be configured to mark the job as a failed job or a successful job, depending on business logic. If marking the job as failed, an explantory error message is required.

![Stop options](/_uploads/steps-docs/stop_options.png)
[Example recipe](https://www.workato.com/recipes/480360)

### Stop step example
The following recipe expects all Salesforce accounts to be present in Zendesk as organizations. In cases whereby no matching Zendesk organization is found, no recipe error is thrown as the search simply returns an empty list. However, the recipe will send an email to the recipe owner before ending the job.

![Stop step example](/_uploads/steps-docs/stop_step_example.png)
[Example recipe](https://www.workato.com/recipes/480360)

The recipe also marks the job as an error, so that the recipe owner will take notice of this job and attempt to rerun it.
![Stop step with error](/_uploads/steps-docs/stop_with_error.png)
[Example recipe](https://www.workato.com/recipes/480360)

Any job ran by this recipe can only proceed through either one of the conditional step, as the Zendesk organization must have either been found or not. If not found, the job will stop at Step 4. If found, the job will not carry out actions within the conditional step (Steps 3 and 4), instead only updating the matching Zendesk organization.

## Action with error handler
This step, also known as the try-catch step, is used to define remedial actions when errors occur. Common remedial steps are to notify users of the error via email or error messages in the app, or to carry out a rollback (i.e. reversing the job by deleting any created or half-created records).

There are 2 blocks: the **Monitor actions for error** and the **On error** block. All actions to be carried out should be within the **Monitor** block. If all actions are successful, the **On error** block will be ignored. However, if any step in the **Moitor** block fails, the actions within the **On error** block will be carried out.

## Error handler step example
The following recipe tries to update the Zendesk organization right after the search step, irrespective of whether any Zendesk organizations were found. In cases whereby no Zendesk organization matching the Salesforce account name was found, the **Update organization** step fails.
![Error monitor step example](/_uploads/steps-docs/error_monitor_example.png)
[Example recipe](https://www.workato.com/recipes/480361)

As the recipe catches failed actions within the error monitor block, failed **Update organization** actions will be caught, and the recipe proceeds to carry out steps within the **On error** block. In this case, it seems that the only reason for the update failing is because no matching Zendesk organization was found. Hence the remedial step creates a new Zendesk organization.