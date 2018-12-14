---
title: Workato connectors - Amazon S3 action - Download file
date: 2018-12-13 23:00:00 Z
---

# Amazon S3 action - Download file
This action downloads contents of a file in Amazon S3. File contents can be used in subsequent steps of the recipe to upload the file into other applications.

This action uses [streaming mechanism](https://docs.workato.com/features/file-streaming.html) and can support large file. Though the maximum file size you can download depends on how fast the download finishes within Workato's job runtime limit. Consider enabling [Amazon S3 transfer acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) to speed up the download.

## Input fields
| Field name | Description |
|---|---|
| Bucket region | The region of the bucket that the file resides, e.g. us-west-2. In Amazon S3, go to **Bucket > Properties > Static website hosting** to find your region in the Endpoint URL. |
| Bucket | The bucket that the file resides. Select a bucket from the picklist or enter the bucket name directly. |
| File | The file to download. Select a file from the picklist or enter file path directly. |
| Use transfer acceleration | Set to Yes to accelerate up data transfer. Go to **Bucket>Properties>Transfer acceleration** to enable [transfer acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) before using this setting. |
| Chunk size (in kilobytes) | File contents will be [streamed](https://docs.workato.com/features/file-streaming.html) in chunks of this size. Default is 1024 KB, minimum is 32 KB. By default, Workato automatically manages the chunk size. Configure this when you want to optimize the data throughput yourself. Larger chunk size will increase throughput, but may exceed API limit. |

## Output fields
| Field name | Description |
|---|---|
| File contents | The contents of the file. This is a [streaming object](https://docs.workato.com/features/file-streaming.html). |
| Size | The size of the file in bytes. |
