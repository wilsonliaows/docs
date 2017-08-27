# Trigger conditions
You can set conditions for your triggers to define what subset of trigger events should be processed by the recipe, e.g. only new Salesforce accounts with the type "Customer", or only Salesforce leads with the rating "Hot". 

![Example Trigger IF recipe](/assets/images/features/trigger-conditions/example-trigger-if-recipe.png)
*The Salesforce trigger has the trigger condition set to only process new/updated cases with the status of "Closed”*

## Conditions
Each trigger condition consists of 3 parts - trigger data, condition and value. Conventionally, the trigger data (left-hand-side) is the variable data from your app, e.g. case status, or lead rating. Accordingly, the value (right-hand-side) is the static value you wish to check against, e.g. "Closed" or "Hot", correspondingly. Trigger data and values are case sensitive.

In this article, we go through the 14 conditions you can choose from. Additionally, you can combine multiple conditions with the **AND** or **OR** operators to set up complex trigger conditions.

Each condition will be valid for different data types. If a condition is attempted to be used for invalid data types, it might:
- prevent the recipe from starting successfully,
- throw a trigger error after the recipe has started, resulting in the inability to pick up trigger events, or
- result in the recipe filtering out all trigger events.

---

## contains
This condition checks if the trigger data contains the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example contains recipe](/assets/images/features/trigger-conditions/example-contains-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with a subject that contains the word "bug"*

### Valid types
This condition is only valid for array and string data types.

### Examples
| Trigger data           | Condition/value         | Picked up by recipe? |
|------------------------|-------------------------|----------------------|
| "UI bug"               | Contains "bug"          | Yes                  |
| "UI BUG"               | Contains "bug"          | No                   |
| "Instructions unclear" | Contains "bug"          | No                   |
| ""                     | Contains "bug"          | No                   |
| null                   | Contains "bug"          | No                   |
| 12345                  | Contains 123            | No                   |
| [1, 2, 3]              | Contains 1              | Yes                  |
| [1, 2, 3]              | Contains [1, 3]         | No                   |
| ["abc", "pqr", "xyz"]  | Contains "abc"          | Yes                  |
| ["abc", "pqr", "xyz"]  | Contains ["abc", "pqr"] | No                   |

---

## starts with
This condition checks if the trigger data string begins with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

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
This condition checks if the trigger data ends with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example ends with recipe](/assets/images/features/trigger-conditions/example-ends-with-recipe.png)
*The trigger condition tells the recipe to only process new emails if the sender's email address ends with the string “@workato.com”*

If the field you specify in your condition is left blank in the application you’re using, no event will be picked up. 

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
This condition is the opposite of the [contains condition](#contains). It checks if the trigger data **DOES NOT** contain the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

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
This condition is the opposite of the [starts with condition](#starts-with). It checks if the trigger data string **DOES NOT** begins with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

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
This condition is the opposite of the [ends with](#ends-with) condition. It checks if the trigger data **DOES NOT** end with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

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
This condition checks if the trigger data equals the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

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
This condition is the opposite of the [equal condition](#equals). It checks if the trigger data **DOES NOT** equal the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

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
This conditions checks if the trigger data is greater than the value.

![Example is greater than recipe](/assets/images/features/trigger-conditions/example-is-greater-than-recipe.png)
*The trigger condition tells the recipe to only process new Box files if their created date is greater than the date of “12/31/2017”. This means that the Box file was created after 31 December 2017.*
 
If **value** is set to a number, and the **trigger data** field has a null value, the recipe will raise a trigger error, as computationally, a number cannot be compared with a null value. To resolve this issue, add an **is present** condition along with the **greater than** condition.

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
This conditions checks if the trigger data is less than the value.

![Example is less than recipe](/assets/images/features/trigger-conditions/example-is-less-than-recipe.png)
*The trigger condition tells the recipe to only process new Shopify product variants if the variant price is less than 50*

If **value** is set to a number, and the **trigger data** field has a null value, the recipe will raise a trigger error, as computationally, a number cannot be compared with a null value. To resolve this issue, add an **is present** condition along with the **less than** condition.

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
This condition checks that the trigger data is true.

![Example is true recipe](/assets/images/features/trigger-conditions/example-is-true-recipe.png)
*The trigger condition tells the recipe to only process new Shopify product variants if the variant's requires shipping field is marked as true*

It can also be used to check that the formula provided in the trigger data input field evaluates to true. For example, you can convert string type datapills via string formulas into conditions that evaluates to a boolean, which can be found ![here](http://docs.workato.com/formulas/string-formulas.html), with an example as follows.

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
This condition is the opposite of the [is true condition](#is-true). It checks that the trigger data **IS NOT** true.

![Example is not true recipe](/assets/images/features/trigger-conditions/example-is-not-true-recipe.png)
*The trigger condition tells the recipe to only process new Salesforce cases if they are not closed*

It can also be used to check that the formula provided in the trigger data input field evaluates to false. For example, you can convert string type datapills via string formulas into conditions that evaluates to a boolean, which can be found ![here](http://docs.workato.com/formulas/string-formulas.html), with an example as follows.
 
### Examples
| Input    | Condition            | Output |
|----------|----------------------|--------|
| “Closed = False"    | "Closed" is not true | True   |
| "Closed = True" | "Closed" is not true | False  |

---

## is present
This condition will check the trigger data. If there is data present, the trigger event will be picked up by the recipe. If input is null or an empty string, the trigger event will not be picked up by the recipe.

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
This condition will check the trigger data. If there is data present, the trigger event **WILL NOT** be picked up by the recipe. If input is null or an empty string, the trigger event **WILL** be picked up by the recipe.

![Example is not present recipe](/assets/images/features/trigger-conditions/example-is-not-present-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with no agent assigned to it*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Input                  | Condition                    | Output |
|------------------------|------------------------------|--------|
| Assignee ID: ""        | "Assignee ID" is not present | True   |
| Assignee ID: "2038765" | "Assignee ID" is not present | False  |
