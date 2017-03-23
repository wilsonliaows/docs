# Authentication

## Basic Authentication

### Standard

Typically, a basic authentication requires a username and password combination when making requests. Make sure to include those two fields in the connection fields definition.

```ruby
connection: {

  fields: [
    {
      name: "username",
      hint: "Your email used for login"
    },
    {
      name: "password",
      optional: false,
      control_type: "password",
    }
  ],

  authorization: {
    type: "basic_auth",

    credentials: lambda do |connection|
      user(connection["username"])
      password(connection["password"])
    end
  }
}
```

To set up a basic authentication, simply define type: 'basic_auth' and include the appropriate values in `user()` and `password()` in the credentials section. All requests made through the connector will contain the values defined in credentials.

### Variations

Some APIs expect different conventions from a standard basic authentication.

```ruby
connection: {
  fields: [
    {
      name: "api_key",
      optional: false,
      hint: "Profile (top right) > Settings > Your API Keys"
    }
  ],

  authorization: {
    type: "basic_auth",

    # close.io uses api key only for authentication. treats apikey as username and password left blank
    # curl -u "{your api_key}:" "https://app.close.io/api/v1/me/"
    credentials: lambda do |connection|
      user(connection["api_key"])
      password("")
    end
  }
}
```

In this example Close.io API expects an API Key generated in the individual User’s account. It should be used as a username with a blank password in the standard basic authentication format.

So, to adjust the connections portion of the code to suit this behaviour, simply request for an API instead of username + password.

In the credentials section, pass the api_key into `user()` and an empty string ("") to `password()`

```ruby
connection: {

  fields: [
    {
      name: "api_token",
      control_type: "password",
      label: "API token",
      optional: false,
      hint: "Available in 'My Profile' page"
    }
  ],

  authorization: {
    type: "basic_auth",

    # Toggl API expect the token to be sent as user name and the string 'api_token' as the password
    # curl -u "{your api_token}:api_token" "https://www.toggl.com/api/v8/me"
    credentials: lambda do |connection|
      user(connection["api_token"])
      password("api_token")
    end
  }
}
```

Another variation is to have a generated api_token replace the user name and have the string `"api_token"` replacing password in the basic authentication format.

### API Key Authentication

For APIs that expect API Key authentication, it is a slight variation from the basic authentication code above.

Make sure to include the required inputs from the user (subdomain, api_key, scope etc)

Define
1. type: `"api_key"`
2. the appropriate parameter name for the API Key. In this case, it is simply `"api_key"`

After defining this, calls will have the appropriate params appended.

Example:
`<BASE_URL>/users?api_key=NB674921`

```ruby
connection: {

  fields: [
    {
      name: "helpdesk",
      control_type: "subdomain",
      url: ".freshdesk.com",
      optional: false,
      hint: "Your helpdesk name as found in your Freshdesk URL"
    },
    {
      name: "api_key",
      control_type: "password",
      optional: false,
      label: "API key"
    }
  ],

  authorization: {
    type: "api_key",

    credentials: lambda do |connection|
      params(api_key: connection["api_key"])
    end
  }
}
```

## OAuth 2.0

For a more secure method of authentication, we recommend using [OAuth 2.0](https://tools.ietf.org/html/rfc6749). It is an open standard and is generally a more secure way for users to log into third party websites without exposing their credentials.

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

    credentials: lambda do |connection, access_token|
      headers("Authorization": "Bearer #{access_token}")
    end
  }
}
```

The Workato connector SDK currently supports the [Authorization Code Grant](https://tools.ietf.org/html/rfc6749#section-4.1) variant of the OAuth2 standard.

Required components in OAuth 2.0 type connection:

1. type (use 'oauth2')
2. authorization_url
3. token_url
4. client_id and client_secret
5. credentials

Redirect URI will be appended to the authorization request by the framework, so there is no need to include it. If the application requires that you register the redirect URI beforehand, use:
https://www.workato.com/oauth/callback

Adjust headers format as required in the credentials section

For example, Pushbullet expects the header to include token in this format:
`OAuth2: <access token>`

So to adjust to suit this requirement, define the credentials portion like so:

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

    credentials: lambda do |connection, access_token|
      headers("Authorization": "OAuth2 #{access_token}")
    end
  }
}
```

Note:

- SDK makes a POST request to token endpoint. Will not currently work for APIs expecting a different type of request.
- Ensure that your implementation of OAuth 2.0 is compliant with the specifications stated in the RFC document. Else, your custom adapter might not start.
  - For example, [Issuing an Access Token - Successful Response](https://tools.ietf.org/html/rfc6749#section-5.1) states that Workato will be expecting a response with the following required parameters: `access_token`, `token_type` and `expires_in`. Returning the access token with a key of `accessToken` in a JSON response will result in an unsuccessful Workato request to your `token_url`.
  - Usually this will not be a problem because most OAuth libraries out there will do most of the heavily-lifting for you, such as returning response in the right format etc. It is good to be aware of this!

## Custom Authentication

# Test

Test endpoint to ensure that connection is successful.

Typically, this should be a request that will always be accessible to any user.

Here are some examples:

```ruby
test: lambda do |connection|
  get("https://person.clearbit.com/v1/people/email/eeshansim@gmail.com")
end
```

```ruby
test: lambda do |connection|
  get("https://app.clicktime.com/api/1.3/session")
end
```
