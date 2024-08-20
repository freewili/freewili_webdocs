---
title: FPGA Default Application for FREE-WILi - Sigrok-Compatible Logic Analyzer
description: Explore the default FPGA application for FREE-WILi that turns it into a sigrok-compatible logic analyzer. The design includes SPI, UART, and GPIO configurations, with sampling at 31.25 MHz and encoding via Run-Length Encoding. Detailed channel name translations for SPI are provided.
keywords: [FPGA Default Application, FREE-WILi Logic Analyzer, Sigrok-Compatible FPGA, SPI Configuration, iCE40 FPGA, FTDI Communication, Run-Length Encoding, libsigrok-fwili]
sidebar_position: 4
sidebar_label: FPGA Default Application
---

# FPGA Default Application

<div class="text--center">

<figure>

![FPGA APP](../../assets/fpga_default_app.png "FPGA APP")
<figcaption></figcaption>
</figure>
</div>

The default FPGA application is a simple design that transforms the FREE-WILi into a sigrok-compatible logic analyzer.

The design features an IO buffer that can set the directions of the SPI and UART pins as well as GPIO_26 and GPIO27. To enable this programming, the IO_CONFIG_ENABLE pin must be asserted - this allows the FPGA's SPI-Slave to assume control of the SPI interface with the main RP2040 as the master. The pin direction defaults are as specified in [GPIO](/gpio/). Please note that the pin directionality is also dependent on the sn74lxc1t45 hardware IO buffers between the FPGA and breakout pins.

For the logic analyzer, the FPGA samples the SPI pins at the clock frequency provided by the main RP2040 - this design expects a frequency of 31.25 MHz. The samples are encoded via Run-Length Encoding and, once the FPGA is initiated by sigrok via FTDI, stored in a 32 kB FIFO built using the iCE40's on-chip SPRAM. Finally, these samples are sent via the FT1248 4-wire communication protocol to USB where sigrok can collect them. The libsigrok fork where the FREE-WILi hardware driver was developed can be found at [libsigrok-fwili](https://github.com/Ytuf/libsigrok-fwili).

The translation from the sigrok channel name to the corresponding pin for SPI protocol is detailed below.
| sigrok channel name  	| SPI     |
|---------------------	|-------- |
| 4            	        | CS      |
| 3                     | SCLK 	  |
| 2                	    | MOSI    |
| 1                	    | MISO    |

<!-- Two additional versions of this application are available, one sampling the UART lines and the other sampling I2C. The translation from the sigrok channel name to the corresponding pin for each protocol is detailed below.

| sigrok channel name  	| SPI     | UART  | I2C     |
|---------------------	|-------- |------	|-------- |
| 4            	        | CS      | RTS   | Unused  |
| 3 	                  | SCLK 	  | CTS   | Unused  |
| 2                	    | MOSI  	| RX  	| SCL     |
| 1                	    | MISO  	| TX  	| SDA     | -->