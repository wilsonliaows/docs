---
title: Workato action steps
date: 2017-03-07 05:00:00 Z
---

# Formula
Formula mode is a toggled mode for almost any input field in Workato, allowing you to make use of special formulas to transform and manpiulate data according to your exact needs.
When you are defining the input for a field, you can be in Text mode or Formula mode, indicated by the box at the right of the field. 
You can toggle between the two modes by hovering your cursor over the top right hand corner of a field and simply clicking on the button.

![what_is_formula](/_uploads/formula-docs/what_is_formula_gif.gif)

## Text Mode VS Formula Mode

The default is text mode. In text mode you can assign plain text or map any field from the input data you have available to you, and it will appear as the input. In text mode you can add more than one field too, for example you can put first name, and last name next to each other.

![text_mode](/_uploads/formula-docs/text_mode.png)

Formula Mode on the other hand, allows you to manipulate the data from each field (pill) into a desired format. When you toggle to formula mode, you see a slightly different view of the input field, with some of your text being colored. You will also see the smbol "fx" on the left, to indicate that you are in formula mode. Formula mode allows you to manipulate data within data pills, depending on the command that you have put in. In the example below, we have a command that sends a message to a customer's email to notify them to check their SMS inbox, but only shows the last 4 digits of their phone number by using the ".slice" command. Simply put, we have used a formula mode command to extract the last 4 digits of the data from the pill "Phone" 
 
![formula_mode](/_uploads/formula-docs/formula_mode.png)

## Dynamic list of formulas
Formula mode accepts operators and methods to transform the data in the input field. You can bring up a simple list of commonly used formula methods by appending a period to the end of your data. The choices will dynamically show up below, and is dependent on the type of the data - number, text, date etc. It also contains a description of what the formula does, with example input and output with regards to the highlighted formula. 

![formula_list](/_uploads/formula-docs/formula_list.png)




