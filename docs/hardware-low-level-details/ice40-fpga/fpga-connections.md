---
sidebar_position: 4
---

# FPGA Connections

The FPGA connects to the Serial SRAM,  IO Drivers, and the RP2040. 

The FPGA development tools including Open Source (yosys, nextpnr, icestorm) and commercial (icecube2) support a pin constraints file that defines how the pins connect to the HDL (verilog/vhdl) connections. This is included below:

The PCF file is a text file you can view in a text editor.

In the file you will see the names that end with Rp or Out. The Rp names connect to the RP2040 and the Out connects to the IO driver.

set_io SPI_MISO_Rp 14 

set_io SPI_MISO_Out 25

import Card from '@site/src/components/Card';

<Card 
  title="fw.pcf"
  description=""
  link="/img/fw.pcf" 
  imageUrl="/img/download-file.png"
/>