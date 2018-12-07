---
title: Workato connectors - SAP trigger - New Idoc
date: 2018-12-06 06:00:00 Z
---

# SAP Trigger - New IDoc

![Trigger New IDoc](/assets/images/connectors/sap/trigger-new-idoc.png)

This trigger allows you to listen to and receive IDocs from on-premise SAP system, or from SAP system on a server behind the corporate firewall. Note that you must [configure IDocs in your SAP system](https://docs.workato.com/connectors/sap.html#configure-idoc-in-sap-to-work-with-workato) before using this trigger.

## Input fields
| Field name | Description |
|---|---|
| IDoc name | The IDoc to listen to. You can select an IDoc name from the picklist or enter IDoc name directly. Note that the picklist only displays [IDocs that are configured in the partner profile in your SAP system](https://docs.workato.com/connectors/sap.html#create-partner-profile-for-workato). |
| Release number | Check with your SAP admin what IDoc release should be used. By default, Workato uses the earliest release of the selected IDoc. |

## Output fields
The trigger will output all segments and data fields of the IDoc received from SAP. In this sample IDoc, `EDI_DC40` and `E1MARAM` segments.

![Trigger New IDoc output](/assets/images/connectors/sap/trigger-new-idoc-output.png)
