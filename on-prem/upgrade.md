---
title: On-premises Agent - Upgrading to Newer Versions
date: 2018-05-09 12:00:00 Z
---

# Upgrading to Newer Versions
Follow the instructions below for upgrading an existing agent:

## Windows
1. [Download the newest installer](/on-prem/setup.md)
2. Verify that the agent is stopped (either stop **Workato Agent** Windows service or terminate console-based agent)
3. Uninstall the agent (e.g.  **Start Menu &rarr; Workato &rarr; Uninstall**). This should not change the `config.yml` file and the certificate files (`cert.key`, `cert.pem`) in `C:\Program Files\Workato Agent/conf`.
4. Run the downloaded installer (this will automatically install to the same location)
5. Run the agent. Depending on the setup, either start **Workato Agent** Windows service or run the agent from command line.
6. Make sure your agent is active and verify its version number on the [on-premises agent page](https://www.workato.com/secure_agents).

## Linux/MacOS
1. Verify that the agent process is stopped. The upgrade will fail if any running agents are detected.
2. Run the upgrade script: `bin/upgrade.sh`. Make sure you have enough permissions.
3. Follow the instructions provided by the upgrade script. Confirm the upgrade when prompted.
4. Upon successful completion of the upgrade, run the agent (e.g. `bin/run.sh`)
5. Make sure your agent is active and verify its version number on the [on-premises agent page](https://www.workato.com/secure_agents).
6. The upgrade process is not triggered if no new versions are available. However, it might be necessary to repair a broken installation; in that case use the command line option when running the upgrade: `bin/upgrade.sh --enforce`.
