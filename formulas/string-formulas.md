---
title: String formulas
date: 2017-03-30 05:00:00 Z
---

# String formulas
Workato supports a variety of string formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always [reach out to us](contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged.

You can refer to the complete Ruby documentation for strings [here](https://ruby-doc.org/core-2.2.0/String.html).

In the examples below, we will look at some of the methods that can be used to manipulate a string of text, which in this case the input string is 'Jean Marie'.

## blank?
This function checks the input string and returns true if it does not contain any value.

### Example
`"Jean Marie".blank?` evaluates to `false`

`"".blank?` evaluates to `true`












| Formula | Description | Example | Sample Output |
| ------------- | ------------- | ------------- | ------------- |
| blank? | This function checks the input string and returns true if it does not contain any value. |'Jean Marie'.blank? | false | 
| include? | This function checks the input string and returns true if it contains the stated keyword. | 'Jean Marie'.include?('Jean') | true |
|exclude?| This function acts in an opposite manner from include?. It will return true only if the input string does NOT contain the stated keyword. | 'Jean Marie'.exclude?('Jean') | false |
| match? | This function checks the input string for a particular pattern. It returns true if the pattern is present. | It can be used to check if whether there is any white space within the input string.| 'Jean Marie'.match?(/\s/) | true |
| match? | match? can also be used in a manner similar to include? . This is to check for a stated keyword. | 'Jean Marie'.match?('ie') | true |
| ends_with? | This function checks the input string on whether it finishes with the stated keyword. |'Jean Marie'.ends_with?('ie') | true |
| starts_with? |This function checks the input string on whether it begins with the stated keyword. | 'Jean Marie'.starts_with?('ie') | false |
| capitalize | This function converts the input string into sentence case, i.e. the first character of each sentence is capitalized. | 'jean MARIE'.capitalize | "Jean marie" |
| titleize | This function converts the input string into title case, i.e. the first character of each word is capitalized. | 'jean MARIE'.titleize | "Jean Marie" |
| upcase | This function converts all characters from the input string into upper-case. | 'Jean Marie'.upcase | "JEAN MARIE" |
| downcase | This function converts all characters from the input string into lower-case. | 'Jean Marie'.downcase | "jean marie" |
| lstrip | This function (left strip) removes the white space at the beginning of the input string. | 'Jean Marie'.lstrip | "Jean Marie" | 
| rstrip | This function (right strip) removes the white space at the end of the input string. | 'Jean Marie'.rstrip | " Jean Marie" |
| strip | This function removes the white space at the beginning and the end of the input string. | 'Jean Marie'.strip | "Jean Marie" |
| strip | strip is also equivalent to using both right and left strip on an input string. | 'Jean Marie'.rstrip.lstrip | "Jean Marie" |
| length | This function returns the number of characters within an input string, including the white-spaces. | 'Jean Marie'.length | 11 |
| reverse | This function inverts a string, reordering the characters in a backward manner. | 'Jean Marie'.reverse | "eiraM naeJ" |
| gsub | This function replaces all occurrence of the first input value, with the second input value, within the string. | 'Jean Marie'.gsub('J', 'M') | "Mean Marie" |

