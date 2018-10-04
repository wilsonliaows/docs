---
title: PGP Encryption
date: 2018-10-04 23:00:00 Z
---

# Encrypt file with PGP
Workato allows you to encrypt files using PGP encryption tool.
![PGP Connector](/assets/images/features/files-and-attachments/pgp-connector.png)

In order to use PGP encryption tool, you will need to provide a pair of GPG Public key and Private key.
![PGP Authentication](/assets/images/features/files-and-attachments/pgp-authentication.png)

Follow the instruction below to generate GPG key.

## Generating a GPG key
1. Download and install the most recent version of [the GPG command line tools](https://www.gnupg.org/download/) for your operating system.

2. Open Terminal or Command Prompt.

3. Use the command below to generate a GPG key pair:
`gpg --generate-key`

4. Enter your user ID information. Make sure to enter a valid name and email address.

5. Enter a secure passphrase. Remember this pass phrase, you will need to use it later to setup PGP encryption tool.

5. Use the command below to list GPG keys for which you have both a public and private key.
`gpg --list-secret-keys --keyid-format LONG`

6. From the list of GPG keys, copy the GPG key ID you'd like to use. In this example, the GPG key ID is `7F87F1F21EEAAAB9`:
![GPG key ID](/assets/images/features/files-and-attachments/gpg-key-id.png)

7. Use the commands below to print out Public Key and Private Key, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `7F87F1F21EEAAAB9`:
`gpg --armor --export 7F87F1F21EEAAAB9`
`gpg --armor --export-secret-key 7F87F1F21EEAAAB9`
