---
title: String formulas
date: 2017-03-30 05:00:00 Z
---

# String formulas
In Ruby, strings refer to sequences of text and characters.

Workato supports a variety of string formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always [reach out to us](contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged.

You can refer to the complete Ruby documentation for strings [here](https://ruby-doc.org/core-2.3.3/String.html).

In the examples below, we will look at some of the methods that can be used to manipulate a string of text, which in this case the input string is 'Jean Marie'.

## blank?
This function checks the input string and returns true if it is an empty string or if it is null.

### Example
| Example             | Result |
|---------------------|--------|
| "Jean Marie".blank? | false  |
| "".blank?           | true   |
| null.blank?         | true   |

## present?
This function will check the input, returning true if there is a value present. If input is null or an empty string, formula returns false.

### Example
| Example                | Result |
|------------------------|--------|
| "".present?            | false  |
| null.present?          | false  |
| "Jean Marie".present?  | true   |

## presence
This function will check the input, returning its value if there is one present, else returning nil.

### Example
| Example                 | Result        |
|-------------------------|---------------|
| "".presence             | nil           |
| null.presence           | nil           |
| "Jean Marie".presence   | Jean Marie    |

## include?
This function checks the input string and returns true if it contains the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                              | Result |
|--------------------------------------|--------|
| "Jean Marie".include?("Jean")        | true   |
| "Jean Marie".include?("Jane")        | false  |
| "Jean Marie".include?("Ma")          | true   |
| "Jean Marie".include?("ma")          | false  |
| "Jean Marie".downcase.include?("ma") | true   |

## exclude?
This function acts in an opposite manner from include?. It will return true only if the input string does NOT contain the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                              | Result |
|--------------------------------------|--------|
| "Jean Marie".exclude?("Jean")        | false  |
| "Jean Marie".exclude?("Jane")        | true   |
| "Jean Marie".exclude?("Ma")          | false  |
| "Jean Marie".exclude?("ma")          | true   |
| "Jean Marie".downcase.exclude?("ma") | false  |

## match?
This function checks the input string for a particular pattern. It returns true if the pattern is present. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                               | Result |
|---------------------------------------|--------|
| "Jean Marie".match?(/Marie/)          | true   |
| "Jean Marie".match?(/marie/)          | false  |
| "Jean Marie".downcase.match?(/marie/) | true   |
| "Jean Marie".match?(/\s/)             | true   |

## ends_with?
This function checks the input string on whether it finishes with the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                              | Result |
|--------------------------------------|--------|
| "Jean Marie".ends_with?("ie")        | true   |
| "Jean Marie".ends_with?("IE")        | false  |
| "Jean Marie".upcase.ends_with?("IE") | true   |

## starts_with?
This function checks the input string on whether it begins with the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                  | Result |
|------------------------------------------|--------|
| "Jean Marie".starts_with?("Jean")        | true   |
| "Jean Marie".starts_with?("jean")        | false  |
| "Jean Marie".upcase.starts_with?("JEAN") | true   |

## capitalize
This function converts the input string into sentence case, i.e. the first character of each sentence is capitalized.

### Example
| Example                              | Result                    |
|--------------------------------------|---------------------------|
| "ticket opened. Gold SLA".capitalize | "Ticket opened. gold sla" |
| "jean MARIE".capitalize              | "Jean marie"              |

## titleize
This function converts the input string into title case, i.e. the first character of each word is capitalized.

### Example
| Example                            | Result                    |
|------------------------------------|---------------------------|
| "ticket opened. gold SLA".titleize | "Ticket Opened. Gold Sla" |
| "jean MARIE".titleize              | "Jean Marie"              |

## upcase
This function converts all characters from the input string into upper-case.

### Example
| Example                          | Result                    |
|----------------------------------|---------------------------|
| "ticket opened. Gold SLA".upcase | "TICKET OPENED. GOLD SLA" |
| "jean MARIE".upcase              | "JEAN MARIE"              |

## downcase
This function converts all characters from the input string into lower-case.

### Example
| Example                            | Result                    |
|------------------------------------|---------------------------|
| "ticket opened. Gold SLA".downcase | "ticket opened. gold sla" |
| "jean MARIE".downcase              | "jean marie"              |

## lstrip
This function (left strip) removes the white space at the beginning of the input string.

### Example
| Example                            | Result                    |
|------------------------------------|---------------------------|
| "   Jean   Marie   ".lstrip        | "Jean   Marie   "         |

## rstrip
This function (right strip) removes the white space at the end of the input string.

### Example
| Example                            | Result                    |
|------------------------------------|---------------------------|
| "   Jean   Marie   ".rstrip        | "   Jean   Marie"         |

## strip
This function removes the white space at the beginning and the end of the input string.

### Example
| Example                            | Result                    |
|------------------------------------|---------------------------|
| "   Jean   Marie   ".strip         | "Jean   Marie"            |

## length
This function returns the number of characters within an input string, including the white-spaces.

### Example
| Example               | Result |
|-----------------------|--------|
| "Jean Marie".length   | 10     |
| " jean marie ".upcase | 12     |

## reverse
This function inverts a string, reordering the characters in a backward manner. Case is preserved.

### Example
| Example               | Result         |
|-----------------------|----------------|
| "Jean Marie".reverse  | "eiraM naeJ"   |
| " jean marie ".upcase | " eiram naej " |

## gsub
This function replaces all occurrence of the first input value, with the second input value, within the string. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                    | Result       |
|--------------------------------------------|--------------|
| "Jean Marie".gsub("J", "M")                | "Mean Marie" |
| "Jean Marie".gsub("j", "M")                | "Jean Marie" |
| "Jean Marie".downcase.gsub("j", "M")       | "Mean marie" |
| "Awesome".gsub(/[Ae]/, 'A'=>'E', 'e'=>'a') | "Ewasoma"    |

# Converting other data types to strings
To convert a value of other data types, e.g. number, date, into a string, use the to_s formula.

## to_s
Converts a value of another data type into a string data type.

### Example
| Example             | Result                             | Type conversion  |
|---------------------|------------------------------------|------------------|
| 123.to_s            | "123"                              | Fixnum -> String |
| 123.0.to_s          | "123.0"                            | Float -> String  |
| [date].to_s         | "2017-03-30T21:59:33.427684-07:00" | Date -> String   |
| [date].to_s(:short) | "30 Mar 21:59"                     | Date -> String   |
| [date].to_s(:long)  | "March 30, 2017 21:59"             | Date -> String   |
