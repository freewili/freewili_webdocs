---
title: FREE-WILi Host USB Serial API - Controlling FREE-WILi via USB Serial Port
description: Control FREE-WILi from a Linux/Windows PC or Raspberry Pi using the USB serial API. Learn how to open a USB serial port, send menu commands, and manage responses. Discover how to toggle menu text with CTRL-B and CTRL-C.
keywords: [FREE-WILi USB serial API, control FREE-WILi via USB, USB serial port commands, FREE-WILi command line interface, toggle menu text, Linux Windows Raspberry Pi control]
sidebar_position: 3
sidebar_label: Host USB Serial API
---

# Host USB Serial API

To control FREE-WILi with a host device such as a Linux/Windows PC or Raspberry Pi you can use the USB serial API.

By opening a USB serial port code and send menu commands and interpret the responses.  

The menu text useful for command line interface can be disabled by sending ASCII `CTRL + B`. It can be re enabled using `CTRL + C`.

The FREE-WILi github has a full implementation of device control with Python

import Card from '@site/src/components/Card'; 

<Card 
  title="GitHub - freewili/freewili-python: Python applications for FREE-WiLi"
  description="GitHub"
  link="https://github.com/freewili/freewili-python" 
  imageUrl="/img/github.png"
/>

## App

FREE-WILi includes a terminal app that allows you do everything from the USB serial terminal. You can add text input clicking the input button. The gray button allows you to switch between the main and display CPU terminal.

<div class="text--center">

<figure>

![The Terminal app allows you to use the serial terminal on the device](../assets/terminal-app.jpg "The Terminal app allows you to use the serial terminal on the device.")
<figcaption>The Terminal app allows you to use the serial terminal on the device.</figcaption>
</figure>
</div>