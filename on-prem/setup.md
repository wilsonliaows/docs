---
title: On-premises Agent - Setting up On-premises Agent
date: 2018-05-09 12:00:00 Z
---

# Setting up On-premises Agent

1) [Install agent](#install-agent)

2) [Create connection profiles](/on-prem/profile.md)

3) [Run agent](/on-prem/run.md)

4) [Upgrade agent](/on-prem/upgrade.md)

## Install agent
### Windows
1) On the top navigation bar, click `Tools` > `On-prem agent`. Alternatively, you can access the [On-premises agent page](https://www.workato.com/secure_agents) directly.

![On-premises option](/assets/images/on-prem/navigate-to-opa.gif)

2) Click `Create a new agent`

![On-premises option](/assets/images/on-prem/create-opa.png)

3) Click `Download key` and `Download agent`, which downloads a `cert.zip` file and an agent installer respectively.

![On-premises option](/assets/images/on-prem/download-key-and-agent.png)

4) Select **Windows** to download the right agent installer.

![On-premises option](/assets/images/on-prem/windows-os.png)

5) Run the agent installer and follow the installation instructions.

6) By default, the agent is installed into `C:\Program Files\Workato Agent` folder and a `Workato` group is created in the Start Menu.

7) During the installation, you can choose to install a Windows service called `WorkatoAgent`.

8) Unzip the `cert.zip` file and move the contents (`cert.key` and `cert.pem`) to `C:\Program Files\Workato Agent/conf` directory. It should be in the same folder as the sample `config.yml` file.

9) After installing your agent on your machine, you will now need to configure your agent by [creating connection profiles](/on-prem/profile.md)

An installation instruction video for Windows is also available [here](https://www.youtube.com/watch?v=Pu3GCk7OY6Q&feature=youtu.be).

### Linux & Mac OS
1) On the top navigation bar, click `Tools` > `On-premises agent`

![On-premises option](/assets/images/on-prem/navigate-to-opa.gif)

2) Click `Create a new agent`

![On-premises option](/assets/images/on-prem/create-opa.png)

3) Click `Download key` and `Download agent`, which downloads a `cert.zip` file and an agent installer respectively.

![On-premises option](/assets/images/on-prem/download-key-and-agent.png)

4) Select your operating system to download the right agent installer.

![On-premises option](/assets/images/on-prem/mac-os.png)

5) Unpack the agent package file into a folder of your choice, which we will refer to as `<INSTALL_HOME>` folder.

6) Unzip the `cert.zip` file and move the contents (`cert.key` and `cert.pem`) to `<INSTALL_HOME>/conf` directory. It should be in the same folder as the sample `config.yml` file.

7) After installing your agent on your machine, you will now need to configure your agent by [creating connection profiles](/on-prem/profile.md)
