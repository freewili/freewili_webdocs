"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[5885],{9832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"hardware-low-level-details/ice40-fpga/fpga-connections","title":"FPGA Connections and Pin Constraints for iCE40 FPGA","description":"Discover how the iCE40 FPGA connects to the Serial SRAM, IO Drivers, and the RP2040. Access the pin constraints file (PCF) for detailed connections and support for development tools like yosys, nextpnr, icestorm, and icecube2.","source":"@site/docs/hardware-low-level-details/ice40-fpga/fpga-connections.md","sourceDirName":"hardware-low-level-details/ice40-fpga","slug":"/hardware-low-level-details/ice40-fpga/fpga-connections","permalink":"/hardware-low-level-details/ice40-fpga/fpga-connections","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/hardware-low-level-details/ice40-fpga/fpga-connections.md","tags":[],"version":"current","lastUpdatedAt":1724134738000,"sidebarPosition":3,"frontMatter":{"title":"FPGA Connections and Pin Constraints for iCE40 FPGA","description":"Discover how the iCE40 FPGA connects to the Serial SRAM, IO Drivers, and the RP2040. Access the pin constraints file (PCF) for detailed connections and support for development tools like yosys, nextpnr, icestorm, and icecube2.","keywords":["FPGA Connections","iCE40 FPGA Pin Constraints","RP2040 FPGA","Serial SRAM FPGA","IO Drivers FPGA","PCF File","FPGA Development Tools","yosys","nextpnr","icestorm","icecube2"],"sidebar_position":3,"sidebar_label":"FPGA Connections"},"sidebar":"tutorialSidebar","previous":{"title":"FPGA Clock","permalink":"/hardware-low-level-details/ice40-fpga/fpga-clock"},"next":{"title":"FPGA Default Application","permalink":"/hardware-low-level-details/ice40-fpga/fpga-default-application"}}');var o=t(4848),s=t(8453),r=t(9980);const c={title:"FPGA Connections and Pin Constraints for iCE40 FPGA",description:"Discover how the iCE40 FPGA connects to the Serial SRAM, IO Drivers, and the RP2040. Access the pin constraints file (PCF) for detailed connections and support for development tools like yosys, nextpnr, icestorm, and icecube2.",keywords:["FPGA Connections","iCE40 FPGA Pin Constraints","RP2040 FPGA","Serial SRAM FPGA","IO Drivers FPGA","PCF File","FPGA Development Tools","yosys","nextpnr","icestorm","icecube2"],sidebar_position:3,sidebar_label:"FPGA Connections"},a="FPGA Connections",l={},d=[];function p(e){const n={code:"code",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"fpga-connections",children:"FPGA Connections"})}),"\n",(0,o.jsx)(n.p,{children:"The FPGA connects to the Serial SRAM,  IO Drivers, and the RP2040."}),"\n",(0,o.jsx)(n.p,{children:"The FPGA development tools including Open Source (yosys, nextpnr, icestorm) and commercial (icecube2) support a pin constraints file that defines how the pins connect to the HDL (verilog/vhdl) connections. This is included below:"}),"\n",(0,o.jsx)(n.p,{children:"The PCF file is a text file you can view in a text editor."}),"\n",(0,o.jsx)(n.p,{children:"In the file you will see the names that end with Rp or Out. The Rp names connect to the RP2040 and the Out connects to the IO driver."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"set_io SPI_MISO_Rp 14"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"set_io SPI_MISO_Out 25"})}),"\n","\n",(0,o.jsx)(r.A,{title:"fw.pcf",description:"",link:"/downloads/fw.pcf",imageUrl:"/img/download-file.png"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9980:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);const i="card_t5fD",o="cardContent_yn8N",s="cardHeader_jh50",r="cardImage_zPy4";var c=t(4848);const a=e=>{let{title:n,description:t,link:a,imageUrl:l}=e;return(0,c.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:i,children:(0,c.jsxs)("div",{className:o,children:[(0,c.jsxs)("div",{className:s,children:[l&&(0,c.jsx)("img",{src:l,alt:n,className:r}),(0,c.jsx)("h3",{children:n})]}),(0,c.jsx)("p",{children:t})]})})}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);