---
sidebar_position: 2
title: From Release
---

## Requirements:

- Python3
- esptool

esptool is a Python module which is installed through `pip3 install esptool`.

## Obtain From Release

1. Navigate to the firmware releases tab on Github: [releases](https://github.com/CapibaraZero/fw/releases/) and select the version you want to install.
2. Download the release zip for the device you have.
3. Unzip the downloaded file, and open a terminal in the newly created folder.

## Install

```bash
python3 -m esptool --chip esp32s3 --port UPLOAD_PORT --baud 460800 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 80m --flash_size detect 0x0000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin
```
