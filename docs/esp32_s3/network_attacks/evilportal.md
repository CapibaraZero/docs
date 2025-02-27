---
sidebar_position: 2
title: EvilPortal
---

EvilPortal is an attack that creates an AP with a captive portal access and it captures all the POST requests on the login form.

It can be used to capture body of POST requests to /login. You must create a webpage like [this](https://github.com/CapibaraZero/EvilPortal/blob/main/example.html) with a form that submit to /login URL.

You must upload the whole pages to SD under /captive_portal path. 

CapibaraZero captive portal act like a web server so you can upload CSS, JS or other assets.

## How to make the attack

- Upload web pages and resources(CSS, JS) to SD under /captive_portal path
- (Optional) Create config.json under /captive_portal path like [this](/example_config/dhcp_glutton/config.json) with SSID and password of capibaraZero AP
- If you not provide config.json, capibaraZero will create AP with capibaraZero SSID without any password. You can change default_ssid at [this line](https://github.com/CapibaraZero/fw/blob/main/lib/network_attacks/network_attacks.cpp#L31) and recompile firmware 
- Go to NetAt.(Network attacks)
- Select EvilPortal
- Connect to ESP and login to captive portal
- Check captured packets in GUI. You can stop when you want. Requests received will be printed on serial port and saved in SD card under /captive_portal path

## Custom Handler

If want to perform custom action when receiving credentials, you can create a custom handler [here](https://github.com/CapibaraZero/fw/tree/main/lib/captive_portal_callback) then recompile the firmware.

## Custom page

Custom HTML page must make POST requests to /login path. capibaraZero will gets all the fields in the form. 

### GUI

<img src="/img/screens/network_attacks/evilportal.png" alt="EvilPortal GUI screenshot" />
