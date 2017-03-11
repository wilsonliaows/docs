# Infinite Loops

## What are infinite loops and when do they occur? 
Infinite loops occur most commonly when the recipe is performing a **bi-directional** sync (ie. when there is more than 1 application and data moves from Application A to Application B and back to A) 

The example below shows how an infinite loop may occur: 
[image]
The trigger picks up any New or Updated information in Salesforce.

Infinite loops may also occur if you have **multiple recipes** running at once and a similar issue occurs where one recipe is updating another that is triggered by an update in an object.

## How will I know that my recipe is in an infinite loop?

Your recipe may be in an infinite loop if:

  * You notice an **unexpectedly high transaction count** that you cannot account for
  
  * You find that your recipe is triggered when there are **no new trigger events** in your applications
  
  * There are many **duplicates** of a similar object in your application that was created by a recipe

## How to prevent infinite loops

### Trigger Filters

### Conditional Stops

### Best Practices
