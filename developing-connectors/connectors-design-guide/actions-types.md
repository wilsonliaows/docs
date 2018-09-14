---
title: Connectors design guide - action types
date: 2018-09-05 15:30:00 Z
---

# Action types
Actions are commonly of the following types:

- [Create record](#action-type---create-record)
- [Update record](#action-type---update-record)
- [Upsert record](#action-type---upsert-record)
- [Search records](#action-type---search-records)
- [Get record by ID](#action-type---get-record)

## Action type - create record
This action uses the data input to create a new record. It should return the internal ID of the record created, at a minimum.

Behavior:
- New record should be created with the provided data.
- Add an input field hint to the unique key to highlight to the user that it should be a disinct value, e.g. email of a contact should be unique.
- If the new record was not successfully created, action should throw an error with an explanatory error message, e.g. "Record with duplicate email exists".
- If the API allows for duplicate records to be created, i.e. record does not need any unique keys, highlight this in the help text.

## Action type - update record
This action uses the data input to update an existing record. The record to update should be identified using a unique key, e.g. internal ID or external ID.

Behavior: 
- The input data provided should be written to the existing record.
- If an input field doesn't have data inputs provided by the user, it should not erase existing values in the app by passing in a `null` value, unless the user explicitly uses the `clear` formula. Fields without data inputs should be stripped from the API request so that a null value is not sent.
- For records with lists, e.g. invoice with invoice line items, include an option to append to/overwrite the existing list with the new list input. If the API only allows for a certain behavior, highlight this behaviour in the input list section's hint.

## Action type - upsert record
This action uses the data input to update an existing record, or create a new record if no existing record is found. The record to update should be identified using a unique key, e.g. internal ID or external ID.

Behavior: 
- The input data provided should be written to the existing record.
- If an input field doesn't have data inputs provided by the user, it should not erase existing values in the app by passing in a `null` value, unless the user explicitly uses the `clear` formula. Fields without data inputs should be stripped from the API request so that a null value is not sent.
- For records with lists, e.g. invoice with invoice line items, include an option to append to/overwrite the existing list with the new list input. If the API only allows for a certain behavior, highlight this behaviour in the input list section's hint.

## Action type - search records
This action takes in one or more parameters as search criteria, and returns only records matching all the search criteria.

Behavior of get record actions:
- Takes in one or more inputs as search criteria.
- Only records matching all search criteria should be returned.
- Search should return only exact matches. If API can only return records which does a partial match, highlight this behavior in the help text.
- Possible to return a list of records. Highlight the maximum number of records which can be returned in the help hint.

## Action type - get record
This action returns one record that matches the record ID or key provided. 

Behavior of get record actions:
- Takes in a unique record ID or key as input.
- Action fails if no record that matches the ID is found.
