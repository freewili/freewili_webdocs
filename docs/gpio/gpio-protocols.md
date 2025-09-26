---
title: "FREE-WILi GPIO Protocol Configuration: SPI, I2C, and UART Setup"
description: Complete configuration guide for SPI, I2C, and UART protocols on FREE-WILi GPIO pins. Includes frequency settings, parameters, pin assignments, and concurrent operation details.
keywords: [FREE-WILi protocols, SPI configuration, I2C setup, UART parameters, protocol settings, frequency configuration, concurrent protocols, digital communication]
sidebar_position: 2
sidebar_label: Protocol Configuration
---

# GPIO Protocol Configuration

## Overview

FREE-WILi's GPIO header supports multiple digital communication protocols. Each protocol can be configured through the [Settings Menu](../../scripting/io-app/settings-menu/) and operates independently on dedicated pin sets.

## SPI Configuration

### Pin Assignment

- **Pin 1**: Chip Select (CS) - Output
- **Pin 12**: RX (MISO) - Input  
- **Pin 13**: TX (MOSI) - Output
- **Pin 15**: SCLK - Output

### SPI Parameters

**Frequency Configuration:**

- **Range**: Up to 70 MHz
- **Default**: 5 MHz
- **Configuration**: Via settings menu

**Clock Polarity and Phase:**

- **CPOL**: Programmable clock polarity
- **CPHA**: Programmable clock phase

## I2C Configuration

### Pin Assignment

- **Pin 8**: SCL (Clock) - Bidirectional
- **Pin 10**: SDA (Data) - Bidirectional

### I2C Parameters

**Frequency Configuration:**

- **Range**: Up to 1 MHz  
- **Default**: 100 kHz (Standard mode)
- **Supported**: Standard (100 kHz), Fast (400 kHz), Fast+ (1 MHz)

**Pull-up Resistors:**

- **Built-in**: Software-controlled 10kΩ pull-ups on PCA9517 buffer
- **Control**: Enable/disable via settings menu
- **Voltage**: Matches V PINS IN level

## UART Configuration  

### Pin Assignment

- **Pin 5**: RX (Receive) - Input
- **Pin 7**: CTS (Clear To Send) - Input
- **Pin 9**: TX (Transmit) - Output  
- **Pin 11**: RTS (Request To Send) - Output

### UART Parameters

**Baud Rate:**

- **Range**: Up to 8,000,000 bps
- **Default**: 115,200 bps
- **Configuration**: Programmable via settings menu

**Data Format:**

- **Data Bits**: 4-16 bits (default: 8)
- **Parity**: None, Even, Odd (default: None)
- **Stop Bits**: 1-2 (default: 1)
- **Flow Control**: RTS/CTS handshaking available (default: disabled)

**Full Duplex**: Simultaneous transmit and receive operations supported.

## Protocol Interaction

### Concurrent Protocol Operation

**Supported Combinations:**

- All three protocols (SPI, I2C, UART) can operate simultaneously  
- No hardware conflicts between protocols
- Independent configuration and operation

**Shared Resources:**

- All protocols share the same V PINS IN voltage level
- [Logic analyzer](../../scripting/io-app/logic-analyzer/) can monitor all protocols

## Configuration Examples

### High-Speed SPI Setup

```
Settings Menu > SPI Configuration:
- Frequency: 20 MHz
- CPOL: 0 (Clock idle low)
- CPHA: 0 (Sample on rising edge)
```

### Fast I2C Configuration

```
Settings Menu > I2C Configuration:
- Frequency: 400 kHz (Fast mode)
- Pull-ups: Enabled
```

### High Baud Rate UART
```  
Settings Menu > UART Configuration:
- Baud Rate: 2,000,000 bps
- RTS Hand Shaking: Enabled
- CTS Hand Shaking: Enabled
- Data Bits: 8
- Parity: None
- Stop Bits: 1
```

Related documentation:
- [Settings Menu Documentation](../../scripting/io-app/settings-menu/)
- [WASM Scripting](../../scripting/io-app/scripting-with-wasm/) for automated protocol control
