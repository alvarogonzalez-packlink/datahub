"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),l=a(67294),r=a(86010),i=a(72957),s=a(16550),o=a(75238),u=a(33609),d=a(92560);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=o??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==s&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},41145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(73992),i=a(18679);const s={title:"DataHub Lite (Experimental)",sidebar_label:"Lite (Experimental)",slug:"/datahub_lite",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/datahub_lite.md"},o="DataHub Lite (Experimental)",u={unversionedId:"docs/datahub_lite",id:"version-0.12.1/docs/datahub_lite",title:"DataHub Lite (Experimental)",description:"What is it?",source:"@site/versioned_docs/version-0.12.1/docs/datahub_lite.md",sourceDirName:"docs",slug:"/datahub_lite",permalink:"/docs/0.12.1/datahub_lite",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/datahub_lite.md",tags:[],version:"0.12.1",frontMatter:{title:"DataHub Lite (Experimental)",sidebar_label:"Lite (Experimental)",slug:"/datahub_lite",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/datahub_lite.md"},sidebar:"overviewSidebar",previous:{title:"CLI",permalink:"/docs/0.12.1/cli"},next:{title:"Act on Metadata Overview",permalink:"/docs/0.12.1/act-on-metadata"}},d={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"What is it not?",id:"what-is-it-not",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Importing Metadata",id:"importing-metadata",level:2},{value:"Forwarding to a central DataHub GMS over REST or Kafka",id:"forwarding-to-a-central-datahub-gms-over-rest-or-kafka",level:3},{value:"Importing from a file",id:"importing-from-a-file",level:3},{value:"Exploring Metadata",id:"exploring-metadata",level:2},{value:"List (ls)",id:"list-ls",level:3},{value:"Read (get)",id:"read-get",level:3},{value:"Get metadata for an entity filtered by specific aspect",id:"get-metadata-for-an-entity-filtered-by-specific-aspect",level:4},{value:"Get metadata using the urn of the entity",id:"get-metadata-using-the-urn-of-the-entity",level:4},{value:"Point-in-time Queries",id:"point-in-time-queries",level:4},{value:"Search (search)",id:"search-search",level:3},{value:"List Urns (list-urns)",id:"list-urns-list-urns",level:3},{value:"HTTP Server (serve)",id:"http-server-serve",level:3},{value:"Server Configuration",id:"server-configuration",level:4},{value:"Admin Commands",id:"admin-commands",level:2},{value:"Export Metadata (export)",id:"export-metadata-export",level:3},{value:"Clear (nuke)",id:"clear-nuke",level:3},{value:"Use a different file (init)",id:"use-a-different-file-init",level:3},{value:"Reindex",id:"reindex",level:3},{value:"Caveat Emptor!",id:"caveat-emptor",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Tab Completion",id:"tab-completion",level:3},{value:"Option 1: Inline eval (easy, less performant)",id:"option-1-inline-eval-easy-less-performant",level:4},{value:"Option 2: External completion script (recommended, better performance)",id:"option-2-external-completion-script-recommended-better-performance",level:4}],c={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"datahub-lite-experimental"},"DataHub Lite (Experimental)"),(0,l.kt)("h2",{id:"what-is-it"},"What is it?"),(0,l.kt)("p",null,"DataHub Lite is a lightweight embeddable version of DataHub with no external dependencies. It is intended to enable local developer tooling use-cases such as simple access to metadata for scripts and other tools.\nDataHub Lite is compatible with the DataHub metadata format and all the ingestion connectors that DataHub supports.\nCurrently DataHub Lite uses DuckDB under the covers as its default storage layer, but that might change in the future."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Designed for the CLI"),(0,l.kt)("li",{parentName:"ul"},"Available as a Python library or REST API"),(0,l.kt)("li",{parentName:"ul"},"Ingest metadata from  all DataHub ingestion sources"),(0,l.kt)("li",{parentName:"ul"},"Metadata Reads",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"navigate metadata using a hierarchy"),(0,l.kt)("li",{parentName:"ul"},"get metadata for an entity"),(0,l.kt)("li",{parentName:"ul"},"search / query metadata across all entities"))),(0,l.kt)("li",{parentName:"ul"},"Forward metadata automatically to a central GMS or Kafka instance")),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lite/lite_architecture.png",alt:"architecture"})),(0,l.kt)("h2",{id:"what-is-it-not"},"What is it not?"),(0,l.kt)("p",null,"DataHub Lite is NOT meant to be a replacement for the production Java DataHub server (",(0,l.kt)("a",{parentName:"p",href:"/docs/0.12.1/architecture/metadata-serving"},"datahub-gms"),"). It does not offer the full set of API-s that the DataHub GMS server does.\nThe following features are ",(0,l.kt)("strong",{parentName:"p"},"NOT")," supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full-text search with ranking and relevance features"),(0,l.kt)("li",{parentName:"ul"},"Graph traversal of relationships (e.g. lineage)"),(0,l.kt)("li",{parentName:"ul"},"Metadata change stream over Kafka (only forwarding of writes is supported)"),(0,l.kt)("li",{parentName:"ul"},"GraphQL API")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To use ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub lite")," commands, you need to install ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/acryl-datahub/"},(0,l.kt)("inlineCode",{parentName:"a"},"acryl-datahub"))," > 0.9.6 (",(0,l.kt)("a",{parentName:"p",href:"/docs/0.12.1/cli#using-pip"},"install instructions"),") and the ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub-lite")," plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install acryl-datahub[datahub-lite]\n")),(0,l.kt)("h2",{id:"importing-metadata"},"Importing Metadata"),(0,l.kt)("p",null,"To ingest metadata into DataHub Lite, all you have to do is change the ",(0,l.kt)("inlineCode",{parentName:"p"},"sink:")," in your recipe to be a ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub-lite")," instance. See the detailed sink docs ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-ingestion/sink_docs/datahub#datahub-lite-experimental"},"here"),".\nFor example, here is a simple recipe file that ingests mysql metadata into datahub-lite."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# mysql.in.dhub.yaml\nsource:\n  type: mysql\n  config:\n    host_port: localhost:3306\n    username: datahub\n    password: datahub\n\nsink:\n  type: datahub-lite\n")),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"lite")," will create a local instance under ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.datahub/lite/"),"."),(0,l.kt)("p",null,"Ingesting metadata into DataHub Lite is as simple as running ingestion:\n",(0,l.kt)("inlineCode",{parentName:"p"},"datahub ingest -c mysql.in.dhub.yaml")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"DataHub Lite currently doesn't support stateful ingestion, so you'll have to turn off stateful ingestion in your recipe to use it. This will be fixed shortly.")),(0,l.kt)("h3",{id:"forwarding-to-a-central-datahub-gms-over-rest-or-kafka"},"Forwarding to a central DataHub GMS over REST or Kafka"),(0,l.kt)("p",null,"DataHub Lite can be configured to forward all writes to a central DataHub GMS using either the REST API or the Kafka API.\nTo configure forwarding, add a ",(0,l.kt)("strong",{parentName:"p"},"forward_to")," section to your DataHub Lite config that conforms to a valid DataHub Sink configuration. Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# mysql.in.dhub.yaml with forwarding to datahub-gms over REST\nsource:\n  type: mysql\n  config:\n    host_port: localhost:3306\n    username: datahub\n    password: datahub\n\nsink:\n  type: datahub-lite\n  config:\n    forward_to:\n      type: datahub-rest\n      config:\n        server: "http://datahub-gms:8080"\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Forwarding is currently best-effort, so there can be losses in metadata if the remote server is down. For a reliable sync mechanism, look at the ",(0,l.kt)("a",{parentName:"p",href:"#export-metadata-export"},"exporting metadata")," section to generate a standard metadata file.")),(0,l.kt)("h3",{id:"importing-from-a-file"},"Importing from a file"),(0,l.kt)("p",null,"As a convenient short-cut, you can import metadata from any standard DataHub metadata json file (e.g. generated via using a file sink) by issuing a ",(0,l.kt)("em",{parentName:"p"},"datahub lite import")," command. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite import --file metadata_events.json\n\n")),(0,l.kt)("h2",{id:"exploring-metadata"},"Exploring Metadata"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub lite")," group of commands provides a set of capabilities for you to explore the metadata you just ingested."),(0,l.kt)("h3",{id:"list-ls"},"List (ls)"),(0,l.kt)("p",null,"Listing functions like a directory structure that is customized based on the kind of system being explored. DataHub's metadata is automatically organized into databases, tables, views, dashboards, charts, etc."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")," command below is much more pleasant when you have tab completion enabled on your shell. Check out the ",(0,l.kt)("a",{parentName:"p",href:"#tab-completion"},"Setting up Tab Completion")," section at the bottom of the guide.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite ls /\ndatabases\nbi_tools\ntags\n# Stepping down one level\n> datahub lite ls /databases\nmysql\n# Stepping down another level\n> datahub lite ls /databases/mysql\ninstances\n...\n# At the final level\n> datahub lite ls /databases/mysql/instances/default/databases/datahub/tables/\nmetadata_aspect_v2\n\n# Listing a leaf entity functions just like the unix ls command\n> datahub lite ls /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2\nmetadata_aspect_v2\n")),(0,l.kt)("h3",{id:"read-get"},"Read (get)"),(0,l.kt)("p",null,"Once you have located a path of interest, you can read metadata at that entity, by issuing a ",(0,l.kt)("strong",{parentName:"p"},"get"),". You can additionally filter the metadata retrieved from an entity by the aspect type of the metadata (e.g. to request the schema, filter by the ",(0,l.kt)("strong",{parentName:"p"},"schemaMetadata")," aspect)."),(0,l.kt)("p",null,"Aside: If you are curious what all types of entities and aspects DataHub supports, check out the metadata model of entities like ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.12.1/generated/metamodel/entities/dataset"},"Dataset"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.12.1/generated/metamodel/entities/dashboard"},"Dashboard")," etc."),(0,l.kt)("p",null,"The general template for the get responses looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "urn": <urn_of_the_entity>,\n    <aspect_name>: {\n        "value": <aspect_value>,    # aspect value as a dictionary\n        "systemMetadata": <system_metadata> # present if details are requested\n    }\n}\n')),(0,l.kt)("p",null,"Here is what executing a ",(0,l.kt)("em",{parentName:"p"},"get")," command looks like:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Get metadata for an entity by path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --path /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "container": {\n    "value": {\n      "container": "urn:li:container:21d4204e13d5b984c58acad468ecdbdd"\n    }\n  },\n  "status": {\n    "value": {\n      "removed": false\n    }\n  },\n  "datasetProperties": {\n    "value": {\n      "customProperties": {},\n      "name": "metadata_aspect_v2",\n      "tags": []\n    }\n  },\n  "schemaMetadata": {\n    "value": {\n      "schemaName": "datahub.metadata_aspect_v2",\n      "platform": "urn:li:dataPlatform:mysql",\n      "version": 0,\n      "created": {\n        "time": 0,\n        "actor": "urn:li:corpuser:unknown"\n      },\n      "lastModified": {\n        "time": 0,\n        "actor": "urn:li:corpuser:unknown"\n      },\n      "hash": "",\n      "platformSchema": {\n        "com.linkedin.schema.MySqlDDL": {\n          "tableSchema": ""\n        }\n      },\n      "fields": [\n        {\n          "fieldPath": "urn",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=500)",\n          "recursive": false,\n          "isPartOfKey": true\n        },\n        {\n          "fieldPath": "aspect",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=200)",\n          "recursive": false,\n          "isPartOfKey": true\n        },\n        {\n          "fieldPath": "version",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.NumberType": {}\n            }\n          },\n          "nativeDataType": "BIGINT(display_width=20)",\n          "recursive": false,\n          "isPartOfKey": true\n        },\n        {\n          "fieldPath": "metadata",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "LONGTEXT(collation=\'utf8mb4_bin\')",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "systemmetadata",\n          "nullable": true,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "LONGTEXT(collation=\'utf8mb4_bin\')",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "createdon",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.TimeType": {}\n            }\n          },\n          "nativeDataType": "DATETIME(fsp=6)",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "createdby",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=255)",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "createdfor",\n          "nullable": true,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=255)",\n          "recursive": false,\n          "isPartOfKey": false\n        }\n      ]\n    }\n  },\n  "subTypes": {\n    "value": {\n      "typeNames": [\n        "table"\n      ]\n    }\n  }\n}\n'))),(0,l.kt)("h4",{id:"get-metadata-for-an-entity-filtered-by-specific-aspect"},"Get metadata for an entity filtered by specific aspect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --path /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2 --aspect status\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "value": {\n      "removed": false\n    }\n  }\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," command by path is much more pleasant when you have tab completion enabled on your shell. Check out the ",(0,l.kt)("a",{parentName:"p",href:"#tab-completion"},"Setting up Tab Completion")," section at the bottom of the guide.")),(0,l.kt)("h4",{id:"get-metadata-using-the-urn-of-the-entity"},"Get metadata using the urn of the entity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --urn "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)" --aspect status\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "value": {\n      "removed": false\n    }\n  }\n}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Get metadata with additional details (systemMetadata)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --path /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2 --aspect status --verbose\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "value": {\n      "removed": false\n    },\n    "systemMetadata": {\n      "lastObserved": 1673982834666,\n      "runId": "mysql-2023_01_17-11_13_12",\n      "properties": {\n        "sysVersion": 1\n      }\n    }\n  }\n}\n'))),(0,l.kt)("h4",{id:"point-in-time-queries"},"Point-in-time Queries"),(0,l.kt)("p",null,"DataHub Lite preserves every version of metadata ingested, just like DataHub GMS. You can also query the metadata as of a specific point in time by adding the ",(0,l.kt)("em",{parentName:"p"},"--asof")," parameter to your ",(0,l.kt)("em",{parentName:"p"},"get")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'> datahub lite get "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)" --aspect status --asof 2020-01-01\nnull\n\n> datahub lite get "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)" --aspect status --asof 2023-01-16\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "removed": false\n  }\n}\n')),(0,l.kt)("h3",{id:"search-search"},"Search (search)"),(0,l.kt)("p",null,"DataHub Lite also allows you to search using queries within the metadata using the ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub lite search"),' command.\nYou can provide a free form search query like: "customer" and DataHub Lite will attempt to find entities that match the name customer either in the id of the entity or within the name fields of aspects in the entities.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'> datahub lite search pet\n{"id": "urn:li:dataset:(urn:li:dataPlatform:looker,long_tail_companions.explore.long_tail_pets,PROD)", "aspect": "urn", "snippet": null}\n{"id": "urn:li:dataset:(urn:li:dataPlatform:looker,long_tail_companions.explore.long_tail_pets,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"looker.explore.label\\": \\"Long Tail Pets\\", \\"looker.explore.file\\": \\"long_tail_companions.model.lkml\\"}, \\"externalUrl\\": \\"https://acryl.cloud.looker.com/explore/long_tail_companions/long_tail_pets\\", \\"name\\": \\"Long Tail Pets\\", \\"tags\\": []}"}\n')),(0,l.kt)("p",null,"You can also query the metadata precisely using DuckDB's ",(0,l.kt)("a",{parentName:"p",href:"https://duckdb.org/docs/extensions/json.html"},"JSON")," extract functions.\nWriting these functions requires that you understand the DataHub metadata model and how the data is laid out in DataHub Lite."),(0,l.kt)("p",null,"For example, to find all entities whose ",(0,l.kt)("em",{parentName:"p"},"datasetProperties")," aspect includes the ",(0,l.kt)("em",{parentName:"p"},"view_definition")," in its ",(0,l.kt)("em",{parentName:"p"},"customProperties")," sub-field, we can issue the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite search --aspect datasetProperties --flavor exact \"metadata -> '$.customProperties' ->> '$.view_definition' IS NOT NULL\"\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"id": "urn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_MUTEXES,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"view_definition\\": \\"CREATE TEMPORARY TABLE `INNODB_MUTEXES` (\\\\n  `NAME` varchar(4000) NOT NULL DEFAULT \'\',\\\\n  `CREATE_FILE` varchar(4000) NOT NULL DEFAULT \'\',\\\\n  `CREATE_LINE` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `OS_WAITS` bigint(21) unsigned NOT NULL DEFAULT 0\\\\n) ENGINE=MEMORY DEFAULT CHARSET=utf8\\", \\"is_view\\": \\"True\\"}, \\"name\\": \\"INNODB_MUTEXES\\", \\"tags\\": []}"}\n{"id": "urn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.user_variables,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"view_definition\\": \\"CREATE TEMPORARY TABLE `user_variables` (\\\\n  `VARIABLE_NAME` varchar(64) NOT NULL DEFAULT \'\',\\\\n  `VARIABLE_VALUE` varchar(2048) DEFAULT NULL,\\\\n  `VARIABLE_TYPE` varchar(64) NOT NULL DEFAULT \'\',\\\\n  `CHARACTER_SET_NAME` varchar(32) DEFAULT NULL\\\\n) ENGINE=MEMORY DEFAULT CHARSET=utf8\\", \\"is_view\\": \\"True\\"}, \\"name\\": \\"user_variables\\", \\"tags\\": []}"}\n{"id": "urn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_TABLESPACES_ENCRYPTION,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"view_definition\\": \\"CREATE TEMPORARY TABLE `INNODB_TABLESPACES_ENCRYPTION` (\\\\n  `SPACE` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `NAME` varchar(655) DEFAULT NULL,\\\\n  `ENCRYPTION_SCHEME` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `KEYSERVER_REQUESTS` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `MIN_KEY_VERSION` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `CURRENT_KEY_VERSION` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `KEY_ROTATION_PAGE_NUMBER` bigint(21) unsigned DEFAULT NULL,\\\\n  `KEY_ROTATION_MAX_PAGE_NUMBER` bigint(21) unsigned DEFAULT NULL,\\\\n  `CURRENT_KEY_ID` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `ROTATING_OR_FLUSHING` int(1) NOT NULL DEFAULT 0\\\\n) ENGINE=MEMORY DEFAULT CHARSET=utf8\\", \\"is_view\\": \\"True\\"}, \\"name\\": \\"INNODB_TABLESPACES_ENCRYPTION\\", \\"tags\\": []}"}\n')),(0,l.kt)("p",null,"Search will return results that include the ",(0,l.kt)("em",{parentName:"p"},"id")," of the entity that matched along with the ",(0,l.kt)("em",{parentName:"p"},"aspect")," and the content of the aspect as part of the ",(0,l.kt)("em",{parentName:"p"},"snippet")," field. If you just want the ",(0,l.kt)("em",{parentName:"p"},"id")," of the entity to be returned, use the ",(0,l.kt)("em",{parentName:"p"},"--no-details")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite search --aspect datasetProperties --flavor exact \"metadata -> '$.customProperties' ->> '$.view_definition' IS NOT NULL\" --no-details\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_SYS_FOREIGN,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_CMPMEM_RESET,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_FT_DEFAULT_STOPWORD,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_SYS_TABLES,PROD)\n...\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_SYS_COLUMNS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_FT_CONFIG,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.USER_STATISTICS,PROD)\n")),(0,l.kt)("h3",{id:"list-urns-list-urns"},"List Urns (list-urns)"),(0,l.kt)("p",null,"List all the ids in the DataHub Lite instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite list-urns\nurn:li:container:21d4204e13d5b984c58acad468ecdbdd\nurn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)\n\nurn:li:container:aa82e8309ce84acc350640647a54ca3b\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.ALL_PLUGINS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.APPLICABLE_ROLES,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.CHARACTER_SETS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.CHECK_CONSTRAINTS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.COLLATIONS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.COLLATION_CHARACTER_SET_APPLICABILITY,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.COLUMNS,PROD)\n...\n\n")),(0,l.kt)("h3",{id:"http-server-serve"},"HTTP Server (serve)"),(0,l.kt)("p",null,"DataHub Lite can be run as a lightweight HTTP server, exposing an OpenAPI spec over FastAPI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite serve\nINFO:     Started server process [33364]\nINFO:     Waiting for application startup.\nINFO:     Application startup complete.\nINFO:     Uvicorn running on http://127.0.0.1:8979 (Press CTRL+C to quit)\n")),(0,l.kt)("p",null,"OpenAPI docs are available via your browser at the same port: http://localhost:8979"),(0,l.kt)("p",null,"The server exposes similar commands as the ",(0,l.kt)("strong",{parentName:"p"},"lite")," cli commands over HTTP:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"entities: list of all entity ids and get metadata for an entity"),(0,l.kt)("li",{parentName:"ul"},"browse: traverse the entity hierarchy in a path based way"),(0,l.kt)("li",{parentName:"ul"},"search: execute search against the metadata")),(0,l.kt)("h4",{id:"server-configuration"},"Server Configuration"),(0,l.kt)("p",null,"Configuration for the server is picked up from the standard location for the ",(0,l.kt)("strong",{parentName:"p"},"datahub")," cli: ",(0,l.kt)("strong",{parentName:"p"},"~/.datahubenv")," and can be created using ",(0,l.kt)("strong",{parentName:"p"},"datahub lite init"),"."),(0,l.kt)("p",null,"Here is a sample config file with the ",(0,l.kt)("strong",{parentName:"p"},"lite")," section filled out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"gms:\n  server: http://localhost:8080\n  token: ''\nlite:\n  config:\n    file: /Users/<username>/.datahub/lite/datahub.duckdb\n  type: duckdb\n  forward_to:\n    type: datahub-rest\n    server: \"http://datahub-gms:8080\n")),(0,l.kt)("h2",{id:"admin-commands"},"Admin Commands"),(0,l.kt)("h3",{id:"export-metadata-export"},"Export Metadata (export)"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"export")," command allows you to export the contents of DataHub Lite into a metadata events file that you can then send to another DataHub instance (e.g. over REST)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite export --file datahub_lite_export.json\nSuccessfully exported 1785 events to datahub_lite_export.json\n")),(0,l.kt)("h3",{id:"clear-nuke"},"Clear (nuke)"),(0,l.kt)("p",null,"If you want to clear your DataHub lite instance, you can just issue the ",(0,l.kt)("inlineCode",{parentName:"p"},"nuke")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite nuke\nDataHub Lite destroyed at <path>\n")),(0,l.kt)("h3",{id:"use-a-different-file-init"},"Use a different file (init)"),(0,l.kt)("p",null,"By default, DataHub Lite will create and use a local duckdb instance located at ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.datahub/lite/datahub.duckdb"),".\nIf you want to use a different location, you can configure it using the ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub lite init")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> datahub lite init --type duckdb --file my_local_datahub.duckdb\nWill replace datahub lite config type='duckdb' config={'file': '/Users/<username>/.datahub/lite/datahub.duckdb', 'options': {}} with type='duckdb' config={'file': 'my_local_datahub.duckdb', 'options': {}} [y/N]: y\nDataHub Lite inited at my_local_datahub.duckdb\n")),(0,l.kt)("h3",{id:"reindex"},"Reindex"),(0,l.kt)("p",null,"DataHub Lite maintains a few derived tables to make access possible via both the native id (urn) as well as the logical path of the entity. The ",(0,l.kt)("inlineCode",{parentName:"p"},"reindex")," command recomputes these indexes."),(0,l.kt)("h2",{id:"caveat-emptor"},"Caveat Emptor!"),(0,l.kt)("p",null,"DataHub Lite is a very new project. Do not use it for production use-cases. The API-s and storage formats are subject to change and we get feedback from early adopters. That said, we are really interested in accepting PR-s and suggestions for improvements to this fledgling project."),(0,l.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("h3",{id:"tab-completion"},"Tab Completion"),(0,l.kt)("p",null,"Using the datahub lite commands like ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," is much more pleasant when you have tab completion enabled on your shell. Tab completion is supported on the command line through the ",(0,l.kt)("a",{parentName:"p",href:"https://click.palletsprojects.com/en/8.1.x/shell-completion/"},"Click Shell completion")," module.\nTo set up shell completion for your shell, follow the instructions below based on your shell variant:"),(0,l.kt)("h4",{id:"option-1-inline-eval-easy-less-performant"},"Option 1: Inline eval (easy, less performant)"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"zsh",label:"Zsh",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Add this to ~/.zshrc:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'eval "$(_DATAHUB_COMPLETE=zsh_source datahub)"\n'))),(0,l.kt)(i.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,l.kt)("p",null,"Add this to ~/.bashrc:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'eval "$(_DATAHUB_COMPLETE=bash_source datahub)"\n')))),(0,l.kt)("h4",{id:"option-2-external-completion-script-recommended-better-performance"},"Option 2: External completion script (recommended, better performance)"),(0,l.kt)("p",null,"Using eval means that the command is invoked and evaluated every time a shell is started, which can delay shell responsiveness. To speed it up, write the generated script to a file, then source that."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"zsh",label:"Zsh",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Save the script somewhere."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# the additional sed patches completion to be path oriented and not add spaces between each completed token\n_DATAHUB_COMPLETE=zsh_source datahub | sed 's;compadd;compadd -S /;' > ~/.datahub-complete.zsh\n")),(0,l.kt)("p",null,"Source the file in ~/.zshrc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},". ~/.datahub-complete.zsh\n"))),(0,l.kt)(i.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"_DATAHUB_COMPLETE=bash_source datahub > ~/.datahub-complete.bash\n")),(0,l.kt)("p",null,"Source the file in ~/.bashrc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},". ~/.datahub-complete.bash\n"))),(0,l.kt)(i.Z,{value:"fish",label:"Fish",mdxType:"TabItem"},(0,l.kt)("p",null,"Save the script to ~/.config/fish/completions/datahub.fish:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"_DATAHUB_COMPLETE=fish_source datahub > ~/.config/fish/completions/datahub.fish\n")))))}h.isMDXComponent=!0}}]);