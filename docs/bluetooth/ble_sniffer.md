---
sidebar_position: 3 
title: BLE Sniffer
---

The BLE Sniffer of CapibaraZero can sniff BLE advertising packets, retrive some informations from it and save the captured data in a PCAP file.

## Supported additional data beacons

From this beacon packets, capibaraZero can retrieve some additional informations:

- Ibeacon
- Eddystone beacon

All the captured packets can be saved in a PCAP file on the SD card and read with Wireshark.

### Supported informations

| Beacon type | ServiceUUID | ManufacturerID |   Major  |   Minor  |   UUID   |   Power  | Found URL | Encoded URL | Temperature | Battery Voltage | Advertise count | Time from last reboot |
| -------- | ------ | -------------- | -------- | -------- | -------- | -------- | --------  | ----------- | ----------- | --------------- | --------------- | -------- |
| iBeacon      | :x: |  :white_check_mark:  | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:                | :x:      | :x: | :x: | :x: | :x: |
| EddystoneURL | :white_check_mark: | :x:                 | :x:                |  :x:                | :x:                | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :x: | :x: | :x: | 
| EddystoneTLM  | :white_check_mark:  | :x:    | :x: | :x: | :x: | :x: | :x: | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | 

## Start the sniffing

- Go under bluetooth attack section of CapibaraZero
- Select BLE sniffer bluetooth
- Choose if save PCAP to SD card and until scanning finish(60 seconds)
