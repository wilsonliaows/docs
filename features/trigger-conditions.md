# Trigger conditions
You can set conditions for your triggers to define what subset of trigger events should be processed by the recipe, e.g. only new Salesforce accounts with the type "Customer", or only Salesforce leads with the rating "Hot". 

![Example Trigger IF recipe](/assets/images/features/trigger-conditions/example-trigger-if-recipe.png)
*The Salesforce trigger has the trigger condition set to only process new/updated cases with the status of "Closed”*

## Conditions
Each trigger condition consists of 3 parts - trigger data, condition and value. Conventionally, the trigger data (left-hand-side) is the variable data from your app, e.g. case status, or lead rating. Accordingly, the value (right-hand-side) is the static value you wish to check against, e.g. "Closed" or "Hot", correspondingly. Trigger data and values are case sensitive.

In this article, we go through the 14 conditions you can choose from. Additionally, you can combine multiple conditions with the *AND* or *OR* operators to set up complex trigger conditions.

Each condition will be valid for different data types. If a condition is attempted to be used for invalid data types, it might:
- prevent the recipe from starting successfully,
- throw a trigger error after the recipe has started, resulting in the inability to pick up trigger events, or
- result in the recipe filtering out all trigger events.

---

## contains
This condition checks if the trigger data contains the value. This condition is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

