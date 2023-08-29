"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,b=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),s=a(67294),r=a(86010),i=a(51048),l=a(33609),o=a(1943),p=a(72957);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:u,className:b}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,l.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[v,w]=(0,s.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=u){const e=N[u];null!=e&&e!==v&&g.some((t=>t.value===e))&&w(e)}const D=e=>{const t=e.currentTarget,a=_.indexOf(t),n=g[a].value;n!==v&&(C(t),w(n),null!=u&&y(u,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},b)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:O,onClick:D},i,{className:(0,r.Z)("tabs__item",m,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return s.createElement(c,(0,n.Z)({key:String(t)},e))}},64232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(83117),s=(a(67294),a(3905)),r=a(34259),i=a(18679);const l={sidebar_position:27,title:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},o="Metabase",p={unversionedId:"docs/generated/ingestion/sources/metabase",id:"docs/generated/ingestion/sources/metabase",title:"Metabase",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/metabase.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/metabase",permalink:"/docs/next/generated/ingestion/sources/metabase",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27,title:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},sidebar:"overviewSidebar",previous:{title:"MariaDB",permalink:"/docs/next/generated/ingestion/sources/mariadb"},next:{title:"Microsoft SQL Server",permalink:"/docs/next/generated/ingestion/sources/mssql"}},d={},m=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Chart",id:"chart",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Code Coordinates",id:"code-coordinates",level:3}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"metabase"},"Metabase"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,s.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Capability"),(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/next/platform-instances"},"Platform Instance")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,s.kt)("p",null,"This plugin extracts Charts, dashboards, and associated metadata. This plugin is in beta and has only been tested\non PostgreSQL and H2 database."),(0,s.kt)("h3",{id:"dashboard"},"Dashboard"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#dashboard"},"/api/dashboard")," endpoint is used to\nretrieve the following dashboard information."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Title and description"),(0,s.kt)("li",{parentName:"ul"},"Last edited by"),(0,s.kt)("li",{parentName:"ul"},"Owner"),(0,s.kt)("li",{parentName:"ul"},"Link to the dashboard in Metabase"),(0,s.kt)("li",{parentName:"ul"},"Associated charts")),(0,s.kt)("h3",{id:"chart"},"Chart"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#card"},"/api/card")," endpoint is used to\nretrieve the following information."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Title and description"),(0,s.kt)("li",{parentName:"ul"},"Last edited by"),(0,s.kt)("li",{parentName:"ul"},"Owner"),(0,s.kt)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,s.kt)("li",{parentName:"ul"},"Datasource and lineage")),(0,s.kt)("p",null,"The following properties for a chart are ingested in DataHub."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Dimensions")),(0,s.kt)("td",{parentName:"tr",align:null},"Column names")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Filters")),(0,s.kt)("td",{parentName:"tr",align:null},"Any filters applied to the chart")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,s.kt)("td",{parentName:"tr",align:null},"All columns that are being used for aggregation")))),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[metabase]'\n")),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Metabase host URL. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"localhost:3000")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"database_alias_map"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Database name map to use when constructing dataset URN.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"database_id_to_instance_map"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"map(str,string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"default_schema"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Default schema name to use when schema is not provided in an SQL query ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"public")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"engine_platform_map"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"map(str,string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"password"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string(password)"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Metabase password.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"platform_instance_map"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"map(str,string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"username"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Metabase username.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"env"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"PROD")))))))),(0,s.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MetabaseConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Metabase host URL.",\n      "default": "localhost:3000",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Metabase username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Metabase password.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "database_alias_map": {\n      "title": "Database Alias Map",\n      "description": "Database name map to use when constructing dataset URN.",\n      "type": "object"\n    },\n    "engine_platform_map": {\n      "title": "Engine Platform Map",\n      "description": "Custom mappings between metabase database engines and DataHub platforms",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "database_id_to_instance_map": {\n      "title": "Database Id To Instance Map",\n      "description": "Custom mappings between metabase database id and DataHub platform instance",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema name to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,s.kt)("p",null,"Metabase databases will be mapped to a DataHub platform based on the engine listed in the\n",(0,s.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database")," response. This mapping can be\ncustomized by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"engine_platform_map")," config option. For example, to map databases using the ",(0,s.kt)("inlineCode",{parentName:"p"},"athena")," engine to\nthe underlying datasets in the ",(0,s.kt)("inlineCode",{parentName:"p"},"glue")," platform, the following snippet can be used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"  engine_platform_map:\n    athena: glue\n")),(0,s.kt)("p",null,"DataHub will try to determine database name from Metabase ",(0,s.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database"),"\npayload. However, the name can be overridden from ",(0,s.kt)("inlineCode",{parentName:"p"},"database_alias_map")," for a given database connected to Metabase."),(0,s.kt)("p",null,"If several platform instances with the same platform (e.g. from several distinct clickhouse clusters) are present in DataHub,\nthe mapping between database id in Metabase and platform instance in DataHub may be configured with the following map:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'  database_id_to_instance_map:\n    "42": platform_instance_in_datahub\n')),(0,s.kt)("p",null,"The key in this map must be string, not integer although  Metabase API provides ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," as number.\nIf ",(0,s.kt)("inlineCode",{parentName:"p"},"database_id_to_instance_map")," is not specified, ",(0,s.kt)("inlineCode",{parentName:"p"},"platform_instance_map")," is used for platform instance mapping. If none of the above are specified, platform instance is not used when constructing ",(0,s.kt)("inlineCode",{parentName:"p"},"urn")," when searching for dataset relations."),(0,s.kt)("h2",{id:"compatibility"},"Compatibility"),(0,s.kt)("p",null,"Metabase version ",(0,s.kt)("a",{parentName:"p",href:"https://www.metabase.com/start/oss/"},"v0.41.2")),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.metabase.MetabaseSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/metabase.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for Metabase, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);