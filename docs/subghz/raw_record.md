---
sidebar_position: 2
title: Raw Record
---

# Getting started

Make sure to connect your SX1276 to CapibaraZero and, optionally, create a new file under subghz/config.json with this structure(or add this property to your config):

```json
{
  "raw_record": {
    "frequency": 433.92,
    "bandwidth": 150.50,
    "deviation": 47.60,
    "modulation": 0,
    "rssi_threshold": -90
  }
}
```

- Frequency can go from 137.0 to 1020.0
- Bandwidth can go from 2.6 kHz to 200 kHz
- Deviation must be lower than 200 kHz
- Modulation can assume 3 values: 0 for OOK(ASK), 1 for FSK and 2 for LoRa&trade;
- RSSI threshold doesn't have any limit but set it carefully

CapibaraZero will save the recorded bytes in SD under a JSON file in the subghz/raw_capture path, <strong>create it before use this feature</strong>.

## How to use

- Go under SubGHZ section
- Select Raw Record
- Stop it when you want