"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[7856],{9455:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"hardware-low-level-details/ice40-fpga/fpga-clock","title":"FPGA Clock Configuration - Managing Clock Signals for iCE40 FPGA","description":"Explore how the FPGA clock signal is supplied by the RP2040 on GPIO23 using the Clock Generator. Learn about the default setting of 125 MHz divided by 4 and how to configure FPGA clock sources and dividers using the Intrepid IO app.","source":"@site/docs/hardware-low-level-details/ice40-fpga/fpga-clock.md","sourceDirName":"hardware-low-level-details/ice40-fpga","slug":"/hardware-low-level-details/ice40-fpga/fpga-clock","permalink":"/hardware-low-level-details/ice40-fpga/fpga-clock","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/hardware-low-level-details/ice40-fpga/fpga-clock.md","tags":[],"version":"current","lastUpdatedAt":1724134738000,"sidebarPosition":2,"frontMatter":{"title":"FPGA Clock Configuration - Managing Clock Signals for iCE40 FPGA","description":"Explore how the FPGA clock signal is supplied by the RP2040 on GPIO23 using the Clock Generator. Learn about the default setting of 125 MHz divided by 4 and how to configure FPGA clock sources and dividers using the Intrepid IO app.","keywords":["FPGA Clock Configuration","RP2040 FPGA Clock Signal","Clock Generator Feature","iCE40 FPGA Clock Source","Intrepid IO App FPGA Settings","FPGA Clock Divider"],"sidebar_position":2,"sidebar_label":"FPGA Clock"},"sidebar":"tutorialSidebar","previous":{"title":"FPGA Programming","permalink":"/hardware-low-level-details/ice40-fpga/fpga-programming"},"next":{"title":"FPGA Connections","permalink":"/hardware-low-level-details/ice40-fpga/fpga-connections"}}');var n=i(4848),a=i(8453);const r={title:"FPGA Clock Configuration - Managing Clock Signals for iCE40 FPGA",description:"Explore how the FPGA clock signal is supplied by the RP2040 on GPIO23 using the Clock Generator. Learn about the default setting of 125 MHz divided by 4 and how to configure FPGA clock sources and dividers using the Intrepid IO app.",keywords:["FPGA Clock Configuration","RP2040 FPGA Clock Signal","Clock Generator Feature","iCE40 FPGA Clock Source","Intrepid IO App FPGA Settings","FPGA Clock Divider"],sidebar_position:2,sidebar_label:"FPGA Clock"},l="FPGA Clock",c={},s=[];function d(e){const o={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"fpga-clock",children:"FPGA Clock"})}),"\n",(0,n.jsx)(o.p,{children:"The clock signal to the FPGA is supplied by the main RP2040. This is done on GPIO23 using the Clock Generator feature. The clock generated can be generated from numerous clock sources with a integer and fractional divider. For example, the default sys clock of 125 mhz can be used or divided down. Please see the rp2040 data sheet for details."}),"\n",(0,n.jsx)(o.p,{children:"The Intrepid IO app has a device setting where you can select the FPGA clock source and divider. The default setting is sys clock (125Mhz) divided by 4 (31.25 Mhz) ."})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>l});var t=i(6540);const n={},a=t.createContext(n);function r(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);