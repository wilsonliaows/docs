# Form URL Encoded

This request is declared in the execute portion of the connector actions framework. This is an additional request option that is appended to the back of the base request.

## Example
HubSpot has an endpoint to send form submission data to HubSpot. This [endpoint](https://developers.hubspot.com/docs/methods/forms/submit_form) accepts a form urlencoded request.

curl command:
```shell
curl -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'firstname=TestContact&lastname=FormSub&email=formsub@hubspot.com&newcustomproperty=testing&hs_context=%7B%22hutk%22%3A%2260c2ccdfe4892f0fa0593940b12c11aa%22%2C%22ipAddress%22%3A%22192.168.1.12%22%2C%22pageUrl%22%3A%22http%3A%2F%2Fdemo.hubapi.com%2Fcontact%2F%22%2C%22pageName%22%3A%22Contact%2BUs%22%2C%22redirectUrl%22%3A%22http%3A%2F%2Fdemo.hubapi.com%2Fthank-you%2F%22%7D'
  https://forms.hubspot.com/uploads/form/v2/12345/67890 \
```

Workato:
```ruby
{
  title: "HubSpot",

  connection: {...},

  actions: {
    submit_form: {
      input_fields: lambda do
        [
          { name: "portal_id", type: :string },
          { name: "form_guid", type: :string },
          { name: "hutk", type: :string },
          { name: "ipAddress", type: :string },
          { name: "pageUrl", type: :string },
          { name: "pageName", type: :string },
          { name: "redirectUrl", type: :string }
        ]
      end,

      execute: lambda do |connection, input|
        post("https://forms.hubspot.com/uploads/form/v2/#{{input['portal_id']}}/#{{input['form_guid']}}").
          request_format_www_form_urlencoded.
          request_body(
            hutk: input['hutk'],
            ipAddress: input['ipAddress'],
            pageUrl: input['pageUrl'],
            pageName: input['pageName'],
            redirectUrl: input['redirectUrl'],
          )
      end
    },

    output_fields: {...}
  },
```
