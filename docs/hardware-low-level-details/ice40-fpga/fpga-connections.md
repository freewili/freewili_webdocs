---
title: FPGA Connections and Pin Constraints for iCE40 FPGA
description: Discover how the iCE40 FPGA connects to the Serial SRAM, IO Drivers, and the RP2040. Access the pin constraints file (PCF) for detailed connections and support for development tools like yosys, nextpnr, icestorm, and icecube2.
keywords: [FPGA Connections, iCE40 FPGA Pin Constraints, RP2040 FPGA, Serial SRAM FPGA, IO Drivers FPGA, PCF File, FPGA Development Tools, yosys, nextpnr, icestorm, icecube2]
sidebar_position: 3
sidebar_label: FPGA Connections
---

# FPGA Connections

The FPGA connects to the Serial SRAM,  IO Drivers, and the RP2040. 

The FPGA development tools including Open Source (yosys, nextpnr, icestorm) and commercial (icecube2) support a pin constraints file that defines how the pins connect to the HDL (verilog/vhdl) connections. This is included below:

The PCF file is a text file you can view in a text editor.

In the file you will see the names that end with Rp or Out. The Rp names connect to the RP2040 and the Out connects to the IO driver.

`set_io SPI_MISO_Rp 14`

`set_io SPI_MISO_Out 25`

import Card from '@site/src/components/Card';

<Card 
  title="fw.pcf"
  description=""
  link="/downloads/fw.pcf" 
  imageUrl="/img/download-file.png"
/>