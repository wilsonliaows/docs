---
title: Workato connectors - SQL Server Execute stored procedure actions
date: 2018-03-19 06:00:00 Z
---

# SQL Server - Execute stored procedure action

## Execute stored procedure
This action lets you execute any stored procedure or functions saved in your database instance.

## Supported versions
This action is only supported for SQL Server 2012 or newer. It uses a default stored procedure `sp_describe_first_result_set` that is only available from SQL Server 2012 onwards.

![Execute stored procedure rows action](/assets/images/mssql/stored-procedure.png)
*Execute stored procedure rows action*

### Stored procedure
First, select a stored procedure to execute. This can be done either by selecting from the pick list, or toggling the input to text mode and providing the full stored procedure name.

### Input parameters
Next, provide any input parameters required for the selected stored procedure.

### Output
If the selected stored procedures outputs multiple datasets, only the first will be returned in this action. The returned dataset size is limited to 100 rows.
