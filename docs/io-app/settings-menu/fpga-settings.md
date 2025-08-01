---
title: FREE-WILi FPGA Settings - Clock Source, Divider Options
description: Adjust FPGA settings in FREE-WILi including clock source selection and clock divider configuration. Choose between various internal and external clocks to optimize FPGA performanc.
keywords: [FREE-WILi FPGA Settings, FPGA Clock Source, FPGA Clock Divider, FPGA Configuration, Clock Source Options, FPGA Performance Tuning]
sidebar_position: 4
sidebar_label: FPGA Settings
---

# FPGA Settings

The FPGA settings are shown below:

| **Name**             	| **Description**                                             	| **Notes**                                                                                                                                             	|
|----------------------	|-------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Clock Source         	| This is the internal clock used to generate the FPGA Clock  	| There are 4 options: the main PLL generated clock 125 Mhz, the 12 Mhz source oscillator, the 48 Mhz USB clock, and the internal 48khz RC analog clock 	|
| Clock divider (int)  	| The integer part of the divider applied to the clock source 	|                                                                                                                                                       	|
| Clock divider (frac) 	| The fractional part of clock divider                        	|                                                                                                                                                       	|

<div class="text--center">

<figure>

![The FPGA settings.](../../assets/fpga-settings.png "The FPGA settings.")
<figcaption>The FPGA settings.</figcaption>
</figure>
</div>