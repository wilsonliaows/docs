---
title: Workato connectors - Oracle EBS
date: 2017-02-16 06:15:00 Z
---

# Oracle E-Business Suite

## Pre-requisites

1. Install [Oracle E-Business Suite Integrated SOA Gateway](https://docs.oracle.com/cd/E26401_01/doc.122/e20925/T511175T578675.htm)

2. Install [Workato on-prem agent](https://www.workato.com/secure_agents)

3.	In the Oracle E-Business Suite, deploy User PL/SQL REST service (internal name: FND_USER_PKG) with name “user”. Below are the steps to install PL/SQL REST service

a.	Login to Oracle EBS

b.  From the Main menu Click on “Integrated SOA Gateway” -> “Integration Repository"

![Oracle Applications Home page](/assets/images/connectors/oracle-ebs/oracle-applications.png)
*Oracle Applications Home Page*

c.  Click on "Search"

![Search on page](/assets/images/connectors/oracle-ebs/search.png)
*Click on Search*

d.  Search for Interface name "User" and Select the service with internal name "FND_USER_iPKG"

![Search for User](/assets/images/connectors/oracle-ebs/interface.png)
*Locate FND_USER_iPKG*

e. Go to the "REST Web Services" tab. Enter the service name as “user” and click on “Deploy”.

![User service name](/assets/images/connectors/oracle-ebs/web-service.png)
*Locate the REST web services and enter 'user'*


