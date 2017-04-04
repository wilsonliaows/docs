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

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Key</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name of this field. For example <code>id</code> or <code>created_at</code>
            </td>
        </tr>
        <tr>
            <td>type</td>
            <td>
              The data type of this field. Default value is <code>:string</code>. 
              Should be given the symbol notation (prepend colon).
              <ul>
                <li><code>:string</code></li>
                <li><code>:integer</code></li>
                <li><code>:datetime</code></li>
                <li><code>:date</code></li>
                <li><code>:boolean</code></li>
                <li><code>:object</code> Must be accompanied with <code>:properties</code></li>
                <li><code>:array</code> Must be accompanied with <code>:properties</code></li>
              <ul>
            </td>
        </tr>
        <tr>
            <td>control_type</td>
            <td>
              The input field type to expose in a recipe.
              <ul>
                <li><code>:text</code></li>
                <li><code>:text-area</code></li>
                <li><code>:number</code></li>
                <li><code>:url</code></li>
                <li><code>:select</code> Make sure to include the <code>:pick_list</code> property.</li>
                <li><code>:timestamp</code></li>
                <li><code>:checkbox</code></li>
                <li><code>:phone</code></li>
                <li><code>:email</code></li>
              <ul>              
            </td>
        </tr>
        <tr>
            <td>pick_list</td>
            <td>
              If <code>control_type</code> is <code>:select</code>, this property is required. 
              See more in <a href="/developing-connectors/sdk/pick-list.html">Pick List</a> chapter.
            </td>
        </tr>
        <tr>
            <td>properties</td>
            <td>
              When defining nested objects, use the <code>properties</code> key to define the fields in the object.
              Remember to define the type as <code>:array</code> or <code>:object</code>
            </td>
        </tr>
    </tbody>
</table>
