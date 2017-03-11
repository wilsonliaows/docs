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

#### Identifying the Error  
You will identify that formula compilation error has occured when trying to to test or start the recipe. Workato prevents you from doing so and instead indicates that there is a formula error, and mentions which line in the recipe the error originates from. 
In the example below, there is no such formula function as <b>.nosuchformula</b>, and the recipe is prevented from being started. 

![Formula Compilation Error](/_uploads/formula-errors/compilation_formula_error.png)

#### Troubleshooting the Error
To troubleshoot and resolve the error, simply open the indicated lines, check and correct the formula functions used in the fields which are in formula mode. 
In some cases, you might have accidentally turned on the formula mode field without intention, also resulting in the formula compilation error.

### Formula Runtime Error
Formula runtime error is slightly trickier to troubleshoot. In these cases, the formula functions in the field are spelt correctly, but have most likely been used in an incorrect manner. 

#### Identifying the Error  
Formula runtime errors are not as straightforward to identify as compilation errors. Instead, they are discovered to be present when a recipe error is encountered and when looking through the job report. 

![Formula Runtime Error](/_uploads/formula-errors/formula_error_gif_1.gif)
Taking a look at the GIF above, the identified error is:

Exception: Error calculating input for field 'title': Formula received a nil value: undefined method '+' for nil:NilClass

What this implies is that in one of the step's field, there lies a formula mode value that has caused the recipe to fail. Most of the time this happens when you tried to have normal strings and selective data pills (This OR that) together.


#### Troubleshooting the Error
