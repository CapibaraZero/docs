---
sidebar_position: 1
title: AppleJuice
---


AppleJuice is an exploit found by [ECTO-1A](https://github.com/ECTO-1A/AppleJuice) that make tons of fake Apple devices advertsing packets. This packets are recognized by Apple real devices like iPhone or iPad and make them crash due to huge flow of packets that device must elaborate.
The porting for ESP32 is made by [RapierXbox](https://github.com/RapierXbox/ESP32-Sour-Apple) and it's adapted for CapibaraZero.

## Vulnerable iOS versions

| iOS version | Compatible |
| --------  | -------            |
| iOS 16.x  | :x:                |
| iOS 17.0  | :white_check_mark: |
| iOS 17.1  | :white_check_mark: |
| iOS 17.2* | :x:                |

*until iOS 17.2 beta 3 the exploit wasn't fix

On the newer versions of iOS, some connection popup spawn but phone doesn't crash anymore.