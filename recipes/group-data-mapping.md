---
title: Group data mapping
date: 2018-09-25 10:00:00 Z
---

# Group data mapping

Group data mapping is a useful feature that enables the automatic mapping of fields based on matches between the field name and data pill name. This is especially helpful when there are a large number of fields that need to be mapped (eg. in database applications).

The feature allows a 1-1 mapping of the fields in 1 recipe step from 1 data source based on field - pill name match (case insensitive) and data type.

## Activate the group mapping wizard

To start using the feature, expand the recipe step you want to map. You will notice that a 4th icon, the group data mapping icon appears to the right of your recipe step as shown below. Clicking on the icon activates the group mapping wizard.

![expand step to be mapped](/assets/images/recipes/group-mapping/expand-step-group-mapping-icon.gif)
*Activate the wizard by clicking on the icon*

Group data mapping is available on all recipe actions except the trigger.  

## Selecting the field group and data source

The wizard shows you the fields and field groups that can be mapped on the left and the available data sources on the right. The available data sources is similar to the app data tree that can be seen when recipe building.

Field groups are fields that appear as nested fields in the recipe UI. They follow the object structure you have in your application. You may select the entire step's fields (including nested fields) or a specific field group. The example below shows the nested fields 'Bill to' and 'Ship to' (highlighted in orange).    

![field groups](/assets/images/recipes/group-mapping/field-groups.png)
*An example of fields and field groups within an action*

After selecting the fields to be mapped, select the data source the pills should come from. The data sources available are from your Account Properties, the trigger and all recipe steps prior to the one chosen. Similar to field groups, you can choose to map from the output of an entire step, or a nested array within. In the example above, you can see nested data 'Files' in the Salesforce output (highlighted in blue).

In the current iteration, the matches are based on the **name** of the field to be mapped and the name of the data pill. The name matching is case-insensitive. The **data type** needed in the field and the data type of the pill also have to match.

After selecting the fields and data source, the wizard will display the matches and will highlight them in bold on both the left and right. It will also show the number of matching fields below the 'Next' button. Click on it to continue.

## Data mapping preview

The second screen in the wizard will show you the fields that have successfully matched with data pills of the same name and data type. Check that the mappings are indeed the ones you are looking for. Then, using the checkboxes on the left, select or deselect all the fields you wish to map.

![mapping preview](/assets/images/recipes/group-mapping/mapping-preview.png)
*Data mapping preview*

Click on the 'Apply mappings' button and the pills will be automatically mapped in the fields. You can edit any mappings in the recipe.
