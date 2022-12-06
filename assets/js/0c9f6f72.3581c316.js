"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8456],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:n,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},e)}},34259:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(51048),i=n(33609),s=n(1943),c=n(72957);const p="tabList__CuJ",u="tabItem_LNqP";function d(t){var e,n;const{lazy:o,block:d,defaultValue:m,values:g,groupId:k,className:f}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),N=(0,i.l)(h,((t,e)=>t.value===e.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(e=null!=m?m:null==(n=b.find((t=>t.props.default)))?void 0:n.props.value)?e:b[0].props.value;if(null!==y&&!h.some((t=>t.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:C}=(0,s.U)(),[_,w]=(0,r.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:D}=(0,c.o5)();if(null!=k){const t=v[k];null!=t&&t!==_&&h.some((e=>e.value===t))&&w(t)}const O=t=>{const e=t.currentTarget,n=P.indexOf(e),a=h[n].value;a!==_&&(D(e),w(a),null!=k&&C(k,String(a)))},T=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var a;const e=P.indexOf(t.currentTarget)+1;n=null!=(a=P[e])?a:P[0];break}case"ArrowLeft":{var r;const e=P.indexOf(t.currentTarget)-1;n=null!=(r=P[e])?r:P[P.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},h.map((t=>{let{value:e,label:n,attributes:o}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>P.push(t),onKeyDown:T,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===e})}),null!=n?n:e)}))),o?(0,r.cloneElement)(b.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function m(t){const e=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(e)},t))}},63584:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),o=n(18679);const i={title:"Kafka Connect",slug:"/generated/ingestion/sources/kafka-connect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka-connect.md"},s="Kafka Connect",c={unversionedId:"docs/generated/ingestion/sources/kafka-connect",id:"docs/generated/ingestion/sources/kafka-connect",title:"Kafka Connect",description:"Module kafka-connect",source:"@site/genDocs/docs/generated/ingestion/sources/kafka-connect.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/kafka-connect",permalink:"/docs/generated/ingestion/sources/kafka-connect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka-connect.md",tags:[],version:"current",frontMatter:{title:"Kafka Connect",slug:"/generated/ingestion/sources/kafka-connect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka-connect.md"},sidebar:"overviewSidebar",previous:{title:"Iceberg",permalink:"/docs/generated/ingestion/sources/iceberg"},next:{title:"Kafka",permalink:"/docs/generated/ingestion/sources/kafka"}},p={},u=[{value:"Module <code>kafka-connect</code>",id:"module-kafka-connect",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],d={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka-connect"},"Kafka Connect"),(0,r.kt)("h2",{id:"module-kafka-connect"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"kafka-connect")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kafka Connect connector as individual ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFlowSnapshotClass")," entity"),(0,r.kt)("li",{parentName:"ul"},"Creating individual ",(0,r.kt)("inlineCode",{parentName:"li"},"DataJobSnapshotClass")," entity using ",(0,r.kt)("inlineCode",{parentName:"li"},"{connector_name}:{source_dataset}")," naming"),(0,r.kt)("li",{parentName:"ul"},"Lineage information between source database to Kafka topic")),(0,r.kt)("p",null,"Current limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"works only for",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JDBC, Debezium, and Mongo source connectors"),(0,r.kt)("li",{parentName:"ul"},"Generic connectors with user-defined lineage graph"),(0,r.kt)("li",{parentName:"ul"},"BigQuery sink connector")))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[kafka-connect]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "kafka-connect"\n  config:\n    # Coordinates\n    connect_uri: "http://localhost:8083"\n    cluster_name: "connect-cluster"\n    provided_configs:\n      - provider: env\n        path_key: MYSQL_CONNECTION_URL\n        value: jdbc:mysql://test_mysql:3306/librarydb\n    # Optional mapping of platform types to instance ids\n    platform_instance_map:   # optional\n      mysql: test_mysql      # optional\n    connect_to_platform_map: # optional\n      postgres-connector-finance-db:     # optional - Connector name\n        postgres: core_finance_instance  # optional - Platform to instance map\n    # Credentials\n    username: admin\n    password: password\n\nsink:\n  # sink configs\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_instance_map"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform instance mapping to use when constructing URNs. e.g.",(0,r.kt)("inlineCode",{parentName:"td"},'platform_instance_map: { "hive": "warehouse" }')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect_uri"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to connect to."),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8083/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka Connect username."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka Connect password."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cluster_name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster to ingest from."),(0,r.kt)("td",{parentName:"tr",align:null},"connect-cluster")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"construct_lineage_workunits"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to create the input and output Dataset entities"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provided_configs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Provided Configurations"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect_to_platform_map"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform instance mapping when multiple instances for a platform is available. Entry for a platform should be in either ",(0,r.kt)("inlineCode",{parentName:"td"},"platform_instance_map")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"connect_to_platform_map"),". e.g.",(0,r.kt)("inlineCode",{parentName:"td"},'connect_to_platform_map: { "postgres-connector-finance-db": "postgres": "core_finance_instance" }')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generic_connectors"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide lineage graph for sources connectors other than Confluent JDBC Source Connector, Debezium Source Connector, and Mongo Source Connector"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector_patterns"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"regex patterns for connectors to filter for ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector_patterns.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector_patterns.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector_patterns.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "KafkaConnectSourceConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "Platform instance mapping to use when constructing URNs. e.g.`platform_instance_map: { \\"hive\\": \\"warehouse\\" }`",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "URI to connect to.",\n      "default": "http://localhost:8083/",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Kafka Connect username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Kafka Connect password.",\n      "type": "string"\n    },\n    "cluster_name": {\n      "title": "Cluster Name",\n      "description": "Cluster to ingest from.",\n      "default": "connect-cluster",\n      "type": "string"\n    },\n    "construct_lineage_workunits": {\n      "title": "Construct Lineage Workunits",\n      "description": "Whether to create the input and output Dataset entities",\n      "default": true,\n      "type": "boolean"\n    },\n    "connector_patterns": {\n      "title": "Connector Patterns",\n      "description": "regex patterns for connectors to filter for ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "provided_configs": {\n      "title": "Provided Configs",\n      "description": "Provided Configurations",\n      "type": "array",\n      "items": {\n        "$ref": "#/definitions/ProvidedConfig"\n      }\n    },\n    "connect_to_platform_map": {\n      "title": "Connect To Platform Map",\n      "description": "Platform instance mapping when multiple instances for a platform is available. Entry for a platform should be in either `platform_instance_map` or `connect_to_platform_map`. e.g.`connect_to_platform_map: { \\"postgres-connector-finance-db\\": \\"postgres\\": \\"core_finance_instance\\" }`",\n      "type": "object"\n    },\n    "generic_connectors": {\n      "title": "Generic Connectors",\n      "description": "Provide lineage graph for sources connectors other than Confluent JDBC Source Connector, Debezium Source Connector, and Mongo Source Connector",\n      "default": [],\n      "type": "array",\n      "items": {\n        "$ref": "#/definitions/GenericConnectorConfig"\n      }\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "ProvidedConfig": {\n      "title": "ProvidedConfig",\n      "type": "object",\n      "properties": {\n        "provider": {\n          "title": "Provider",\n          "type": "string"\n        },\n        "path_key": {\n          "title": "Path Key",\n          "type": "string"\n        },\n        "value": {\n          "title": "Value",\n          "type": "string"\n        }\n      },\n      "required": [\n        "provider",\n        "path_key",\n        "value"\n      ],\n      "additionalProperties": false\n    },\n    "GenericConnectorConfig": {\n      "title": "GenericConnectorConfig",\n      "type": "object",\n      "properties": {\n        "connector_name": {\n          "title": "Connector Name",\n          "type": "string"\n        },\n        "source_dataset": {\n          "title": "Source Dataset",\n          "type": "string"\n        },\n        "source_platform": {\n          "title": "Source Platform",\n          "type": "string"\n        }\n      },\n      "required": [\n        "connector_name",\n        "source_dataset",\n        "source_platform"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.kafka_connect.KafkaConnectSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/kafka_connect.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Kafka Connect, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);