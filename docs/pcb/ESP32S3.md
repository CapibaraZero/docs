---
sidebar_position: 2
title: ESP32-S3
---

Based on the electrical diagram, we also create PCB so you can solder components to make your capibaraZero more stable and portable.

The gerber files are available [here](https://github.com/CapibaraZero/resources/tree/main/PCB/ESP32-S3-DEVKITC-1/Gerber_CapibaraZero_PCB_Main_Board_2024-04-09) and the EasyEDA project [here](https://github.com/CapibaraZero/resources/blob/main/PCB/ESP32-S3-DEVKITC-1/PCB_Main_Board_2024-04-09.json)

You also need to build the Navigation Board, for more information go [here](/docs/docs/pcb/Navigation_Board)

This PCB feature also a TP4057 charging module(LX-LBC3) that includes charging and discharging functionality. It requires a 3.7V lithium battery.

BOM:

- 52Kohm resistor
- 100Kohm resistor
- LX-LBC3 charging/discharging module
- 2-way switch button
- 4 XH connector, 6 XH connector
- 1 IR Receiver, 1 IR Transmitter
- 8 pin female socket
- 22 pin female socket
- PN532
- CC1101(Better with included antenna)
- SD Card socket
- ST7789 display(1.54 inch)
- ESP32-S3-DevKitC-1
- 18650 battery socket
- 18650 3.3v battery