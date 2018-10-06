---
title: Connectors design guide - action output
date: 2018-09-05 15:30:00 Z
---

# Action output
Typically, all fields returned in the API response should be included in the output schema. This typically includes all the record fields. In this way, they will show up as datapills in the datatree, and be available for use in the recipe.

![Action output datatree for create Greenhouse prospect action returns a single record](/assets/images/connectors-design-guide/action-output-datatree.gif)
*Action output datatree for create Greenhouse prospect action*

For search actions which return a list of records, the output schema should correspondingly be an array of records.

![Action output datatree for search Salesforce leads action returns a list of records](/assets/images/connectors-design-guide/action-batch-output-datatree.gif)
*Action output datatree for search Salesforce leads action*
