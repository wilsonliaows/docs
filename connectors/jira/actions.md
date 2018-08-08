---
title: Jira actions
date: 2018-07-18 06:15:00 Z
---

# Jira actions
The following Jira actions can be used to execute workflows in your recipes.

### Requirements
The linked Jira account must have sufficient permissions to the respective resource in each action. For more information on Jira permissions, head over to our [Jira project permissions documentation](https://docs.workato.com/connectors/jira.html#roles-and-permissions-required-to-connect).

## Create issue
This action creates an issue in Jira based on the specified project, issue type, and field values.

![Create issue](/assets/images/jira-docs/create-issue.png)
*Create issue trigger*

### Input fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2"width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Project issue type</td>
      <td>
        The project and issue type of the issue.
      </td>
    </tr>
      <tr>
        <td colspan="2">Sample project issue type</td>
        <td>
          Used to retrieve any custom fields associated with the specified project issue type, as defined by your Jira field configuration schemes.
        </td>
      </tr>
    <tr>
      <td rowspan="4">Standard fields</td>
      <td>Summary</td>
      <td>Summary of the issue.</td>
    </tr>
    <tr>
      <td>Reporter</td>
      <td>Reporter of the issue.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Description of the issue.</td>
    </tr>
    <tr>
      <td>Issue priority</td>
      <td>Priority of the issue.</td>
    </tr>
    <tr>
      <td>Custom fields</td>
      <td>Miscellaneous fields</td>
      <td>Custom fields defined by your Jira field configurations. </td>
    </tr>
  </tbody>
</table>

#### Project issue type
Selecting a project issue type will retrieve the issue's fields (as specified by your Jira issue type scheme) for you to populate with datapills. You can select a project issue type from the picklist provided. This also retrieves the corresponding issue type's fields.

![Project issue type picklist](/assets/images/jira-docs/project-issue-type-picklist.gif)
*Specifying a project issue type using the picklist*

You can also use the project **Key** and issue type **Name** datapills, separated by two hyphens '--'e.g. <kbd>Key</kbd>--<kbd>Name</kbd> to dynamically generate the project issue type. This is especially useful if you want to dynamically create issues across a range of projects and issue types.

![Project issue type dynamic](/assets/images/jira-docs/project-issue-type-dynamic.gif)

Alternatively, you can also hardcode the project & issue type by manually entering the project key and the issue type, again separated by two hyphens, e.g. **PROJ--Bug**.

![Project issue type text](/assets/images/jira-docs/project-issue-type-text.png)
*Specifying a project issue type manually*

#### Sample project issue type
The **Sample project issue type** is typically used when dynamically creating issues across a range of projects and issue types.

Because issues can have different fields in different projects, you may have a sample project issue type (defined in Jira) that contains all possible issue fields across multiple projects & issue types.

Specifying the sample project issue type here retrieves all fields related to it, and displays them in your recipe. This allows you to map datapills to the new issue(s) being created.

This way, you can perform the mapping of datapills that works for all issues dynamically created across multiple projects & issue types.

![Sample project issue type](/assets/images/jira-docs/sample-project-issue-type.png)
*Using a sample project issue type to retrieve fields across multiple issue types & projects*

Similar to the [project issue type field](/connectors/jira/actions.md#project-issue-type) above, you can use the picklist to choose the project & issue type, or enter them manually by entering the project key & issue type, separated by two hyphens, e.g. **PROJ--Bug**.

#### Summary
Summary of the issue to be created. By default, this field is required, unless defined otherwise by your Jira field configuration.

#### Reporter
The person reporting this issue. Use the Jira username of the reporter, e.g. if reporter's e-mail address is **johndoe@workato.com**, use **johndoe**.

#### Description
Description of the issue.

#### Issue Priority
The priority of the issue. This list is retrieved as defined by the defined list of picklist values in Jira. Hence, the values may vary from the screenshot below.

![Issue priority](/assets/images/jira-docs/issue-priority.png)
*Issue priority*

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
        ID of the created issue.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>
        Key of the updated issue.
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
  </tbody>
</table>

#### Troubleshooting

##### Unable to see project issue type(s)
If you don't see the project issue type(s) you're looking for, the linked Jira account may not have sufficient permissions to view the project or issue/issue type.

If you are a Jira administrator of your Jira workspace, check the linked Jira account's permissions by using Jira's Permissions helper. See our [Jira permissions documentation](/connectors/jira.html#jira-permissions-helper) or check out [Jira's guide on Permissions helper](https://confluence.atlassian.com/adminjiracloud/using-the-permission-helper-868982879.html) for more details. Otherwise, check with your Jira administrator(s) for help.

##### Unable to see field(s) / custom field(s)
If you don't see the field(s) you're looking for,
1. The linked Jira account may not have sufficient permissions to view the field(s). Again, you can use Jira's Permissions helper if you're a Jira administrator. Otherwise, check with your Jira administrator(s) for help.<br><br>
2. The field configuration of the custom field is not associated correctly with the issue type used in the project. If you're a Jira administrator, check your field's field configuration, that it's associated to the correct issue type, and that the issue type scheme is associated to the correct project. Otherwise, check with your Jira administrator(s) for help.

## Get issue
This action allows you to retrieve a single issue by using its issue ID or key.

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
      <td>
        Issue ID or key
      </td>
      <td>
        Issue ID or key of issue to retrieve.
      </td>
    </tr>
  </tbody>
</table>

### Ouput fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Ouput field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>
        ID of the issue.
      </td>
    </tr>
    <tr>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the issue.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>
        Key of the issue.
      </td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>
        Expanded fields of the issue. Workato automatically fetches and expands all parameters. <br><br>For more information, check out the Jira Cloud REST API documentation on <a href="https://developer.atlassian.com/cloud/jira/platform/rest/#expansion">resource expansion</a>.
      </td>
    </tr>
  </tbody>
</table>

## Search issues
This action allows you to retrieve 1 or more issue(s) that exactly match the values you specify in the issue fields.

>**Note: The issue field values you provide is an `AND` filter - i.e. only issues matching *all* field values will be returned. Partial matches will not be returned.**

![Search issues](/assets/images/jira-docs/search-issues.png)
*Search issues action*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Issue ID</td>
      <td>
        Exact issue ID to search by.
      </td>
    </tr>
    <tr>
      <td>Issue key</td>
      <td>
        Exact issue key to search by.
      </td>
    </tr>
    <tr>
      <td>Summary</td>
      <td>
        Exact summary to search by.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        Exact priority to search by.
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        Exact status to search by.
      </td>
    </tr>
    <tr>
      <td>Resolution</td>
      <td>
        Exact resolution to search by, if any.
      </td>
    </tr>
    <tr>
      <td>Assignee</td>
      <td>
        Exact assignee name or e-mail address to search by, if any.
      </td>
    </tr>
    <tr>
      <td>Project</td>
      <td>
        Exact project ID, key or name to search by.
      </td>
    </tr>
    <tr>
      <td>Epic link</td>
      <td>
        Exact linked epic key or name to search by.
      </td>
    </tr>
    <tr>
      <td>Labels</td>
      <td>
        Comma-separated list of labels to search by.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action is a list of issues.

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
        ID of the issue.
      </td>
    </tr>
    <tr>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the issue.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>
        Key of the issue.
      </td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>
        Expanded fields of the issue. Workato automatically fetches and expands all parameters. <br><br>For more information, check out the Jira Cloud REST API documentation on <a href="https://developer.atlassian.com/cloud/jira/platform/rest/#expansion">resource expansion</a>.
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        Number of issues retrieved.
      </td>
    </tr>
  </tbody>
</table>

## Update issue
This action updates a single issue by using its issue ID or key. You must also use the **Sample project issue type** to retrieve any custom fields associated to the project & issue type.

![Update issue action](/assets/images/jira-docs/update-issue.png)
*Udpate issue action*

### Input Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Issue ID or key</td>
      <td>
        Exact issue ID or key of issue to update.
      </td>
    </tr>
      <tr>
        <td>Sample project issue type</td>
        <td>
          Used to retrieve any custom fields associated with the specified project issue type, as defined by your Jira field configuration schemes.
        </td>
      </tr>
    <tr>
      <td>Description</td>
      <td>
        Description of issue to update.
      </td>
    </tr>
    <tr>
      <td>Issue priority</td>
      <td>
        Priority of issue to update.
      </td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>
        The rest of the issue's fields, retrieved after selecting a <b>Sample project issue type</b>.
      </td>
    </tr>
  </tbody>
</table>

### Output Fields
There are no output fields.

## Search assignable users
This action retrieves a list of all users that can be assigned to a specified issue. You can narrow this list down to a single user by providing the user's login username.

![Search assignable users](/assets/images/jira-docs/search-assignable-users.png)
*Search assignable users action*

### Input Fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project ID or key</td>
      <td>
        Exact project ID or key of project.
      </td>
    </tr>
    <tr>
      <td>Issue ID or key</td>
      <td>
        Exact issue ID or key of issue to update.
      </td>
    </tr>
      <tr>
        <td>Username</td>
        <td>
          Narrows the list assignable users down to a single user. Leave this blank to retrieve all assignable users.
        </td>
      </tr>
  </tbody>
</table>

### Output Fields
The output of this action is a list of users that can be assigned to the specified issue.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Groups</td>
      <td>Groups which the user is a part of.</td>
    </tr>
    <tr>
      <td>Application roles</td>
      <td>Application roles which the user is a part of.</td>
    </tr>
    <tr>
      <td>
        Self URL
      </td>
      <td>
        <code>self</code> link to access the full representation of the assignable user.
      </td>
    </tr>
    <tr>
      <td>
        Key
      </td>
      <td>
        Key of the assignable user.
      </td>
    </tr>
    <tr>
      <td>
        Name
      </td>
      <td>
        Login username of the assignable user.
      </td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>
        E-mail address of the assignable user.
      </td>
    </tr>
    <tr>
      <td>
        Avatar URLs
      </td>
      <td>URLs of assignable user's avatar images.
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the assignable user.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        Boolean.<br><code>true</code> if assignable user's account is active,<br> <code>false</code> if assignable user's account is inactive. Defaults to <code>true</code>.
      </td>
    </tr>
    <tr>
      <td>Time zone</td>
      <td>Timezone setting of the assignable user.</td>
    </tr>
    <tr>
      <td>List size</td>
      <td>Number of assignable users to this issue.</td>
    </tr>
  </tbody>
</table>

## Assign user to issue
This action assigns an issue using a user's Jira username (e.g. if e-mail is **johndoe@workato.com**, use **johndoe**). Existing assignees will be also be replaced.

![Assign user to issue action](/assets/images/jira-docs/assign-user-to-issue.png)
*Assign user to issue action*

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
      <td>Issue ID or key</td>
      <td>
        Issue ID or key of issue to be assigned.
      </td>
    </tr>
    <tr>
    <td>Assignee username</td>
    <td>The username of user to assign issue to.</td>
    </tr>
  </tbody>
</table>

### Output Fields

There are no output fields.

## Download attachment
This action allows you to download attachments from your issues, for use in follow-up actions.

![Download attachment](/assets/images/jira-docs/download-attachment.png)
*Download attachment action*

This is extremely useful when syncing screenshots (attached to tickets) in Jira and some other ticket management application (e.g. ServiceNow, Freshdesk, etc). For example, when a user or customer success person attaches a screenshot to a Jira issue, you can download the attachment and re-upload it to the corresponding dev task (in Jira or Github).

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
      <td>Attachment URI</td>
      <td>
        Datapill containing file content, obtainable from the step output of objects that support attachments, e.g. the <kbd>Content</kbd> datapill from the <a href="/connectors/jira/actions.md#get-issue"> Get issue action</a>.<br>
        <img src="/assets/images/jira-docs/attachment-uri-example.png"></img>
      </td>
    </tr>
  </tbody>
</table>

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
      Attachment content
    </td>
    <td colspan="2">
      Content of the attachment.
    </td>
  </tr>
    <tr>
      <td colspan="2">Size</td>
      <td>
        Size of the attachment in bytes.
      </td>
    </tr>
  </tbody>
</table>

## Upload attachment
This action allows you to upload attachments to existing issues.

![Upload attachment action](/assets/images/jira-docs/upload-attachment.png)
*Upload attachment action*

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
      <td>
        Issue ID or key
      </td>
      <td>
        Issue ID or key of issue to upload attachment to.
      </td>
    </tr>
      <tr>
        <td>File content</td>
        <td>
          File content to upload to issue.
        </td>
      </tr>
        <tr>
          <td>File name</td>
          <td>
            File name of attachment to upload.
          </td>
        </tr>
  </tbody>
</table>

#### Issue ID or Key
Enter an issue ID or key issue to upload the attachment to.

#### File content
You can use this field to upload attachment content, obtainable from the step output of any objects which support attachments, e.g. the <kbd>Attachment content</kbd> datapill from the output of a preceding **Download attachment** action.

![File content example](/assets/images/jira-docs/file-content-example.png)
*File content example*

You can also upload a `.txt` or `.csv` file by filling in the text contents of the file, followed by the using a `.txt` or `.csv` file extension respectively (in the proceding **File name** field).

![File content example with text](/assets/images/jira-docs/file-content-example-text.png)
*File content example with text*

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
      <td colspan="2">self</td>
      <td>
        <code>self</code> link to access the full representation of the uploaded attachment.
      </td>
    </tr>
    <tr>
      <td colspan="2">ID</td>
      <td>Attachment ID of the uploaded attachment</td>
    </tr>
    <tr>
      <td colspan="2">Filename</td>
      <td>Attachment ID of the uploaded attachment</td>
    </tr>
    <tr>
      <td rowspan="9">Author</td>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the attachment author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Name of the attachment author.</td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Key of the attachment author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of the attachment author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of the attachment author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the attachment author's avatar images.</td>
    </tr>
    <tr>
      <td>Display Name</td>
      <td>Display name of the attachment author.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        Boolean.<br><code>true</code> if attachment author's account is active,<br> <code>false</code> if attachment author's account is inactive.
      </td>
    </tr>
    <tr>
      <td colspan="">Timezone</td>
      <td>Timezone settings of the attachment author.</td>
    </tr>
    <tr>
      <td colspan="2">Created</td>
      <td>Date/time when attachment was uploaded.</td>
    </tr>
    <tr>
      <td colspan="2">Size</td>
      <td>Size of attachment in bytes.</td>
    </tr>
    <tr>
      <td colspan="2">MIME Type</td>
      <td>The nature and format of the attachment.</td>
    </tr>
    <tr>
      <td colspan="2">Content</td>
      <td>Link to the attachment itself. Can be used in proceeding action steps that support attachments, e.g. the <b>Attachment URI</b> field from the <a href="/connectors/jira/actions.md#download-attachment"> Download attachment action</a>.<br>
        <img src="/assets/images/jira-docs/content-output-example.png"></img> </td>
    </tr>
    <tr>
      <td colspan="2">List size</td>
      <td>Number of attachments in issue.</td>
    </tr>
  </tbody>
</table>

## Create comment
This action creates a comment to an existing issue.

![Create comment](/assets/images/jira-docs/create-comment.png)
*Create comment action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2" width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Issue ID or key</td>
      <td>
        Issue ID or key of issue to add the comment to.
      </td>
    </tr>
    <tr>
      <td colspan="2">Comment text</td>
      <td>Contents of the comment to be added.</td>
    </tr>
    <tr>
      <td>Visibility</td>
      <td>Role</td>
      <td>Name of role to restrict visibility of the comment to.</td>
    </tr>
  </tbody>
</table>

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
    <td>
      <code>self</code> link to access the full representation of the new comment.
    </td>
  </tr>
    <tr>
      <td colspan="2">ID</td>
      <td>
        ID of the new comment.
      </td>
    </tr>
    <tr>
      <td rowspan="9">
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
      <td>Key</td>
      <td>Key of comment author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of comment author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of comment author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the comment author's avatar images.</td>
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
      <td>Timezone</td>
      <td>Timezone settings of the comment author.</td>
    </tr>
    <tr>
      <td colspan="2">Body</td>
      <td>Body of the new comment.</td>
    </tr>
    <tr>
      <td rowspan="9">
        Update author
      </td>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the update author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        Name of the update author.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Key of update author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of update author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of update author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the update author's avatar images.</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the update author.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>Boolean.<br><code>true</code> if update author's account is active,<br> <code>false</code> if udpate author's account is inactive.</td>
    </tr>
    <tr>
      <td>Timezone</td>
      <td>Timezone settings of the update author.</td>
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

## Get issue comments
This action retrieves a list of comments belonging to an existing issue.

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
    <tr>
      <td>Issue ID or key</td>
      <td>Issue ID or key of issue to retrieve comments from.</td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action is a list of comments belonging to the specified issue.
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
    <td>
      <code>self</code> link to access the full representation of the comments.
    </td>
  </tr>
    <tr>
      <td colspan="2">ID</td>
      <td>
        ID of the  comment.
      </td>
    </tr>
    <tr>
      <td rowspan="9">
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
      <td>Key</td>
      <td>Key of comment author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of comment author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of comment author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the comment author's avatar images.</td>
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
      <td>Timezone</td>
      <td>Timezone settings of the comment author.</td>
    </tr>
    <tr>
      <td colspan="2">Body</td>
      <td>Body of the new comment.</td>
    </tr>
    <tr>
      <td rowspan="9">
        Update author
      </td>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the update author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        Name of the update author.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Key of update author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of update author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of update author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the update author's avatar images.</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the update author.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>Boolean.<br><code>true</code> if update author's account is active,<br> <code>false</code> if udpate author's account is inactive.</td>
    </tr>
    <tr>
      <td>Timezone</td>
      <td>Timezone settings of the update author.</td>
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
    </tr>
    <tr>
      <td colspan="2">List size</td>
      <td>Number of comments belonging to the issue.</td>
    </tr>
  </tbody>
</table>


## Update comment
This action updates a comment of an existing issue.

![Update comment](/assets/images/jira-docs/update-comment.png)
*Update comment action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2" width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Issue ID or key</td>
      <td>
        Issue ID or key of issue to with the comment to update.
      </td>
    </tr>
    <tr>
      <td colspan="2">Comment text</td>
      <td>Content to update the comment with.</td>
    </tr>
    <tr>
      <td>Visibility</td>
      <td>Role</td>
      <td>Name of role to restrict visibility of the updated comment to.</td>
    </tr>
  </tbody>
</table>

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
    <td>
      <code>self</code> link to access the full representation of the updated comment.
    </td>
  </tr>
    <tr>
      <td colspan="2">ID</td>
      <td>
        ID of the updated comment.
      </td>
    </tr>
    <tr>
      <td rowspan="9">
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
      <td>Key</td>
      <td>Key of comment author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of comment author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of comment author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the comment author's avatar images.</td>
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
      <td>Timezone</td>
      <td>Timezone settings of the comment author.</td>
    </tr>
    <tr>
      <td colspan="2">Body</td>
      <td>Body of the new comment.</td>
    </tr>
    <tr>
      <td rowspan="9">
        Update author
      </td>
      <td>self</td>
      <td>
        <code>self</code> link to access the full representation of the update author.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        Name of the update author.
      </td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Key of update author.</td>
    </tr>
    <tr>
      <td>Account ID</td>
      <td>Atlassian account ID of update author.</td>
    </tr>
    <tr>
      <td>E-mail address</td>
      <td>E-mail address of update author.</td>
    </tr>
    <tr>
      <td>Avatar URLs</td>
      <td>URLs of the update author's avatar images.</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>Display name of the update author.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>Boolean.<br><code>true</code> if update author's account is active,<br> <code>false</code> if udpate author's account is inactive.</td>
    </tr>
    <tr>
      <td>Timezone</td>
      <td>Timezone settings of the update author.</td>
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

## Create user

This action creates a user in your Jira instance.

>**Warning: This action will increase the number of Jira licenses for your company and affect monthly Jira subscription fees.**

![Create user](/assets/images/jira-docs/create-user.png)
*Create user action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>E-mail</td>
      <td>
        E-mail address of the user to be created.
      </td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>
        Display name of the user to be created.
      </td>
    </tr>
    <tr>
      <td>
        Password
      </td>
      <td>
        Password for the user to be created.
      </td>
    </tr>
    <tr>
      <td>
        Login username
      </td>
      <td>
        Typically the first part of user’s e-mail e.g. if user’s e-mail is <b>johndoe@workato.com</b>, use <b>johndoe</b>.
      </td>
    </tr>
  </tbody>
</table>

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
        Self URL
      </td>
      <td>
        <code>self</code> link to access the full representation of the newly created user.
      </td>
    </tr><tr>
      <td colspan="2">
        Key
      </td>
      <td>
        Key of the newly created user.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Name
      </td>
      <td>
        Login username of the newly created user.
      </td>
    </tr>
    <tr>
      <td colspan="2">E-mail address</td>
      <td>
        E-mail address of the newly created user.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Avatar URLs
      </td>
      <td>URLs of newly created user's avatar images.
    </tr>
    <tr>
      <td colspan="2">Display name</td>
      <td>Display name of the newly created user.</td>
    </tr>
    <tr>
      <td colspan="2">Active</td>
      <td>
        Boolean.<br><code>true</code> if comment author's account is active,<br> <code>false</code> if comment author's account is inactive. Defaults to <code>true</code>.
      </td>
    </tr>
    <tr>
      <td colspan="2">Time zone</td>
      <td>Timezone setting of the newly created user.</td>
    </tr>
  </tbody>
</table>

### Troubleshooting
#### Unable to create user
If a user is unable to be created, the linked Jira account may not have sufficient permissions to create users. Again, you can use Jira's Permissions helper if you're a Jira administrator. Otherwise, check with your Jira administrator(s) for help.

## Get user details
This action retrieves the user record that matches the provided username. Action will fail if the user does not exist.

![Get user details](/assets/images/jira-docs/get-user-details.png)
*Get user details action*

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
      <td>Username</td>
      <td>
        Exact Jira username, e.g. if user's e-mail address is <b>johndoe@workato.com</b>, use <b>johndoe</b>.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan="2" width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Groups</td>
      <td>Groups which the user is a part of.</td>
    </tr>
      <tr>
        <td colspan="2">Application roles</td>
        <td>Application roles which the user is a part of.</td>
      </tr>
    <tr>
      <td colspan="2">
        Self URL
      </td>
      <td>
        <code>self</code> link to access the full representation of the user.
      </td>
    </tr><tr>
      <td colspan="2">
        Key
      </td>
      <td>
        Key of the user.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Name
      </td>
      <td>
        Login username of the user.
      </td>
    </tr>
    <tr>
      <td colspan="2">E-mail address</td>
      <td>
        E-mail address of the user.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Avatar URLs
      </td>
      <td>URLs of user's avatar images.
    </tr>
    <tr>
      <td colspan="2">Display name</td>
      <td>Display name of the user.</td>
    </tr>
    <tr>
      <td colspan="2">Active</td>
      <td>
        Boolean.<br><code>true</code> if user's account is active,<br> <code>false</code> if user's account is inactive. Defaults to <code>true</code>.
      </td>
    </tr>
    <tr>
      <td colspan="2">Time zone</td>
      <td>Timezone setting of the user.</td>
    </tr>
    <tr>
      <td colspan="2">Locale</td>
      <td>Locale of the user.</td>
    </tr>
    <tr>
      <td colspan="2">Expand</td>
      <td>Resources that were expanded in the request parameter, namely <code>groups</code> and <code>applicationRoles</code> (for which the user is a part of)</td>
    </tr>
  </tbody>
</table>
