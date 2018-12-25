---
title: Hash & Binary formulas
date: 208-06-03 05:00:00 Z
---
# Hash & Binary formulas
Workato supports a variety of hash and binary formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not 
all Ruby methods are supported. You can always [reach out to us](/contact-us.md) to add additional formulas to the whitelist.
Syntax and functionality for these formulas are generally unchanged. Take note that most formulas will return an error and 
stop the job if it tries to operate on nulls (expressed as `nil` in Ruby).

## encode(encoding)
This function encodes `input` string to given encoding format.

### Example

| Example               | Result |
| --------------------- | ------ |
| `"Jean Marie".encode("UTF-8")` | Jean Marie  |


## encode_base64
This function encode input using Base64 algorithm

### Example
| Example                        | Result           |
| ------------------------------ | ---------------- |
| `"Jean Marie".encode_base64`   | SmVhbiBNYXJpZQ== |

## encode_sha256
This function Encode input using SHA256 algorithm

### Example
| Example                        | Result                                                             |
| ------------------------------ | ------------------------------------------------------------------ |
| `"Jean Marie".encode_sha256`   | 0x9fc4c6f861eccbd430d62c2ce4528cd8a2e62142c0c17567d1ac2442f61e860b |

## encode_urlsafe_base64
This function Encode using urlsafe(input) modification of Base64 algorithm

### Example
| Example                                                                | Result                                                                                                      |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------  |
| `""http://localhost:8080/api/users?name=abc".encode_urlsafe_base64"`   | aHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS91c2Vycz9uYW1lPWFiYw== |


## encode_www_form
This function join hash into url-encoded string of parameters

### Example
| Example                                                 | Result              |
| ------------------------------------------------------- | ------------------- |
| `{"apple" => "red green", "2" => "3"}.encode_www_form`  | apple=red+green&2=3 |

## decode_base64
This function decodes the input using Base64 algorithm

### Example
| Example                           | Result              |
| --------------------------------- | ------------------- |
| `SmVhbiBNYXJpZQ==.decode_base64`  | Jean Marie          |

## decode_urlsafe_base64
This function Decode using urlsafe modification of Base64 algorithm

### Example
| Example                                   | Result              |
| ----------------------------------------- | ------------------- |
| `SmVhbiBNYXJpZQ==.decode_urlsafe_base64`  | Jean Marie          |

## as_utf8
This function Decode byte sequence as UTF-8 string

### Example
| Example                                     | Result              |
| ------------------------------------------- | ------------------- |
| `"0J/RgNC40LLQtdGC ".decode_base64.as_utf8` | Привет              |


## as_string(encoding)
Decode byte sequence as string in given encoding

encoding: encoding to use e.g. `utf-8`

### Example
| Example                                              | Result              |
| ---------------------------------------------------- | ------------------- |
| `"0J/RgNC40LLQtdGC ".decode_base64.as_utf8('utf-8')` | Привет              |

## to_hex
Converts binary string to its hex representation

### Example
| Example                                    | Result                   |
| ------------------------------------------ | ------------------------ |
| `"0J/RgNC40LLQtdGC ".decode_base64.to_hex` | d09fd180d0b8d0b2d0b5d182 |

## hmac_sha1(key)
This function Creates HMAC_SHA1 signature using key.

`key`: secret key

### Example
| Example                                    | Result                   |
| ------------------------------------------ | ------------------------ |
| `"0J/RgNC40LLQtdGC ".decode_base64.to_hex` | d09fd180d0b8d0b2d0b5d182 |

e.g. `"username:password:nonce".hmac_sha1("key")`

## hmac_sha256(key)
This function Creates HMAC_SHA256 signature using key.

`key`: secret key

### Example
| Example                                             | Result                                                             |
| --------------------------------------------------- | ------------------------------------------------------------------ |
| `"username:password:nonce".hmac_sha256("ABC1234S")` | 0x895ff63e1f7feb477fb68554d20aa416db6ae1b379b11af6993588a5ceabe11f |


## hmac_sha512(key)
This function Creates HMAC_SHA512 signature using key.

`key`: secret key

### Example
| Example                                             | Result                                                             |
| --------------------------------------------------- | -----------------------------------------------------------------  |
| `"username:password:nonce".hmac_sha512("ABC1234S")` | 0x7140480cfc34d1a339479b5853904c12624d0d59642357bbd281cf80f9d87d.. |



## binary?
This function checks the input is binary array.

### Example
| Example                                                                      | Result  |
| ---------------------------------------------------------------------------- | ------  |
| `"0x7140480cfc34d1a339479b5853904c12624d0d59642357bbd281cf80f9d87d".binary?` | true    |
| `"sdeiwdsosppssjddjddj479b5853904c12624d0d59642357bbd281cf80f9d87d".binary?` | false   |



