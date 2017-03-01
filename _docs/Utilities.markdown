![utilities icon](/_uploads/Utilities/Utilities Icon.png)
# Utilities 
Workato's Utilities connector is useful for performing all sorts of tasks
Here are the list of actions you can perform using 

** Get linked object
Compose CSV
Crete list
Download file from URL
Generate column chart
Generate pie chart
Link two objects
Log message
Merge name components
Parse CSV
Parse JSON doc
Parse XML doc **

Get linked object
-

## Compose CSV
-
## Create list
In workato, to use the repeat action requires a List item to be present. However there may be some instances where you may want to repeat an action a specific number of times. To do so, you can use the  **Create list** action to create a list with a predetermined size (up to 500) to use the repeat action. 
First, create the **create list** action, and determine the size you want to use 
Next, you can create a repeat action any time after the **Create list** action. Then, use the **list** pill from the **create list** step's output in the **Input list** field. Once you have configured your recipe, it will repeat the set of actions the same number of times as the size of the list.


## Download file from URL

Downloading a file in a recipe allows you to use that file later in the recipe, usually to upload onto another app. However, downloaded text content can be used directly into the recipe. Download a file **does not mean** that you will see that file on your computer. It is merely download for use in a recipe. Take note the maximum file size you can download is **25MB**. 

In the Download file from URL section, you can provide a static URL if you intend to upload the same file to multiple places, (e.g. as an attachment to all Accounts in Salesforce) or provide a dynamic URL by using a URL pill obtained from a previous step output. You may also choose if you want your download file content to be encoded using base64. 

## Generate column chart 
Using this action allows you to use data from two columns in a list to create a column chart to help visualize and analyze data better. 
## Generate pie chart

## Link two objects
Linking two objects allows you to associate an object from one app with another, and allows you to cme back to this connection in another recipe. Some simple coonnections includes a salesforce account ID with a Zendesk ticket ID, for easy tracking.
## Log message 

## Merge name components

## Parse CSV
-

## Parse JSON doc
-

## Parse XML doc
-
