---
title: Building Best Practices
date: 2017-02-25 18:00:00 Z
---

# Recipe Building Best Practices
This section contains additional tips and highlights of best practices for recipe building, 

## Building your recipe iteratively
When attempting to build a rather complicated recipe, we recommend building it iteratively, or go by phases Here are a few tips:

1. Make sure your trigger works as expected
 Things to check when using a trigger :
  - Should you be using trigger filters?
  - Is the Since parameter correct? 
  - Should it be based on created/updated, or just created?

I start the recipe with nothing but the trigger followed by a clock action. The clock action is just a dummy action. When I test this recipe, it will get a current time. This way, I can check whether the tested output is the desired result that I wish. I am able to do all this without updating records in any of my connected apps.


