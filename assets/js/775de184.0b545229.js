"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[9016],{481:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(4848),a=t(8453);const o={title:"FPGA Default Application for FREE-WILi - Sigrok-Compatible Logic Analyzer",description:"Explore the default FPGA application for FREE-WILi that turns it into a sigrok-compatible logic analyzer. The design includes SPI, UART, and GPIO configurations, with sampling at 31.25 MHz and encoding via Run-Length Encoding. Detailed channel name translations for SPI are provided.",keywords:["FPGA Default Application","FREE-WILi Logic Analyzer","Sigrok-Compatible FPGA","SPI Configuration","iCE40 FPGA","FTDI Communication","Run-Length Encoding","libsigrok-fwili"],sidebar_position:4,sidebar_label:"FPGA Default Application"},l="FPGA Default Application",r={id:"hardware-low-level-details/ice40-fpga/fpga-default-application",title:"FPGA Default Application for FREE-WILi - Sigrok-Compatible Logic Analyzer",description:"Explore the default FPGA application for FREE-WILi that turns it into a sigrok-compatible logic analyzer. The design includes SPI, UART, and GPIO configurations, with sampling at 31.25 MHz and encoding via Run-Length Encoding. Detailed channel name translations for SPI are provided.",source:"@site/docs/hardware-low-level-details/ice40-fpga/fpga-default-application.md",sourceDirName:"hardware-low-level-details/ice40-fpga",slug:"/hardware-low-level-details/ice40-fpga/fpga-default-application",permalink:"/hardware-low-level-details/ice40-fpga/fpga-default-application",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/hardware-low-level-details/ice40-fpga/fpga-default-application.md",tags:[],version:"current",lastUpdatedAt:1724134738e3,sidebarPosition:4,frontMatter:{title:"FPGA Default Application for FREE-WILi - Sigrok-Compatible Logic Analyzer",description:"Explore the default FPGA application for FREE-WILi that turns it into a sigrok-compatible logic analyzer. The design includes SPI, UART, and GPIO configurations, with sampling at 31.25 MHz and encoding via Run-Length Encoding. Detailed channel name translations for SPI are provided.",keywords:["FPGA Default Application","FREE-WILi Logic Analyzer","Sigrok-Compatible FPGA","SPI Configuration","iCE40 FPGA","FTDI Communication","Run-Length Encoding","libsigrok-fwili"],sidebar_position:4,sidebar_label:"FPGA Default Application"},sidebar:"tutorialSidebar",previous:{title:"FPGA Connections",permalink:"/hardware-low-level-details/ice40-fpga/fpga-connections"},next:{title:"DEFCON32 Badge Edition",permalink:"/defcon32-badge-edition"}},s={},d=[];function c(e){const i={a:"a",h1:"h1",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"fpga-default-application",children:"FPGA Default Application"})}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsxs)("figure",{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"FPGA APP",src:t(8807).A+"",title:"FPGA APP",width:"1811",height:"952"})}),(0,n.jsx)("figcaption",{})]})}),"\n",(0,n.jsx)(i.p,{children:"The default FPGA application is a simple design that transforms the FREE-WILi into a sigrok-compatible logic analyzer."}),"\n",(0,n.jsxs)(i.p,{children:["The design features an IO buffer that can set the directions of the SPI and UART pins as well as GPIO_26 and GPIO27. To enable this programming, the IO_CONFIG_ENABLE pin must be asserted - this allows the FPGA's SPI-Slave to assume control of the SPI interface with the main RP2040 as the master. The pin direction defaults are as specified in ",(0,n.jsx)(i.a,{href:"/gpio/",children:"GPIO"}),". Please note that the pin directionality is also dependent on the sn74lxc1t45 hardware IO buffers between the FPGA and breakout pins."]}),"\n",(0,n.jsxs)(i.p,{children:["For the logic analyzer, the FPGA samples the SPI pins at the clock frequency provided by the main RP2040 - this design expects a frequency of 31.25 MHz. The samples are encoded via Run-Length Encoding and, once the FPGA is initiated by sigrok via FTDI, stored in a 32 kB FIFO built using the iCE40's on-chip SPRAM. Finally, these samples are sent via the FT1248 4-wire communication protocol to USB where sigrok can collect them. The libsigrok fork where the FREE-WILi hardware driver was developed can be found at ",(0,n.jsx)(i.a,{href:"https://github.com/Ytuf/libsigrok-fwili",children:"libsigrok-fwili"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"The translation from the sigrok channel name to the corresponding pin for SPI protocol is detailed below."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"sigrok channel name"}),(0,n.jsx)(i.th,{children:"SPI"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"4"}),(0,n.jsx)(i.td,{children:"CS"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"3"}),(0,n.jsx)(i.td,{children:"SCLK"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"2"}),(0,n.jsx)(i.td,{children:"MOSI"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"MISO"})]})]})]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8807:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/fpga_default_app-cb2534c81a384e25f7359dbc6f41df50.png"},8453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>r});var n=t(6540);const a={},o=n.createContext(a);function l(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);