# Developing connectors

Workato supports over 200 out of the box connectors, but you may run into scenarios where Workato does not have a connector to an commercial app, or you may need to work with a custom app.

Workato supports several avenues for addressing this requirement:

1. **Database connector** Workato supports out of the box connectivity to several on-prem and cloud databases. If you can get access to the database used by the app, you can then use this connector to exchange data.

2. **File connector** Many apps support CSV import/export. You can use Workato's file connectivity solutions (including on-prem file connector) to work with files.

3. **HTTP connector** The HTTP connector allows you to work with any API that supports HTTP connectivity. The HTTP connector works with a variety of auth models, content types, and HTTP methods. 

4. **Connector SDK** This is a developer platform that allows any developer to build a connector to SDK. This is the same platform that Workato uses to develop connectors as well. You can build 'private' connectors (available to you and whomever you decide to share connector with) and 'public' connectors (available to all Workato users)
