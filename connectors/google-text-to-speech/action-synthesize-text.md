---
title: Workato connectors - Google Text-to-Speech action - Convert text to speech
date: 2018-12-11 06:00:00 Z
---

# Google Text-to-Speech action - Convert text to speech
This action allows you to convert a text into a synthetic voice audio, supporting 30 voices and multiple languages.

## Input fields

| Field name | Description |
|---|---|
| Text | The text to convert into voice audio. Can accept a datapill or raw text. |
| Voice language | The language code of the voice, as listed [here](https://cloud.google.com/speech-to-text/docs/languages). Note that the conversion accuracy differs across languages. For certain languages, Google may not have full support for it yet. |
| Voice gender | The gender of the voice. |
| Audio encoding | The encoding of the output audio file. |

## Output fields

| Field name | Description |
|---|---|
| Audio content | String content of the converted audio. You can input this to the `File contents` field of `Upload file` action from any file connector such as Box, Dropbox, etc., and create an audio file. |
