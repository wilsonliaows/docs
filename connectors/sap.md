---
title: Workato connectors - SAP On-premise
date: 2018-12-06 06:00:00 Z
---

# SAP On-premise
![SAP JCo connector](/assets/images/connectors/sap/sap-jco.png)

SAP is an enterprise resource planning software used by the largest corporations in the world.

Workato SAP On-premise connector allows you to connect with SAP system on-premises or on a server behind a corporate firewall. The connector supports using IDoc or RFC to communicate with SAP. Using Workato, you can build powerful automation around SAP and other applications, without writing a line of code.

## Supported SAP versions
Workato's On-premise SAP connector supports SAP ERP ECC 6.0 and later, SAP CRM, SAP SRM, SAP SCM, and any other modules compatible with the NetWeaver platform.

It requires the SAP Java Connector (JCo) to work. Please refer to [SAP Note 107727 - SAP JCo 3.0 release and support strategy](https://launchpad.support.sap.com/#/notes/1077727) for details on JCo versions.

## Supported communication method
The connector supports the following communication methods with SAP:

- Inbound IDoc (send IDoc to SAP)
- Outbound IDoc (receive IDoc from SAP)
- Transactional RFC (invoke synchronous RFC and BAPI in SAP)

### Introduction to IDoc
The term `IDoc` stands for intermediate document. It is simply a data container used to exchange information between SAP systems or between SAP and 3rd-party systems.

IDoc is an open interface which is independent of the internal data structure stored in SAP, and independent of sending or receiving applications. Any application can use IDoc by following the syntax and semantics of IDoc.

IDoc is independent of the direction of data exchange, having both Outbound and Inbound capabilities.

### Introduction to RFC
`RFC` is a SAP protocol that handles communications between SAP systems and third party applications. It is the process of calling a function module which is residing on a different machine from the caller program.

Workato can call SAP RFCs in an SAP system to fetch the data returned or make synchronous updates to the SAP data.

## How to connect to SAP On-premise on Workato

The SAP On-premise connector can connect to both on-premise SAP system and SAP system on a server behind the corporate firewall.

Please follow these steps **strictly in this sequence** to configure the connection:
- [I/ Configure IDoc and RFC in SAP](#configure-idoc-and-rfc-in-sap)
- [II/ Configure Workato On-prem agent on SAP server](#configure-workato-on-prem-agent-opa-on-sap-server)
- [III/ Configure SAP connector in Workato UI](#configure-sap-connector-in-workato-ui)

If you encounter error at any step, please review the [Troubleshooting](#) section.

### Configure IDoc and RFC in SAP
#### Step 1: Register a Program ID for Workato in SAPGUI
In SAP, use Transaction SM59 to create RFC Destination of type TCP/IP (type T).

![RFC connections](/assets/images/connectors/sap/rfc-connection.png)

In the Technical Settings tab, select the `Registered Server Program` option and provide the PROGRAM ID name which has been decided for Workato.

![RFC destination](/assets/images/connectors/sap/rfc-destination.png)

The RFC Connection can be tested once the Workato On-prem Agent (OPA) has been setup ([instructions below](#configure-workato-on-prem-agent-opa-on-sap-server)).

#### Step 2: Define a port for Workato
Use the transaction WE21 to define a port for sending and receiving IDocs of type `Transactional RFC`.

![IDoc ports](/assets/images/connectors/sap/idoc-ports.png)

Enter your `RFC Destination` created in the previous step.

![IDoc port for Workato](/assets/images/connectors/sap/idoc-port-workato.png)

#### Step 3: Create Logical System for Workato
Use Transaction SALE and define Logical System

![Display IMG](/assets/images/connectors/sap/display-img.png)

Create new Logical System to interface IDocs. The name selected for Logical System will be used for Partner Profile creation in the below steps.

![Display IMG](/assets/images/connectors/sap/logical-system.png)

#### Step 4: Create Partner Profile for Workato
Use Transaction WE20 to define a partner profile to send and receive the IDocs

![Partner profiles](/assets/images/connectors/sap/partner-profiles.png)

Create a partner profile of type Logical System and provide the same name as the Logical System. In this configuration, you define the `Message types` that you want to be sent and received from Workato system.

Important Note: Only the `Message types` configured here will be available to use in Workato recipe.

![Message types](/assets/images/connectors/sap/message-types.png)

#### Step 5: Create a distribution model for the partner and message type which will be interfaced with Workato
Use Transaction BD64 to create a Distribution Model for the IDocs which need to be interfaced with Workato system. The direction of flow for the IDocs are configured in this transaction based on the attributes Sender, Receiver and Message type.

Example:
- Sender : T90CLNT090 (SAP system)
- Receiver: WORKATOTST (Workato system/OPA Agent)
- Message Type: DEBMAS

The below configuration in the distribution model will enable SAP to send DEBMAS IDOCs to Workato. A Workato recipe will receive them using the `New IDoc` trigger.

![Distribution model](/assets/images/connectors/sap/distribution-model.png)

### Configure Workato On-prem Agent (OPA) on SAP server
#### Step 6: Download Workato On-prem Agent (OPA)
For IDoc to work with Workato, you need to install a Workato On-prem Agent (OPA) on your SAP server.

Follow [these instructions](https://docs.workato.com/on-prem/setup.html) to download and setup Workato OPA on your SAP server.

#### Step 7: Download the SAP JCO libraries
If you do not already have a license to use SAP JCo libraries, please contact your SAP provider for license.

Download the SAP JCO connector libraries from the link below. Please ensure that the correct Operating system is selected.

https://support.sap.com/en/product/connectors/jco.html

Once the libraries are downloaded, place them in the `lib_ext/` directory of the OPA. If the `lib_ext` directory is not already created, please create it under the root directory of the OPA.

#### Step 8: Create SAP profile in OPA
Follow [these instructions](https://docs.workato.com/on-prem/profile.html#sap-connection-profile) to create a SAP profile in OPA.

#### Step 9: Run OPA
Follow [these instructions](https://docs.workato.com/on-prem/run.html) to run the OPA. After it successfully runs, you can move on to set up the SAP connector in Workato.

### Configure SAP connector in Workato UI
#### Step 10: Connect to SAP from Workato

![SAP connection](/assets/images/connectors/sap/sap-jco-connection.png)

There are 2 ways to create a connection in Workato. Click on `App Connections` on the navigation bar and then on `Create a new connection`; or click on the `Connections` tab in a recipe with SAP triggers/actions. Then, follow the steps below:
- Select the connector `SAP On-premise`
- Input the OPA profile name for SAP you have created in previous step, in this case `Direct1`
- Select the OPA name, in this case `OPA @ BCone SAP`
- Click `Link your account`. If the connection is successful, you can start building recipes in Workato to talk to SAP.

### Troubleshooting
The followings are issues you may encounter during your setup. This list is constantly being updated. If you don't find your issue listed here, please contact Workato Support.

**After clicking `Link your account` in Workato, it fails to connect**
  This is often due to incorrect OPA configuration. Please check the SAP profile in the OPA's `config.yml` file for these errors:

  - `gwhost` is not accessible: In the machine that OPA is installed, use Terminal / Command Prompt to `ping` that `gwhost` and verify that it's accessible.

  - `gwserv` is wrong: Please make sure you input the correct gateway server port number.

  Also, if you install OPA on a separate server and try to connect to SAP in another server, it may result in unforeseen complications. We recommend installing OPA directly on the SAP server instead.

**I don't see the needed IDocs in the dropdown list in Workato**

You need to [configure the needed IDoc in your SAP](#configure-idoc-and-rfc-in-sap) first, before it can be displayed in the dropdown list in Workato.
