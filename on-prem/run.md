---
title: On-Premise Agent - Run On-Premise Agent
date: 2018-05-09 12:00:00 Z
---

# Run On-Premise Agent

## Linux 64-bit and Mac OS X
If your on-premise agent is installed in a Linux or Mac OS, run the on-premise agent using the following bash script:

```
<INSTALL_HOME>/bin/run.sh
```

## Windows 64-bit
For on-premise agents installed in Windows, run the agent as a Windows console application or as a [Windows Service](#using-windows-service).

Run the on-premise agent in console mode by launching `Workato` &rarr; `Run Agent (console)` in the Start Menu.

Alternatively, you can use the `Run Agent (console)` shortcut to ensure the agent is successfully connecting to Workato using the provided certificate.

### Using Windows Service
The installer automatically registers the agent as a Windows service called `WorkatoAgent`. However, the agent does not started automatically. Nagivate to the service configuration (**Control Panel &rarr; System and Security &rarr; Administrative Tools &rarr; Services &rarr; WorkatoAgent**) to configure service auto-start.

### Browsing log files
When the on-premise agent is running as a Windows service, log files can be found at: `%SYSTEMROOT%\System32\LogFiles\Workato`. There's also a shortcut to the Workato log directory in the `Workato` group found in the Start Menu.
