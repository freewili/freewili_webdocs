---
title: "FREE-WILi GUI API: Control Display & Sensors via C/wasm"
description: Control FREE-WILi display and sensors with the C-based GUI API, featuring wasm support. Manage GUI elements, handle events, and utilize global logs for seamless integration.
keywords: [FREE-WILi GUI API, C API, wasm wrapper, display control, sensor access, event handling, global logs, GUI development]
sidebar_position: 9
sidebar_label: GUI API Basics
---

# GUI API Basics

The GUI API allows you to control all of the screen from a C API. This API is a binary API but there is an integrated wrapper for wasm. This wrapper allows everything on the display processor and GUI system to be controlled. In fact this is the API that all the apps in the FREE-WILi use.

The API consists of C calls which control an element of the GUI or GUI processor. There are APIs to build a panel of controls similar to GUI development on desktop OS systems. Then there are APIs which provide access to the sensors.

The API uses C function calls and events. The C functions have no return values. If the C function needs to return data it is supplied via an event. The event data goes into a queue and these are read at will by an App.

The API supports logging text data through a global Log. There are current 4 global logs and these can be attached to a Log/List control to display by an Index. Similiary, the plot works the same way. Data can be added to a plot global object and then the plot control can display the data.