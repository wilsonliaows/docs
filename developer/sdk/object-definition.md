# Object Definition

Object Definitions is an important component of the SDK. It allows you to define your schema for objects to be used in the actions and triggers. It allows you to easily define outputs and inputs later on.

## Static Definition

The most basic way to build an object definition is to define the field name and type

```ruby
object_definitions: {
  push: {
    fields: lambda do
      [
        { name: "active", type: :boolean },
        { name: "body" },
        { name: "created" },
        { name: "direction" },
        { name: "dismissed", type: :boolean },
        { name: "iden" },
        { name: "modified" },
        { name: "receiver_email" },
        { name: "receiver_email_normalized" },
        { name: "receiver_iden" },
        { name: "sender_email" },
        { name: "sender_email_normalized" },
        { name: "sender_iden" },
        { name: "sender_name" },
        { name: "title" },
        { name: "type" },
      ]
    end
  }
}
```

In this example, the object “Push” is being defined in the fields lambda literal.

Defined as an array of objects. Each field object corresponds to a field in the comment object.

## Dynamic Definition

```ruby
object_definitions: {

  form: {
    fields: lambda do |connection|
      get("https://api.unbounce.com/pages/#{connection['page_id']}/form_fields")["formFields"].
        map { |field| { name: field["id"] } }
    end
  }
}
```

## Components

Key | Definition
--- | ----------
name | The name of this field. For example `id` or `created_at`
type | The data type of this field. Default value is string
control_type | The input field type to expose in a recipe.
pick_list | If control type is 'select', this component is  required. See more in **Pick List**
properties | When defining nested objects, use the properties key to define the fields in the object. Remember to define the type as `:array` or `:object`

### type
It should be given the symbol notation (prepend colon)

Supported types:
`:string`, `:integer`, `:datetime`, `:date`, `:boolean`, `:object`, `:array`

`:object`, and `:array` must be accompanied with properties

### control_type

Some of the available values are
url: the data field will show a link
select: the data field will be a pick list (make sure to include the pick_list property

Other supported types:
timestamp, checkbox, phone, email, text, number, text-area


