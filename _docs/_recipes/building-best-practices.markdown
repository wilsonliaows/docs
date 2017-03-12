---
title: Building Best Practices
date: 2017-02-25 18:00:00 Z
---

# Recipe Building Best Practices
This section contains additional tips and highlights of best practices for recipe building, 

## Building your recipe iteratively
When attempting to build a rather complicated recipe, we recommend building it iteratively, or go by phases Here are a few tips:

### 1. Make sure your trigger works as expected
 Things to check when using a trigger :
  - Should you be using trigger filters?
  - Is the Since parameter correct? 
  - Should it be based on created/updated, or just created?

 I start the recipe with nothing but the trigger followed by a clock action. The clock action is just a dummy action. When I test this recipe, it will get a current time. This way, I can check whether the tested output is the desired result that I wish. I am able to do all this without updating records in any of my connected apps.
 
 ![iterative_tip_1](/_uploads/building-best-practices/iterative_tip_1.png)

### 2. Check your conditional actions
 You can now add a few more steps to make sure which condition would be the best choice, I use clock, email, or Slack in place of the real actions to capture the data mappings that will eventually be there..The reason for adding these notification steps here is that conditional steps do not show up in the log, hence we need to add different actions for different conditions to know if the conditions are correct.
 
 ![iterative_tip_2](/_uploads/building-best-practices/iterative_tip_2.png)
 Best if you have both sides to know which is the better course to take.
 
### 3. Pay Attention to indentation
 Make sure that your actions are all nested correctly. For Conditional actions and repeated actions, actions that you want to be processed under those criteria have to be nested under the first action. If an action is supposed to be activated under a certain condition, make sure that it is nested under the same scope. If it isn't, it will be processed regardless of the condition.
 
  ![iterative_tip_3](/_uploads/building-best-practices/iterative_tip_3.png)
 This is wrong because Step 2 is not indented. Note how Step 4 is on a different level from the rest. Step 4 is indented under Step 3.
 
### 4. Cloning and Version Control
  I use cloning and modifying to create the next version of the recipe. Cloning recipe allows me to push changes to the original recipe whenever I want to. This allows you to create a "test" and "production" recipes. The cloned recipe will be a production recipe, and you can make changes on the original/test recipe. 
  
    ![iterative_tip_4_1](/_uploads/building-best-practices/iterative_tip_4_1.png)
    
    When you edit the original recipe, the cloned recipe will show that changes are available to be pushed.
    
    ![iterative_tip_4_2](/_uploads/building-best-practices/iterative_tip_4_2.png)
    
    Simply click on install to copy the changes from test recipe to production recipe

 Once you are satisfied with the changes, going to the cloned recipe, you should be able to see a note that a new version is available. This allows you to push any changes made on the test recipe to the production recipe. 
 
 
#### Version Control Guide
If you have made any unwanted changes to your recipe and want to revert back to a previous version, just follow this guide!

First, got to the recipe page and look under the Description tab. Under the tab, you should see the current version of the recipe, with the View History link next to it.  
 ![version_control_1](/_uploads/building-best-practices/version_control_1.png)
 
 Click on the View History page, and you should see something like this
  ![version_control_2](/_uploads/building-best-practices/version_control_2.png)
  
 Click on a version that you would like to revert to or just take a look at, and you see a page with the details of that version of the recipe.
   ![version_control_3](/_uploads/building-best-practices/version_control_3.png)
   
 Once you are satisfied that this is the version that you want to revert to, click on the ![restore_version](/_uploads/building-best-practices/restore_button.png)button and voila! You have reverted your recipe to a previous version!
 
 
 
