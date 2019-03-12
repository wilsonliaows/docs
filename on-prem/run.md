---
title: On-premises Agent - Run On-premises Agent
date: 2018-05-09 12:00:00 Z
---

# Run On-premises Agent

## Linux 64-bit and Mac OS X
If your on-premises agent is installed in a Linux or Mac OS, run the on-premises agent using the following bash script:

```
sh <INSTALL_HOME>/bin/run.sh
```
## Windows 64-bit
For on-premises agents installed in Windows, run the agent as a Windows console application or as a [Windows Service](#using-windows-service).

Run the on-premises agent in console mode by launching `Workato` &rarr; `Run Agent (console)` in the Start Menu.

Alternatively, you can use the `Run Agent (console)` shortcut to ensure the agent is successfully connecting to Workato using the provided certificate.

### Using Windows Service
The installer automatically registers the agent as a Windows service called `WorkatoAgent`. However, the agent does not started automatically. Nagivate to the service configuration (**Control Panel &rarr; System and Security &rarr; Administrative Tools &rarr; Services &rarr; WorkatoAgent**) to configure service auto-start.

### Browsing log files
When the on-premises agent is running as a Windows service, log files can be found at: `%SYSTEMROOT%\System32\LogFiles\Workato`. There's also a shortcut to the Workato log directory in the `Workato` group found in the Start Menu.

## Confirming your on-premises agent is running and connected

To check if your on-premises agent is running and connected, head back to the [on-premises agent page](https://www.workato.com/secure_agents). Alternatively, you can find it in the top navigation bar under `Tools` > `On-prem agent`.

![On-premises option](/assets/images/on-prem/navigate-to-opa.gif)
*Navigating to the on-premises agent page*

If successful, you should see the following in the agent you have just created.

![Confirmation of On-premises agent](/assets/images/on-prem/Confirmation-of-OPA.gif)
*on-premises agent page when connected and running*

Your On-premises Agent's status in the top left should be labelled green and `Active`

After you've configured and secured a connection to Workato using your On-premises Agent, its time to [finally set up connections to your recipes in Workato.](/on-prem/connection.md)
