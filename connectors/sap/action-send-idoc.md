---
title: Workato connectors - SAP action - Send Idoc
date: 2018-12-06 06:00:00 Z
---

# SAP Action - Send IDoc

![Action Send IDoc](/assets/images/connectors/sap/action-send-idoc.png)

This action allows you to send IDoc to your on-premise SAP system, or to your SAP system on a server behind the corporate firewall. Note that you must [configure IDocs in your SAP system](https://docs.workato.com/connectors/sap.html#configure-idoc-in-sap-to-work-with-workato) before using this action.

## Input fields
| Field name | Description |
|---|---|
| IDoc name | The IDoc to send. You can select an IDoc name from the picklist or enter IDoc name directly. Note that the picklist only displays [IDocs that are configured in the partner profile in your SAP system](https://docs.workato.com/connectors/sap.html#create-partner-profile-for-workato). |
| Release number | Check with your SAP admin what IDoc release should be used. By default, Workato uses the earliest release of the selected IDoc. |
| Wait for SAP to process the IDoc? | IDoc is processed asynchronously in SAP. So you can configure the recipe to wait for the processing to finish before moving on to the next recipe step. |
| Check IDoc status every | This field will appear if `Wait for SAP to process the IDoc` is set to `Yes`. Select how often Workato should call SAP. This is useful when you want to control the workload of your SAP system. |

After IDoc is selected, you can select IDoc input segments and fields. In this example, `E1MARAM` and `EDI_DC40` are selected.

![IDoc input segment 1](/assets/images/connectors/sap/idoc-input-1.png)

![IDoc input segment 2](/assets/images/connectors/sap/idoc-input-2.png)

## Output fields
| Field name | Description |
|---|---|
| IDoc number | SAP assigns this IDoc number after receiving the IDoc. |
| Status | Status of the IDoc after being received by SAP. |
| Status code | Status code of the IDoc after being received by SAP. |
| Status description | Status description of the IDoc after being received by SAP. |
| Submission ID | When Workato sends an IDoc to SAP, we will attach a `Submission ID` to that IDoc. You can use that ID to check for IDoc status using action [Check IDoc Status](https://docs.workato.com/connectors/sap/action-check-idoc.html). |
