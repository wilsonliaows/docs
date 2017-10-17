# Analytics Cloud

Previously known as Wave Analytics, Analytics Cloud is a cloud based analytic tool that creates powerful visualizations and dashboards from large volumes of enterprise data.

Workato makes use of the standard Saleforce connector to upload data from external sources like ERP systems or Databases.

## Connector information
Refer to Salesforce connector page for connector information

## Dataset


## Usage
### External Data Object
An External Data Object (InsightsExternalData) is the Salesforce implementatino of transient data. THis does not contribute to the total data storage. This acts as the “Header row” for the dataset.

More information available in [Analytics External Data API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldatapart.htm) 

## External Data Object Metadata
Data uploads must be accompanied by JSON Metadata definition and base64 encoded. More information available in [External Data Format Reference](https://developer.salesforce.com/docs/atlas.en-us.206.0.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/bi_ext_data_schema_reference.htm)

Example Dataset
```csv
Id,Email,Name
123,john@doe.com,John Doe
124,marry@poppins.com,Mary Poppins
```

CSV data guidelines available [here](https://developer.salesforce.com/docs/atlas.en-us.206.0.bi_dev_guide_ext_data_format.meta/bi_dev_guide_ext_data_format/bi_ext_data_schema_overview.htm)

Metadata JSON
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

### External Data Part Object
Create InsightsExternalDataPart objects (each <10MB)
External data must be in form of CSV file and base64 encoded. Documentation
After successful upload, Update InsightsExternalData.Action to “process” to begin processing


## Example Recipe
Let's put everything together into a [recipe]().