---
sidebar_position: 1
---

# Installation

Currently the capibaraZero is tested on Raspberry Pi platform but can run everywhere that runs Linux. If you have a SBC that is not Raspberry Pi, try to adapt the `install.sh` and open a pull request to add support for your SBC. **Your contribution is essential to keep the project active!**

### Requirements
- A Raspberry Pi(better if it's a RPI Zero 2W)
- A WiFi dongle with a chip that support monitor mode and packet injection(Ralink, Realtek, ...) (if you wanna use WiFi section)
- A PN532(if you wanna use NFC section)
- A SDR receiver(if you wanna use SDR in SubGHZ)
- IR Receiver and Transmitter(if you wanna use IR section)
After installing capibaraZero you must follow this steps:
- An USB-ethernet adapter(if you wanna use network attack. If you use SBC with integrated ethernet, it's fine)

### Installation

#### Enable I2C and SPI

- Enable I2C and SPI from `raspi-config`
- Connect the PN532 to the I2C SDA and SCL using the I2C pins of official pinout for your board

#### Enable WiFi

In order to use internal WiFi card, you will need to set your country code to avoid using banned frequencies

- Execute `sudo raspi-config`
- Go in system option
- Go in Wireless LAN
- Select your country
- We you will be prompted for SSID, press ESC on your keyboard

#### Prepare IR

Append the following config to `/boot/firmware/config.txt`:

```ini
dtoverlay=gpio-ir,gpio_pin=GPIO_IR_RECEIVER
dtoverlay=gpio-ir-tx,gpio_pin=GPIO_IR_TRANSMITTER
```

Replacing with your GPIO value.

#### Run the installation script

```bash
curl https://github.com/CapibaraZero/fw_linux/raw/refs/heads/main/install.sh | sh

# If you want SDR support run this commands
sudo wget -O /usr/share/keyrings/openwebrx.gpg https://repo.openwebrx.de/openwebrx.gpg
sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/openwebrx.gpg] https://repo.openwebrx.de/debian/ experimental main" > /etc/apt/sources.list.d/openwebrx-experimental.list'
sudo apt update
sudo apt install openwebrx
```

#### Create AP for external usage

```bash
sudo nmcli d wifi hotspot ifname wlan0 ssid YOUR_SSID password YOUR_PASSWORD
sudo nmcli connection modify Hotspot connection.autoconnect yes

# Run this command to save some energy
echo "[Unit]
Description=Run capibarazero API server
DefaultDependencies=no
Wants=network-online.target
After=network.target network-online.target

[Service]
Type=simple
ExecStart=/root/wifi_tx_limit.sh
TimeoutStartSec=0
RemainAfterExit=yes

[Install]
WantedBy=default.target
" | sudo tee -a /etc/systemd/system/wifi_limit.service

echo "#!/bin/sh
iwconfig wlan0 txpower 1
" | sudo tee -a /root/wifi_tx_limit.sh

sudo chmod +x /root/wifi_tx_limit.sh
systemctl daemon-reload
systemctl enable wifi_limit
```

Replace YOUR_SSID and YOUR_PASSWORD with your values. The Raspberry Pi will create a WiFi network with that values.

#### Post installation command

- Connect to the WiFi network with the SSID and password that you choose
- Go to the gateway address via a web browser
- Press the + button on the navbar
- Insert the ip of the gateway with port 3000, usually 10.42.0.1:3000
- Enjoy your capibaraZero RPI!