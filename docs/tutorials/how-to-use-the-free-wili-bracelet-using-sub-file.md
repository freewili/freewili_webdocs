---
title: How to use the FREE-WILi Bracelet using `.sub` file - Upload & Control Radio Patterns
description: Learn how to use .sub files with FREE-WILi LED bracelets. Upload radio playlists to your device using scripts or the fwi-serial tool, sync bracelet lights, and control transmission patterns with ease.
keywords: [FREE-WILi bracelet, FREE-WILi .sub files, FREE-WILi bracelet guide, FREE-WILi upload .sub, FREE-WILi radio playlists, FREE-WILi LED bracelet sync, FREE-WILi bracelet setup, fwi-serial FREE-WILi, FREE-WILi bracelet transmit, FREE-WILi bracelet patterns]
sidebar_position: 2
sidebar_label: How to use the FREE-WILi Bracelet using .sub file
---

# How to use the FREE-WILi Bracelet using `.sub` file

The bracelet `.sub` files were created for the LED bracelets. These files define the radio transmission patterns that make the bracelets light up, sync, and interact during the event.

Each `.sub` file contains preconfigured radio payloads designed to run on the FREE-WiLi platform. Once present on your device, they appear in the Radios → Transmit menu, ready for use.

Think of these subfiles as **“radio playlists”** for your bracelets — each one carries a different signal pattern you can broadcast, remix, or combine with your Orca module experiments.

Download the `.sub` files from GitHub page at [https://github.com/freewili/bracelet_subfiles](https://github.com/freewili/bracelet_subfiles)

## Uploading the `.sub` Files to FREE-WILi

📋 **Prerequisites**

<div>
- Python 3.10+
- Install the FREE-WILi Python library:
<div>`pip install freewili`</div>
</div>

<br/>

**- Method 1: Using the Upload Scripts (Recommended)**

The easiest way to upload all `.sub` files is with the provided scripts:

**Windows (PowerShell):**

```shell
.\upload.ps1
```

**Linux/macOS (Bash):**

```shell
./upload.sh
```
These scripts will automatically upload all **.sub** files to the **/radio/** directory on your device.

----

**- Method 2: Manual Upload**

**For manual control, you can use the `fwi-serial` tool.**

**Check your version:**

```
fwi-serial --version
# fwi-serial 0.0.29
```


**List connected devices:**

```
fwi-serial -l
# Found 1 FreeWili(s)
```
```
# Found 1 FreeWili(s)

# 1. Free-Wili FW4852
#    1. Main: MainCPU v54 (USB Composite Device): COM4
#    2. Display: DisplayCPU v54 (USB Composite Device): COM3
#    3. FPGA: FreeWili (USB Serial Converter): COM49
```

Upload an individual `.sub` file:

```
fwi-serial -s yellow.sub
```

## ✅ **Verification**

- Uploaded `.sub` files will appear under Radios → Transmit on your FREE-WiLi device.
- A power cycle of the device may be required for them to show up.
- All files are stored automatically in the /radio/ directory.
