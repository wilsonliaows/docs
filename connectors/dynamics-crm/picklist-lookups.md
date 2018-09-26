---
title: Microsoft Dynamics CRM - cached picklist lookups
date: 2018-09-21 06:00:00 Z
---

# Cached picklist lookups
In Microsoft Dynamics CRM, picklist fields are returned with only the internal value of the picklist selection. For example, for the picklist "Contact industry" describing the industry that a contact works in, the internal value of "100000000" is returned representing the picklist option selected, instead of the contextual value of "Retail", "Energy", or "Education".

As these contextual picklist labels are important for integrations, where we're typically moving app-agnostic values (i.e. "100000000" does not mean anything to another app without the exact same picklist), we have implemented cached picklist lookup support into the connector.

These lookups act like an external lookup table stored in Workato, and are efficient since you're not making API lookup calls against Dynamics CRM when using this feature. The first time you interact with a specific record in Workato (e.g. Opportunity record or Customer record), we save your picklists and picklist option sets for that record. Subsequently, whenever you're working with the same record, you obtain these picklist values from Workato's cache, instead of a lookup call to Dynamics CRM.

## Single-select picklists
For single-select picklists, they show up as datapills in an object. The datapills that you might have been using are still available for use, so your recipes will not break as a result of this new feature. However, they have been marked '(deprecated)' — we highly recommend that you switch to using the new datapills.

![Additional single-select picklist datapills in the datatree, and deprecated picklist datapill](/assets/images/connectors/microsoft-dynamics-CRM/single-select-picklist-values.png)
*Additional single-select picklist datapills in the datatree, and deprecated picklist datapill*

## Multi-select picklists
For multi-select picklists, they show up as datapills in a list. The datapills that you might have been using are still available for use, so your recipes will not break as a result of this new feature. However, they have been marked '(deprecated)' — we highly recommend that you switch to using the new datapills.

![Additional multi-select picklist datapills in the datatree, and deprecated picklist datapill](/assets/images/connectors/microsoft-dynamics-CRM/multiselect-picklist-values.png)
*Additional multi-select picklist datapills in the datatree, and deprecated picklist datapill*

## Missing options in the picklist
As Workato caches your picklists and their available options the first time you interact with the record type, (e.g. Opportunity records or Customer records), picklists saved in Workato might not always be in sync with picklists stored in your Dynamics CRM account.

A schema refresh will not work to update the picklists cached in Workato. To update these picklists in Workato, you need to disconnect and reconnect to your Dynamics CRM account.
