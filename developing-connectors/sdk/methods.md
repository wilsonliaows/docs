# Methods

Not all ruby public instance methods are available. Methods are whitelisted to ensure security. The Workato SDK Framework also exposes some methods to make building SDKs convenient.

## REST verb methods

These methods are synonymous to HTTP verbs (GET, POST, PUT, PATCH AND DELETE). These methods are provide you with a very easy way to build and execute HTTP requests without having to think about other details like timeouts, HTTP connection, streaming etc.

Learn how to make HTTP requests using the HTTP verb methods [here](/developing-connectors/sdk/request.md).

## Ruby methods

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>each</td>
      <td>Basic iterator<br><code>[1, 2, 3].each { |i| puts i }</code></td>
    </tr>
    <tr>
      <td>group_by</td>
      <td>
        Group arrays into sets.<br>
        <a href="http://apidock.com/rails/Enumerable/group_by" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>headers</td>
      <td>
        Add headers to a request<br>
        <code>.headers(Authorization: "Bearer HTB674HJK1")</code>
      </td>
    </tr>
    <tr>
      <td>params</td>
      <td>
        Add parameter to a request<br>
        <code>.params(api_key: "HTB674HJK1")</code>
      </td>
    </tr>
    <tr>
      <td>payload</td>
      <td>
        Add payload to a request<br>
        <code>.payload(id: "345")</code>
      </td>
    </tr>
    <tr>
      <td>ignored</td>
      <td>
        Ignore a comma-separate list of fields<br>
        <code>object_definition["user"].ignored("id", "created_at")</code>
      </td>
    </tr>
    <tr>
      <td>only</td>
      <td>
        White list a comma-separate  of fields<br>
        <code>object_definition["user"].only("id", "name")</code>
      </td>
    </tr>
    <tr>
      <td>required</td>
      <td>
        Make a comma-separate list of fields required<br>
        <code>object_definition["user"].required("id", "created_at")</code>
      </td>
    </tr>
    <tr>
      <td>inject</td>
      <td>
        Combine elements in an array using an operation.<br>
        <a href="http://apidock.com/ruby/Enumerable/inject" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>iso8601</td>
      <td>Convert a date/date-time variable to ISO8601 format</td>
    </tr>
    <tr>
      <td>map</td>
      <td>Returns a new array after invoking block on each element</td>
    </tr>
    <tr>
      <td>merge</td>
      <td>
        Returns a new hash containing merged contents.<br>
        <a href="https://ruby-doc.org/core-2.2.0/Hash.html#method-i-merge" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>pluck</td>
      <td>
        Select one or more attributes from an array of objects<br>
        <pre><code style="display: block; white-space: pre-wrap;">[
  {"id": 1, "name": "David"},
  {"id": 2, "name": "Peter"}
].pluck("id")</code></pre>
        returns <code>[1, 2]</code>
      </td>
    </tr>
    <tr>
      <td>rand</td>
      <td>Random number between 0 and 1</td>
    </tr>
    <tr>
      <td>select</td>
      <td>
        Selectively returns elements for which the block returns true.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/select" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>reject</td>
      <td>
        Selectively returns elements for which the block returns false. Similar but opposite of <b>select</b>.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/reject" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>sort</td>
      <td>
        Sort function returning new sorted array.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/sort" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>sort_by</td>
      <td>
        Sort function returning self.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/sort_by" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>utc</td>
      <td>
        Convert Time to UTC timezone.<br>
        <a href="http://ruby-doc.org/core-2.2.0/Time.html#method-c-utc" target="_blank">More details here</a>
      </td>
    </tr>
    <tr>
      <td>puts</td>
      <td>ruby version of <code>console.log</code> or <code>stdout</code>, not the same as <b>put</b> method</td>
    </tr>
    <tr>
      <td>while</td>
      <td>
        while loop statement.<br>
        <a href="https://www.tutorialspoint.com/ruby/ruby_loops.htm" target="_blank">More details here</a>
      </td>
    </tr>
  </tbody>
</table>

This list can and will be expanded constantly, feel free to [contact us](mailto:developer@workato.com) to update/add to this list.

Workato also supports custom reusable methods. See [Reusable Methods](reusable-methods.md) for more information.
