---
title: Data pills
date: 2017-03-16 10:00:00 Z
---

# Data pills
Data pills are variables that you use to build recipes, and contain values from previous recipe steps that you can use in your recipe. Data pills are used during design-time (when you're building your recipe, as opposed to when you're running it) to create a template that tells relevant data where to go.

Data pills are usually found within datatrees, within the **App Data** section.

![Datatree](/docs/assets/images/recipes/data-pills/datatree-example.png)

*Datatree within a recipe step*

When you're configuring a recipe step, all data from previous steps will be available for use in the fields mapping of that step.

![Multiple datatrees](/docs/assets/images/recipes/data-pills/multiple-datatrees.png)

*Multiple datatrees available when configuring a recipe step*

## Data pills example
For instance, let's take the scenario where we wish to send out a simple welcome email to every new Salesforce lead who has signed up for our mailing list. The following is that recipe.

![Recipe that sends a welcome email to new Salesforce leads](/docs/assets/images/recipes/data-pills/salesforce-lead-welcome-email-recipe.png)

*Recipe that sends a welcome email to new Salesforce leads* [Example recipe](https://www.workato.com/recipes/496603)

In the **Send email** action, pills from the **New Salesforce lead** datatree have been mapped into the input fields.

![Data pill mapping](/docs/assets/images/recipes/data-pills/data-pills-example.png)

*Example of data pills being mapped into an action step*

As these pills are variables, they will only have a value when a trigger event is picked up by the recipe - in this case, when a new lead is created in Salesforce. For example, if a new lead called Madison Diaz with the email address madisondiaz82@gmail.com is created, the recipe will pick it up and promptly send an email to the address madisondiaz82@gmail.com with the message:

```
Hi Madison,

Thanks for joining our mailing list! We're excited to have you!
```

# Sample schema
When your app is connected to Workato, sample schema pulled from it will show up in the datatree next to the data pills, to provide examples how what this data is in your app.

![Output datatree](/docs/assets/images/workato-concepts/output-datatree.png)

*Output datatree for New Salesforce account trigger*

# Data types
Workato supports various data types:
- String
- Integer
- Number
- Date
- Datetime
- Boolean