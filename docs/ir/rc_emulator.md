---
sidebar_position: 3
title: RC Emulator
---

# RC Emulator

CapibaraZero can also emulate entire(or partial) remote controller.

Upload the RC that you want to emulate in your SD under /IR/signal_rc

# Requirements

- ESP32-S3
- IR trasmitter
- SD card

## Signal file format

```json
[
{
    "name": "Off",
    "protocol": 7,
    "address": 136,
    "command": 49157
},
{
    "name": "On",
    "protocol": 7,
    "address": 136,
    "command": 49158
}
]
```

### Name

Name property give a name to the command, it's better do not exceed the 6 characters for the name to avoid UI glitch due to small display size.

### Other properties

For the other properties check here: [IR protocol format](/ir/emulate_signal.md#signal-file-format)

### Notes

IR signals captured by the capibaraZero have all of this property even though they are not used. 

Protocols that doesn't support one or more properties like RAW or Pulse Width/Distance have unused property set to 0.

If you are creating a signal it's better to not include unused properties.

The current limit of button is 8 for each file.

## How to emulate an RC remote?

- Go to the IR section
- Select Emulate RC
- Select file that you want to emulate
- The capibaraZero will transmit the signal through the IR emitter when you select a button