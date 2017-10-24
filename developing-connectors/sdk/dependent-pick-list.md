# Dependent Pick List

Dependent pick list allow us to change the contents of a picklist based on the value of another field. For example, rather than displaying every value for City in a single picklist, we can limit the values that are displayed based on a value of another field, like Country. That way our users can find the appropriate city more quickly and easily. A controlling pick list controls the available values in one or more corresponding dependent pick list. A dependent field displays values based on the value selected in its corresponding controlling field.

## Defining a dependent pick list
There are 2 ways to define a dependent pick list: dynamically or statically.

### Static example:

```ruby
pick_lists: {
  contries: lambda { |_connection|
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
Each pick list is defined as a array of selections. Each selection is an array made up of 2 elements label and value.
In this example it has 2 pick list blocks `cities:` as dependent pick list field and `countries:` as controlling pick list field. In the controlling pick list block we can define the value for each selection. The dependent pick list array will have the controlling pick list value as the key to filter the pick list values to be displayed on the screen.

#### Usage
```ruby
config_fields: [
  {
    name: 'country',
    control_type: 'select',
    pick_list: 'contries',
    optional: false
  },
  {
    name: 'city',
    control_type: 'select',
    pick_list: 'cities',
    pick_list_params: { country_id: 'country' },
    optional: false
  }
]
```

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
In this example, the account is controlling pick list field and the property is depedent pick list field. After making a GET requests for all accounts, the account pick list is populated with account `id`s and displays the corresponding account `name`. On selection of the account, the pick list value account `id` is passed to the property pick list field. The property field receives `account_id` for fetching the property values corresponding to the selected account and populates the pick list with property `id`s and displays property `name`.

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
