---
sidebar_position: 1
title: Frequency analyzer
---

# Getting started

Make sure to connect your SX1276 to CapibaraZero and, optionally, create a new file under subghz/config.json with this structure(or add this property to your config):

```json
{
  "frequency_analyzer": {
    "lora": false
  }
}
```

Set lora to true if you wanna scan for LoRa&trade; RSSI.

The frequency analyzer will scan continuously the frequency range between 139 MHz to 1020 MHz and it will notify to you when the RSSI reach -73 dBm or above.

This can be used if you doesn't know the frequency of a subghz device for example but you won't know modulation or bandwidth.

## How to start a SubGHz frequency analyzer

- Go under SubGHZ section
- Select Frequency Analyzer
- Stop it when you want