---
title: Date formulas
date: 2017-03-30 05:00:00 Z
---

### Date Formulas
Dates are quite common elements in data structures. Sometimes the date may not be in the right format, for example it may be sent as a string. Here are some common operators or functions to manipulate dates

| Formula | Description | Example | Sample Output |
| ------------- | ------------- | ------------- | ------------- |
| now | puts todays date and current time | - | - |
| today | puts todays date | - | - | 
| to_date | Converts a string to date | '2015/04/20'.to_date | Mon, 20 Apr 2015 |
| to_date(format:'MM/DD/YYYY') | Converts a formatted string to date in the stated format. Refer [here](http://apidock.com/ruby/DateTime/strftime) for more date formats | '04/20/2015'.to_date(format: 'MM/DD/YYYY') | 04/20/2015 |
| present? | Check to see if a date is present | '2015/04/20'.to_date.present? | true | 
| blank? | Check to see if date field is blank | '2015/04/20'.to_date.blank? | false | 

#### Date Arithmetics
We can also make use of certain keywords such as <b> days, months and years </b> to perform date arithmetics to manipulate dates. The table below shows some exmaples of manipulating dates. 

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

Note: You may also do the same for <b>minutes</b> and <b>seconds</b> 

#### Getting First/Last days of the current and next month
Using a combination of date formulas, and date arithmetics, we can easily obtain the first and last days of the current and next months.

##### Beginning of Current Month
Firstly, turn on formula mode and we have access to the .beginning_of_month function. It returns the date for the start of the month for the given date/timestamp.
![beginning of current month](/assets/images/formula-docs/beginning_of_current_month.png)

##### Beginning of Next Month
To retrieve a date for the beginning of the next month, we simply need to add a month to the input date, and use the previously mentioned function get the beginning of the month.
![beginning of next month](/assets/images/formula-docs/beginning_of_next_month.png)

##### End of Current or Next Month
While the beginning_of_month function will always give you the 1st day of the month, retrieving the end of the month is a little trickier because some months have 31 days while others have less.

Instead, we can apply some simple arithmetic to obtain the last date of the month. 

To retrieve the last date of the current month :        
![last date of current month](/assets/images/formula-docs/last_date_current_month.png)

To retrieve the last date of the next month:        
![last date of next month](/assets/images/formula-docs/last_date_next_month.png)