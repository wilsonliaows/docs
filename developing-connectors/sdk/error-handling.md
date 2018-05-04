---
title: SDK - Error Handling
date: 2018-05-01 06:00:00 Z
---

# Error Handling
Exposing detailed and helpful error message can improve your recipe building experience. However, default SDK actions and triggers do not expose response message or body in an instance of HTTP errors. Additionally, you may want to expose error messages in other instances (such as when action/trigger input data does not meet certain business requirements). This can be achieved using the following helper methods.

## `raise`
This is a Workato SDK specific method to raise a job error with a custom message.

```ruby
raise("Some error message")
```

## `after_error_response`

Similar to `after_response`, `after_error_response` is an optional block that can be chained to a HTTP verb method to handle HTTP errors. Let's take a look at an example, using **Airtable** API.

```ruby
execute: lambda do |connection, input|
  patch("https://api.airtable.com/v0/#{connection['base_id']}/users/#{id}", payload).
    after_error_response(404) do |code, header, message, body|
      raise("#{message}: #{body}")
    end
end
```

When you try to update a row with an invalid ID, a HTTP error will be returned. The Error code used is `404` with a JSON body `{"error":"NOT_FOUND"}`.


![Formatted error message](/assets/images/sdk/formatted-error-message.png)
*Formatted error message*
