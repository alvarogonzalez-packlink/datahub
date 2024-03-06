"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,c=m["".concat(o,".").concat(h)]||m[h]||u[h]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},69112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Metadata Events",slug:"/what/mxe",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/mxe.md"},i="Metadata Events",s={unversionedId:"docs/what/mxe",id:"version-0.12.1/docs/what/mxe",title:"Metadata Events",description:"DataHub makes use a few important Kafka events for operation. The most notable of these include",source:"@site/versioned_docs/version-0.12.1/docs/what/mxe.md",sourceDirName:"docs/what",slug:"/what/mxe",permalink:"/docs/0.12.1/what/mxe",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/mxe.md",tags:[],version:"0.12.1",frontMatter:{title:"Metadata Events",slug:"/what/mxe",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/mxe.md"},sidebar:"overviewSidebar",previous:{title:"Extending the Metadata Model",permalink:"/docs/0.12.1/metadata-modeling/extending-the-metadata-model"},next:{title:"Data Platform",permalink:"/docs/0.12.1/generated/metamodel/entities/dataplatform"}},o={},p=[{value:"Metadata Change Proposal (MCP)",id:"metadata-change-proposal-mcp",level:2},{value:"Emission",id:"emission",level:3},{value:"Consumption",id:"consumption",level:3},{value:"Schema",id:"schema",level:3},{value:"Examples",id:"examples",level:3},{value:"Metadata Change Log (MCL)",id:"metadata-change-log-mcl",level:2},{value:"Emission",id:"emission-1",level:3},{value:"Consumption",id:"consumption-1",level:3},{value:"Schema",id:"schema-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Platform Event (PE)",id:"platform-event-pe",level:2},{value:"Types",id:"types",level:3},{value:"Emission",id:"emission-2",level:3},{value:"Consumption",id:"consumption-2",level:3},{value:"Schema",id:"schema-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Failed Metadata Change Proposal (FMCP)",id:"failed-metadata-change-proposal-fmcp",level:2},{value:"Emission",id:"emission-3",level:3},{value:"Consumption",id:"consumption-3",level:3},{value:"Schema",id:"schema-3",level:3},{value:"Metadata Change Event (MCE)",id:"metadata-change-event-mce",level:2},{value:"Emission",id:"emission-4",level:3},{value:"Consumption",id:"consumption-4",level:3},{value:"Schema",id:"schema-4",level:3},{value:"Examples",id:"examples-3",level:3},{value:"Metadata Audit Event (MAE)",id:"metadata-audit-event-mae",level:2},{value:"Emission",id:"emission-5",level:3},{value:"Consumption",id:"consumption-5",level:3},{value:"Schema",id:"schema-5",level:3},{value:"Examples",id:"examples-4",level:3},{value:"Failed Metadata Change Event (FMCE)",id:"failed-metadata-change-event-fmce",level:2},{value:"Emission",id:"emission-6",level:3},{value:"Consumption",id:"consumption-6",level:3},{value:"Schema",id:"schema-6",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-events"},"Metadata Events"),(0,r.kt)("p",null,"DataHub makes use a few important Kafka events for operation. The most notable of these include"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Metadata Change Proposal"),(0,r.kt)("li",{parentName:"ol"},"Metadata Change Log (Versioned + Timeseries) "),(0,r.kt)("li",{parentName:"ol"},"Platform Event")),(0,r.kt)("p",null,"Each event is originally authored using ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"PDL"),", a modeling language developed by LinkedIn, and\nthen converted into their Avro equivalents, which are used when writing and reading the events to Kafka. "),(0,r.kt)("p",null,"In the document, we'll describe each of these events in detail - including notes about their structure & semantics. "),(0,r.kt)("h2",{id:"metadata-change-proposal-mcp"},"Metadata Change Proposal (MCP)"),(0,r.kt)("p",null,"A Metadata Change Proposal represents a request to change to a specific ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/aspect"},"aspect")," on an enterprise's Metadata\nGraph. Each MCP provides a new value for a given aspect. For example, a single MCP can\nbe emitted to change ownership or documentation or domains or deprecation status for a data asset."),(0,r.kt)("h3",{id:"emission"},"Emission"),(0,r.kt)("p",null,"MCPs may be emitted by clients of DataHub's low-level ingestion APIs (e.g. ingestion sources)\nduring the process of metadata ingestion. The DataHub Python API exposes an interface for\neasily sending MCPs into DataHub. "),(0,r.kt)("p",null,"The default Kafka topic name for MCPs is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeProposal_v1"),"."),(0,r.kt)("h3",{id:"consumption"},"Consumption"),(0,r.kt)("p",null,"DataHub's storage layer actively listens for new Metadata Change Proposals, attempts\nto apply the requested change to the Metadata Graph. "),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityUrn"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the Entity being changed. For example, a Dataset's urn."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the entity the new aspect is associated with. This corresponds to the entity name in the DataHub Entity Registry, for example 'dataset'."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityKeyAspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The key struct of the entity that was changed. Only present if the Metadata Change Proposal contained the raw key struct."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The change type. CREATE, UPSERT and DELETE are currently supported."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspectName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity aspect which was changed."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The new aspect value. Null if the aspect was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect.contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialization type of the aspect itself. The only supported value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect.value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized aspect. This is a JSON-serialized representing the aspect document originally defined in PDL. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin"},"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin")," for more."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"systemMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The new system metadata. This includes the the ingestion run-id, model registry and more. For the full structure, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl"},"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl")),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"The PDL schema can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/MetadataChangeProposal.pdl"},"here"),". "),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"An MCP representing a request to update the 'ownership' aspect for a particular Dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityType": "dataset",\n  "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n  "changeType": "UPSERT",\n  "aspectName": "ownership",\n  "aspect": {\n    "value": "{\\"owners\\":[{\\"type\\":\\"DATAOWNER\\",\\"owner\\":\\"urn:li:corpuser:datahub\\"}],\\"lastModified\\":{\\"actor\\":\\"urn:li:corpuser:datahub\\",\\"time\\":1651516640488}}",\n    "contentType": "application/json"\n  },\n  "systemMetadata": {\n    "lastObserved": 1651516640493,\n    "runId": "no-run-id-provided",\n    "registryName": "unknownRegistry",\n    "registryVersion": "0.0.0.0-dev",\n    "properties": null\n  }\n}\n')),(0,r.kt)("p",null,'Note how the aspect payload is serialized as JSON inside the "value" field. The exact structure\nof the aspect is determined by its PDL schema. (For example, the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Ownership.pdl"},"ownership")," schema)"),(0,r.kt)("h2",{id:"metadata-change-log-mcl"},"Metadata Change Log (MCL)"),(0,r.kt)("p",null,"A Metadata Change Log represents ",(0,r.kt)("em",{parentName:"p"},"any")," change which has been made to the Metadata Graph.\nMetadata Change Log events are emitted to Kafka immediately after writing the change\nthe durable storage. "),(0,r.kt)("p",null,"There are 2 flavors of Metadata Change Log: ",(0,r.kt)("em",{parentName:"p"},"versioned")," and ",(0,r.kt)("em",{parentName:"p"},"timeseries"),". These correspond to the type\nof aspects which were updated for a given change. ",(0,r.kt)("strong",{parentName:"p"},"Versioned"),' aspects are those\nwhich represent the "latest" state of some attributes, for example the most recent owners of an asset\nor its documentation. ',(0,r.kt)("strong",{parentName:"p"},"Timeseries")," aspects are those which represent events related to an asset\nthat occurred at a particular time, for example profiling of a Dataset. "),(0,r.kt)("h3",{id:"emission-1"},"Emission"),(0,r.kt)("p",null,"MCLs are emitted when ",(0,r.kt)("em",{parentName:"p"},"any")," change is made to an entity on the DataHub Metadata Graph, this includes\nwriting to any aspect of an entity. "),(0,r.kt)("p",null,"Two distinct topics are maintained for Metadata Change Log. The default Kafka topic name for ",(0,r.kt)("strong",{parentName:"p"},"versioned")," aspects is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeLog_Versioned_v1")," and for\n",(0,r.kt)("strong",{parentName:"p"},"timeseries")," aspects is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeLog_Timeseries_v1"),"."),(0,r.kt)("h3",{id:"consumption-1"},"Consumption"),(0,r.kt)("p",null,"DataHub ships with a Kafka Consumer Job (mae-consumer-job) which listens for MCLs and uses them to update DataHub's search and graph indices,\nas well as to generate derived Platform Events (described below). "),(0,r.kt)("p",null,"In addition, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions"},"Actions Framework")," consumes Metadata Change Logs to power its ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions/events/metadata-change-log-event"},"Metadata Change Log")," event API."),(0,r.kt)("h3",{id:"schema-1"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityUrn"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the Entity being changed. For example, a Dataset's urn."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the entity the new aspect is associated with. This corresponds to the entity name in the DataHub Entity Registry, for example 'dataset'."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityKeyAspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The key struct of the entity that was changed. Only present if the Metadata Change Proposal contained the raw key struct."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The change type. CREATE, UPSERT and DELETE are currently supported."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspectName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity aspect which was changed."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The new aspect value. Null if the aspect was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect.contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialization type of the aspect itself. The only supported value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect.value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized aspect. This is a JSON-serialized representing the aspect document originally defined in PDL. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin"},"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin")," for more."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousAspectValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The previous aspect value. Null if the aspect did not exist previously."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousAspectValue.contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialization type of the aspect itself. The only supported value is  ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json")),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousAspectValue.value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized aspect. This is a JSON-serialized representing the aspect document originally defined in PDL. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin"},"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin")," for more."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"systemMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The new system metadata. This includes the the ingestion run-id, model registry and more. For the full structure, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl"},"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl")),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousSystemMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The previous system metadata. This includes the the ingestion run-id, model registry and more. For the full structure, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl"},"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl")),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Audit stamp about who triggered the Metadata Change and when."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created.time"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp in milliseconds when the aspect change occurred."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created.actor"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The URN of the actor (e.g. corpuser) that triggered the change."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The PDL schema for can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/MetadataChangeLog.pdl"},"here"),"."),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"An MCL corresponding to a change in the 'ownership' aspect for a particular Dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "dataset",\n    "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n    "changeType": "UPSERT",\n    "aspectName": "ownership",\n    "aspect": {\n        "value": "{\\"owners\\":[{\\"type\\":\\"DATAOWNER\\",\\"owner\\":\\"urn:li:corpuser:datahub\\"}],\\"lastModified\\":{\\"actor\\":\\"urn:li:corpuser:datahub\\",\\"time\\":1651516640488}}",\n        "contentType": "application/json"\n    },\n    "previousAspectValue": {\n        "value": "{\\"owners\\":[{\\"owner\\":\\"urn:li:corpuser:jdoe\\",\\"type\\":\\"DATAOWNER\\"},{\\"owner\\":\\"urn:li:corpuser:datahub\\",\\"type\\":\\"DATAOWNER\\"}],\\"lastModified\\":{\\"actor\\":\\"urn:li:corpuser:jdoe\\",\\"time\\":1581407189000}}",\n        "contentType": "application/json"\n    },\n    "systemMetadata": {\n        "lastObserved": 1651516640493,\n        "runId": "no-run-id-provided",\n        "registryName": "unknownRegistry",\n        "registryVersion": "0.0.0.0-dev",\n        "properties": null\n    },\n    "previousSystemMetadata": {\n        "lastObserved": 1651516415088,\n        "runId": "file-2022_05_02-11_33_35",\n        "registryName": null,\n        "registryVersion": null,\n        "properties": null\n    },\n    "created": {\n        "time": 1651516640490,\n        "actor": "urn:li:corpuser:datahub",\n        "impersonator": null\n    }\n}\n')),(0,r.kt)("p",null,'Note how the aspect payload is serialized as JSON inside the "value" field. The exact structure\nof the aspect is determined by its PDL schema. (For example, the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Ownership.pdl"},"ownership")," schema)"),(0,r.kt)("h2",{id:"platform-event-pe"},"Platform Event (PE)"),(0,r.kt)("p",null,"A Platform Event represents an arbitrary business-logic event emitted by DataHub. Each\nPlatform Event has a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," which determines its contents."),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entity Change Event")," (entityChangeEvent): The most important Platform Event is named ",(0,r.kt)("strong",{parentName:"li"},"Entity Change Event"),", and represents a log of semantic changes\n(tag addition, removal, deprecation change, etc) that have occurred on DataHub. It is used an important\ncomponent of the DataHub Actions Framework. ")),(0,r.kt)("p",null,"All registered Platform Event types are declared inside the DataHub Entity Registry (",(0,r.kt)("inlineCode",{parentName:"p"},"entity-registry.yml"),"). "),(0,r.kt)("h3",{id:"emission-2"},"Emission"),(0,r.kt)("p",null,"All Platform Events are generated by DataHub itself during normal operation. "),(0,r.kt)("p",null,"PEs are extremely dynamic - they can contain arbitrary payloads depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". Thus,\ncan be emitted in a variety of circumstances. "),(0,r.kt)("p",null,"The default Kafka topic name for all Platform Events is ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformEvent_v1"),"."),(0,r.kt)("h3",{id:"consumption-2"},"Consumption"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions"},"Actions Framework")," consumes Platform Events to power its ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions/events/entity-change-event"},"Entity Change Event")," API."),(0,r.kt)("h3",{id:"schema-2"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Header fields"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header.timestampMillis"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"The time at which the event was generated."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name / type of the event."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The event itself."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload.contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialization type of the event payload. The only supported value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload.value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized payload. This is a JSON-serialized representing the payload document originally defined in PDL. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin"},"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin")," for more."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,"The full PDL schema can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/PlatformEvent.pdl"},"here"),"."),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("p",null,"An example of an 'Entity Change Event' Platform Event that is emitted when a new owner is added to a Dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "header": {\n    "timestampMillis": 1655390732551\n  },\n  "name": "entityChangeEvent",\n  "payload": {\n    "value": "{\\"entityUrn\\":\\"urn:li:dataset:abc\\",\\"entityType\\":\\"dataset\\",\\"category\\":\\"OWNER\\",\\"operation\\":\\"ADD\\",\\"modifier\\":\\"urn:li:corpuser:jdoe\\",\\"parameters\\":{\\"ownerUrn\\":\\"urn:li:corpuser:jdoe\\",\\"ownerType\\":\\"BUSINESS_OWNER\\"},\\"auditStamp\\":{\\"actor\\":\\"urn:li:corpuser:jdoe\\",\\"time\\":1649953100653}}",\n    "contentType": "application/json"\n}\n')),(0,r.kt)("p",null,"Note how the actual payload for the event is serialized as JSON inside the 'payload' field. The exact\nstructure of the Platform Event is determined by its PDL schema. (For example, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/platform/event/v1/EntityChangeEvent.pdl"},"Entity Change Event")," schema)"),(0,r.kt)("h2",{id:"failed-metadata-change-proposal-fmcp"},"Failed Metadata Change Proposal (FMCP)"),(0,r.kt)("p",null,"When a Metadata Change Proposal cannot be processed successfully, the event is written to a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dead_letter_queue"},"dead letter queue"),"\nin an event called Failed Metadata Change Proposal (FMCP)."),(0,r.kt)("p",null,"The event simply wraps the original Metadata Change Proposal and an error message, which contains the reason for rejection.\nThis event can be used for debugging any potential ingestion issues, as well as for re-playing any previous rejected proposal if necessary."),(0,r.kt)("h3",{id:"emission-3"},"Emission"),(0,r.kt)("p",null,"FMCEs are emitted when MCEs cannot be successfully committed to DataHub's storage layer."),(0,r.kt)("p",null,"The default Kafka topic name for FMCPs is ",(0,r.kt)("inlineCode",{parentName:"p"},"FailedMetadataChangeProposal_v1"),"."),(0,r.kt)("h3",{id:"consumption-3"},"Consumption"),(0,r.kt)("p",null,"No active consumers."),(0,r.kt)("h3",{id:"schema-3"},"Schema"),(0,r.kt)("p",null,"The PDL schema can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/FailedMetadataChangeProposal.pdl"},"here"),"."),(0,r.kt)("h1",{id:"deprecated-events"},"Deprecated Events"),(0,r.kt)("p",null,"DataHub ships with a set of deprecated events, which were historically used for proposing and logging\nchanges to the Metadata Graph. "),(0,r.kt)("p",null,"Each event in this category was deprecated due to its inflexibility - namely the fact that\nthe schemas had to be updated when a new aspect was introduced. These events have since been replaced\nby the more flexible events described above (Metadata Change Proposal, Metadata Change Log). "),(0,r.kt)("p",null,"It is not recommended to build dependencies on deprecated events."),(0,r.kt)("h2",{id:"metadata-change-event-mce"},"Metadata Change Event (MCE)"),(0,r.kt)("p",null,"A Metadata Change Event represents a request to change multiple aspects for the same entity.\nIt leverages a deprecated concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot"),", which is a strongly-typed list of aspects for the same\nentity. "),(0,r.kt)("p",null,'A MCE is a "proposal" for a set of metadata changes, as opposed to ',(0,r.kt)("a",{parentName:"p",href:"#metadata-audit-event-mae"},"MAE"),", which is conveying a committed change.\nConsequently, only successfully accepted and processed MCEs will lead to the emission of a corresponding MAE / MCLs."),(0,r.kt)("h3",{id:"emission-4"},"Emission"),(0,r.kt)("p",null,"MCEs may be emitted by clients of DataHub's low-level ingestion APIs (e.g. ingestion sources)\nduring the process of metadata ingestion."),(0,r.kt)("p",null,"The default Kafka topic name for MCEs is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent_v4"),"."),(0,r.kt)("h3",{id:"consumption-4"},"Consumption"),(0,r.kt)("p",null,"DataHub's storage layer actively listens for new Metadata Change Events, attempts\nto apply the requested changes to the Metadata Graph."),(0,r.kt)("h3",{id:"schema-4"},"Schema"),(0,r.kt)("p",null,"The PDL schema can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/MetadataChangeEvent.pdl"},"here"),"."),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)("p",null,"An example of an MCE emitted to change the 'ownership' aspect for an Entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proposedSnapshot": {\n    "com.linkedin.pegasus2avro.metadata.snapshot.DatasetSnapshot": {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n      "aspects": [\n        {\n          "com.linkedin.pegasus2avro.common.Ownership": {\n            "owners": [\n              {\n                "owner": "urn:li:corpuser:jdoe",\n                "type": "DATAOWNER",\n                "source": null\n              },\n              {\n                "owner": "urn:li:corpuser:datahub",\n                "type": "DATAOWNER",\n                "source": null\n              }\n            ],\n            "lastModified": {\n              "time": 1581407189000,\n              "actor": "urn:li:corpuser:jdoe",\n              "impersonator": null\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"metadata-audit-event-mae"},"Metadata Audit Event (MAE)"),(0,r.kt)("p",null,"A Metadata Audit Event captures changes made to one or multiple metadata ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/aspect"},"aspects")," associated with a particular ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/entity"},"entity"),", in the form of a metadata ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/snapshot"},"snapshot")," (deprecated) before the change, and a metadata snapshot after the change."),(0,r.kt)("p",null,'Every source-of-truth for a particular metadata aspect is expected to emit a MAE whenever a change is committed to that aspect. By ensuring that, any listener of MAE will be able to construct a complete view of the latest state for all aspects.\nFurthermore, because each MAE contains the "after image", any mistake made in emitting the MAE can be easily mitigated by emitting a follow-up MAE with the correction. By the same token, the initial bootstrap problem for any newly added entity can also be solved by emitting a MAE containing all the latest metadata aspects associated with that entity.'),(0,r.kt)("h3",{id:"emission-5"},"Emission"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: In recent versions of DataHub (mid 2022), MAEs are no longer actively emitted, and will soon be completely removed from DataHub.\nUse Metadata Change Log instead. ")),(0,r.kt)("p",null,"MAEs are emitted once any metadata change has been successfully committed into DataHub's storage\nlayer. "),(0,r.kt)("p",null,"The default Kafka topic name for MAEs is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent_v4"),"."),(0,r.kt)("h3",{id:"consumption-5"},"Consumption"),(0,r.kt)("p",null,"No active consumers."),(0,r.kt)("h3",{id:"schema-5"},"Schema"),(0,r.kt)("p",null,"The PDL schema can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/MetadataAuditEvent.pdl"},"here"),". "),(0,r.kt)("h3",{id:"examples-4"},"Examples"),(0,r.kt)("p",null,"An example of an MAE emitted representing a change made to the 'ownership' aspect for an Entity (owner removed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "oldSnapshot": {\n    "com.linkedin.pegasus2avro.metadata.snapshot.DatasetSnapshot": {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n      "aspects": [\n        {\n          "com.linkedin.pegasus2avro.common.Ownership": {\n            "owners": [\n              {\n                "owner": "urn:li:corpuser:jdoe",\n                "type": "DATAOWNER",\n                "source": null\n              },\n              {\n                "owner": "urn:li:corpuser:datahub",\n                "type": "DATAOWNER",\n                "source": null\n              }\n            ],\n            "lastModified": {\n              "time": 1581407189000,\n              "actor": "urn:li:corpuser:jdoe",\n              "impersonator": null\n            }\n          }\n        }\n      ]\n    }\n  },\n  "newSnapshot": {\n    "com.linkedin.pegasus2avro.metadata.snapshot.DatasetSnapshot": {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n      "aspects": [\n        {\n          "com.linkedin.pegasus2avro.common.Ownership": {\n            "owners": [\n              {\n                "owner": "urn:li:corpuser:datahub",\n                "type": "DATAOWNER",\n                "source": null\n              }\n            ],\n            "lastModified": {\n              "time": 1581407189000,\n              "actor": "urn:li:corpuser:jdoe",\n              "impersonator": null\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"failed-metadata-change-event-fmce"},"Failed Metadata Change Event (FMCE)"),(0,r.kt)("p",null,"When a Metadata Change Event cannot be processed successfully, the event is written to a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dead_letter_queue"},"dead letter queue")," in an event called Failed Metadata Change Event (FMCE)."),(0,r.kt)("p",null,"The event simply wraps the original Metadata Change Event and an error message, which contains the reason for rejection.\nThis event can be used for debugging any potential ingestion issues, as well as for re-playing any previous rejected proposal if necessary."),(0,r.kt)("h3",{id:"emission-6"},"Emission"),(0,r.kt)("p",null,"FMCEs are emitted when MCEs cannot be successfully committed to DataHub's storage layer."),(0,r.kt)("h3",{id:"consumption-6"},"Consumption"),(0,r.kt)("p",null,"No active consumers."),(0,r.kt)("h3",{id:"schema-6"},"Schema"),(0,r.kt)("p",null,"The PDL schema can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/FailedMetadataChangeEvent.pdl"},"here"),"."),(0,r.kt)("p",null,"The default Kafka topic name for FMCEs is ",(0,r.kt)("inlineCode",{parentName:"p"},"FailedMetadataChangeEvent_v4"),"."))}u.isMDXComponent=!0}}]);