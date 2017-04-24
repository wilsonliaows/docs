---
title: Formulas
date: 2017-03-07 05:00:00 Z
---

# Formulas
Users can use formulas to transform data using Workato. Formulas allow users to easily work with data and format data. Formulas in Workato are whitelisted Ruby methods. Not all Ruby methods are supported, but you can always [reach out to us](contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged.

# Formula mode
To start using formulas, you need to be in formula mode. Formula mode needs to be switched on at the field level, and most input fields support formula mode. To toggle from text mode into formula mode, click on the text/formula mode switch button. This also changes the type icon of the input field into the "fx" icon.

![What is formula](/assets/images/formula-docs/what_is_formula_gif.gif)
*When the input field is toggled into formula mode, the string type input field changes icon from String type to "fx" type*

# Using the formula editor
In formula mode, the formula editor provides the set of whitelisted formulas available for data transformation/manipulation, and provides additional help on how to use these formulas.

## Filter formulas displayed by data type
The formula editor should always display the type specific formulas for your data pills. Refer to [this article](/recipes/data-pills-and-mapping.md) for more on the different types of data pills.

When a string type data pill, the pill *Full name* is inserted into an input field in formula mode, the formula editor prompts for a period (.) to be added behind the pill, as per Ruby syntax. Subsequently, the editor shows the list of formulas applicable to strings.

![String formula list](/assets/images/formula-docs/string-formula-list.gif)
*Formula editor showing the list of string formulas*

Similarly, when a date type data pill is inserted into the input field in formula mode, the formula editor prompts for a period (.) to be added behind the pill, subsequently displaying the list of formulas applicable to dates.

![Date formula list](/assets/images/formula-docs/date-formula-list.gif)
*Formula editor showing the list of date formulas*

When there is no data pill within the input field, however, the formula list displayed contains only formulas and operators which are independent of data pills or data pill types.

![Default formula list](/assets/images/formula-docs/default-formula-list.gif)
*Formula editor showing the list of default formulas*

## Formula hints and syntax
When a formula is selected to be used, it will be auto-completed in the input field. An explanation of the formula's function, as well as its syntax, will be provided.

![Formula editor hint](/assets/images/formula-docs/formula-editor-hint.gif)
*When the split formula is selected, it auto-populates into the input field, and detailed formula help is generated*

## Text VS formula mode
In text mode, text and pills can be inserted into the input fields easily, and they will show up as-is. On the other hand, text needs to be explicitly formatted when in formula mode.

Let's take the case whereby we have a recipe that sends an email to new leads in Salesforce. If a new lead called Madison Diaz is created, we wish to send the following email:

```
Hi Madison,

Thanks for joining our mailing list! We're excited to have you!
```

In text mode, the message will be as follows:

![Welcome email in text mode](/assets/images/formula-docs/welcome-email-in-text.png)
*Email in text mode. [Example recipe](https://www.workato.com/recipes/504766)*

![Welcome email in formula mode](/assets/images/formula-docs/welcome-email-in-formula.png)
*Email in formula mode. [Example recipe])(https://www.workato.com/recipes/496603)*

## Conditionals
You can conditionally (if-else) execute formulas using Ruby's ternary syntax. Ternary syntax are of the form:

```
[Condition to evaluate if true or false] ? [Execute if true] : [Execute if false]
```

### Conditional formula example
In the following example, we conditionally pass in either the *Full name* or *First name* into the *Message* input field.

![Ternary syntax](/assets/images/formula-docs/ternary-formula.png)
*Ternary formula that passes in "Full name" as the input when "Full name" is present, and passes in "First name" as the input when "Full name" is not present*

Here is a detailed explanation of what the ternary formula does:

1. "[Full name].present?" will check if the *Full name* pill has a value. If it has a value, it evaluates to true. If it has no value, it evaluates to false.
2. The second ? in the formula separates the condition to evaluate from the commands to execute.
3. If there is a value in the *Full name* pill when the job is ran, the value for *Full name* will be used as the *Message*.
4. If there is no value in the *Full name* pill when the job is ran, the value for *First name* will be used as the *Message*. Of course, if there's also no value in this *First name* pill, the job will fail at this step, as *Message* is a required field.

For more information on Ruby's ternary syntax, check out this [article](http://www.w3resource.com/ruby/ruby-ternary-operator.php).
