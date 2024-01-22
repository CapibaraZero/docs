---
sidebar_position: 1
title: Getting Started
---

In order to build your capibaraZero you need to buy something. The project was born to be run in an ESP32-S3 to enjoy all the features but you can also easily adapt source to run on others ESP boards. 

Here a table with (theoretically) supported features for each boards:

|    Board    |     WiFi attack    |       Bluetooth     |         NFC        |        SubGHZ      |         IR         | USB |
|-------------|--------------------|---------------------|--------------------|--------------------|--------------------|-----|
|   ESP8266   | :white_check_mark: |         :x:         | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
|    ESP32    | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
|   ESP32S2   | :white_check_mark: |         :x:         | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|   ESP32S3   | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|  ESP32C3/C6 | :white_check_mark: |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |

As you can see, the best platform is the ESP32S3 but if you need something smaller, for example, you can go for the ESP32C3/C6.

If you want to use others platform you have to follow this guide.

## External module

There are some features that need external module in order to work:

- NFC
- SubGHZ
- IR

The NFC module need a PN532 board, SubGHZ need a CC1101 module meanwhile IR doesn't have any particular requirements but make sure to buy IR emettitor and receiver separately without any board, just the LED.