![Example contains recipe](/assets/images/features/trigger-conditions/example-contains-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with a subject that contains the word "bug"*

This condition can be used for any characters numbers, words, letters, and symbols. That said, if the field you search for is left blank in the application you are using, the **Contains** condition will not be met, and no event will be picked up.

### Valid types
This condition is only valid for array and string data types.

### Examples
| Input                  | Condition      | Output |
|------------------------|----------------|--------|
| "UI bug"               | Contains "bug" | True   |
| ""                     | Contains "bug" | False  |
| "Instructions unclear" | Contains "bug" | False  |

---

## starts with
The **Starts with** trigger condition searches for values in the specified field beginning with a certain word, number, letter, or symbol. For example, if you wanted to trigger your recipe only when users from Cupertino are created, you would set the trigger condition whereby the **Phone** field starts with “(408)” or “(669)”.

![Example starts with recipe](/assets/images/features/trigger-conditions/example-starts-with-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk users with phone numbers beginning with the string “(408)” or “(669)”*

The **Starts with** condition searches only for exact matches, and null values will not be picked up.

### Valid types
This condition is only valid for string data types.

### Examples
| Input            | Condition                      | Output |
|------------------|--------------------------------|--------|
| "(408) 555-6928" | Starts with "(408)" or "(669)" | True   |
| ""               | Starts with "(408)" or "(669)" | False  |
| "(650) 555-2395" | Starts with "(408)" or "(669)" | False  |

---

## ends with
The **Ends with** trigger condition makes your recipe run only when it finds an activity where your specified field has a value ending with whatever you enter in the **Value** field. If, for instance, you wanted to activate a recipe only when emails are received in Microsoft Outlook from contacts associated with Workato, you could create a recipe that triggers if the email of the sender ends with “@workato.com”.

![Example ends with recipe](/assets/images/features/trigger-conditions/example-ends-with-recipe.png)
*The trigger condition tells the recipe to only process new emails if the sender's email address ends with the string “@workato.com”*

This trigger condition works with numbers, letters, and symbols. If the field you specify in your condition is left blank in the application you’re using, no event will be picked up. 

### Valid types
This condition is only valid for string data types.

### Examples
| Input                     | Condition                | Output |
|---------------------------|--------------------------|--------|
| "barry.allen@workato.com" | Ends with "@workato.com" | True   |
| ""                        | Ends with "@workato.com" | False  |
| "customer@example.com"    | Ends with "@workato.com" | False  |

---

## doesn’t contain
Recipes with the **Doesn’t contain** trigger condition will only run when the value in the field you specify excludes whatever you put in the **Value** field. You could use this if you wanted to run your recipe only when Shopify products without the word “Shirt” in their names are created, so you would set a trigger condition where **Title** doesn’t contain “Shirt”.

![Example doesn't contain recipe](/assets/images/features/trigger-conditions/example-doesnt-contain-recipe.png)
*The trigger condition tells the recipe to only process new Shopify products if the product's title doesn’t contain the string “Shirt”*

If the field you specify is left blank in the application you are using, the **Doesn’t contain** condition will not count it, and no event will be picked up. This can be circumvented by using the **Is true** or **Is not true** conditions with a string formula, as shown in the **Is true** section below, or by pairing it with the **Is present** condition.

### Valid types
This condition is only valid for array and string data types.

### Examples
| Input             | Condition               | Output |
|-------------------|-------------------------|--------|
| "Striped Sweater" | Doesn't contain "Shirt" | True   |
| ""                | Doesn't contain "Shirt" | False  |
| "Blue Shirt"      | Doesn't contain "Shirt" | False  |

---

## doesn’t start with
Similar to the **Doesn’t contain** trigger condition, the **Doesn’t start with** trigger condition behaves opposite to its counterpart, **Starts with**. This condition will pick up events where your specified field contains a value that does not begin with whatever you put in the **Value** field. For example, if you want your recipe to only pick up Quick Base **Opportunities** that don’t start with the letter “B,” you would set it to trigger if **Opportunity** doesn’t start with “B”.

![Example doesn't start with recipe](/assets/images/features/trigger-conditions/example-doesnt-start-with-recipe.png)
*The trigger condition tells the recipe to only process new/updated Quick Base opportunity records if the Opportunity field doesn’t start with the string “B”*

If the field you specify is left blank in the application you are using, the **Doesn’t start with** condition will not count it, and no event will be picked up. As with the **Doesn’t contain** trigger condition, this can be circumvented by using a string formula with the **Is true** formula as shown in the **Is true** section below, or by pairing it with the **Is present** condition.

### Valid types
This condition is only valid for string data types.

### Examples
| Input     | Condition              | Output |
|-----------|------------------------|--------|
| "Randon"  | Doesn't start with "B" | True   |
| ""        | Doesn't start with "B" | False  |
| "Brandon" | Doesn't start with "B" | False  |

---

## doesn’t end with
The **Doesn’t end with** trigger condition makes Workato search for events where the field you specify has a value that does not end with what you put in the **Value** field. For instance, if you wanted to trigger a recipe only when Microsoft Dynamics CRM customers that aren’t from the Skywalker family are updated, you would create a trigger condition where **Full Name** doesn’t end with “Skywalker”.

![Example doesn't end with recipe](/assets/images/features/trigger-conditions/example-doesnt-end-with-recipe.png)
*The trigger condition tells the recipe to only process new/updated Dynamics CRM customers if their Full Name doesn’t end with the string “Skywalker”*

If the field you specify is left blank in the application you are using, the **Doesn’t end with** condition will not count it, and no event will be picked up. Similar to the **Doesn’t contain** trigger condition, this can be circumvented by using a string formula with the **Is true** formula as shown in the **Is true** section below, or by pairing it with the **Is present** condition.

### Valid types
This condition is only valid for string data types.

### Examples
| Input              | Condition                    | Output |
|--------------------|------------------------------|--------|
| "Darth Vader" | Doesn't end with "Skywalker" | True   |
| ""                 | Doesn't end with "Skywalker" | False  |
| "Anakin Skywalker" | Doesn't end with "Skywalker" | False  |

---

## equals
The **Equals** trigger condition looks for events where the field you specify contains a value that is an exact match to what you set as the **Value** in the trigger condition. This is useful for finding very specific types of events, such as in the example in the beginning, where if you wanted to only look for updated Salesforce cases that are closed, you would set a trigger condition where **Status** equals “Closed”.

![Example equals recipe](/assets/images/features/trigger-conditions/example-equals-recipe.png)
*The trigger condition tells the recipe to only process new/updated Salesforce cases with the case-sensitive status of “Closed”*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Input    | Condition       | Output |
|----------|-----------------|--------|
| "Closed" | Equals "Closed" | True   |
| ""       | Equals "Closed" | False  |
| "New"    | Equals "Closed" | False  |

---

## does not equal
This trigger condition will only pick up events if the value in your specified field is not exactly the same as a certain value of your choosing. This functions somewhat similarly to a blacklist, specifically excluding what you choose. A situation where this might be used would be if you wanted to only run a recipe when Zendesk tickets with a priority higher than “Low” are created. Then you would set a trigger condition where **Priority** does not equal “Low.”

![Example does not equal recipe](/assets/images/features/trigger-conditions/example-doesnt-equal-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with a priority not equal to the case-sensitive string “Low”*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Input  | Condition            | Output |
|--------|----------------------|--------|
| "High" | Does not equal "Low" | True   |
| ""     | Does not equal "Low" | False  |
| "Low"  | Does not equal "Low" | False  |

---

## greater than
The **Greater than** trigger condition will pick up events that have a value in your specified field which is greater than a value you set. This works only with numerical values, like dates, prices, or timestamps. An example of this would be if you wanted to categorize all Box documents created after December 31, 2017. Then you would set a trigger condition where **Created at** is greater than 12/31/2017 in the MM/DD/YYYY format (it would be recommended to use a ![string formula](http://docs.workato.com/formulas/string-formulas.html) to set all dates to one format in case dates are entered differently).

![Example is greater than recipe](/assets/images/features/trigger-conditions/example-is-greater-than-recipe.png)
*The trigger condition tells the recipe to only process new Box files if their created date is greater than the date of “12/31/2017”. This means that the Box file was created after 31 December 2017.*
 
If the **Value** is set to a number, and the specified field is left blank in the application you use, the recipe will throw an error, as Workato cannot compare a null value with zero (kind of like asking if a banana is greater than or less than 5). This can be circumvented by adding an **Is present** condition along with **Greater than**.

![Example is present and greater than recipe](/assets/images/features/trigger-conditions/example-is-present-and-greater-than-recipe.png)
*The trigger condition tells the recipe to only process new Salesforce opportunities with an existing amount field (i.e. amount is present) and with a value greater than 0*

### Valid types
This condition is valid for string, date, timestamp, integer, number and boolean data types.

### Examples
| Input        | Condition                    | Output |
|--------------|------------------------------|--------|
| "1/24/2018"  | Is greater than "12/31/2017" | True   |
| ""           | Is greater than "12/31/2017" | Error  |
| "12/14/2017" | Is greater than "12/31/2017" | False  |

---

## less than
The **Less than** trigger condition is the opposite of the **Greater than** condition, and will only pick up events if the value in your specified field is less than a value you set. As with the **Greater than** condition, this condition only works with numerical values such as dates, prices, or timestamps. So if, for example, you wanted only to pick up new Shopify products that cost less than $50, you would set your recipe to trigger if **Price** is less than “50.”

![Example is less than recipe](/assets/images/features/trigger-conditions/example-is-less-than-recipe.png)
*The trigger condition tells the recipe to only process new Shopify product variants if the variant price is less than 50*

If you set the **Value** field to a number, and the specified field in the application you are using contains a null value, the recipe will throw an error. To circumvent this, you can add an **Is present** condition alongside the **Less than** condition.

### Valid types
This condition is valid for string, date, timestamp, integer, number and boolean data types.

### Examples
| Input            | Condition      | Output |
|------------------|----------------|--------|
| "42"             | Less than "50" | True   |
| ""               | Less than "50" | Error  |
| "12908457130982" | Less than "50" | False  |

---

## is true
The **Is true** trigger condition only picks up events where a certain condition is set to true. This only works with booleans. For example, if you wanted a recipe to run only when a product variant in Shopify requires shipping, you’d set a trigger condition where **Requires shipping** is true.

![Example is true recipe](/assets/images/features/trigger-conditions/example-is-true-recipe.png)
*The trigger condition tells the recipe to only process new Shopify product variants if the variant's requires shipping field is marked as true*

Alternatively, you can use regular data pills and convert them into booleans with string formulas, which can be found ![here](http://docs.workato.com/formulas/string-formulas.html). An example of how this might be used would be if you wanted to check whether or not the **Amount** field is blank in a Quick Base expenditure. Then, you could set a trigger condition using the **Amount** datapill followed by the `.blank?` string formula to return a true or false, thus making it compatible with the **Is true** condition.

![Example boolean recipe](/assets/images/features/trigger-conditions/example-boolean-recipe.png)
*The trigger condition tells the recipe to only process new Quick Base opportunity records if the formula **amount.blank?** evaluates to true (i.e. if the amount field is blank)*

### Valid types
This condition is only valid for boolean data types.

### Examples
| Input                       | Condition                   | Output |
|-----------------------------|-----------------------------|--------|
| "Requires shipping = True"         | "Requires shipping" is true | True   |
| "Does not require shipping = False" | "Requires shipping" is true | False  |

---

## is not true
As a counterpart to the **Is true** condition, the **Is not true** trigger condition will look for events where a certain condition is false. As such, this condition only works for booleans. For example, if you only want to pick up updated Salesforce cases if they are still open, you would set a trigger condition where **Closed** is not true.

![Example is not true recipe](/assets/images/features/trigger-conditions/example-is-not-true-recipe.png)
*The trigger condition tells the recipe to only process new Salesforce cases if they are not closed*

As with the **Is true** condition, you can also use **Is not true** with regular datapills by using ![string formulas](http://docs.workato.com/formulas/string-formulas.html) to convert them into booleans. 

### Examples
| Input    | Condition            | Output |
|----------|----------------------|--------|
| “Closed = False"    | "Closed" is not true | True   |
| "Closed = True" | "Closed" is not true | False  |

---

## is present
The **Is present** trigger condition checks for whether or not the field you choose has a null value in it. This functions somewhat similarly to the **Contains** condition, except **Is present** only sees if the field has anything in it at all. For example, if you want to sync all Box files that have a name, you can use a condition where **Name** is present.

![Example is present recipe](/assets/images/features/trigger-conditions/example-is-present-recipe.png)
*The trigger condition tells the recipe to only process new Box files if the file has a name*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Input                   | Condition       | Output |
|-------------------------|-----------------|--------|
| "Creative Example Name" | Name is present | True   |
| ""                      | Name is present | False  |

---

## is not present
Like the **Is present** trigger condition, the **Is not present** trigger condition sees whether the field you specify has a null value. This condition is useful for checking if any fields are left blank in the application you are using. So if, for instance, you wanted to reprocess all Zendesk tickets that are missing an **Assignee**, you would add a trigger condition where **Assignee ID** is not present.

![Example is not present recipe](/assets/images/features/trigger-conditions/example-is-not-present-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with no agent assigned to it*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Input                  | Condition                    | Output |
|------------------------|------------------------------|--------|
| Assignee ID: ""        | "Assignee ID" is not present | True   |
| Assignee ID: "2038765" | "Assignee ID" is not present | False  |
