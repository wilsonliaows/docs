---
title: Workato Formula Mode
date: 2017-03-07 05:00:00 Z
---

# Formulas
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

## Ruby Ternary Syntax in Formula Mode

## Glossary of formulas
You will find that there are formulas that can be used on data pills of different data type - String, Dates, Numbers, Others. 
That will be the manner which we shall group and elaborate on the list of available formulas. Do note that the glossary list below is in constant update as we frequently add more formulas to accomodate the needs of our users. 


### String Formulas
Workato formula mode supports many String functions. These are very useful for advanced users, especially when used in conjunction with each other.
In the examples below, we will look at some of the methods that can be used to manipulate a string of text, which in this case the input string is 'Jean Marie'.


| Formula | Description | Example | Sample Output |
| ------------- | ------------- | ------------- | ------------- |
| blank? | This function checks the input string and returns true if it does not contain any value. |'Jean Marie'.blank? | false | 
| include? | This function checks the input string and returns true if it contains the stated keyword. | 'Jean Marie'.include?('Jean') | true |
|exclude?| This function acts in an opposite manner from include?. It will return true only if the input string does NOT contain the stated keyword. | 'Jean Marie'.exclude?('Jean') | false |
| match? | This function checks the input string for a particular pattern. It returns true if the pattern is present. | It can be used to check if whether there is any white space within the input string.| 'Jean Marie'.match?(/\s/) | true |
| match? | match? can also be used in a manner similar to include? . This is to check for a stated keyword. | 'Jean Marie'.match?('ie') | true |
| ends_with? | This function checks the input string on whether it finishes with the stated keyword. |'Jean Marie'.ends_with?('ie') | true |
| starts_with? |This function checks the input string on whether it begins with the stated keyword. | 'Jean Marie'.starts_with?('ie') | false |
| capitalize | This function converts the input string into sentence case, i.e. the first character of each sentence is capitalized. | 'jean MARIE'.capitalize | "Jean marie" |
| titleize | This function converts the input string into title case, i.e. the first character of each word is capitalized. | 'jean MARIE'.titleize | "Jean Marie" |
| upcase | This function converts all characters from the input string into upper-case. | 'Jean Marie'.upcase | "JEAN MARIE" |
| downcase | This function converts all characters from the input string into lower-case. | 'Jean Marie'.downcase | "jean marie" |
| lstrip | This function (left strip) removes the white space at the beginning of the input string. | 'Jean Marie'.lstrip | "Jean Marie" | 
| rstrip | This function (right strip) removes the white space at the end of the input string. | 'Jean Marie'.rstrip | " Jean Marie" |
| strip | This function removes the white space at the beginning and the end of the input string. | 'Jean Marie'.strip | "Jean Marie" |
| strip | strip is also equivalent to using both right and left strip on an input string. | 'Jean Marie'.rstrip.lstrip | "Jean Marie" |
| length | This function returns the number of characters within an input string, including the white-spaces. | 'Jean Marie'.length | 11 |
| reverse | This function inverts a string, reordering the characters in a backward manner. | 'Jean Marie'.reverse | "eiraM naeJ" |
| gsub | This function replaces all occurrence of the first input value, with the second input value, within the string. | 'Jean Marie'.gsub('J', 'M') | "Mean Marie" |

### Date Formulas
Dates are quite common elements in data structures. Sometimes the date may not be in the right format, for example it may be sent as a string. Here are some common operators or functions to manipulate dates

| Formula | Description | Example | Sample Output |
| ------------- | ------------- | ------------- | ------------- |
| now | puts todays date and current time | - | - |
| today | puts todays date | - | - | 
| to_date | Converts a string to date | '2015/04/20'.to_date | Mon, 20 Apr 2015 |
| to_date(format:'MM/DD/YYYY') | Converts a formatted string to date in the stated format | '04/20/2015'.to_date(format: 'MM/DD/YYYY') | 04/20/2015 |
| present? | Check to see if a date is present | '2015/04/20'.to_date.present? | true | 
| blank? | Check to see if date field is blank | '2015/04/20'.to_date.blank? | false | 

#### Date Arithmetics
We can also make use of certain keywords such as <b> days, months and years </b> to perform date arithmetics to manipulate dates. The table below shows some exmaples of manipulating dates. 

| Date Arithmetic | Output |
| ------------- | ------------- |
| '2015/04/20'.to_date + 2.days | Wed, 22 Apr 2015 |
| '2015/04/20'.to_date - 2.days | Sat, 18 Apr 2015 |
| '2015/04/20'.to_date + 2.weeks | Mon, 04 May 2015 |
| '2015/04/20'.to_date - 2.weeks | Mon, 06 Apr 2015 |
| '2015/04/20'.to_date + 2.months | Sat, 20 Jun 2015 |
| '2015/04/20'.to_date - 2.months | Fri, 20 Feb 2015 |
| '2015/04/20'.to_date + 2.years | Thu, 20 Apr 2017 |
| '2015/04/20'.to_date - 2.years | Sat, 20 Apr 2013 |

Note: You may also do the same for minutes and seconds. 

#### Getting First/Last days of the month

### Number Formulas

### OThers
