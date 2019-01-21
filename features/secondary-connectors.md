# Secondary connectors
There are use cases where you are required to move data between two different instances of the same app, e.g. an organization located in two different states might have two different salesforce accounts, but would have to sync the data between the two states.

To automate such use cases in Workato, we support the notion of a **secondary connector**. In the example above, you would connect the primary Salesforce connector to the corporate instance and the secondary Salesforce instance to the subsidiary.

At present Workato supports secondary connectors for the following apps
* [JIRA](https://www.workato.com/integrations/jira)
* [QuickBase](https://www.workato.com/integrations/quickbase) 
* [Salesforce](https://www.workato.com/integrations/salesforce)
* [ServiceNow](https://www.workato.com/integrations/service_now)
* [Slack](https://www.workato.com/integrations/slack) 
* [Wrike](https://www.workato.com/integrations/wrike) 

To use a secondary connector, select the secondary connector from the app picklist when choosing a trigger or action. The secondary connector has the same set of triggers and actions as the primary.

**Note**: using a secondary connector counts as a separate connection.
