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
This function willEncodes input string to given encoding.
encoding: Name of the encoding. Eg: Windows-1252

e.g. `"Jean Marie".encode("Windows-1252")` 

## encode_base64
This function will Encode input using Base64 algorithm

e.g. `"Jean Marie".encode_base64`

## encode_sha256
This function Encode input using SHA256 algorithm

e.g. `"Jean Marie".encode_sha256`

## encode_urlsafe_base64
This function Encode using urlsafe modification of Base64 algorithm

e.g. `[Pill].encode_urlsafe_base64`


## encode_www_form
This function join hash into url-encoded string of parameters

e.g. `{"apple" => "red green", "2" => "3"}.encode_www_form`, result: `"apple=red+green&2=3"`

## decode_base64
This function decodes the input using Decode using Base64 algorithm

e.g. `[].decode_base64`

## decode_urlsafe_base64
This function Decode using urlsafe modification of Base64 algorithm

e.g. `[].decode_urlsafe_base64`

## as_utf8
This function Decode byte sequence as UTF-8 string

e.g. `"0J/RgNC40LLQtdGC ".decode_base64.as_string('utf-8')`
`"0J/RgNC40LLQtdGC ".decode_base64.as_utf8`

## as_string(encoding)
Decode byte sequence as string in given encoding

encoding: encoding to use

e.g. `"0J/RgNC40LLQtdGC ".decode_base64.as_string('utf-8')`
`"0J/RgNC40LLQtdGC ".decode_base64.as_utf8`


## to_hex
Converts binary string to its hex representation

e.g. `"0J/RgNC40LLQtdGC ".decode_base64.to_hex`

## hmac_sha1(key)
This function Creates HMAC_SHA1 signature using key.

`key`: secret key

e.g. `"username:password:nonce".hmac_sha1("key")`

## hmac_sha256(key)
This function Creates HMAC_SHA256 signature using key.

`key`: secret key

e.g. `"username:password:nonce".hmac_sha256("key")`

## hmac_sha512(key)
This function Creates HMAC_SHA512 signature using key.

`key`: secret key

e.g. `"username:password:nonce".hmac_sha512("key")`


## binary?
This function checks Is the value a binary array? Returns true or false

e.g.`[Payload].binary?`






