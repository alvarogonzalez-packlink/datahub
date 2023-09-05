"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"DataHub Telemetry",sidebar_label:"Telemetry",slug:"/deploy/telemetry",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/telemetry.md"},l="DataHub Telemetry",i={unversionedId:"docs/deploy/telemetry",id:"docs/deploy/telemetry",title:"DataHub Telemetry",description:"Overview of DataHub Telemetry",source:"@site/genDocs/docs/deploy/telemetry.md",sourceDirName:"docs/deploy",slug:"/deploy/telemetry",permalink:"/docs/next/deploy/telemetry",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/telemetry.md",tags:[],version:"current",frontMatter:{title:"DataHub Telemetry",sidebar_label:"Telemetry",slug:"/deploy/telemetry",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/telemetry.md"},sidebar:"overviewSidebar",previous:{title:"How to Extract Logs from DataHub Containers",permalink:"/docs/next/how/extract-container-logs"},next:{title:"Configuring Kafka",permalink:"/docs/next/how/kafka-config"}},c={},s=[{value:"Overview of DataHub Telemetry",id:"overview-of-datahub-telemetry",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datahub-telemetry"},"DataHub Telemetry"),(0,n.kt)("h2",{id:"overview-of-datahub-telemetry"},"Overview of DataHub Telemetry"),(0,n.kt)("p",null,"To effectively build and maintain the DataHub Project, we must understand how end-users work within DataHub. Beginning in version 0.8.35, DataHub collects anonymous usage statistics and errors to inform our roadmap priorities and to enable us to proactively address errors."),(0,n.kt)("p",null,"Deployments are assigned a UUID which is sent along with event details, Java version, OS, and timestamp; telemetry collection is enabled by default and can be disabled by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"DATAHUB_TELEMETRY_ENABLED=false")," in your Docker Compose config."),(0,n.kt)("p",null,"The source code is available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/factories/src/main/java/com/linkedin/gms/factory/telemetry/TelemetryUtils.java"},"here.")))}p.isMDXComponent=!0}}]);