---
title: Salesforce Batch Operations
date: 2018-01-04 06:15:00 Z
---

# Salesforce batch operations

Apart from support for Salesforce [bulk operations](/connectors/salesforce.md#working-with-bulk-data-load-jobs-in-salesforce), Workato has included support for Salesforce **batch** operations, which make use of Salesforce's `sObject Collections` [API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm).

These operations allow the creation and update of up to **2,000 records** at a time. Users should make use of these operations when they are creating or updating smaller batches of Salesforce records, or if they wish to perform multiple operations without using Bulk API.  

The supported operations are:

  - Create records in batches
  - Update records in batches

## Create records in batches

![Create record in batch](/assets/images/salesforce-docs/batch-create-action.png)
*Create records in batches action*

The 'Create records in batches' action allows the creation of up to 2,000 records in a single request. To begin using this action, select the Salesforce object to be created. As shown in the example below, when the 'Contact' object is selected, the list input pill and all the required fields in the object is displayed.

![Select object](/assets/images/salesforce-docs/salesforce-batch-select-object.gif)
*Select Salesforce Contact object*

The list input pill can come from various sources such as a new CSV file in a file storage app (eg. Box, Amazon S3, On-prem files) or a list created with the Lists by Workato application. To learn more on how to use list inputs, refer to the [List Management](/features/list-management.md) documentation.

![Select object](/assets/images/salesforce-docs/salesforce-batch-select-object.png)
*Select list input pill*

Thereafter, in the `Add/remove optional fields` section at the end of the action, proceed to select any additional optional Salesforce fields and map those fields. 

![Select optional fields](/assets/images/salesforce-docs/batch-select-optional-fields.png)
*Select optional fields*

### Advanced configuration

![Advanced configuration](/assets/images/salesforce-docs/batch-advanced-config.png)
*Advanced configuration*

In the advanced configuration section, choose if you want to roll back if the record creation fails. If **Yes**, this is how the roll-back works:

Workato processes in batches of 200 records per batch. So when 1 record in a batch fails, that whole batch will be rolled back, but other batches will not be affected.

For example, if 1000 records are being created, they will be divided into 5 batches of 200 records each. If a record in the 1st batch failed, that entire 1st batch of 200 records will be rolled back. The other 4 batches are not affected and will be processed as normal.

The default, **No**, is the recommended setting. The records that are created successfully will remain created, and the failed records are handled by additional logic in the subsequent recipe steps.


### Output fields

The output fields for this action are split into 2 categories: **Successful records** for the records created in Salesforce and **Failed records** for those that were not created.

Note that in **Failed records**, the Salesforce ID of the object will not be available as an output data pill as no record was created.

#### Successful records

| Output data pill | Description |
|------------------|-------------|
| ID | Internal Salesforce ID of the record created |
| Success | In successful records, this value will always be 'true'|
| List size | Corresponds to the number of successfully created records |

#### Failed records

| Output data pill | Description |
|------------------|-------------|
| Success | In failed records, this value will always be 'false'|
| Errors | An array that contains the **Status code**, **Error message** and **Fields**. Use the information here to determine why the records failed and in error emails.
| List size | Corresponds to the number of records that failed to create |


## Update records in batches

![Create record in batch](/assets/images/salesforce-docs/batch-update-action.png)
*Update records in batches action*

The 'Update records in batches' action allows the update of up to 2,000 records in a single request. To begin using this action, select the Salesforce object to be updated. As shown in the example below, when the 'Contact' object is selected, the list input pill and all the required fields in the object is displayed. In this case, one of the required fields will always be the ID of the Salesforce object to be updated. This means that one column in the list provided must contain the Salesforce ID.

![Select object](/assets/images/salesforce-docs/salesforce-batch-select-object.gif)
*Select Salesforce Contact object*

The list input pill can come from various sources such as a new CSV file in a file storage app (eg. Box, Amazon S3, On-prem files) or a list created with the Lists by Workato application. To learn more on how to use list inputs, refer to the [List Management](/features/list-management.md) documentation.

![Select object](/assets/images/salesforce-docs/salesforce-batch-select-object.png)
*Select list input pill*

Thereafter, in the `Add/remove optional fields` section at the end of the action, proceed to select any additional optional Salesforce fields and map those fields. 

![Select optional fields](/assets/images/salesforce-docs/batch-select-optional-fields.png)
*Select optional fields*

### Advanced configuration

![Advanced configuration](/assets/images/salesforce-docs/batch-advanced-config.png)
*Advanced configuration*

In the advanced configuration section, choose if you want to roll back if the record creation fails. If **Yes**, this is how the roll-back works:

Workato processes in batches of 200 records per batch. So when 1 record in a batch fails, that whole batch will be rolled back, but other batches will not be affected.

For example, if 1000 records are being created, they will be divided into 5 batches of 200 records each. If a record in the 1st batch failed, that entire 1st batch of 200 records will be rolled back. The other 4 batches are not affected and will be processed as normal.

The default, **No**, is the recommended setting. The records that are created successfully will remain created, and the failed records are handled by additional logic in the subsequent recipe steps.

### Output fields

The output fields for this action are split into 2 categories: **Successful records** for the records updated in Salesforce and **Failed records** for those that were not updated.

#### Successful records

| Output data pill | Description |
|------------------|-------------|
| ID | Internal Salesforce ID of the record updated |
| Success | In successful records, this value will always be 'true'|
| List size | Corresponds to the number of successfully updated records |

#### Failed records

| Output data pill | Description |
|------------------|-------------|
| ID | Internal Salesforce ID of the record updated |
| Success | In failed records, this value will always be 'false'|
| Errors | An array that contains the **Status code**, **Error message** and **Fields**. Use the information here to determine why the records failed and in error emails.
| List size | Corresponds to the number of records that failed to update |
