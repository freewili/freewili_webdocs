---
title: FREE-WILi Firmware Update - How to Update FREE-WILi Firmware, Main and Display Processors
description: Learn how to update the firmware on both RP2040 processors of FREE-WILi. Follow detailed steps to update the MAIN and DISPLAY processors using UF2 files. Ensure each processor receives the correct firmware for proper operation.
keywords: [FREE-WILi Firmware Update, RP2040 Processor Update, MAIN Processor Firmware, DISPLAY Processor Firmware, UF2 File Update, FREE-WILi USB Bootloader, Firmware Installation Guide]
sidebar_position: 12
sidebar_label: FREE-WILi Firmware Update
---

# FREE-WILi Firmware Update

:::info[]
<h4>🚀 We have released a new firmware updates for both the main and display components, <br class="br-mobile" /> <a target="_blank" rel="noopener noreferrer" href="https://github.com/freewili/freewili-firmware" class="highlight">Check it out on GitHub</a> and get the latest version now.</h4>
<h4>📱 You can determine what firmware you have from the <a target="_self" rel="noopener noreferrer" href="/gui-screen-buttons-and-lights/about-app/" class="highlight-app">About app</a>. </h4>
:::

FREE-WILi has two RP2040 processors.  One is the **DISPLAY** processor and the other is the **MAIN** processor.

⚠️ It is important to update each processor with the correct type of firmware file.

⚠️ The below instructions assume that the FREE-WILi is [TURNED OFF](../../the-basics/#turning-free-wili-on-or-off).


## ⇨ How to Use the FREE-WILi Updater (No Button Press Needed!)

import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="pMlNC3lKGjk" />

<br/><br/>

---

## Updating the Main Processor

Pressing and holding the RED button *as USB is connected* activates the RP2040 ROM bootloader.  This will enable the default way to program the RP2040 via USB.

1) Receive or create a FREE-WILi **MAIN** UF2 file.
2) Hold the RED button and plug in USB.
3) The host computer will show FREE-WILi as a flash drive.
4) Copy the **MAIN** UF2 file to the flash drive.  Allow firmware to update.
5) After the update, FREE-WILi will disconnect from USB and reconnect as a USB COM Port (normal operation).

## Updating the Display Processor

Pressing and holding the BLUE button *as USB is connected* activates the display processor bootloader.

1) Receive or create a FREE-WILi **DISPLAY** UF2 file.
2) Hold the BLUE button and plug in USB.
3) The host computer will show FREE-WILi as a flash drive.
4) Copy the **DISPLAY** UF2 file to the flash drive.  Allow firmware to update.
5) After the update, FREE-WILi will disconnect from USB and reconnect as a USB COM Port (normal operation).

## ⇨ How to Update Your FREE-WILi Firmware (Main & Display)
#### Watch our video for more details.

<YouTubeEmbed videoId="pMlNC3lKGjk" />