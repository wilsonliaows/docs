---
title: Data masking
date: 2017-03-02 02:00:00 Z
---

# Data masking
Workato job history stores data going in and out of every recipe step. In certain use cases there may be sensitive information e.g. employee SSN, date of birth, etc. that should not be visible to Workato account admins.

Data masking enables users to disable display of data at the step level. i.e. users can control display of job history data at every step.

Its important to understant that even when data masking is enabled, data for this step is actually stored within Workato, it is just disabled for display purposes.

From a security standpoint, Workato stores all customer data in encrypted form.

Data masking is only available for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach us at +1 (844) 469-6752.

## Enable data masking
Data can be masked for individual recipe steps, and both input and output data display will be disabled in he job history. To turn off display of this data as part of job history, you will need to check the **Enable data masking** field, found under the **Comment** section for each recipe step.

The following shows enabled data masking for the **Salesforce new account** trigger.

[![https://gyazo.com/5833f02f98a3c6627e19fad3cbe4187b](https://i.gyazo.com/5833f02f98a3c6627e19fad3cbe4187b.gif)](https://gyazo.com/5833f02f98a3c6627e19fad3cbe4187b)
[Example recipe with data masking](https://www.workato.com/recipes/480360)

The following shows job history before data masking.

[![https://gyazo.com/7473c74f2b0437d3576662c0c71135fb](https://i.gyazo.com/7473c74f2b0437d3576662c0c71135fb.gif)](https://gyazo.com/7473c74f2b0437d3576662c0c71135fb)
[Example recipe with data masking](https://www.workato.com/recipes/480360)

The following shows job history after data masking.

[![https://gyazo.com/125aff46f05db794788004afb7def8a0](https://i.gyazo.com/125aff46f05db794788004afb7def8a0.gif)](https://gyazo.com/125aff46f05db794788004afb7def8a0)
[Example recipe with data masking](https://www.workato.com/recipes/480360)