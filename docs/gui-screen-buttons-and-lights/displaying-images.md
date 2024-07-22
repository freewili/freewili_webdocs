---
sidebar_position: 3
---

# Displaying Images

FREE-WiLi allows you to display images on the screen. FREE-WiLi has some built in images but a more interesting user interface can be done with custom images.

Custom images can be loaded into the FREE-WiLi display processor file system. Then, using the API they can be displayed on command. They images should be stored in the "images" directory.

Custom images first must be converted to the FREE-WiLi Image format. This is basically a bitmap that is compatible with the 565 color display used. The direct compatibility allows fast display of images without any runtime conversion.

A python script is written called fw_image.py that can convert a jpg or png to a FWI file. A FWI file is the image file you will download to FREE-WiLi.

***Syntax of fw_image.py:***

`python3 fw_image.py source_image.png output_image.fwi`

## Displaying Images from the API

The GUIAPI has a function for displaying images. Here we display `cookie.fwi` in the images directory.

`obGUIAPI.addControlPictureFromFile(iPanelNumber,PANEL_PICTURE_COOKIE,20,160,"cookie",1 );`

<div class="text--center">

<figure>

![Cookie.fwi shown on FREE-WiLi screen.](../assets/cookie-fwi.jpg "Cookie.fwi shown on FREE-WiLi screen.")
<figcaption>Cookie.fwi shown on FREE-WiLi screen.</figcaption>
</figure>
</div>

## Structure of Image File

The file consists of a binary header describing the file and the pixels. The pixels are stored in 16 bit 565 format. The 565 16 bit color format is a common format in embedded systems. There are a number of resources online that discuss this format. The best way to understand the format is to review the source code of `fw_image.py`

## Binary Header

The beginning of the file is below. Ints are 32 bit here and shorts are 16 bit.

```c
char szOut[8] = { "FW01IMG" };
unsigned int iImageFlags;
unsigned int iImageTotalPixelCount;
unsigned short iImageWidth;
unsigned short iImageHeight;
unsigned short iImageTransparentColor;
unsigned short iImageId;
```

## Pixel Data

The pixel data is described below. A 16 bit unsigned short contains the pixel with varying intensities for Red, Green, and Blue. The final value is byte swapped.

`rgb = (int(R)<<11) | (int(G)<<5) | int(B)` <br/>
`rgb = ((rgb << 8) & 0xFF00) | ((rgb >> 8) & 0xFF);`