---
sidebar_position: 4
title: Write dump to tag
---

# Getting started

Make sure to correctly connects the PN532 to the ESP board and check that can be found by the firmware.

## Supported Card

- MIFARE Classic
- MIFARE Ultralight/NTAG

## Dump format

CapibaraZero natively support FlipperZero's nfc file but if you want to write a tag that have different key than standard(FFFFFFFFFF), you may use the CapibaraZero's JSON format for NFC write:

```json
{
    "type": "0",
    "blocks": {
        "4": {
            "key_type": 0,
            "key": [255, 255, 255, 255, 255, 255],
            "data": [108, 117, 105, 115, 108, 108, 97, 109, 97, 115, 46, 101, 115, 0, 0, 0]
        },
        "5": {
            "key_type": 0,
            "key": [255, 255, 255, 255, 255, 255],
            "data": [108, 117, 105, 115, 108, 108, 97, 109, 97, 115, 46, 101, 115, 0, 0, 0]
        }
    }
}
```

Type can be 0 for MIFARE Classic or 1 for MIFARE Ultralight/NTAG.

Blocks is the list of blocks or pages for MIFARE Classic/Ultralight.

key_type can be 0 for KEYA or 1 for KEYB.

key is the key for the single block. **Both key_type and key will be ignored for MIFARE Ultralight.**

Data field is the array of hexadecimal data to be put in the block.

**For a MIFARE Classic the limit is 16 byte, for MIFARE Ultralight is 4 byte.**

## How to use NFC write feature

- Go under NFC section
- Select Polling ISO14443A Card
- Put tag near PN532
- Wait until PN532 recognize tag
- Select Write Tag
- Select the file of dump that you want to write on tag(**remember to upload file in NFC/dumps**)
- Wait until it finished. At the end there will be a 6 seconds timeout, you can check written sectors or unwrittable sectors(for example caused by wrong key/key_type or bricked card)

