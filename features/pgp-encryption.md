---
title: PGP Encryption
date: 2018-10-04 23:00:00 Z
---

# Encrypt file with PGP
Using PGP encryption tool in Workato recipe, you can perform common cryptographic functions like encrypting and decrypting files, based on the common PGP standard.

![PGP Connector](/assets/images/features/files-and-attachments/pgp-connector.png)

Depending on what operation you wish to perform, you may need to provide the public key, private key, or both keys to setup the PGP encryption tool.

![PGP Authentication](/assets/images/features/files-and-attachments/pgp-authentication.png)

Follow the instruction below to generate new PGP keys if you do not have a set already.

## Generating PGP keys
1. Download and install the most recent version of [the GPG command line tools](https://www.gnupg.org/download/) for your operating system.

2. Open Terminal or Command Prompt.

3. Use the command below to generate a PGP key pair:

    `gpg --generate-key`

4. Enter your user ID information. Make sure to enter a valid name and email address.

5. Enter a secure passphrase. Remember this pass phrase, you will need to use it later to setup PGP encryption tool.

6. Use the command below to list PGP keys for which you have both a public and private key.

    `gpg --list-secret-keys --keyid-format LONG`

7. From the list of PGP keys, copy the PGP key ID you'd like to use. In this example, the PGP key ID is `7F87F1F21EEAAAB9`:

    ![PGP key ID](/assets/images/features/files-and-attachments/gpg-key-id.png)

8. Use the commands below to print out Public Key and Private Key, substituting in the PGP key ID you'd like to use. In this example, the PGP key ID is `7F87F1F21EEAAAB9`:

    `gpg --armor --export 7F87F1F21EEAAAB9`

    `gpg --armor --export-secret-key 7F87F1F21EEAAAB9`
