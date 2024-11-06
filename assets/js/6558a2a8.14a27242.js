"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[1861],{1081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"gui-screen-buttons-and-lights/buttons","title":"FREE-WILi Button Controls: Functions, API, and Click Simulation","description":"Discover FREE-WILi\'s 5 buttons, their functions, and support for clicks, double clicks, startup press, and long press, plus how to use API events and simulate clicks with Roku Remote.","source":"@site/docs/gui-screen-buttons-and-lights/buttons.md","sourceDirName":"gui-screen-buttons-and-lights","slug":"/gui-screen-buttons-and-lights/buttons","permalink":"/gui-screen-buttons-and-lights/buttons","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/buttons.md","tags":[],"version":"current","lastUpdatedAt":1725358560000,"sidebarPosition":4,"frontMatter":{"title":"FREE-WILi Button Controls: Functions, API, and Click Simulation","description":"Discover FREE-WILi\'s 5 buttons, their functions, and support for clicks, double clicks, startup press, and long press, plus how to use API events and simulate clicks with Roku Remote.","keywords":["FREE-WILi buttons","button functions","button API","click simulation","Roku Remote","FWGUI events","setPanelMenuText","bootloader","user interface controls"],"sidebar_position":4,"sidebar_label":"Buttons"},"sidebar":"tutorialSidebar","previous":{"title":"Displaying Images","permalink":"/gui-screen-buttons-and-lights/displaying-images"},"next":{"title":"Sensors: Accelerometer & Temperature","permalink":"/gui-screen-buttons-and-lights/accelerometer"}}');var o=n(4848),i=n(8453);const r={title:"FREE-WILi Button Controls: Functions, API, and Click Simulation",description:"Discover FREE-WILi's 5 buttons, their functions, and support for clicks, double clicks, startup press, and long press, plus how to use API events and simulate clicks with Roku Remote.",keywords:["FREE-WILi buttons","button functions","button API","click simulation","Roku Remote","FWGUI events","setPanelMenuText","bootloader","user interface controls"],sidebar_position:4,sidebar_label:"Buttons"},u="Buttons",l={},a=[{value:"Button Fixed Functions",id:"button-fixed-functions",level:2},{value:"Roku Remote Click Simulation",id:"roku-remote-click-simulation",level:2},{value:"API",id:"api",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"buttons",children:"Buttons"})}),"\n",(0,o.jsx)(t.p,{children:"FREE-WILi includes 5 buttons. These are used to control the user interface. The buttons support clicking, double clicking, startup press, and long press."}),"\n",(0,o.jsx)(t.h2,{id:"button-fixed-functions",children:"Button Fixed Functions"}),"\n",(0,o.jsx)(t.p,{children:"The gray button is hard wired to the battery controller. This will wake the device from a shutdown if held for two seconds."}),"\n",(0,o.jsx)(t.p,{children:"The red button is hard wired to the BOOTSEL feature of the Main CPU. There on a power up this will be read to determine if the Main should stay in the bootloader."}),"\n",(0,o.jsx)(t.p,{children:"The Blue button is used by the display to enter the boot-loader. This is done in software. So if the display processor enters bootloader it will not return to the main software until the battery is depleted or a valid UF2 file is flashed. The blue button will only enter bootloader on a long press on the main screen."}),"\n",(0,o.jsx)(t.h2,{id:"roku-remote-click-simulation",children:"Roku Remote Click Simulation"}),"\n",(0,o.jsxs)(t.p,{children:["The Roku Remote can be enabled to simulate a click event on the 5 buttons. More information in the ",(0,o.jsx)(t.a,{href:"/gui-screen-buttons-and-lights/ir-infrared-devices/",children:"IR topic"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(t.p,{children:"The buttons are available though API through events. Also, you can enable a button menu through the setPanelMenuText API. Please note the panel must enable the panel menu."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'// Set Menu panel text, A null string will clear it, must be enabled on panel\r\nvoid setPanelMenuText(int iPanel, int iButtonGreyFromZero, const char * szMessage);\r\n\r\ncase FWGUI_EVENT_GRAY_BUTTON:\r\n        return "graybutton";\r\ncase FWGUI_EVENT_YELLOW_BUTTON:\r\n        return "yellowbutton";\r\ncase FWGUI_EVENT_GREEN_BUTTON:\r\n        return "greenbutton";\r\ncase FWGUI_EVENT_BLUE_BUTTON:\r\n        return "bluebutton";\r\ncase FWGUI_EVENT_RED_BUTTON:\r\n        return "redbutton";\r\n                        \r\nprintf("event %s ", getEventName(stEvents[iCount].iEvent));\r\n        if (stEvents[iCount].iEvent >= FWGUI_EVENT_GRAY_BUTTON && \r\n                        stEvents[iCount].iEvent <= FWGUI_EVENT_RED_BUTTON)\r\n        {\r\n               printf("%s ",  getButtonData(stEvents[iCount].btData[0]));\r\n        }\r\n                        \r\nconst char * getButtonData(int iValue)\r\n{\r\n        switch (iValue)\r\n        {\r\n                case (int)rpFWGUIButtonEvent::clicked:\r\n                        return "clicked";\r\n                case (int)rpFWGUIButtonEvent::doubleclicked:\r\n                        return "doubleclick";\r\n                case (int)rpFWGUIButtonEvent::longpress:\r\n                        return "longpress";\r\n                case (int)rpFWGUIButtonEvent::poweruppressed:\r\n                        return "longpress";\r\n        }\r\n        return "";\r\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>u});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);