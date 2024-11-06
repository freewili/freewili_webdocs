"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[183],{8924:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"freewili-firmware-update","title":"FREE-WILi Firmware Update - How to Update FREE-WILi Firmware, Main and Display Processors","description":"Learn how to update the firmware on both RP2040 processors of FREE-WILi. Follow detailed steps to update the MAIN and DISPLAY processors using UF2 files. Ensure each processor receives the correct firmware for proper operation.","source":"@site/docs/freewili-firmware-update.md","sourceDirName":".","slug":"/freewili-firmware-update","permalink":"/freewili-firmware-update","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/freewili-firmware-update.md","tags":[],"version":"current","lastUpdatedAt":1728305099000,"sidebarPosition":10,"frontMatter":{"title":"FREE-WILi Firmware Update - How to Update FREE-WILi Firmware, Main and Display Processors","description":"Learn how to update the firmware on both RP2040 processors of FREE-WILi. Follow detailed steps to update the MAIN and DISPLAY processors using UF2 files. Ensure each processor receives the correct firmware for proper operation.","keywords":["FREE-WILi Firmware Update","RP2040 Processor Update","MAIN Processor Firmware","DISPLAY Processor Firmware","UF2 File Update","FREE-WILi USB Bootloader","Firmware Installation Guide"],"sidebar_position":10,"sidebar_label":"FREE-WILi Firmware Update"},"sidebar":"tutorialSidebar","previous":{"title":"DEFCON32 Badge Edition","permalink":"/defcon32-badge-edition"},"next":{"title":"Helpful Links","permalink":"/helpful-links/"}}');var o=i(4848),s=i(8453);const n={title:"FREE-WILi Firmware Update - How to Update FREE-WILi Firmware, Main and Display Processors",description:"Learn how to update the firmware on both RP2040 processors of FREE-WILi. Follow detailed steps to update the MAIN and DISPLAY processors using UF2 files. Ensure each processor receives the correct firmware for proper operation.",keywords:["FREE-WILi Firmware Update","RP2040 Processor Update","MAIN Processor Firmware","DISPLAY Processor Firmware","UF2 File Update","FREE-WILi USB Bootloader","Firmware Installation Guide"],sidebar_position:10,sidebar_label:"FREE-WILi Firmware Update"},a="FREE-WILi Firmware Update",l={},d=[{value:"Updating the Main Processor",id:"updating-the-main-processor",level:2},{value:"Updating the Display Processor",id:"updating-the-display-processor",level:2}];function c(e){const r={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"free-wili-firmware-update",children:"FREE-WILi Firmware Update"})}),"\n",(0,o.jsxs)(r.admonition,{type:"info",children:[(0,o.jsx)(r.mdxAdmonitionTitle,{}),(0,o.jsxs)("h4",{children:["\ud83d\ude80 We have released a new firmware updates for both the main and display components, ",(0,o.jsx)("br",{class:"br-mobile"})," ",(0,o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/freewili/freewili-firmware",class:"highlight",children:"Check it out on GitHub"})," and get the latest version now."]}),(0,o.jsxs)("h4",{children:["\ud83d\udcf1 You can determine what firmware you have from the ",(0,o.jsx)("a",{target:"_self",rel:"noopener noreferrer",href:"/gui-screen-buttons-and-lights/about-app/",class:"highlight-app",children:"About app"}),". "]})]}),"\n",(0,o.jsxs)(r.p,{children:["FREE-WILi has two RP2040 processors.  One is the ",(0,o.jsx)(r.strong,{children:"DISPLAY"})," processor and the other is the ",(0,o.jsx)(r.strong,{children:"MAIN"})," processor."]}),"\n",(0,o.jsx)(r.p,{children:"\u26a0\ufe0f It is important to update each processor with the correct type of firmware file."}),"\n",(0,o.jsxs)(r.p,{children:["\u26a0\ufe0f The below instructions assume that the FREE-WILi is ",(0,o.jsx)(r.a,{href:"../../the-basics/#turning-free-wili-on-or-off",children:"TURNED OFF"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"updating-the-main-processor",children:"Updating the Main Processor"}),"\n",(0,o.jsxs)(r.p,{children:["Pressing and holding the RED button ",(0,o.jsx)(r.em,{children:"as USB is connected"})," activates the RP2040 ROM bootloader.  This will enable the default way to program the RP2040 via USB."]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Receive or create a FREE-WILi ",(0,o.jsx)(r.strong,{children:"MAIN"})," UF2 file."]}),"\n",(0,o.jsx)(r.li,{children:"Hold the RED button and plug in USB."}),"\n",(0,o.jsx)(r.li,{children:"The host computer will show FREE-WILi as a flash drive."}),"\n",(0,o.jsxs)(r.li,{children:["Copy the ",(0,o.jsx)(r.strong,{children:"MAIN"})," UF2 file to the flash drive.  Allow firmware to update."]}),"\n",(0,o.jsx)(r.li,{children:"After the update, FREE-WILi will disconnect from USB and reconnect as a USB COM Port (normal operation)."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"updating-the-display-processor",children:"Updating the Display Processor"}),"\n",(0,o.jsxs)(r.p,{children:["Pressing and holding the BLUE button ",(0,o.jsx)(r.em,{children:"as USB is connected"})," activates the display processor bootloader."]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Receive or create a FREE-WILi ",(0,o.jsx)(r.strong,{children:"DISPLAY"})," UF2 file."]}),"\n",(0,o.jsx)(r.li,{children:"Hold the BLUE button and plug in USB."}),"\n",(0,o.jsx)(r.li,{children:"The host computer will show FREE-WILi as a flash drive."}),"\n",(0,o.jsxs)(r.li,{children:["Copy the ",(0,o.jsx)(r.strong,{children:"DISPLAY"})," UF2 file to the flash drive.  Allow firmware to update."]}),"\n",(0,o.jsx)(r.li,{children:"After the update, FREE-WILi will disconnect from USB and reconnect as a USB COM Port (normal operation)."}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);