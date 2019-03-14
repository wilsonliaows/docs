# SDK Connector Development Guidelines

## Prerequisites
The developer must agree to Workato’s SDK agreements.

A Workato developer account(you will get this when you agree to our terms).

For Connector SDK development, the developer should have basic ruby knowledge and also aware of rubocop guidelines(optional).

To get familiar with SDK, Ruby: please check the below resources
1.  [SDK Connector](https://docs.workato.com/developing-connectors/sdk.html)  documentation

2.  [SDK Self learning](https://resources.workato.com/sdk/)

3.  [Ruby](https://www.ruby-lang.org/en/)

4.  [Rubocop](https://github.com/rubocop-hq/ruby-style-guide)  Guidelines

## Checklist
When submitting a custom connector, the developer must go through a validation process by Workato.

The process is as follows:

* Overview of the custom connector

* Use case(s)

	* E2E Use Case of Common Scenarios
         * Cover Each Trigger and Each Action

* A demo showcasing the use case(s)

* Fill up the security questionnaire

* Provide test/sandbox account to Workato


Once done, the custom connector will be reviewed by Workato.

Assuming everything passes, the custom connector will be listed at [developer.workato.com](https://developer.workato.com/)

## SDK guidelines
#### General Rules

1. The connector should be named after the application

2. If a standard/global connector already exists, the SDK should be named “<app name> (Custom)”, which indicates it’s custom SDK connector

3. Each Trigger and Action should have a description tag with appropriate action or trigger name.

  * Standard convention: <action/trigger> <object> in <application_name>

  * Example: **Search invoices in Xero**

4. Provide trigger and action level hints, what trigger and action does

5. Avoid unused variables, methods, pick lists and object_definitions

6. Remove unused code from the template

7. Keep the code clean, easy to read, understand and extensible

8. Always be expressive in declaring variables, methods. Do not use short codes, _, special chars for declaring variables

9. Prefix with '**_**' for unused parameters in blocks.

 * Example: fields: lambda do |**_connection, _config_fields|** end

10. Follow the DRY principle of Ruby, use **methods** for reusable code liberally

11. Include comments for before Actions and Triggers, indicate what it does and any special instructions and limitations

12. Include empty line between each code block (methods, actions, triggers, pick lists etc.)

13. Use  [dig](https://ruby-doc.org/core-2.6.1/Array.html#method-i-dig)  method when you need to navigate data to two or more levels

14. Use Date fields and format cautiously, ensure the time zones are handled

15. Avoid **puts** inside the code

16. Avoid implementing triggers(strictly) and actions for endpoints with HTTP Rate limits

17. If the action is required, then handle rate limit logic on the recipe but not in the connector code




### Connection

1. Use **control_type: password** for sensitive data

2. Use **control_type: subdomain** and **url** for subdomain parameter

 * E.g.
{
 name: ‘sub_domain’,
 **control_type**: ‘subdomain’,
 **url**: ‘.salesforce.com’,
 optional: false,
 hint: ‘Provide salesforce sub-domain e.g. <code>test_instance</code>’
 }

3. If the connector is intended for distribution, ensure that do not keep the sensitive details inside the code

4. Define **refresh_token** block for authorization that expires over time

5. Use **detect_on** for re-authentication based on Unauthorized/ Token expiry error messages

6. Ensure required **scopes** are included in the authorization URL for Oauth authentication

7. Include **version** of the API if the app supports multiple versions at the same time

8. Store the **API url** in connection hash, if the base url is dynamic and tenant specific, use acquire block to fetch the base_url dynamically

9. Provide options(pick list) to select production, sandbox environments if the SDK need to support different environments

10. Prefer to using **select option**s fields in connection block to avoid typos, which leads to connection failures


### Base URI

1. Use **base_uri(**when applicable**)** to set the base url for API calls, which avoids keeping the full URL in triggers, actions, methods and picklists

2. Use the static **base_uri** or acquire the **base_url** from the endpoint (if there is an API which returns **base_url** account specific)


### Test block
1. Use endpoint with least **privileges** and minimum **data** in the response for testing the connection.

E.g. use endpoint “get(/profile/me”), which may hold min. data in the memory.
2. Minimize the get method to store least possible data on the Test endpoint call. This also reduces the time taken to:

 * Successfully create a connection.
 * Validate connection status before a recipe is started.


### Object definitions

1. Prefer  [Dynamic](https://docs.workato.com/developing-connectors/sdk/object-definition.html#dynamic-definition)  Object schema over  [Static](https://docs.workato.com/developing-connectors/sdk/object-definition.html#static-definition)  schema(wherever applicable)

2. SDK supports the fields listed  [here](https://docs.workato.com/developing-connectors/sdk/object-definition.html#components) . So, make sure the field is declared as per the specification.

3. Use labels to Indicate the Application UI label information. Some meta api’s provide label details in the schema, so map the appropriate attribute to label.

4. Indicate Date and Time format as hint to the User, when there is specified format required.

5. Use  [Toggle](https://docs.workato.com/developing-connectors/sdk/toggle-field.html)  fields for booleans, **pick_lists**, **multi-select** fields, every field should allow data pills to be mapped.

6. When **Toggle** option is provided, Indicate allowed values can be used in the toggle mode. List values on the recipe UI if only few values, otherwise link to the appropriate page to show possible values for the toggle field.

7. Use **number** type when you need double and float, currency values.

8. Prefer metadata endpoints for **pick_lists, multi_select**fields, if the API supports. Thus Recipe receives updated data in runtime

9. Use static **pick_list** values for select options if the options are static e.g. Genders, Address Type, Currency types


### Actions

1. Action names should be specific to what it does.
 * e.g. “Get **employee** details by ID” - to get the employee details by ID

2. Naming conventions for actions:

 **a.** **Get** - Get only one specific record by ID.

 **b.** **Search** - Return 0, 1 or more records based on a search query

 **c.** **List** - List out all records

 **d.** **Add** - Create a new record

 **e.** **Create** - Create a new record

 **f.** **Update** - Update an existing record

 **g.** **Upsert** - Create a new record or update an existing record

3. To Search records based on criteria, ensure to check for at least one search criteria filled and throw an error with  [error](https://docs.workato.com/developing-connectors/sdk/error-handling.html#error)  method, when the endpoint requires minimum of at least one search field.

4. Use **help** tag, to indicate any special instructions to the user.

5. Avoid making design time calls like fetching Object definition details inside action execute block. API calls are expensive, minimize as much as possible.

6. In execute block, call Target application endpoints only for the data.

7. Use methods religiously to avoid repeating the code in multiple actions.

8. Use  [after_repsonse](https://docs.workato.com/developing-connectors/sdk/request.html#afterresponse)  block to capture response header information like cookies etc.

9. It’s good practice to have a **Custom** **action** in connector for CRUD operations, which can be used for any endpoint

**10.** **Deleting** table or object definition is not advisable with actions in Workato, as it impacts data loss, instead delete it from the Application Administration


### Triggers
1. Name of the trigger should be specific to what it does
 * E.g. New **employee**in Replicon - Triggers when new employee created in Replicon
2. Naming conventions for Triggers:

 **a.** **New** - Trigger that detects when objects are created

 **b.** **New or updated** - Trigger that detects when objects are either created or updated

 **c.** **Deleted** - Trigger that detects when objects are deleted

3. Prefer  [Descending](https://docs.workato.com/developing-connectors/sdk/trigger/poll-trigger.html#descending-trigger)  trigger over  [Classical](https://docs.workato.com/developing-connectors/sdk/trigger/poll-trigger.html#classic-trigger)  trigger if you can fetch data in descending order.

4. Use optional/required **Since** field in polling triggers to retrieve the data in the past, if the user doesn’t provide the value Indicate to the user from when the trigger pulls the data when the recipe is started

5. Avoid making unnecessary API requests in the **poll** block. This block is executed at least once in each trigger poll.

6. Use **closure** block to store query fields, page number, last modified date time (only if required). Information cached in **closure** is persisted across poll intervals.

7. Use methods when required for repeated code

8. Webhooks should have subscription and unsubscription mechanism.


### Sample output

1. In Workato recipes, every action or trigger should have sample output data populated with output data pills under app data section. This gives user idea about the data, he uses in downstream systems.

2. Prefer sample **static data** for the objects with fewer fields in sample output block

3. For dynamic/static object schema(objects with large fields and dynamic schema, child entities), use the sample API call to get a single object and bind the data to output block

 * E.g. if trigger/action **output_fields** block contains **employee**, use the *get(‘/v2/employees’)&.dig(‘results’, 0) || {}*call to get employee and bind to output object
4. Avoid too much of data transformation and too many API calls to show sample data in the sample_output block

5. For download files actions, use static data in sample output block

6. Ensure the sample data is populated for each trigger or action(output) under recipe app data section


### Exception handling

1. Signal exceptions using the  [raise](https://docs.workato.com/developing-connectors/sdk/error-handling.html#error)  method

2. Catch  [validation](https://docs.workato.com/developing-connectors/sdk/error-handling.html#input-validation)  errors early, instead of waiting for API to return errors.

3. Implement  [Error handling](https://docs.workato.com/developing-connectors/sdk/error-handling.html)  when you need to handle specific error codes in the SDK and define your own response

4. Don’t suppress exceptions, better to expose more API information than hide them

### Usability

1. Check the Recipe UI for actions and triggers

2. Ensure the action, triggers, labels, help instructions are clearly communicate about the component.

### Backward compatibility

1. Ensure the recipes do not break when you share with multiple users for changes

# Coding guidelines
### Ruby
1. Use snake case for variables, methods, symbols, actions and triggers

2. Use two space indentation

3. Line numbers cannot exceed 80 chars

4. Prefer %w over string literal array e.g. %w(draft open closed)

5. Prefer string interpolation instead of string concatenation, it may lead errors in the code

6. With interpolated expressions, there should be no space inside the braces

7. Adopt consistent string literal quoting style.

8. Don’t use to_s on interpolated objects, it’s invoked automatically.

 * E.g. bad: “This is the #{result.**to_s**}."
9. Use single quotes over double quotes. Double quotes should be used only in string interpolation

10. Indent **when** as deep as **case**

11. Align function parameters either all on the same line or one per line

12. Never leave trailing whitespace

13. When making inline comments, include a space between the end of the code and the start of your comment

14. Use spaces around operators; after commas, colons, and semicolons; and around { and before }

15. Do not include space before comma

16. Do not Include space between block parameters between pipes

17. Do not leave spaces after (, [ or before ], )

18. Do not use puts statements

19. Keep the code clean

20. Remove unused methods, blocks

21. Remove unused

22. Do not use space when using string interpolation

23. Do not use extra white space in range literals

 * E.g (0..array).each do |item|
24. Add a new line after conditionals, blocks, case statements etc.

25. Avoid multiple conditions in ternaries, Ternaries are best used in single conditions

26. Avoid multi-line ?: (*ternary*) operators, instead use *if/then/else/end*

27. Prefer *{….}* over *do….end* for single line blocks.

28. Don’t use ||= to initialize boolean variables,

29. Prefer *map* over *collect*

30. Use \ at the end of the line instead of + or << to concatenate multi-line strings

31. Favor *unless* over *if* for negative conditions



Note:

1. All ruby methods are not supported by default. If you find any method which is not white-listed in SDK framework reach out  [support@workato.com](mailto:support@workato.com)  with enhancement request

2. All the methods used in Recipe Editor are available by defaultin SDK framework
