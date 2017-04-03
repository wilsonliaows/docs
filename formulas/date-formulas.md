---
title: Date formulas
date: 2017-03-30 05:00:00 Z
---

# Date formulas
Workato supports a variety of date and datetime formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always [reach out to us](contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged. Take note that most formulas will return an error and stop the job if it tries to operate on nulls (expressed as `nil` in Ruby), except for `present?`, `presence` and `blank?`.

You can refer to the complete Ruby documentation for Time [here](http://ruby-doc.org/core-2.3.3/Time.html).

## now
Returns the current date and time that the action was carried out by Workato.

### Example
In the following example, Workato carries out the action on on 2 April 2017, 12.30PM.

| Example             | Result                               |
|---------------------|--------------------------------------|
| now                 | "2017-04-02T12:30:30.462659-07:00"   |

## today
Returns the current date that the action was carried out by Workato.

### Example
In the following example, Workato carries out the action on on 2 April 2017, 12.30PM.

| Example             | Result                               |
|---------------------|--------------------------------------|
| today               | "2017-04-03"                         |

## to_date
This function converts a value in another data type, e.g. time or string, into a date data type. By default, the format of the date returned will be YYYY-MM-DD.

You can specify the format of the date returned via an additional parameter *format*.

### Example
| Example                                    | Result                               |
|--------------------------------------------|--------------------------------------|
| "2017-04-02".to_date                       | "2017-04-02"                         |
| "2017-04-02T12:30:30.462659-07:00".to_date | "2017-04-02"                         |

## to_time
This function converts a value in another data type, e.g. date or string, into a date data type. Dates will be represented in UTC offset (i.e. expressed in GMT timezone of +00:00).

If a datetime is coverted using the to_time formula, it will be expressed in UTC offset. If a date is converted using the to_time formula, it will take the time of 00:00:00.000000 (i.e. midnight sharp), expressed in UTC offset.

### Example
| Example                                      | Result                               |
|----------------------------------------------|--------------------------------------|
| "2017-04-02T12:30:30.462659-07:00".to_time   | "2017-04-02T19:30:30.462659+00:00"   |
| "2017-04-02".to_time                         | "2017-04-02T00:00:00.000000+00:00"   |

## blank?
This function checks the input string and returns true if it is an empty string or if it is null.

### Example
| Example                                      | Result |
|----------------------------------------------|--------|
| "2017-04-02T12:30:30.462659-07:00".blank?    | false  |
| "2017-04-03".blank?                          | false  |
| " ".blank?                                   | true   |
| null.blank?                                  | true   |

## present?
This function will check the input, returning true if there is a value present. If input is null or an empty string, formula returns false.

### Example
| Example                                      | Result |
|----------------------------------------------|--------|
| "2017-04-02T12:30:30.462659-07:00".present?  | true   |
| "2017-04-03".present?                        | true   |
| " ".present?                                 | false  |
| null.present?                                | false  |

## presence
This function will check the input, returning its value if there is one present, else returning nil.

### Example
| Example                                      | Result                               |
|----------------------------------------------|--------------------------------------|
| "2017-04-02T12:30:30.462659-07:00".presence  | "2017-04-02T12:30:30.462659-07:00"   |
| "2017-04-03".presence                        | "2017-04-03"                         |
| " ".presence                                 | nil                                  |
| null.presence                                | nil                                  |

# Date arithmetics
We can make use of certain keywords such as **days**, **months**, **years**, **minutes** and **seconds** to perform date arithmetics to add or subtract days, months, years, minutes and seconds from dates and datetimes.

## Example

| Date Arithmetic | Output |
| ------------- | ------------- |
| '2015/04/20'.to_date + 2.days | Wed, 22 Apr 2015 |
| '2015/04/20'.to_date - 2.days | Sat, 18 Apr 2015 |
| '2015/04/20'.to_date + 2.weeks | Mon, 04 May 2015 |
| '2015/04/20'.to_date - 2.weeks | Mon, 06 Apr 2015 |
| '2015/04/20'.to_date + 2.months | Sat, 20 Jun 2015 |
| '2015/04/20'.to_date - 2.months | Fri, 20 Feb 2015 |
| '2015/04/20'.to_date + 2.years | Thu, 20 Apr 2017 |
| '2015/04/20'.to_date - 2.years | Sat, 20 Apr 2013 |

# Getting first/last days of the current and next month
Using a combination of date formulas, and date arithmetics, we can easily obtain the first and last days of the current and next months.

## Beginning of Current Month
Firstly, turn on formula mode and we have access to the .beginning_of_month function. It returns the date for the start of the month for the given date/timestamp.
![beginning of current month](/assets/images/formula-docs/beginning_of_current_month.png)

## Beginning of Next Month
To retrieve a date for the beginning of the next month, we simply need to add a month to the input date, and use the previously mentioned function get the beginning of the month.
![beginning of next month](/assets/images/formula-docs/beginning_of_next_month.png)

## End of Current or Next Month
While the beginning_of_month function will always give you the first day of the month, retrieving the end of the month is a little trickier because some months have 31 days while others have less.

Instead, we can apply some simple arithmetic to obtain the last date of the month.

To retrieve the last date of the current month:
![last date of current month](/assets/images/formula-docs/last_date_current_month.png)

To retrieve the last date of the next month:
![last date of next month](/assets/images/formula-docs/last_date_next_month.png)

# Converting other data types to strings
To convert a date data type into a datetime data, or vice versa, use the to_date(#to_date) or to_time(#to_time) formulas.
