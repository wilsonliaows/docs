---
title: Workato connectors - SAP action - Run RFM
date: 2018-12-06 06:00:00 Z
---

# SAP Action - Run RFC
Use this action to discover and run a Business Application Programming Interface (BAPI) or Remote Function Method (RFM), via Remote Function Call (RFC) in a SAP system.

## Input fields
| Field name | Description |
|---|---|
| BAPI/RFM name | Select the BAPI/RFM you want to run. This picklist contains all BAPIs/RFMs in your SAP system. <br><br>Note that if your SAP system has a large number of BAPIs/RFMs, this picklist and searching may take up to 15 seconds to load. Searching will be faster if you copy & paste the BAPI/RFM name into this field, instead of typing the name. We are working on improving this limitation. <br><br>Once the BAPI/RFM is selected, all of its data fields can be found in the `Add/remove optional fields` section. |
| Auto commit | Some BAPIs/RFMs do not commit the changes by default. Select `Yes` if you want force BAPI/RFM to automatically commit. If `No`, whether BAPI/RFM will auto commit depends on its own settings. |

## Output fields
| Field name | Description |
|---|---|
| BAPI/RFM name | Name of the selected BAPI/RFM. |
| Status | Status after BAPI/RFM is run in SAP. It can be a success or failure status. |
| Error message | The error message if error occurs. |
| Response data | Contains the response data fields from SAP after BAPI/RFM is run. |
