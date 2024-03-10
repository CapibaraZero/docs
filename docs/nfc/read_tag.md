---
sidebar_position: 2
title: Read NFC Tag
---

### Getting started

Make sure to correctly connects the PN532 to the ESP board and check that can be found by the firmware.
<!-- Now make sure that you have the right key if you wanna read all the sector, otherwise you will get an authentication error. -->

## Supported Card
- Mifare Classic, Ultralight and NTAG2xx
- FeliCa cards

## How to read a tag

- Go under NFC section
- Select ISO14443A tag for Mifare or NTAG2xx family otherwise select ISO18092 for FeliCa cards
- Put tag near PN532 reader
- Wait until PN532 read tag details(UID or IDm, PMm and System code)
- Now you can dump tag or bruteforce it(only MIFARE)
