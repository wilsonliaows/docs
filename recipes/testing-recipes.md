---
title: Testing recipes
date: 2017-02-18 22:15:00 Z
---

# Testing recipes
Testing recipes is a good practice, especially if you are automating complex workflows. Workflows involve moving data between apps, and errors can have serious side effects. Testing recipes ahead of broad usage can save a lot of time in the long run.

## Test mode
The 'Test Recipe' button will start the recipe, process **only the first trigger event** and then stop. So even if there are a lot of trigger events, in the test mode, you can process one at a time. 

## Set up trigger event
When in test mode, you will have to make sure that there is a trigger event available for processing. For example, if the trigger is "New invoice in QuickBooks", as shown below, there has to an new invoice ready for the tigger to pick up. 

![Triggerevent](/assets/images/testing-recipes/Triggerevent.JPG)

Trigger events should be created prior to testing the recipe, and not when the 'Test recipe' button is clicked. 

## Change the 'From' parameter for testing
You may have to change the'From' parameter in your trigger to ensure that test events that have already been created, can be picked up in the test mode.

![fromdate](/assets/images/testing-recipes/fromdate.JPG)

For triggers that do not have the 'From' parameter, only tigger events created after the recipe start will be picked up.

**Note:** The 'From' parameter cannot be changed once the recipe has been tested or started. To change the 'From' parameter, simply copy the recipe and modify it in the new copy.

![copyrecipe](/assets/images/testing-recipes/copyrecipe.png)

## Test results
After clicking on 'Test recipe', check the 'Jobs' tab to see what has run. Any errors that have occurred during the tests will show up in the job report with a red warning logo. 

![Teststart](/assets/images/testing-recipes/Teststart.JPG)

If there is no red logo, the job is successful. During the testing phase, click on the description to see if the job has completed as expected because the job may have stopped at a conditional stop action as shown below. There might be other steps that were expected to complete. If so, there may be an error in the logic of the recipe that needs fixing.

## Finding the error
The step where the error occurred is highlighted with a red line. Click on the step with the error to see details.

![errorinline](/assets/images/testing-recipes/errorinline.png)

In this case, the error occurs in step 12. Click on the 'Error' tab to see the details.

![errorinline2](/assets/images/testing-recipes/errorinline2.png) 

## Rerun error jobs
Re-running jobs are the easiest way to test the recipe after fixing the errors. Check the box next to the job to be rerun and click on the rerun button.
![rerunfailed](/assets/images/testing-recipes/rerunfailed.JPG)

# Testing tips

## Use sandbox 
If the connector supports sandbox accounts, they are recommended for testing recipes. This is to ensure no bad data is entered into the production accounts.

## Adding 'Stops' to prevent unwanted actions from happening
Add a 'Stop' to the recipe when testing if the actions that follow are not needed. Click the '+' button below the last step in the recipe and drag it to the correct place.
![stop recipe](/assets/images/testing-recipes/Stoprecipe.JPG)

For example, if the last step in the recipe updates a record in the application that is not needed, adding a Stop above it will prevent this. This saves time in correcting the data that has changed in the applications.

### Test with all possible scenarios
Recipes often come with multiple lines of conditional logic (i.e. IF this then that). 

In these situations, test the recipe with all possible scenarios to ensure the pills are properly mapped and logic properly defined in the recipe. Doing these tests will save time fixing erroneous data after starting your recipe.
