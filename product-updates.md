---
title: Product Updates
date: 2018-06-05 21:45:00 Z
---


![Product Updates banner](/assets/images/product-updates-banner.png) 

Our engineers are hard at work daily to make Workato better! View the latest updates to our platform here.

## June 22 - July 05 2018
**Find more details on June's updates in our [blog post](https://product.workato.com/2018/07/05/july-2018-product-release/).**

### Platform enhancements
- Static and dynamic list input modes
- Recipe lifecycle management: Imported connections will appear in the same connection folder
- Transliterate formula added: Replaces non-ASCII characters with an ASCII approximation

### Connector enhancements

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
