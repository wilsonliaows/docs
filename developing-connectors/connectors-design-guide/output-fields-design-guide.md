---
title: Connectors design guide - output fields
date: 2018-09-05 15:30:00 Z
---

# Output fields
Output fields have several components, most of which corresponds directly to visual components on the Workato product.

![Output field components](/assets/images/connectors-design-guide/output-field-component.png)
*Output field components*

The output field components are a subset of the input field components. If you understand how `name`, `label`, `type` and `control type` work for input fields, you will see that they have similar functions in output fields.

We detail the components of an output field below. 

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field component</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='#input-field-component---name'>Name</a></td>
      <td>API name of the field. Datapill label also defaults to this name if undefined.</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---label'>Label</a></td>
      <td>The name of the datapill that user sees on Workato. Label should match the name of the field that user sees in their app. If undefined, label defaults to the internal API name of the field.</td>
    </tr>
    <tr>
      <td><a href='#input-field-component---type'>Type</a></td>
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
      <td><a href='#input-field-component---control-type'>Control type</a></td>
      <td>The UI icon that is used by the datapill. Valid control types are:
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
  </tbody>
</table>

## Output field component - name
This needs to be the exact API name of the field, as specified in the API documentation.

Taking the [Greenhouse Harvest API's add prospect endpoint](https://developers.greenhouse.io/harvest.html?ruby#post-add-prospect) as example, the first name and last name API names are `first_name` and `last_name`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We therefore define our output fields as the following:

```
{ name: "first_name" },
{ name: "last_name" }
```

Labels for output fields default to the API name if undefined. Workato titleizes API names and converts underscores to spaces. The above definition will generate the following output fields.

![Output fields first name and last name with Workato generated labels](/assets/images/connectors-design-guide/output-fields-names.png)
*Output fields first name and last name with Workato generated labels*

The icon on the leftmost side of the datapill ("ABC") signifies that this field has a control type `text`. If undefined, the data type defaults to `string` and the control type defaults to `text`, as that is the most common input field definition.

The data in italics on the right are sample data retrieved from the user's connected application - in this example, the Greenhouse app. We cover sample data in a subsequent section.

## Output field component - label
This should be the name that an app user sees when logged into their application. This defaults to the API name if undefined. Workato titleizes API names and converts underscores to spaces.

Taking the Greenhouse example of adding a prospect, we see that the fields are named exactly like their API names.

![Output fields first name and last name with Workato generated labels](/assets/images/connectors-design-guide/output-fields-names.png)
*Output fields first name and last name with Workato generated labels*

In this case, we technically don't have to define the labels as they default to the right labels, but we can go ahead and add labels to the fields definition anyway.

```
{ name: "first_name", label: "First name" },
{ name: "last_name", label: "Last name" }
```

## Output field component - type
This needs to be the data type of the field, as specified in the API documentation.

Taking the [Greenhouse Harvest API's add prospect endpoint](https://developers.greenhouse.io/harvest.html?ruby#post-add-prospect) as example, the first name and last name are of type `string`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

We can therefore define the fields as:

```
{ name: "first_name", type: "string" },
{ name: "last_name", type: "string" }
```

This determines how the data is processed by Workato for subsequent recipe steps, so they should be defined correctly.

![Output fields first and last name with Workato generated control types](/assets/images/connectors-design-guide/output-fields-control-types.png)
*Output fields first and last name with Workato generated control types*

If the control type is not specified, it defaults to the right control type for the data type defined. For strings, it defaults to `text`.

## Output field component - control type
The control type defines the icon that shows up next to the datapill and affects how subsequent recipe steps will handle data from the datapill.

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

Taking the [Greenhouse Harvest API's add prospect endpoint](https://developers.greenhouse.io/harvest.html?ruby#post-add-prospect) as example, the first name and last name are of type `string`. The right control type is therefore `text`.

![Greenhouse add prospect API endpoint](/assets/images/connectors-design-guide/greenhouse-add-prospect-api.png)
*Greenhouse add prospect API endpoint*

```
{ name: "first_name", control_type: "text" },
{ name: "last_name", control_type: "text" }
```

The above definition will generate the following fields.

![Output fields first and last name with Workato generated control types](/assets/images/connectors-design-guide/output-fields-control-types.png)
*Output fields first and last name with Workato generated control types*

If the control type is not specified, it defaults to the right control type for the data type defined. For strings, it defaults to `text`.

## Output field component - sample data
The sample data component retrieves actual data from users' connected apps and displays it to give users a better idea of what each field is.

![Output fields first and last name with sample data from an actual Greenhouse prospect record](/assets/images/connectors-design-guide/output-fields-sample-data.png)
*Output fields first and last name with sample data from an actual Greenhouse prospect record*
