"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6137,16432,81917,50557,22272,15349,82854,48535,22634,15682,83015,8307,37574,6729,77456,37314,7699,77214,8997,38455,154,17745,14071,65292,409,16927,13016,64488,1350,15093,49581,23194,61201,25022,48878,23592,61523,49211,24102,18962,1272,51856,81167,19136,1465,51616,81300,1859,2128,21535,75637,4518,1265,20234,76145,4106,1594,20909,83396,8690,7813,73387,81920,8458,72871,81852,13948,16269,53724,27162,90919,16188,53608,27822,91040,16463,53772,23697,64637,7696,93164,21976,66275,6917,92456,22319,66705,84640,27992,93212,76555,84480,25433,94602,73885,83200,25842,40573,22366,689,12546,40372,22941,98518,13115,41559,23044,99099,32680,36476,53538,98156,31977,36334,53542,98489,31962,66267,84953,59145,63055,66839,85606,59297,64081,66307,86127,4389,10668,53753,30020,4227,10977,53970,29609,3853,10974,86732,57334,75346,60821,88422,56266,75115,87840,57102,16806,45428,82847,32667,16779,45729,82811,29891,20328,49770,24659,65169,71226,41007,20849,66615,71359,40650,21287,67324,25435,11114,2024,411,25443,10966,10373,94745,29123,13058,58421,93278,24649,25964,58050,95600,24722,25760,57657,95282,32984,6,86849,40873,33272,86620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,n),hidden:t},e)}},51715:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(67294),r=n(86010),l=n(8241),s=n(16550),i=n(2834),o=n(35715),c=n(95417);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function b({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,i._X)(r),o=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){u(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[l,o]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[s,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=b({queryString:n,groupId:r}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),g=(()=>{const e=null!=o?o:p;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,l]),tabValues:l}}var h=n(90980);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){y(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function N({className:e,block:t,selectedValue:n,selectValue:s,tabValues:i}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),r=i[a].value;r!==n&&(c(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;var n;t=null!==(n=o[a])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;var a;t=null!==(a=o[n])&&void 0!==a?a:o[o.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>a.createElement("li",O(v({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>o.push(e),onKeyDown:p,onClick:u},l),{className:(0,r.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function w({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function j(e){const t=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},a.createElement(N,v({},e,t)),a.createElement(w,v({},e,t)))}function P(e){const t=(0,h.Z)();return a.createElement(j,v({key:String(t)},e))}},53322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={sidebar_position:51,title:"slack",slug:"/generated/ingestion/sources/slack",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/slack.md"},u="slack",p={unversionedId:"docs/generated/ingestion/sources/slack",id:"version-0.13.0/docs/generated/ingestion/sources/slack",title:"slack",description:"Testing",source:"@site/versioned_docs/version-0.13.0/docs/generated/ingestion/sources/slack.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/slack",permalink:"/docs/generated/ingestion/sources/slack",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/slack.md",tags:[],version:"0.13.0",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"slack",slug:"/generated/ingestion/sources/slack",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/slack.md"},sidebar:"overviewSidebar",previous:{title:"SAP HANA",permalink:"/docs/generated/ingestion/sources/hana"},next:{title:"Snowflake",permalink:"/docs/generated/ingestion/sources/snowflake"}},d={},m=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],f={toc:m},b="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slack"},"slack"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,a.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,a.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[slack]'\n")),(0,a.kt)("h3",{id:"config-details"},"Config Details"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Note that a ",(0,a.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.kt)("div",{className:"config-table"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"bot_token"),"\xa0",(0,a.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string(password)"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bot token for the Slack workspace. Needs ",(0,a.kt)("inlineCode",{parentName:"td"},"users:read"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"users:read.email")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"users.profile:read")," scopes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"api_requests_per_min"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"integer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of API requests per minute. Low-level config. Do not tweak unless you are facing any issues. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"10")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"channel_min_members"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"integer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ingest channels with at least this many members. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"2")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"channels_iteration_limit"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"integer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Limit the number of channels to be ingested in a iteration. Low-level config. Do not tweak unless you are facing any issues. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"200")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"enrich_user_metadata"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"boolean"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to enrich user metadata. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"True")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"ingest_public_channels"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"boolean"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to ingest public channels. If set to true needs ",(0,a.kt)("inlineCode",{parentName:"td"},"channels:read")," scope. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"False")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"should_ingest_archived_channels"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"boolean"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to ingest archived channels. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"False")))))))),(0,a.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SlackSourceConfig",\n  "type": "object",\n  "properties": {\n    "bot_token": {\n      "title": "Bot Token",\n      "description": "Bot token for the Slack workspace. Needs `users:read`, `users:read.email` and `users.profile:read` scopes.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "enrich_user_metadata": {\n      "title": "Enrich User Metadata",\n      "description": "Whether to enrich user metadata.",\n      "default": true,\n      "type": "boolean"\n    },\n    "api_requests_per_min": {\n      "title": "Api Requests Per Min",\n      "description": "Number of API requests per minute. Low-level config. Do not tweak unless you are facing any issues.",\n      "default": 10,\n      "type": "integer"\n    },\n    "ingest_public_channels": {\n      "title": "Ingest Public Channels",\n      "description": "Whether to ingest public channels. If set to true needs `channels:read` scope.",\n      "default": false,\n      "type": "boolean"\n    },\n    "channels_iteration_limit": {\n      "title": "Channels Iteration Limit",\n      "description": "Limit the number of channels to be ingested in a iteration. Low-level config. Do not tweak unless you are facing any issues.",\n      "default": 200,\n      "type": "integer"\n    },\n    "channel_min_members": {\n      "title": "Channel Min Members",\n      "description": "Ingest channels with at least this many members.",\n      "default": 2,\n      "type": "integer"\n    },\n    "should_ingest_archived_channels": {\n      "title": "Should Ingest Archived Channels",\n      "description": "Whether to ingest archived channels.",\n      "default": false,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "bot_token"\n  ],\n  "additionalProperties": false\n}\n')))),(0,a.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Class Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.slack.slack.SlackSource")),(0,a.kt)("li",{parentName:"ul"},"Browse on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/slack/slack.py"},"GitHub"))),(0,a.kt)("h2",null,"Questions"),(0,a.kt)("p",null,"If you've got any questions on configuring ingestion for slack, feel free to ping us on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}g.isMDXComponent=!0}}]);