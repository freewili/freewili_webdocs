"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[1223],{9334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"gui-screen-buttons-and-lights/accelerometer","title":"FREE-WILi Accelerometer - LIS3DH Sensor Data and API Integration","description":"Explore the FREE-WILi accelerometer (LIS3DH) with data viewable from the serial menu and API. Understand axis orientation and access sensor details.","source":"@site/docs/gui-screen-buttons-and-lights/accelerometer.md","sourceDirName":"gui-screen-buttons-and-lights","slug":"/gui-screen-buttons-and-lights/accelerometer","permalink":"/gui-screen-buttons-and-lights/accelerometer","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/accelerometer.md","tags":[],"version":"current","lastUpdatedAt":1725358560000,"sidebarPosition":5,"frontMatter":{"title":"FREE-WILi Accelerometer - LIS3DH Sensor Data and API Integration","description":"Explore the FREE-WILi accelerometer (LIS3DH) with data viewable from the serial menu and API. Understand axis orientation and access sensor details.","keywords":["FREE-WILi","accelerometer","LIS3DH","ST Microelectronics","sensor data","API integration","axis orientation","serial menu","accelerometer data"],"sidebar_position":5,"sidebar_label":"Sensors: Accelerometer & Temperature"},"sidebar":"tutorialSidebar","previous":{"title":"Buttons","permalink":"/gui-screen-buttons-and-lights/buttons"},"next":{"title":"LED Light Show","permalink":"/gui-screen-buttons-and-lights/led-light-show"}}');var i=n(4848),r=n(8453),a=n(9980);const o={title:"FREE-WILi Accelerometer - LIS3DH Sensor Data and API Integration",description:"Explore the FREE-WILi accelerometer (LIS3DH) with data viewable from the serial menu and API. Understand axis orientation and access sensor details.",keywords:["FREE-WILi","accelerometer","LIS3DH","ST Microelectronics","sensor data","API integration","axis orientation","serial menu","accelerometer data"],sidebar_position:5,sidebar_label:"Sensors: Accelerometer & Temperature"},c="Sensors: Accelerometer & Temperature",l={},d=[{value:"Sensors App",id:"sensors-app",level:2},{value:"Sensor Settings",id:"sensor-settings",level:2},{value:"API Support",id:"api-support",level:2},{value:"Sensor Details",id:"sensor-details",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"sensors-accelerometer--temperature",children:"Sensors: Accelerometer & Temperature"})}),"\n",(0,i.jsx)(t.p,{children:"FREE-WILi includes an accelerometer part number LIS3DH from ST microelectronics. The Accel sensor data is viewable from the serial menu (below) and is usable from the API. The mounting is such that the Z direction points up from the screen and the X axis points towards the IO Connector."}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Accel data is shown in the serial terminal.",src:n(8702).A+"",title:"Accel data is shown in the serial terminal.",width:"741",height:"474"}),"\r\n",(0,i.jsx)("figcaption",{children:"Accel data is shown in the serial terminal."})]})})}),"\n",(0,i.jsx)(t.h2,{id:"sensors-app",children:"Sensors App"}),"\n",(0,i.jsx)(t.p,{children:"The sensors app Accel and Temperature will display accelerometer in a graphical form on the FREE-WILi screen. The top line shows the the current range, x, y ,z and temperature. If the axis broke the move threshold it will be temporarily white text. Below is a plot of the sensor. The LED will indicate x, y, z in both led position and color. This is usable anytime as a light show."}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sensors-app",src:n(3620).A+"",title:"sensors-app",width:"512",height:"426"})}),(0,i.jsx)("figcaption",{})]})}),"\n",(0,i.jsx)(t.h2,{id:"sensor-settings",children:"Sensor Settings"}),"\n",(0,i.jsx)(t.p,{children:"The sensor settings contain the settings for the accelerometer. This includes a range and a move threshold. The ranges supported by the Accel include 2, 4, 8, and 16. The move threshold is how much a Accel axis must change indicate FREE-WILi is moving. The moving signal can awake the screen or create events for your custom wasm scripts."}),"\n",(0,i.jsx)(t.p,{children:"The temperature calibration allow you to tweak the default scaling of the rp chips internal temperature sensor. The calibration applies a floating point scale and offset to the default temperature scaling."}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sensors-app-data",src:n(8127).A+"",title:"sensors-app-data",width:"1016",height:"365"})}),(0,i.jsx)("figcaption",{})]})}),"\n",(0,i.jsx)(t.h2,{id:"api-support",children:"API Support"}),"\n",(0,i.jsxs)(t.p,{children:["The setSensorSettings API call will enabled the sensors to be reported at a specific rate through a GUI event. Also, it can also add the sensor value to an indicated plot data store. The event ",(0,i.jsx)(t.code,{children:"FWGUI_EVENT_GUI_SENSOR_DATA"})," will report sensor data. The Accel and sensors can also be logged to a text log with the API ",(0,i.jsx)(t.code,{children:"setAppLogSettings"})," below."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-C",children:'// FWGUI_EVENT_GUI_SENSOR_DATA \r\n\r\nif (stEvents[iCount].iEvent == FWGUI_EVENT_GUI_SENSOR_DATA) {\r\n                                short iX = stEvents[iCount].btData[0] | (stEvents[iCount].btData[1]<<8);\r\n                                short iY = stEvents[iCount].btData[2] | (stEvents[iCount].btData[3]<<8);\r\n                                short iZ = stEvents[iCount].btData[4] | (stEvents[iCount].btData[5]<<8);\r\n                                short iTc = stEvents[iCount].btData[6] | (stEvents[iCount].btData[7]<<8);\r\n                                short iTf = stEvents[iCount].btData[8] | (stEvents[iCount].btData[9]<<8);\r\n                                int iMoving = stEvents[iCount].btData[10] & 0x1;\r\n                                int iMovingX = stEvents[iCount].btData[10] & 0x2 ? 1 : 0;\r\n                                int iMovingY = stEvents[iCount].btData[10] & 0x4 ? 1 : 0;\r\n                                int iMovingZ = stEvents[iCount].btData[10] & 0x8 ? 1 : 0;\r\n                                printf("x %d y %d z %d T %d C T %d F moving %d  moveX %d moveY %d moveZ %d",iX, iY,iZ, iTc, iTf,iMoving,iMovingX,iMovingY,iMovingZ);\r\n                        }\r\n\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"\r\n// API to enable accelerometer data\r\n\r\nvoid setSensorSettings(int bStreamAccel, int iRateMilliseconds,\r\n\t\t\tint bEnableAccelXPlotData, int iAccelXPlotDataIndex,\r\n\t\t\tint bEnableAccelYPlotData, int iAccelYPlotDataIndex,\r\n\t\t\tint bEnableAccelZPlotData, int iAccelZPlotDataIndex,\r\n\t\t\tint bEnableTempPlotDataC, int iTempPlotDataIndexC,\r\n\t\t\tint bEnableTempPlotDataF, int iTempPlotDataIndexF\r\n\t\t\t);\r\n\t\t\t\r\nvoid setAppLogSettings(int bLogIRCodes, int bLogAccel, \r\n\t\t\tint bLogTempC, int bLogTempF, int iLogIndex);\r\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"sensor-details",children:"Sensor Details"}),"\n","\n",(0,i.jsx)(a.A,{title:"LIS3DH - STMicroelectronics",description:"STMicroelectronics",link:"https://www.st.com/en/mems-and-sensors/lis3dh.html",imageUrl:"https://www.st.com/etc/clientlibs/st-site/media/app/images/favicon-32.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"X Axis points to the IO Connector and Y points to the buttons, Z point out of the screen",src:n(8310).A+"",title:"X Axis points to the IO Connector and Y points to the buttons, Z point out of the screen",width:"384",height:"484"}),"\r\n",(0,i.jsx)("figcaption",{children:"X Axis points to the IO Connector and Y points to the buttons, Z point out of the screen."})]})})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9980:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);const s="card_t5fD",i="cardContent_yn8N",r="cardHeader_jh50",a="cardImage_zPy4";var o=n(4848);const c=e=>{let{title:t,description:n,link:c,imageUrl:l}=e;return(0,o.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:s,children:(0,o.jsxs)("div",{className:i,children:[(0,o.jsxs)("div",{className:r,children:[l&&(0,o.jsx)("img",{src:l,alt:t,className:a}),(0,o.jsx)("h3",{children:t})]}),(0,o.jsx)("p",{children:n})]})})}},8310:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/acc-points-22142a58c4396d58bafad7b5c5ad4f0b.png"},8702:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/accel-data-7925c2d0de854ce461412f4315099272.jpg"},8127:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sensors-app-data-24b2e784f8f1e951d6431e6dc958e783.jpg"},3620:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sensors-app-1210907f8a7373b9f5290437b07041bd.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);