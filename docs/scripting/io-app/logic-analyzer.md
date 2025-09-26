---
title: Logic Analyzer for FREE-WILi - FPGA-Based Digital Protocol Analysis
description: Discover the FPGA-based Logic Analyzer for FREE-WILi, compatible with Sigrok PulseView. Learn how it operates transparently with FREE-WILi's IO features for testing digital protocols. Access FPGA bit files and adjust settings through the FREE-WILi interface.
keywords: [FREE-WILi Logic Analyzer, FPGA Logic Analyzer, Sigrok PulseView, digital protocol analysis, FPGA bit files, FREE-WILi settings, FTDI High-speed user interface]
sidebar_position: 7
sidebar_label: Logic Analyzer
---

# Logic Analyzer

The default [FPGA](/hardware-low-level-details/ice40-fpga/) configuration implements a Logic Analyzer compatible with [Sigrok Pulseview](https://sigrok.org/wiki/PulseView). This logic analyzer uses the FPGA front end and communicates with the PC using the FTDI High speed user interface. The Logic Analyzer operates **transparently** to the IO features of FREE-WILi so you can use it to test when you are interfacing to digital protocols.

The FPGA bit files for the logic analyzer are always being implemented and are open source. These are available at the FREE-WILi [github](https://github.com/freewili/). You can change the default FPGA bit file in the [settings](/scripting/io-app/settings-menu/) of FREE-WILi.

<div class="text--center">

<figure>

![logic-analyzer](../../assets/logic-analyzer.jpg "logic-analyzer")
<figcaption>Analyze your digital protocols without attaching wires</figcaption>
</figure>
</div>