"use strict";(self.webpackChunkfreewili_docs=self.webpackChunkfreewili_docs||[]).push([[5630],{5642:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=n(4848),i=n(8453),a=n(9980);const t={title:"FREE-WILi Sound Playback - WAV Files, API Calls, and Tools",description:"Learn how to play WAV files on FREE-WILi, including supported formats, API calls for sound playback, and tools for editing WAV files. Explore ROM sounds and resources.",keywords:["FREE-WILi","sound playback","WAV files","API calls","playSoundFromFile","playSoundFromNameOrID","playSoundFromNumber","Audacity","ROM sounds","WAV file sources"],sidebar_position:2,sidebar_label:"Making sounds"},r="Making sounds",l={id:"gui-screen-buttons-and-lights/making-sounds",title:"FREE-WILi Sound Playback - WAV Files, API Calls, and Tools",description:"Learn how to play WAV files on FREE-WILi, including supported formats, API calls for sound playback, and tools for editing WAV files. Explore ROM sounds and resources.",source:"@site/docs/gui-screen-buttons-and-lights/making-sounds.md",sourceDirName:"gui-screen-buttons-and-lights",slug:"/gui-screen-buttons-and-lights/making-sounds",permalink:"/gui-screen-buttons-and-lights/making-sounds",draft:!1,unlisted:!1,editUrl:"https://github.com/freewili/FreeWili_WebDocs/blob/main/docs/gui-screen-buttons-and-lights/making-sounds.md",tags:[],version:"current",lastUpdatedAt:172535856e4,sidebarPosition:2,frontMatter:{title:"FREE-WILi Sound Playback - WAV Files, API Calls, and Tools",description:"Learn how to play WAV files on FREE-WILi, including supported formats, API calls for sound playback, and tools for editing WAV files. Explore ROM sounds and resources.",keywords:["FREE-WILi","sound playback","WAV files","API calls","playSoundFromFile","playSoundFromNameOrID","playSoundFromNumber","Audacity","ROM sounds","WAV file sources"],sidebar_position:2,sidebar_label:"Making sounds"},sidebar:"tutorialSidebar",previous:{title:"Color Display Widgets",permalink:"/gui-screen-buttons-and-lights/color-display-widgets"},next:{title:"Displaying Images",permalink:"/gui-screen-buttons-and-lights/displaying-images"}},d={},c=[{value:"App",id:"app",level:2},{value:"API Calls for sounds",id:"api-calls-for-sounds",level:2},{value:"ROM Sounds",id:"rom-sounds",level:2},{value:"Software to edit and create proper wav files",id:"software-to-edit-and-create-proper-wav-files",level:2},{value:"Source for wav files",id:"source-for-wav-files",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"making-sounds",children:"Making sounds"})}),"\n",(0,o.jsx)(s.p,{children:"FREE-WILi includes a speaker. The speaker allows you to play sounds stored as wav files in the file system."}),"\n",(0,o.jsxs)(s.p,{children:["The sounds directory can include wav files that can be played from the serial menu. The menu option ",(0,o.jsx)(s.code,{children:"'g'"})," will let you enter in a wav file to play. They will also be listed in the sound board app."]}),"\n",(0,o.jsx)(s.p,{children:"The wav files supported currently are 8khz stereo or mono files encoded as 16 bit PCM. The speaker is one channel so the second channel in stereo is discarded. Mono files are recommended because they are smaller."}),"\n",(0,o.jsxs)(s.p,{children:["The sounds are stored in the sounds directory. By default the sounds will be searched by name here. Since they are all wav extensions you do not need to include the extension. If you have a sound somewhere else in the file system, specify the entire path. For example a recorded sound, ",(0,o.jsx)(s.code,{children:"\\record\\rec1.wav"})]}),"\n",(0,o.jsx)(s.p,{children:"Sounds can be launched from the serial API or host RP2040 API. Also the sound board app can launch sounds."}),"\n",(0,o.jsx)(s.p,{children:"There is an API call (playSoundFromNumber) that can read numbers out loud via a 1980s text-to-speech technique. This is playing sequences of wav files to say a number."}),"\n",(0,o.jsx)(s.h2,{id:"app",children:"App"}),"\n",(0,o.jsx)(s.p,{children:"The Sound board app allows you to play select ROM sounds and sounds from the file system."}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("figure",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.img,{alt:"The sound board app lets you test sounds.",src:n(9420).A+"",title:"The sound board app lets you test sounds.",width:"1600",height:"1177"}),"\r\n",(0,o.jsx)("figcaption",{children:"The sound board app lets you test sounds."})]})})}),"\n",(0,o.jsx)(s.h2,{id:"api-calls-for-sounds",children:"API Calls for sounds"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-cpp",children:"void playSoundFromFile(char * szSoundPath);\r\nvoid playSoundFromNameOrID(const char * szSoundName, int iID);\r\nvoid playSoundFromNumber(bool bFloat, int iNumber, float fNumber, int iFloatDigits);\n"})}),"\n",(0,o.jsx)(s.h2,{id:"rom-sounds",children:"ROM Sounds"}),"\n",(0,o.jsx)(s.p,{children:"FREE-WILi includes sounds in its ROM. Below is a list of ROM sounds."}),"\n","\n",(0,o.jsx)(a.A,{title:"FwROMAudioAssets.pdf",description:"pdf",link:"/downloads/FwROMAudioAssets.pdf",imageUrl:"/img/png-download.png"}),"\n",(0,o.jsx)(s.h2,{id:"software-to-edit-and-create-proper-wav-files",children:"Software to edit and create proper wav files"}),"\n",(0,o.jsx)(a.A,{title:"Home",description:"Audacity \xae",link:"https://www.audacityteam.org/",imageUrl:"/img/Audacity.svg"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("div",{class:"text--center",children:(0,o.jsx)("figure",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.img,{alt:"Audacity can export an 8000 hz 16 bit PCM wav file",src:n(5968).A+"",title:"Audacity can export an 8000 hz 16 bit PCM wav file",width:"492",height:"423"}),"\r\n",(0,o.jsx)("figcaption",{children:"Audacity can export an 8000 hz 16 bit PCM wav file"})]})})}),"\n",(0,o.jsx)(s.h2,{id:"source-for-wav-files",children:"Source for wav files"}),"\n",(0,o.jsx)(a.A,{title:"WavSource.com: Free Wav Files and Sound Bites",description:"",link:"https://www.wavsource.com/",imageUrl:"https://www.wavsource.com/favicon.ico"})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9980:(e,s,n)=>{n.d(s,{A:()=>l});n(6540);const o="card_t5fD",i="cardContent_yn8N",a="cardHeader_jh50",t="cardImage_zPy4";var r=n(4848);const l=e=>{let{title:s,description:n,link:l,imageUrl:d}=e;return(0,r.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:o,children:(0,r.jsxs)("div",{className:i,children:[(0,r.jsxs)("div",{className:a,children:[d&&(0,r.jsx)("img",{src:d,alt:s,className:t}),(0,r.jsx)("h3",{children:s})]}),(0,r.jsx)("p",{children:n})]})})}},5968:(e,s,n)=>{n.d(s,{A:()=>o});const o=n.p+"assets/images/edit-wav-files-987492c1eba9e70b2b4f5a20da01ea6e.png"},9420:(e,s,n)=>{n.d(s,{A:()=>o});const o=n.p+"assets/images/sound-app-7a2428e06e5d6eaba5a8de3fe41f2afd.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var o=n(6540);const i={},a=o.createContext(i);function t(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);