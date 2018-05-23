---
title: Workato connectors - File streaming
date: 2018-05-23 06:00:00 Z
---

#File Streaming
Enterprises often have the need to transfer large files of gigabyte-size from one system to another. For example, copying daily database dumps from Amazon S3 to SFTP file storage.

Traditional approach to file transfer usually limits the file size or requires large server. With Workato, the `File streaming` mechanism allows you to transfer files of unlimited size between different systems easily, without any special setup.

## 1. How it works
When transferring a larger file, Workato automatically cuts the file into smaller chunks, then sends 1 chunk at a time to the destination. This allows each chunk to easily fit in Workato's server memory. As a result, the same server can transfer files of any size.

The following diagram illustrates how this works:

![File streaming](/assets/images/features/file-streaming/streaming-graph.png)

## 2. How to use it
Streaming is enabled by default in several Workato file connectors (e.g. Amazon S3, SFTP, On-prem file, etc), and requires no setup.

Whenever you transfer a file from one system to another, Workato will use streaming if possible. If a connector does not support streaming at the moment, there will be hints in the recipe stating the maximum file size you can transfer.

Try using [this sample recipe](https://www.workato.com/recipes/696348#recipe) to transfer a file of at least 100MB from Amazon S3 to SFTP. Streaming is used under the hood here.
