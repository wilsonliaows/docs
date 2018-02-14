# Using wildcards to search or filter

In some triggers and actions, you can use wildcards to search or filter items based on naming pattern. For example, listing all files in a folder that filenames contain a specific text. 

Wildcards are characters, such as asterisk (\*) or question mark (?), that can be used to substitute any other character in a search. This is how to use them:

## Asterisk (\*)
Use the asterisk (\*) as substitute for zero or more characters. For example, if you are looking for files with filename contains the text “report”, type the following:

**\*report\***

The asterisk (\*) substitutes all characters before and after “report”. So this search will return files such as “Sales_report.docx”, “Report 2018.csv”, “peer reporting.txt”. To narrow the search further, type:

**report\*.csv**

This will return files that begin with “report” and end with “.csv”, such as “Report 2018.csv”.

## Question mark (?)
The questions mark (?) works similarly to the asterisk, except it only substitutes **one** character. 

For example, if you type **report?.csv**, you will get files “report2.csv”, “ReportA.csv”, but not “Report 2018.csv”. 

## Currently supported triggers & actions
Wildcards are currently supported in the following triggers and actions. The list will be updated as we support more connectors in the future: 
* On-prem file's action "List files in folder"
