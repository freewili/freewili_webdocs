---
title: Bottlenose WiFi Orca - Hardware Hookup Guide
description: "Complete hardware hookup guide for Bottlenose WiFi Orca. Learn how to connect power, configure WiFi, and interface with FREE-WILi modules."
keywords: [Bottlenose hardware hookup, ESP32-C6 connections, WiFi setup, USB-C, FREE-WILi Orca connection, hardware setup guide]
sidebar_position: 2
sidebar_label: Bottlenose Hardware Hookup
---

# Bottlenose Hardware Hookup Guide

This guide covers the physical setup and connections for the Bottlenose WiFi Orca module.

## Required Components

- 1 x Bottlenose WiFi Orca (ESP32-C6 board)
- 1 x USB-C cable for programming/power
- 1 x FREE-WILi device with Orca connector

## Physical Connections

### Connecting to FREE-WILi

This guide covers the physical setup and connections for the Bottlenose WiFi Orca module.

1. **Power down** your FREE-WILi device before making connections
2. **Align the Orca connector** on the Bottlenose module with the Orca port on your FREE-WILi device
3. **Gently press** the modules together until the connectors are fully seated
4. **Verify alignment** by checking that the boards are parallel and the connector is fully engaged

:::warning 
Connection Precautions- 1 x Bottlenose WiFi Orca (ESP32-C6 board)- 1 x Bottlenose WiFi Orca (ESP32-C6 board)
Always power down both devices before connecting or disconnecting Orca modules to prevent damage to the electronics.
:::

### Power Supply Options

The Bottlenose WiFi Orca can be powered in two ways:

#### Option 1: Power via FREE-WILi (Recommended)
- Power is supplied through the Orca connector
- No additional power connections required
- Most convenient for portable applications

#### Option 2: USB-C Power + Programming

- Connect USB-C cable to Bottlenose's USB port
- Provides power and enables programming/debugging
- Required for firmware development and debugging.
- Can be used simultaneously with Orca connector power

### Communication between ESP32-C6 and FREE-WILi

The Bottlenose WiFi Orca communicates with FREE-WILi through the Orca connector interface using UART communication.

#### UART Pinout

| ESP32-C6 Pin | FREE-WILi Pin    | Function                               |
|--------------|------------------|----------------------------------------|
| ESP_5V       | 5V OUT           | Power Supply (5V)                      |
| GPIO16       | UART1_TX_Out     | Transmit Data (FREE-WILi → ESP32)      |
| GPIO17       | UART1_RX_IN      | Receive Data (ESP32 → FREE-WILi)       |
| GPIO4        | UART1_CTS_IN     | Clear to Send (Hardware Flow Control)  |
| GPIO5        | UART1_RTS_OUT    | Request to Send (Hardware Flow Control)|
| GND          | GND              | Ground Reference                       |

Both device's UART is configured with the following parameters:

- **3 Mbps Baudrate** - Optimized for WiFi command and data transfer
- **CTS and RTS Controls Enabled** - Hardware flow control for reliable transmission
- **8 Data Bits** - Standard data frame sizeThe Bottlenose WiFi Orca can be powered by the 20-pin orca connector, the USB C connector does not supply power to the board.
- **1 Stop Bit** - Standard frame termination
- **No Parity** - Error detection handled at higher protocol levels

## GPIO and Expansion## MicroSD Card Installation

:::tip Hardware Flow Control Benefits
CTS (Clear to Send) and RTS (Request to Send) hardware flow control ensures reliable communication for network data, terminal bridging, and configuration commands between FREE-WILi and Bottlenose.
:::

### Communication between ESP32-P4-EYE and FREE-WILi

:::tip UART parameters on FREE-WILi

### Qwiic Connector The FREE-WIL-EYE Orca module Adapter routes UART data and hardware handshake lines between ESP32-P4-EYE and FREE-WILi.

FREE-WILi will automatically set the required UART parameters if you enable Bottlenose Communication in the Orca Setup Setting. We will be going over that later.

:::
The Bottlenose includes a Qwiic connector for easy I2C device connections:
:::

<!-- 
#### Pin Configuration- 

**SDA**: I2C Data line#### UART Pinout

The ESP32-C6 provides the following interfaces:

- UART communication- **SCL**: I2C Clock line
- I2C interface
- SPI interface- **3.3V**: Power supply| ESP32-P4-EYE Pin | FREE-WILi Pin     | Function                               |
- Digital I/O pins
- Power rails (3.3V, 5V, GND)- **GND**: Ground reference|------------------|-------------------|----------------------------------------|



### Qwiic Connector| ESP_5V           | 5V OUT           | Power Supply (5V)                      |

The Bottlenose includes a Qwiic connector for easy I2C device connections:

- **SDA**: I2C Data line## WiFi and Bluetooth Setup| GPIO37           | UART1_TX_Out     | Transmit Data (FREE-WILi → ESP32 )      |

- **SCL**: I2C Clock line

- **3.3V**: Power supply| GPIO38           | UART1_RX_IN      | Receive Data (ESP32 → FREE-WILi)       |

- **GND**: Ground reference

### WiFi Configuration| GPIO34           | UART1_CTS_IN     | Clear to Send (Hardware Flow Control)  |

## WiFi Setup

