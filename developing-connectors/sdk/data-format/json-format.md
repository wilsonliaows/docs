# JSON data format

Default expected data format is JSON. Action and trigger inputs will be passed as JSON payloads if no request format is specified.

Similarly, if no response format is specified, SDK will parse body as JSON. JSON parser error will be raised otherwise.

## Example action:
```ruby
post_message: {
  input_fields: lambda do |object_definitions|
    object_definitions['message_detail'].only('roomId', 'text', 'toPersonEmail', 'toPersonId')
  end,
  
  execute: lambda do |connection,input|
    post("https://api.ciscospark.com/v1/messages", input)
  end,
  
  output_fields: lambda do |object_definitions|
    object_definitions['message_detail']
  end
}
```

### Request

```
POST https://api.ciscospark.com/v1/messages
Accept  application/json
Content-Type  application/json
Authorization Bearer ---
```

Request body:
```
{"roomId":"Y2lzY29zcGFyazovL3VzL1JPT00vN2I0N2UxMjAtMmNlNS0xMWU2LTgwNmEtODcxN2MxNDgxM2Zm","text":"testing"}
```

### Response

Status: `200 OK`

Response body:
```
{"id":"Y2lzY29zcGFyazovL3VzL01FU1NBR0UvMTUyYzVjMzAtMTIyOC0xMWU3LTgxYzctNWYyZmJlNmUxZmYw","roomId":"Y2lzY29zcGFyazovL3VzL1JPT00vN2I0N2UxMjAtMmNlNS0xMWU2LTgwNmEtODcxN2MxNDgxM2Zm","roomType":"group","text":"testing","personId":"Y2lzY29zcGFyazovL3VzL1BFT1BMRS9mMmM2Y2NiNi0xYTc4LTQ3NzQtYjZjNC04OWI2YWE0ZTcxOWE","personEmail":"eeshan@workato.com","created":"2017-03-26T13:28:22.131Z"}
```
