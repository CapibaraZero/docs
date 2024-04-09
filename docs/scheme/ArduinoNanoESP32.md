---
sidebar_position: 3
title: Arduino Nano ESP32
---

Here you can find breadboard scheme of CapibaraZero on Arduino Nano ESP32:

<img src="/docs/img/scheme/arduino_nano_esp32_breadboard.png" />

And here the electrical diagram:

<img src="https://github.com/CapibaraZero/resources/blob/main/electrical_diagram/Arduino_Nano_ESP32/MainScheme.png?raw=true" alt="CapibaraZero Arduino Nano ESP32 diagram"/>

You can also download the original project [here](https://github.com/CapibaraZero/resources/tree/main/electrical_diagram/Arduino_Nano_ESP32)

## Arduino Nano ESP32 pinout

With an Arduino Nano ESP32 board you must use the following pin if you doesn't want to modify source code:

### SD card

For the SD card we must use the SPI bus.

- MISO: pin D2
- SCK: pin D3
- MOSI: pin D4
- CS: pin D5

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

- SCL: pin A4
- SDA: pin A5

### Display 

- CS: pin D9
- DC: pin D10
- RST: pin D11
- SDA(MOSI): D12
- SCL(SCLK): D13

### Buttons

- Up: pin A1
- Left: pin A2
- OK: pin A3
- Down: pin A6
- Right: pin A7
