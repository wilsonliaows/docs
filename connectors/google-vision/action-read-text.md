---
title: Workato connectors - Google Vision action - Read text from image
date: 2018-12-11 06:00:00 Z
---

# Google Vision action - Read text from image
This action allows you to read text from an image. Image can be one of these 2 types:

- **A photo:** For example, a photograph might contain a street sign or traffic sign. Google Vision will return the extracted string, as well as individual words, and their bounding boxes.

   ![Abbey Road photo](/assets/images/connectors/google-vision/abbey_road.png)

- **A scanned document:** Google Vision will return the extracted text, together with page, block, paragraph, word, and break information.

  ![Scanned document](/assets/images/connectors/google-vision/document_text.png)

## Input fields

| Field name | Description |
|---|---|
| Image content | Accepts a file contents datapill, a string, a public URL or a Google Cloud Storage URI. |
| Image type | Based on the selected image type (photo or scanned document), Google Vision will optimize the output accordingly. |

## Output fields

| Field name | Description |
|---|---|
| Text annotations | List of all individual words extracted from the image. |
| Locale | Locale of the extracted word. |
| Text | The extracted word. |
| Bounding poly | The position of the word on the image. Includes X and Y coordinates. |
| Full text annotation | The full text extracted from the image. |
| Pages | Includes details on the pages, such as width, height, paragraph position, etc. |
| Full text | The full extracted text from the image. |
