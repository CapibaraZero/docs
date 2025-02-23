---
sidebar_position: 3
title: From Source
---

## Requirements:

:::warning

It is strongly advised to use baremetal **Linux**, or **WSL**, for installing from source.

:::

- Python3
- [Platformio](https://platformio.org/)
- GNU Bison
- Flex

Platformio can also be installed as a python package, requiring python 3 to be available:
`python3 -m pip install -U platformio`

GNU Bison and Flex can be installed with your Linux package manager of choice (apt/pacman)

## Source Code:

Source code can be found on the official Capibara Zero firmware repository, on Github. [Source](https://github.com/CapibaraZero/fw)

To obtain the source code for a particular release, it can be downloaded from the [releases page](https://github.com/CapibaraZero/fw/releases/).

## Install:

:::info

If you installed platformio from Python pip, you may need to run `python3 -m platformio run` instead of `pio run`.

:::

```
# Init NFC libs
bash init_libs.sh

pio run
# OR python3 -m platformio run

# To upload firmware
pio run -t upload
```
