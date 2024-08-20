---
title: Scripting with ZoomIO for FREE-WILi - Precision GPIO Control and Integration
description: Explore ZoomIO scripting for FREE-WILi to achieve sub-nanosecond GPIO control with native ARM assembly. Learn about ZoomIO commands, integration with the IOApp, and how to write and execute scripts for precise digital waveform generation.
keywords: [FREE-WILi ZoomIO scripting, sub-nanosecond GPIO control, ZoomIO commands, ARM assembly for GPIO, FREE-WILi IOApp integration, ZoomIO examples, precision waveform generation]
sidebar_position: 5
sidebar_label: Scripting with ZoomIO
---

# Scripting with ZoomIO

ZoomIO is a scripting language that allows sub nanosecond precision control of the GPIO. Its very high level but produces native ARM assembly in the correct way to ensure design time determinism.

To achieve precise determinism, native code runs in the second CPU core of the rp2040 and takes advantage of single cycle IO and the zero latency CPUs dedicated 4K RAM.

The zoomio is used to implement the logic analyzer view on the GUI screen. 

The IOApp integrates the ZoomIO compiler. You can simply write the source file and download to the scripts directory. The FREE-WILi will determine which engine to target based on the file extension. The ZoomIO source files have the extension zio.

The code below illustrates a simple ZoomIO program. The pin is generating a waveform on pin 27 with nanosecond control of the waveform.

```cpp
setio(27, 1);
delay(2000);
setio(27, 0);
delay(1000);
setio(27, 1);
delay(2000);
setio(27, 0);
```

The ZoomIO commands are executed in a sequence. The following commands are currently supported.

| **Command** 	|                        **Arguments**                        	    |                                                   **Notes**                                                   	|
|:-----------:	|:-----------------------------------------------------------:	    |:-------------------------------------------------------------------------------------------------------------:	|
|    setio    	|                 (arg 1) Io pin (arg2) state                 	    |                                                                                                               	|
|    delay    	|                      (arg1) delay in ns                     	    |               32 bit value. Delay precision is based of the CPU clock (default is 125Mhz or 8ns)              	|
|     loop    	|              (arg) number of loops till loopend             	    |                                                                                                               	|
|   endloop   	|                          ends loop                          	    |                                                                                                               	|
|   waitfor   	|             (arg1) io pin <br/> (arg2) transistion                |                              waits for a pin to be high, low, rising, or failing                              	|
|    begin    	|      (arg1) buffersizein bytes <br/> (arg2) bufferbitsize         |                   initials a capture buffer up to 2Kbytes, word size can be 8,16, or 32 bits                  	|
|   readpins  	|                       (arg1) startpin                       	    | reads bufferbitsize in to the buffer. it the top bit is the start pin followed by consecutively numbered bits 	|
|   trigger   	|              (arg1) io pin <br/> (arg2) transition                |                             triggers on a pin to be high, low, rising, or failing                             	|
|   fifoloop  	|              (arg1) loops to make after trigger             	    |                                     once triggered still collected samples                                    	|
|   measure   	|                      (arg1) generic tag                     	    |                         copies tag and 24 bit timer to buffer (buffer must be 32 bit)                         	|
|    chrono   	| (arg1) start=1,stop=2,reset=3, <br/> (arg2)  measurement index    |                          Records timing statistics for up to 16 values with min, max                          	|