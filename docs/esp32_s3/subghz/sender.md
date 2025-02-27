---
sidebar_position: 3
title: Sender
---

# Getting started

Make sure to connect your SX1276 to CapibaraZero and add a signal(if you haven't recorded one) under the subghz/raw_capture path in your SD:

```json
{
    "frequency": 433.92,
    "bandwidth": 150.50,
    "deviation": 47.60,
    "modulation": 0,
    "data_length": 2,
    "data": [0, 20, 30]
}
```

- Frequency can go from 137.0 to 1020.0
- Bandwidth can go from 2.6 kHz to 200 kHz
- Deviation must be lower than 200 kHz
- Modulation can assume 3 values: 0 for OOK(ASK), 1 for FSK and 2 for LoRa&trade;
- Data length must match the size of data array

CapibaraZero will read this config and transmit the bytes contained in data using the radio parameters in JSON capture file.

## How to use

- Go under SubGHZ section
- Select Sender
- Select a signal from the file browser(it will display files under subghz/raw_capture path)
- It will automatically go to home when it will finish the transmission.