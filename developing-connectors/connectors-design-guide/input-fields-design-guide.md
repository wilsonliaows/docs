---
title: Connectors design guide - input fields
date: 2018-09-05 15:30:00 Z
---

# Input fields
There are several components of an input field, as detailed below.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field component</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='#input-field-component---name' target'_blank'>Name</a></td>
      <td>API name of the field. Field label also defaults to this name if undefined.</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---label' target'_blank'>Label</a></td>
      <td>The name of the field that user sees on Workato. Label should match the name of the field that user sees in their app. If undefined, label defaults to the internal API name of the field.</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---type' target'_blank'>Type</a></td>
      <td>Data type of the field. Valid types are: 
      	<ul>
	        <li>string</li>
	        <li>integer</li>
	        <li>number</li>
	        <li>date_time</li>
	        <li>date</li>
	        <li>timestamp</li>
	        <li>boolean</li>
	        <li>object. Must be accompanied with <code>properties</code></li>
	        <li>array. Must be accompanied with <code>properties</code></li>
      	<ul>
      </td>
    </tr>
    <tr>
      <td><a href='#input-field-component---control-type' target'_blank'>Control type</a></td>
      <td>The UI component that is used by the field. Valid control types are:
      	<ul>
      		<li>text</li>
      		<li>text-area</li>
      		<li>plain-text</li>
      		<li>plain-text-area</li>
      		<li>number</li>
      		<li>url</li>
      		<li>select</li>
      		<li>checkbox</li>
      		<li>multiselect</li>
      		<li>date</li>
      		<li>date_time</li>
      		<li>email</li>
      		<li>subdomain</li>
      		<li>static-list</li>
      	</ul>
      </td>
    </tr>
    <tr>
      <td><a href='#input-field-component---hint' target'_blank'>Hint</a></td>
      <td>Elaboration on the input field. Some common hints:
      	<ul>
      		<li>Description of the field from the API documentation</li>
      		<li>Field clarification, e.g. "ID of the record to update"</li>
      		<li>Valid values, e.g. "Valid values are <b>High</b>, <b>Medium</b> and <b>Low</b>"</li>
      		<li>Input precision, e.g. "Express percentage out of 100, e.g. <b>25</b> would be <b>25%</b>"</li>
      		<li>Case sensitivity, e.g. "Provide case sensitive name of file to search for"</li>
      		<li>Default values, e.g. "If left blank, filename defaults to the uploaded document name"</li>
      		<li>A how-to example, e.g. "Use a SOQL query like <b>StageName = 'Closed Won'</b>"</li>
      	</ul>
      </td>
    </tr>
    <tr>
      <td><a href='#input-field-component---optional-flag' target'_blank'></a>Optional flag</td>
      <td>Boolean that decides whether the input field is marked `(Required)` or `(Optional)`</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---default' target'_blank'></a>Default</td>
      <td>Provides a default value for the input field. Set a default if the field is commonly used and there is a common value for most use cases.</td>
    </tr>
  </tbody>
</table>

## Input field component - name
This needs to be the exact API name of the field, as specified in the API documentation.

Taking the Greenhouse Harvest API's add prospect endpoint as example, the first name and last name API names are `first_name` and `last_name`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We therefore define our input fields as the following:

```
{ name: "first_name" },
{ name: "last_name" }
```

Labels for input fields default to the API name if undefined. Workato titleizes API names and converts underscores to spaces. The above definition will generate the following input fields.

![Input fields first name and last name with Workato generated labels](/assets/images/connectors-design-guide/input-fields-names.png)
*Input fields first name and last name with Workato generated labels*

The icon on the leftmost side of the field ("ABC") signifies that this field has a control type `string`. If undefined, the data type defaults to `string` and the control type defaults to `text`, as that is the most common input field definition.

## Input field component - label
This should be the name that an app user sees when logged into their application. This defaults to the API name if undefined. Workato titleizes API names and converts underscores to spaces.

Taking the Greenhouse example of adding a prospect, we see that the fields are named exactly like their API names.

![Greenhouse input fields when adding prospect](/assets/images/connectors-design-guide/greenhouse-add-prospect-screen.png)
*Greenhouse input fields when adding prospect*

In this case, we technically don't have to define the labels as they default to the right labels, but we can go ahead and add labels to the fields definition anyway.

```
{ name: "first_name", label: "First name" },
{ name: "last_name", label: "Last name" }
```

The above definition will generate the following input fields.

![Input fields first name and last name with Workato generated labels](/assets/images/connectors-design-guide/input-fields-labels.png)
*Input fields first name and last name with Workato generated labels*

## Input field component - type
This needs to be the data type of the field, as specified in the API documentation.

Taking the Greenhouse Harvest API's add prospect endpoint as example, the first name and last name are of type `string`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can therefore define the fields as:

```
{ name: "first_name", type: "string" },
{ name: "last_name", type: "string" }
```

This won't affect how the input fields show up in Workato, but it affects how the values in these fields are processed and handled by Workato and the app, so they should be defined correctly.

## Input field component - control type
The control type defines the Workato UI controls and affects how a user can interact with the field.

