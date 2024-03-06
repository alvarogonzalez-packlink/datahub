"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[80210],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Metadata Change Log Event V1",slug:"/actions/events/metadata-change-log-event",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/events/metadata-change-log-event.md"},i="Metadata Change Log Event V1",s={unversionedId:"docs/actions/events/metadata-change-log-event",id:"docs/actions/events/metadata-change-log-event",title:"Metadata Change Log Event V1",description:"Event Type",source:"@site/genDocs/docs/actions/events/metadata-change-log-event.md",sourceDirName:"docs/actions/events",slug:"/actions/events/metadata-change-log-event",permalink:"/docs/next/actions/events/metadata-change-log-event",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/events/metadata-change-log-event.md",tags:[],version:"current",frontMatter:{title:"Metadata Change Log Event V1",slug:"/actions/events/metadata-change-log-event",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/events/metadata-change-log-event.md"},sidebar:"overviewSidebar",previous:{title:"Entity Change Event V1",permalink:"/docs/next/actions/events/entity-change-event"},next:{title:"Ingestion Executor",permalink:"/docs/next/actions/actions/executor"}},o={},d=[{value:"Event Type",id:"event-type",level:2},{value:"Overview",id:"overview",level:2},{value:"Event Structure",id:"event-structure",level:2},{value:"Sample Events",id:"sample-events",level:3},{value:"Tag Change Event",id:"tag-change-event",level:4},{value:"Glossary Term Change Event",id:"glossary-term-change-event",level:4},{value:"Owner Change Event",id:"owner-change-event",level:4},{value:"FAQ",id:"faq",level:2},{value:"Where can I find all the aspects and their schemas?",id:"where-can-i-find-all-the-aspects-and-their-schemas",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-change-log-event-v1"},"Metadata Change Log Event V1"),(0,r.kt)("h2",{id:"event-type"},"Event Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeLog_v1")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'This event is emitted when any aspect on DataHub Metadata Graph is changed. This includes creates, updates, and removals of both "versioned" aspects and "time-series" aspects.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Disclaimer: This event is quite powerful, but also quite low-level. Because it exposes the underlying metadata model directly, it is subject to more frequent structural and semantic changes than the higher level ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/actions/events/entity-change-event"},"Entity Change Event"),". We recommend using that event instead to achieve your use case when possible. ")),(0,r.kt)("h2",{id:"event-structure"},"Event Structure"),(0,r.kt)("p",null,"The fields include"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityUrn"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the Entity being changed. For example, a Dataset's urn."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the entity being changed. Supported values include dataset, chart, dashboard, dataFlow (Pipeline), dataJob (Task), domain, tag, glossaryTerm, corpGroup, & corpUser."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityKeyAspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The key struct of the entity that was changed. Only present if the Metadata Change Proposal contained the raw key struct."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The change type. UPSERT or DELETE are currently supported."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspectName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity aspect which was changed."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The new aspect value. Null if the aspect was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect.contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialization type of the aspect itself. The only supported value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect.value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized aspect. This is a JSON-serialized representing the aspect document originally defined in PDL. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin"},"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin")," for more."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousAspectValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The previous aspect value. Null if the aspect did not exist previously."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousAspectValue.contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialization type of the aspect itself. The only supported value is  ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json")),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousAspectValue.value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized aspect. This is a JSON-serialized representing the aspect document originally defined in PDL. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin"},"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin")," for more."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"systemMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The new system metadata. This includes the the ingestion run-id, model registry and more. For the full structure, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl"},"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl")),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousSystemMetadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The previous system metadata. This includes the the ingestion run-id, model registry and more. For the full structure, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl"},"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/mxe/SystemMetadata.pdl")),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Audit stamp about who triggered the Metadata Change and when."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created.time"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp in milliseconds when the aspect change occurred."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created.actor"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The URN of the actor (e.g. corpuser) that triggered the change."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"sample-events"},"Sample Events"),(0,r.kt)("h4",{id:"tag-change-event"},"Tag Change Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "container",\n    "entityUrn": "urn:li:container:DATABASE",\n    "entityKeyAspect": null,\n    "changeType": "UPSERT",\n    "aspectName": "globalTags",\n    "aspect": {\n        "value": "{\\"tags\\":[{\\"tag\\":\\"urn:li:tag:pii\\"}]}",\n        "contentType": "application/json"\n    },\n    "systemMetadata": {\n        "lastObserved": 1651516475595,\n        "runId": "no-run-id-provided",\n        "registryName": "unknownRegistry",\n        "registryVersion": "0.0.0.0-dev",\n        "properties": null\n    },\n    "previousAspectValue": null,\n    "previousSystemMetadata": null,\n    "created": {\n        "time": 1651516475594,\n        "actor": "urn:li:corpuser:datahub",\n        "impersonator": null\n    }\n}\n')),(0,r.kt)("h4",{id:"glossary-term-change-event"},"Glossary Term Change Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "dataset",\n    "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n    "entityKeyAspect": null,\n    "changeType": "UPSERT",\n    "aspectName": "glossaryTerms",\n    "aspect": {\n        "value": "{\\"auditStamp\\":{\\"actor\\":\\"urn:li:corpuser:datahub\\",\\"time\\":1651516599479},\\"terms\\":[{\\"urn\\":\\"urn:li:glossaryTerm:CustomerAccount\\"}]}",\n        "contentType": "application/json"\n    },\n    "systemMetadata": {\n        "lastObserved": 1651516599486,\n        "runId": "no-run-id-provided",\n        "registryName": "unknownRegistry",\n        "registryVersion": "0.0.0.0-dev",\n        "properties": null\n    },\n    "previousAspectValue": null,\n    "previousSystemMetadata": null,\n    "created": {\n        "time": 1651516599480,\n        "actor": "urn:li:corpuser:datahub",\n        "impersonator": null\n    }\n}\n')),(0,r.kt)("h4",{id:"owner-change-event"},"Owner Change Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "auditHeader": null,\n    "entityType": "dataset",\n    "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n    "entityKeyAspect": null,\n    "changeType": "UPSERT",\n    "aspectName": "ownership",\n    "aspect": {\n        "value": "{\\"owners\\":[{\\"type\\":\\"DATAOWNER\\",\\"owner\\":\\"urn:li:corpuser:datahub\\"}],\\"lastModified\\":{\\"actor\\":\\"urn:li:corpuser:datahub\\",\\"time\\":1651516640488}}",\n        "contentType": "application/json"\n    },\n    "systemMetadata": {\n        "lastObserved": 1651516640493,\n        "runId": "no-run-id-provided",\n        "registryName": "unknownRegistry",\n        "registryVersion": "0.0.0.0-dev",\n        "properties": null\n    },\n    "previousAspectValue": {\n        "value": "{\\"owners\\":[{\\"owner\\":\\"urn:li:corpuser:jdoe\\",\\"type\\":\\"DATAOWNER\\"},{\\"owner\\":\\"urn:li:corpuser:datahub\\",\\"type\\":\\"DATAOWNER\\"}],\\"lastModified\\":{\\"actor\\":\\"urn:li:corpuser:jdoe\\",\\"time\\":1581407189000}}",\n        "contentType": "application/json"\n    },\n    "previousSystemMetadata": {\n        "lastObserved": 1651516415088,\n        "runId": "file-2022_05_02-11_33_35",\n        "registryName": null,\n        "registryVersion": null,\n        "properties": null\n    },\n    "created": {\n        "time": 1651516640490,\n        "actor": "urn:li:corpuser:datahub",\n        "impersonator": null\n    }\n}\n')),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"where-can-i-find-all-the-aspects-and-their-schemas"},"Where can I find all the aspects and their schemas?"),(0,r.kt)("p",null,"Great Question! All MetadataChangeLog events are based on the Metadata Model which is comprised of Entities,\nAspects, and Relationships which make up an enterprise Metadata Graph. We recommend checking out the following\nresources to learn more about this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-modeling/metadata-model"},"Intro to Metadata Model"))),(0,r.kt)("p",null,"You can also find a comprehensive list of Entities + Aspects of the Metadata Model under the ",(0,r.kt)("strong",{parentName:"p"},"Metadata Modeling > Entities")," section of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/"},"official DataHub docs"),"."))}c.isMDXComponent=!0}}]);