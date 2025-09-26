---
title: FREE-WILi SPI Settings - Frequency, Chip Select, Data Bits, CPOL, CPHA
description: Configure SPI settings in FREE-WILi including clock frequency, chip select pin, data bits, CPOL, and CPHA. Ensure optimal communication with detailed settings for SPI operation.
keywords: [FREE-WILi SPI Settings, SPI Frequency, Chip Select Pin, Data Bits, CPOL, CPHA, SPI Configuration, RP2040 SPI Settings]
sidebar_position: 1
sidebar_label: SPI Settings
---

# SPI Settings

SPI settings are listed below.  The settings are configured using the menu shown below.

| **Setting**     	| **Description**             	| **Notes**                                                                                	|
|-----------------	|-----------------------------	|------------------------------------------------------------------------------------------	|
| Frequency       	| SPI Clock Frequency         	|                                                                                          	|
| Chip Select Pin 	| GPIO used for Chip select.  	| GPIO must be configured for output.                                                      	|
| Data bits       	| The width of the spi bytes  	| (only 8 is currently supported)                                                          	|
| CPOL            	| clock polarity              	| Refer to RP2040 data sheet section 4.10 on clock phase and polarity. Most common is 0,0. 	|
| CPHA            	| clock phase                 	|                                                                                          	|

<br/>

<div class="text--center">

<figure>

![SPI has 5 settings](../../../assets/spi.png "SPI has 5 settings")
<figcaption>SPI has 5 settings</figcaption>
</figure>
</div>