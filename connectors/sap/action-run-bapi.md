---
title: Workato connectors - SAP action - Run BAPI
date: 2018-12-06 06:00:00 Z
---

# SAP Action - Run BAPI
Note: This action is currently in private beta and not released to public yet. It is coming soon.

Use this action to discover and run a Business Application Programming Interface (BAPI), using Remote Function Call (RFC) in a SAP system.

## Input fields
| Field name | Description |
|---|---|
| BAPI name | Select the BAPI you want to run. This picklist contains all BAPIs in your SAP system. Once the BAPI is selected, all of its data fields can be found in the `Add/remove optional fields` section. |

## Output fields
| Field name | Description |
|---|---|
| BAPI name | Name of the selected BAPI. |
| Status | Status after BAPI is run in SAP. It can be a success or failure status. |
| Error message | The error message if error occurs. |
| Response data | Contains the response data fields from SAP after BAPI is run. |
