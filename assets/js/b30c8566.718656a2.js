"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[73940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Docker Container Architecture",sidebar_label:"Docker Container Architecture",slug:"/architecture/docker-containers",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/docker-containers.md"},c="Docker Container Architecture",i={unversionedId:"docs/architecture/docker-containers",id:"docs/architecture/docker-containers",title:"Docker Container Architecture",description:"When running DataHub via docker-compose. or helm, the following is a diagram of the containers involved",source:"@site/genDocs/docs/architecture/docker-containers.md",sourceDirName:"docs/architecture",slug:"/architecture/docker-containers",permalink:"/docs/next/architecture/docker-containers",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/docker-containers.md",tags:[],version:"current",frontMatter:{title:"Docker Container Architecture",sidebar_label:"Docker Container Architecture",slug:"/architecture/docker-containers",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/docker-containers.md"},sidebar:"overviewSidebar",previous:{title:"Serving Tier",permalink:"/docs/next/architecture/metadata-serving"},next:{title:"The Metadata Model",permalink:"/docs/next/metadata-modeling/metadata-model"}},s={},l=[],u={toc:l},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-container-architecture"},"Docker Container Architecture"),(0,a.kt)("p",null,"When running DataHub via docker-compose. or helm, the following is a diagram of the containers involved\nwith running DataHub and their relationships with each other. The helm chart uses helm hooks to determine\nthe proper ordering of the components whereas docker-compose relies on a series of health checks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"                datahub-frontend-react  datahub-actions\n                                     \\   /\n                                       |   datahub-upgrade (NoCodeDataMigration, helm only)\n                                       |   /\n                                datahub-gms (healthy)\n                                       |\n                                datahub-upgrade (SystemUpdate completed)\n            /--------------------/   |   \\   \\------------------------------------------------\\\n           /                         |    \\-------------------\\                                \\\nmysql-setup (completed)  elasticsearch-setup (completed)  kafka-setup (completed)  (if apply) neo4j (healthy)\n    |                           |                          /         \\\n    |                           |                         /           \\\nmysql (healthy)         elasticsearch (healthy)   broker (healthy)  (if not internal) schema-registry  (healthy)\n                                                      |\n                                                  zookeeper (healthy)\n")))}h.isMDXComponent=!0}}]);