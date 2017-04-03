---
title: Account properties
date: 2017-02-28 10:00:00 Z
---

# Account properties
Properties allow you to store account wide recipe configuration parameters. They show up in all recipes as usable values under the *Properties* datatree.

Account-level properties are also known as environment variables or configuration variables.  Acccount properties are useful for complex deployment models across connections and recipes.

For e.g. you can have a property that indicates where to send a notification email. All recipes can look this value up from the data tree (properties section) and send email to the same recipient. 

Account properties feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or call us at +1 (844) 469-6752.

You can create property values (name value pairs) by going to the account properties section on their account menu.

![Account properties option](/assets/images/features/account-properties/account_properties_option.png)
*Account properties menu option*

## Create property
In order to use account properties in recipes, create them in the properties table. A property is a name and its corresponding value.

[![https://gyazo.com/23296ffd5cf798f63381e88d8ed7be32](https://i.gyazo.com/23296ffd5cf798f63381e88d8ed7be32.gif)](https://gyazo.com/23296ffd5cf798f63381e88d8ed7be32)
*Create property*

## Update property
[![https://gyazo.com/281ea4129927d446ff6710b388f435c9](https://i.gyazo.com/281ea4129927d446ff6710b388f435c9.gif)](https://gyazo.com/281ea4129927d446ff6710b388f435c9)
*Updating or deleting an account property*

## Using properties in recipes
Account properties show up in all recipes within the Workato account, under the *Properties* table, with the values as defined in the properties table.

When a recipe is active, the value for the property is lookedup in account properties.

![Account properties datatree](/assets/images/features/account-properties/account_properties_datatree.png)
*Using properties in a recipe*
