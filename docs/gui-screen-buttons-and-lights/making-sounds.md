---
sidebar_position: 2
---

# Making sounds

FREE-WiLi includes a speaker. The speaker allows you to play sounds stored as wav files in the file system.

The sounds directory can include wav files that can be played from the serial menu. The menu option 'g' will let you enter in a wav file to play. 

The wav files supported currently are 8khz stereo or mono files encoded as 16 bit PCM. The speaker is one channel so the second channel in stereo is discarded. Mono files are smaller.

The sounds are stored in the sounds directory. By default the sounds will be searched by name here. Since they are all wav extensions you do not to include the extension. If you have a sound somewhere else in the file system, specify the entire path. For example, `\record\rec1.wav`

Sounds can be launch from the serial API or host RP2040 API.

## Software to edit and create wav files

import Card from '@site/src/components/Card'; 

<Card 
  title="Home"
  description="Audacity ®"
  link="https://www.audacityteam.org/" 
  imageUrl="/img/Audacity.svg"
/>

## Source for wav files 

<Card 
  title="WavSource.com: Free Wav Files and Sound Bites"
  description=""
  link="https://www.wavsource.com/" 
  imageUrl="https://www.wavsource.com/favicon.ico"
/>