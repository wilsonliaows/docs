---
title: Workato connectors - SAP trigger - New Idoc
date: 2018-12-06 06:00:00 Z
---

# SAP Trigger - New IDoc

![Trigger New IDoc](/assets/images/connectors/sap/trigger-new-idoc.png)

This trigger allows you to listen to and receive IDocs from an on-premise SAP system, or from an SAP system on a server behind the corporate firewall.

A few things to take note:

- You must [configure IDocs in your SAP system](https://docs.workato.com/connectors/sap.html#configure-idoc-in-sap-to-work-with-workato) before using this trigger.

- Currently, 1 IDoc can only be listened by the trigger of 1 recipe. Using multiple recipes to listen to the same IDoc will result in some recipes missing the IDoc. Workato will make enhancement to improve this in the near future, but at present, a simple workaround is to use [Callable recipes](/features/callable-recipes.md). For details on how to do this, please see the [Troubleshooting section](#troubleshooting) at the end of this doc.


## Input fields
| Field name | Description |
|---|---|
| IDoc name | The IDoc to listen to. You can select an IDoc name from the picklist or enter IDoc name directly. Note that the picklist only displays [IDocs that are configured in the partner profile in your SAP system](https://docs.workato.com/connectors/sap.html#create-partner-profile-for-workato). |
| Release number | Check with your SAP admin what IDoc release should be used. By default, Workato uses the earliest release of the selected IDoc. |

## Output fields
The trigger will output all segments and data fields of the IDoc received from SAP. In this sample IDoc, `EDI_DC40` and `E1MARAM` segments.

![Trigger New IDoc output](/assets/images/connectors/sap/trigger-new-idoc-output.png)

## Troubleshooting

### I use multiple recipes to listen to the same IDoc and some recipes miss the IDoc

Currently, 1 IDoc can only be listened by the trigger of 1 recipe. Using multiple recipes to listen to the same IDoc will result in some recipes missing the IDoc.

A simple workaround is to use [Callable recipes](/features/callable-recipes.md). You will create 1 recipe to listen to the IDOC, then call other recipes to execute different workflows. Here is an example:

- [Main recipe](https://www.workato.com/recipes/898859): This recipe will listen to IDoc `MATMAS01` (Material Master). Then depending on the IDoc's information, it will execute the other 2 callable recipes.

  ![Main recipe listening to IDoc](/assets/images/connectors/sap/main-recipe-listen-idoc.png)

- [Callable recipe 1](https://www.workato.com/recipes/898861): This recipe will upsert Salesforce Product based on the received SAP IDoc.

  ![Callable recipe to upsert Salesforce Product](/assets/images/connectors/sap/callable-recipe-upsert-salesforce.png)

- [Callable recipe 2](https://www.workato.com/recipes/898870): This recipe will upload a file to Box with the contents from the SAP IDoc.

  ![Callable recipe to upload file to Box](/assets/images/connectors/sap/callable-recipe-upload-box.png)
