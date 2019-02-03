---
title: Callable recipes
date: 2017-04-05 14:00:00 Z
---

# Callable recipes
Callable recipes are a type of recipe that can be called from another recipe. It's a way to decompose your recipes into smaller recipes, to help simplify as well as enable reuse (i.e. callable recipe can be called from multiple recipes)

Unlike other recipes that are started by a trigger event, callable recipe steps are executed when the recipe is called from another recipe.

Callable recipes can also be accessed via REST API.

Advantages of using callable recipes
- Easier to test
By using a single block/loop in a separate recipe instead of repeating the single block/loop multiple times within a recipe, you just have to change the code in one place and test it instead of multiple places in the recipe.

- Making recipes more readable
Instead of having really long recipes, break it out into smaller recipes that can be called

- Sharing across recipes
If you have a standard error notification policy, you can create a recipe and then have all recipes call this recipe for error notification

- Sharing across accounts and with business partners
You can expose REST APIs to your business partners. e.g. a REST API that provides inventory status to your suppliers.

## Using callable recipes

Let’s take a look at an example to see how this works. Say you want to automate the process of creating an invoice in Quickbooks Online (QBO) when an opportunity is closed-won in Salesforce. The recipe logic would be
Create a new customer if customer does not exist

In order to create a QBO invoice, you’ll need to create a new customer if the customer does not already exist in QBO. Now, this snippet of logic: “creating a customer in QBO when they don’t already exist,” is a process that is necessary not only with your Salesforce to QBO integrations, but also when you have Point Of Sale (POS) transactions flowing into QBO, invoices you receive from your vendors and more. Instead of recreating the logic for “creating a customer in QBO when they don’t already exist,” you can make this snippet of logic into a Callable Recipe.

**Step 1. Create a new recipe**

Create a recipe as you normally would, and for the trigger, select **Callable Recipe** under the application picklist.

![CallableRecipeTrigger0](/assets/images/features/Callable Recipes/Callable Recipe Trigger 0.png)
*Select callable recipe connector and call recipe action*

Fill in a Name for the recipe, and fill up the Input Schema and the Response Schema in the JSON Format. You can find out more about JSON [here](https://support.workato.com/support/solutions/articles/1000234879-schema-definition).
![CallableRecipeTrigger1](/assets/images/features/Callable Recipes/Callable Recipe Trigger 1.png)
In **simple terms**, the input schema determines what fields will be shown and n
eed to be filled in when a callable recipe action is created in the calling recipe. The Response schema determines what pills will be available for use in the calling recipes Output data.

Next, create your set of actions for the recipe. For this example you would create a set of standard de-duplication steps, run a search, and if the search gives no results, create a customer. If an existing customer is found, update customer.

**Step 2: Call recipe**

Create a recipe that requires the logic from the callable recipe we created earlier. Set up the trigger as required, and when created the actions you need. When you need to call the callable recipe, simply click on Add a new step, select **call recipe**, choose the recipe you created earlier, and you will see the fields from your **input schema** appear. Simply drag and drop the required pills and you'll be good to go!

![CallableRecipeTrigger0](/assets/images/features/Callable Recipes/Call Recipe Action.png)

## Calling Recipes using a REST API

The [API Management](/api-management.md) features in Workato allow the owner of a callable recipe to permit calling that recipe from other accounts using a REST interface. See [Calling APIs](/api-mgmt/calling-apis.md) for how to make such calls as a client.

