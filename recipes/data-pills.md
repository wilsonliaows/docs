---
title: Data pills and types
date: 2017-03-16 10:00:00 Z
---

# Data pills
Data pills are output data from a trigger or an action step. They are variables that you can use in mapping business logic into recipe steps. e.g. to create an Zendesk organization from a Salesforce account you will assign data pills from Salesforce account to the Zendesk organization action input fields.

Data pills are contained within datatrees, within the **App Data** section. At an recipe step, the **App Data** section contains the output from the trigger and every action preceeding this step.

![Datatree](/assets/images/recipes/data-pills/datatree-example.png)
*Datatree within a recipe step*


When you're configuring a recipe step, all data from the preceeding steps will be available for use in the fields mapping of that step.

![Multiple datatrees](/assets/images/recipes/data-pills/multiple-datatrees.png)
*Multiple datatrees available when configuring a recipe step*

# Data types
Data pills can be of the following data types
- String
- Integer
- Number
- Date
- Datetime
- Boolean
When mapping (i.e. assigning data pill to an input field) it is important that they are 'type' compatible. Workato will do default type conversions where it can be done with no ambioguity or loss of information.

# TODO 
We should talk about type conversions

# Preview data
Workato will display sample data (fetched from your account) alongside data pills to help better understand the data in your app. 

In example below, you can see sample data in italics next to the data pills.

![Output datatree](/assets/images/workato-concepts/output-datatree.png)
*Output datatree for New Salesforce account trigger*

# Example
Let's take the scenario where we wish to send out a simple welcome email to every new Salesforce lead who has signed up. The recipe looks like

![Recipe will send a welcome email to each new Salesforce lead](/assets/images/recipes/data-pills/salesforce-lead-welcome-email-recipe.png)

*Recipe that sends a welcome email to new Salesforce leads* [Example recipe](https://www.workato.com/recipes/496603)


In the **Send email** action, pills from the **New Salesforce lead** datatree have been mapped into the input fields.

![Data pill mapping](/assets/images/recipes/data-pills/data-pills-example.png)
*Example of data pills being mapped into an action step*

Since pills are variables, their value will depend on a specific trigger event, or action. In this example, the value assigned to the *To* input field, will depend on the value of *email* in each new lead. If a new lead called Madison Diaz with the email address madisondiaz82@gmail.com is created, the recipe will pick it up and promptly send an email to the address madisondiaz82@gmail.com with the message:

```
Hi Madison,

Thanks for joining our mailing list! We're excited to have you!
```

