---
sidebar_position: 1
title: Getting Started
---

# Getting started with NFC

## Features

- Read UID ISO14443A tag
- Read IDm, PMm and System code of FeliCa™ card
- MIFARE classic© support
- Bruteforce MIFARE© card
- Nested attack for MIFARE© classic
- MIFARE© Ultralight© support
- Read/Write NTAG2xx©
- Dump card blocks


|      Tag type     |    Read sector*    |    Write sector    |   Authentication** | 
| ----------------- | ------------------ | ------------------ | ------------------ |
| Mifare classic    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Mifare Ultralight | :white_check_mark: | :white_check_mark: | :x:                |
| Felica            | :x: | :x: | :x:                |
| NTAG2xx           | :white_check_mark: | :white_check_mark: | :x:                |

*If read sector supported, dump to SD card is possible

Read UID is always supported for all ISO14443A tags

## Requirements

- PN532 module

## Read tag

`libnfc` will try to read data using the [key list of FlipperZero unleashed-firmware](https://github.com/DarkFlippers/unleashed-firmware/blob/dev/applications/main/nfc/resources/nfc/assets/mf_classic_dict.nfc). If you wanna add custom key, append your keys to this file through SSH session, you can find it in `/home/capibarazero/mf_classic_dict.nfc`.

## Write to tag

To write a dump to your tag, the web GUI will ask you a file in `.mfd` format.

<hr />
MIFARE, MIFARE Ultralight, MIFARE Classic and NTAG are registered trademarks of NXP B.V.

FeliCa is a trademark of Sony Corporation.


