---
title: Workato connectors - MySQL
date: 2018-02-02 06:10:00 Z
---

# MySQL
[MySQL](http://www.MySQL.com/) is an open-source relational database management system hosted either in the cloud or on-premise.

## Supported editions
All editions of MySQL are supported.

## How to connect to MySQL on Workato
The MySQL connector uses basic authentication to authenticate with MySQL.
![Configured MySQL connection](/assets/images/mysql/connection.png)

- **Connection name**

Give this MySQL connection a unique name that identifies which MySQL instance it is connected to.

- **On-prem secure agent**

To connect to on-premise MySQL instances, set up the [on-premise agent](https://www.workato.com/secure_agents). This feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

- **Username**

Username to connect to MySQL.

- **Password**

Password to connect to MySQL.

- **Host**

URL of server where your server is hosted.

- **Port**

Port number that your server is running on. Usually *3306*.

- **Database**

Name of the MySQL database you wish to connect to.

## Working with the MySQL connector

### Table, view and stored procedure
MySQL connector works with all tables, views and stored procedures. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](/assets/images/mysql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](/assets/images/mysql/table_name_text.png)
*Provide exact table/view name in a text field*

### Single row vs batch of rows
MySQL connector triggers/actions read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide a batch size you wish to work with. Batch size can be any number between 1 and 100, the maximum size limit. The default batch size is 100.

![Batch trigger inputs](/assets/images/mysql/batch_trigger_input.png)
*Batch trigger inputs*
