---
title: Workato connectors - Google Speech-to-Text action - Convert short speech to text
date: 2018-12-11 06:00:00 Z
---

# Google Speech-to-text action - Convert short speech to text
This action allows you to convert a short audio file (less than 1 minute) into a text transcript.

## Input fields

| Field name | Description |
|---|---|
| Audio content | Accepts a content datapill, or audio content as a string. Workato will automatically convert the provided audio content into base-64 format. |
| Language | The language code of the audio file, as listed [here](https://cloud.google.com/speech-to-text/docs/languages). |
| Encoding | Encoding of the audio file. Note that Google has not supported MP3 input yet. MP3 file must be converted to one of [these supported encodings](https://cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig#AudioEncoding) before inputing into this action. |
| Sample rate in Hertz | Sample rate of the audio file. Valid value range is 8000-48000. Usual optimal rate is 16,000, but varies across encodings and settings. Please refer to [Google documentation](https://cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig#audioencoding) to figure out the best sample rate. |
| Enable word time offsets | If true, the output includes a list of words, the start and end time offsets (timestamps) for those words. |

## Output fields

| Field name | Description |
|---|---|
| Transcript | The extracted text transcript from the audio. |
| Confidence score | The confidence level for the entire transcription, with 0.0 as the lowest and 1.0 as the highest. |
| Words | List of words extracted from the audio. This list contains the output fields below. |
| - Start time | Time when the word appears in the audio. |
| - End time | Time when the word ends in the audio. |
| - Word | The extracted word. |
