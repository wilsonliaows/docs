# Reusable Methods

Reusable methods are now supported in Workato. This is nifty if you seek to reuse custom methods anywhere within an executable lambda (e.g. `execute`, `object_definitions/fields`).

Such methods are declared using the `method` block. This block lies in the same level as the `trigger` and `action` blocks.

## Example
```ruby
methods: {
  factorial: lambda do |input|
    number = input[:number]
    if number > 1
      number * call(:factorial, { number: number - 1 })
    else
      number
    end
  end

  hello: lambda do
    puts "Hello world"
  end
},

actions: {
  factorial: {
    execute: lambda do |connection, input|
      { factorial: call(:factorial, { number: input["number"] }) }
    end
  },

  say_hello: {
    execute: lambda do
      call(:hello)
    end
  }
},
```

## The `call` method

```ruby
call(:name, { number: 1 })
```

Use the `call()` method to reference a method. This method takes in two parameters:

1. Method name
  - Use the method name defined. You can use either `:name` or `"name"` representations.
2. Input hash (optional)
  - This is a multi-valued hash of input variables. Leave blank if your method does not take in an input.

The input hash is later appended to the main `input` object, which you can reference as so

```ruby
factorial: lambda do |input|
  number = input[:number]
...
```

This means that within your method, you may also make reference to any other keys stored in the global `input` hash. However, you may not reference any local input variables outside of this lambda.

The following code block works where `input[:constant]` was defined by the user at runtime.
```ruby
factorial_extension: lambda do |input|
  number = input[:number] + input[:constant]
end
```

If `number` was an input variable to the `factorial` method, the following code block will not work.
```ruby
test_action: {
  execute: lambda do |connection, input|
    call(:factorial, { number: 1 } )
    puts input[:number]
  end
```


## Recursion
In the case of the factorial example provided above, note that the `factorial` method has some degree of recursion. Be careful when writing recursive loops by setting failsafes as in the example below:

```ruby
if number > 1
  number * call(:factorial, { number: number - 1 })
else
  number
end
```

## Testing
The SDK console only allows testing of actions and triggers. To test your reusable method, write an action which encapsulates it.

## Summary
Reusable methods are powerful tools that can make development more efficient. It is especially useful when making schema introspection calls within the `object_definitions` or `input_schema` lambdas. You can also use these in conjunction with some [whitelisted methods](methods.md).
