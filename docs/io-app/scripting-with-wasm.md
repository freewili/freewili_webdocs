---
sidebar_position: 4
---

# Scripting with WASM

WebAssembly (WASM)  technology allows a program compiler to target a generic CPU. The program the runs the compiled code is called a web assembly run time.  This technology is included in the IO app.  Please note WebAssembly has nothing to do with the Web - its just where the origin of the technology came from.

Users can compile programs, store them in the Free Wil-i's file system and execute them. Either on demand or at power up.

Free Wil-i uses the WASM 3 run time. [https://github.com/wasm3/wasm3](https://github.com/wasm3/wasm3)

The Free Wil-i IO app implement APIs to control FW and provides them to the run time. These APIs are defined in a header file called "fwwasm.h"

The recommend toolset to compile for Free Wil-i wasm is the wasi sdk [https://github.com/WebAssembly/wasi-sdk](https://github.com/WebAssembly/wasi-sdk) . For a development IDE visual studio code or CLion is recommended.

In the settings menu you can select a WASM file to run on start -up. This will run anytime Free Wil-i is powered on. Otherwise you can start WASM files from the serial menu.

Because of the current file systems limitations we recommend a 3 letter .wsm extension.

A good tool for trouble shooting WASM files is the web assembly explorer.

import Card from '@site/src/components/Card';

<Card 
  title="WebAssembly Code Explorer"
  description=""
  link="https://wasdk.github.io/wasmcodeexplorer/" 
  imageUrl=""
/>
