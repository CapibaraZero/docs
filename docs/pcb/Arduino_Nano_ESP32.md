---
sidebar_position: 1
title: Arduino Nano ESP32
---

Based on the electrical diagram, we also create PCB so you can solder components to make your capibaraZero more stable and portable.

The gerber files are available [here](https://github.com/CapibaraZero/resources/tree/main/PCB/Arduino_Nano_ESP32/Gerber_Arduino_Nano_ESP32_CapibaraZero_PCB_Arduino_Nano_ESP32_CapibaraZero_2024-04-09) and the EasyEDA project [here](https://github.com/CapibaraZero/resources/blob/main/PCB/Arduino_Nano_ESP32/PCB_Arduino_Nano_ESP32_CapibaraZero_2024-04-09.json)

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
- 15 pin female socket
- CC1101(Better with included antenna)
- PN532
- SD Card socket
- ST7789 display(1.54 inch)
- Arduino Nano ESP32
- 18650 battery socket
- 18650 3.3v battery