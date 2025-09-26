---
title: FREE-WILi Settings Menu - Configure SPI, I2C, UART, FPGA, and More
description: Access and configure various settings in the FREE-WILi IO App, including SPI, I2C, UART, FPGA clock, and GPIO directions. Learn how to set up default scripts, FPGA configurations, and save settings for startup. Explore detailed options in the settings menu.
keywords: [FREE-WILi Settings Menu, SPI Configuration, I2C Settings, UART Configuration, FPGA Clock Settings, GPIO Directions, RTC Configuration, Default Script, Default FPGA, Save Startup Settings]
sidebar_position: 8
sidebar_label: Settings Menu
---

# Settings Menu

The IO App has settings for the device. These settings control the interface configuration. For example, the UART baud rate.  The settings menu is shown below:

<div class="text--center">

<figure>

![Settings Menu](../../../assets/settings-menu.png "Settings Menu")
<figcaption>The Settings Menu</figcaption>
</figure>
</div>

## Menu Options

The menu options are shown below.

| **Name**                 	| **Description**                                               	| **Notes** 	                                                              |
|--------------------------	|---------------------------------------------------------------	|-----------------------------------------------------------------------------|
| SPI                      	| Configures SPI Baud rate, Bit Modes, Bit Width                	| [more information](/scripting/io-app/settings-menu/spi-settings/)           |
| I2C                      	| Configures I2C bit rate and pull ups                          	| [more information](/scripting/io-app/settings-menu/i2c-settings/)           |
| UART                     	| Configures UART Bit Rate, hand shaking, stop bits, and parity 	| [more information](/scripting/io-app/settings-menu/uart-settings/)          |
| FPGA Clock               	| Configures the input clock to the FPGA                        	| [more information](/scripting/io-app/settings-menu/fpga-settings/)          |
| Radio 1                  	| Configures the CC1101 Radio 1                                 	|           	                                                              |
| Radio 2                  	| Configures the CC1101 Radio 1                                 	|           	                                                              |
| GPIO Directions          	| Sets up directions of GPIO                                    	| [more information](/scripting/io-app/settings-menu/gpio-settings/)          |
| RTC                      	| Configures the real-time clock (RTC)                          	| [more information](/scripting/io-app/settings-menu/rtc-settings/)           |
| Default Script           	| Allows a script to run on power up                            	|           	                                                              |
| Default FPGA             	| Allows a FPGA to configured at startup                        	|           	                                                              |
| Save settings as Startup 	| Saves current settings to "settings.txt" in root filesystem   	|           	                                                              |


## Settings

Settings are updated when you exit the settings menu.

The settings can be stored as a file when the "r" menu item is selected. This will store the settings so they will be loaded on startup. 

These are stored in the file system under the filename "settings.txt".