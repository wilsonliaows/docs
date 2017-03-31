---
title: Number formulas
date: 2017-03-30 05:00:00 Z
---

### Number Formulas
Workato formula mode supports many functions that can be used on numbers. 
In the examples below, we will look at some of the functions that can be used to manipulate numbers.

#### Arithmetic Operators on Numbers
If Amount pill's value is 45 and Qty pill's value is 5, the results will be as follows:

| Operator | Description | Example | Sample Output | 
| ------------- | ------------- |  ------------- |  ------------- | 
| + |Addition - Adds values on either side of the operator | Amount + Qty | 50 |
| - | Subtraction - Subtracts right hand operand from left hand operand | Amount - Qty | 40 |
| * | Multiplication - Multiplies values on either side of the operator | Amount * Qty | 225 |
| / |Division - Divides left hand operand by right hand operand | Amount / Qty | 9 |
| % |Modulus - Divides left hand operand by right hand operand and returns remainder | Amount % Qty | 0 |

#### Formulas used on Numbers

| Formula | Description | Example | Sample Output |
| ------------- | ------------- | ------------- | ------------- |
| abs | This function returns the absolute (positive) value of a number. | -45.67.abs | 45.67 |
| blank? | This function checks the input number and returns true if it does not contain any value. | 45.67.blank? | false |
| presence | This function will check the input number, returning its value if there is one present, else returning nil. | 45.67.presence | 45.67 |
| present? | This function will check the input number, returning true if there is a value present, else returning false. | 45.67.present? | true |
| to_i | This function can be used on a number to only take its integer value. | 45.67.to_i | 45 | 
| to_f | This function can be used on a number to retain its decimal values. | 45.67.to_f | 45.67 |
| to_s | This function converts a number into a string. | 45.67.to_f | "45.67" |
| round | This function will round up or down a number to the nearest integer. | 45,67.round | 46 |
| round | By adding brackets with a number within it, it will round the number to a float with that number of decimal places. | 45.6789.round(2) | 45.68 | 
| to_currency | This function converts a number into a currency string. | 456789.123.to_currency | $456,789.12 |
| to_currency | By adding a parameter with a precision: number within it, it will round the number to a currency string with the stated number of decimal places. | 456789.123.to_currency(Precision: 3) | $456,789.123 | 
| to_currency | By adding a parameter with a locale and country code, it will add the appropriate currency symbol. | 456789.123.to_currency(locale: fr) | 456,789.12 € |
| to_phone | This function converts a number into a formatted phone number. | 1235551234.to_phone | 123-555-1234 |
| to_phone | By adding a parameter with area code: true, the first three numbers will be enclosed in brackets, representing the area.| 1235551234.to_phone(area_code: true) | (123) 555-1234 |
| to_phone | By adding a parameter with delimiter: string, the formatted phone number will be separated with the input string. | 1235551234.to_phone(delimiter: " ") | 123 555 1234 |
| to_phone | By adding a parameter with extension: number, the formatted phone number will be appended with x number at the end. | 1235551234.to_phone(extension: 555) | 123-555-1234 x 555 |
| to_phone | By adding a parameter with country_code: number, the formatted phone number will be appending with + number at the beginning. |1235551234.to_phone(country_code: 1) |  +1-123-555-1234 |
