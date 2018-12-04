---
title: Workato connectors - On-prem files new lines in CSV file trigger
date: 2018-03-23 06:00:00 Z
---

# On-prem files - New lines in CSV file trigger

This trigger picks up new lines added to the end of a selected CSV file. Lines from the file will be processed un batches in each job.

When the recipe is first started, the trigger will pick up all existing lines in the selected CSV file. Subsequently, new lines added to the end of the file will be processed as new job(s).

This trigger checks for new lines once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New lines in CSV file trigger](/assets/images/connectors/on-prem-files/new-lines-trigger.png)
*New lines in CSV file trigger*

## Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CSV file</td>
      <td>
        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the output schema of the trigger.
      </td>
    </tr>
    <tr>
      <td>Column delimiter</td>
      <td>
        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.
      </td>
    </tr>
    <tr>
      <td>Batch size</td>
      <td>Determine the number of lines to process in each job. The default value is 100 and maximum is 2000.
      </td>
    </tr>
  </tbody>
</table>

## Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First line number in batch</td>
      <td>Line number of the first line in the batch currently being processed. Header lines are not processed, so the first line has the value 1.</td>
    </tr>
    <tr>
      <td>Last line number in batch</td>
      <td>Line number of the last line in the batch currently being processed. Header lines are not processed, so the first line has the value 1.</td>
    </tr>
    <tr>
      <td>CSV lines</td>
      <td>This is a list type datapill that contains the data of all lines in the batch. Columns of the selected CSV file will be available as datapills here.</td>
    </tr>
  </tbody>
</table>
