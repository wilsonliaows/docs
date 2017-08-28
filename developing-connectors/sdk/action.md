# Action

## Endpoints

An action can make one or more requests to various endpoints. Because the framework handles the authentication side of a request, you will not have to worry about that here.

The most important thing is to identify which endpoint will address the purpose of the action. Here we will take a look at Close.io's Lead object and how to retrieve it via the API.

![close.io get lead object image](/assets/images/closeio-doc.png)

```ruby
actions: {

  get_lead_by_id: {

    input_fields: lambda do
      [
        { name: "lead_id", optional: false }
      ]
    end,

    execute: lambda do |connection, input|
      get("https://app.close.io/api/v1/lead/#{input["lead_id"]}/")
    end,

    output_fields: lambda do |object_definitions|
      object_definitions["lead"]
    end
  }
}
```

A very simple action looks like this. A get request to the Close.io leads endpoint. In this case, the particular lead’s details is appended in the endpoint.

## Body

Other endpoints require parameters to access certain details, instead of accessing a particular resource route.

A GET request can have parameters added to the request like so:

```ruby
execute: lambda do |connection, input|
  {
    'companies': get("https://#{connection['deployment']}.api.accelo.com/api/v0/companies.json").
                 params(_search: input["company_name"])["response"]
  }
end
```

A POST or PUT or PATCH request can have payloads attached as well. There are 2 ways you can do this.

Add payloads to the method

```ruby
execute: lambda do |connection, input|
  {
    "users": get("https://#{connection['helpdesk']}.freshdesk.com/api/users.json", input)["results"]
  }
end
```

Add payloads using the payload method

```ruby
execute: lambda do |connection, input|
  post("https://api.pushbullet.com/v2/pushes").
    payload(
      email: input["email"],
      title: input["title"]
      body: input["body"]
    )
end
```

See [Methods](/developing-connectors/sdk/methods.md) section for list of methods available for use in your custom connector actions.
