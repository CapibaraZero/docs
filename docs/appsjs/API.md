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

## GUI

Some GUI primitives to create interactive application.

- ```create_text_widget(text_color, str, size, text_wrap, x_pos, y_pos, display) ```

**Description: Create and show a Text widget**

**Params:**
- Text color: Color of the text. Please follow this [table](/docs/appsjs/display_color) to put the correct value.
- String: Text to be printed on the display
- Size(integer): Text size.
- Text wrap(boolean): If the width of the display doesn't contains the string, the text will be wrapped.
- X position(integer): Coordinate on X axis where place the text
- Y position(integer): Coordinate on Y axis where place the text
- Display(boolean): Whether display the text or not

**Return: A Text object**

--- 

- ```set_text(text_ptr, str) ```

**Description: Set text of a Text widget**

**Params:**
- Text ptr: Pointer to the Text widget. Can be found in `text.ptr` assuming `text` is the variable where you store the text widget.
- String: Text to be wrote in widget

**Return: null**

--- 

- ```text_set_position(text_ptr, x, y) ```

**Description: Set position of a Text widget**

**Params:**
- Text ptr: Pointer to the Text widget. Can be found in `text.ptr` assuming `text` is the variable where you store the text widget.
- X pos: X position where the widget will be moved
- Y pos: Y position where the widget will be moved

**Return: null**

--- 

- ```create_grid_widget(rows, cols) ```

**Description: Create and show a Grid widget**

**Params:**
- Rows: Rows in the grid container
- Cols: Cols in the grid container

**Return: A Grid object**

--- 

- ```grid_add_widget(widget_ptr) ```

**Description: Add a generic widget to the grid**

**Params:**
- Widget pointer: A pointer reference to widget(can be found under ptr property of a widget object)

**Return: null**

--- 

- ```grid_set_selected(pos, status) ```

**Description: Move the selection to specified position**

**Params:**
- Position(number): Index of the widget to be selected
- Status(boolean): Whether select or deselect the widget

**Return: null**

--- 

- ```grid_set_y_spacing(y_spacing) ```

**Description: Set grid vertical spacing**

**Params:**
- Y spacing(integer): Y(vertical) spacing

**Return: null**

--- 

- ```grid_set_space_betweem(space_between) ```

**Description: Set grid horizontal spacing**

**Params:**
- space_between(integer): Horizontal spacing

**Return: null**

--- 

- ```grid_display() ```

**Description: Display the grid**

**Return: null**

--- 

- ```create_list_widget(text, font_size, font_color, height, rect_color, uid) ```

**Description: Create a List(button) widget**

**Params:**
- Text(string): Text that will be showed inside button
- Font size(number): Font size for the text
- Font color(Color): [ST7789 color](/docs/appsjs/display_color.md) for the Text
- Height(number): Height of the widget
- Rect color(Color): Color of the widget
- Unique ID: ID for your widget. MUST BE UNIQUE. It will be used to call callback.

**Return: null**

You can create the callback using this snippets:

```js
global.LIST_UID = function () { // Replace with your real UID
	// Your JS code
}
```

When the list widget will be clicked, this function will be called.

--- 

- ```goto_main_gui() ```

**Description: Close current app and return to main page**

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

**Return: uint16**

---

- ```print(str) ```

**Description: JS wrapper for Serial.println()**

**Return: null**

---

- ```now() ```

**Description: Return milliseconds from MCU startup**

**Return: uint32**

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
