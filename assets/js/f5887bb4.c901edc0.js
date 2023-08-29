"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[94712],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(i),g=r,v=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return i?n.createElement(v,a(a({ref:t},c),{},{components:i})):n.createElement(v,a({ref:t},c))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},10988:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=i(83117),r=(i(67294),i(3905));const o={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/powerbi/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/overview.md"},a="PowerBI Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/powerbi/overview",id:"docs/quick-ingestion-guides/powerbi/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/genDocs/docs/quick-ingestion-guides/powerbi/overview.md",sourceDirName:"docs/quick-ingestion-guides/powerbi",slug:"/quick-ingestion-guides/powerbi/overview",permalink:"/docs/next/quick-ingestion-guides/powerbi/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/powerbi/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/next/quick-ingestion-guides/tableau/configuration"},next:{title:"Setup",permalink:"/docs/next/quick-ingestion-guides/powerbi/setup"}},s={},l=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],c={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"powerbi-ingestion-guide-overview"},"PowerBI Ingestion Guide: Overview"),(0,r.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,r.kt)("p",null,"This guide will help you set up the PowerBI connector to begin ingesting metadata into DataHub."),(0,r.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from PowerBI and load it into DataHub. This will include to following PowerBI asset types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dashboards"),(0,r.kt)("li",{parentName:"ul"},"Tiles "),(0,r.kt)("li",{parentName:"ul"},"Reports"),(0,r.kt)("li",{parentName:"ul"},"Pages"),(0,r.kt)("li",{parentName:"ul"},"Datasets"),(0,r.kt)("li",{parentName:"ul"},"Lineage ")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To learn more about setting these advanced values, check out the ",(0,r.kt)("a",{parentName:"em",href:"/docs/generated/ingestion/sources/powerbi"},"PowerBI Ingestion Source"),".")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Continue to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/quick-ingestion-guides/powerbi/setup"},"setup guide"),", where we'll describe the prerequisites."),(0,r.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,r.kt)("p",null,"If you want to ingest metadata from PowerBI using the DataHub CLI, check out the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/powerbi"},"PowerBI Ingestion Source"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);