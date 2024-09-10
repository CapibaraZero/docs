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
├── ducky
├── wifi
├── bluetooth
└── IR
    ├── signals
    ├── signal_rc
```