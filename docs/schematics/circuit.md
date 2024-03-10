---
sidebar_position: 2
title: The circuit
---

Here you can find breadboard scheme of CapibaraZero:

<img src="/docs/img/scheme/board_bb.png" />

## ESP32-S3 pinout

With an ESP32-S3 board you must use the following pin if you doesn't want to modify source code:

### SD card

For the SD card we must use the SPI bus.

- CS: pin 21
- MOSI: pin 35
- MISO: pin 36
- SCK: pin 37

<!-- ### CC1101

For the CC1101 we must use the SPI bus. We use the same pin of SD card but make sure to change CS pin since is the one that identify the devices on SPI bus

- MOSI: pin 11
- MISO: pin 12
- SCK: pin 13
- CS: pin 35
- GDO2: pin 20
- GDO0: pin 21 -->

### PN532

Make sure to put PN532 in I2C mode since we use it in this way. You can also use in UART mode or SPI mode but you need to change source code

- SDA: pin 8
- SCL: pin 9
- IRQ: pin 4
- RST: pin 5

### Display 

- RST: pin 4
- DC: pin 5
- CS: pin 10
- SDA(MOSI): pin 11
- SCL(SCLK): pin 13

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
