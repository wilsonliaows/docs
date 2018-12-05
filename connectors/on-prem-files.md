---
title: Workato connectors - On-prem files
date: 2018-12-04 06:00:00 Z
---

# On-prem Files
This connector lets you integrate with files within a secure network. These files typically are behind a corporate firewall and cannot be accssed directly. To create a connection to on-prem files, you **must** use an [On-prem agent](/on-prem.md).

Workato's `On-prem files` connector allows you to securely connect to those on-premises files and build automation around them.

## How to connect to on-prem files on Workato
Before creating a connection for this connector, make sure you go through an [on-prem agent setup](/on-prem/setup.md) and create a profile for [on-prem files](/on-prem/profile.md#on-premises-files-connection-profile).

![On-prem files connection](/assets/images/connectors/on-prem-files/connection.png)
*On-prem files connection using on-prem agent*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this On-prem files connection a unique name that identifies which On-prem files instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem connection profile</td>
      <td>Name of the profile you wish to connect to. This should be defined in your <code>config.yml</code> file in your On-prem agent.</td>
    </tr>
    <tr>
      <td>Is this app in a private network?</td>
      <td>Select the on-prem agent that you setup earlier.
    </tr>
  </tbody>
</table>

## Working with the On-prem files connector

### Relative path
Relative path is a way to specify the location of a file or folder based on the location of another folder. This is different from absolute path where you specify the full location of a file.

File or folder path in the on-prem files connector are all relative paths. It is relative to the base path you define in the connection [profile](/on-prem/profile.md#on-premises-files-connection-profile) of your `config.yml` file. Let's take a look at an example.

Here, we have a profile with the base path defined as the `/Users/admin/projects` folder using the `base` property.
```yml
files:
  projects:
    base: /Users/admin/projects
```

Now, if you wish to point to a file in this sub-folder `/Users/admin/projects/engineering/2018_roadmap.csv`, you will have to use the relative path `/engineering/2018_roadmap.csv`. When used in a download file action, it will look like this.

![Download content from file path](/assets/images/connectors/on-prem-files/download-file-action.png)
*Download content from file path*

Similarly, to point to a sub-folder `/Users/admin/projects/marketing/users`, use the relative path `/marketing/users`.

![Move file to a folder using folder path](/assets/images/connectors/on-prem-files/move-file-action.png)
*Move file to a folder using folder path*

### Naming pattern
Frequently, you may have a log of multiple files with a naming convention. These names typically either includes an incremental count to represent the versions or timestamp to represent the effective date of the contents. Defining a naming pattern allows you to filter files based on these naming conventions. Workato uses the `?` and `*` symbols to represent any single character or multiple characters respectively.

#### Single character wildcard `?`
The `?` symbol is used to represent any character once. For example, `Report_draft_?.pdf` can be used to represent `Report_draft_1.pdf`, `Report_draft_2.pdf` and `Report_draft_3.pdf`.

#### Multiple character wildcard `*`
The `*` symbol is used to represent any zero or more characters. For example, `Report_draft*.pdf` can be used to represent `Report_draft.pdf`, `Report_draft_1.pdf`, `Report_draft_2.pdf` and `Report_draft_3.pdf`.

#### Using naming pattern in a recipe

Let's look at an example of a marketing manager who needs to work with a folder that contains a few type of information series of webinar.

:open_file_folder: Marketing
  - :open_file_folder:  ProductHour
      - :page_facing_up: Attendees_2018_11_29.csv
      - :page_facing_up: Attendees_2018_11_15.csv
      - :page_facing_up: Attendees_2018_11_01.csv
      - :clipboard: Poll_responses_2018_11_29.txt
      - :clipboard: Poll_responses_2018_11_15.txt
      - :clipboard: Poll_responses_2018_11_01.txt
      - :bar_chart: Slides_2018_11_29.pptx
      - :bar_chart: Slides_2018_11_15.pptx
      - :bar_chart: Slides_2018_11_01.pptx

Based on each use case, files from this folder can be filtered in a number of ways.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width="25%">Use case</th>
        <th width="15%">Naming pattern</th>
        <th width="60%">Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Trigger on CSV lines in Attendees information</td>
      <td><b>Attendees*.csv</b></td>
      <td><img src="/assets/images/connectors/on-prem-files/attendees-filter.png"><i>Filter Attendees CSV files in a trigger</i></img></td>
    </tr>
    <tr>
      <td>List only Poll responses files from November</td>
      <td><b>Poll_reponses_2018_11_??.txt</b></td>
      <td><img src="/assets/images/connectors/on-prem-files/november-filter.png"><i>Filter Poll responses from November</i></img></td>
    </tr>
      <tr>
        <td>Trigger on new Presentation slides in 2018</td>
        <td><b>Slides_2018*.pptx</b></td>
        <td><img src="/assets/images/connectors/on-prem-files/slides-filter.png"><i>Filter Presentation slides</i></img></td>
      </tr>
  </tbody>
</table>
