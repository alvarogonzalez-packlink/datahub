"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43467],{8289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905),i=a(51715),l=a(7626);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const p={sidebar_position:33,title:"MongoDB",slug:"/generated/ingestion/sources/mongodb",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md"},m="MongoDB",d={unversionedId:"docs/generated/ingestion/sources/mongodb",id:"docs/generated/ingestion/sources/mongodb",title:"MongoDB",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/mongodb.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mongodb",permalink:"/docs/next/generated/ingestion/sources/mongodb",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,title:"MongoDB",slug:"/generated/ingestion/sources/mongodb",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md"},sidebar:"overviewSidebar",previous:{title:"Mode",permalink:"/docs/next/generated/ingestion/sources/mode"},next:{title:"MySQL",permalink:"/docs/next/generated/ingestion/sources/mysql"}},c={},u=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],f={toc:u},k="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(k,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}({},f,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mongodb"},"MongoDB"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,n.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Capability"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/next/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Optionally enabled via ",(0,n.kt)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/next/platform-instances"},"Platform Instance")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,n.kt)("p",null,"This plugin extracts the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Databases and associated metadata"),(0,n.kt)("li",{parentName:"ul"},"Collections in each database and schemas for each collection (via schema inference)")),(0,n.kt)("p",null,"By default, schema inference samples 1,000 documents from each collection. Setting ",(0,n.kt)("inlineCode",{parentName:"p"},"schemaSamplingSize: null")," will scan the entire collection.\nMoreover, setting ",(0,n.kt)("inlineCode",{parentName:"p"},"useRandomSampling: False")," will sample the first documents found without random selection, which may be faster for large collections."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"schemaSamplingSize")," has no effect if ",(0,n.kt)("inlineCode",{parentName:"p"},"enableSchemaInference: False")," is set."),(0,n.kt)("p",null,"Really large schemas will be further truncated to a maximum of 300 schema fields. This is configurable using the ",(0,n.kt)("inlineCode",{parentName:"p"},"maxSchemaSize")," parameter."),(0,n.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mongodb]'\n")),(0,n.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "mongodb"\n  config:\n    # Coordinates\n    connect_uri: "mongodb://localhost"\n\n    # Credentials\n    username: admin\n    password: password\n    authMechanism: "DEFAULT"\n\n    # Options\n    enableSchemaInference: True\n    useRandomSampling: True\n    maxSchemaSize: 300\n\nsink:\n  # sink configs\n')),(0,n.kt)("h3",{id:"config-details"},"Config Details"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Note that a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.kt)("div",{className:"config-table"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"authMechanism"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"MongoDB authentication mechanism.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"MongoDB connection URI. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"mongodb://localhost")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"enableSchemaInference"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to infer schemas.  ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"hostingEnvironment"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"Enum"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hosting environment of MongoDB, default is SELF_HOSTED, currently support ",(0,n.kt)("inlineCode",{parentName:"td"},"SELF_HOSTED"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ATLAS"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"AWS_DOCUMENTDB")," ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"SELF","_","HOSTED")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"maxDocumentSize"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"integer"))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"default-line "},"Default: ",(0,n.kt)("span",{className:"default-value"},"16793600")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"maxSchemaSize"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"integer"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum number of fields to include in the schema. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"300")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"options"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"object"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Additional options to pass to ",(0,n.kt)("inlineCode",{parentName:"td"},"pymongo.MongoClient()"),". ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"{","}")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"password"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"MongoDB password.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"schemaSamplingSize"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"integer"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of documents to use when inferring schema size. If set to ",(0,n.kt)("inlineCode",{parentName:"td"},"null"),", all documents will be scanned. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"1000")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"useRandomSampling"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"If documents for schema inference should be randomly selected. If ",(0,n.kt)("inlineCode",{parentName:"td"},"False"),", documents will be selected from start. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"username"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"MongoDB username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"env"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"PROD")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"collection_pattern"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"regex patterns for collections to filter in ingestion. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,n.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,n.kt)("span",{className:"path-main"},"allow"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"array"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"collection_pattern.allow."),(0,n.kt)("span",{className:"path-main"},"string"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,n.kt)("span",{className:"path-main"},"deny"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"array"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"[","]")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"collection_pattern.deny."),(0,n.kt)("span",{className:"path-main"},"string"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"database_pattern"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"regex patterns for databases to filter in ingestion. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"database_pattern."),(0,n.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"database_pattern."),(0,n.kt)("span",{className:"path-main"},"allow"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"array"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"database_pattern.allow."),(0,n.kt)("span",{className:"path-main"},"string"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"database_pattern."),(0,n.kt)("span",{className:"path-main"},"deny"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"array"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"[","]")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"database_pattern.deny."),(0,n.kt)("span",{className:"path-main"},"string"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.kt)("span",{className:"path-main"},"enabled"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if datahub-rest sink is used or if a ",(0,n.kt)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"False")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))))))),(0,n.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MongoDBConfig",\n  "description": "Any source that connects to a platform should inherit this class",\n  "type": "object",\n  "properties": {\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "MongoDB connection URI.",\n      "default": "mongodb://localhost",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "MongoDB username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "MongoDB password.",\n      "type": "string"\n    },\n    "authMechanism": {\n      "title": "Authmechanism",\n      "description": "MongoDB authentication mechanism.",\n      "type": "string"\n    },\n    "options": {\n      "title": "Options",\n      "description": "Additional options to pass to `pymongo.MongoClient()`.",\n      "default": {},\n      "type": "object"\n    },\n    "enableSchemaInference": {\n      "title": "Enableschemainference",\n      "description": "Whether to infer schemas. ",\n      "default": true,\n      "type": "boolean"\n    },\n    "schemaSamplingSize": {\n      "title": "Schemasamplingsize",\n      "description": "Number of documents to use when inferring schema size. If set to `null`, all documents will be scanned.",\n      "default": 1000,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "useRandomSampling": {\n      "title": "Userandomsampling",\n      "description": "If documents for schema inference should be randomly selected. If `False`, documents will be selected from start.",\n      "default": true,\n      "type": "boolean"\n    },\n    "maxSchemaSize": {\n      "title": "Maxschemasize",\n      "description": "Maximum number of fields to include in the schema.",\n      "default": 300,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "maxDocumentSize": {\n      "title": "Maxdocumentsize",\n      "default": 16793600,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "hostingEnvironment": {\n      "description": "Hosting environment of MongoDB, default is SELF_HOSTED, currently support `SELF_HOSTED`, `ATLAS`, `AWS_DOCUMENTDB`",\n      "default": "SELF_HOSTED",\n      "allOf": [\n        {\n          "$ref": "#/definitions/HostingEnvironment"\n        }\n      ]\n    },\n    "database_pattern": {\n      "title": "Database Pattern",\n      "description": "regex patterns for databases to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "collection_pattern": {\n      "title": "Collection Pattern",\n      "description": "regex patterns for collections to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if datahub-rest sink is used or if a `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "HostingEnvironment": {\n      "title": "HostingEnvironment",\n      "description": "An enumeration.",\n      "enum": [\n        "SELF_HOSTED",\n        "ATLAS",\n        "AWS_DOCUMENTDB"\n      ]\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Class Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mongodb.MongoDBSource")),(0,n.kt)("li",{parentName:"ul"},"Browse on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mongodb.py"},"GitHub"))),(0,n.kt)("h2",null,"Questions"),(0,n.kt)("p",null,"If you've got any questions on configuring ingestion for MongoDB, feel free to ping us on ",(0,n.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}g.isMDXComponent=!0}}]);