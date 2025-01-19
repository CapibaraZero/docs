---
sidebar_position: 1
title: Web Flasher
---

CapibaraZero has a convenient web flasher found at [flash.capibarazero.com](https://flash.capibarazero.com).

You must select the device you are using, as well as the version of the firmware you wish to install. Follow through the steps as prompted.

:::warning

Web flasher works **only** with Chromium-based browsers such as Google Chrome and Microsoft Edge.

:::


## Known Issues

`failed to execute 'open' on 'serialport': failed to open serial port`

This is known to affect Linux users. The solution is to run the following which gives the user read/write access to the USB device
```bash
sudo setfacl -m u:$USER:rw /dev/ttyACM0
```
