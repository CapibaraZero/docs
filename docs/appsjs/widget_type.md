---
sidebar_position: 3
title: Widgets type
---

CapibaraZero have some widgets that it's useful to make easier to create GUI easily. Here is a brief of the supported widgets:

## Text

The text widget is the default text widget used in many sections of capibaraZero like WiFi scan, BLE Scan, etc...

## Grid

The grid widget works like a grid container, it's really useful to build clean UI easily. It requires rows and cols and you can add widgets dinamically.

## List

The list widget can be seen as a button. It's the default button widget used in every capibaraZero's section. 

In Javascript you can create the callback using this snippets: 

```js
global.LIST_UID_on_click = function () { // Replace with your real UID
	// Your JS code
}
```