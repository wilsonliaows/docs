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
