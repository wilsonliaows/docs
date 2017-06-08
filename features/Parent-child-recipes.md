---
title: Parent Child Recipe Relationships
date: 2017-06-08 16:00:00 Z
---

# Parent Child Recipes
The Parent Child Recipe Relationship is essentially a link between the parent recipe (original) and the child recipe (copies or installed recipe). If the parent recipe has been altered or modified, Workato will automatically send a prompt to the child recipe which will in turn provide users with the option to update the child recipe with the latest version

# Benefits of Parent Child Recipes
The primary benefit that arises as a direct result of this new feature is the introduction of the software development life cycle. This cycle easily allows user to modify, update, and test out new changes in the original parent recipie. This thus facilitates the process of creating, testing, and sending the recipe to their production apps. 

#How to use Parent Child Recipes

Let’s take into consideration this original recipe which allows the user to update their Zendesk organization when a Salesforce account is created or updated. 

![Parent Recipe](/assets/images/features/Parent-child-recipes/original_parent_copy.png)
*The original copy (parent Copy)*

With the use of the copy button located below the app logos, you can copy the original to make your child recipe, or you can install the recipe from another user.

![Child Recipe](/assets/images/features/Parent-child-recipes/copy_recipe.png)
*Copy the original recipe or install a copy from another user*

Your child recipe should look as follows. You can note that the child recipe will have the words “Copy of” before the title of the parent recipe.

![Copied or installed recipe](/assets/images/features/Parent-child-recipes/copies_parent_recipe.png)
*Child Recipe*

Let’s say for example, that you included a stop step after step 5 (Create organization in Zendesk)

![Modification](/assets/images/features/Parent-child-recipes/new_step_parent_recipe.png)
*Modification of parent recipe*

If we now check the child recipe, a notification is shown at the top of the screen that indicates that a new version is now available which copies the changes made in the parent recipe.

![Modification Alert](/assets/images/features/Parent-child-recipes/new_version_alert.png)
*Notification for new version of the recipe*

If you click on the notification that indicates a new version is available, you will be directed to a warning that checks if you want to install the new version. 

![Warning notification](/assets/images/features/Parent-child-recipes/modification_verification.png)
*The original copy (Parent Copy)*

Once you verify that you want to install the new version, your child recipe will resemble your modified parent recipe.

![New Child Recipe](/assets/images/features/Parent-child-recipes/new_modified_child_recipe.png)
*New Child Recipe*













