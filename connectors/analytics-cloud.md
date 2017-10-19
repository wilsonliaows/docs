# Analytics Cloud

Previously known as Wave Analytics, Analytics Cloud is a cloud based analytic tool that creates powerful visualizations and dashboards from large sets of enterprise data.

Workato makes use of the standard Saleforce connector to upload data from external sources like ERP systems or Databases.

## Connector information
Refer to [Salesforce connector](salesforce.md) page for connector information.

## Usage
### Insights External Data and Insights External Data Part
The InsightsExternalData object allows you to upload data from external sources. This object is used to provide `metadata`, and manage the upload process actions like `start`, `cancel`, `cleanup` and `check status`.

The InsightsExternalData object is used togeher with the InsightsExternalDataPart object (which contains one or more subsets of the entire data to be uploaded). Together, they can be used to programmatically upload large datasets in parts. Finally, an upload is triggered to process a the data parts into a dataset in your Analytics Cloud instance.

More information available in [Analytics External Data API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldatapart.htm) 

## Insights External Data Object
Data uploads must be accompanied by JSON Metadata definition and base64 encoded. More information available in [External Data Format Reference](https://developer.salesforce.com/docs/atlas.en-us.206.0.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/bi_ext_data_schema_reference.htm)


### Data Format
Example Dataset in CSV format.

```csv
Id,Email,Name
123,john@doe.com,John Doe
124,marry@poppins.com,Mary Poppins
```

CSV data guidelines available [here](https://developer.salesforce.com/docs/atlas.en-us.206.0.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/bi_ext_data_schema_overview.htm)

### Metadata JSON
```json
{
  "fileFormat": {
    "charsetName": "UTF-8",
    "fieldsEnclosedBy": "\"",
    "fieldsDelimitedBy": ",",
    "numberOfLinesToIgnore": 1
  },
  "objects": [
    {
      "connector": "Wave_Analytics_Sample",
      "description": "",
      "fullyQualifiedName": "Lead",
      "label": "Lead",
      "name": "Lead",
      "fields": [
        {
          "fullyQualifiedName": "Lead.Id",
          "label": "Lead ID",
          "name": "Id",
          "isSystemField": false,
          "isUniqueId": true,
          "isMultiValue": false,
          "type": "Text"
        },
        {
          "fullyQualifiedName": "Lead.Email",
          "label": "Lead Email",
          "name": "Email",
          "isSystemField": false,
          "isUniqueId": false,
          "isMultiValue": false,
          "type": "Text"
        },
        {
          "fullyQualifiedName": "Lead.Name",
          "label": "Lead Name",
          "name": "Name",
          "isSystemField": false,
          "isUniqueId": false,
          "type": "Text"
        }
      ]
    }
 ]
}

```

### Insights External Data Part Object

Requirements:
- Create InsightsExternalDataPart objects (<10MB each)
- External data must be in form of CSV file and base64 encoded. Documentation

### Initiate data upload
After successfully completing all desired Insights External Data Parts, Update `Requested Action` field in the InsightsExternalData record to "Process".

### Managing upload process
After initiating a data upload process (updating `Requested Action` field to "Process"), no more edits are allowed on the objects, except to request a cancelation.

## Example Recipe
Let's put everything together into a [recipe](https://www.workato.com/recipes/607500).

![Analytics Cloud sample recipe](/assets/images/analytics_cloud/analytics-cloud-sample-recipe.png)

This recipe performs a daily upload from SQL Server database to a dataset in Analytics Cloud. The recipe can be broken down to the various steps mentioned before.
1. Retrieving data from external data source
2. Defining a metadata JSON
3. Preparing data from external data source into CSV format
4. Create an External Data record
5. Upload Insights External Data Part(s)
6. Initial upload process by updating `Requested Action` field to "Process" in External Data record.
