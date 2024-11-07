"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9411],{8344:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(5893),n=a(1151);const r={sidebar_position:2,title:"EvilPortal"},i=void 0,s={id:"network_attacks/evilportal",title:"EvilPortal",description:"EvilPortal is an attack that creates an AP with a captive portal access and it captures all the POST requests on the login form.",source:"@site/docs/network_attacks/evilportal.md",sourceDirName:"network_attacks",slug:"/network_attacks/evilportal",permalink:"/docs/network_attacks/evilportal",draft:!1,unlisted:!1,editUrl:"https://github.com/CapibaraZero/docs/tree/main/docs/network_attacks/evilportal.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"EvilPortal"},sidebar:"tutorialSidebar",previous:{title:"DHCP starvation",permalink:"/docs/network_attacks/dhcp_starvation"},next:{title:"ARP poisoner",permalink:"/docs/network_attacks/arp_poisoner"}},c={},l=[{value:"How to make the attack",id:"how-to-make-the-attack",level:2},{value:"GUI",id:"gui",level:3}];function p(t){const e={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"EvilPortal is an attack that creates an AP with a captive portal access and it captures all the POST requests on the login form."}),"\n",(0,o.jsxs)(e.p,{children:["It can be used to capture body of POST requests to /login. You must create a webpage like ",(0,o.jsx)(e.a,{href:"https://github.com/CapibaraZero/EvilPortal/blob/main/example.html",children:"this"})," with a form that submit to /login URL."]}),"\n",(0,o.jsx)(e.p,{children:"You must upload the whole pages to SD under /captive_portal path."}),"\n",(0,o.jsx)(e.p,{children:"CapibaraZero captive portal act like a web server so you can upload CSS, JS or other assets."}),"\n",(0,o.jsx)(e.h2,{id:"how-to-make-the-attack",children:"How to make the attack"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Upload web pages to SD under /captive_portal path"}),"\n",(0,o.jsxs)(e.li,{children:["(Optional) Create config.json under /captive_portal path like ",(0,o.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(4855).Z+"",children:"this"})," with SSID and password of capibaraZero AP"]}),"\n",(0,o.jsxs)(e.li,{children:["If you not provide config.json, capibaraZero will create AP with capibaraZero SSID without any password. You can change default_ssid at ",(0,o.jsx)(e.a,{href:"https://github.com/CapibaraZero/fw/blob/main/lib/network_attacks/network_attacks.cpp#L28",children:"this line"})," and recompile firmware"]}),"\n",(0,o.jsx)(e.li,{children:"Go to NetAt.(Network attacks)"}),"\n",(0,o.jsx)(e.li,{children:"Select EvilPortal"}),"\n",(0,o.jsx)(e.li,{children:"Connect to ESP and login to captive portal"}),"\n",(0,o.jsx)(e.li,{children:"Check captured packets in GUI. You can stop when you want"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"gui",children:"GUI"}),"\n",(0,o.jsx)("img",{src:"/img/screens/network_attacks/evilportal.png",alt:"EvilPortal GUI screenshot"})]})}function d(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},4855:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/files/config-926c76533e1c62b969525013387c0862.json"},1151:(t,e,a)=>{a.d(e,{Z:()=>s,a:()=>i});var o=a(7294);const n={},r=o.createContext(n);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);