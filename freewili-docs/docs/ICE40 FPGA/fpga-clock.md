---
sidebar_position: 3
---

# FPGA Clock

The clock signal to the FPGA is supplied by the main RP2040. This is done on GPIO23 using the Clock Generator feature. The clock generated can be generated from numerous clock sources with a integer and fractional divider. For example, the default sys clock of 125 mhz can be used or divided down. Please see the rp2040 data sheet for details.

The Intrepid IO app has a device setting where you can select the FPGA clock source and divider. The default setting is sys clock (125Mhz) divided by 4  (32.25 Mhz) .

