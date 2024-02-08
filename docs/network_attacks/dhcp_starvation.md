---
sidebar_position: 1
title: DHCP starvation
---

# DHCP starvation(aka DHCPGlutton)

DHCP starvation is a network attack that aim to finish ip in the DHCP pool by sending fake DHCP discover in the network.

Now since ESP32/8266 have only WiFi interface we can't spoof packet MAC address otherwise would be dropped by the AP, so we need to rethink the attack to adapt it to a WiFI only device.

About this, CapibaraZero includes a DHCP starvation attack called DHCPGlutton that spoof WiFi interface MAC address with a randomly generated one and then connected to the AP. This operation is being done until DHCP pool end.

Clearly this operation is a bit slower than sending spoofed packet through ethernet but it can still terminate a DHCP pool. It's important to underline that although ESP disconnect, the IP remain allocated until the finish of the lease time, so it's important to attack network with a DHCP lease time long(at least 1 hour)

## How to use it?

- Create config.json file like [this](/example_config/dhcp_glutton/config.json) under /dhcp_glutton/ folder in the SD card. This file will contains SSID and password of AP that you want to attack.
- Select NetAt.(Network attacks)
- Now select DHCPGlutton
- Start the attack and wait until DHCP pool end. You can stop attack when you want. 

It can takes up to 15 minutes for a /24 network. More clients are connected, Less time CapibaraZero needs to finish DHCP pool.
Smaller are the subnet, less time CapibaraZero needs to finish DHCP pool.

### Current limitation

- Attack is slow
- RNG sometimes doesn't randomize MAC address(this slow down the attack)

### GUI screenshot

<img src="/img/screens/network_attacks/dhcp_glutton.png" alt="DHCPGlutton screnshot" />
