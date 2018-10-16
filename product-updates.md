---
title: Product Updates
date: 2018-06-05 21:45:00 Z
---


![Product Updates banner](/assets/images/product-updates-banner.png)

Our engineers are hard at work daily to make Workato better! View the latest updates to our platform below.

## Sept 25 - Oct 05 2018

**Find more details on this month's updates in our [blog post](https://product.workato.com/2018/10/04/october-2018-product-release/).**

### Platform enhancements

- **Data pill enhancement**

  **Context:** We've greatly improved visibility on data pills when they are mapped into fields so that building and reviewing recipes can be done in a glance.

  **What's new:** All data pills have been revamped to include the application logo and step it comes from.

- **Added delete functionality for lookup tables**

  **What's new:** We have added the ability to delete **all data from lookup tables** without the need to delete the table entirely. Access this by clicking on the `...` menu icon on the last column of your lookup table.

- **Added delete functionality for custom adapters_schema**

  **What's new:** We have also added the ability to **remove custom (SDK) adapters**. Users can do so from their individual [custom adapters](https://www.workato.com/custom_adapters) pages.

### Connector enhancements

- **Quick Base: Bulk import action**

  **What's new:** We released a new [Quick Base bulk import action using CSV file](https://product.workato.com/2018/09/28/announcing-our-quick-base-bulk-import-action/). Users can now easily import a large amount of data into Quick Base with this addition. Documentation is available on: [Quick Base action: Create and update records in bulk from CSV file](/connectors/quick-base/action-import-csv.md)

- **Microsoft Dynamics CRM: Picklist lookup support**

    **Context:** It can be hard to retrieve the lookup values of picklists in Microsoft Dynamics CRM. In the API response, typically only the internal values of the picklist selection are returned.

    **What's new:** The [new feature](https://product.workato.com/2018/09/26/2053-picklist-lookups-for-dynamics-crm/) in our Microsoft Dynamics CRM connector now gives you both the picklist option labels as well as the internal values for your selected picklist option. These fields show up as additional fields for you to use in the datatree.
    
- **Wrike: New/updated task trigger can now filter by task status**

  **What's new:** You can now filter new/updated task trigger events by task status. This allows you to trigger recipe actions only on specific task statuses.

- **Wrike: Secondary connector**

  **What's new:** You can now connect a secondary Wrike connector in your recipes. This makes it possible to sync folders, tasks and projects across 2 different Wrike accounts.
  
- **Wrike: Seach folders/projects action can now filter by custom field**

  **What's new:** You can now filter search results of a <b>Search folders/projects</b> action by using custom fields. To use this filter, add the optional field 'Custom field list' in a <b>Search folders/projects</b> action.
    

## Sept 4 - Sept 24 2018

### Platform enhancements

- **Group data mapping**

  **Context:** In a large enterprise database, there can be hundreds of fields in every table. When there are a daunting number of fields to map or if many of your field labels match with the name of pills, it can be a chore to do them one-by-one.

  **What's new:** Map fields automatically with the new group data mapping tool in every action. Click on the icon next to the 'comment', 'clone' and 'delete' icons on the right hand side on every recipe line to bring up the group mapping wizard. Simply choose the fields to map and the data source to get started.

  Read the documentation on [group data mapping](/recipes/group-data-mapping.md) to learn more.

- **New control for date/time picker**

  **What's new:** A new grid icon is available on the right of all date/time fields. Clicking on this icon will bring up a calendar date picker followed by a drop-down list of times. Use this new function to quickly configure dates and times. After selecting your chosen date or time, you may still edit this by typing in the field directly.

  For our more experienced users, please note that clicking on the calendar icon on the left of the field will no longer work.


### Connector enhancements

- **Workday: Trigger change**

  **Context:** Previously, large worker objects in Workday caused jobs to timeout.

  **What's new:** A new option under _Advanced configuration_ called 'Return reference only' available in Workday triggers allows the job to return only references and transaction logs, minimising the trigger data size to prevent timeouts

- **HTTP connector: Secondary connector**

  **What's new:** Previously, only 1 HTTP connection was allowed per recipe. The new secondary connector is useful when users need to connect to multiple REST endpoints. To use the HTTP secondary connector, access the adapter dropdown menu and click on the 'HTTP secondary' option.  

- **Salesforce new action: Salesforce bulk query using SOQL**

  **What's new:** The new action allows a bulk search for records in Salesforce with a SOQL query. Learn more about [using SOQL queries](https://support.workato.com/support/solutions/articles/1000236426-salesforce-object-query-language-soql-basic-syntax-and-common-search-terms) and about [Salesforce bulk API](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm).


