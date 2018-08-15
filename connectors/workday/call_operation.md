---
title: Workato connectors - Workday Call operation
date: 2017-11-05 09:00:00 Z
---

# Call operation
This action makes use of the Workday Web Services (WWS) to execute SOAP-based operations in a connected Workday instance.

The full set of operations available can be found on [Workday Web Services Directory](https://community.workday.com/sites/default/files/file-hosting/productionapi/versions/v29.0/index.html).

## Version
The Workday connector works with **v29.0** of WWS.

## Input
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='#operation'>Operation</a></td>
      <td>
        Name of the Workday Web Services operation to execute. This must be selected before the rest of the input fields can be determined.
      </td>
    </tr>
    <tr>
      <td>Data</td>
      <td>
        Data to be sent with the operation. This set of input fields depends on the selected operation.
      </td>
    </tr>
    <tr>
      <td><a href='#fields-with-attributes'>Fields with attributes</a></td>
      <td>
        Select the fields that require values assigned to attributes. These are attributes that will be included in the <b>XML</b> tag of the selected field.<br><br>
        This field is present only for operations that have at least one field with attributes.
      </td>
    </tr>
    <tr>
      <td><a href='#fields-with-multiple-values'>Fields with multiple values</a></td>
      <td>
        Select the fields that need to be repeated in the operation data.<br><br>
        This field is present only for operations that have at least one field that can be repeated.
      </td>
    </tr>
  </tbody>
</table>

### Operation
![Select Maintain Contact Information](/assets/images/workday/select_operation.png)
*Select Maintain Contact Information*

This is a full list of all operations in Workday Web Services. To find the operation that you want, simply type key words to filter and narrow down the list of possible matches.

In this example, we are looking for the [Maintain Contact Information](https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v29.0/Maintain_Contact_Information.html) operation.

### Fields with attributes
![Selecting Email Address Data to include attribute values](/assets/images/workday/select_fields_with_attributes.png)
*Selecting Email Address Data to include attribute values*

Suppose we want to add new email addresses to a particular contact without replacing any existing email addresses. This can be done by setting the **Do_Not_Replace_All** attribute of the **Email address data** field to `false`.

Simply select `Maintain Contact Information Data/Worker.../Email Address Data`. This will generate all possible attributes for the **Email address data** field, including **Do_Not_Replace_All**.

### Fields with multiple values
![Selecting Email Address Data field to be repeated](/assets/images/workday/select_fields_with_multiple_values.png)
*Selecting Email Address Data field to be repeated*

Suppose that our use case may involve more than one email address. To support this, we will have to send multiple email addresses in a single operation.

Simply select `Maintain Contact Information Data/Worker.../Email Address Data`. This will change the **Email address data** into a list type input field. With that, you can map one or more email addresses using a list.

## Output
Output fields will depend on the selected operation.
