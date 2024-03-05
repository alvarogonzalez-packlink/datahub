"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Restore Indices Endpoint",slug:"/api/restli/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md"},a="Restore Indices Endpoint",s={unversionedId:"docs/api/restli/restore-indices",id:"version-0.12.0/docs/api/restli/restore-indices",title:"Restore Indices Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=restoreIndices endpoint with the urn as part of JSON Payload to restore indices for the particular URN, or with the urnLike regex to restore for batchSize URNs matching the pattern starting from start.",source:"@site/versioned_docs/version-0.12.0/docs/api/restli/restore-indices.md",sourceDirName:"docs/api/restli",slug:"/api/restli/restore-indices",permalink:"/docs/0.12.0/api/restli/restore-indices",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md",tags:[],version:"0.12.0",frontMatter:{title:"Restore Indices Endpoint",slug:"/api/restli/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md"},sidebar:"overviewSidebar",previous:{title:"Rest.li API",permalink:"/docs/0.12.0/api/restli/restli-overview"},next:{title:"Get Index Sizes Endpoint",permalink:"/docs/0.12.0/api/restli/get-index-sizes"}},p={},c=[],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restore-indices-endpoint"},"Restore Indices Endpoint"),(0,i.kt)("p",null,"You can do a HTTP POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=restoreIndices")," endpoint with the ",(0,i.kt)("inlineCode",{parentName:"p"},"urn")," as part of JSON Payload to restore indices for the particular URN, or with the ",(0,i.kt)("inlineCode",{parentName:"p"},"urnLike")," regex to restore for ",(0,i.kt)("inlineCode",{parentName:"p"},"batchSize")," URNs matching the pattern starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=restoreIndices' \\\n--header 'Authorization: Bearer TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"urn\": \"YOUR_URN\"\n}'\n\ncurl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=restoreIndices' \\\n--header 'Authorization: Bearer TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"urnLike\": \"urn:dataPlatform:%\"\n}'\n")),(0,i.kt)("p",null,"The supported parameters are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"urn")," - Optional URN string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aspect")," - Optional Aspect string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"urnLike")," - Optional string regex to match URNs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," - Optional integer to decide which rows number of sql store to restore. Default: 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batchSize")," - Optional integer to decide how many rows to restore. Default: 10")))}u.isMDXComponent=!0}}]);