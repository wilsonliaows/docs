---
title: Workato connectors - SQL Server Execute stored procedure actions
date: 2018-03-19 06:00:00 Z
---

# SQL Server - Execute stored procedure action

## Execute stored procedure
This action lets you executed any stored procedure or functions saved in your database instance.

![Execute stored procedure rows action](/assets/images/mssql/stored-procedure.png)
*Execute stored procedure rows action*

### Stored procedure
First, select a stored procedure to execute. This can be done either by selecting from the pick list, or toggling the input to text mode and providing the full stored procedure name.

### Input parameters
Next, provide any input parameters required for the selected stored procedure.

### Output
If the selected stored procedures outputs multiple datasets, only the first will be returned in this action. The returned dataset size is limited to 100 rows.
