---
title: FREE-WILi Sound Playback - WAV Files, API Calls, and Tools
description: Learn how to play WAV files on FREE-WILi, including supported formats, API calls for sound playback, and tools for editing WAV files. Explore ROM sounds and resources.
keywords: [FREE-WILi, sound playback, WAV files, API calls, playSoundFromFile, playSoundFromNameOrID, playSoundFromNumber, Audacity, ROM sounds, WAV file sources]
sidebar_position: 2
sidebar_label: Making sounds
---

# Making sounds

FREE-WILi includes a speaker. The speaker allows you to play sounds stored as wav files in the file system.

The sounds directory can include wav files that can be played from the serial menu. The menu option `'g'` will let you enter in a wav file to play. They will also be listed in the sound board app.

The wav files supported currently are 8khz stereo or mono files encoded as 16 bit PCM. The speaker is one channel so the second channel in stereo is discarded. Mono files are recommended because they are smaller.

The sounds are stored in the sounds directory. By default the sounds will be searched by name here. Since they are all wav extensions you do not need to include the extension. If you have a sound somewhere else in the file system, specify the entire path. For example a recorded sound, `\record\rec1.wav`

Sounds can be launched from the serial API or host RP2040 API. Also the sound board app can launch sounds.

There is an API call (playSoundFromNumber) that can read numbers out loud via a 1980s text-to-speech technique. This is playing sequences of wav files to say a number.

### Converting Audio to Compatible WAV Files

To make your own sounds for FREE-WILi, the files must be in 8000 Hz, 16-bit PCM WAV format.

You can convert your audio using either method:

**1. Use the Web-Based Audio to WAV Converter** <br/>
  ‐ Easily convert your audio files into FREE-WILi compatible `.wav` files here:<br/>
 👉 [https://freewili.com/audio-to-wav-converter/](https://freewili.com/audio-to-wav-converter/)

**2. Use Desktop Software like Audacity®** <br/>
  ‐ Audacity can export audio as 8000 Hz, 16-bit PCM WAV files.


## App

The Sound board app allows you to play select ROM sounds and sounds from the file system.

<div class="text--center">

<figure>

![The sound board app lets you test sounds.](../../assets/sound-app.webp "The sound board app lets you test sounds.")
<figcaption>The sound board app lets you test sounds.</figcaption>
</figure>
</div>

## API Calls for sounds

```cpp
void playSoundFromFile(char * szSoundPath);
void playSoundFromNameOrID(const char * szSoundName, int iID);
void playSoundFromNumber(bool bFloat, int iNumber, float fNumber, int iFloatDigits);
```

## ROM Sounds

FREE-WILi includes sounds in its ROM. Below is a list of ROM sounds.

import Card from '@site/src/components/Card'; 

<Card 
  title="FwROMAudioAssets.pdf"
  description="pdf"
  link="/downloads/FwROMAudioAssets.pdf" 
  imageUrl="/img/png-download.png"
/>

## Software to edit and create proper wav files

<Card 
  title="Home"
  description="Audacity ®"
  link="https://www.audacityteam.org/" 
  imageUrl="/img/Audacity.svg"
/>

<br/>

<div class="text--center">

<figure>

![Audacity can export an 8000 hz 16 bit PCM wav file](../../assets/edit-wav-files.png "Audacity can export an 8000 hz 16 bit PCM wav file")
<figcaption>Audacity can export an 8000 hz 16 bit PCM wav file</figcaption>
</figure>
</div>

## Source for wav files 

<Card 
  title="WavSource.com: Free Wav Files and Sound Bites"
  description=""
  link="https://www.wavsource.com/" 
  imageUrl="https://www.wavsource.com/favicon.ico"
/>