---
title: Number formulas
date: 2017-03-30 05:00:00 Z
---

# Number formulas
Workato supports a variety of number formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always [reach out to us](contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged.

You can refer to the complete Ruby documentation for Fixnum (integers) [here](http://ruby-doc.org/core-2.3.3/Fixnum.html) as well as the Ruby documentation for Float (decimals) [here](http://ruby-doc.org/core-2.3.3/Float.html).

# Arithmetic operations
In the cases of arithmetic operations, whether the values are of integer types or decimal (float) types are important. Formulas will alway stick to the types given as input, and the returned result will be of the most precise type.

For example:
- If integer values are provided, an integer value will be returned.
- If float values are provided, a float value will be returned.
- If both float and integer values are provided, a float value will be returned, as that is more precise.

## +
This operator allows the addition of operands on either side.

### Example
| Example   | Result | Type   |
|-----------|--------|--------|
| 4 + 7     | 11     | Fixnum |
| 4.0 + 7   | 11.0   | Float  |
| 4.0 + 7.0 | 11.0   | Float  |

## -
This operator subtracts the right hand operand from the left hand operand.

### Example
| Example   | Result | Type   |
|-----------|--------|--------|
| 4 - 7     | -3     | Fixnum |
| 4.0 - 7   | -3.0   | Float  |
| 4.0 + 7.0 | -3.0   | Float  |

## *
This operator multiplies the operands on either side.

### Example
| Example   | Result | Type   |
|-----------|--------|--------|
| 4 * 7     | 28     | Fixnum |
| 4.0 * 7   | 28.0   | Float  |
| 4.0 * 7.0 | 28.0   | Float  |

## /
Divides left hand operand by right hand operand.

### Example
| Example   | Result      | Type   |
|-----------|-------------|--------|
| 4 / 7     | 0           | Fixnum |
| 4.0 / 7   | 0.571428... | Float  |
| 7 / 4     | 1           | Fixnum |
| 7 / 4.0   | 1.75        | Float  |
| 7.0 / 4   | 1.75        | Float  |
| 7.0 / 4.0 | 1.75        | Float  |

## %
Divides left hand operand by right hand operand and returns the remainder.

### Example
| Example   | Result | Type   |
|-----------|--------|--------|
| 4 % 7     | 4      | Fixnum |
| 4.0 % 7   | 4.0    | Float  |
| 4 % 7.0   | 4.0    | Float  |
| 7 % 4     | 3      | Fixnum |
| 7.0 % 4.0 | 3.0    | Float  |

# Other number formulas

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
