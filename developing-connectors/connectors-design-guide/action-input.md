---
title: Connectors design guide - action input
date: 2018-09-05 15:30:00 Z
---

# Action input
Actions take in data inputs via input fields. There are some common types of action input fields as detailed in the following table. Input fields should generally follow the [input fields design guide](/developing-connectors/connectors-design-guide/input-fields-design-guide.md).

![Input fields in an action](/assets/images/connectors-design-guide/action-input-fields.png)
*Input fields in an action*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input fields</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#action-input---value-fields">Value fields</a></td>
      <td>
      	These are the fields that write values into the app, and are the most basic input fields for an action.
      </td>
    </tr>
    <tr>
      <td><a href="#action-input---metafields">Action metafields</a></td>
      <td>These fields affect how the action behaves in Workato, and does not directly translate into values written into the app. These are typically for complex actions like bulk actions, asynchronous actions, actions that involve CSV files, etc.
      </td>
    </tr>
    <tr>
      <td><a href="#action-input---inputoutput-definition-fields">Action input/output definition fields</a></td>
      <td>
      	Some APIs allow you to define the fields you wish to use as well as the response that comes back. In cases where your records are large and have many fields typically not used in the recipe, you can give users the option to optimize their responses to a subset of output fields. This helps in API performance and efficiency.
      	<br>
      	In addition, you can also employ these output definition fields to enable users to retrieve join records for advanced use cases.
      </td>
    </tr>
  </tbody>
</table>

## Action input - value fields
Value fields pass values into the app, and are the most basic input fields for an action.

For example, when creating or updating a case record in Salesforce, you will need to pass in values for the case subject, description, associated account tied to the case, etc. These values get written into Salesforce.

![Value fields in the Salesforce create record action will create a case with case origin = Web, an account ID and description](/assets/images/connectors-design-guide/action-input-value-fields-create.png)
*Value fields in the Salesforce create record action will create a case with case origin = Web, an account ID and description*

Apart from creating or updating new records, users are also passing values into the app when doing searches. For example, when searching for an opportunity record in Salesforce, you will need to pass in values for the search criteria.

![Value fields in the Salesforce search record action will search for cases with a specific account ID](/assets/images/connectors-design-guide/action-input-value-fields-search.png)
*Value fields in the Salesforce search record action will search for cases with a specific account ID*

## Action input - metafields
These fields affect how the action behaves in Workato, and does not directly translate into values written into the app. These are typically for complex actions like bulk actions, asynchronous actions, actions that involve files, etc.

### Action input - metafields for CSV actions
For CSV file import actions, these fields enable you to describe your file so that Workato understands your CSV file schema and can parse it correctly.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>CSV file import metafields</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File contents</td>
      <td>
      	This is the file contents to be imported.
      </td>
    </tr>
    <tr>
      <td>Column separator</td>
      <td>
      	This is the delimiter that separates the imported file columns. Should support these delimiters:
      	<ul>
      	  <li>comma</li>
      	  <li>tab</li>
      	  <li>semi-colon</li>
      	  <li>pipe</li>
      	  <li>tab</li>
      	  <li>space</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Contains header line?</td>
      <td>
      	Boolean field. If <b>yes</b>, the Workato action should skip the first row in the imported CSV file so as to process only data rows. If <b>no</b>, the Workato action should process all rows in the imported CSV file.
      </td>
    </tr>
    <tr>
    	<td>Column names</td>
    	<td>
    		Describe the names of the imported file columns in order, either by uploading a CSV file or pasting a sample of the CSV file. This allows Workato to understand and generate the schema for use in the action as well as subsequent actions.
    	</td>
    </tr>
  </tbody>
</table>

These fields should be grouped into a logical section as shown below.

![CSV import metafields that describes the CSV file to import](/assets/images/connectors-design-guide/csv-import-action-metafields.png)
*CSV import metafields that describes the CSV file to import*

For CSV file export actions, these fields allow you to define the format you want your exported file to be in.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>CSV file export metafields</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fields</td>
      <td>
      	These are the columns that will be created in your exported file.
      </td>
    </tr>
    <tr>
      <td>Column separator</td>
      <td>
      	This is the delimiter that will separate the exported file columns. Should support these delimiters:
      	<ul>
      	  <li>comma</li>
      	  <li>tab</li>
      	  <li>semi-colon</li>
      	  <li>pipe</li>
      	  <li>tab</li>
      	  <li>space</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

These fields should be grouped into a logical section as shown below.

![CSV export metafields that describes the CSV file to export](/assets/images/connectors-design-guide/csv-export-action-metafields.png)
*CSV export metafields that describes the CSV file to export*

### Action input - metafields for asynchronous actions
Most actions in Workato are synchronous, i.e. the recipe waits for the action to complete in the app and return with a response before moving on to the next recipe step.

For asynchronous actions, there should be metafields to enable users to specify whether the action should behave asynchronously (moving on to the next action as soon as all data have been sent to the app) or synchronously (moving on to the next action only when the app has processed all the data and responded with the status).

![Metafields for asynchronous actions enabling user to define action behavior](/assets/images/connectors-design-guide/metafields-for-bulk-actions.png)
*Metafields for asynchronous actions enabling user to define action behavior*

## Action input - input/output definition fields
In Workato, most actions return the full record, with all fields of the record. However, for some apps where users might have hundreds to thousands of standard and custom fields, we can allow users the option of optimizing their API traffic by fetching only the fields they want to use in their integration.

![User can select the fields they're interested in using from a multiselect picklist](/assets/images/connectors-design-guide/output-fields-definition.gif)
*User can select the fields they're interested in using from a multiselect picklist*

Only the selected fields will be generated in the output datatree.

![Output datatree generated from the selected fields](/assets/images/connectors-design-guide/optimized-output-datatree.png)
*Output datatree generated from the selected fields*
