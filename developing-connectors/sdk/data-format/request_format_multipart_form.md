# Multipart form

[Multipart form request](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2)  is typically used to send large files and data to a server.

This request format can be declared in any blocks (`execute`, `acquire`, `fields` etc.) in your custom adapter code. It should be chained to one of the [base request](../walk-through.md#base-request).

## Example
Let's use the Convert document endpoint in [IBM Watson API](https://www.ibm.com/watson/developercloud/document-conversion/api/v1/#convert-document) as an example. This endpoint accepts a document in multipart/form-data format.

A cURL example looks like this:
```sh
curl \
  https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version=2015-12-15 \
  -X POST \
  -u "{username}":"{password}" \
  -F config="{\"conversion_target\":\"answer_units\"}" \
  -F "file=@sample.pdf;type=application/pdf"
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

In the SDK, notice that the `file` key in the payload takes an array of length 2. This defines the request as form data. The first item in the array is the file data and the second item is the media type (MIME type) of the input file.

Let's break down the cURL command to match each function in Workato:

cURL | Workato
------------ | -------------
`curl https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document?version=2015-12-15 -X POST` | `post("https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document")`
`-u "{username}":"{password}" ` | This is defined in the [connection](../authentication/basic-authentication.md) block and is automatically added onto the outgoing request.
`-F config="{\"conversion_target\":\"answer_units\"}"`<br>`-F "file=@sample.pdf;type=application/pdf"` | `.request_format_multipart_form`<br>`.payload(`<br>&nbsp;&nbsp;&nbsp;&nbsp;`file: [input['file_data'], 'application/pdf'], `<br>&nbsp;&nbsp;&nbsp;&nbsp;`file_name: input['file_name'], `<br>&nbsp;&nbsp;&nbsp;&nbsp;`config: "{\"conversion_target\":\"#{input['conversion_target']}\"}")`
