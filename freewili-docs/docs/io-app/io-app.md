---
sidebar_position: 4
---

# IO App

Free Wil-i includes an IO app that allows you to read and write all the IO of Free Wil-i. This app has a Serial Command Line Interface, support for a host API,  on-board scripting, and a file system for stand-alone operations without a host.

The serial command line interface provides a menu tree of commands to control free Wil-i's IO interfaces. This is shown below:

<div class="text--center">

<figure>

![Free Wili's Serial Command Line Interface Main Menu](../assets/cmd.png "Free Wili's Serial Command Line Interface Main Menu")
<figcaption>Free Wili's Serial Command Line Interface Main Menu</figcaption>
</figure>
</div>

To use a command, press a letter and the enter key. Then follow the instructions.

The serial API is simply sending these menu commands and the data they expect. Below is a simple Python API that sets a GPIO high or low using the "h" and "l" commands. In API mode you can disable the menu text with by sending CTRL-B or reenable the menu text with CTRL-C.

<div class="text--center">

<figure>

![python api for freewili](../assets/code.png "python api for freewili")
<figcaption></figcaption>
</figure>
</div>

On board scripting uses web assembly technology.  The code uses the WASM 3 engine with custom APIs to control Free Wil-i's interfaces. With this you can compile C/C++ or Rust source code to run on Free Wil-i with our without the host.  The recommend Clang based wasi sdk is recommend [https://github.com/WebAssembly/wasi-sdk.](https://github.com/WebAssembly/wasi-sdk)

<div class="text--center">

<figure>

![C/C++ program using WASI SDK and CLion.](../assets/WASI-SDK-CLion.jpg "C/C++ program using WASI SDK and CLion.")
<figcaption>C/C++ program using WASI SDK and CLion.</figcaption>
</figure>
</div>

Finally, the file system provides a way to load scripts or run them at startup, load custom FPGA bit files, and store settings. This is shown below. Note getting files on the Free Wil-i uses the "Download File" command.

<div class="text--center">

<figure>

![The Filesystem menu provides interaction with file system.](../assets/Filesystem.png "The Filesystem menu provides interaction with file system.")
<figcaption>The Filesystem menu provides interaction with file system.</figcaption>
</figure>
</div>

