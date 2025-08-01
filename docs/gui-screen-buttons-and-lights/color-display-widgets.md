---
title: FREE-WILi Color Display Widgets - API and Control Properties
description: Configure FREE-WILi color display widgets using the API. Includes details on LED, images, log lists, plots, buttons, and control properties and data.
keywords: [FREE-WILi, color display widgets, API, LED, image widget, log list, plot, text control, number control, bargraph, button, control properties, control data]
sidebar_position: 1
sidebar_label: Color Display Widgets
---

# Color Display Widgets

The color display allows you to display data using GUI widgets on panels. The are configured using the API. The table below lists the widgets and their API.  There is a limit of 24 controls across the 8 panels.

All the controls have properties and data which you can manipulate at run-time.

|   **Widget**  	|          **API**          	| **Notes** 	|
|:-------------:	|:-------------------------:	|:---------:	|
|      LED      	|       addControlLED       	|           	|
|  ImageFromRom 	|     addControlPicture     	|           	|
| ImageFromFile 	| addControlPictureFromFile 	|           	|
|    LogList    	|     addControlLogList     	|           	|
|      Plot     	|       addControlPlot      	|           	|
|      Text     	|       addControlText      	|           	|
|     Number    	|      addControlNumber     	|           	|
|    Bargraph   	|     addControlBargraph    	|           	|
|     Button    	|      addControlButton     	|           	|

## Properties for Controls

The table below lists the APIs properties for the controls

|          **API**         	|               **Description**               	|                                                   	|
|:------------------------:	|:-------------------------------------------:	|:-------------------------------------------------:	|
|   setControlValueMinMax  	|  sets min max property of control in int32  	|                                                   	|
|  setControlValueMinMaxF  	| sets min max property of control in float32 	|                                                   	|
| ```setControlProperty``` 	|      Sets the a property of a control.      	|                  Not in wasm yet                  	|
|        setPlotData       	|              Sets color of plot             	| Not implemented in wasm yet. Sets colors of plots 	|

## Data for the Controls

The table below lists the APIs for the data in the control.

|        **API**       	|               **Description**               	|               **Notes**              	|
|:--------------------:	|:-------------------------------------------:	|:------------------------------------:	|
|    setListItemText   	| sets a log text when implementing list mode 	| Make sure to have a valid list index 	|
|  setListItemSelected 	|      sets the selected item in the list     	|                                      	|
|  setListItemTopIndex 	|         set the top item in the list        	|                                      	|
|  clearLogOrPlotData  	|         clears a log or plot buffer         	|                                      	|
|  addControlPlotData  	|          adds data to a plot buffer         	|                                      	|
|    setLogDataText    	|            adds test to the list            	|                                      	|
|    setControlValue   	|    sets the value of the control in int32   	|                                      	|
| setControlValueFloat 	|   sets the value of teh control in float32  	|                                      	|