The following lists the typical control type for each data type. You can find further elaboration about control types [here](/developing-connectors/sdk/object-definition.html#control-types).

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Data type</th>
        <th>Control type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>string</td>
      <td>
      	<ul>
      		<li>text</li>
      		<li>text-area</li>
      		<li>plain-text</li>
      		<li>plain-text-area</li>
      		<li>url</li>
      		<li>email</li>
      		<li>subdomain</li>
      	</ul>
      </td>
    </tr>
    <tr>
      <td>integer</td>
      <td>number</td>
    </tr>
    <tr>
      <td>number</td>
      <td>number</td>
    </tr>
    <tr>
      <td>date_time</td>
      <td>date_time</td>
    </tr>
    <tr>
      <td>date</td>
      <td>date</td>
    </tr>
    <tr>
      <td>timestamp</td>
      <td>date_time</td>
    </tr>
    <tr>
      <td>boolean</td>
      <td>checkbox</td>
    </tr>
    <tr>
      <td>object</td>
      <td>Not applicable</td>
    </tr>
    <tr>
      <td>array</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

The control types select, multiselect and static lists can be used for all data types. These control types generate a picklist. However, we recommend that a text control type toggle be added to these picklist control types, so that a user is able to use a datapill if needed. This is because, in a recipe, data tends to be variable instead of hardcoded, e.g. a **Create issue** action usually creates issues with a priority that depends on the source, not a hardcoded priority of **Low** every time.

Taking the Greenhouse Harvest API's add prospect endpoint as example, the first name and last name are of type `string`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

As we won't expect the names to be too long, we can use the `text` control type for the field. We can define the fields as:

```
{ name: "first_name", control_type: "text" },
{ name: "last_name", control_type: "text" }
```

The above definition will generate the following fields.

![Input fields first name and last name as text control types](/assets/images/connectors-design-guide/input-fields-control-types.png)
*Input fields first name and last name as text control types*

## Input field component - hint
Elaboration on the input field. Typically a maximum of 2 lines per input field. If more help is needed, provide a link to a documentation article, support article, or to the API documentation.

Some common hints:
- Description of the field from the API documentation
- Field clarification, e.g. "ID of the record to update"
- Valid values, e.g. "Valid values are **High**, **Medium** and **Low**"
- Input precision, e.g. "Express percentage out of 100, e.g. **25** would be **25%**"
- Case sensitivity, e.g. "Provide case sensitive name of file to search for"
- Default values, e.g. "If left blank, filename defaults to the uploaded document name"
- A how-to example, e.g. "Use a SOQL query like **StageName = 'Closed Won'**"

Taking the Greenhouse Harvest API's add prospect endpoint as example, there is not much limitations or complexity with the first name and last name fields.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can take the API description to be the hint.

```
{ name: "first_name", hint: "The prospect’s first name" },
{ name: "last_name", hint: "The prospect’s last name" }
```

The above definition will generate the following fields.

![Input fields first name and last name with hints](/assets/images/connectors-design-guide/input-fields-hints.png)
*Input fields first name and last name with hints*

## Input field component - optional flag
The optional flag allows you to mark input fields as optional or required. This should correspond with the API documentation, and required fields in the API request should be marked as `optional:false`. If this flag is undefined, field will be marked optional.

Users will not be able to start a recipe if a required field has no data or value at design-time. If a field is marked optional but is actually required, the request will throw an error at run-time if no value is provided.

Taking the Greenhouse Harvest API's add prospect endpoint as example, we see that first and last name are required fields.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can mark them as `optional: false`.

```
{ name: "first_name", optional: false },
{ name: "last_name", optional: false }
```

The above definition will generate the following fields.

![Input fields first name and last name marked required](/assets/images/connectors-design-guide/input-fields-optional-flag.png)
*Input fields first name and last name marked required*

There are cases where either one or another field is required, e.g. when creating a customer, either provide a **Company name** or the **Full name**. In such cases, both fields should be marked optional, and the hints for both fields should explain that either one or the other field should contain input data.

There are some cases where fields are only required if you wish to create an associated object, e.g. when creating an invoice, line items may be optional. But if user wishes to create a line item, the item code, price and quantity is required. In such cases, these fields should be marked optional, but the hints for these fields should explain that they are required in order to create a line item.

## Input field component - default
Provides a default value for the input field. Set a default if the field is commonly used, and there is a common value for most use cases. When a default is set, the input field behaves as if it has a `sticky:true` flag, and shows up on the form when the action is selected. If the field is not commonly used, we don't have to set a default for it - this is so that it won't appear on the form and add unnecessary clutter.

Taking the Greenhouse example of adding a prospect, we see that there are 2 fields which may make sense to add a default value to - the `is_private` and `phone_type` fields. We make the former default to "false", and the latter default to "mobile".

```
  { name: "is_private", label: 'Is private?', type: "boolean", control_type: "checkbox", default: "false" },
  { name: "phone_numbers", type: "array", hint: 'List of phone numbers for the prospect', of: "object", properties: [
    { name: "value" },
    { name: "type",
      control_type: "select",
      pick_list: "phone_type",
      default: "mobile",
      toggle_hint: "Select from list",
      toggle_field: {
        name: "type",
        label: "type",
        type: "string",
        control_type: "text",
        toggle_hint: "Use custom value"
      } }
  ] },
```

The above definition will generate the following fields.

![Input fields with default values](/assets/images/connectors-design-guide/input-fields-default.png)
*Input fields with default values*
