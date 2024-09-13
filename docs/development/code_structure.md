---
sidebar_position: 1
title: Code structure
---

# CapibaraZero's code structure

## Feature framework

Almost every feature(NFC, IR, etc.) have a framework that works as layer between UI code that launch the attack and the attack code. This make more easy to fix or improve a single attack.

Also, this separation made the attack code easy to find and easier to understand. The typical framework code is designed to works without the capibaraZero's code so the framework can be used as a standalone library for every project.

## Attack code

Every section have a corresponding section_attacks.cpp/.hpp files, they are used to start an attack from the framework and usually are the attack code includes also tasks that need to be run to avoid UI block or because they run until they are stopped by the user or by a condition. This tasks, except in rare cases, controls also the UI if the content is dynamic(e.g WiFi scan progress).

## UI navigation

The (Feature)Navigation.cpp/.hpp declare functions that will be called from the UI, they are usually a wrapper for the attack code since UI page require a void function without parameters.

## UI pages

A UI pages is controlled by the Page class that define primitives for the UI movement(up, down, etc.), all the primitives can be overloaded if the page require it(for example we overload primitives in MainPage). 

Basically, every page is composed by a grid that includes all the widgets that you see on the page. The button call a specified callback passed in his constructor and usually call a void function without parameters from the FeatureNavigation.cpp/.hpp

## Pins.h

The file include/pins.h define all the pin used by the CapibaraZero's firmware, if you are planning to port a new board to the CapibaraZero's firmware you should define all the pin in that file following the name of the other board pin beyond the correct #ifdef macro for your board, if your board doesn't specify a specific flag like the [ESP32-S3 DevkitC](https://github.com/platformio/platform-espressif32/blob/f6ec3926f9f660ee9abada8540ffe1e205da4bbf/boards/esp32-s3-devkitc-1.json), you can define a build_flag in the platformio.ini

To find if your board expose a build_flag you can check [here](https://github.com/platformio/platform-espressif32/tree/develop/boards) the build_flags for your board