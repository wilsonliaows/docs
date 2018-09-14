---
title: Connectors design guide - trigger types
date: 2018-09-05 15:30:00 Z
---

# Trigger types
Triggers are commonly of the following types.

| Trigger type                   | Description                                                                                                                                                               | Example                                                    |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [New record](#trigger-type---new-record)                     | Trigger checks app regularly for new records and picks up newly created records.                                                                                          | `OneDrive` - New file                                      |
| [New/updated record](#trigger-type---newupdated-record)             | Trigger checks app regularly for new or updated records and picks up records when they are newly created or when they get updated.                                        | `OneDrive` - New/updated file                              |
| [New record (real-time)](#trigger-type---new-record-real-time)         | Trigger picks up records instantly when they are created.                                                                                                                 | `Google Sheets` - New row in sheet (real-time)             |
| [New/updated record (real-time)](#trigger-type---newupdated-record-real-time) | Trigger picks up records instantly when they are created or when they get updated.                                                                                        | `Google Sheets` - New/updated row in sheet (real-time)     |
| [New records (batch)](#trigger-type---new-records-batch)            | Trigger picks up newly created records when they are created. Records are grouped together such that each trigger event contains a list of records.                       | `Salesforce` - New leads (batch)                           |
| [New/updated records (batch)](#trigger-type---newupdated-records-batch)    | Trigger picks up records when they are newly created or when they get updated. Records are grouped together such that each trigger event contains a list of records.      | `Salesforce` - New/updated leads (batch)                   |
| [Scheduled records search](#trigger-type---scheduled-records-search-batch)       | Trigger executes a search at scheduled intervals and retrieves a list of results. Records are grouped together such that each trigger event contains a list of records.   | `Quick Base` - Scheduled record search using query (batch) |

## Trigger type - new record
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new records and picks up newly created records since the last time the trigger checked the app.

Behavior of new records triggers:
- Each trigger event in the recipe corresponds to one new record.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and newer records should be processed last.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new records should be missing even if the recipe was stopped and started.

## Trigger type - new/updated record
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new or updated records and picks up any records that has changed since the last time the trigger checked the app.

Behavior of new/updated records triggers:
- Each trigger event in the recipe corresponds to one new or one updated record.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and latest records should be processed last.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new or updated records should be missing even if the recipe was stopped and started.
- The latest version of the record will be picked up when the trigger polls the app, e.g. if a record was updated 3 times between polls, the poll will pick up only the 3rd update as a trigger event.

## Trigger type - new record (real-time)
This is a [real-time trigger](/recipes/triggers.html#real-time-triggers) where the app sends a webhook about newly created records to the trigger as soon as the record is created.

Behavior of new records (real-time) triggers:
- Each trigger event in the recipe corresponds to one new record.
- Trigger should return records in the order they were received, i.e. webhook events received earlier should be processed first.
- When recipe is stopped, it stops listening to webhook events. If possible, the app should try to resend webhook events until it receives a 200 OK from Workato that the trigger has received the webhook. If not possible, a note about webhook events being missed when the recipe is stopped should be included in the trigger's help text, so as to inform users about the limitation.

## Trigger type - new/updated record (real-time)
This is a [real-time trigger](/recipes/triggers.html#real-time-triggers) where the app sends a webhook about newly created or updated records to the trigger as soon as the record is created or updated.

Behavior of new/updated records (real-time) triggers:
- Each trigger event in the recipe corresponds to one new or one updated record.
- Trigger should return records in the order they were received, i.e. webhook events received earlier should be processed first.
- When recipe is stopped, it stops listening to webhook events. If possible, the app should try to resend webhook events until it receives a 200 OK from Workato that the trigger has received the webhook. If not possible, a note about webhook events being missed when the recipe is stopped should be included in the trigger's help text, so as to inform users about the limitation.

## Trigger type - new records (batch)
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new records and picks up newly created records since the last time the trigger checked the app. Results are returned as a list of record (in batches) instead of as single records.

As this is a batch trigger, it should have [batch configuration input](#trigger-input---batch-configuration).

Behavior of new records (batch) triggers:
- Each trigger event in the recipe correspond to a list of newly created records.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and latest records should be processed last.
- If the list of records returned is large, it should be returned as multiple trigger events. E.g. if user sets the batch size to 100, a result list of 215 should be returned in 4 trigger events of list sizes 100, 100, 15 respectively.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new records should be missing even if the recipe was stopped and started.

## Trigger type - new/updated records (batch)
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app regularly for new or updated records and picks up any records that has changed since the last time the trigger checked the app. Results are returned as a list of record (in batches) instead of as single records.

As this is a batch trigger, it should have [batch configuration input](#trigger-input---batch-configuration).

Behavior of new/updated records (batch) triggers:
- Each trigger event in the recipe correspond to a list of newly created records.
- Trigger should return records in chronological order as much as possible, i.e. older records should be processed first and latest records should be processed last.
- If the list of records returned is large, it should be returned as multiple trigger events. E.g. if user sets the batch size to 100, a result list of 215 should be returned in 4 trigger events of list sizes 100, 100, 15 respectively.
- Even when recipe is stopped and started again, trigger should continue to pick trigger events up from where it was stopped. No new records should be missing even if the recipe was stopped and started.

## Trigger type - scheduled records search (batch)
This is a [polling trigger](/recipes/triggers.md#polling-triggers) where trigger checks app on scheduled intervals for records that matches the specified search criteria. Results are returned as a list of record (in batches) instead of as single records. As the search criteria is the same every time the search is conducted (unless the recipe was changed in between intervals), a similar set of records might be returned with this trigger across searches.

As this is a batch trigger, it should have [batch configuration input](#trigger-input---batch-configuration).

Behavior of scheduled records search (batch) triggers:
- Each trigger event in the recipe correspond to a list of newly created records.
- If the list of records returned is large, it should be returned as multiple trigger events. E.g. if user sets the batch size to 100, a result list of 215 should be returned in 4 trigger events of list sizes 100, 100, 15 respectively.
