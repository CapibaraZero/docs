---
sidebar_position: 3
title: Dump a card in the SD
---

### Getting started

Make sure to correctly connects the PN532 to the ESP board and check that can be found by the firmware.

## Supported Card

- Mifare Classic, Ultralight and NTAG2xx
- FeliCa cards

## How to read a tag

- Go under NFC section
- Select Polling ISO14443A tag for Mifare or NTAG2xx family otherwise select Polling ISO18092 for FeliCa cards
- Put tag near PN532 reader
- Wait until PN532 read tag details(UID or IDm, PMm and System code)
- Now you can dump tag. The CapibaraZero will try each key you put in the list until it will find the right one for each sector. It will find the Key A and the Key B

The dump will be saved under /NFC

<img src="/img/screens/nfc/dump_tag.png"/>