"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"v0.2.6",slug:"/managed-datahub/release-notes/v_0_2_6",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_6.md"},l="v0.2.6",c={unversionedId:"docs/managed-datahub/release-notes/v_0_2_6",id:"version-0.12.1/docs/managed-datahub/release-notes/v_0_2_6",title:"v0.2.6",description:"---",source:"@site/versioned_docs/version-0.12.1/docs/managed-datahub/release-notes/v_0_2_6.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_6",permalink:"/docs/0.12.1/managed-datahub/release-notes/v_0_2_6",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_6.md",tags:[],version:"0.12.1",frontMatter:{title:"v0.2.6",slug:"/managed-datahub/release-notes/v_0_2_6",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_6.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.7",permalink:"/docs/0.12.1/managed-datahub/release-notes/v_0_2_7"},next:{title:"v0.2.5",permalink:"/docs/0.12.1/managed-datahub/release-notes/v_0_2_5"}},i={},s=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI",id:"recommended-cli",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v026"},"v0.2.6"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"28-Apr-2023"),(0,n.kt)("h2",{id:"recommended-cli"},"Recommended CLI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"v0.10.1.2")," with release notes at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.10.1.2"},"https://github.com/acryldata/datahub/releases/tag/v0.10.1.2")),(0,n.kt)("li",{parentName:"ul"},"There is a newer CLI available ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.10.2.2"},"https://github.com/acryldata/datahub/releases/tag/v0.10.2.2")," currently but we do not recommend using that because of a Regression in Redshift connector. If you are not using Redshift connector then you can use the newer CLI version.")),(0,n.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.2.5")," these changes from OSS DataHub ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/294c5ff50789564dc836ca0cbcd8f7020756eb0a...2bc0a781a63fd4aed50080ab453bcbd3ec0570bd"},"https://github.com/datahub-project/datahub/compare/294c5ff50789564dc836ca0cbcd8f7020756eb0a...2bc0a781a63fd4aed50080ab453bcbd3ec0570bd")," have been pulled in."),(0,n.kt)("li",{parentName:"ul"},"fix(tests): Ensure that default Test has a description field"),(0,n.kt)("li",{parentName:"ul"},"fix(openapi): allow configuration of async on openapi"),(0,n.kt)("li",{parentName:"ul"},"fix(cache): clear cache entry when skipped for search"),(0,n.kt)("li",{parentName:"ul"},"fix(ui) Update copy for chrome extension health component")))}p.isMDXComponent=!0}}]);