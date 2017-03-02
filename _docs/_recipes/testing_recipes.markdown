# Testing recipes

## Why is testing recipes necessary?
Testing recipes is a good practice. Workato is moving data and information from one business app to the other via the workflow described in recipes. Testing these workflows is critical to ensure that the information entered into the apps by Workato is accurate and does not include bad data. 

## Good Practices

### Using Sandbox Instances
If the application used provides sandbox accounts, they are recommended for testing recipes. This is to ensure no bad data is entered into the Production accounts until the recipe is properly configured and tested.

## Recipe Testing Basics
Recipes built on Workato can vary greatly in complexity. Building and running a 1-line recipe may be simple and straightforward, but as the recipe grows more intricate, understanding how to test and ensure the recipe is built correctly is vital.



### Having a Trigger Event
A trigger event is what Workato is looking out for in the application specified in the trigger. For example, if the trigger is "New invoice in QuickBooks", as shown below, there has to be invoices in the QuickBooks account for the test to work. This is 

### Changing the 'From' parameter for testing
Changing the 'From' parameter is critical to testing. If test events have already been created in the application, the 'From' parameter has to be adjusted to 

### Test Recipe vs. Start Recipe



### Understanding the Job Report


#### Finding the Error

#### Fixing the Error




## Using the Scheduler as a tool for testing




![QBO connect1](/_uploads/QBO connect1.JPG)


