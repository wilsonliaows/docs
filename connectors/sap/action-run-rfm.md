---
title: Workato connectors - SAP action - Run RFM
date: 2018-12-06 06:00:00 Z
---

# SAP Action - Run RFM
Use this action to discover and run a Remote Function Method (RFM), using Remote Function Call (RFC) in a SAP system.

## Input fields
| Field name | Description |
|---|---|
| RFM name | Select the RFM you want to run. This picklist contains all RFMs in your SAP system, including BAPIs. Once the RMF is selected, all of its data fields can be found in the `Add/remove optional fields` section. |
| Auto commit | Many RFMs do not commit the change by default. Select 'Yes' if you want RFM to automatically commit. |

## Output fields
| Field name | Description |
|---|---|
| RFM name | Name of the selected RFM. |
| Status | Status after RFM is run in SAP. It can be a success or failure status. |
| Error message | The error message if error occurs. |
| Response data | Contains the response data fields from SAP after RFM is run. |
