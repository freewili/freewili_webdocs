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

Example wasm projects are available from the FREE-WILi Github:

import Card from '@site/src/components/Card'; 

<Card 
  title="GitHub - freewili/freewili-python: Python applications for FREE-WiLi"
  description="GitHub"
  link="https://github.com/freewili/freewili-python" 
  imageUrl="/img/github.png"
/>

<br/>

Users can compile programs, store them in the **FREE-WILi** file system, and execute them either on demand or at power-up.

**FREE-WILi** uses the WASM3 runtime: [WASM3 on GitHub](https://github.com/wasm3/wasm3).

## APIs and Implementation

The **FREE-WILi** IO app implements APIs to control FREE-WILi and provides them to the runtime. These APIs are defined in a header file called [fwwasm.h](https://github.com/freewili/fwwasm/blob/master/include/fwwasm.h).

## Recommended Toolset

The recommended toolset to compile for **FREE-WILi** WASM is the [WASI SDK](https://github.com/WebAssembly/wasi-sdk). 

For a development IDE, we recommend using [Visual Studio Code](https://code.visualstudio.com/) or [CLion](https://www.jetbrains.com/clion/).

## Execution

After compiling your script to WebAssembly (extension `.wasm`), you must upload the file to the FREE-WILi filesystem.  The best way to do this is with the [freewili](https://pypi.org/project/freewili/) Python library, as will be explained under `Getting Started` below.

After your script is uploaded to the FREE-WILi, you can have it run on startup. The script will execute every time **FREE-WILi** is powered on. Alternatively, you can start WASM files on demand from the serial menu, or you can start them using the [freewili](https://pypi.org/project/freewili/) Python library.

-----------

# Getting Started

There are a lot of different WebAssembly compilers; you can write your code in Rust, Python, C/C++, and several others.  

The following example will use the wasi-sdk, which comes with a clang-based C/C++ compiler.

## Installing the SDK

### Windows 10 and Windows 11

There are issues with using the WASI-SDK windows binaries in Windows 11. Therefore we recommend installing and using [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/) provided by Microsoft.

* Install WSL with the following command in Command Prompt or PowerShell
    ```bash
    wsl --install
    ```
* After installation, open the WSL app and follow the installation prompt. (You can search for WSL in Window's search bar or you can select it in the [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/))
* Once WSL Follow the `Ubuntu Linux` setup and build instructions

### Ubuntu Linux

In Ubuntu Linux, the quickest way to get up and running is to download the `.deb` prebuilt package from Github under [Releases](https://github.com/WebAssembly/wasi-sdk/releases).  For Ubuntu Linux on an x86-based machine, grab the Debian package (.deb) file for x86.  In this example, the file is [wasi-sdk-24.0-x86_64-linux.deb](https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-24/wasi-sdk-24.0-x86_64-linux.deb).

* Downlooed the package with:
    ```bash
    $ sudo wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-24/wasi-sdk-24.0-x86_64-linux.deb
    ```
* Then, install the package with:
    ```bash
    $ sudo dpkg --install wasi-sdk-24.0-x86_64-linux.deb
    ```
* After installation, the compiler will be located here: `/opt/wasi-sdk/bin/wasm32-wasi-clang++`
    * If you want, you could set an alias to the wasm clang compiler with the following command:
        ```bash
        alias wasm32-wasi-clang++='/opt/wasi-sdk/bin/wasm32-wasi-clang++'
        ```

## Writing a Script

Use VS Code or a text editor, and write your script.  For this example we will use C++ and write a simple script to turn each of 
the board LEDs a different color.

* Make sure you have the [fwwasm.h](https://github.com/freewili/fwwasm/blob/master/include/fwwasm.h) header file
* Copy and paste this example script below into your text editor, and save it as `leds.cpp`

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

At the command line, run the following:

### Ubuntu Linux Terminal

``` bash
$ /opt/wasi-sdk/bin/wasm32-wasi-clang++ -O3 -s leds.cpp -o leds.wasm
```

Note the `-s` argument is **critical** to force the linker to strip debugging symbols from the output binary.

After a sucessful compilation, the compiler should output a binary called `leds.wasm`. This is your WASM script and will need to upload this binary to the FREE-WILi.

## Uploading the Script

* Note: If you are using WSL in Windows, you may need to copy over the `leds.wasm` from your Linux's file system to Window's file system inorder to upload the script.

* Install the `freewili` Python library with:
    ```bash
    pip install freewili`
    ```
* Note: the `freewili` library requires Python 3.11 or newer.
* Upload your script with:
    ```bash
    fwi-serial -s leds.wasm -fn /scripts/leds.wasm
    ```

## Executing the Script

Once the script is on the FREE-WILi's file system, there are multiple ways it can be executed:

* From the FREE-WILi interface, you can select "Scripts" then select your script to execute it.
* From the commandline, you use the [FREE-WILi Python Library](https://pypi.org/project/freewili/) to execute the script: `fwi-serial -w leds.wasm`
* From the serial terminal interface, you can select `w` to run a script, then type `leds.wasm` and hit enter


## Common Issues Targeting FREE-WILi (Troubleshooting)

Many tools compile binaries that use too  many memory pages. FREE-WILi only supports 2 (128Kb). Ensure that the stack size of your binary is limited in this way. Please see the [FREE-WILi Wasm Examples](https://github.com/freewili/wasm-examples/tree/main) for the necessary command line switches need to do this.

A good tool for troubleshooting WASM files is the WebAssembly Explorer.

<Card 
  title="WebAssembly Code Explorer"
  description=""
  link="https://wasdk.github.io/wasmcodeexplorer/" 
  imageUrl=""
/>

-----------

# Visual Studio Code Configuration

Assuming you installed the sdk as described above, you can get Visual Studio code to recognize your wasi-sdk as follows:

* Install the CMake extension for VS Code, as well as the CMake Tools extension[here](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)
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

## Ubuntu Linux
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
* You can now use the `build` button in Visual Studio Code to build your wasm project with one click.

Alternativly, you can run the following CMake commands in Visual Studio Code

* Inside the [VSCode command Palette](https://code.visualstudio.com/api/ux-guidelines/command-palette) run the      following commands:
    - `>CMake: Select Variant` and select `MinSizeRel`
    - `>CMake: Configure`
    - `>CMake: Build Target`
    - `>CMake: Select A Kit`
        - Make sure the kit is unspecified.

# Next Steps

Take a look at our [FWWasm Submodule](https://github.com/freewili/fwwasm.git) for supported FREE-WILi WASM APIs. You can use this moudle in your projects.

There are several WASM examples written in different languages in the [FREE-WILi WASM Example repo](https://github.com/freewili/wasm-examples/tree/main)

Examples for a specfic lanauge can be found below
 * [CXX](https://github.com/freewili/wasm-examples/tree/main/cxx)
 * [Rust](https://github.com/freewili/wasm-examples/tree/main/rust)
 * [Go](https://github.com/freewili/wasm-examples/tree/main/go)
 * [Zig](https://github.com/freewili/wasm-examples/tree/main/zig)
