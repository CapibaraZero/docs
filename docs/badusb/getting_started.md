---
sidebar_position: 1
title: Getting started
---

capibaraZero can act as HID device and supports BadUSB attacks using Rubber Ducky payload.

## Requirements

- ESP32-S3
- SD Card

### Supported keywords

capibaraZero fully supports DuckyScript™ 1.0 and partially supports 3.0.

It supports all the keystroke injection commands.

The following keywords can be used:

|         Keyword        |      Supported     |
| ---------------------- | ------------------ |
|     STRING/STRINGLN    | :white_check_mark: |
|           DELAY        | :white_check_mark: |
|      DEFAULT_DELAY     | :white_check_mark: |
|        Cursor keys     | :white_check_mark: |
|       Modifier keys    | :white_check_mark: |
|         Lock keys      | :white_check_mark: |
|       System keys      | :white_check_mark: |
|  Key modifier combo    | :white_check_mark: |
|           REM          | :white_check_mark: |
|        REM_BLOCK       | :white_check_mark: |
| WAIT_FOR_BUTTON_PRESS  | 	    :warning:     |
|        BUTTON_DEF      |         :x:        |
|     DISABLE_BUTTON     | :white_check_mark: |
|      ENABLE_BUTTON     | :white_check_mark: |
| LED_G/LED_R/LED_OFF    | :white_check_mark: |
|        Attackmode      |      :warning:     |
|          DEFINE        | :white_check_mark: |
|           VAR          | :white_check_mark: |
|        Operators       |         :x:        |
| Conditional statements |         :x:        |
|          Loops         |         :x:        |
|         Functions      |         :x:        |
|      Randomization     | :white_check_mark: |
|         Jitter         | :white_check_mark: |
|   Wait for lock keys   |      :warning:     |

- Attackmode can be parsed but implementation is not available yet. 
- Wait for lock keys can be parsed but implementation is not available yet.
- Wait for button press can be parsed but implementation is not available yet.
- The other keywords(also the one that there aren't in the table) will be available in future