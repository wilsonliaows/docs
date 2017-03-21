# Toggle Fields

Toggle fields are a special type of input fields that allow 2 input types. This is useful in a scenario where there are 2 ways to provide an input value for an action or trigger. It is typically used for input fields that are primarily a `pick list` but may require a `text` type in certain scenarios.

Here we have an example toggle field `parser_id` used in the Docparser connector. The action, **Fetch document from URL**, requires the parser ID as an input. This ID can be accessed within the parser page URL. However, that is not a great user experience for the recipe builder. Ideally, we want users to be able to stay on the recipe page without having to toggle (pun intended) between browser tabs.

Hence, we introduced the parser pick list. This pick list is dynamically generated from the user's list of parsers. For details of pick lists, checkout [Pick list](pick-list.md)

```ruby
fetch_document_from_url: {
  input_fields: lambda do
    [
      {
        name: "url",
        label: "Source URL",
        hint: "Upload file from this URL",
        optional: false
      },
      {
        name: "parser_id",
        label: "Document Parser",
        hint: "The Document Parser the file gets imported to",
        control_type: :select,
        pick_list: "parsers",
        optional: false,
        toggle_hint: "Select from list",
        toggle_field: {
          name: "parser_id",
          label: "Parser ID",
          type: :string,
          control_type: "text",
          optional: false,
          toggle_hint: "Use Parser ID",
          hint: "Go to home page and select the required parser. If the URL is 'https://app.docparser.com/stack/ynrqkdxvaghs/overview', then 'ynrqkdxvaghs' is the ID"
        }
      },
      {
        name: "remote_id",
        sticky: true
      }
    ]
  end,

  execute: lambda do |connection, input|
      post("https://api.docparser.com/v1/document/fetch/#{input["parser_id"]}?url=#{input["url"]}")
  end,

  output_fields: lambda do |object_definitions|
      object_definitions["document"]
  end
}
```

A pick list input type is used to create a more desired user experience. However, this makes the action value mapping static. Because the pick list can only select a single value, all recipe jobs executing this action will use the single parser ID value selected. To overcome this limitation, a text field should be used. A text field allows dynamic mapping of input field value.

In this case, both field types are desired, so we decided to use a `toggle_field` to provide both input options to users. Since, it is a more common scenario for users to select a parser per action, pick list type is set as the primary toggle and text field set as the secondary (nested `toggle_field`).

# Toggle field in recipe

## Toggle primary field
![Toggle primary field](/assets/images/sdk/toggle-primary.png)

## Toggle secondary field
![Toggle secondary field](/assets/images/sdk/toggle-secondary.png)

## toggle_hint

Toggle hints are displayed in the toggle dropdown when choosing between primary and secondary options. This is an optional field but should be added as best practice. A `toggle_hint` defined in the primary field will be displayed as a hint for choosing the primary field. The same applies for `toggle_hint` for secondary field.

![Toggle field hint](/assets/images/sdk/toggle-hint.png)

# toggle_field

`toggle_field` should be defined as a hash nested in the primary field. Within this hash should be a definition of a typical field. This means that the `toggle_field` hash should contain all the fields required for a field.

Note: `toggle_field` keys do not have default behaviours. This means that all fields are required and must be explicitly defined. For a details of field definitions, check out [Object Definition](object-definition.md)
