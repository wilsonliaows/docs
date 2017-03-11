---
title: Formula Errors 
date: 2017-03-12 12:30:00 Z
---

# Formula Errors
When formula mode functions are used incorrectly, your Workato recipes will not work in the manner according to your intentions. 
This section will showcase the most frequent occurances of formula errors and how to troubleshoot them.

## Types of Formula Errors
There are two types of formula errors - Formula Compilation Error and Formula Runtime Error. 

### Formula Compilation Error
Formula compilation error occurs when you have used formula mode within one of your fields in a recipe, but have most likely mispelled the formula function.
You will identify that this error has occured when trying to to test or start the recipe. Workato prevents you from doing so and instead indicates that there is a formula error, and mentions which line in the recipe the error originates from. 
In the example below, there is no such formula function as <b>.nosuchformula</b>, and the recipe is prevented from being started. 

![Formula Compilation Error](/_uploads/_formula-error/compilation_formula_error.png)

To troubleshoot and resolve the error, simply open the indicated lines, check and correct the formula functions used in the fields which are in formula mode. 
In some cases, you might have accidentally turned on the formula mode field without intention, resulting the formula compilation error.

### Formula Runtime Error
