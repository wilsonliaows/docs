# Dependent Pick List

Dependent pick list allows us to change the contents of a pick list based on the value of another field. For example, rather than displaying every city in a single pick list, we can filter the values that are displayed by country selected in another field. A parent pick list determines the list of available values in a dependent pick list.

## Defining a dependent pick list
A dependent pick list can be defined dynamically or statically.

### Static example:

```ruby
pick_lists: {
  countries: lambda { |_connection|
    [
      # Display name, value
      ["United States", "USA"],
      ["India", "IN"]
    ]
  },
  cities: lambda { |_connection, country_id:|
    {
      "USA" => [
        ["New York City", "NYC"],
        ["San Fransisco", "SF"]
      ],
      "IN" => [
        ["Bangalore", "BNG"],
        ["Delhi", "DLH"]
      ]
    }[country_id]
  }
}
```
In this example, it has 2 pick list blocks `cities:` as dependent pick list field and `countries:` as parent pick list field. In the parent pick list block, we can define the value for each selection. The dependent pick list array will have the parent pick list value as the key to filter the pick list values to be displayed on the screen.

#### Usage
```ruby
config_fields: [
  {
    name: "country",
    control_type: "select",
    pick_list: "countries",
    optional: false
  },
  {
    name: "city",
    control_type: "select",
    pick_list: "cities",
    pick_list_params: { country_id: "country" },
    optional: false
  }
]
```

We use the keyword `pick_list_params` to pass the dynamic value to the dependent pick list block. In above example, `country_id` is the key to use in the dependent pick list block (i.e. `cities:`), and "country" is the name of the field to extract the data. 

### Dynamic example:

```ruby
pick_lists: {
  accounts: lambda do |_connection|
    get("https://www.googleapis.com/analytics/v3/management/accounts")["items"].
      map { |account| [account["name"], account["id"]] }
  end,

  properties: lambda do |_connection, account_id:|
    get("https://www.googleapis.com/analytics/v3/management/accounts/#{account_id}/webproperties")["items"].
      map { |property| [property["name"], property["id"]] }
  end
}
```
In this example, the account is parent pick list field and the property is dependent pick list field. After making a GET requests for all accounts, the account pick list is populated with account `id`s and displays the corresponding account `name`. On selection of the account, the pick list value account `id` is passed to the property pick list field. The `account_id` value is then used to fetch the properties that belong to this account. The property's `id` and `name` are used to build the properties pick list.

#### Usage
```ruby
config_fields: [
  {
    name: "account",
    control_type: "select",
    pick_list: "accounts",
    optional: false,
    hint: "Select an account to view list of properties",
  },
  {
    name: "property",
    control_type: "select",
    pick_list: "properties",
    pick_list_params: { account_id: "account" },
    optional: false,
    hint: "Select a property",
  }
]
```
