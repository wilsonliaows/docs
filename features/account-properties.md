---
title: Account properties
date: 2017-02-28 10:00:00 Z
---

# Account properties
Account properties allow you to store account wide recipe configuration parameters. They show up in all recipes as usable values under the *Properties* datatree.

Account-level properties are also known as environment variables or configuration variables which are useful for complex deployment models across connections and recipes.

For example, you can have a property that indicates where to send a notification email. All recipes can look this value up from the data tree (properties section) and send email to the same recipient.

Account properties feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or call us at +1 (844) 469-6752.

You can create property values (name value pairs) by going to the account properties section on their account menu.

![Account properties option](/assets/images/features/account-properties/account_properties_option.png)
*Account properties menu option*

## Create property
In order to use account properties in recipes, create them in the properties table; a property is a name and its corresponding value.

![Create property](/assets/images/features/account-properties/create-property.gif)
*Create property*

## Update property

![Update delete property](/assets/images/features/account-properties/update-delete-property.gif)
*Updating or deleting an account property*

## Using properties in recipes
Account properties show up in all recipes within the Workato account, under the *Properties* table, with the values as defined in the properties table.

When a recipe is active, the value for the property is lookedup in account properties.

![Account properties datatree](/assets/images/features/account-properties/account_properties_datatree.png)
*Using properties in a recipe*
