# Poll Trigger

Records (tickets, leads, items etc.) are called events in a poll. A poll trigger constantly executes a poll block for new events at fixed time intervals. This time interval depends on a user's subscription (5 or 10 minutes). At the same time, it is also able to support pagination. This is useful to prevent request timeouts when making requests with large response results. A trigger can execute immediate consecutive polls to retrieve events from successive pages.

There are two types of trigger. The classic trigger type is used by default if `type` is not specified. The other type is called the "paging_desc" trigger, which can be used only for endpoints that provide events sorted in descending order. This trigger type has an auto-paging mechanism that lets you build a simple and efficient trigger. (described in detail below)

A ruby hash is returned in each poll. This hash should contain a few keys. The array of events, or data, should be passed into the `events` key. At the same time, a cursor is saved in `next_page`/`next_poll` (depending on the trigger type). This cursor provides information about where the current poll stopped, and used in the next poll. A classic type trigger has an additional key `can_poll_more`, which can be defined to conditionally fire immediate polls for multi-page results.

## Classic Trigger
No need to define any type to use the classic trigger. This type is usually used for APIs that only return responses sorted in ascending order.

```ruby
updated_ticket: {
  input_fields: lambda do
    [
      {
        name: 'since',
        type: :timestamp,
        optional: false
      }
    ]
  end,

  poll: lambda do |connection, input, last_updated_since|
    page_size = 100
    updated_since = (last_updated_since || input['since']).to_time.utc.iso8601

    tickets = get("https://#{connection['helpdesk']}.freshdesk.com/api/v2/tickets.json").
              params(order_by: 'updated_at',
                     order_type: 'asc',
                     per_page: page_size,
                     updated_since: updated_since)

    next_updated_since = tickets.last['updated_at'] unless tickets.blank?

    {
      events: tickets,
      next_poll: next_updated_since,
      can_poll_more: tickets.length >= page_size
    }
  end,

  dedup: lambda do |ticket|
    ticket['id']
  end,

  output_fields: lambda do |object_definitions|
    object_definitions['ticket']
  end
}
```

### poll
#### Arguments
A poll block is given 3 arguments.

The first argument is `connection`, used to access inputs from connection field values. This is frequently used to access domain or subdomain information from the user.

`input` provides access to trigger input field values from the recipe. Inputs like "created_since" a particular date is usually used in a trigger to allow filtering historic records. In this case, Knack does not provide filtering by record created dates, input is given an empty array.

The last argument, usually given the name `last_updated_since` or `last_created_since`, is the cursor "stored" from a previous poll. This is crucial to a good trigger design. It is used to determine where the last poll stopped and where to begin next. As an example, it is usually given the last (latest) "updated"/"created" time. When the trigger is first started, this value is `nil`.

##### Output
```ruby
poll: lambda do |connection, input, last_updated_since|
  page_size = 100
  updated_since = (last_updated_since || input['since']).to_time.utc.iso8601

  tickets = get("https://#{connection['helpdesk']}.freshdesk.com/api/v2/tickets.json").
            params(order_by: 'updated_at',
                   order_type: 'asc',
                   per_page: page_size,
                   updated_since: updated_since)

  next_updated_since = tickets.last['updated_at'] unless tickets.blank?

  {
    events: tickets,
    next_poll: next_updated_since,
    can_poll_more: tickets.length >= page_size
  }
end
```

In a classic type trigger, the expected output contains `events`, `next_poll` and `can_poll_more`.

`events` expects an array of individual results to be processed through the recipe as individual events.

