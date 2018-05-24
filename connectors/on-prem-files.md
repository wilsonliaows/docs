---
title: Workato connectors - On-premises files
date: 2018-05-15 06:00:00 Z
---

# On-premises Files
Enterprises often have files that are stored on premises. These files are within the corporate internal systems and behind the corporate firewalls.

Workato's `On-prem files` connector allows you to securely connect to those on-premises files and build automation around them.

![On-prem files connector](/assets/images/connectors/on-prem-files/on-prem-files-connector.png)

## How to connect to on-premises files
1) First, follow the instructions to [setup an on-prem agent](https://docs.workato.com/on-prem/setup.html).

2) Next, in the agent's `config.yml` file, [setup a connection profile](https://docs.workato.com/on-prem/profile.html) for `On-premises file systems`.

In this example, we create a connection profile named `myfiles`. The address below that is the on-premises folder that we want Workato to monitor:

![On-prem files connection profile](/assets/images/connectors/on-prem-files/connection-profile.png)

3) [Run the on-prem agent](https://docs.workato.com/on-prem/run.html). Then check your [on-prem agent management page](https://www.workato.com/secure_agents) and make sure your agent is `Active`.

![On-prem agent management page](/assets/images/connectors/on-prem-files/OPA-page.png)

4) After the agent is active, you will be able to setup Workato's `On-prem files` connector. Input the connection profile name and select an On-prem agent, in this case, `myfiles` and `My agent @ personal Macbook Air`.

![On-prem files connection setup](/assets/images/connectors/on-prem-files/connector-setup.png)

5) Click `Connect`. If everything goes well, you should see `Connection success` as shown in the image above.
