---
title: WILEYE Camera Orca - Getting Started Guide
description: "Quick start guide for WILEYE Camera Orca with FREE-WILi. Learn to enable communication, configure UART, and interface with the camera through command line, UI, and WebAssembly API."
keywords: [WILEYE getting started, FREE-WILi integration, camera setup, UART configuration, command line interface, FREE-WILi UI, WebAssembly API]
sidebar_position: 8
sidebar_label: WILEYE Getting Started
---

# WILEYE Getting Started Guide

Get up and running with your WILEYE Camera Orca and FREE-WILi integration in under 30 minutes! This guide will walk you through software setup, enabling communication, and interfacing with the camera through multiple methods.

## What You'll Accomplish

By the end of this guide, you'll have:
- ✅ **Communication enabled** between FREE-WILi and WILEYE
- ✅ **UART parameters configured** correctly
- ✅ **Command line access** to camera functions
- ✅ **FREE-WILi UI integration** for camera control
- ✅ **WebAssembly API access** for advanced programming

## Prerequisites

Before starting, make sure you have:
- WILEYE Camera Orca properly connected to FREE-WILi (see [Hardware Hookup](wileye-hardware-hookup))
- USB-C cable for programming and power
- Computer with Python installed
- **Latest WILEYE firmware files downloaded** from the official repository: **https://github.com/freewili/WILEye-Firmware**
- FREE-WILi device powered on and accessible
- **UART Orca Communication enabled** for WILEYE (see Step 1 below)

### ESP32-P4-EYE Documentation

The WILEYE Camera Orca is built around the ESP32-P4-EYE development board. For detailed technical information about the hardware platform, refer to:

📖 **ESP32-P4-EYE Official Documentation**: https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32p4/esp32-p4-eye/index.html

This documentation includes:
- Complete hardware specifications and pin mappings
- Camera sensor configuration details
- Power requirements and electrical characteristics
- Advanced programming examples and API references

:::warning UART Communication Required
**CRITICAL**: You must enable UART Orca Communication for WILEYE in FREE-WILi settings before the camera will function. WILEYE will not work without this setting properly configured.
:::

:::tip Getting WILEYE Firmware
**Always download the latest firmware binary files from the official repository:**
**https://github.com/freewili/WILEye-Firmware**

This repository contains the pre-compiled binary files needed to update your ESP32-P4-EYE firmware. Download the `.bin` files for flashing to your WILEYE module.
:::

---

## Step 1: Enable UART Orca Communication

Before flashing firmware or using WILEYE, you must first enable UART Orca Communication in FREE-WILi settings.

### Accessing Orca Setup Settings

1. **Connect to FREE-WILi** via USB console or web interface
2. **Navigate to Settings** menu from main console
3. **Find Orca Setup** section in settings
4. **Access Configure Orca Communication** option

### Configure UART Communication

In the Orca Setup menu, you'll see:

```
========  Configure Orca Communication ========

u) Orca Communication over UART [WILEye]


Enter Letter: (q to exit)
```

1. **Press 'u'** to configure UART communication
2. **Select WILEYE option** from the menu:

```
========  Configure Orca Communication ========

0) Off
1) BottleNose
2) WhaleTail
3) WILEye

Orca Communication over UART Enter Number [3]
```

3. **Enter '3'** to select WILEye (this should be the default)
4. **Save settings** and exit configuration menu

### Verify Configuration

After confirming UART communication is set to WILEye:

```
========  Configure Orca Communication ========

u) Orca Communication over UART [WILEye] ✅
```

The setting should show **[WILEye]** for proper camera operation.

:::tip UART Parameters Auto-Configuration
When you enable WILEYE Communication in Orca Setup, FREE-WILi automatically configures the required UART parameters:
- **Baud Rate**: 5 Mbps
- **Flow Control**: CTS and RTS enabled (Hardware flow control)
- **Data Bits**: 8
- **Stop Bits**: 1
- **Parity**: None

Hardware flow control ensures reliable high-speed data transmission between FREE-WILi and WILEYE, preventing data loss during image and video transfers.
:::

### Restart FREE-WILi

After confirming the UART communication setting:
1. **Power cycle FREE-WILi** to ensure configuration is active
2. **Wait for full boot** before proceeding with firmware flashing
3. **Verify WILEYE detection** in FREE-WILi status messages

---

## Step 2: Install ESPTool and Flash Firmware

Before you can use WILEYE with FREE-WILi, you need to flash the proper firmware to the ESP32-P4-EYE module.

### Install ESPTool

First, install the ESPTool utility which is required for flashing ESP32 devices:

#### Windows/Mac/Linux - Using pip
```bash
# Install esptool using pip (recommended)
pip install esptool

# Verify installation
esptool.py --help
```

#### Alternative Installation Methods

