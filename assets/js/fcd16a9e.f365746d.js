"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Hello World",slug:"/actions/actions/hello_world",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/hello_world.md"},l="Hello World",a={unversionedId:"docs/actions/actions/hello_world",id:"docs/actions/actions/hello_world",title:"Hello World",description:"Certified",source:"@site/genDocs/docs/actions/actions/hello_world.md",sourceDirName:"docs/actions/actions",slug:"/actions/actions/hello_world",permalink:"/docs/next/actions/actions/hello_world",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/hello_world.md",tags:[],version:"current",frontMatter:{title:"Hello World",slug:"/actions/actions/hello_world",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/hello_world.md"},sidebar:"overviewSidebar",previous:{title:"Ingestion Executor",permalink:"/docs/next/actions/actions/executor"},next:{title:"Slack",permalink:"/docs/next/actions/actions/slack"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"Supported Events",id:"supported-events",level:3},{value:"Action Quickstart",id:"action-quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install the Plugin(s)",id:"install-the-plugins",level:3},{value:"Configure the Action Config",id:"configure-the-action-config",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This Action is an example action which simply prints all Events it receives as JSON."),(0,o.kt)("h3",{id:"capabilities"},"Capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Printing events that are received by the Action to the console. ")),(0,o.kt)("h3",{id:"supported-events"},"Supported Events"),(0,o.kt)("p",null,"All event types, including"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EntityChangeEvent_v1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MetadataChangeLog_v1"))),(0,o.kt)("h2",{id:"action-quickstart"},"Action Quickstart"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"No prerequisites. This action comes pre-loaded with ",(0,o.kt)("inlineCode",{parentName:"p"},"acryl-datahub-actions"),". "),(0,o.kt)("h3",{id:"install-the-plugins"},"Install the Plugin(s)"),(0,o.kt)("p",null,"This action comes with the Actions Framework by default:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub-actions'")),(0,o.kt)("h3",{id:"configure-the-action-config"},"Configure the Action Config"),(0,o.kt)("p",null,"Use the following config(s) to get started with this Action. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: "pipeline-name"\nsource:\n  # source configs\naction:\n  type: "hello_world"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View All Configuration Options"),"| Field | Required | Default | Description | | --- | :-: | :-: | --- | | `to_upper` | \u274c| `False` | Whether to print events in upper case. |"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);