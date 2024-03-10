---
sidebar_position: 1
title: Getting Started
---

# Getting started with NFC

## Features

- Read UID ISO14443A tag
- Read IDm, PMm and System code of FeliCa™ card
- Read block of FeliCa™ card
- MIFARE classic© support
- Bruteforce MIFARE© card
- MIFARE© Ultralight© support
- Read/Write NTAG2xx©
- Dump card to SDCard


|      Tag type     |    Read sector*    |    Write sector    |   Authentication** | 
| ----------------- | ------------------ | ------------------ | ------------------ |
| Mifare classic    | :white_check_mark: | :x: | :white_check_mark: |
| Mifare Ultralight | :white_check_mark: | :x: | :x:                |
| Felica            | :white_check_mark: | :x: | :x:                |
| NTAG2xx           | :white_check_mark: | :x: | :x:                |

*If read sector supported, dump to SD card is possible

** If Authentication supported, bruteforce is possible

Read UID is always supported for all ISO14443A tags

## Requirements

- PN532 module
- SDCard(optional)

The NFC module of CapibaraZero can read almost any ISO14443A like Mifare Classic, Ultralight, ecc... and ISO18092(FeliCa) card but there are some limitation: 

- Write tag not implemented yet(both MIFARE and FeliCa)
- Tag with different tag than default(FFFFFFFFFFFF) will give authentication error(We will add support to different keys soon)

<hr />
MIFARE, MIFARE Ultralight, MIFARE Classic and NTAG are registered trademarks of NXP B.V.

FeliCa is a trademark of Sony Corporation.


