---
sidebar_position: 1
title: Getting Started
---

Here you can check how to build your capibaraZero. The project, actually, need an ESP32-S3 to enjoy all the features, SD card socket, 5 push buttons and some external modules that are listed below.
<!-- In order to build your capibaraZero you need to buy some modules. The project was born to be run in an ESP32-S3 to enjoy all the features but you can also easily adapt source to run on others ESP boards.  -->

<!-- Here a table with (theoretically) supported features for each boards:

|    Board    |     WiFi attack    |       Bluetooth     |         NFC        |        SubGHZ      |         IR         | USB |
|-------------|--------------------|---------------------|--------------------|--------------------|--------------------|-----|
|   ESP8266   | :white_check_mark: |         :x:         | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
|    ESP32    | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
|   ESP32S2   | :white_check_mark: |         :x:         | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|   ESP32S3   | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|  ESP32C3/C6 | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |

As you can see, the best platform is the ESP32S3 but if you need something smaller, for example, you can go for the ESP32C3/C6.

If you want to use others platform you have to follow this guide. -->

## External module

There are some features that need external module in order to work:

- ST7789 display
- NFC(PN532)
- SubGHZ(SX1276)
- IR(IR emitter + receiver)

For the moment the only option is to make capibaraZero with a breadboard but we are working on a PCB to make device more portable.

After building capibaraZero board, you must flash firmware. You can download the latest from [here](https://github.com/CapibaraZero/fw/releases/)