# Custom Authentication

Occasionally, the API requires an authentication mechanism different from the typical ones. The `custom_auth` type can be used in this case. The custom authentication provides you with the ability to do the following:

- acquire and/or refresh credentials
- Define when credentials should be refreshed
- Store credentials data not provided directly by user (obtained from API requests)

## Example custom authentication

This example connects to [Zoho CRM](https://www.zoho.com/crm/help/api/using-authentication-token.html)

```ruby
connection: {
  fields: [
    {
      name: 'email'
    },
    {
      name: 'password',
      control_type: 'password'
    }
  ],

  authorization: {
    type: 'custom_auth',

    acquire: lambda do |connection|
      {
        authtoken:
          get('https://accounts.zoho.com/apiauthtoken/nb/create').
          params('SCOPE' => 'ZohoCRM/crmapi',
                 'EMAIL_ID' => connection['email'],
                 'PASSWORD' => connection['password'],
                 'DISPLAY_NAME' => 'Workato test adapter').
          response_format_raw[/(?<=AUTHTOKEN=)\h+/]
      }
    end,

    refresh_on: [
      # Three ways to match:
      401, # Integer HTTP response code.
      'Unauthorized', # String that equals the whole body or whole title of the error response.
      /Unauthorized/, # Regex that matches with the body or title of the error response.
      /Invalid Ticket Id/ # The actual "signal" that we need to re-authorize in Zoho.
    ],

    detect_on: [
      # Two ways to match: String (matches whole body of the response), and:
      /^\{"response":\{"error"/, # Regex that matches the body of the response.
    ],

    apply: lambda do |connection|
      params(authtoken: connection['authtoken'])
    end
  }
}
```

## apply

Synonym of the `credentials` block: Basically how to apply the credentials to an action/trigger/test request. All requests made in actions, triggers, tests and pick lists will be applied with the credentials defined here.

## acquire

Context is same as an action's execute block. You can write the require code here to acquire and store relevant credentials data to be used in the `apply` block.
```ruby
acquire: lambda do |connection|
  {
    authtoken:
      get('https://accounts.zoho.com/apiauthtoken/nb/create').
      params('SCOPE' => 'ZohoCRM/crmapi',
             'EMAIL_ID' => connection['email'],
             'PASSWORD' => connection['password'],
             'DISPLAY_NAME' => 'Workato test adapter').
      response_format_raw[/(?<=AUTHTOKEN=)\h+/]
  }
end
```

The output of this block should be a **hash**, which will be merged with the original connection object.

This API request to the Auth token endpoint returns a raw text response with the Auth token like this:
```
AUTHTOKEN=bad18eba1ff45jk7858b8ae88a77fa30
RESULT=TRUE
```

As a result, the connection object is merged with this value after executing the `acquire` block.

Original `connection` object
```json
{
  "email": "john@gmail.com",
  "password": "pinkfloyd"
}
```
`connection` object after executing `acquire` block
```json
{
  "email": "john@gmail.com",
  "password": "pinkfloyd",
  "authtoken": "SAMPLE_TOKEN"
}
```

This new connection object will be passed into all actions, triggers, test and pick lists as the `connection` argument.

> The "apply" block will not be applied to any requests made in "acquire". So you will have to include the required credentials for a successful API request here.

## refresh_on

This is an optional array of **signals** that is used to identify a need to re-acquire credentials . When an erroneous response is received (400, 401, 500...), the SDK framework checks it against this list of signals. If a match is found, it triggers a re-authorization (execute `acquire`).

This list is optional. If not defined, will default to one attempt at re-acquiring credentials for all errors.

```ruby
refresh_on: [
  401,
  'Unauthorized',
  /Unauthorized/,
  /Invalid Ticket Id/
]
```

The example here shows multiple ways that we can define "signals" to watch.

- `401`: The response status code
- `"Unauthorized"`: The exact string matching the whole body or title of response
- `/Unauthorized/`: Regex matching the body or title of response
- `/Invalid Ticket Id/`: The actual "message" to watch for

## detect_on

Certain APIs don't signal errors with explicit response status code like a `401`. Instead, they return a `200` (pseudo successful response) with a payload that signals the error.

For such APIs, an error (expired credentials, bad requests etc.) will not be picked up since it is interpreted as a successful request (Status code `200`). A match with the signals defined here will raise an error.

When there is a match here, two things can happen.

Firstly, there can also be a match against `refresh_on` signals. When that happens, a re-authorization is triggered (acquire block is executed) instead of raising an error. In this case, `detect_on` is used to match errors hidden behind responses with status code `200`, then used to identify that a credentials refresh is required.

If a match here does not match any of the signals defined in `refresh_on`, an error will be raised.

```ruby
detect_on: [
  "sample error message",
  /^\{"response":\{"error".+$/
]
```

The example here shows multiple ways that we can define "signals" to watch

- `"sample error message"`: The exact string matching the whole body of response
- `/^\{"response":\{"error".+$/`: Regex matching the body of response

This list is optional. If not defined, pseudo successful response will be treated as a successful request instead of raising exceptions. Note: output values of trigger and action will be affected.
