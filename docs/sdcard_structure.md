---
sidebar_position: 2
---

# Prepare the SD card

In order to use some feature of the capibaraZero you need to prepare a SD card with the following requirements:

- It must be formatted in FAT32
- You must create the following directory structure to avoid issues:

```
├── captive_portal
├── dhcp_glutton
├── arp_poisoner
├── NFC
├── subghz
    ├── raw_capture
├── ducky
├── wifi
├── bluetooth
└── IR
    ├── signals
    ├── signal_rc
```

If you are on a Linux based distribution with wipefs, parted and mkfs.fat installed, you can use [this script](https://github.com/CapibaraZero/resources/blob/main/scripts/make_sdcard.sh) to make the SD card structure