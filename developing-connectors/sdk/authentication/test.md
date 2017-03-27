# Test

Test endpoint to ensure that connection is successful.

Typically, this should be a request that will always be accessible to any user.

Here are some examples:

```ruby
test: lambda do |connection|
  get("https://person.clearbit.com/v1/people/email/eeshansim@gmail.com")
end
```

```ruby
test: lambda do |connection|
  get("https://app.clicktime.com/api/1.3/session")
end
```
