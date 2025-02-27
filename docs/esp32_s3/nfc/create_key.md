---
sidebar_position: 2
title: Create key list to read tag
---

# Why you need a key?

The key is used to read or write the tag sectors and it's needed for the read and dump features. Each sector have Key A and Key B, more details [here](https://github.com/XaviTorello/mifare-classic-toolkit/blob/master/README.md#Keys). In the section we will see how to save a list of authentication keys in the SD card.

## Key format

The key is composed by a 6 hexadecimal bytes and allow NFC reader to read the sectors.

The key format followed by CapibaraZero(and Mifare app) is the following: FFFFFFFFFFFF

### Save key in SD card

To save key in SD card you will need to create a file called <strong>keys.txt</strong> under the path <strong>/NFC/</strong>. Full path will be: /NFC/keys.txt

An example can be:

```txt
FFFFFFFFFFFF
B4C132439EEF
7BBEBOC8FB49
1BC1F6FF32CC
D9D923DAE083
990AEB52D8AC
90DEAB425EA5
40A061DABC43
43D65DC2363C
5AFE558BC710
```

You can also create comment using the # character.

### Keys collection

Here a list of some NFC keys:

[FlipperZero Mifare keys collection](https://github.com/UberGuidoZ/Flipper/tree/main/NFC/mf_classic_dict)

[MifareClassicTool keys](https://github.com/ikarus23/MifareClassicTool/blob/master/Mifare%20Classic%20Tool/app/src/main/assets/key-files/extended-std.keys)
