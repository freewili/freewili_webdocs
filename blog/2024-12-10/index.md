---
slug: wiLi-party
title: WiLi-Party LED Minigames
authors: [Andi Shaska, Harshad Bhojan]
tags: [FREE-WILi, mhacks, hackethon, student project]
---

<!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

<!-- - `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md` -->

<!--A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config. -->

import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="7VzAm0KVVoo" />

<br/>

## Inspiration

We love competitive games like Mario Party and the cuteness of small devices like Tamagotchi. We wanted a project that combines the two, which is why the free wili seemed like a great system to use.

<!-- truncate -->

## What it does

Gives users the ability to play four 1v1 games

1) Mashing game - Who can rack up the highest number of button presses before time runs out?
2) Memory game - A pattern sequence, up to 3 levels of increasing difficulty. Test your memory!
3) Counting game - Keep track of your color light and how many times it flashes. Don't blink.
4) Reaction game - Who can react faster? Click the color that shows up as quick as you can.

The lights at the end of a game blink red if P1 has won and green if P2 (yellow if tie).

## How we built it

We used two Python libraries. The freewill API to communicate with the free wili and flash our code, and the pygame library to receive and read controller input. We also have a given header file for C++ definitions of useful functions that allow us to configure the free wili board, such as LED toggles and Display images.

## Challenges we ran into

The free wili had some hardware limitations that prevented us from fully fledging out our implementation as was planned. Primarily, its I/O capabilities are limited, and cannot read controller input through USB-C as a general purpose computer can, so we had to keep the system wired to the computer during play. We also ran into space issues in uploading images to the display, so the UI is not as in depth as we would have liked.

## Accomplishments that we're proud of

For having found out about this device only 24 hours before submission, we are very proud of the fact that we were able to flash the device with our software, turn on LEDs, upload images, and have it function properly with our controller input, despite the limitations we encountered.

## What we learned

We learned a lot about how free wili works, how to write to it, and its functionalities. We also learned how to use pygame to process user inputs from a controller, to parse and control them correctly, and also how to manage multiple controllers.

## What's next for Wili-Party

Ideally, we would love to make the controller input work without running it through a computer for processing. We want the games to be able to be fully run on the free wili itself, with just two controllers as support. We would also like to make the communication wireless, so we are not cluttered with USB-C cables while playing.

### Built With

```c++``` ```freewili``` ```pygame``` ```python``` ```time```