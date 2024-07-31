"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[5885],{5634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453),r=t(9980);const s={sidebar_position:4},c="FPGA Connections",a={id:"hardware-low-level-details/ice40-fpga/fpga-connections",title:"FPGA Connections",description:"The FPGA connects to the Serial SRAM,  IO Drivers, and the RP2040.",source:"@site/docs/hardware-low-level-details/ice40-fpga/fpga-connections.md",sourceDirName:"hardware-low-level-details/ice40-fpga",slug:"/hardware-low-level-details/ice40-fpga/fpga-connections",permalink:"/hardware-low-level-details/ice40-fpga/fpga-connections",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/hardware-low-level-details/ice40-fpga/fpga-connections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FPGA Clock",permalink:"/hardware-low-level-details/ice40-fpga/fpga-clock"},next:{title:"FREE-WILi Firmware Update",permalink:"/freewili-firmware-update"}},l={},d=[];function p(e){const n={code:"code",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fpga-connections",children:"FPGA Connections"}),"\n",(0,i.jsx)(n.p,{children:"The FPGA connects to the Serial SRAM,  IO Drivers, and the RP2040."}),"\n",(0,i.jsx)(n.p,{children:"The FPGA development tools including Open Source (yosys, nextpnr, icestorm) and commercial (icecube2) support a pin constraints file that defines how the pins connect to the HDL (verilog/vhdl) connections. This is included below:"}),"\n",(0,i.jsx)(n.p,{children:"The PCF file is a text file you can view in a text editor."}),"\n",(0,i.jsx)(n.p,{children:"In the file you will see the names that end with Rp or Out. The Rp names connect to the RP2040 and the Out connects to the IO driver."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"set_io SPI_MISO_Rp 14"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"set_io SPI_MISO_Out 25"})}),"\n","\n",(0,i.jsx)(r.A,{title:"fw.pcf",description:"",link:"/downloads/fw.pcf",imageUrl:"/img/download-file.png"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9980:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);const i="card_t5fD",o="cardContent_yn8N",r="cardHeader_jh50",s="cardImage_zPy4";var c=t(4848);const a=e=>{let{title:n,description:t,link:a,imageUrl:l}=e;return(0,c.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:i,children:(0,c.jsxs)("div",{className:o,children:[(0,c.jsxs)("div",{className:r,children:[l&&(0,c.jsx)("img",{src:l,alt:n,className:s}),(0,c.jsx)("h3",{children:n})]}),(0,c.jsx)("p",{children:t})]})})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);