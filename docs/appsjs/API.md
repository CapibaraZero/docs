---
sidebar_position: 1
title: API
---

# JS API for the scripts section

## WiFi

---
- ``` wifi_scan() ```

**Description: Start a scan and return result**

**Return: JSON string with scan result**

---

- ``` wifi_sniff(delay, path) ```

**Description: Start a sniff and save pcap to path**

**Params:**
- Delay: Time between switching channels
- Path: Path where save the PCAP

**Return: null**

---

- ``` wifi_sniffer_stop() ```

**Description: Stop the sniffer**

**Return: null**

## BadUSB

- ```init_badusb() ```

**Description: Initialize ESP USB as HID**

**Return: null**

---

- ```init_msc(vendor_id, product_id. product_rev) ```

**Description: Initialize ESP USB as MSC**

**Params(optionals):**
- Vendor ID: Vendor ID for HID interface
- Product ID: Product ID for HID interface
- Product revision: Product revision for HID interface

**Return: null**

---

- ```print_string(str) ```

**Description: Send string to connected device**

**Params:**
- str: String that will be wrote on the connected device

**Return: null**

---

- ```mouse_press() ```

**Description: Send click to PC**

**Return: null**

---

- ```mouse_set_coordinate(x, y) ```

**Description: Set position to mouse**

**Params:**
- x: X position
- y: Y position

**Return: null**

---

- ```release(key) ```

**Description: Release a key**

**Params:**
- key: Key code of key to release

**Return: null**

---

- ```release_all() ```

**Description: Release all keys**

**Return: null**

---

- ```press(key) ```

**Description: Press a key**

**Params:**
- Key: Char code of the key to press

**Return: null**

---

- ```press_raw(key) ```

**Description: Press a raw key**

**Params:**
- Key: Key code to press

**Return: null**

## BLE


- ``` init_ble_js() ```

**Description: Initialize BLE stack**

**Return: null**

---

- ``` start_applejuice() ```

**Description: Start AppleJuice attack**

**Return: null**

---

- ``` start_fastpair() ```

**Description: Start FastPair attack**

**Return: null**

---
- ``` start_swift_pair() ```

**Description: Start SwiftPair attack**

**Return: null**

---
- ``` sniff_ble() ```

**Description: Start a BLE Sniffer**

**Return: null**

---
- ``` randomize_mac_addr() ```

**Description: Randomize BLE MAC Address**

**Return: null**

## IO

- ```pinMode(pin, mode) ```

**Description: Porting to JS of arduino-esp32 pinMode**

**Return: null**

---

- ```digitalWrite(pin, value) ```

**Description: Porting to JS of arduino-esp32 digitalWrite**

**Return: null**

---

- ```digitalRead(pin) ```

**Description: Porting to JS of arduino-esp32 digitalRead**

**Return: null**

---

- ```print(str) ```

**Description: JS wrapper for Serial.println()**

**Return: null**

---

- ```now() ```

**Description: Return milliseconds from MCU startup**

**Return: null**

---

- ```delay(time) ```

**Description: JS wrapper for delay()**

**Return: null**

## IR

---
- ``` init_ir() ```

**Description: Initialize IR stack**

**Return: null**

---
- ``` read_ir() ```

**Description: Read IR signal**

**Return: null**

---
- ``` ir_signal_to_str() ```

**Description: Return a JSON string of recorded signal**

**Return: JSON string of recorded signal**

---
- ``` send_ir_protocol(protocol, addr, cmd) ```

**Description: Send an IR signal**

**Params:**
- Protocol: Protocol number following [this format](http://localhost:3000/docs/ir/emulate_signal#protocol-number)
- Addr: Address
- Cmd: Command

**Return: null**

<!-- - ``` send_ir_protocol(protocol, addr, cmd, num_of_bits) ```

**Description: Send an IR signal**

**Params:**
- Protocol: Protocol number following [this format](http://localhost:3000/docs/ir/emulate_signal#protocol-number)
- Addr: Address
- Cmd: Command
- Num_of_bits: Not implemented

**Return: null** -->

## NFC

- ```nfc_read_uid_iso14443a() ```

**Description: Read UID of ISO14443A card**

**Return: An array rappresenting the UID(4-7 bytes)**

## WiFi

---
- ```wifi_scan() ```

**Description: Start a WiFi scan and return result**

**Return: JSON string of WiFi scan result**

---

- ```wifi_sniff(time) ```

**Description: Start a WiFi sniffer and saving result under default path(/wifi/millis.pcap)**

**Params:**
- Time: Time before switching channel

**Return: null**

---

- ```wifi_sniffer_stop() ```

**Description: Stop WiFi sniffer**

**Return: null**

## Storage

- ```write_to_sd(path, str) ```

**Description: Write a string to file to SD**

**Params:**
- Path: Path where save the file. Must start with "/sd/"
- Str: String to write on file

**Return: null**

---

- ```read_from_sd(path) ```

**Description: Write a string to file to SD**

**Params:**
- Path: Path where save the file. Must start with "/sd/"
- Str: String to write on file

**Return: String with content of the file. If file is missing will be returned an empty string**
