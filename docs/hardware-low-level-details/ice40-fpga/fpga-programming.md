---
sidebar_position: 1
---

# FPGA Programming

The ice40 FPGA is a SRAM configured FPGA that is programmed automatically at power up. 

By default the ice40 reads a default configuration from its OTP memory. This default image allows basic pass through configuration  of the RP2040 gpio to the IO drivers.

Because of the SRAM configuration, the FPGA can be reprogrammed unlimted times at anytime by the RP2040 chip. To do this the RP2040 uses the the FPGA DONE, FPGA RESET and SPI interface from the RP2040. The ice40 documentation calls this the "SPI Slave Configuration Interface". This method of programming is described in the Lattice ICE40 document "iCE40 Programming and Configuration" with document number FPGA-TN-02001. 

When reprogramming the FPGA the bit file would be fed from the RP2040. An obvious place to store the bit file is RP2040 flash as a const byte array.

The Intrepid IO app can store multiple FPGA bit files in its file system and load them on command or at startup. It can also load them directly from USB.