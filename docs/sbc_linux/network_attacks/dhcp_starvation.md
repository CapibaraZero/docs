---
sidebar_position: 2
title: DHCP starvation
---

# DHCP starvation(aka DHCPGlutton)

DHCP starvation is a network attack that aim to finish ip in the DHCP pool by sending fake DHCP discover in the network. CapibaraZero can send hundreds of DHCP discover requests so it performs also a DoS attack that usually, if you are targeting a poor DHCP server, may result in a DHCP server crash.

## Requirements

- An ethernet interface(since WiFi check for fake MAC address requests)