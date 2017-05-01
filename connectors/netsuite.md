---
title: NetSuite
date: 2017-04-28 06:15:00 Z
---

# NetSuite

## Working with the NetSuite connector

### Using the New saved search result for object trigger
The **New saved search result for object** trigger retrieves new records that meet the saved search's criteria, e.g. for a saved search that fetches customer records of industry type **Hardware**, new customers created of the industry type **Hardware** will be picked up as a trigger event.

Existing customers whose industry type is changed to **Hardware** will also be picked up as a trigger event if their **Date created** value is valid for the recipe (falls after the **From** date specified in the trigger).

To ensure the trigger works, we need to make sure that the columns **Internal ID** and **Date created** are configured as result columns in the saved search. To do this, navigate to the saved search page to edit it.

![Edit saved search](/assets/images/connectors/netsuite/edit-saved-search.gif)
*Edit the saved search*

Navigate to the **Results** page's **Columns** section, and add the two fields to the list of columns if it's not there.

![Add Internal ID and Date created columns in saved search](/assets/images/connectors/netsuite/new-results-in-saved-search.gif)
*Add Internal ID and Date created columns in saved search for New trigger*

Once this setup has been done, we can proceed to configure the trigger. This configuration is similar to that for **New/updated saved search result** trigger:
1) Select the object type we wish to retrieve the saved searches for. In our case, we selected the customer object.
2) Once the object type has been selected, select the saved search to listen to for new records.
3) Specify the **From** date. Only records created after this **From** date will be retrieved by the recipe. This means that, when an existing record meets the saved search criteria, it will only be picked up by the recipe if it has a **Date created** value after the **From** value.

![Configure new saved search results trigger](/assets/images/connectors/netsuite/configure-new-saved-search-results-trigger.gif)
*Configure the new saved search results trigger*

### Using the New/updated saved search result for object trigger
The **New/updated saved search result for object** trigger retrieves new and updated records that meet the saved search's criteria, e.g. for a saved search that fetches customer records of industry type **Hardware**, new or updated customers of the industry type **Hardware** will be picked up as a trigger event.

Existing customers whose industry type is changed to **Hardware** will also be picked up as a trigger event.

To ensure the trigger works, we need to make sure that the columns **Internal ID** and **Last modified** are configured as result columns in the saved search. To do this, navigate to the saved search page to edit it.

![Add Internal ID and Last modified columns in saved search](/assets/images/connectors/netsuite/edit-saved-search.gif)
*Add Internal ID and Last modified columns in saved search for New/updated trigger*

Once this setup has been done, we can proceed to configure the trigger. This configuration is similar to that for **New saved search result** trigger:
1) Select the object type we wish to retrieve the saved searches for. In our case, we selected the customer object.
2) Once the object type has been selected, select the saved search to listen to for new records.
3) Specify the **From** date. Only records created or updated after this **From** date will be retrieved by the recipe.

![Configure new/updated saved search results trigger](/assets/images/connectors/netsuite/configure-updated-saved-search-result-trigger.gif)
*Configure the new/updated saved search results trigger*