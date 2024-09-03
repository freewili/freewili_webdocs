"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[551],{7142:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var o=s(4848),i=s(8453);const n={title:"FREE-WILi LED Light Show: Custom LED Control & Effects",description:"Control FREE-WILi's 7 full-color LEDs with patterns, sensor effects, and APIs. Customize LED behavior, manage light strips, and switch modes via a Roku IR remote.",keywords:["FREE-WILI's LED light show","full-color LEDs","sensor effects","API control","light strip","Roku IR remote","LED patterns"],sidebar_position:6,sidebar_label:"LED Light Show"},r="LED Light Show",l={id:"gui-screen-buttons-and-lights/led-light-show",title:"FREE-WILi LED Light Show: Custom LED Control & Effects",description:"Control FREE-WILi's 7 full-color LEDs with patterns, sensor effects, and APIs. Customize LED behavior, manage light strips, and switch modes via a Roku IR remote.",source:"@site/docs/gui-screen-buttons-and-lights/led-light-show.md",sourceDirName:"gui-screen-buttons-and-lights",slug:"/gui-screen-buttons-and-lights/led-light-show",permalink:"/gui-screen-buttons-and-lights/led-light-show",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/led-light-show.md",tags:[],version:"current",lastUpdatedAt:172535856e4,sidebarPosition:6,frontMatter:{title:"FREE-WILi LED Light Show: Custom LED Control & Effects",description:"Control FREE-WILi's 7 full-color LEDs with patterns, sensor effects, and APIs. Customize LED behavior, manage light strips, and switch modes via a Roku IR remote.",keywords:["FREE-WILI's LED light show","full-color LEDs","sensor effects","API control","light strip","Roku IR remote","LED patterns"],sidebar_position:6,sidebar_label:"LED Light Show"},sidebar:"tutorialSidebar",previous:{title:"Sensors: Accelerometer & Temperature",permalink:"/gui-screen-buttons-and-lights/accelerometer"},next:{title:"Capturing Audio from Microphone",permalink:"/gui-screen-buttons-and-lights/capturing-audio-from-microphone"}},h={},a=[{value:"Settings",id:"settings",level:2},{value:"API",id:"api",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"led-light-show",children:"LED Light Show"})}),"\n",(0,o.jsx)(t.p,{children:"FREE-WILi has 7 full color LEDs. These LEDs can display a pattern or be manually controlled by the API or App. Some of the patterns incorporate sensor data or make the LEDs a bargraph. The LED pattern can also be sent out GPIO pins to support LED Light strips. The light show can be controlled by a Roku IR remote."}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("figure",{children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"The FREE-WILi Light Show App controls the 7 LEDs.",src:s(5629).A+"",title:"The FREE-WILi Light Show App controls the 7 LEDs.",width:"512",height:"395"}),"\r\n",(0,o.jsx)("figcaption",{children:"The FREE-WILi Light Show App controls the 7 LEDs."})]})})}),"\n",(0,o.jsx)(t.p,{children:"The Light show app has different patterns.  Two patterns use sensors. One is Audio and the other is accelerometer."}),"\n",(0,o.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,o.jsx)(t.p,{children:"The setting are show below. At startup you can pick a default light show. Also you can enable light strip control. Then you can enable a Roku IR remote to switch between the light show options."}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("figure",{children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Settings for the Light Show",src:s(1264).A+"",title:"Settings for the Light Show",width:"689",height:"363"}),"\r\n",(0,o.jsx)("figcaption",{children:"Settings for the Light Show"})]})})}),"\n",(0,o.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(t.p,{children:"There are APIs to control the board LEDS below. When setBoardLED is called it will disable the light show."}),"\n",(0,o.jsx)(t.p,{children:"You can set the LED to a static color or make it flash or fade. The setBoardLED allows you to use the LEDs this way."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"\r\n// Control Manual\r\nenum fwLEDManagerLEDMode {\r\n\tledsimplevalue,\r\n\tledflash,\r\n\tledpulse,\r\n\tledflashfade,\r\n\tledpulsefade,\r\n};\r\nvoid setBoardLED(int iLEDIndex0_7, \r\n        int iR, int iG, int iB, int iDurationMs, fwLEDManagerLEDMode iMode);\r\n\r\n// Set a Light show        \r\nvoid setLEDShowMode(int iLEDShow);\r\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5629:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/led-light-show-a8d7f83ee0902ecc34098b0d0040f442.jpg"},1264:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/led-settings-5770939481dd3dcb02b7a9c7b703e9c7.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var o=s(6540);const i={},n=o.createContext(i);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);