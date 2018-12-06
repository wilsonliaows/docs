---
title: Workato connectors - SAP action - Check Idoc status
date: 2018-12-06 06:00:00 Z
---

# SAP Action - Check IDOC status
![Action Check IDoc Status](/assets/images/connectors/sap/action-check-idoc.png)

This action allows you to check if an IDoc is successfully processed in SAP, after being sent from Workato.

When you use action [Send IDoc](https://docs.workato.com/connectors/sap/action-send-idoc.html), Workato automatically attaches an unique `Submission ID` to the IDoc. Use this `Submission ID` in the input field below.

## Input fields
| Field name | Description |
|---|---|
| Submission ID | When Workato sends an IDoc to SAP, we will attach a `Submission ID` to that IDoc. Find this `Submission ID` in the output of action [Send IDoc](https://docs.workato.com/connectors/sap/action-send-idoc.html). |

## Output fields
| Field name | Description |
|---|---|
| IDoc number | SAP assigns this IDoc number after receiving the IDoc. |
| Status | Status of the IDoc after being received by SAP. |
| Status code | Status code of the IDoc after being received by SAP. |
| Status description | Status description of the IDoc after being received by SAP. |
