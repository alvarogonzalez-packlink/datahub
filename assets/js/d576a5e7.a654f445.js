"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),b=o,h=p["".concat(u,".").concat(b)]||p[b]||c[b]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(83117),o=(a(67294),a(3905));const n={title:"UI Tabs Guide",slug:"/how/ui-tabs-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md"},i="UI Tabs Guide",s={unversionedId:"docs/how/ui-tabs-guide",id:"docs/how/ui-tabs-guide",title:"UI Tabs Guide",description:"Some of the tabs in the UI might not be enabled by default. This guide is supposed to tell Admins of DataHub how to enable those UI tabs.",source:"@site/genDocs/docs/how/ui-tabs-guide.md",sourceDirName:"docs/how",slug:"/how/ui-tabs-guide",permalink:"/docs/next/how/ui-tabs-guide",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md",tags:[],version:"current",frontMatter:{title:"UI Tabs Guide",slug:"/how/ui-tabs-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md"}},u={},l=[{value:"Datasets",id:"datasets",level:2},{value:"Stats and Queries Tab",id:"stats-and-queries-tab",level:3},{value:"Validation Tab",id:"validation-tab",level:3},{value:"Common to multiple entities",id:"common-to-multiple-entities",level:2},{value:"Properties Tab",id:"properties-tab",level:3}],d={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui-tabs-guide"},"UI Tabs Guide"),(0,o.kt)("p",null,"Some of the tabs in the UI might not be enabled by default. This guide is supposed to tell Admins of DataHub how to enable those UI tabs."),(0,o.kt)("h2",{id:"datasets"},"Datasets"),(0,o.kt)("h3",{id:"stats-and-queries-tab"},"Stats and Queries Tab"),(0,o.kt)("p",null,"To enable these tabs you need to use one of the usage sources which gets the relevant metadata from your sources and ingests them into DataHub. These usage sources are listed under other sources which support them e.g. ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/generated/ingestion/sources/snowflake"},"Snowflake source"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/generated/ingestion/sources/bigquery"},"BigQuery source")),(0,o.kt)("h3",{id:"validation-tab"},"Validation Tab"),(0,o.kt)("p",null,"This tab is enabled if you use ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion/integration_docs/great-expectations"},"Data Quality Integration with Great Expectations"),"."),(0,o.kt)("h2",{id:"common-to-multiple-entities"},"Common to multiple entities"),(0,o.kt)("h3",{id:"properties-tab"},"Properties Tab"),(0,o.kt)("p",null,"Properties are a catch-all bag for metadata not captured in other aspects stored for a Dataset. These are populated via the various source connectors when ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion"},"metadata is ingested"),"."))}c.isMDXComponent=!0}}]);