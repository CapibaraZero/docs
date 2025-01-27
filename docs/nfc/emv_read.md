---
sidebar_position: 5
title: Read EMV Credit Card
---


:::danger[Warning]
This section is for experimental purposes only and is not meant for any illegal activity/purposes.
We are not responsable of illegal activity made with this tool.
:::

### Getting started

Make sure to correctly connects the PN532 to the ESP board and check that can be found by the firmware. **EMV read feature is only supported by Elechouse PN532, others module won't work due to hardware issue.**

## Tested EMV Cards

- MasterCard(Tested)

Others card may work, please contribute, updating this section if you test a card that is not present here.

## How to read an EMV card

- Go in NFC section
- Select Read EMV
- Put your EMV card near the PN532 reader
- Wait until your capibaraZero will parse the EMV data

