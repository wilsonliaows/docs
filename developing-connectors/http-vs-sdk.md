# HTTP vs SDK
Once you have decided to build a connector, you will find yourself deciding between using the HTTP connector or Workato SDK. Please note that the Workato SDK is for developers. If you are not a developer, HTTP connector is your best best.

The question that follows immediately is, how are they different? This document aims to describe the differences and help with deciding between the best approach to enhancing your Workato recipes.

## Authentication
APIs use a wide variety of authentication mechanisms. Some as simple as basic (username/password pair) and some more complex like OAuth 2.0.

|   | HTTP | SDK |
|:-----|:-:|:-:|
| OAuth 2.0 | Yes | Yes |
| Basic auth | Yes | Yes |
| Plain API key/token | Yes | Yes |
| Digest auth | No  | Yes |
| Multi-step auth | No  | Yes |

## Data types
|   | HTTP | SDK |
|:-----|:-:|:-:|
| JSON on REST | Yes | Yes |
| XML on REST | Yes | Yes |
| Form URL encoded | Yes | Yes |
| Multipart form | No  | Yes |
| Binary | No | Yes| 

## Capabilities 
|   | HTTP | SDK |
|:-----|:-:|:-:|
| Trigger closure | No  | Yes |
| Updated record trigger | Not always  | Yes |
| Webhook + poll trigger | No  | Yes |
| Data transformation | No  | Yes |
| Data pre/post processing | No  | Yes |
| Pagination | No  | Yes |
| While loop | No  | Yes |
| For loop | Yes | Yes |

# Others

|   | HTTP | SDK |
|:-----|:-:|:-:|
| Sharing | Yes | Yes |
| Clone n Run Recipes | Yes | No |
| Reusable (cross recipe) | No | Yes |
| Manual webhook | Yes | Yes |
| Auto webhook | Troublesome | Yes |
