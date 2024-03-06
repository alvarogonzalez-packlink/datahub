"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={title:"What is Generalized Metadata Service (GMS)?",slug:"/what/gms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/gms.md"},i="What is Generalized Metadata Service (GMS)?",s={unversionedId:"docs/what/gms",id:"version-0.13.0/docs/what/gms",title:"What is Generalized Metadata Service (GMS)?",description:"Metadata for entities onboarded to GMA is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a Rest.li API and must access the metadata using GMA DAOs.",source:"@site/versioned_docs/version-0.13.0/docs/what/gms.md",sourceDirName:"docs/what",slug:"/what/gms",permalink:"/docs/what/gms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/gms.md",tags:[],version:"0.13.0",frontMatter:{title:"What is Generalized Metadata Service (GMS)?",slug:"/what/gms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/gms.md"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-generalized-metadata-service-gms"},"What is Generalized Metadata Service (GMS)?"),(0,n.kt)("p",null,"Metadata for ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model"},"onboarded")," to ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a ",(0,n.kt)("a",{parentName:"p",href:"http://rest.li"},"Rest.li")," API and must access the metadata using ",(0,n.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-serving"},"GMA DAOs"),". "),(0,n.kt)("p",null,"GMA is designed to support a distributed fleet of GMS, each serving a subset of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/graph"},"GMA graph"),". However, for simplicity we include a single centralized GMS that serves all entities."))}u.isMDXComponent=!0}}]);