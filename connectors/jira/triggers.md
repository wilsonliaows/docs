---
title: Jira triggers
date: 2018-07-17 06:15:00 Z
---

# Jira triggers

The following Jira triggers can be used to kickstart workflows in your recipes.

To simplify API responses, the Jira REST API uses resource expansion, which means that the API will only return parts of a resource when explicitly requested. Workato automatically fetches and expands all parameters. For more information, check out the Jira Cloud REST API documentation on [resource expansion](https://developer.atlassian.com/cloud/jira/platform/rest/#expansion).

## New/updated issue (real-time)
This trigger picks up issues as soon as they are created/updated. Only issues for which the linked Jira account has sufficient permissions will be retrieved.

![New/updated issue (real time) trigger](/assets/images/jira-docs/new-updated-issue.png)
*New/updated issue (real-time) trigger*

### Requirements
The linked Jira account must have Jira administrators global permissions to use this real-time trigger. asdfFor more information on using Jira real-time triggers, head over to our [Jira real-time triggers documentation](/connectors/jira.md#using-jira-real-time-triggers).

### Input fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>From</td>
      <td>
        Records created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
  </tbody>
</table>

### Output Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>
        ID of the new/updated issue.
      </td>
    </tr>
    <tr>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the new/updated issue.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>
        Key of the new/updated issue.
      </td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>
        Expanded fields of the new/updated issue.
      </td>
    </tr>
  </tbody>
</table>

## New issue
This trigger checks for new issues every 5 minutes. Only issues for which the linked Jira account has sufficient permissions will be retrieved.

![New issue](/assets/images/jira-docs/new-issue.png)
*New issue trigger*

### Input fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>From</td>
      <td>
        Records created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
  </tbody>
</table>

### Output Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>
        ID of the new issue.
      </td>
    </tr>
    <tr>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the new issue.
      </td>
    </tr>
    <tr>
      <td>
        Key
      </td>
      <td>
        Key of the new issue.
      </td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>
        Expanded fields of the new issue.
      </td>
    </tr>
  </tbody>
</table>

## Updated issue
This trigger checks for updated issues every 5 minutes. Only issues for which the linked Jira account has sufficient permissions will be retrieved.

![Updated issue](/assets/images/jira-docs/updated-issue.png)
*Updated issue trigger*

### Input fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>From</td>
      <td>
        Records created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
  </tbody>
</table>

### Output Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>
        ID of the updated issue.
      </td>
    </tr>
    <tr>
      <td>
        self
      </td>
      <td>
        <code>self</code> link to access the full representation of the updated issue.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>
        Key of the updated issue.
      </td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>
        Expanded fields of the updated issue.
      </td>
    </tr>
  </tbody>
</table>

## New project
This trigger checks for new projects every 5 minutes. Only projects for which the linked Jira account has sufficient permissions will be retrieved.

![New project](/assets/images/jira-docs/new-project.png)
*New project trigger*

### Input fields
No input fields are required.

### Output Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2" width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        self
      </td>
      <td>
        <code>self</code> link to access the full representation of the new project.
      </td>
    </tr>
    <tr>
      <td colspan="2">ID</td>
      <td>
        Project ID of the new project.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Key
      </td>
      <td>
        Project key of the new project.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Name
      </td>
      <td>
        Name of the new project.
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        Avatar URLs
      </td>
      <td>48 x 48</td>
      <td>URL of new project's 48 x 48 pixel avatar image.
    </tr>
    <tr>
      <td>16 x 16</td>
      <td>URL of new project's 16 x 16 pixel avatar image.
    </tr>
    <tr>
      <td colspan="2">Description</td>
      <td>Description of new project</td>
    <tr>
      <td rowspan="6">
        Lead
      </td>
      <td>self</td>
      <td><code>self</code> link to access the full representation of the project lead.</td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Key of project lead.</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Name of project lead.</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of project lead.</td>
    </tr>
    <tr>
      <td>Project keys</td>
      <td>List of project keys.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>
        URLs of project lead's avatar images.
      </td>
    </tr>
  </tbody>
</table>

Workato automatically fetches and expands all project parameters. For more information, check out the Jira Cloud REST API documentation on [resource expansion](https://developer.atlassian.com/cloud/jira/platform/rest/#expansion).

## New/updated comment (real-time)
This trigger picks up comments as soon as they are created/updated. Only comments for which the linked Jira account has sufficient permissions will be retrieved.

![New/updated comments (real time) trigger](/assets/images/jira-docs/new-updated-comment.png)
*New/updated comment (real-time) trigger*

### Requirements
The linked Jira account must have Jira administrators global permissions to use this real-time trigger. For more information on using Jira real-time triggers, head over to our [Jira real-time triggers documentation](https://docs.workato.com/connectors/jira.html#using-jira-real-time-triggers).

### Input fields
No input fields are required.

### Output Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2"width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td colspan="2">
      self
    </td>
    <td colspan="2">
      <code>self</code> link to access the full representation of the new/updated comment.
    </td>
  </tr>
    <tr>
      <td colspan="2">ID</td>
      <td>
        ID of the new/updated comment.
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        Author
      </td>
      <td>self</td>
      <td>
        <code>self</code>link to access the full representation of the comment author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        Name of the comment author.
      </td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the comment author.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>Boolean.<br><code>true</code> if comment author's account is active,<br> <code>false</code> if comment author's account is inactive.</td>
    </tr>
    <tr>
      <td colspan="2">Body</td>
      <td>Body of the new/updated comment.</td>
    </tr>
    <tr>
      <td rowspan="4">
        Update author
      </td>
      <td>self</td>
      <td>
        <code>self</code>link to access the full representation of the update author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        Name of the update author.
      </td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the update author.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        Boolean.<br><code>true</code> if update author's account is active,<br> <code>false</code> if update author's account is inactive.
      </td>
    </tr>
    <tr>
    <td colspan="2">Created</td>
    <td>
      Date/time when comment was created.
    </td>
    </tr>
    <tr>
    <td colspan="2">
      Updated
    </td>
    <td>
      Date/time when comment was updated.
    </td>
    </tr>
    <tr>
      <td rowspan="2">Visibility</td>
      <td>type</td>
      <td>
        Type of visibility granted to view comment, e.g. <code>role</code>.
      </td>
    </tr>
    <tr>
      <td>Value</td>
      <td>
        Value of visibility, e.g. <code>administrators</code>.
      </td>
  </tbody>
</table>

## New/updated worklog (real-time)
This trigger picks up worklogs as soon as they are created/updated. Only worklogs for which the linked Jira account has sufficient permissions will be retrieved.

![New/updated worklogs (real-time) trigger](/assets/images/jira-docs/new-updated-worklog.png)
*New/updated worklog (real-time) trigger*

### Requirements
The linked Jira account must have Jira administrators global permissions to use this real-time trigger. For more information on using Jira real-time triggers, head over to our [Jira real-time triggers documentation](https://docs.workato.com/connectors/jira.html#using-jira-real-time-triggers).

### Input fields
No input fields are required.

### Output Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2" width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        self
      </td>
      <td>
        <code>self</code> link to access the full representation of the new/updated worklog,
      </td>
    </tr>
      <tr>
        <td colspan="2">ID</td>
        <td>
          ID of the new/updated worklog.
        </td>
      </tr>
    <tr>
      <td colspan="2">Comment</td>
      <td>
        Content of comment added to the worklog.
      </td>
    </tr>
    <tr>
      <td rowspan="7">Author</td>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the worklog author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Name of worklog author.</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of worklog author.</td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Key of worklog author.</td>
    </tr>
    <tr>
      <td>Time Zone</td>
      <td>Time zone setting of worklog author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>
        URLs of worklog author's avatar images.
      </td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        Boolean.<br><code>true</code> if update author's account is active,<br> <code>false</code> if update author's account is inactive.
      </td>
    </tr>
    <tr>
      <td colspan="2">Body</td>
      <td>Body of worklog.</td>
    </tr>
    <tr>
      <td rowspan="7">
        Update author
      </td>
      <td>self</td>
      <td>
        <code>self</code>link to access the full representation of the update author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        Name of the update author.
      </td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the update author.</td>
    </tr>
    <tr>
      <td>Key</td>
      <td>
        Key of the update author.
      </td>
    </tr>
    <tr>
      <td>Time zone</td>
      <td>Time zone setting of update author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of update author's avatar images.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        Boolean.<br><code>true</code> if update author's account is active,<br> <code>false</code> if update author's account is inactive.
      </td>
    </tr>
    <tr>
    <td colspan="2">Created</td>
    <td>
      Date/time when worklog was created.
    </td>
    </tr>
    <tr>
    <td colspan="2">
      Updated
    </td>
    <td>
      Date/time when worklog was updated.
    </td>
    </tr>
    <tr>
    <td colspan="2">Started</td>
    <td>
      Date/time when worklog was started.
    </td>
    </tr>
    <tr>
    <td colspan="2">
      Time spent
    </td>
    <td>
      Time spent on worklog in week/hour/day format.
    </td>
    </tr>
    <tr>
    <td colspan="2">
      Time spent seconds
    </td>
    <td>
      Time spent on worklog in seconds format.
    </td>
    </tr>
    <tr>
    <td colspan="2">
      Issue ID
    </td>
    <td>
      Issue ID of issue which worklog is associated with.
    </td>
    </tr>
  </tbody>
</table>
