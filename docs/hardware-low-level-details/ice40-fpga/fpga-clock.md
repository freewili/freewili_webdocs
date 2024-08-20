---
title: FPGA Clock Configuration - Managing Clock Signals for iCE40 FPGA
description: Explore how the FPGA clock signal is supplied by the RP2040 on GPIO23 using the Clock Generator. Learn about the default setting of 125 MHz divided by 4 and how to configure FPGA clock sources and dividers using the Intrepid IO app.
keywords: [FPGA Clock Configuration, RP2040 FPGA Clock Signal, Clock Generator Feature, iCE40 FPGA Clock Source, Intrepid IO App FPGA Settings, FPGA Clock Divider]
sidebar_position: 2
sidebar_label: FPGA Clock
---

# FPGA Clock

The clock signal to the FPGA is supplied by the main RP2040. This is done on GPIO23 using the Clock Generator feature. The clock generated can be generated from numerous clock sources with a integer and fractional divider. For example, the default sys clock of 125 mhz can be used or divided down. Please see the rp2040 data sheet for details.

The Intrepid IO app has a device setting where you can select the FPGA clock source and divider. The default setting is sys clock (125Mhz) divided by 4 (31.25 Mhz) .

