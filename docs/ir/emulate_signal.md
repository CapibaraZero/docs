---
sidebar_position: 2
title: Emulate Signal
---

# Emulate Signal

CapibaraZero is able to emulate many protocols but also RAW signal that cannot be decoded by the capibaraZero.

# Requirements

- ESP32-S3
- IR trasmitter
- SD card

## Signal file format

```json
{
  "protocol": 8,
  "address": 32989,
  "command": 151,
  "number_of_bits": 32,
  "extra": 0
  "decoded_raw_data": 1754759389,
  "raw_len": 3,
  "raw_data": [
    181,
    44,
    11
  ]
}
```

### Protocol number:

|         Keyword      |      Protocol Number     |
| -------------------- | ------------------------ |
|         NEC          |            8             |
|         NEC2         |            9             |
|        Onkyo         |            10            |
|        Apple         |           :x:            |
|        Denon         |            4             |
|        Sharp         |            22            |
|      Panasonic       |            11            |
|      Kaseikyo        |            12            |
|      Kaseikyo Denon  |            13            |
|      Kaseikyo JVC    |            15            |
|      Kaseikyo Mitsubishi       |            16            |
|      Kaseikyo Sharp       |            14            |
|      Kaseikyo        |            12            |
|        JVC           |            5             |
|        LG            |            6             |
|        LG2           |            7             |
|        RC5           |            17            |
|        RC6           |            18            |
|     Samsung          |            19            |
|     Samsung48        |            21            |
|     SamsungLG        |            20            |
|      Sony            |            23            |
|   Pulse Distance     |            2             |
|    Pulse Width       |            1             |
|     BoseWave         |            25            |
|   Bang & Olufsen     |            24            |
|       Lego           |            26            |
|       FAST           |            29            |
|      Whynter         |            30            |
|    MagiQuest         |           :x:            |

### Address and Command

Address and command is required for the following protocols: NEC, NEC2, Onkyo, Denon, Kaseikyo(all vendors), LG, LG2, Panasonic, RC5, Samsung(all), Sharp and Sony

### Number of bits

Number of bits is required for the following protocols: Bang & Olufsen, JVC, Lego, RC6 and Whynter

### Extra

Extra is required only for Kaseikyo

### Decoded Raw Data

Decoded raw data is required for the following protocols: Bang & Olufsen, JVC, Lego, RC6 and Whynter

### Raw length

Raw length is required by Pulse Width, Pulse Distance and RAW signals.

### Raw data

Raw data is required by Pulse Width, Pulse Distance and RAW signals.

### Signals list

```json
[
    {
        "protocol": 8,
        "address": 32989,
        "command": 151,
        "number_of_bits": 32,
        "extra": 0
        "decoded_raw_data": 1754759389,
        "raw_len": 3,
        "raw_data": [
            181,
            44,
            11
        ]
    },
    {
        "protocol": 9,
        "address": 32989,
        "command": 159,
        "number_of_bits": 32,
        "extra": 0
        "decoded_raw_data": 1754759312,
        "raw_len": 3,
        "raw_data": [
            181,
            44,
            15
        ]
    }
]
```

CapibaraZero's signal emulator supports also array of signals like the one above. It will sends all the signals in the array consecutively.

### Notes

IR signals captured by the capibaraZero have all of this property even though they are not used. 

Protocols that doesn't support one or more properties like RAW or Pulse Width/Distance have unused property set to 0.

If you are creating a signal it's better to not include unused properties.

## How to emulate an IR signal?

- Go to the IR section
- Select Emulate Signal
- Select file that you want to emulate
- The capibaraZero will transmit the signal through the IR emitter

If you have a list of signals the operation can take some times