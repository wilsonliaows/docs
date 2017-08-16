---
title: Utilities
date: 2017-02-23 15:15:00 Z
---

# Utilities
Workato's Utilities connector is useful for performing all sorts of tasks. Here are the list of actions you can perform using this connector.

1. [Create list](#create-list)

2. [Download file from URL](#download-file-from-url)

3. [Generate column chart](#generate-column-chart)

4. [Generate pie chart](#generate-pie-chart)

5. [Link two objects](#link-two-objects)

6. [Get linked object](#link-two-objects)

## Create list
Repeat actions can only be carried out on a list, so as to repeat a set of actions iteratively on list items. In some cases, you may wish to repeat a set of actions a specific number of times, instead of on an actual list. To set the number of times to iterate, use the **Create list** action to create a list with a predetermined size (up to 500). You can read more about repeat actions [here](http://docs.workato.com/recipes/steps.html).

First, configure the **Create list** action to set the list size. Use this list created for the repeat action to carry out the actions indented within the repeat loop.

![repeat_list_action](/assets/images/features/Utilities/repeat-list-action.png)

## Download file from URL
Downloading a file in a recipe allows you to use that file later in the recipe, usually to upload onto another app. However, downloaded text content can be used directly in the recipe. Downloading a file **does not mean** that you will see that file on your computer. It is merely download for use in a recipe. Take note the maximum file size you can download is **25MB**.

In the Download file from URL section, you can provide a static URL if you intend to upload the same file to multiple places, (e.g. as an attachment to all Accounts in Salesforce) or provide a dynamic URL by using a URL pill obtained from a previous step output. You may also choose if you want your download file content to be encoded using base64.

## Generate column chart
Using this action allows you to use data from two columns in a list to create a column chart to help visualize and analyze data better. Select a list from your recipe's app data, followed by 2 columns from the list. The X-axis should contain the independant value, while the Y axis contains the dependant value.

![chart](/assets/images/features/Utilities/utilities-chart.png)

## Generate pie chart
Using this action allows you to use data from two columns (name and values) in a list to create a pie chart to help visualize and analyze data better.

![piechart](/assets/images/features/Utilities/utilities-piechart.png)

## Link two objects
Linking two objects allows you to associate one object to another via Workato, without having to store any external IDs within the apps themselves. It enables you to retrieve that association in another recipe, e.g. creating an association between a particular Salesforce case ID and a Zendesk ticket ID when you create a new Salesforce case when the Zendesk ticket is created, then using that association to maintain updates and keep both case and ticket in sync.

![linkobject](/assets/images/features/Utilities/utilities-linkobject.png)

To retrieve the association in another recipe, use the **Get linked object** action , select the object which exists in some part of the new recipe, and select which linked object you need.

![linkobject](/assets/images/features/Utilities/utilities-getlinkobject.png)
