---
title: "FREE-WILi Button Controls: Functions, API, and Click Simulation"
description: Discover FREE-WILi's 5 buttons, their functions, and support for clicks, double clicks, startup press, and long press, plus how to use API events and simulate clicks with Roku Remote.
keywords: [FREE-WILi buttons, button functions, button API, click simulation, Roku Remote, FWGUI events, setPanelMenuText, bootloader, user interface controls]
sidebar_position: 4
sidebar_label: Buttons
---

# Buttons

FREE-WILi includes 5 buttons. These are used to control the user interface. The buttons support clicking, double clicking, startup press, and long press.

## Button Fixed Functions

The gray button is hard wired to the battery controller. This will wake the device from a shutdown if held for two seconds.

The red button is hard wired to the BOOTSEL feature of the Main CPU. There on a power up this will be read to determine if the Main should stay in the bootloader.

The Blue button is used by the display to enter the boot-loader. This is done in software. So if the display processor enters bootloader it will not return to the main software until the battery is depleted or a valid UF2 file is flashed. The blue button will only enter bootloader on a long press on the main screen.

## Roku Remote Click Simulation

The Roku Remote can be enabled to simulate a click event on the 5 buttons. More information in the [IR topic](/gui-screen-buttons-and-lights/ir-infrared-devices/).

## API

The buttons are available though API through events. Also, you can enable a button menu through the setPanelMenuText API. Please note the panel must enable the panel menu.

```c
// Set Menu panel text, A null string will clear it, must be enabled on panel
void setPanelMenuText(int iPanel, int iButtonGreyFromZero, const char * szMessage);

case FWGUI_EVENT_GRAY_BUTTON:
        return "graybutton";
case FWGUI_EVENT_YELLOW_BUTTON:
        return "yellowbutton";
case FWGUI_EVENT_GREEN_BUTTON:
        return "greenbutton";
case FWGUI_EVENT_BLUE_BUTTON:
        return "bluebutton";
case FWGUI_EVENT_RED_BUTTON:
        return "redbutton";
                        
printf("event %s ", getEventName(stEvents[iCount].iEvent));
        if (stEvents[iCount].iEvent >= FWGUI_EVENT_GRAY_BUTTON && 
                        stEvents[iCount].iEvent <= FWGUI_EVENT_RED_BUTTON)
        {
               printf("%s ",  getButtonData(stEvents[iCount].btData[0]));
        }
                        
const char * getButtonData(int iValue)
{
        switch (iValue)
        {
                case (int)rpFWGUIButtonEvent::clicked:
                        return "clicked";
                case (int)rpFWGUIButtonEvent::doubleclicked:
                        return "doubleclick";
                case (int)rpFWGUIButtonEvent::longpress:
                        return "longpress";
                case (int)rpFWGUIButtonEvent::poweruppressed:
                        return "longpress";
        }
        return "";
}
```