`next_poll` is a cursor that will be passed on to the successive poll (third argument of `poll` block.

**Important**:
This trigger type does not have automatic-immediate polling. Immediate polling is determined by `can_poll_more`, which is a boolean value for whether an immediate poll should be made.

Example JSON response:
```ruby
[
  {
    "id": 1,
    "updated_at": "2016-08-13T00:53:44Z"
  },
  {
    "id": 2,
    "updated_at": "2016-09-14T02:25:00Z"
  },
  ...
]
```

When a get request receives this JSON response, it looks up the array for the last record (latest record) and passes it as the cursor for the next poll. It also checks the response array size. If it is equal to the size limit, it is likely that there are more records matching this request in consequtive pages. Hence the expression given to `can_poll_more` evaluates to true and invokes an immediate successive poll. This loop continues until response array size is smaller than page limit.

At the end of the loop. The last (latest) created date is passed as `next_poll`. This value will be used in the next poll cycle to pick up new records.

### dedup

Dedup block is used to identify individual events. It is given a single argument "event", which corresponds to individual elements in the records array passed into "events".

A typical dedup input is `event[‘id’]` where the `event` argument name can be replaced to make the code more readable. This should be used only in classic triggers.
```ruby
dedup: lambda do |ticket|
  ticket["id"]
end
```
In some instances, a record needs to be proccessed as separate events. A typical scenario is updated records. To do this, append updated timestamp field to the dedup expression like so.
```ruby
dedup: lambda do |ticket|
  ticket["id"] + "@" + ticket["updated_at"]
end
```
With this, 2 occurence of a record with the same "ID" but with different "updated_at" values will be recorded as separate events.

## Descending Trigger
```ruby
new_alert: {
  type: :paging_desc,

  input_fields: lambda do
    [
      {
        name: 'since',
        type: :timestamp,
        optional: false
      }
    ]
  end,

  poll: lambda do |connection, input, page|
    limit = 100
    page ||= 0
    created_since = (input['since'] || Time.now).to_i
    offset = (limit * page)

    response = get("https://api.pingdom.com/api/2.0/actions").
                 params(from: created_since,
                        limit: limit,
                        offset: offset)

    {
      events: response,
      next_page: (response.length >= limit) ? page + 1 : nil
    }
  end,

  document_id: lambda do |response|
    response['checkid']
  end,

  sort_by: lambda do |response|
    response['time']
  end,

  output_fields: lambda do |object_definitions|
    object_definitions['alert']
  end
}
```

### type
`type: :paging_desc` - This type should be used only if results are in descending order. A `paging_desc` trigger works by assuming a descending order and continuously poll for all unique records. If the API is unable to return records in descending order, ignore this key to use the classic trigger.

A record of all event IDs (defined in `document_id` ) is recorded for each recipe. Each recipe will "remember" all event IDs that is processed through a trigger. 

Based on assumption of order, the trigger can stop the polling cycle once a similar event IDs is observed. This is because further polls will return events "before" and would have already been processed by the trigger. At this point, the trigger stops polling and wait for the new poll cycle for new events. The Workato trigger framework handles deduplication in the background.

### poll
Poll block is where you define how events are obtained. Typically, a GET request is used to retrieve a list of records to be processed as trigger events.

#### Arguments
Descending trigger `poll`s have the exact same argument structure. `connection`, `input` and `cursor`. The one difference is that the last argument is usually given the name `page`. In a descending trigger, this argument is usually used to pass the page number instead of record timestamp.

#### Output
Similar to a classic trigger, the `events` in output here expects an array of results.

```ruby
poll: lambda do |connection, input, page|
  limit = 100
  page ||= 0
  created_since = (input['since'] || Time.now).to_i
  offset = (limit * page)

  response = get("https://api.pingdom.com/api/2.0/actions").
               params(from: created_since,
                      limit: limit,
                      offset: offset)

  {
    events: response,
    next_page: (response.length >= limit) ? page + 1 : nil
  }
end
```

Instead of `next_poll`, `paging_desc` type trigger should be given `next_page` as cursor. It is used for passing the next page to be polled.

A typical response looks like this.

```ruby
{
  "current": "https://api.sample.com/records?order=desc&from=2016-12-09T22%3A57%3A13Z&page=1",
  "next": "https://api.sample.com/records?order=desc&from=2016-12-09T22%3A57%3A13Z&page=2",
  "data": [
    {
      "checkid": 123,
      "time": "2016-12-13T19:09:01Z",
      ...
    },
    {
      "checkid": 124,
      "time": "2016-12-10T06:20:00Z",
      ...
    }
  ]
}
```

`response["data"]` is an array of results from the request, which should be passed to `events`. While it varies between APIs, most will provide some form of pointer to the next page of results. In this example,`response["next"]` is an API generated url to be used to retrieve the next page of results matching the request. Hence we can simply pass it to `next_page`. In the successive poll, this value is passed to the poll block and the next set of records is retrieved.

On the last page, `response["next"]` is usually `null`. In that case, it will cause the successive poll to make the same request as in the first page. When this happens, the trigger framework detects a duplicate event (mechanism for detection explained in detail later) and halts all immediate polls. At this point, the trigger goes to "sleep" until the next poll cycle.

New records being added in the cloud instance will appear in the first page of requests since records are returned in descending order. The trigger picks up new records and processes them until a duplicate event is detected, at which point it "sleeps". This trigger type depends on a descending order to retrieve only "new" records and stops upon detection of "old" records.

This way, the trigger polls for new records efficiently, without making any repeated requests to retrieve the entire set of records in each poll cycle.

## document_id
Similar to `dedup`, `paging_desc` type triggers uses `document_id` to identify unique records. Write an expression that can uniquely identify the "ID" of records.

```ruby
document_id: lambda do |event|
  event["checkid"]
end
```

Unlike classic triggers, there is no need to include timestamp fields into the `document_id` expression to deduplicate updated records. Descending triggers have an additional block `sort_by` to process this.

## sort_by
In addition to `document_id`, this block is used to define the field that is used to sort records (in descending order). It could be "created_at" or "updated_at" or similar fields.

```ruby
sort_by: lambda do |event|
  event["time"]
end
```
