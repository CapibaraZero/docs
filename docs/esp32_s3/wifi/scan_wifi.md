---
sidebar_position: 1
title: Wifi scanning
---

The WiFi scanning scan the enviroments to search AP and store SSID, BSSID, RSSI, channel and auth type. You can use this data to filter packet in sniffer or you can save results in SD card.

## Requirements

- ESP32
- SD card(optional)

### How to use?

- Go under the WiFi section
- Select scan
- Wait until scan finish
- Decide if you wanna save result in SD, use it for subsequent attacks or back to main menu

The scan results will be saved under /wifi

Scanning GUI: 

<img src="/img/screens/wifi_scanning.png" />
<img src="/img/screens/wifi/wifi_details.png" />
<img src="/img/screens/wifi/wifi_network_save.png" />
