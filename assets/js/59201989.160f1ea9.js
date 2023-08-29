"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},63725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(83117),n=(r(67294),r(3905));const a={title:"General Debugging Guide",slug:"/troubleshooting/general",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/general.md"},i="General Debugging Guide",s={unversionedId:"docs/troubleshooting/general",id:"version-0.10.5/docs/troubleshooting/general",title:"General Debugging Guide",description:"Logo for my platform is not appearing on the Home Page or search results",source:"@site/versioned_docs/version-0.10.5/docs/troubleshooting/general.md",sourceDirName:"docs/troubleshooting",slug:"/troubleshooting/general",permalink:"/docs/troubleshooting/general",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/general.md",tags:[],version:"0.10.5",frontMatter:{title:"General Debugging Guide",slug:"/troubleshooting/general",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/general.md"},sidebar:"overviewSidebar",previous:{title:"Build Debugging Guide",permalink:"/docs/troubleshooting/build"},next:{title:"Datahub's Reporting Framework for Ingestion Job Telemetry",permalink:"/docs/metadata-ingestion/docs/dev_guides/reporting_telemetry"}},l={},u=[{value:"Logo for my platform is not appearing on the Home Page or search results",id:"logo-for-my-platform-is-not-appearing-on-the-home-page-or-search-results",level:2},{value:"How do I add dataset freshness indicator for datasets?",id:"how-do-i-add-dataset-freshness-indicator-for-datasets",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"general-debugging-guide"},"General Debugging Guide"),(0,n.kt)("h2",{id:"logo-for-my-platform-is-not-appearing-on-the-home-page-or-search-results"},"Logo for my platform is not appearing on the Home Page or search results"),(0,n.kt)("p",null,"Please see if either of these guides help you"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/how/add-custom-data-platform"},"Adding a custom Dataset Data Platform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli#put-platform"},"DataHub CLI put platform command"))),(0,n.kt)("h2",{id:"how-do-i-add-dataset-freshness-indicator-for-datasets"},"How do I add dataset freshness indicator for datasets?"),(0,n.kt)("p",null,"You can emit an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Operation.pdl"},"operation aspect")," for the same."))}d.isMDXComponent=!0}}]);