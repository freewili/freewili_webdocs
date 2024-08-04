---
sidebar_position: 4
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

## Compiling the Script

At the commandline, in Linux:

* `/opt/wasi-sdk/bin/wasm32-wasi-clang++ -O3 -s leds.cpp -o leds.wasm`

Note the `-s` argument is **critical** to force the linker to strip debugging symbols from the output binary.

At the commandline, in Windows:

* TODO

## Uploading the Script

* Install the `freewili` Python library with `pip install freewili`
* Note: the `freewili` library requires Python 3.11 or newer.
* Upload your script with `fwi-serial -d leds.wasm /scripts/leds.wasm`

## Executing the Script

Once the script is on the FREE-WILi filesystem, there are multiple ways it can be executed:

* From the FREE-WILi interface, you can select "Scripts" then select your script to execute it.
* From the commandline, you use the `freewili` Python library to execute the script: `fwi-serial -w leds.wasm`
* From the serial terminal interface, you can select `w` to run a script, then type `leds.wasm` and hit enter

## Troubleshooting

* A good tool for troubleshooting WASM files is the WebAssembly Explorer.
* 

import Card from '@site/src/components/Card';

<Card 
  title="WebAssembly Code Explorer"
  description=""
  link="https://wasdk.github.io/wasmcodeexplorer/" 
  imageUrl=""
/>