**Windows - Using executable:**
1. Download `esptool.exe` from [GitHub releases](https://github.com/espressif/esptool/releases)
2. Place it in a folder in your PATH
3. Use `esptool.exe` instead of `python esptool.py` in commands

**Linux - Using package manager:**
```bash
# Ubuntu/Debian
sudo apt install esptool

# Fedora
sudo dnf install esptool
```

### Download WILEYE Firmware

**Download the latest firmware binary files from the official repository:**

🔗 **https://github.com/freewili/WILEye-Firmware**

1. **Navigate to the GitHub repository** and download the latest release or binary files
2. **Look for the pre-compiled binary files** (`.bin` files) needed for ESP32-P4-EYE:
   - `bootloader.bin` - ESP32-P4 bootloader
   - `wileye-firmware.bin` (or `factory_demo.bin`) - Main WILEYE application firmware
   - `partition-table.bin` - Memory partition configuration

3. **Create a firmware folder** on your computer and place all binary files inside:
   ```
   wileye-firmware/
   ├── bootloader.bin
   ├── wileye-firmware.bin
   └── partition-table.bin
   ```

:::tip Official Firmware Source
**Always use the official firmware repository:** https://github.com/freewili/WILEye-Firmware

This ensures you have the latest, tested firmware binaries specifically compiled for the ESP32-P4-EYE on WILEYE Camera Orca. The repository contains pre-built `.bin` files - no compilation required.

For advanced users who want to modify or build custom firmware, refer to the ESP32-P4-EYE hardware documentation: https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32p4/esp32-p4-eye/index.html
:::

### Connect WILEYE for Programming

1. **Connect USB-C cable** from your computer to the WILEYE Camera Orca
2. **Hold the BOOT button** on the ESP32-P4-EYE while connecting USB (if available)
3. **Check device connection**:

   **Windows:**
   ```cmd
   # Check if device is detected
   esptool.py --list-ports
   
   # Look for something like: COM12 - USB Serial Device
   ```

   **Mac:**
   ```bash
   # Check available ports
   ls /dev/tty.usb*
   
   # Should show: /dev/tty.usbserial-xxxxx
   ```

   **Linux:**
   ```bash
   # Check available ports
   ls /dev/ttyUSB*
   
   # Should show: /dev/ttyUSB0 (or similar)
   ```

4. **Note your COM port** - you'll need this for the flashing command (e.g., COM12, /dev/ttyUSB0)

### Flash the Firmware

Navigate to your firmware folder in the command prompt/terminal and run the flashing command:

#### Windows Example:
```cmd
cd C:\path\to\wileye-firmware
python esptool.py -p COM12 -b 460800 --before default_reset --after hard_reset --chip esp32p4 write_flash --flash_mode dio --flash_freq 80m --flash_size 16MB 0x2000 bootloader.bin 0x10000 factory_demo.bin 0x8000 partition-table.bin
```

#### Mac/Linux Example:
```bash
cd /path/to/wileye-firmware
python esptool.py -p /dev/ttyUSB0 -b 460800 --before default_reset --after hard_reset --chip esp32p4 write_flash --flash_mode dio --flash_freq 80m --flash_size 16MB 0x2000 bootloader.bin 0x10000 factory_demo.bin 0x8000 partition-table.bin
```


### Expected Output

You should see output similar to this:

```
esptool.py v4.6
Serial port COM12
Connecting.....
Chip is ESP32-P4 (revision v0.1)
Features: WiFi, BT, Dual Core, 400MHz, VRef calibration in efuse, Coding Scheme None
Crystal is 40MHz
MAC: 24:6f:28:xx:xx:xx
Uploading stub...
Running stub...
Stub running...
Changing baud rate to 460800
Changed.
Configuring flash size...
Flash will be erased from 0x00002000 to 0x00005fff...
Flash will be erased from 0x00010000 to 0x001fffff...
Flash will be erased from 0x00008000 to 0x00008fff...
Compressed 15856 bytes to 9976...
Wrote 15856 bytes (9976 compressed) at 0x00002000 in 0.4 seconds...
Hash of data verified.
Compressed 2027520 bytes to 1285632...
Wrote 2027520 bytes (1285632 compressed) at 0x00010000 in 31.5 seconds...
Hash of data verified.
Compressed 3072 bytes to 136...
Wrote 3072 bytes (136 compressed) at 0x00008000 in 0.1 seconds...
Hash of data verified.

Leaving...
Hard resetting via RTS pin...
```

### Troubleshooting Firmware Flash

#### Common Issues and Solutions

**Problem**: "Failed to connect to ESP32"
```bash
# Solution 1: Try different baud rate
python esptool.py -p COM12 -b 115200 --chip esp32p4 chip_id

# Solution 2: Hold BOOT button while connecting USB
# Then release after connection is established

# Solution 3: Try different USB cable or port
```

**Problem**: "Invalid head of packet (0x50)"
```bash
# Solution: Reset the device and try again
python esptool.py -p COM12 --chip esp32p4 --before default_reset chip_id
```

**Problem**: "File not found" errors
```bash
# Make sure you're in the correct directory
pwd  # Check current directory
ls   # List files (Linux/Mac)
dir  # List files (Windows)

# Files should be in current directory:
# bootloader.bin, factory_demo.bin, partition-table.bin
```

**Problem**: Flash verification failed
```bash
# Try slower baud rate
python esptool.py -p COM12 -b 115200 ... (rest of command)

# Or erase flash first
python esptool.py -p COM12 --chip esp32p4 erase_flash
# Then try flashing again
```

### Verify Firmware Installation

After successful flashing:

1. **Disconnect and reconnect** the USB cable
2. **Check serial output** (optional):
   ```bash
   # Monitor serial output to verify firmware is running
   python -m serial.tools.miniterm COM12 115200
   ```
   You should see WILEYE firmware startup messages.

---

## Step 3: Enable WILEYE Communication in Settings

The first step is to enable communication between FREE-WILi and the WILEYE Camera Orca through the settings interface.

### Accessing Settings

1. **Connect to FREE-WILi**:
   - Via USB: Connect your computer to FREE-WILi using a USB cable
   - Via Network: Ensure your computer and FREE-WILi are on the same network

2. **Open FREE-WILi Interface**:
   - Launch the FREE-WILi application on your computer
   - Or access the web interface through your browser

3. **Navigate to Settings**:
   - Click on the **Settings** menu
   - Select **Orca Setup** from the dropdown

### Enabling WILEYE Communication

1. **Locate WILEYE Option**:
   ```
   Settings → Orca Setup → WILEYE Communication
   ```

2. **Enable the Setting**:
   - Toggle **"Enable WILEYE Communication"** to **ON**
   - You should see a confirmation message: "WILEYE Communication Enabled"

3. **Apply Settings**:
   - Click **"Apply"** or **"Save Settings"**
   - FREE-WILi will automatically configure the required parameters

:::tip Automatic Configuration
When you enable WILEYE Communication, FREE-WILi automatically sets the correct UART parameters, so you don't need to configure them manually!
:::

---

## Step 4: Understanding UART Parameters

FREE-WILi automatically configures these UART parameters when WILEYE Communication is enabled:

### Automatic UART Configuration

| Parameter | Value | Description |
|-----------|-------|-------------|
| **Baud Rate** | 5,000,000 bps (5 Mbps) | High-speed communication for image/video data |
| **Data Bits** | 8 | Standard data frame size |
| **Stop Bits** | 1 | Single stop bit for efficiency |
| **Parity** | None | No parity checking |
| **Flow Control** | RTS/CTS | Hardware flow control enabled |

### UART Pin Mapping

The hardware connection uses these pins (automatically configured):

| Signal | ESP32-P4-EYE Pin | FREE-WILi Pin | Direction |
|--------|------------------|---------------|-----------|
| TX | GPIO37 | UART1_RX_IN | ESP32 → FREE-WILi |
| RX | GPIO38 | UART1_TX_Out | FREE-WILi → ESP32 |
| RTS | GPIO51 | UART1_CTS_IN | Flow Control |
| CTS | GPIO34 | UART1_RTS_OUT | Flow Control |
---

## Next Steps

Now that your WILEYE Camera Orca is set up and working:

### Immediate Projects
1. **Time-lapse Photography**: Set up automated captures at intervals
2. **Motion Detection**: Use API to detect movement and trigger recording
3. **Remote Monitoring**: Access camera through FREE-WILi's web interface
4. **Custom Applications**: Build your own camera control software using the WASM API

### Advanced Integration
1. **IoT Integration**: Connect camera data to cloud services
2. **AI Processing**: Implement image recognition on captured photos
3. **Automation**: Trigger camera based on sensor inputs
4. **Multi-camera Setup**: Coordinate multiple WILEYE modules

### Learning Resources
- [WILEYE Hardware Hookup](wileye-hardware-hookup) - Physical setup and connections
- [Main WILEYE Documentation](wileye-camera-orca) - Complete feature overview
- [ESP32-P4-EYE Official Documentation](https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32p4/esp32-p4-eye/index.html) - Hardware platform details
- [ESP32-P4-EYE GitHub Repository](https://github.com/espressif/esp-dev-kits/tree/master/esp32-p4-eye) - Hardware files and examples
- [Espressif ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32p4/index.html) - Advanced ESP32-P4 programming

## Community and Support

- **FREE-WILi Forum**: Share your camera projects and get help
- **GitHub Examples**: Find sample code and contribute improvements
- **Discord Community**: Real-time chat with other users
- **Documentation**: Keep checking for updates and new features

**Congratulations!** Your WILEYE Camera Orca is now fully integrated with FREE-WILi and ready for your projects! 📸