---
title: Tasks
date: 2018-10-24 14:15:00 Z
---

# Tasks
A Task is a usage metric that is counted every time Workato requests a piece of data from another platform/software or performs an action.

Every recipe [job](/recipes/jobs.md) may consist of multiple tasks. The number of tasks executed in a job depends on the data of the specific trigger event and the recipe logic.

## Task counting

Tasks are counted as follows:

| **Action**  | **Count**     |
|-------------|---------------|
| [Trigger](/recipes/triggers.md) | Task is incremented by 1 |
| [Trigger conditions](/recipes/triggers.md#trigger-conditions) | Will not be counted as a Task |
| [Polling](/recipes/polling-intervals) | Will not be counted as a Task |
| [Searching/Create/Update/Get/Upsert/Lookup etc.](/recipes/actions.md)| Task is incremented by 1 for each of these Actions  |
| [Actions in repeat (for each loop)](/features/list-management.md#using-datapills-in-an-action-with-a-repeat-step-action-does-not-handle-list-processing-list-processing-needs-to-be-done-explicitly-at-the-recipe-logic-level) | The Task is incremented by 1 for every action in the loop.  |
| Control statement ([If](/features/if-conditions.md), [Error monitor](/recipes/best-practices-error-handling.md), stop) | Will not be counted as a Task |
| [Batch/bulk operations](/features/batch-processing.md) | Task is incremented by 1  |

**Note:**
- Tasks in [failed jobs](/recipes/tasks.md#job-errors-and-reruns) will be counted up to the failed step (ie. if a job fails at step 5, step 1-4 will be counted)
- If you call a recipe, the call to the recipe will not be counted as a Task. The triggers and the relevant actions in the recipe called will be counted as tasks.
- Batch/bulk actions are counted as one task

## Examples
The examples for how tasks may be counted in recipes are as follows:

**Example 1**

![Task counting simple](/assets/images/recipes/task-counting/task-counting-eg1.png)
*Simple recipe with one trigger and three actions*

**Total Tasks per job =** 4  (Trigger + Step 1 + Step 2 + Step 3)

**Example 2**

![Task counting with IF](/assets/images/recipes/task-counting/task-counting-eg2.png)
*Recipe with conditional actions*

**Total Tasks per job =** 3  (Trigger + Step 1 + Step 3) _OR_
4 (Trigger + Step 1 + Step 5 + Step 6) depending on the steps it executes based on the condition.

Besides conditional actions, all other control statements: Conditional action with else, Action with error monitor, Call recipe, Stop, Repeat action will **not** be counted as tasks.

**Example 3**

![Task counting with list](/assets/images/recipes/task-counting/task-counting-eg3.png)
*Recipe logic with repeated actions*

Actions within a Repeat action are executed multiple times according to the number of items/rows present in the list. Thus, the number of tasks is multiplied by the number of items/rows. In the image above, the 2 steps 'Create Case in Salesforce' and 'Create Case Comment in Salesforce' are the actions to be multiplied by the number of rows in the Google Sheet specified in step 1.  

**Total Tasks per job =** 2 + (2 x no. of rows). If the number of rows in the array is 5 then 12 tasks are counted.

**Example 4**

![Task counting with batch](/assets/images/recipes/task-counting/task-counting-eg4.png)
*Recipe logic with a batch action*

Every batch action is considered a single task even though multiple calls or requests may be sent/received by Workato.  

**Total Tasks per job =** 2

**Example 5**

![Task counting with batch](/assets/images/recipes/task-counting/task-counting-eg5.png)
*Callable recipes*

The recipe step that calls another recipe is not included in the total task count. In the example above, step 2, which calls another recipe, is not included in the task count.

**Total Tasks per job =** 3

## Job errors and reruns

When the job results in an error, all actions that were successfully executed are counted as tasks.

![Task counting on failed job](/assets/images/recipes/task-counting/task-counting-failed.png)
*Recipe failed on step 8*

In the example above, the recipe failed at step 8, 'Create comment for issue in Jira'. All previously executed steps: the trigger (not shown), steps 1, 2, 6 and 7 give a total of 5 tasks.

![Task counting on rerun job](/assets/images/recipes/task-counting/task-counting-rerun.png)
*Recipe is rerun successfully*

After the error is resolved and the job is rerun, all the successfully run actions are counted as tasks. In this case, a total of 7 tasks were run in this job.

## Task information

The number of tasks run in a Workato account can be found in several places.

For information on how many tasks are run per job, click on a job to view the total number of tasks used. Individual breakdowns per recipe line is also available in the `Statistics` tab on every action.

![Task count job](/assets/images/recipes/task-counting/task-counting-ui-job-report.png)
*Task information available on job report page*

The total number of tasks run per recipe is available in the `About` tab.

![Task count recipe](/assets/images/recipes/task-counting/task-counting-ui-about.png)
*Task count by recipe in About tab*

The monthly account usage is available in the [`Subscription` tab](https://www.workato.com/users/current/edit#subscription) in your Account settings.

![Task count account](/assets/images/recipes/task-counting/task-count-account.png)
*Monthly task count against total number of tasks in subscription*
