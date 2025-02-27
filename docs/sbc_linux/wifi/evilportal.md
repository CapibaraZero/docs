---
sidebar_position: 3
title: EvilPortal
---

EvilPortal is an attack that creates an AP with a captive portal access and it captures all the login requests made on the login form. It's backed from the famous `nodogsplash` captive portal.

## Requirements

- A USB dongle that supports AP creation

### Captive Portal pages

By default, capibaraZero EvilPortal comes with a good replica of latest Google login page but you can also upload your custom page! You must follow this steps:

- Create a webpage with the following `<form/>`:
```html
<form id="form_submit" method="GET" action="$authaction">
    <input type="hidden" name="tok" value="$tok" />
    <input type="hidden" name="redir" value="$redir" />
    <input id="email" type="text" name="username" />
    <input id="password" type="password" name="Password" />
</form>
```

- Add your styles and your JS scripts
- Create a zip with all the resources needed by your webpage, remember to rename your `index.html` to `splash.html`, otherwise your page won't be found from webserver
- Try to connect to EvilPortal and check if all goes well

### Contributions

If you want to add a good replica of famous login page, feel free to open pull requests to natively add to capibaraZero that webpages. Thank you!