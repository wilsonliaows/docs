---
title: On-premises Agent - Password Encryption
date: 2018-05-09 12:00:00 Z
---

# Password Encryption
To avoid exposure of any sensitive data (like passwords or private keys) in your configuration file (`config.yml`), you have a choice to encrypt it by using the encryptor tool. The process of encrypting any secret value is as follows:

1. Make sure you have your agent keys properly downloaded and placed into the `conf` folder. They are required for encryption.
2. Run the encryptor tool in your command line.
   - `bin\encryptor.cmd` in Windows
   - `bin/encryptor.sh` script for Unix/MacOS
3. When prompted, enter your secret value twice.
4. The script will print an encrypted text. Example:
```
{encrypted: 'RCVtuGPjJWNqwkFQvhT...'}
```
5. Copy and paste the provided text as a value into `config.yml`. Make sure your value is  in a single line. For example, in a database profile:

```YAML
database:
  sales:
    url: jdbc:postgresql://sales.database:5432/sales
    username: joe
    password: {encrypted: 'RCVtuGPjJWNqwkFQvhT...'}
```

The encryption is based on your agent's private key. You cannot use encrypted value from one agent inside another agent's configuration. Note that only *YAML* values can be encrypted (you cannot encrypt *YAML* property keys).
