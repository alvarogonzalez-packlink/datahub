"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,b=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(b,i(i({ref:t},u),{},{components:r})):o.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},55264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"General Debugging Guide",slug:"/troubleshooting/general",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/general.md"},s="General Debugging Guide",c={unversionedId:"docs/troubleshooting/general",id:"docs/troubleshooting/general",title:"General Debugging Guide",description:"Logo for my platform is not appearing on the Home Page or search results",source:"@site/genDocs/docs/troubleshooting/general.md",sourceDirName:"docs/troubleshooting",slug:"/troubleshooting/general",permalink:"/docs/next/troubleshooting/general",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/general.md",tags:[],version:"current",frontMatter:{title:"General Debugging Guide",slug:"/troubleshooting/general",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/general.md"},sidebar:"overviewSidebar",previous:{title:"Build Debugging Guide",permalink:"/docs/next/troubleshooting/build"},next:{title:"Datahub's Reporting Framework for Ingestion Job Telemetry",permalink:"/docs/next/metadata-ingestion/docs/dev_guides/reporting_telemetry"}},u={},p=[{value:"Logo for my platform is not appearing on the Home Page or search results",id:"logo-for-my-platform-is-not-appearing-on-the-home-page-or-search-results",level:2},{value:"How do I add dataset freshness indicator for datasets?",id:"how-do-i-add-dataset-freshness-indicator-for-datasets",level:2}],d={toc:p},g="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-debugging-guide"},"General Debugging Guide"),(0,o.kt)("h2",{id:"logo-for-my-platform-is-not-appearing-on-the-home-page-or-search-results"},"Logo for my platform is not appearing on the Home Page or search results"),(0,o.kt)("p",null,"Please see if either of these guides help you"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/how/add-custom-data-platform"},"Adding a custom Dataset Data Platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/cli#put-platform"},"DataHub CLI put platform command"))),(0,o.kt)("h2",{id:"how-do-i-add-dataset-freshness-indicator-for-datasets"},"How do I add dataset freshness indicator for datasets?"),(0,o.kt)("p",null,"You can emit an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Operation.pdl"},"operation aspect")," for the same."))}b.isMDXComponent=!0}}]);