"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[84412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"v0.2.7",slug:"/managed-datahub/release-notes/v_0_2_7",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_7.md"},l="v0.2.7",i={unversionedId:"docs/managed-datahub/release-notes/v_0_2_7",id:"docs/managed-datahub/release-notes/v_0_2_7",title:"v0.2.7",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_2_7.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_7",permalink:"/docs/managed-datahub/release-notes/v_0_2_7",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_7.md",tags:[],version:"current",frontMatter:{title:"v0.2.7",slug:"/managed-datahub/release-notes/v_0_2_7",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_7.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.8",permalink:"/docs/managed-datahub/release-notes/v_0_2_8"},next:{title:"v0.2.6",permalink:"/docs/managed-datahub/release-notes/v_0_2_6"}},s={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI",id:"recommended-cli",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v027"},"v0.2.7"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"19-May-2023"),(0,n.kt)("h2",{id:"recommended-cli"},"Recommended CLI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"v0.10.2.3")," with release notes at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.10.2.3"},"https://github.com/acryldata/datahub/releases/tag/v0.10.2.3"))),(0,n.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.2.6")," these changes from OSS DataHub ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/2bc0a781a63fd4aed50080ab453bcbd3ec0570bd...44406f7adf09674727e433c2136654cc21e79dd2"},"https://github.com/datahub-project/datahub/compare/2bc0a781a63fd4aed50080ab453bcbd3ec0570bd...44406f7adf09674727e433c2136654cc21e79dd2")," have been pulled in."),(0,n.kt)("li",{parentName:"ul"},"feat(observability): Extending Incidents Models for Observability"),(0,n.kt)("li",{parentName:"ul"},"models(integrations + obs): Adding a Connection entity"),(0,n.kt)("li",{parentName:"ul"},"feat(observability): Extending Assertions Models for Observability"),(0,n.kt)("li",{parentName:"ul"},"feat(observability): Introducing Anomaly Models"),(0,n.kt)("li",{parentName:"ul"},"feat(fastpath): pre-process updateIndicesHook for UI sourced updates"),(0,n.kt)("li",{parentName:"ul"},"fix(metadataTests): change scroll to searchAfter based API"),(0,n.kt)("li",{parentName:"ul"},"feat(observability): Assertions-Based Incidents Generator Hook"),(0,n.kt)("li",{parentName:"ul"},"fix(notifications): fix double notifications issue"),(0,n.kt)("li",{parentName:"ul"},"fix(tag): render tag name via properties"),(0,n.kt)("li",{parentName:"ul"},"fix(jackson): add stream reader constraint with 16 MB limit"),(0,n.kt)("li",{parentName:"ul"},"fix(metadataTests): gold tier metadata tests condition"),(0,n.kt)("li",{parentName:"ul"},"fix(ingest/dbt): fix siblings resolution for sources"),(0,n.kt)("li",{parentName:"ul"},"Some search fixes"),(0,n.kt)("li",{parentName:"ul"},"fix(graphql) Fix autocomplete for views with un-searchable types"),(0,n.kt)("li",{parentName:"ul"},"fix(ui) Allow users to be able to propose new terms/term groups from UI")))}p.isMDXComponent=!0}}]);