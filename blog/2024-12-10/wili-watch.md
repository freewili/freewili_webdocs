---
slug: wiLi-watch
title:  WiLi Watch – Voice-Activated Wearable for Smart Home Control
authors: [Ethan McKean, Anshul Mohanty, Alexandra Enders, Austyn Nguyen]
tags: [FREE-WILi, mhacks, hackathon, student project]
---

import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="UYSAEgx3lSQ" />

<br/>

## Inspiration

In a world increasingly reliant on technology, the ability to interact with our surroundings effortlessly is essential, especially for individuals with mobility challenges. Enter the WiLi Watch, a wearable wristband powered by FREE-WILi and Groq aimed to empower users with independence.

<!-- truncate -->

The journey began with a vision: to create a device that could simplify and enhance daily living for individuals with movement impairments. Our team recognized the need for an intuitive interface that would allow users to control their smart home environment without the barriers typically posed by traditional devices. By harnessing the capabilities of the watch's built-in infrared (IR) transmitters, we sought to bridge the gap between technology and accessibility.

## What it does

The user wears an embedded wristband device that can be used to control and interact with their environment. Here is the specific tasks that can be performed wirelessly from your wrist:

- Turn on and off lights
- Lock and unlock your door
- Display live steamed camera footage of your doorstep
- Bring up your GCal or the weather to be displayed These tasks can either be initiated through buttons on the wristband, or from asking out loud for certain actions to be done. We use AI to predict your needs as well based on what you say. For example, if you mention "Oh did I forget to lock the door?" the door will lock automatically, and saying "will I need an umbrella later?" will cause the weather report to go on display. Additionally, a speaker announces to you every action that is done for peace of mind. Finally, one can inquire about who is at their door and the hub will describe to you your visitor.

## How we built it

This project relies on the wireless IR communication between a FREE-WILi device and a smart home "hub" consisting of an Orange Pi 5 and Arduino Nano that control other peripherals such as a camera, door "locking" system, IR receiver module, speaker, microphone, and external monitor. The frameworks we used for development are Groq for easy LLM use (Whisper for speech to text and Llama for natural language reasoning) and Cartesia for speech-text interfacing, all developed on a python virtual environment. The project is also modular to be used with Intel's IDC if private LLM generation is desired (we setup a flask server serving llama.cpp inferencing on a compute instance but ran out of credits)

## Challenges we ran into

- Using GPIO on the Orange Pi; we had to pivot after hours to integrate another microcontroller with a functional GPIO interface for motor control and IF receiving
- Networking compatibility; we found out later than we'd like that the Free WiLi device which we centered our project around does not have capabilities to connect to the internet / Bluetooth so we switched to IF communication
- Python development on Linux; Python virtual environments are not for the weak of heart

## Accomplishments that we're proud of

- Fully functional prototype built from the ground up in 24 hours!!
- Door locking system on a physical prototype + doorstep camera
- Overcoming Free WiLi debugging hurdles in the middle of the night
- Kept persistence even through sleep deprivation

## What we learned

- Hardware hacking is challenging, but super fun!
- Cable management can and will stress you out
- Implementing APIs in a larger program
- Wireless communication (IR and RF)
- Ideation is so important

## What's next for The WiLi Watch

Increase in functionalities available on the watch as well as real world implementation (metal instead of cardboard). A few functionalities that we came up with that could be expanded on in further development are as follows:

- Autonomous robotic car assistant that can retrieve items
- Interact with kitchen appliances (turn on/off stove)
- Emergency response / alarm system
- Temperature control

## Built With

`arduino-nano` `cartesia` `freewili` `groq` `llama` `orange-pi` `python` `whisper`

### Try it out

<!-- ![GitHub](./github.png) [GitHub Repo](https://github.com/ethanmckean/The-WiLi-Watch-mhacks24) -->
<!-- ![GitHub](./github.png) <a target="_self" rel="noopener noreferrer" href="https://github.com/ethanmckean/The-WiLi-Watch-mhacks24" class="inline-image">GitHub Repo</a> -->

<div class="github-img">

![GitHub](./github.png) <a href="https://github.com/ethanmckean/The-WiLi-Watch-mhacks24" target="_blank"><span>GitHub Repo</span></a>
</div>

*Source* - [https://devpost.com/software/wili-watch](https://devpost.com/software/wili-watch)