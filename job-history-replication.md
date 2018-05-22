---
title: Job history replication
date: 2017-05-22 03:15:00 Z
---

# Job history replication
Workato can store the job history of all your recipes to an S3 bucket. 
When enabled, we will create a JSON file for each job. This file will 
contain job summary, job report, and details of all executed recipe steps. 
The file size varies from 1kB to 1MB based on the details present in the line 
execution logs.

This is an add-on feature. Please reach out to us at +1 (844) 469-6752 or talk to your account representative to enable job history replication in your account.

## Replication setup
Click on the `Job history replication` tab in your `Account Settings`.

![Job history replication setup](/assets/images/job-history-replication/settings.png)
*Job history replication setup.*


| Name             | Description           |
|------------------|-----------------------|
| Enable S3 replication   | Choose 'yes' to replicate job history data in Amazon S3. |
| S3 connection | Choose an Amazon S3 connection that has region and bucket. The connection should have read/write access to the bucket.                    |
| Store line by line execution logs     | Store input, output and error details of all executed lines.                    |

## Job history file

Workato creates a JSON file for each completed or failed job in your account. 

### File name

The file path and name format is as follows:


| File Part             | Description           |
|------------------|-----------------------|
| path        | _user_id/jobs/recipe_id/YYYYMMDD/**formatted_job_id**/_<br><br>_**formatted_job_id**_ is the job id expanded in to a 21 digit number(left padded with 0s) and split in to 3 character fragments separated by `/`. <br><br>_Eg: Job id `100` is formatted as `000/000/000/000/000/000/100`_ |
| name        | _user_id-recipe_id-job_id-YYYYMMDDHHMMSS-**status**.json_<br><br>_**status**_ is the job completion status: _succeeded_ or _failed_<br><br>_Eg: `5234-234-100-20180521000000-succeeded.json`_ |


Eg: _`5234/jobs/234/20180521/000/000/000/000/000/000/100/5234-234-100-20180521000000-succeeded.json`_

### File content

The job log file contains the job summary data, job custom report data and job execution logs.

```javascript
{
	"id": 100,
	"flow_id": 234,
	"parent_id": null,
	"calling_job_id": null,
	"status": "completed",
	"started_at": "2018-05-21T00:00:00Z",
	"completed_at": "2018-05-21T00:00:10Z",
	"error_type": null,
	"error": null,
	"title": "hello world",
	"is_poll_error": false,
	"report": {
		"name": "Xavier D'Souza",
		"age": 35
	},
	"lines": [
		{
			"recipe_line_number": 0,
			"adapter_name": "clock",
			"adapter_operation": "timer",
			"input": {
				"interval": "1"
			},
			"output": {
				"time": "2018-05-21T23:14:41.783555+00:00"
			},
			"mask_data": false
		},
		{
			"recipe_line_number": 1,
			"adapter_name": "clock",
			"adapter_operation": "get_time",
			"input": {},
			"output": {
				"time": "2018-05-21T16:14:41.963964-07:00"
			},
			"mask_data": false
		}
	]
}
```
