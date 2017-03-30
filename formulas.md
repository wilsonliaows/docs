---
title: Formulas
date: 2017-03-07 05:00:00 Z
---

# Formulas
Users can use formulas to transform data using Workato. Formulas allow users to easily work with data and format data. Formulas in Workato are whitelisted Ruby methods. Not all Ruby methods are supported, but you can always [reach out to us](contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged.

# Formula mode
To start using formulas, you need to be in formula mode. Formula mode needs to be switched on at the field level, and most input fields support formula mode. To toggle from text mode into formula mode, click on the text/formula mode switch button. This also changes the type icon of the input field into the "fx" icon.

![what_is_formula](/assets/images/formula-docs/what_is_formula_gif.gif)

*When the input field is toggled into formula mode, the string type input field changes icon from String type to "fx" type*

The formula mode provides a set of standard formulas for data transformation/manipulation.



## Text vs Formula mode

The default mode for any action/trigger input field is text. In text mode you can assign plain text or map any field from the data tree. In text mode you can add more than one field too, for example you can put first name, and last name next to each other.

![text_mode](/assets/images/formula-docs/text_mode.png)

Formula mode on the other hand, allows you to transform the data from each data tree field (pill) into a specific format by using formulas. 

In the example below, we have an action that sends a message to a customer's email to notify them to check their SMS inbox, but only shows the last 4 digits of their phone number by using the ".slice" formula. 
 
![formula_mode](/assets/images/formula-docs/formula_mode.png)

## Formula list
You can bring up a simple list of commonly used formula methods by appending a period to the end of your data. The available formulas will show up as a picklist. This list is based on the type (e.g. data, number, etc) of the data pill.

![formula_list](/assets/images/formula-docs/formula_list.png)

## Conditionals
You can conditionally (if-else) execute formulas using Ruby's ternary syntax. 

In the example below the invoice date is conditionally mapped from a field called 'Date'. 

![mapping_type_4](/assets/images/formula-docs/ternary-formula.png)

<u>What is it doing?</u>

1. "Date.blank?" is checking to see if the Date field is empty.
2. The ? represents the result of the check. If it is true, or false
3. The next step 'Job created at' : 'Date' specifies what to do if the result was true or false. 
    For example if it is blank, use 'Job created at' for the value, and if it is not blank use 'Date'
Note: If the data in the pill used after ? is also blank (in the above example [Job created at]), you will get an error as well. 

For more information on Ruby's ternary syntax, click [here](http://www.w3resource.com/ruby/ruby-ternary-operator.php).

## Glossary of formulas
You will find that there are formulas that can be used on data pills of different data type - String, Dates, Numbers, Others. 
That will be the manner which we shall group and elaborate on the list of available formulas. Do note that the glossary list below is in constant update as we frequently add more formulas to accomodate the needs of our users. 