# Pick List

A pick list is list of choices predefined for a user to select instead of having to input the actual values.
It is useful when there is a list of accepted values for a field or when the field requires a value that is not visible. For example, a field that requires User ID will require a pick list that displays the User names and pass the corresponding User's ID to that field.

## Defining a pick list
There are 3 ways to define a pick list: dynamic, static and dependent pick list.

### Static example:

Pick list is defined as a array of selections. Each selection is an array made up of 2 elements.

The first element in the selection array is the value displayed and the second element is the value of that selection.
```ruby
pick_lists: {
  folder: lambda do |connection|
    [
      # Display name, value
      ["Root","111390"],
      ["Recycle Bin","235611"]
    ]
  end
}
```

### Dynamic example:
```ruby
pick_lists: {
  folder: lambda do |connection|
    get("https://www.wrike.com/api/v3/folders")["data"].
      map { |folder| [folder["title"], folder["id"]] }
  end
}
```
After making a GET requests for all folders available, the pick list is populated with folder `id`s and displays the corresponding folder `title`

#### Usage
```ruby
input_fields: lambda do |object_definitions|
  [
    { name: "folder_id", control_type: "select", pick_list: "folder" }
  ]
end
```

### Dependent example:
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
After making a GET requests for all accounts, the account pick list is populated with account `id`s and displays the corresponding account `name`. Similarly the property depedent pick list receives `account_id:` as variable for fetching the property values corresponding to the selected account in account pick list. 

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

