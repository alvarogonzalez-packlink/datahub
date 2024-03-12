"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Act on Metadata Overview",slug:"/act-on-metadata",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/act-on-metadata.md"},l="Act on Metadata Overview",s={unversionedId:"docs/act-on-metadata",id:"version-0.13.0/docs/act-on-metadata",title:"Act on Metadata Overview",description:"DataHub's metadata infrastructure is stream-oriented, meaning that all changes in metadata are communicated and reflected within the platform within seconds.",source:"@site/versioned_docs/version-0.13.0/docs/act-on-metadata.md",sourceDirName:"docs",slug:"/act-on-metadata",permalink:"/docs/act-on-metadata",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/act-on-metadata.md",tags:[],version:"0.13.0",frontMatter:{title:"Act on Metadata Overview",slug:"/act-on-metadata",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/act-on-metadata.md"},sidebar:"overviewSidebar",previous:{title:"Lite (Experimental)",permalink:"/docs/datahub_lite"},next:{title:"Introduction",permalink:"/docs/actions"}},u={},p=[],d={toc:p},m="wrapper";function b(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"act-on-metadata-overview"},"Act on Metadata Overview"),(0,n.kt)("p",null,"DataHub's metadata infrastructure is stream-oriented, meaning that all changes in metadata are communicated and reflected within the platform within seconds. "),(0,n.kt)("p",null,"This unlocks endless opportunities to automate data governance and data management workflows, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatically enrich or annotate existing data entities within DataHub, i.e., apply Tags, Terms, Owners, etc."),(0,n.kt)("li",{parentName:"ul"},"Leverage the ",(0,n.kt)("a",{parentName:"li",href:"/docs/actions"},"Actions Framework")," to trigger external workflows or send alerts to external systems, i.e., send a message to a team channel when there's a schema change"),(0,n.kt)("li",{parentName:"ul"},"Proactively identify what business-critical data resources will be impacted by a breaking schema change")),(0,n.kt)("p",null,"This section contains resources to help you take real-time action on your rapidly evolving data stack."),(0,n.kt)("p",{align:"center"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yeloymkK5ow",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}b.isMDXComponent=!0}}]);