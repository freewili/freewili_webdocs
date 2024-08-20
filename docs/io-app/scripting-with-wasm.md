---
title: Scripting with WebAssembly (WASM) for FREE-WILi - Setup, Compilation, and Execution
description: Learn how to script for FREE-WILi using WebAssembly (WASM). Discover the setup and installation of WASM tools, writing and compiling scripts, and executing them on FREE-WILi. Includes guides for Ubuntu Linux and Visual Studio Code configuration.
keywords: [FREE-WILi WebAssembly scripting, WASM setup, FREE-WILi scripting, compile WASM script, FREE-WILi execution, WASI SDK, Visual Studio Code WASM, WebAssembly for FREE-WILi]
sidebar_position: 4
sidebar_label: Scripting with WASM
---

# Scripting with WASM

## Introduction to WebAssembly (WASM)

WebAssembly (WASM) technology allows a program compiler to target a generic CPU architecture. The program that runs the compiled code is called a WebAssembly runtime. This technology is included in the IO app. Please note that WebAssembly has nothing to do with the Web; it is simply named after the origin of the technology.

Users can compile programs, store them in the **FREE-WILi** file system, and execute them either on demand or at power-up.

**FREE-WILi** uses the WASM3 runtime: [WASM3 on GitHub](https://github.com/wasm3/wasm3).

## APIs and Implementation

The **FREE-WILi** IO app implements APIs to control Free Wili and provides them to the runtime. These APIs are defined in a header file called `fwwasm.h`.

## Recommended Toolset

The recommended toolset to compile for **FREE-WILi** WASM is the [WASI SDK](https://github.com/WebAssembly/wasi-sdk). For a development IDE, we recommend using Visual Studio Code or CLion.

## Execution

After compiling your script to WebAssembly (extension `.wasm`), you must upload the file to the FREE-WILi filesystem.  The best way to do this is with the [freewili](https://pypi.org/project/freewili/) Python library, as will be explained under `Getting Started` below.

After your script is uploaded to the FREE-WILi, you can have it run on startup. The script will execute every time **FREE-WILi** is powered on. Alternatively, you can start WASM files on demand from the serial menu, or you can start them using the [freewili](https://pypi.org/project/freewili/) Python library.

-----------

# Getting Started

There are a lot of different WebAssembly compilers; you can write your code in Rust, Python, C/C++, and several others.  The following example will use the wasi-sdk, which comes with a clang-based C/C++ compiler.

## Installing the SDK

### Ubuntu Linux

In Ubuntu Linux, the quickest way to get up and running is to download the `.deb` prebuilt package from Github under [Releases](https://github.com/WebAssembly/wasi-sdk/releases).  For Ubuntu Linux on an x86-based machine, grab the Debian package (.deb) file for x86.  In this example, the file is [wasi-sdk-24.0-x86_64-linux.deb](https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-24/wasi-sdk-24.0-x86_64-linux.deb).

* Install the package with `sudo dpkg --install wasi-sdk-24.0-x86_64-linux.deb`
* After installation, the compiler will be located here: `/opt/wasi-sdk/bin/wasm32-wasi-clang++`

### Windows 

TODO

## Writing a Script

Use VS Code or a text editor, and write your script.  For this example we will use C++ and write a simple script to turn each of 
the board LEDs a different color.

* Make sure you have the `fwwasm.h` header file
* Copy and paste this example script into your text editor, and save it as `leds.cpp`

```cpp
#include "fwwasm.h"

#define MAX_LOOPS 20
#define NUM_LEDS 7
#define DELAY_MS 50
#define LED_FADE_DURATION 300

//different color RGB values
#define RED 0xFF0000
#define PINK 0xFFC6FF
#define ORANGE 0xFF7F00
#define YELLOW 0xFFFF00
#define GREEN 0x00FF00
#define LIGHT_GREEN 0xCAFFBF
#define BLUE 0x0000FF
#define LIGHT_BLUE 0x9BF6FF
#define INDIGO 0x4B0082
#define VIOLET 0x9400D3
#define MAX_COLORS 10

//some macros to get color RGB components
#define GET_RED(x) ((x >> 16) & 0xFF)
#define GET_GREEN(x) ((x >> 8) & 0xFF)
#define GET_BLUE(x) (x & 0xFF)

int main()
{
    int rainbow[MAX_COLORS] = {RED, ORANGE, YELLOW, GREEN, LIGHT_GREEN, BLUE, LIGHT_BLUE, INDIGO, VIOLET, PINK};
    int color_choice = 0;

    //do the whole thing multiple times
    for (int loops = 0; loops < MAX_LOOPS; loops++)
    {
        //set every LED one at a time
        for (int led = 0; led < NUM_LEDS; led++)
        {
            //pick a color
            int color = rainbow[color_choice];

            //set the LED 
            setBoardLED(led, GET_RED(color), GET_GREEN(color), GET_BLUE(color), LED_FADE_DURATION, LEDManagerLEDMode::ledpulsefade);

            //next time, get a new color.  If we used all of the colors, start over
            color_choice++;
            if (color_choice >= MAX_COLORS)
                color_choice = 0;

            //wait before setting the next LED
            waitms(DELAY_MS);
        }    
    }

    return 0;
}
```

## Compiling the Script

At the commandline, in Linux:

* `/opt/wasi-sdk/bin/wasm32-wasi-clang++ -O3 -s leds.cpp -o leds.wasm`

Note the `-s` argument is **critical** to force the linker to strip debugging symbols from the output binary.

At the commandline, in Windows:

* TODO

## Uploading the Script

* Install the `freewili` Python library with `pip install freewili`
* Note: the `freewili` library requires Python 3.11 or newer.
* Upload your script with `fwi-serial -s leds.wasm -fn /scripts/leds.wasm`

## Executing the Script

Once the script is on the FREE-WILi filesystem, there are multiple ways it can be executed:

* From the FREE-WILi interface, you can select "Scripts" then select your script to execute it.
* From the commandline, you use the `freewili` Python library to execute the script: `fwi-serial -w leds.wasm`
* From the serial terminal interface, you can select `w` to run a script, then type `leds.wasm` and hit enter

## Troubleshooting

* A good tool for troubleshooting WASM files is the WebAssembly Explorer.

import Card from '@site/src/components/Card';

<Card 
  title="WebAssembly Code Explorer"
  description=""
  link="https://wasdk.github.io/wasmcodeexplorer/" 
  imageUrl=""
/>

-----------

# Visual Studio Code Configuration

## Ubuntu Linux

Assuming you installed the sdk as described above, you can get Visual Studio code to recognize your wasi-sdk as follows:

* Install the CMake extension for VS Code, as well as the CMake Tools extension
* Create a file called CMakeLists.txt and place it in the root of your project
* Copy and paste the following into the CMakeLists.txt
```json
cmake_minimum_required(VERSION 3.0)
project(wasm_project)

set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s")

add_executable(leds.wasm "leds.cpp")
```
* Create a file called CMakePresets.json and place it in the root of your project
* Copy and paste the following into the CMakePresets.json

```json
{
    "version": 3,
    "cmakeMinimumRequired": {
        "major": 3,
        "minor": 16,
        "patch": 0
    },
    "configurePresets": [
        {
            "name": "default",
            "hidden": true,
            "generator": "Ninja"
        },
        {
            "name": "wasi",
            "description": "Configure for WASI using wasi-sdk",
            "inherits": "default",
            "toolchainFile": "/opt/wasi-sdk/share/cmake/wasi-sdk.cmake",
            "cacheVariables": {
                "CMAKE_BUILD_TYPE": "Release"
            }
        }
    ]
}
```

* Use `CTRL-SHIFT-P` in Visual Studio code and select "CMake: Select Configure Preset".  Select 'wasi` from the dropdown that appears.  (Note: You may need to reload VS Code for this option to appear.)
* You can now use the 'build' button in Visual Studio Code to build your wasm project with one click.