The ESP32-C6 supports:| GPIO51           | UART1_RTS_OUT    | Request to Send (Hardware Flow Control)|

### WiFi Configuration

The ESP32-C6 supports:- 802.11 b/g/n WiFi (2.4 GHz)| GND              | GND              | Ground Reference                       |

- 802.11 b/g/n WiFi (2.4 GHz)

- Station mode (connect to existing networks)- Station mode (connect to existing networks)

- Access Point mode (create hotspot)

- WiFi Direct- Access Point mode (create hotspot)Both device's UART is configured with the following parameters:

- Multiple concurrent connections

- WiFi Direct- 3 Mbps Baudrate

### Network Capabilities

- **Station Mode**: Connect to existing WiFi networks- CTS and RTS Controls Enabled

- **Access Point Mode**: Create wireless hotspot for other devices

- **Bridge Mode**: Route traffic between FREE-WILi and WiFi networks### Bluetooth Configuration- 8 Data Bits

- **Terminal Access**: Remote console access via WiFi

- **Web Server**: HTTP interface for configuration and controlBluetooth Low Energy (BLE) capabilities:- 1 Stop Bit



## LED Indicators- Bluetooth 5.0 LE- No Parity



The Bottlenose module includes status indicators:- Mesh networking support



| LED | Color | Status | Meaning |- Low power consumption modes:::tip UART parameters on FREE-WILi

|-----|-------|--------|---------|

| Power | Green | Solid | Module powered and operating |FREE-WILi will automatically set the required UART parameters if you enable WILEye Communicaiotn in the Orac Setup Setting. We will be going over that later.

| WiFi | Blue | Blinking | WiFi connecting/activity |

| WiFi | Blue | Solid | WiFi connected |## LED Indicators:::

| Status | Red | Various | System status/errors |



## Troubleshooting Hardware Issues

The Bottlenose module includes status indicators:

### Power Problems

- **No power LED**: Check USB-C connection or FREE-WILi power### Additional Exposed Pins

- **Intermittent power**: Verify Orca connector is fully seated

| LED | Color | Status | Meaning |

### WiFi Issues

- **Cannot connect to WiFi**: Check credentials and signal strength|-----|-------|--------|---------|The FREE-WIL-EYE Orca adapter also exposes additional FREE-WILi's IO to allow interfacing with additional interfaces:

- **Weak signal**: Ensure antenna is properly connected

- **Connection drops**: Check power supply stability| Power | Green | Solid | Module powered and operating |- I2C communication (SDA/SCL) over the QWIIC connector



### Connection Issues| WiFi | Blue | Blinking | WiFi connecting/activity |- SPI interface

- **Loose connection**: Ensure Orca connector is properly aligned

- **Communication failures**: Verify UART configuration| Status | Red | Various | System status/errors |- Digital I/O pins

- **Terminal not accessible**: Check WiFi connection and web server settings

- Power rails (3.3V, 5V, GND)

## Next Steps

## Troubleshooting Hardware Issues

Once your hardware is connected:

1. Try the [Bottlenose Getting Started](bottlenose-getting-started) tutorial

2. Explore advanced features in the main [Bottlenose WiFi Orca](bottlenose-wifi-orca) documentation

### Power Problems

## Safety Considerations

- **No power LED**: Check USB-C connection or FREE-WILi power### Pin Configuration

- **ESD Protection**: Use anti-static precautions when handling modules

- **Temperature**: Operating temperature range is -40°C to 85°C- **Intermittent power**: Verify Orca connector is fully seatedRefer to the ESP32-P4 pinout documentation for detailed pin assignments and capabilities.

- **RF Exposure**: Follow local regulations for WiFi operation

- **Power**: Do not exceed 5V on power inputs

- **Connection**: Always power down before connecting/disconnecting modules
### WiFi Issues## Troubleshooting Hardware Issues

- **Cannot connect to WiFi**: Check credentials and signal strength

- **Weak signal**: Ensure antenna is properly connected### Camera Problems

- **Connection drops**: Check power supply stability- **No image**: Check camera cable connection and lens cap

- **Blurry images**: Adjust manual focus ring

### Connection Issues- **Poor image quality**: Clean lens surface and check lighting conditions

- **Loose connection**: Ensure Orca connector is properly aligned

- **Communication failures**: Verify I2C/UART configuration## Next Steps



## Next StepsOnce your hardware is connected:

1. Follow the [Interfacing with WILEYE](wileye-interfacing) guide for software setup

Once your hardware is connected:2. Try the [WILEYE Getting Started](wileye-getting-started) tutorial

1. Follow the [Interfacing with Bottlenose](bottlenose-interfacing) guide for software setup3. Explore advanced features in the main [WILEYE Camera Orca](wileye-camera-orca) documentation

2. Try the [Bottlenose Getting Started](bottlenose-getting-started) tutorial
3. Explore advanced features in the main [Bottlenose WiFi Orca](bottlenose-wifi-orca) documentation

## Safety Considerations

- **ESD Protection**: Use anti-static precautions when handling modules
- **Temperature**: Operating temperature range is -40°C to 85°C
- **RF Exposure**: Follow local regulations for WiFi/Bluetooth operation
- **Power**: Do not exceed 5V on power inputs -->