# Secondary connectors
There are use cases where you are required to move data between two different instances of the same app. e.g. Moving customer records between the Salesforce instance a subsidiary uses and Salesforce instanced used by corporate.

To automate such use cases in Workato, we support the notion of a **secondary connector**. In the example above, you would connect the primary Salesforce connector to the corporate instance and the secondary Salesforce instance to the subsidiary.

At present Workato supports secondary connectors for the folowing apps
* JIRA secondary
* QuickBase secondary
* Salesforce secondary
* ServiceNow secondary
* Slack secondary

To use a secondary connector, simply build a recipe and look for the secondary connectors. The secondary behaves exactly the same as the primary.

**Note**: using a secondary connector counts as a serparate connection.  