## Aug 17 - Sept 3 2018

**Find more details on August's updates in our [blog post](https://product.workato.com/2018/09/06/sept-2018-product-release/).**

Note: We have upgraded our services to TLS 1.1 or higher as of August 21, 2018. Please view this article for more details: [Stronger security with TLS 1.1 update](https://product.workato.com/2018/08/07/stronger-security-with-tls-1-1-update/).


### Platform enhancements

- **Compatible input/output schemas**

  **Context:** Previously, all mapped fields in later recipe steps are cleared when the user changes the trigger or actions.

  **What's new:** All actions and triggers now have compatible input and output schemas. The user can change a trigger or action and all mappings will remain valid if the new trigger has the same fields/pills.

- **Recipe IQ: Powering intelligent recipe building**

  **Context:** The Workato platform uses sophisticated machine learning algorithms based on billions of integration events and hundreds of thousands of integration use cases to assist users in building effective integrations and automations.

  **What's new:** During recipe building, users may notice the `Powered by RecipeIQ` tag, which indicates that our AI algorithms are intelligently suggesting the best actions, data pills or fields for use.

- **Job report: Timing tab**

  **What's new:** The timing tab for every step in a recipe has been exposed. Users can find it next to the 'input' and 'output' tabs in the individual job reports. This tab shows the time taken for every action and can be used in debugging recipes.

### Connector enhancements

- **New connector: On-Prem Command-line Scripts**

  **What's new:** Workato's `On-prem command-line scripts` connector allows you to run whitelisted command line scripts in your private network with an on-premises agent. Find out how to set a profile up on the [on-premises profile documentation](https://docs.workato.com/on-prem/profile.html#command-line-scripts-profile).

- **HTTP & Custom HTTP connectors**

  **Context:** Previously, users had to parse the HTTP response as text, then use the JSON parser as the next action to parse out the response.

  **What's new:** The HTTP adapter now supports JSON arrays and objects.

- **On-premises files connector major update**

  **What's new:**  Several new triggers and actions have been added to the connector, and the old versions of those triggers and actions have been deprecated. This update will not affect your current running recipes. We will continue to support the deprecated triggers and actions, and your current recipes will keep running as normal.

  Please read the following article for more information: [On-prem file connector major update - Sep 2018](https://support.workato.com/support/solutions/articles/1000267630-on-prem-file-connector-major-update-sep-2018).

- **Jira & Jira Service Desk (cloud-only)**

  **What's new:** Added support for basic authentication with API tokens, in anticipation for the upcoming [deprecation of basic authentication with password](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/) by Atlassian. Read about this in [our recent announcement](https://support.workato.com/support/solutions/articles/1000267662-jira-cloud-only-jira-service-desk-deprecation-of-basic-authentication-with-password).

- **Bill.com connector**

  **What's new:** Added support for new/updated vendor trigger.



## Aug 4 - Aug 16 2018

### Connector enhancements
- Database connectors (Oracle, Redshift, MySQL, SQL Server, PostgreSQL) changes to required fields pick lists in triggers. Read the article [here](https://support.workato.com/support/solutions/articles/1000267334-draft-update-to-database-connectors-trigger-pick-lists) for more information.
- PostgreSQL: Select rows using custom SQL
  - This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action. Read the documentation [here](/connectors/postgresql/select.md#select-rows-using-custom-sql).
- Google Sheets: 150 new 2-min recipes has been published and are available for use. Find them [here](https://www.workato.com/recipes/19394-add-new-payments-in-quickbooks-to-google-sheets).
- Workbot enhancements:
  - Custom help (on the connection level). You can now define what users see when they DM ‘help’ to Workbot.
  - New post command reply & post message enhancements
    - pretext
    - author_name
    - author_link
    - author_icon
    - footer
    - footer_icon
    - thumb_url
  - Allow custom message color by supplying hex code
  - Allow message menus to be displayed before buttons
  - Original_message added to trigger output
  - Enhancements to post command reply only
    - Replace original
    - Delete original
  - New custom HTTP action for Workbot

## July 19 - Aug 3 2018
**Find more details on July's updates in our [blog post](https://product.workato.com/2018/08/02/august-2018-product-release/).**

### Platform enhancements
- Recipe lifecycle management: Added support for message templates  

### Connector enhancements
- Shopify: Inventory API changes. **These changes will result in your recipes breaking if you are using Shopify connector actions**. Please view this [document](https://support.workato.com/support/solutions/articles/1000266904-shopify-connector-inventory-api-breaking-changes) for more information.  
- New connector: [JDBC](https://docs.workato.com/connectors/jdbc.html) (in beta)
- Workbot for Slack: Post Message & Post Command Reply actions — added support for multiple attachments.
- Eventbrite: Now supports Eventbrite Music
- Salesforce: New get document by ID action
- Workday: Enhancements to fields with attributes and repeated fields. View this [documentation](https://docs.workato.com/connectors/workday/call_operation.html) to learn more.

## July 06 - July 18 2018

### Platform enhancements
- Recipe lifecycle management: Added support for shared schema import/export
- New recipe editor toolbar: The new toolbar allows you to easily access the save and start buttons on screen when building and editing your recipes
- Files by Workato: New Transform image file action, allows the conversion of image files to .jpg and .png files and image resizing

### Connector enhancements

#### HTTP connector
-  [New HTTP action wizard guide](/developing-connectors/http-v2.md)

## June 22 - July 05 2018
**Find more details on June's updates in our [blog post](https://product.workato.com/2018/07/05/july-2018-product-release/).**

### Platform enhancements
- Static and dynamic list input modes
- Recipe lifecycle management: Imported connections will appear in the same connection folder
- Transliterate formula added: Replaces non-ASCII characters with an ASCII approximation, e.g. `"Chloé".transliterate` becomes `"Chloe"`

### Connector enhancements
-  New HTTP wizard to guide user in building an HTTP action

#### Netsuite
- `ItemGroup` standard object now available in Search action and trigger

#### Workday
- Added support for special characters


## June 08 - June 21 2018

### Platform enhancements
- New recipe creation wizard

### Connector enhancements

#### Propel
Added Propel as a new connector.

**Triggers**
- Object created
- Daily object review
- Object created/updated

**Actions**
- Custom action
- Create object
- Get related objects
- Search objects
- Update object

#### Netsuite
- Added the ability to search custom records by custom fields
- Added support for message object in New Classification trigger

#### PGP
- New action: Decrypt file with PGP

#### Okta
- New events action has been enhanced to allow "others" option in the Event type dropdown. This allows users to enter a specific Event name.

#### Workday
- The call operation action now includes 'get integration systems' as an operation.

## June 01 - June 07 2018

### Connector enhancements

#### Netsuite
- New Action: Delete Record

#### ServiceNow
- Deprecated Actions: Get incident details by ID, Get user details by ID, Assign user to incident. Please use the new actions: Search records or Update records if you need these actions.

#### Marketo
- Attributes array has been added to the output for lead batch activity trigger

#### Replicon
- New Action: Get Eligible Project leaders from Replicon

## May 2018
**Find more details on May's updates in our [blog post](https://product.workato.com/2018/06/05/june-2018-product-release/).**

### Usability enhancements

- Data field auto-suggestions
- Export lookup table with data in Recipe Lifecycle Management

### Workbot upgrades

- Ephemeral Messages
- [Slash Commands](https://product.workato.com/2018/05/22/slash-commands-using-workbot-for-slack/)

### Improvements to on-prem agents & gateways

- Significant improvements to increase throughput
- Upgrade to file tolerance protocol used in the gateway
- Ability to delete agent
- NTLM authentication
- Configurable HTTP concurrency
- Database updates (Database Matrix)

### Connector enhancements

#### Workday
- Handle blank columns in reports
- Increase threshold for summarised report output
- Minor output schema fix

#### Box
- Download file action supports [file streaming](https://product.workato.com/2018/06/04/file-streaming-transferring-large-files-with-ease/).

#### Databases
- Added documentation for [SQL Server](/connectors/mssql.md), [Oracle](/connectors/oracle.md), [Redshift](/connectors/redshift.md), [PostgreSQL](/connectors/postgresql.md) and [MySQL](/connectors/mysql.md).
- SQL Server sample output fix
- Standardized empty and null values
- Fixes for CLOB and NCLOB
- Custom SQL select action
- Stored procedure support

### Platform enhancements
#### GDPR compliance
- Workato is now [GDPR compliant](https://www.workato.com/legal).

#### SDK
- [Error handling](/developing-connectors/sdk/error-handling.md) for custom adapters

#### Job details logging
- Ability to [log all jobs and job details](/job-history-replication.md) with Amazon S3
