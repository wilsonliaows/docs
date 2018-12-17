---
title: Workato connectors - On-prem command-line scripts
date: 2018-09-01 06:00:00 Z
---

# On-prem command-line scripts
Enterprises often have on-prem applications and databases that are deployed within their corporate datacenter.

Workato's `On-prem command-line scripts` connector allows you to run whitelisted command line scripts in your private network. The command is executed by the on-prem agent. You can whitelist any command that can be run on the machine with the on-prem agent.

![On-prem command-line scripts connector](/assets/images/connectors/on-prem-command-line-scripts/on-prem-scripts-action.png)


## Setup and connection
1. First, follow the instructions to [setup an on-prem agent](https://docs.workato.com/on-prem/setup.html).

2.  Next, find the agent's `config.yml` file and [setup a connection profile](https://docs.workato.com/on-prem/profile.html#command-line-scripts-profile) for `On-prem command-line scripts`. Following the example provided in the documentation provided, we have created a profile called `workday_reports`.

3) [Run the on-prem agent](https://docs.workato.com/on-prem/run.html). Then check your [on-prem agent management page](https://www.workato.com/secure_agents) and make sure your agent is `Active`.

![On-prem agent management page](/assets/images/connectors/on-prem-command-line-scripts/on-prem-scripts-activeprofile.png)

4) After the agent is active, you will be able to setup Workato's `On-prem files` connector. Input the connection profile name and select an On-prem agent, in this case, `workday_reports` and `On-prem command-line scripts`.

![On-prem files connection setup](/assets/images/connectors/on-prem-command-line-scripts/on-prem-scripts-connection.png)

5) Click on `Link your account`. If everything is setup correctly, you will see a `Connection success` message.


## Execute command-line script action

### Command

The commands listed in the on-prem agent's `config.yml` file are the only ones that can be invoked with this connector. The commands are whitelisted when you include them in this file. View how to setup a connection profile [here](https://docs.workato.com/on-prem/profile.html#command-line-scripts-profile).

### Input parameters

The input parameters should be specified when creating your profile in the on-prem agent's `config.yml` file. In the example below, two parameters, `target_directory` and `source_file` were specified. View how to setup a connection profile [here](https://docs.workato.com/on-prem/profile.html#command-line-scripts-profile).

![Parameters specified in yml](/assets/images/connectors/on-prem-command-line-scripts/input-parameters-yml2.png)
*Input parameters in the agent's config.yml file*

Correspondingly, after selecting the command-line script 'Append file to another' in your recipe, the 2 parameters appear in the script input as required values as shown below:

![Parameters on Workato recipe](/assets/images/connectors/on-prem-command-line-scripts/input-parameters-action2.png)
*Input parameters in the recipe*

In the fields, you should provide data pills or static data that you wish to use in your command-line script.

### Other parameters

- **Timeout**
<br>The `timeout` parameter is specified in the `config.yml` file. This property is the maximum duration (in seconds) for each script execution. The value of the timeout parameter defaults to 90 seconds when not provided.

- **Concurrency limit**
<br> The `concurrency_limit` parameter is specified in the `config.yml` file. This value states the maximum number of concurrently executed scripts and defaults to 10 when not provided. After reaching the limit, requests will be queued until prior scripts are executed.

### Escaping parameter values

To escape parameter values, use an escape character when defining a profile in the on-prem agent's `config.yml` file. The escape_char property value is set to '\' on Unix and '""' on Windows.

![Parameters specified in yml](/assets/images/connectors/on-prem-command-line-scripts/input-parameters-yml.png)
*Using an escape character*

In the example shown in the image above, values in the `target_file` name can be escaped with a backslash.


### Invocation styles (Synchronous/asynchronous)

To invoke the command asynchronously, scroll to the 'Remove optional fields' dropdown and select the field 'Run script in background?'. Running the command in the background allows the rest of the recipe steps to continue without waiting for the command to complete (asynchronous).

Leave the option blank or select 'No' and the command will run in the foreground (synchronous). The recipe will wait for the command to complete its run before proceeding to the subsequent steps.


### Output data

The output of the execute command-line script includes:

- **Process ID**
<br>An ID that is unique to the command-line script that was run.  

- **Exit code**
<br>Every command returns an exit code. A successful command returns a 0, while an unsuccessful one returns a non-zero value that is the error code.

- **System out**
<br>System out shows the message that is returned after the command-line script has run. The message is restricted by a 50k character limit.
