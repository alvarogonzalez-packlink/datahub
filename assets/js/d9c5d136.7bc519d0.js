"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=s,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),r=a(86010),i=a(72957),l=a(16550),o=a(75238),p=a(33609),u=a(92560);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function c(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,p]=f({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=o??d;return m({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var k=a(51048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(d(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},s.createElement(b,(0,n.Z)({},e,t)),s.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return s.createElement(y,(0,n.Z)({key:String(t)},e))}},67892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),r=a(73992),i=a(18679);const l={sidebar_position:55,title:"Superset",slug:"/generated/ingestion/sources/superset",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md"},o="Superset",p={unversionedId:"docs/generated/ingestion/sources/superset",id:"docs/generated/ingestion/sources/superset",title:"Superset",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/superset.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/superset",permalink:"/docs/next/generated/ingestion/sources/superset",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,title:"Superset",slug:"/generated/ingestion/sources/superset",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md"},sidebar:"overviewSidebar",previous:{title:"SQLAlchemy",permalink:"/docs/next/generated/ingestion/sources/sqlalchemy"},next:{title:"Tableau",permalink:"/docs/next/generated/ingestion/sources/tableau"}},u={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],c={toc:d},m="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"superset"},"Superset"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,s.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Capability"),(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/next/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Optionally enabled via stateful_ingestion")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Supported by default")))),(0,s.kt)("p",null,"This plugin extracts the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Charts, dashboards, and associated metadata")),(0,s.kt)("p",null,"See documentation for superset's /security/login at ",(0,s.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/rest-api"},"https://superset.apache.org/docs/rest-api")," for more details on superset's login api."),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[superset]'\n")),(0,s.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,s.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,s.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: superset\n  config:\n    # Coordinates\n    connect_uri: http://localhost:8088\n\n    # Credentials\n    username: user\n    password: pass\n    provider: ldap\n\nsink:\n  # sink configs\n")),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Superset host URL. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"http://localhost:8088")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"database_alias"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"map(str,string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"display_uri"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"optional URL to use in links (if ",(0,s.kt)("inlineCode",{parentName:"td"},"connect_uri")," is only for ingestion)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"options"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","}")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"password"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Superset password.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"provider"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Superset provider. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"db")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"username"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Superset username.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"env"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"PROD")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"domain"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"map(str,AllowDenyPattern)"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"A class to store allow deny regexes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"domain.",(0,s.kt)("inlineCode",{parentName:"td"},"key"),"."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"domain.",(0,s.kt)("inlineCode",{parentName:"td"},"key"),".allow."),(0,s.kt)("span",{className:"path-main"},"string"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"domain.",(0,s.kt)("inlineCode",{parentName:"td"},"key"),"."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"domain.",(0,s.kt)("inlineCode",{parentName:"td"},"key"),"."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"[","]")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"domain.",(0,s.kt)("inlineCode",{parentName:"td"},"key"),".deny."),(0,s.kt)("span",{className:"path-main"},"string"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Superset Stateful Ingestion Config.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,s.kt)("span",{className:"path-main"},"enabled"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if datahub-rest sink is used or if a ",(0,s.kt)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,s.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))))))),(0,s.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SupersetConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "title": "Stateful Ingestion",\n      "description": "Superset Stateful Ingestion Config.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n        }\n      ]\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Superset host URL.",\n      "default": "http://localhost:8088",\n      "type": "string"\n    },\n    "display_uri": {\n      "title": "Display Uri",\n      "description": "optional URL to use in links (if `connect_uri` is only for ingestion)",\n      "type": "string"\n    },\n    "domain": {\n      "title": "Domain",\n      "description": "regex patterns for tables to filter to assign domain_key. ",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "$ref": "#/definitions/AllowDenyPattern"\n      }\n    },\n    "username": {\n      "title": "Username",\n      "description": "Superset username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Superset password.",\n      "type": "string"\n    },\n    "provider": {\n      "title": "Provider",\n      "description": "Superset provider.",\n      "default": "db",\n      "type": "string"\n    },\n    "options": {\n      "title": "Options",\n      "default": {},\n      "type": "object"\n    },\n    "database_alias": {\n      "title": "Database Alias",\n      "description": "Can be used to change mapping for database names in superset to what you have in datahub",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if datahub-rest sink is used or if a `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("p",null,"If you were using ",(0,s.kt)("inlineCode",{parentName:"p"},"database_alias")," in one of your other ingestions to rename your databases to something else based on business needs you can rename them in superset also"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: superset\n  config:\n    # Coordinates\n    connect_uri: http://localhost:8088\n\n    # Credentials\n    username: user\n    password: pass\n    provider: ldap\n    database_alias:\n      example_name_1: business_name_1\n      example_name_2: business_name_2\n\nsink:\n  # sink configs\n")),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.superset.SupersetSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/superset.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for Superset, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);