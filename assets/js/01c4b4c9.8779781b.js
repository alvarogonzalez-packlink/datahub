"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=m(a),u=l,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||s;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),l=a(67294),s=a(86010),i=a(51048),r=a(33609),o=a(1943),m=a(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:u,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,r.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.U)(),[v,w]=(0,l.useState)(N),D=[],{blockElementScrollPositionUntilNextRender:C}=(0,m.o5)();if(null!=u){const e=b[u];null!=e&&e!==v&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=D.indexOf(t),n=k[a].value;n!==v&&(C(t),w(n),null!=u&&y(u,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]??D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]??D[D.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},f)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>D.push(e),onKeyDown:S,onClick:x},i,{className:(0,s.Z)("tabs__item",c,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},8680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var n=a(83117),l=(a(67294),a(3905)),s=a(34259),i=a(18679);const r={sidebar_position:30,title:"MongoDB",slug:"/generated/ingestion/sources/mongodb",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md"},o="MongoDB",m={unversionedId:"docs/generated/ingestion/sources/mongodb",id:"docs/generated/ingestion/sources/mongodb",title:"MongoDB",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/mongodb.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mongodb",permalink:"/docs/next/generated/ingestion/sources/mongodb",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"MongoDB",slug:"/generated/ingestion/sources/mongodb",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md"},sidebar:"overviewSidebar",previous:{title:"Mode",permalink:"/docs/next/generated/ingestion/sources/mode"},next:{title:"MySQL",permalink:"/docs/next/generated/ingestion/sources/mysql"}},p={},c=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mongodb"},"MongoDB"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Databases and associated metadata"),(0,l.kt)("li",{parentName:"ul"},"Collections in each database and schemas for each collection (via schema inference)")),(0,l.kt)("p",null,"By default, schema inference samples 1,000 documents from each collection. Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaSamplingSize: null")," will scan the entire collection.\nMoreover, setting ",(0,l.kt)("inlineCode",{parentName:"p"},"useRandomSampling: False")," will sample the first documents found without random selection, which may be faster for large collections."),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaSamplingSize")," has no effect if ",(0,l.kt)("inlineCode",{parentName:"p"},"enableSchemaInference: False")," is set."),(0,l.kt)("p",null,"Really large schemas will be further truncated to a maximum of 300 schema fields. This is configurable using the ",(0,l.kt)("inlineCode",{parentName:"p"},"maxSchemaSize")," parameter."),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mongodb]'\n")),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "mongodb"\n  config:\n    # Coordinates\n    connect_uri: "mongodb://localhost"\n\n    # Credentials\n    username: admin\n    password: password\n    authMechanism: "DEFAULT"\n\n    # Options\n    enableSchemaInference: True\n    useRandomSampling: True\n    maxSchemaSize: 300\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("div",{className:"config-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"authMechanism"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB authentication mechanism.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB connection URI. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"mongodb://localhost")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"enableSchemaInference"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to infer schemas.  ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"maxDocumentSize"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"default-line "},"Default: ",(0,l.kt)("span",{className:"default-value"},"16793600")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"maxSchemaSize"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Maximum number of fields to include in the schema. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"300")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"options"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"object"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional options to pass to ",(0,l.kt)("inlineCode",{parentName:"td"},"pymongo.MongoClient()"),". ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"password"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"schemaSamplingSize"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of documents to use when inferring schema size. If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"0"),", all documents will be scanned. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"1000")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"useRandomSampling"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"If documents for schema inference should be randomly selected. If ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),", documents will be selected from start. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"username"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"env"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"PROD")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"collection_pattern"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"regex patterns for collections to filter in ingestion. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,l.kt)("span",{className:"path-main"},"allow"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,l.kt)("span",{className:"path-main"},"deny"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,l.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"database_pattern"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"regex patterns for databases to filter in ingestion. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"database_pattern."),(0,l.kt)("span",{className:"path-main"},"allow"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"database_pattern."),(0,l.kt)("span",{className:"path-main"},"deny"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"database_pattern."),(0,l.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))))))),(0,l.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MongoDBConfig",\n  "description": "Any source that produces dataset urns in a single environment should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "MongoDB connection URI.",\n      "default": "mongodb://localhost",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "MongoDB username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "MongoDB password.",\n      "type": "string"\n    },\n    "authMechanism": {\n      "title": "Authmechanism",\n      "description": "MongoDB authentication mechanism.",\n      "type": "string"\n    },\n    "options": {\n      "title": "Options",\n      "description": "Additional options to pass to `pymongo.MongoClient()`.",\n      "default": {},\n      "type": "object"\n    },\n    "enableSchemaInference": {\n      "title": "Enableschemainference",\n      "description": "Whether to infer schemas. ",\n      "default": true,\n      "type": "boolean"\n    },\n    "schemaSamplingSize": {\n      "title": "Schemasamplingsize",\n      "description": "Number of documents to use when inferring schema size. If set to `0`, all documents will be scanned.",\n      "default": 1000,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "useRandomSampling": {\n      "title": "Userandomsampling",\n      "description": "If documents for schema inference should be randomly selected. If `False`, documents will be selected from start.",\n      "default": true,\n      "type": "boolean"\n    },\n    "maxSchemaSize": {\n      "title": "Maxschemasize",\n      "description": "Maximum number of fields to include in the schema.",\n      "default": 300,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "maxDocumentSize": {\n      "title": "Maxdocumentsize",\n      "default": 16793600,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "database_pattern": {\n      "title": "Database Pattern",\n      "description": "regex patterns for databases to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "collection_pattern": {\n      "title": "Collection Pattern",\n      "description": "regex patterns for collections to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mongodb.MongoDBSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mongodb.py"},"GitHub"))),(0,l.kt)("h2",null,"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for MongoDB, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);