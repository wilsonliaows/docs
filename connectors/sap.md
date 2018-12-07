---
title: Workato connectors - SAP
date: 2018-12-06 06:00:00 Z
---

# SAP
SAP is an enterprise resource planning software used by the largest corporations in the world. Workato's SAP connector allows you to easily integrate with SAP and build powerful automation around it.

There are 3 ways you can connect to SAP on Workato:
1. [Using IDoc](#connect-to-sap-using-idoc) (recommended)
2. Using RFC (coming soon)
3. [Using OData](#connect-to-sap-using-odata) (early beta)

## Connect to SAP using IDoc
![SAP JCo connector](/assets/images/connectors/sap/sap-jco.png)

The SAP On-premise connector can connect to both on-premise SAP system and SAP system on a server behind the corporate firewall. It can handle IDocs coming from SAP (Outbound IDoc) as well as when IDocs being sent to SAP (Inbound IDoc).

### Introduction to IDoc
The term `IDoc` stands for intermediate document. It is simply a data container used to exchange information between SAP systems or between SAP and 3rd-party systems.

IDoc is an open interface which is independent of the internal data structure stored in SAP, and independent of sending or receiving applications. Any application can use IDoc by following the syntax and semantics of IDoc.

IDoc is independent of the direction of data exchange, having both Outbound and Inbound capabilities.

Follow the these steps to connect Workato with SAP using IDoc:
- [Configure IDoc in SAP to work with Workato](#configure-idoc-in-sap-to-work-with-workato)
- [Configure Workato On-prem agent on SAP server](#configure-workato-on-prem-agent-opa-on-sap-server)
- [Configure SAP connector in Workato UI](#configure-sap-connector-in-workato-ui)

### Configure IDoc in SAP to work with Workato
#### Step 1: Register a Program ID for Workato in SAPGUI
In SAP, use Transaction SM59 to create RFC Destination of type TCP/IP (type T).

![RFC connections](/assets/images/connectors/sap/rfc-connection.png)

In the Technical Settings tab, select the `Registered Server Program` option and provide the PROGRAM ID name which has been decided for Workato.

![RFC destination](/assets/images/connectors/sap/rfc-destination.png)

The RFC Connection can be tested once the Workato On-prem Agent (OPA) has been setup (instructions below).

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
Download the SAP JCO connector libraries from the link below. Please ensure that the correct Operating system is selected.

https://support.sap.com/en/product/connectors/jco.html

Once the libraries are downloaded, place them in the `/lib/` directory of the OPA.

#### Step 8: Create SAP profile in OPA
Follow [these instructions](https://docs.workato.com/on-prem/profile.html#sap-connection-profile) to create a SAP profile in OPA.

#### Step 9: Run OPA
Follow [these instructions](https://docs.workato.com/on-prem/run.html) to run the OPA. After it successfully runs, you can move on to set up the SAP connector on Workato.

### Configure SAP connector in Workato UI
#### Step 10: Connect to SAP from Workato

![SAP connection](/assets/images/connectors/sap/sap-jco-connection.png)

There are 2 ways to create a connection in Workato. Click on `App Connections` on the navigation bar and then on `Create a new connection`; or click on the connections tab in a recipe with SAP triggers/actions. Then, follow the steps below:
- Select the connector `SAP`
- Input the OPA profile name for SAP you have created in previous step, in this case `Direct1`
- Select the OPA name, in this case `OPA @ BCone SAP`
- Click `Link your account`. If the connection is successful, you can start building recipes in Workato to talk to SAP.

## Connect to SAP using OData
![SAP OData connector](/assets/images/connectors/sap/sap-odata.png)

The SAP OData connector is currently in beta and can only provide `read` capability, but not `write`. Currently, we recommend using IDoc or RFC instead.

Requirements to use the SAP OData connector:
- Your SAP system needs to support creating OData services (only available in newer SAP versions such as SAP S/4HANA)
- You need to build and expose SAP OData services in your SAP. Learn more [here](https://blogs.sap.com/2016/02/08/odata-everything-that-you-need-to-know-part-1/).
