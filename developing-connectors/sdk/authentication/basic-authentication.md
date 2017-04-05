# Basic Authentication

## Standard

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

    apply: lambda do |connection|
      user(connection["username"])
      password(connection["password"])
    end
  }
}
```

To set up a basic authentication, simply define type: 'basic_auth' and include the appropriate values in `user()` and `password()` in the `apply` section. All requests made through the connector will contain the values defined in `apply`.

## Variations

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
    apply: lambda do |connection|
      user(connection["api_key"])
      password("")
    end
  }
}
```

In this example Close.io API expects an API Key generated in the individual User’s account. It should be used as a username with a blank password in the standard basic authentication format.

So, to adjust the connections portion of the code to suit this behaviour, simply request for an API instead of username + password.

In the `apply` section, pass the api_key into `user()` and an empty string ("") to `password()`

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
    apply: lambda do |connection|
      user(connection["api_token"])
      password("api_token")
    end
  }
}
```

Another variation is to have a generated api_token replace the user name and have the string `"api_token"` replacing password in the basic authentication format.

## API Key Authentication

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

    apply: lambda do |connection|
      params(api_key: connection["api_key"])
    end
  }
}
```
