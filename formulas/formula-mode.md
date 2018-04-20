---
title: Formula mode
date: 2018-02-13 00:00:00 Z
---

# Formula mode
To start using formulas, you need to be in formula mode. Formula mode needs to be switched on at the field level, and most input fields support formula mode. To toggle from text mode into formula mode, click on the text/formula mode switch button. This also changes the type icon of the input field into the **fx** icon.

![What is formula](/assets/images/formula-docs/what_is_formula_gif.gif)
*When the input field is toggled into formula mode, the string type input field changes icon from String type to **fx** type*

# Using the formula editor
In formula mode, the formula editor provides a set of whitelisted formulas available for data transformation/manipulation, and provides additional help on how to use these formulas.

## Filter formulas displayed by data type
The formula editor should always display the type specific formulas for your datapills. Refer to [this article](/recipes/data-pills-and-mapping.md) for more on the different types of datapills.

When a string type datapill, the pill <kbd>Full name</kbd>, is dropped into an input field in formula mode, the formula editor prompts for a period `.` to be added behind the pill, as per Ruby syntax. Subsequently, the editor shows the list of formulas applicable to strings.

![String formula list](/assets/images/formula-docs/string-formula-list.gif)
*Formula editor showing the list of string formulas*

Similarly, when a date type datapill is dropped into the input field in formula mode, the formula editor prompts for a period `.` to be added behind the pill, subsequently displaying the list of formulas applicable to dates.

![Date formula list](/assets/images/formula-docs/date-formula-list.gif)
*Formula editor showing the list of date formulas*

When there is no datapill within the input field, the formula list will only display formulas and operators which are independent of datapills or datapill types.

![Default formula list](/assets/images/formula-docs/default-formula-list.gif)
*Formula editor showing the list of default formulas*

## Formula hints and syntax
When a formula is selected to be used, it will be auto-completed in the input field. An explanation of the formula's function, as well as its syntax, will be provided.

![Formula editor hint](/assets/images/formula-docs/formula-editor-hint.gif)
*When the split formula is selected, it auto-populates into the input field, and detailed formula help is displayed*

## Text VS formula mode
In text mode, text and pills can be mapped into the input fields easily, and they will result in a text that looks exactly like what is formed. On the other hand, text needs to be explicitly formatted in formula mode.

Let's use an example of a recipe that sends an email to new leads in Salesforce. If a new lead called Madison Diaz is created, we wish to send the following email:

```
Hi Madison,

Thanks for joining our mailing list! We're excited to have you!
```

In text mode, the **Message** can simply be formed like this:

![Welcome email in text mode](/assets/images/formula-docs/welcome-email-in-text.png)
*Email in text mode. [Example recipe](https://www.workato.com/recipes/504766)*

In formula mode, text must have proper string syntax:

![Welcome email in formula mode](/assets/images/formula-docs/welcome-email-in-formula.png)
*Email in formula mode. [Example recipe](https://www.workato.com/recipes/496603)*

## Conditionals
You can conditionally execute formulas using Ruby's ternary syntax (popular shortcut for if-else statements). Ternary syntax are of the form:

```
condition ? expression1 : expression2
```

### Behaviour
#### `condition`
A boolean expression that evaluates to `true` or `false`.

#### `expression1`
Returns this expression if `condition` is `true`.

#### `expression2`
Returns this expression if `condition` is `false`.

### Conditional formula example
In the following example, we conditionally pass in either the <kbd>Full name</kbd> or <kbd>First name</kbd> into the <kbd>Message</kbd> input field.

![Ternary syntax](/assets/images/formula-docs/ternary-formula.png)
*Ternary formula that passes in <kbd>Full name</kbd> as the input when <kbd>Full name</kbd> is present, and passes in <kbd>First name</kbd> as the input when <kbd>Full name</kbd> is not present*

Here is a detailed explanation of what the ternary formula does:

1. "<kbd>Full name</kbd>.present?" will check if the <kbd>Full name</kbd> pill has a value . If it has a value, it evaluates to `true`. If it has no value, it evaluates to `false`.
2. The second ? in the formula separates the condition to evaluate from the expressions to return.
3. If there is a value in the <kbd>Full name</kbd> pill when the job is ran, the value for <kbd>Full name</kbd> will mapped to the **Message** input.
4. If there is no value in the <kbd>Full name</kbd> pill when the job is ran, the value for <kbd>First name</kbd> will be mapped to the **Message** input. Of course, if there's also no value in this <kbd>First name</kbd> pill, the job will fail at this step, as **Message** is a required input field.

For more information on Ruby's ternary syntax, check out this [article](http://www.w3resource.com/ruby/ruby-ternary-operator.php).
