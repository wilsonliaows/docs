# OAuth 2.0

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

    apply: lambda do |connection, access_token|
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

- SDK makes a POST request to token endpoint. Will not currently work for APIs expecting a different type of request.
- Ensure that your implementation of OAuth 2.0 is compliant with the specifications stated in the RFC document. Else, your custom adapter might not start.
  - For example, related to [Issuing an Access Token - Successful Response](https://tools.ietf.org/html/rfc6749#section-5.1), Workato will be expecting a response with `access_token` in the response. Returning the access token under a key of `accessToken` in a JSON response will result in an unsuccessful Workato request to your `token_url`.
  - Usually this will not be a problem because most OAuth libraries out there will do most of the heavy lifting for you, such as returning response in the right format etc. It is good to be aware of this!
