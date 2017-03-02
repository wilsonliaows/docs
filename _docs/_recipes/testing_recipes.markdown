# Testing recipes

## Why is testing recipes necessary?
Testing recipes is a good practice. Workato is moving data and information from one business app to the other via the workflow described in recipes. Testing these workflows is critical to ensure that the information entered into the apps by Workato is accurate and does not include bad data. 

## Good Practices

### Using Sandbox Instances
If the application used provides sandbox accounts, they are recommended for testing recipes. This is to ensure no bad data is entered into the Production accounts until the recipe is properly configured and tested.

### Adding 'Stops' to prevent unwanted actions from happening
Add a 'Stop' to the recipe when testing if the actions that follow are not needed. For example, if the last step in the recipe updates a record in the application that is not needed, adding a Stop above it will prevent this. This saves time in correcting the data that has changed in the applications.

## Recipe Testing Basics
Recipes built on Workato can vary greatly in complexity. Building and running a 1-line recipe may be simple and straightforward, but as the recipe grows more intricate, understanding how to test and ensure the recipe is built correctly is vital.

### Having a Trigger Event
A trigger event is what Workato is looking out for in the application specified in the trigger. For example, if the trigger is "New invoice in QuickBooks", as shown below, there has to be invoices in the QuickBooks account for the test to work. Trigger events should be created prior to testing the recipe, and not when the 'Test Recipe' button is clicked. 

### Changing the 'From' parameter for testing
Changing the 'From' parameter is critical to testing. If test events have already been created in the application, the 'From' parameter has to be adjusted to allow the recipe to pick up jobs from the correct time. 

Triggers for applications do not have the 'From' parameter. In applications like these, jobs will be picked up from the time the recipe is started.

There are 2 ways the 'From' parameter is presented:


### Test Recipe vs. Start Recipe

The 'Test Recipe' button is the default button when the recipe has not been run. The 'Start Recipe' button can be accessed via the dropdown as shown below:

Test Recipe picks up the first trigger job that it finds and run through it. Once that has been processed, the recipe will stop. Then, check what has been done for this specific record in the 'Jobs' tab. 

### Understanding the Job Report


#### Finding the Error

#### Fixing the Error




## Using the Scheduler as a tool for testing




![QBO connect1](/_uploads/QBO connect1.JPG)


