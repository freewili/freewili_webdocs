"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[6995],{9858:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(4848),a=t(8453);const i={title:"FREE-WILi GUI API: Control Display & Sensors via C/wasm",description:"Control FREE-WILi display and sensors with the C-based GUI API, featuring wasm support. Manage GUI elements, handle events, and utilize global logs for seamless integration.",keywords:["FREE-WILi GUI API","C API","wasm wrapper","display control","sensor access","event handling","global logs","GUI development"],sidebar_position:9,sidebar_label:"GUI API Basics"},o="GUI API Basics",r={id:"gui-screen-buttons-and-lights/gui-api-basics",title:"FREE-WILi GUI API: Control Display & Sensors via C/wasm",description:"Control FREE-WILi display and sensors with the C-based GUI API, featuring wasm support. Manage GUI elements, handle events, and utilize global logs for seamless integration.",source:"@site/docs/gui-screen-buttons-and-lights/gui-api-basics.md",sourceDirName:"gui-screen-buttons-and-lights",slug:"/gui-screen-buttons-and-lights/gui-api-basics",permalink:"/gui-screen-buttons-and-lights/gui-api-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/gui-api-basics.md",tags:[],version:"current",lastUpdatedAt:172535856e4,sidebarPosition:9,frontMatter:{title:"FREE-WILi GUI API: Control Display & Sensors via C/wasm",description:"Control FREE-WILi display and sensors with the C-based GUI API, featuring wasm support. Manage GUI elements, handle events, and utilize global logs for seamless integration.",keywords:["FREE-WILi GUI API","C API","wasm wrapper","display control","sensor access","event handling","global logs","GUI development"],sidebar_position:9,sidebar_label:"GUI API Basics"},sidebar:"tutorialSidebar",previous:{title:"IR Infrared Devices",permalink:"/gui-screen-buttons-and-lights/ir-infrared-devices"},next:{title:"RTC Real Time Clock",permalink:"/gui-screen-buttons-and-lights/rtc-real-time-clock"}},l={},c=[];function d(e){const s={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"gui-api-basics",children:"GUI API Basics"})}),"\n",(0,n.jsx)(s.p,{children:"The GUI API allows you to control all of the screen from a C API. This API is a binary API but there is an integrated wrapper for wasm. This wrapper allows everything on the display processor and GUI system to be controlled. In fact this is the API that all the apps in the FREE-WILi use."}),"\n",(0,n.jsx)(s.p,{children:"The API consists of C calls which control an element of the GUI or GUI processor. There are APIs to build a panel of controls similar to GUI development on desktop OS systems. Then there are APIs which provide access to the sensors."}),"\n",(0,n.jsx)(s.p,{children:"The API uses C function calls and events. The C functions have no return values. If the C function needs to return data it is supplied via an event. The event data goes into a queue and these are read at will by an App."}),"\n",(0,n.jsx)(s.p,{children:"The API supports logging text data through a global Log. There are current 4 global logs and these can be attached to a Log/List control to display by an Index. Similiary, the plot works the same way. Data can be added to a plot global object and then the plot control can display the data."})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var n=t(6540);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);