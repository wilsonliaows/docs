---
title: XML Parser by Workato
date: 2018-03-16 15:00:00 Z
---

# XML Parser by Workato

## Parse XML document

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XML type</td>
      <td>
        Select the level of detail to parse the XML.<br>
        <b>Simple XML without attributes</b> - only basic XML that ignores most attributes will be parsed.<br>
        <b>Full XML with attributes</b> - full XML with all attributes will be parsed.
      </td>
    </tr>
    <tr>
      <td>Sample document</td>
      <td>
        A sample XML that has the same structure of all XML to be parsed. This is used to generate the output datatree.
      </td>
    </tr>
    <tr>
      <td>Document</td>
      <td>
        The actual XML content to be parsed. This should contain XML in the same format at the sample XML document.
      </td>
    </tr>
  </tbody>
</table>

### Simple XML without attributes

The default XML type is a simple one and will ignore most attributes, except *type*. Let's use the following XML that represents a contact record as an example.

```xml
<Contact>
    <Name type="C">
      <First>Sally</First>
      <Last>Jones</Last>
    </Name>
    <Address>
      <Street verified="">20450 Stevens Creek Blvd #150</Street>
      <City verified="">Cupertino</City>
      <ST verified="">CA</ST>
      <Postal verified="">95014</Postal>
    </Address>
    <Phone validation="1" mobile="">4105554119</Phone>
</Contact>
```

When we use this as the **Sample document** with **Simple XML without attributes** type selected, a simplified output is generated.

![Datatree of simple XML without attributes](/assets/images/xml-parser/simple-xml-output.png)
*Datatree of simple XML without attributes*

Notice that the *type* attribute is generated for the `<Name>` tag but all the `<Phone>` attributes were dropped. This is fine if your integration use case does not involve attribute values.

### Full XML with attributes

However, if you need to access these values for validation or simply to sync these values, you will have to choose **Full XML with attributes** type. Using the same XML of a contact record above, let's take a look at what the output will look like.

![Datatree of full XML with attributes](/assets/images/xml-parser/full-xml-output.png)
*Datatree of full XML with attributes*

At first glance, we see that all attributes are now included in the output datatree. Additionally, the structure of the output is slightly different. Each XML tag is now presented as an array with the value of the tag presented as a <kbd>Content</kbd> datapill.
