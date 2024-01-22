---
sidebar_position: 1
title: Create a new porting
---

# Create a new porting

capibaraZero is borned for ESP32-S3-DevKitC-1 and that is the only way to use all the features but you can also port for other platforms. Here is a little guide to explain general steps to port capibaraZero to a new platform.

## Add a new env to platformio

By default, platformio.ini have an esp32-DevKitC-1 environment, in order to add a new platform, create a new environment for the ESP that you wanna port, for example for an ESP8266 mini, you need to create an environment, change platform and board according to your necessity and keeps lib_deps and build_flags. Now you may want to try to build, if you are lucky, the build will be successful else you need to fix errors to adapt code([you may need safeguard](#add-safeguard) to avoid linker errors).

Generally if you are building for an ESP32 based platform, shouldn't be any errors but probably for ESP8266 based boards you need to change some code.

## Change pins

We use the [include/pins.h](https://github.com/CapibaraZero/fw/blob/main/include/pins.h) header to manage pins, by default there are ESP32-S3 pins and you need to change it according to your board.
There are also 2 build flag in platformio.ini to define PN532 pins.
Once you finish, build and check if capibaraZero GUI starts or you need to troubleshoots panic or issues.

## Add safeguard

If you are adding a board that are not based on a officially supported platform(ESP32 or ESP8266) or you are using particular board(mini version, etc...), you may want to add safeguard #ifdef in GUI element to avoid unsupported attacks.

[Here](https://github.com/CapibaraZero/fw/blob/main/lib/UI/gui.hpp#L45) and [here](https://github.com/CapibaraZero/fw/blob/main/lib/UI/gui.cpp#L43) you can find an example with ESP32-S2 and S3: ESP32-S2 doesn't supports BLE and only ESP32-S2/S3 supports BadUSB attacks.

The safeguard usually need an #ifdef or #ifndef and CONFIG_IDF_TARGET_ESP32XX.

If you are using board with missing features(for example mini version of a board like ESP8266 mini or something like that), define a custom CONFIG_IDF_TARGET_XXX in build_flags under platformio.ini so you can use everywhere that flag and depends on the selected environment. 
