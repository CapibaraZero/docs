---
slug: capibarazero-0-5-1-out
title: CapibaraZero 0.5.1 is out!
authors: andreock
tags: [new_version, firmware, lilygo_t_embed_cc1101]
---

The latest release bring new features and new board support!

<a href="https://github.com/CapibaraZero/fw/releases">Download it and flash it now!</a>

<!--truncate-->

After almost 2 months of development CapibaraZero 0.5.1 is finally out!

Here are a list of new features:

- BadUSB: Add support to ATTACKMODE(HID or MSC)
- NFC: Add write and format feature for MIFARE tags
- GUI: Use hardware SPI(make it faster)
- File browser: Make page scrollable
- Support LilyGo T-Embed CC1101
- Fix various crash

## NFC changes

You can use dump from FlipperZero to write your favorite MIFARE tag or use the capibaraZero's file format if you want to customise the key for specific tag.

## GUI changes

GUI transition will be smoother with faster response time

## File browser changes

CapibaraZero isn't limited to 4-5 files for IR emulator or BadUSB anymore! You can upload many files as you want without any limit!

## LilyGo T-Embed CC1101

CapibaraZero support LilyGo T-Embed CC1101! It's a great board with a really nice case and a good battery life. Perfect to make a portable capibaraZero without building PCB or printing case!