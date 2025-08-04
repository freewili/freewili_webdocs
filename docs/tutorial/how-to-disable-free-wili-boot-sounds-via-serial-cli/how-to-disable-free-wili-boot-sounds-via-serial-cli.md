---
title: How to Disable FREE-WILi Boot Sounds via Serial CLI
description: Learn how to disable FREE-WILi display boot sounds using a serial CLI connection. Step-by-step instructions using PuTTY to access settings and turn off system audio.
keywords: [FREE-WILi boot sound, disable startup sound, CLI sound settings, PuTTY serial connection, FREE-WILi terminal settings, turn off display sound, sound configuration FREE-WILi, mute boot audio FREE-WILi]
sidebar_position: 1
sidebar_label: How to Disable FREE-WILi Boot Sounds via Serial CLI
---

# How to Disable FREE-WILi Boot Sounds via Serial CLI

This tutorial explains **how to disable the boot and system sounds** on your FREE-WiLi display using a serial CLI connection.

## 🔌 Connecting via PuTTY

1. Launch **PuTTY**.
2. In the **"Category"** pane, select **Session**.
3. Select **Serial** as the connection type.
4. Set the **Serial line** (e.g., COM11).  
   - Note - You can find the correct COM port in **Device Manager**.
5. Set **Speed** to `115200`.
6. Click **Open** to to initiate the connection.

<div class="text--center">

<figure>

![Connecting with PuTTY](../../assets/connecting-with-putty.webp "Connecting with PuTTY")
<figcaption>Connecting with PuTTY</figcaption>
</figure>
</div>

## ⚙️ Configuring Sound Settings

1. From the **Main Menu**, press `z` to go to **Settings**.

<div class="text--center">

<figure>

![navigate-to-settings](../../assets/navigate-to-settings.webp "navigate-to-settings")
<figcaption>Navigate to Settings</figcaption>
</figure>
</div>

<br/><br/>

<div class="text--center">

<figure>

![select-settings](../../assets/select-settings.webp "select-settings")
<figcaption>Select Settings</figcaption>
</figure>
</div>

<br/>

2. Once in the "Settings" menu, press `g` to open **Sound** configuration.

<div class="text--center">

<figure>

![configure-sound](../../assets/configure-sound.webp "configure-sound")
<figcaption>Configure Sound</figcaption>
</figure>
</div>

3. To adjust the speaker volume, press `v` to adjust volume.
   - When prompted, enter `0` and press **Enter** to set the volume to zero.

<div class="text--center">

<figure>

![speaker-volume](../../assets/speaker-volume.webp "speaker-volume")
<figcaption>Adjust Speaker Volume</figcaption>
</figure>
</div>

4. Press `p` to disable system sounds.
   - Enter `0` and press **Enter** to turn sounds select **off**.

<div class="text--center">

<figure>

![turn-off-sound](../../assets/turn-off-sound.webp "turn-off-sound")
<figcaption>Disable Sound</figcaption>
</figure>
</div>


## 💾 Saving the Configuration

1. Press `q` to exit the **"Configure Sound"** menu and return to the **"Settings"** menu.

<div class="text--center">

<figure>

![select-settings](../../assets/select-settings.webp "select-settings")
<figcaption>Select Settings</figcaption>
</figure>
</div>

2. Press `s` to **Save Settings as Startup**.

<div class="text--center">

<figure>

![save-settings](../../assets/save-settings.webp "save-settings")
<figcaption>Save Settings as Startup</figcaption>
</figure>
</div>

3. A confirmation message:  
   > `Saving Settings to settings.txt...` will appear.

<div class="text--center">

<figure>

![cnfm-settings](../../assets/cnfm-settings.webp "cnfm-settings")
<figcaption>Confirm Settings</figcaption>
</figure>
</div>

4. The FREE-WILi startup sound is now successfully disabled.✅

## 📝 Related

- [FREE-WiLi Product Overview](/)