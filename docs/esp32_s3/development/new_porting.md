---
sidebar_position: 2
title: Add a new board support
---

# Create a new porting

capibaraZero is borned for ESP32-S3-DevKitC-1 and that is the only way to use all the features but you can also port for other platforms. Here is a little guide to explain general steps to port capibaraZero to a new platform.

## Add a new env to platformio

In order to add a new platform, you need to create a new environment for the ESP that you wanna port in the platformio.ini, for example for an ESP32, you need to create an environment based on your board. 

For example:

```ini
[env:lilygo_t_embed_cc1101]
platform = espressif32
framework = arduino ; Must not be changed
board = lilygo-t-display-s3
build_type = debug  ; Give better stacktrace for debugging
monitor_filters = esp32_exception_decoder ; Give better stacktrace for debugging
lib_deps = 
	${common.lib_deps_builtin}  ; FW libraries
	${common.lib_deps_external} ; FW libraries
	mathertel/RotaryEncoder@^1.5.3  ; Device specific library
build_flags = 
	${common.build_flags} ; FW build flags
	-DARDUINO_USB_MODE=1  ; Device flags
	-DARDUINO_USB_MSC_ON_BOOT=0 ; Device flags
	-DLILYGO_T_EMBED_CC1101=1 ; Describe board. This flag will identify your board in fw code
	-DENCODER_NAVIGATION=1  ; Specify navigation(button or encoder)
	-DCC1101_SUBGHZ=1 ; Specify SubGHZ chip
```

Let's break down this section of platformio.ini:

- `[env:lilygo_t_embed_cc1101]` is the name of the environment. Please use the name of the board with underscore instead of space
- `platform = espressif32` It must not be changed if you want to add support for an ESP32 board. If you wanna try to add another MCU family, you must change platform but not framework
- `board = lilygo-t-display-s3` is the configuration of the board. You can find all supported boards [here](https://registry.platformio.org/platforms/platformio/espressif32/boards)
- `lib_deps` describe the libraries needed for the board. It includes all the libraries needed for the firmware and you can add also specific device library
- `build_flags` contains all the flags needed by the board. It can safeguard if needed

Now you may want to try to build, if you are lucky, the build will be successful else you need to fix errors to adapt code([you may need safeguard](#add-safeguard) to avoid linker errors).

Generally if you are building for an ESP32 based platform, shouldn't be any errors but probably for ESP8266 based boards you need to change some code.

## Add Peripherals code

Since some boards need some specific code for a proper initialization, we decided to separate every board in a different c++ class. This section can be found [here](https://github.com/CapibaraZero/fw/tree/main/lib/Peripherals)

Each Peripherals have three methods:

- `init_i2c_bus()`: Initialize I2C bus. It may needed if you have multiple device on same bus.
- `init_sd()`: Initialize SD card. 
- `init_navigation()`: Initialize navigation buttons/encoder.

In order to add a board you need to follow this steps:

- Create a new pinout header under `include/boards/BOARD_NAME/pins.h`. BOARD_NAME must be named like board environment name from platformio.ini
- Add pinout under `include/pins.h`. Remember to use the right build_flag for your board
- Create a folder under `lib/Peripherals` named like board environment name from platformio.ini
- Create a new class in your created folder name with this convention `Peripherals_BOARD_NAME`. You can copy the template class from ESP32-S3-DevKitC. Remember to change all the #ifdef header safeguard with your build_flag