"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),i=n(86010),l=n(72957),s=n(16550),o=n(75238),c=n(33609),p=n(92560);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,c]=f({queryString:n,groupId:a}),[m,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=o??m;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,i]),tabValues:i}}var g=n(51048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(m(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:d},l,{className:(0,i.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},22560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(73992),l=n(18679);const s={sidebar_position:24,title:"Kafka Connect",slug:"/generated/ingestion/sources/kafka-connect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka-connect.md"},o="Kafka Connect",c={unversionedId:"docs/generated/ingestion/sources/kafka-connect",id:"version-0.12.0/docs/generated/ingestion/sources/kafka-connect",title:"Kafka Connect",description:"Integration Details",source:"@site/versioned_docs/version-0.12.0/docs/generated/ingestion/sources/kafka-connect.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/kafka-connect",permalink:"/docs/generated/ingestion/sources/kafka-connect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka-connect.md",tags:[],version:"0.12.0",sidebarPosition:24,frontMatter:{sidebar_position:24,title:"Kafka Connect",slug:"/generated/ingestion/sources/kafka-connect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka-connect.md"},sidebar:"overviewSidebar",previous:{title:"Kafka",permalink:"/docs/generated/ingestion/sources/kafka"},next:{title:"LDAP",permalink:"/docs/generated/ingestion/sources/ldap"}},p={},m=[{value:"Integration Details",id:"integration-details",level:2},{value:"Concept Mapping",id:"concept-mapping",level:3},{value:"Current limitations",id:"current-limitations",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Advanced Configurations",id:"advanced-configurations",level:2},{value:"Working with Platform Instances",id:"working-with-platform-instances",level:3},{value:"Example - Multiple MySQL Source Connectors each reading from different mysql instance",id:"example---multiple-mysql-source-connectors-each-reading-from-different-mysql-instance",level:4},{value:"Example - Multiple MySQL Source Connectors each reading from difference mysql instance and writing to different kafka cluster",id:"example---multiple-mysql-source-connectors-each-reading-from-difference-mysql-instance-and-writing-to-different-kafka-cluster",level:4},{value:"Example - Multiple BigQuery Sink Connectors each writing to different kafka cluster",id:"example---multiple-bigquery-sink-connectors-each-writing-to-different-kafka-cluster",level:4},{value:"Provided Configurations from External Sources",id:"provided-configurations-from-external-sources",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],d={toc:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka-connect"},"Kafka Connect"),(0,r.kt)("h2",{id:"integration-details"},"Integration Details"),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source and Sink Connectors in Kafka Connect as Data Pipelines"),(0,r.kt)("li",{parentName:"ul"},"For Source connectors - Data Jobs to represent lineage information between source dataset to Kafka topic per ",(0,r.kt)("inlineCode",{parentName:"li"},"{connector_name}:{source_dataset}")," combination"),(0,r.kt)("li",{parentName:"ul"},"For Sink connectors - Data Jobs to represent lineage information between Kafka topic to destination dataset per ",(0,r.kt)("inlineCode",{parentName:"li"},"{connector_name}:{topic}")," combination")),(0,r.kt)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,r.kt)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"kafka-connect"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataplatform/"},"Data Platform")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kafka.apache.org/documentation/#connect_connectorsandtasks"},"Connector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataflow/"},"DataFlow")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kafka Topic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset/"},"Dataset")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,r.kt)("p",null,"Works only for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source connectors: JDBC, Debezium, Mongo and Generic connectors with user-defined lineage graph"),(0,r.kt)("li",{parentName:"ul"},"Sink connectors: BigQuery, Confluent S3, Snowflake\n",(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"}))),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[kafka-connect]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "kafka-connect"\n  config:\n    # Coordinates\n    connect_uri: "http://localhost:8083"\n\n    # Credentials\n    username: admin\n    password: password\n\n    # Optional\n    # Platform instance mapping to use when constructing URNs.\n    # Use if single instance of platform is referred across connectors.\n    platform_instance_map:\n      mysql: mysql_platform_instance\n\nsink:\n  # sink configs\n\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("div",{className:"config-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"cluster_name"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cluster to ingest from. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"connect-cluster")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"connect_to_platform_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"map(str,map)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"URI to connect to. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"http://localhost:8083/")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"convert_lineage_urns_to_lowercase"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to convert the urns of ingested lineage dataset to lowercase ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"False")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"password"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kafka Connect password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"platform_instance_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"map(str,string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"username"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kafka Connect username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"env"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"PROD")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"connector_patterns"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"regex patterns for connectors to filter for ingestion. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"connector_patterns."),(0,r.kt)("span",{className:"path-main"},"allow"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"array(string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"connector_patterns."),(0,r.kt)("span",{className:"path-main"},"deny"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"array(string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"connector_patterns."),(0,r.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"True")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"generic_connectors"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"array(object)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"generic_connectors."),(0,r.kt)("span",{className:"path-main"},"connector_name"),"\xa0",(0,r.kt)("abbr",{title:"Required if generic_connectors is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"generic_connectors."),(0,r.kt)("span",{className:"path-main"},"source_dataset"),"\xa0",(0,r.kt)("abbr",{title:"Required if generic_connectors is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"generic_connectors."),(0,r.kt)("span",{className:"path-main"},"source_platform"),"\xa0",(0,r.kt)("abbr",{title:"Required if generic_connectors is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"provided_configs"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"array(object)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"provided_configs."),(0,r.kt)("span",{className:"path-main"},"path_key"),"\xa0",(0,r.kt)("abbr",{title:"Required if provided_configs is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"provided_configs."),(0,r.kt)("span",{className:"path-main"},"provider"),"\xa0",(0,r.kt)("abbr",{title:"Required if provided_configs is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"provided_configs."),(0,r.kt)("span",{className:"path-main"},"value"),"\xa0",(0,r.kt)("abbr",{title:"Required if provided_configs is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,r.kt)("span",{className:"path-main"},"enabled"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"False")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,r.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"True")))))))),(0,r.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "KafkaConnectSourceConfig",\n  "description": "Any source that connects to a platform should inherit this class",\n  "type": "object",\n  "properties": {\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "Platform instance mapping to use when constructing URNs. e.g.`platform_instance_map: { \\"hive\\": \\"warehouse\\" }`",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "URI to connect to.",\n      "default": "http://localhost:8083/",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Kafka Connect username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Kafka Connect password.",\n      "type": "string"\n    },\n    "cluster_name": {\n      "title": "Cluster Name",\n      "description": "Cluster to ingest from.",\n      "default": "connect-cluster",\n      "type": "string"\n    },\n    "convert_lineage_urns_to_lowercase": {\n      "title": "Convert Lineage Urns To Lowercase",\n      "description": "Whether to convert the urns of ingested lineage dataset to lowercase",\n      "default": false,\n      "type": "boolean"\n    },\n    "connector_patterns": {\n      "title": "Connector Patterns",\n      "description": "regex patterns for connectors to filter for ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "provided_configs": {\n      "title": "Provided Configs",\n      "description": "Provided Configurations",\n      "type": "array",\n      "items": {\n        "$ref": "#/definitions/ProvidedConfig"\n      }\n    },\n    "connect_to_platform_map": {\n      "title": "Connect To Platform Map",\n      "description": "Platform instance mapping when multiple instances for a platform is available. Entry for a platform should be in either `platform_instance_map` or `connect_to_platform_map`. e.g.`connect_to_platform_map: { \\"postgres-connector-finance-db\\": \\"postgres\\": \\"core_finance_instance\\" }`",\n      "type": "object",\n      "additionalProperties": {\n        "type": "object",\n        "additionalProperties": {\n          "type": "string"\n        }\n      }\n    },\n    "generic_connectors": {\n      "title": "Generic Connectors",\n      "description": "Provide lineage graph for sources connectors other than Confluent JDBC Source Connector, Debezium Source Connector, and Mongo Source Connector",\n      "default": [],\n      "type": "array",\n      "items": {\n        "$ref": "#/definitions/GenericConnectorConfig"\n      }\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "ProvidedConfig": {\n      "title": "ProvidedConfig",\n      "type": "object",\n      "properties": {\n        "provider": {\n          "title": "Provider",\n          "type": "string"\n        },\n        "path_key": {\n          "title": "Path Key",\n          "type": "string"\n        },\n        "value": {\n          "title": "Value",\n          "type": "string"\n        }\n      },\n      "required": [\n        "provider",\n        "path_key",\n        "value"\n      ],\n      "additionalProperties": false\n    },\n    "GenericConnectorConfig": {\n      "title": "GenericConnectorConfig",\n      "type": "object",\n      "properties": {\n        "connector_name": {\n          "title": "Connector Name",\n          "type": "string"\n        },\n        "source_dataset": {\n          "title": "Source Dataset",\n          "type": "string"\n        },\n        "source_platform": {\n          "title": "Source Platform",\n          "type": "string"\n        }\n      },\n      "required": [\n        "connector_name",\n        "source_dataset",\n        "source_platform"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("h2",{id:"advanced-configurations"},"Advanced Configurations"),(0,r.kt)("h3",{id:"working-with-platform-instances"},"Working with Platform Instances"),(0,r.kt)("p",null,"If you've multiple instances of kafka OR source/sink systems that are referred in your ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-connect")," setup, you'd need to configure platform instance for these systems in ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-connect")," recipe to generate correct lineage edges. You must have already set ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance")," in recipes of original source/sink systems. Refer the document ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-instances"},"Working with Platform Instances")," to understand more about this."),(0,r.kt)("p",null,"There are two options available to declare source/sink system's ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-connect")," recipe. If single instance of platform is used across all ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-connect")," connectors, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance_map")," to specify platform_instance to use for a platform when constructing URNs for lineage."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    # Map of platform name to platform instance\n    platform_instance_map:\n      snowflake: snowflake_platform_instance\n      mysql: mysql_platform_instance\n\n")),(0,r.kt)("p",null,"If multiple instances of platform are used across ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-connect")," connectors, you'd need to specify platform_instance to use for platform for every connector."),(0,r.kt)("h4",{id:"example---multiple-mysql-source-connectors-each-reading-from-different-mysql-instance"},"Example - Multiple MySQL Source Connectors each reading from different mysql instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    # Map of platform name to platform instance per connector\n    connect_to_platform_map:\n      mysql_connector1: \n        mysql: mysql_instance1 \n\n      mysql_connector2:\n        mysql: mysql_instance2\n")),(0,r.kt)("p",null,"Here mysql_connector1 and mysql_connector2 are names of MySQL source connectors as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-connect")," connector config."),(0,r.kt)("h4",{id:"example---multiple-mysql-source-connectors-each-reading-from-difference-mysql-instance-and-writing-to-different-kafka-cluster"},"Example - Multiple MySQL Source Connectors each reading from difference mysql instance and writing to different kafka cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    connect_to_platform_map:\n      mysql_connector1:\n        mysql: mysql_instance1\n        kafka: kafka_instance1\n\n      mysql_connector2:\n        mysql: mysql_instance2\n        kafka: kafka_instance2\n")),(0,r.kt)("p",null,"You can also use combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance_map")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"connect_to_platform_map")," in your recipe. Note that, the platform_instance specified for the connector in ",(0,r.kt)("inlineCode",{parentName:"p"},"connect_to_platform_map")," will always take higher precedance even if platform_instance for same platform is set in ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance_map"),"."),(0,r.kt)("p",null,"If you do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance")," in original source/sink recipes, you do not need to specify them in above configurations."),(0,r.kt)("p",null,"Note that, you do not need to specify platform_instance for BigQuery."),(0,r.kt)("h4",{id:"example---multiple-bigquery-sink-connectors-each-writing-to-different-kafka-cluster"},"Example - Multiple BigQuery Sink Connectors each writing to different kafka cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    connect_to_platform_map:\n      bigquery_connector1:\n        kafka: kafka_instance1\n\n      bigquery_connector2:\n        kafka: kafka_instance2\n")),(0,r.kt)("h3",{id:"provided-configurations-from-external-sources"},"Provided Configurations from External Sources"),(0,r.kt)("p",null,"Kafka Connect supports pluggable configuration providers which can load configuration data from external sources at runtime. These values are not available to DataHub ingestion source through Kafka Connect APIs. If you are using such provided configurations to specify connection url (database, etc) in Kafka Connect connector configuration then you will need also add these in ",(0,r.kt)("inlineCode",{parentName:"p"},"provided_configs")," section in recipe for DataHub to generate correct lineage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"    # Optional mapping of provider configurations if using\n    provided_configs:\n      - provider: env\n        path_key: MYSQL_CONNECTION_URL\n        value: jdbc:mysql://test_mysql:3306/librarydb\n")),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.kafka_connect.KafkaConnectSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/kafka_connect.py"},"GitHub"))),(0,r.kt)("h2",null,"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Kafka Connect, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);