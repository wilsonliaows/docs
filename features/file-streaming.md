---
title: Workato connectors - File streaming
date: 2018-05-23 06:00:00 Z
---

# File Streaming
Enterprises often have the need to transfer large files of a few hundred megabytes from one system to another. For example, copying daily database dumps from Amazon S3 to SFTP file storage.

Traditional approaches to file transfer usually have a small file size limit or require large server for processing. With Workato, the `File streaming` mechanism allows you to transfer large files between different systems easily, without any setup.

## 1. How it works
When transferring a large file, Workato automatically breaks the file into smaller chunks, then sends one chunk at a time to the destination. This allows each chunk to easily fit in Workato's server memory. As a result, the same server can technically transfer large files of any size.

The following diagram illustrates how this works:

![File streaming](/assets/images/features/file-streaming/streaming-graph.png)

## 2. How to use it
Streaming is enabled by default in several Workato file connectors (e.g. Amazon S3, SFTP, On-prem file, etc), and requires no setup.

Whenever you transfer a file from one system to another, Workato will use streaming if possible. Note that currently, there is a [job](https://docs.workato.com/recipes/jobs.html) runtime limit of 2000 seconds, so the maximum file size you can transfer is about 300MB.

Try using [this sample recipe](https://www.workato.com/recipes/696348#recipe) to transfer a file of up to 300MB from Amazon S3 to SFTP. Streaming is used under the hood here.
