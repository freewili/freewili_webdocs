"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[7047],{4653:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"gui-screen-buttons-and-lights/capturing-audio-from-microphone","title":"FREE-WILi Microphone - Capturing and Recording Audio","description":"Capture audio with FREE-WILi\'s integrated microphone at 8000 Hz. Record to WAV files via serial menu or GUIAPI. Configure recording time and volume.","source":"@site/docs/gui-screen-buttons-and-lights/capturing-audio-from-microphone.md","sourceDirName":"gui-screen-buttons-and-lights","slug":"/gui-screen-buttons-and-lights/capturing-audio-from-microphone","permalink":"/gui-screen-buttons-and-lights/capturing-audio-from-microphone","draft":false,"unlisted":false,"editUrl":"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/capturing-audio-from-microphone.md","tags":[],"version":"current","lastUpdatedAt":1725358560000,"sidebarPosition":7,"frontMatter":{"title":"FREE-WILi Microphone - Capturing and Recording Audio","description":"Capture audio with FREE-WILi\'s integrated microphone at 8000 Hz. Record to WAV files via serial menu or GUIAPI. Configure recording time and volume.","keywords":["FREE-WILi","microphone","audio recording","8000 Hz","FFT algorithm","GUI API","WAV file","audio capture","recording settings"],"sidebar_position":7,"sidebar_label":"Capturing Audio from Microphone"},"sidebar":"tutorialSidebar","previous":{"title":"LED Light Show","permalink":"/gui-screen-buttons-and-lights/led-light-show"},"next":{"title":"IR Infrared Devices","permalink":"/gui-screen-buttons-and-lights/ir-infrared-devices"}}');var A=n(4848),s=n(8453);const r={title:"FREE-WILi Microphone - Capturing and Recording Audio",description:"Capture audio with FREE-WILi's integrated microphone at 8000 Hz. Record to WAV files via serial menu or GUIAPI. Configure recording time and volume.",keywords:["FREE-WILi","microphone","audio recording","8000 Hz","FFT algorithm","GUI API","WAV file","audio capture","recording settings"],sidebar_position:7,sidebar_label:"Capturing Audio from Microphone"},o="Capturing Audio from Microphone",a={},d=[{value:"Sensors App Microphone View",id:"sensors-app-microphone-view",level:2},{value:"Settings",id:"settings",level:2},{value:"API",id:"api",level:2},{value:"Technical Details",id:"technical-details",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i.header,{children:(0,A.jsx)(i.h1,{id:"capturing-audio-from-microphone",children:"Capturing Audio from Microphone"})}),"\n",(0,A.jsx)(i.p,{children:"FREE-WILi has a integrated microphone. The microphone data is captured at a 8000 hz rate. This microphone data is fed to a FFT algorithm for display or provided via the GUIAPI. The sensors app shows the activity from the microphone from a sound level and frequency perspective."}),"\n",(0,A.jsx)("div",{class:"text--center",children:(0,A.jsx)("figure",{children:(0,A.jsxs)(i.p,{children:[(0,A.jsx)(i.img,{alt:"Sensors App for the microphone.",src:n(2591).A+"",title:"Sensors App for the microphone.",width:"1080",height:"720"}),"\r\n",(0,A.jsx)("figcaption",{children:"Sensors App for the microphone."})]})})}),"\n",(0,A.jsx)(i.p,{children:"The serial menu provides a way to record the microphone to a wav file. A recording can also be triggered by the GUIAPI. These are recorded to the record directory."}),"\n",(0,A.jsx)("div",{class:"text--center",children:(0,A.jsx)("figure",{children:(0,A.jsxs)(i.p,{children:[(0,A.jsx)(i.img,{alt:"Enter &#39;t&#39; from the display serial console will record a wav file.",src:n(8911).A+"",title:"Enter &#39;t&#39; from the display serial console will record a wav file.",width:"594",height:"281"}),"\r\n",(0,A.jsx)("figcaption",{children:"Enter 't' from the display serial console will record a wav file."})]})})}),"\n",(0,A.jsx)(i.p,{children:"Also, the 's' menu in the display console will stream audio to host as text integers."}),"\n",(0,A.jsx)(i.h2,{id:"sensors-app-microphone-view",children:"Sensors App Microphone View"}),"\n",(0,A.jsx)(i.p,{children:"The sensors app has a microphone shown above. This view also you to record a wave file and play it back. The virtual LED shows if the sound quiet threshold was exceeded. Also, the LED light show indicates sound level."}),"\n",(0,A.jsx)(i.h2,{id:"settings",children:"Settings"}),"\n",(0,A.jsx)(i.p,{children:"The recording time and volume level can be configured in the settings serial menu. This menu can also set a threshold to determine if the noise level is loud to indicate sound is present. This can be used to trigger device actions like waking up the screen. The record volume can also be set. 5 is the default volume."}),"\n",(0,A.jsx)("div",{class:"text--center",children:(0,A.jsxs)("figure",{children:[(0,A.jsx)(i.p,{children:(0,A.jsx)(i.img,{alt:"settings-m",src:n(9866).A+"",title:"settings-m",width:"606",height:"421"})}),(0,A.jsx)("figcaption",{})]})}),"\n",(0,A.jsx)(i.h2,{id:"api",children:"API"}),"\n",(0,A.jsx)(i.p,{children:"You can record sounds using the API from wasm. The recordSound API allows you to record a sound to the file system for a specific length of time."}),"\n",(0,A.jsx)(i.p,{children:"The setAudioSettings will stream the microphone or fft result to the wasm script engine as events. You can also put the mic sound level and/or fft data into a plot data store."}),"\n",(0,A.jsx)(i.pre,{children:(0,A.jsx)(i.code,{className:"language-C",children:"void recordSound(char * szSoundPath, int iLengthSeconds);\r\n\r\nvoid setAudioSettings(bool bStreamMic, bool bStreamFFT, \r\n\t\t\t\tbool bEnableMicPlotData, int iMICPlotDataIndex, \r\n\t\t\t\tbool bEnableFFTPlotData, int iFFTPlotDataIndex);\n"})}),"\n",(0,A.jsx)(i.h2,{id:"technical-details",children:"Technical Details"}),"\n",(0,A.jsxs)(i.p,{children:["The format of the wave file is compatible with the ",(0,A.jsx)(i.a,{href:"/gui-screen-buttons-and-lights/making-sounds/",children:"sound playback"})," allowing you to play recorded sounds."]})]})}function l(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,A.jsx)(i,{...e,children:(0,A.jsx)(c,{...e})}):c(e)}},8911:(e,i,n)=>{n.d(i,{A:()=>t});const t="data:image/png;base64,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"},2591:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/sensors-app-microphone-8ac8d94de3d7dfc167c9216227a271c3.png"},9866:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/settings-m-2b315f617ee1dd9d7ae09a4f9a5ae28f.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(6540);const A={},s=t.createContext(A);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);