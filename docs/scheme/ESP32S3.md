---
sidebar_position: 3
title: ESP32-S3
---

Here you can find breadboard scheme of CapibaraZero on ESP32 S3 DevkitC:

<img src="/docs/img/scheme/board_bb.png" />

And here the electrical diagram:

<img src="https://github.com/CapibaraZero/resources/blob/main/electrical_diagram/ESP32-S3-DEVKITC-1/MainScheme.png?raw=true" alt="CapibaraZero ESP32-S3-DEVKITC-1 Electrical diagram" />

You can also download the original project [here](https://github.com/CapibaraZero/resources/tree/main/electrical_diagram/ESP32-S3-DEVKITC-1)

## ESP32-S3 pinout

With an ESP32-S3 board you must use the following pin if you doesn't want to modify source code:

### SD card

For the SD card we must use the SPI bus.

- CS: pin 13
- MOSI: pin 35
- MISO: pin 36
- SCK: pin 37

### SX1276

For the SX1276 we must use the SPI bus. We use the same pin of SD card but make sure to change CS pin since is the one that identify the devices on SPI bus.

We also need DIO 1 and DIO 2 pin to receive data from module in OOK/FSK mode. LoRa&trade; mode use SPI to get data.

- NSS: pin 1
- DIO2: pin 15
- DIO1: pin 16
- MOSI: pin 35
- MISO: pin 36
- SCK: pin 37

### PN532

Make sure to put PN532 in I2C mode since we use it in this way. You can also use in UART mode or SPI mode but you need to change source code

- SDA: pin 8
- SCL: pin 9
- IRQ: pin 4
- RST: pin 5

### Display 

- RST: Not connected
- DC: pin 5
- CS: pin 10
- SDA(MOSI): pin 11
- SCL(SCLK): pin 12

### Buttons

- Left: pin 39
- OK: pin 40
- Down: pin 41
- Right: pin 42
- Up: pin 47

<!-- ## Others ESP board

We currently doesn't support any board different than ESP32-S3 but we're planning to support:

- ESP32
- ESP8266

If you want to try to port capibaraZero to others boards you can check [here](/docs/development/porting_to_others_boards/new_porting) a guide to do that. -->
<!-- We support the following non-ESP32S2/S3 boards and you can check the linked guide if you wanna adapt source code to that boards.

- [ESP8266](/docs/development/porting_to_others_boards/ESP8266)
- [ESP32](/docs/development/porting_to_others_boards/ESP32)
- [ESP32C3/C6](/docs/development/porting_to_others_boards/ESP32C3_C6)

-->
