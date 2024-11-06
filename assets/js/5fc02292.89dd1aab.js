"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[914],{4829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"gui-screen-buttons-and-lights/ir-infrared-devices","title":"FREE-WILi IR Control: Custom Remotes & Roku Integration","description":"Control and customize your IR devices with Free Wili\'s built-in IR receiver and transmitter. Create custom remotes, view and send IR codes, and enable Roku remote control.","source":"@site/docs/gui-screen-buttons-and-lights/ir-infrared-devices.md","sourceDirName":"gui-screen-buttons-and-lights","slug":"/gui-screen-buttons-and-lights/ir-infrared-devices","permalink":"/gui-screen-buttons-and-lights/ir-infrared-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/ir-infrared-devices.md","tags":[],"version":"current","lastUpdatedAt":1728907919000,"sidebarPosition":8,"frontMatter":{"title":"FREE-WILi IR Control: Custom Remotes & Roku Integration","description":"Control and customize your IR devices with Free Wili\'s built-in IR receiver and transmitter. Create custom remotes, view and send IR codes, and enable Roku remote control.","keywords":["FREE-WILi IR devices","infrared receiver","infrared transmitter","IR control","NEC protocol","custom remote","Roku remote","IR Hacker app","IR API","remote learning"],"sidebar_position":8,"sidebar_label":"IR Infrared Devices"},"sidebar":"tutorialSidebar","previous":{"title":"Capturing Audio from Microphone","permalink":"/gui-screen-buttons-and-lights/capturing-audio-from-microphone"},"next":{"title":"GUI API Basics","permalink":"/gui-screen-buttons-and-lights/gui-api-basics"}}');var s=n(4848),i=n(8453);const o={title:"FREE-WILi IR Control: Custom Remotes & Roku Integration",description:"Control and customize your IR devices with Free Wili's built-in IR receiver and transmitter. Create custom remotes, view and send IR codes, and enable Roku remote control.",keywords:["FREE-WILi IR devices","infrared receiver","infrared transmitter","IR control","NEC protocol","custom remote","Roku remote","IR Hacker app","IR API","remote learning"],sidebar_position:8,sidebar_label:"IR Infrared Devices"},d="IR Infrared Devices",a={},c=[{value:"Roku Remote Control of FREE-WILi",id:"roku-remote-control-of-free-wili",level:2},{value:"Settings",id:"settings",level:2},{value:"API",id:"api",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ir-infrared-devices",children:"IR Infrared Devices"})}),"\n",(0,s.jsx)(t.p,{children:"FREE-WILi includes an Infrared receiver and transmitter. FREE-WILi allows you to send and receive control data in typical formats for remote control devices. Currently, while hardware supports many protocols, FREE-WILi software supports NEC protocol type devices (the most common type)."}),"\n",(0,s.jsx)(t.p,{children:"There is an IR App which offers two screens. One is an IR Hacker and the other is a custom remote control."}),"\n",(0,s.jsx)(t.p,{children:"The IR Hacker app lets you view IR traffic received by the receiver. It also lets you send arbitrary codes, playback codes received, and fuzz IR codes to a specific device."}),"\n",(0,s.jsx)(t.p,{children:"The first code in a blast is highlighted yellow (this is often the most important one).  This will also be shown in the upper right corner."}),"\n",(0,s.jsx)(t.p,{children:"Clicking send will allows you to send an arbitrary IR code."}),"\n",(0,s.jsxs)(t.p,{children:["To use the fuzz function hold down the last button for 5 seconds and FREE-WILi will cycle through the 255 commands for last IR Address received (see this doc for explanation of NEC IR ",(0,s.jsx)(t.a,{href:"https://techdocs.altium.com/display/FPGA/NEC+Infrared+Transmission+Protocol",children:"https://techdocs.altium.com/display/FPGA/NEC+Infrared+Transmission+Protocol"}),")"]}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"The IR Hacker App allows you to sniff and send IR data",src:n(1692).A+"",title:"The IR Hacker App allows you to sniff and send IR data",width:"800",height:"600"}),"\r\n",(0,s.jsx)("figcaption",{children:"The IR Hacker App allows you to sniff and send IR data"})]})})}),"\n",(0,s.jsx)(t.p,{children:"The IR Remote app allows you to create a custom remote by learning a specific remote. These remotes are saved in files in the file system. The first screen shows available remotes. You can select an existing remote or select new. Selecting new will create a new IR file. There is an integrated Roku remote which would let you control other FREE-WILi's."}),"\n",(0,s.jsx)(t.p,{children:"After selecting a remote, you can add new codes. Simple point the remote at the FREE-WILi and press button on remote. FREE-WILi's led will flash. Then click new and give the command a name."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("figure",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"You can create a custom remote for IR devices.",src:n(6800).A+"",title:"You can create a custom remote for IR devices.",width:"768",height:"555"}),"\r\n",(0,s.jsx)("figcaption",{children:"You can create a custom remote for IR devices."})]})})}),"\n",(0,s.jsx)(t.h2,{id:"roku-remote-control-of-free-wili",children:"Roku Remote Control of FREE-WILi"}),"\n",(0,s.jsx)(t.p,{children:"You can enable the Roku remote to control FREE-WILi. This works by receiving the codes and simluating the actual button presses."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Roku Button"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Free Wili Action"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Notes"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"up"}),(0,s.jsx)(t.td,{children:"Gray Button press"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"down"}),(0,s.jsx)(t.td,{children:"Yellow Button Press"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ok/select"}),(0,s.jsx)(t.td,{children:"Green Button Press"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"left"}),(0,s.jsx)(t.td,{children:"Blue Button Press"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"right"}),(0,s.jsx)(t.td,{children:"Red Button Press"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"home"}),(0,s.jsx)(t.td,{children:"Returns to main screen"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(t.p,{children:"There is one setting for IR. This is to use the Roku Remote as a remote control.  This can be enabled or disabled."}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.p,{children:"There is an API for sending IR codes in NEC format. Also any IR Recived will be sent as an Event."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'\r\n// Send IR Data\r\nvoid sendIRData(unsigned int iData);\r\n\r\n// IR Event Decoding\r\nif (stEvents[iCount].iEvent == FWGUI_EVENT_IR_CODE)\r\n                        {\r\n                                unsigned int iIRCode;\r\n                                iIRCode = stEvents[iCount].btData[0];\r\n                                iIRCode |= ((unsigned int)stEvents[iCount].btData[1]) << 8;\r\n                                iIRCode |= ((unsigned int)stEvents[iCount].btData[2]) << 16;\r\n                                iIRCode |= ((unsigned int)stEvents[iCount].btData[3]) << 24;\r\n                                printf("%x ",iIRCode);\r\n                        }\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1692:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/IR-hacker-3f83ddf1c24a03e9c7e362c726566596.webp"},6800:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/custom-IR-2c7d93a416741fca01232057297b5d9c.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);