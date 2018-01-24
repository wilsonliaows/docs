# Multipart form

[Multipart form request](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2)  is typically used to send large files and data to a server.

This request is declared in the execute portion of the connector actions framework. This is an additional request option that is appended to the back of the base request.

## Example
IBM Watson has an endpoint to convert a document. This [endpoint](https://www.ibm.com/watson/developercloud/document-conversion/api/v1/#convert-document) accepts a multipart/form-data request.

curl command:
```sh
curl \
  -X POST \
  -u "{username}":"{password}" \
  -F config="{\"conversion_target\":\"answer_units\"}" \
  -F "file=@sample.pdf;type=application/pdf" \
  "https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version=2015-12-15"
```

Workato:
```ruby
{
  title: "IBM Watson",

  connection: {...},

  actions: {
    upload_file: {
      input_fields: lambda do
        [
          { name: "file_name", type: "string" },
          { name: "file_data", type: "string" },
          { name: "conversion_target", type: "string" }
        ]
      end,

      execute: lambda do |connection, input|
        post("https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document").
          params(version: "2015-12-15").
          request_format_multipart_form.
          payload(file: [input['file_data'], 'application/pdf'],
                  file_name: input['file_name'],
                  config: "{\"conversion_target\":\"#{input['conversion_target']}\"}")
      end
    },

    output_fields: {...}
  },
  ...
```
