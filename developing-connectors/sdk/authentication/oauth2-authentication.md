# OAuth 2.0

For a more secure method of authentication, we recommend using [OAuth 2.0](https://tools.ietf.org/html/rfc6749). It is an open standard and is generally a more secure way for users to log into third party websites without exposing their credentials.

There are many variants of the OAuth2 standard. By default, the Workato connector SDK supports the [Authorization Code Grant](https://tools.ietf.org/html/rfc6749#section-4.1) variant.


```ruby
connection: {

  authorization: {
    type: "oauth2",

    authorization_url: lambda do
      "https://www.pushbullet.com/authorize?response_type=code"
    end,

    token_url: lambda do
      "https://api.pushbullet.com/oauth2/token"
    end,

    client_id: "YOUR_PUSHBULLET_CLIENT_ID",

    client_secret: "YOUR_PUSHBULLET_CLIENT_SECRET",

    apply: lambda do |connection, access_token|
      headers("Authorization": "Bearer #{access_token}")
    end
  }
}
```

## Authorization Code Variant
Required components in OAuth 2.0 Authorization Code Grant type connection:

1. type (use 'oauth2')
2. authorization_url
3. token_url
4. client_id and client_secret
5. apply

Redirect URI will be appended to the authorization request by the framework, so there is no need to include it. If the application requires that you register the redirect URI beforehand, use:
https://www.workato.com/oauth/callback

Adjust headers format as required in the `apply` section

For example, Pushbullet expects the header to include token in this format:
`OAuth2: <access token>`

So to adjust to suit this requirement, define the `apply` portion like so:

```ruby
connection: {

  authorization: {
    type: "oauth2",

    authorization_url: lambda do
      "https://podio.com/oauth/authorize"
    end,

    token_url: lambda do
      "https://podio.com/oauth/token"
    end,

    client_id: "YOUR_PODIO_CLIENT_ID",

    client_secret: "YOUR_PODIO_CLIENT_SECRET",

    apply: lambda do |connection, access_token|
      headers("Authorization": "OAuth2 #{access_token}")
    end
  }
}
```

Note:

- SDK makes a POST request to token endpoint. If a different type of request is expected, look at [Custom token authentication](#custom-token-authentication)
- The `token_url` is required if the `acquire` or `refresh` hooks are not present (see below).
- Ensure that your implementation of OAuth 2.0 is compliant with the specifications stated in the RFC document. Else, your custom adapter might not start.
  - For example, related to [Issuing an Access Token - Successful Response](https://tools.ietf.org/html/rfc6749#section-5.1), Workato will be expecting a response with `access_token` in the response. Returning the access token under a key of `accessToken` in a JSON response will result in an unsuccessful Workato request to your `token_url`.
  - Usually this will not be a problem because most OAuth libraries out there will do most of the heavy lifting for you, such as returning response in the right format etc. It is good to be aware of this!

### Custom token authentication
The `token_url` is called using a `POST` request with the provided `client_id` and `client_secret` appended into the header.

However, some APIs require the authorization token to be obtained by using a `POST` request with basic authentication. Use the `acquire` hook instead.

```ruby
connection: {

  authorization: {
    type: "oauth2",

    authorization_url: lambda do |connection|
      params = {
        response_type: "code",
        client_id: connection["client_id"]
      }.to_param

      "https://login.mypurecloud.com/oauth/authorize?" + params
    end,

    acquire: lambda do |connection, auth_code|
      response = post("https://login.mypurecloud.com/oauth/token").
      payload(
        grant_type: "authorization_code",
        code: auth_code,
        redirect_uri: "https://www.workato.com/oauth/callback"
        ).
        user(connection['client_id']).
        password(connection['client_secret']).
        request_format_www_form_urlencoded

        [ response, nil, nil ]
      end,

      apply: lambda do |connection, access_token|
        headers('Authorization': "Bearer #{connection["access_token"]}")
      end
    }
  }
```

The methods `.user` and `.password` are the equivalent of appending `Authorization: BASIC ` and `<user>:<password>` in BASE-64 String encoding in the `POST` request header. Note that the request must be sent with `request_format_www_form_urlencoded`.

Upon receiving a the request, the API returns a JSON response. These can be accessed using the `response[key...]` variable defined. For example, if the call returns

```json
{
  "access_token": 12345,
  "refresh_token": 12345,
  "settings": "no"
}
```
we can retrieve the `access_token` from `response[access_token]`

The `acquire` block must return an array of

- Hash: Access token, [Refresh token](#refresh-tokens) (optional)
- Owner ID for clobber detection (optional, substitute with `nil`)
- Hash: Other settings to merge (optional, substitute with `nil`)

### Refresh tokens
There may be situations in which the API expires the access token after a prescribed amount of time. In these cases, the refresh token is used to obtain a new access token. Refresh tokens do not usually expire.

Note that not all APIs issue refresh token credentials. Check with your provider about this requirement.

In the below example, the Namely API asks for the `refresh_token` to be appended in the payload of the refresh request.

```ruby
connection: {
  fields: [
    { name: 'domain', control_type: 'text', optional: false },
    { name: 'client_id', control_type: 'password', optional: false },
    { name: 'client_secret', control_type: 'password', optional: false }
  ],

  authorization: {
    type: "oauth2",

    authorization_url: lambda do |connection|
      params = {
        response_type: "code",
        client_id: connection["client_id"],
        redirect_uri: "https://www.workato.com/oauth/callback",
      }.to_param

      "https://#{connection["domain"]}.namely.com/api/v1/oauth2/authorize?" + params
    end,

    acquire: lambda do |connection, auth_code|
      response = post("https://#{connection["domain"]}.namely.com/api/v1/oauth2/token").
      payload(
        grant_type: "authorization_code",
        client_id: connection["client_id"],
        client_secret: connection["client_secret"],
        code: auth_code
        ).
        request_format_www_form_urlencoded
        [ { access_token: response['access_token'], refresh_token: response['refresh_token'] }, nil, nil ]
      end,

      refresh_on: [401, 403],

      refresh: lambda do |connection, refresh_token|
        post("https://#{connection["domain"]}.namely.com/api/v1/oauth2/token").
        payload(
          grant_type: "refresh_token",
          client_id: connection["client_id"],
          client_secret: connection["client_secret"],
          refresh_token: refresh_token,
          redirect_uri: "https://www.workato.com/oauth/callback"
          ).
          request_format_www_form_urlencoded
        end,
      },
```

#### `refresh_on`
When tokens expire, APIs return HTTP errors signaling the need to reacquire credentials. This is optional; if missing, any error will result in one attempt to re-authorize.

There are four ways to match:

- Integer HTTP response code: `401, 403`
- String that equals the whole body or whole title of the error response: `'Unauthorized'`
- Regex that matches with the body or title of the error response: `/Unauthorized/`
- The actual "signal" that we need to re-authorize: `/Invalid Ticket Id/`

#### `detect_on`
Some APIs don't signal errors with an explicit error response like a 401. Instead, they return a 200 with a payload that signals the error. This optional hook lets us detect that and raise it as an exception, so that the refresh framework can match it.

There are two ways to match:

- String that equals the whole body of the response: `'Unauthorized'`
- Regex that matches with the body of the response: `/^\{"response":\{"error"/`
