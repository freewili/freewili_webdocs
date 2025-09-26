---
title: "FREE-WILi GPIO Troubleshooting: Common Issues and Solutions"
description: Comprehensive troubleshooting guide for FREE-WILi GPIO problems including voltage issues, protocol failures, signal integrity, and diagnostic procedures. Solutions for most common GPIO issues.
keywords: [FREE-WILi troubleshooting, GPIO problems, voltage issues, protocol debugging, signal integrity, pin direction, V PINS IN, diagnostic tools]
sidebar_position: 3
sidebar_label: Troubleshooting
---

# GPIO Troubleshooting Guide

## Most Common Issue: No Voltage Applied

### Problem: GPIO pins not responding or protocols not working

**Root Cause**: Pin 4 (V PINS IN) does not have voltage applied.

**Solution**: 

**Verify Jumper Connection**:
   - For 5V: Jumper between pins 2 and 4
   - For 3.3V: Jumper between pins 4 and 6
   - For custom voltage: Apply 1.1V-5.5V directly to pin 4

**This is the #1 cause of GPIO problems. Always check voltage first.**

## Pin Direction Issues

### Problem: Pins not responding as expected

**Symptoms**:
- Output pins not driving signals
- Input pins not reading correctly
- Protocol communication failures

**Diagnosis**:
1. Check pin direction configuration in GPIO panel or settings menu
2. Verify directions match your intended usage (input vs output)
3. Confirm protocol-specific direction requirements

**Solutions**:

**On the device**:
1. Open GPIO panel
2. Select affected pins  
3. Set correct direction (input/output)
4. Changes take effect immediately

**Via Serial Console**:
1. Navigate to Settings > GPIO Directions
2. Configure pin directions
3. **Critical**: Return to main menu for changes to take effect
4. Re-test GPIO operation

## Protocol Configuration Problems

### SPI Issues

**Problem: SPI communication not working**

**Common Causes**:
- Incorrect clock polarity/phase settings
- Frequency too high for target device
- Wrong pin directions

**Solutions**:
1. Verify SPI mode (CPOL/CPHA) matches target device
2. Reduce frequency to 1 MHz for testing
3. Check connections: CS (pin 1), MOSI (pin 13), MISO (pin 12), SCLK (pin 15)
4. Ensure target device shares same ground reference

### I2C Issues

**Problem: I2C devices not detected or responding**

**Common Causes**:
- Pull-up resistors not enabled
- Wrong I2C frequency
- Voltage level mismatch
- Address conflicts

**Solutions**:
1. Enable built-in 10kΩ pull-ups in settings menu
2. Reduce frequency to 100 kHz (standard mode)
3. Verify device I2C address with scanner function
4. Check voltage level compatibility (pin 4 voltage)

### UART Issues

**Problem: UART data corruption or no communication**

**Common Causes**:
- Baud rate mismatch
- Wrong data format (bits, parity, stop bits)
- Hardware flow control issues
- TX/RX connections swapped

**Solutions**:
1. Verify baud rate matches target device exactly
2. Check data format: 8-N-1 is most common
3. Disable hardware flow control initially
4. Verify TX (pin 9) connects to target RX, RX (pin 5) to target TX

## Signal Integrity Problems

### Problem: Intermittent communication or data errors

**Symptoms**:
- Occasional protocol failures
- Data corruption
- Timing-sensitive issues

**Diagnosis Tools**:
- Use [Logic Analyzer](../../scripting/io-app/logic-analyzer/) to examine signals
- Check for proper rise/fall times
- Verify clock stability and timing

**Common Solutions**:

**Ground Issues**:
- Ensure solid ground connection (pins 19/20)
- Use shortest possible ground wires
- Connect target device ground to FREE-WILi ground

**Cable Length**:
- Keep connections as short as possible
- Use twisted pairs for differential signals
- Add termination for high-speed signals

**Voltage Level Matching**:
- Verify target device voltage compatibility
- Check that V PINS IN voltage matches target requirements
- Consider voltage dividers for 5V ↔ 3.3V interfacing

## Getting Additional Help

### Documentation Resources

- [Protocol Configuration](./gpio-protocols.md) - Detailed protocol setup  
- [Pinout Specifications](./gpio-pinout.md) - Electrical characteristics
- [Logic Analyzer](./../scripting//io-app/logic-analyzer.md) - Signal analysis tools
- [Settings Menu](./../scripting//io-app/settings-menu/settings-menu.md) - Configuration interface

### Self-Help Debugging

1. **Start Simple**: Test with basic GPIO toggle before complex protocols
2. **Isolate Variables**: Test one protocol/pin at a time
3. **Use Built-in Tools**: GPIO panel, logic analyzer, protocol menus
4. **Check Connections**: Physical wiring is often the issue
5. **Verify Voltage**: Always confirm V PINS IN has proper voltage

### Common Debugging Sequence

1. **Power Check**: Verify USB-C connected, voltage on pin 4
2. **Basic GPIO**: Test simple pin toggle with GPIO panel  
3. **Pin Directions**: Confirm input/output settings match usage
4. **Protocol Settings**: Verify frequency, mode, format settings
5. **Signal Quality**: Use logic analyzer to examine waveforms
6. **Load Testing**: Check current requirements vs. drive capability

Remember: The most common issue is forgetting to apply voltage to V PINS IN (pin 4). Always check this first when troubleshooting GPIO problems.
