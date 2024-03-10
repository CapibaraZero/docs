---
sidebar_position: 1
title: The NFC development
---

The NFC module of capibaraZero is powered by a PN532 module that help us to make differents things:

- Read/Write ISO14443 card(Mifare only)
- Read/Write Felica card
- Read/Write NTAG2xx
- Format tag and more

We also need to add others missing features:

- Add FeliCa authentication support
- Add FeliCa AES(v2) support
- More FeliCa missing commands
- Card emulation

We follow the [Sony documentation](https://www.sony.net/Products/felica/business/tech-support/) and others open source projects to try to implement these commands.

<!-- You can follow the progress of this changes [here](https://github.com/CapibaraZero/NFCFramework/issues) -->

<hr />
MIFARE, MIFARE Ultralight, MIFARE Classic and NTAG are registered trademarks of NXP B.V.

FeliCa is a trademark of Sony Corporation.
