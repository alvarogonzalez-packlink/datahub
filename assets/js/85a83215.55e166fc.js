"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[72120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:41,title:"DataHubExecutionRequest",slug:"/generated/metamodel/entities/datahubexecutionrequest",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubExecutionRequest.md"},i="DataHubExecutionRequest",u={unversionedId:"docs/generated/metamodel/entities/dataHubExecutionRequest",id:"version-0.13.0/docs/generated/metamodel/entities/dataHubExecutionRequest",title:"DataHubExecutionRequest",description:"Aspects",source:"@site/versioned_docs/version-0.13.0/docs/generated/metamodel/entities/dataHubExecutionRequest.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubexecutionrequest",permalink:"/docs/generated/metamodel/entities/datahubexecutionrequest",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubExecutionRequest.md",tags:[],version:"0.13.0",sidebarPosition:41,frontMatter:{sidebar_position:41,title:"DataHubExecutionRequest",slug:"/generated/metamodel/entities/datahubexecutionrequest",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubExecutionRequest.md"},sidebar:"overviewSidebar",previous:{title:"DataHubSecret",permalink:"/docs/generated/metamodel/entities/datahubsecret"},next:{title:"DataHubRetention",permalink:"/docs/generated/metamodel/entities/datahubretention"}},s={},c=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubExecutionRequestInput",id:"datahubexecutionrequestinput",level:3},{value:"dataHubExecutionRequestSignal",id:"datahubexecutionrequestsignal",level:3},{value:"dataHubExecutionRequestResult",id:"datahubexecutionrequestresult",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],l={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubexecutionrequest"},"DataHubExecutionRequest"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubexecutionrequestinput"},"dataHubExecutionRequestInput"),(0,o.kt)("p",null,"An request to execution some remote logic or action.\nTODO: Determine who is responsible for emitting execution request success or failure. Executor?"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubExecutionRequestInput"\n  },\n  "name": "ExecutionRequestInput",\n  "namespace": "com.linkedin.execution",\n  "fields": [\n    {\n      "type": "string",\n      "name": "task",\n      "doc": "The name of the task to execute, for example RUN_INGEST"\n    },\n    {\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "args",\n      "doc": "Arguments provided to the task"\n    },\n    {\n      "type": "string",\n      "name": "executorId",\n      "doc": "Advanced: specify a specific executor to route the request to. If none is provided, a \\"default\\" executor is used."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "ExecutionRequestSource",\n        "namespace": "com.linkedin.execution",\n        "fields": [\n          {\n            "type": "string",\n            "name": "type",\n            "doc": "The type of the execution request source, e.g. INGESTION_SOURCE"\n          },\n          {\n            "Relationship": {\n              "entityTypes": [\n                "dataHubIngestionSource"\n              ],\n              "name": "ingestionSource"\n            },\n            "Searchable": {\n              "fieldName": "ingestionSource",\n              "fieldType": "KEYWORD",\n              "queryByDefault": false\n            },\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "ingestionSource",\n            "default": null,\n            "doc": "The urn of the ingestion source associated with the ingestion request. Present if type is INGESTION_SOURCE"\n          }\n        ]\n      },\n      "name": "source",\n      "doc": "Source which created the execution request"\n    },\n    {\n      "Searchable": {\n        "fieldName": "requestTimeMs",\n        "fieldType": "COUNT",\n        "queryByDefault": false\n      },\n      "type": "long",\n      "name": "requestedAt",\n      "doc": "Time at which the execution request input was created"\n    }\n  ],\n  "doc": "An request to execution some remote logic or action.\\nTODO: Determine who is responsible for emitting execution request success or failure. Executor?"\n}\n'))),(0,o.kt)("h3",{id:"datahubexecutionrequestsignal"},"dataHubExecutionRequestSignal"),(0,o.kt)("p",null,"An signal sent to a running execution request"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubExecutionRequestSignal"\n  },\n  "name": "ExecutionRequestSignal",\n  "namespace": "com.linkedin.execution",\n  "fields": [\n    {\n      "type": "string",\n      "name": "signal",\n      "doc": "The signal to issue, e.g. KILL"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "executorId",\n      "default": null,\n      "doc": "Advanced: specify a specific executor to route the request to. If none is provided, a \\"default\\" executor is used."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "createdAt",\n      "doc": "Audit Stamp"\n    }\n  ],\n  "doc": "An signal sent to a running execution request"\n}\n'))),(0,o.kt)("h3",{id:"datahubexecutionrequestresult"},"dataHubExecutionRequestResult"),(0,o.kt)("p",null,"The result of an execution request"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubExecutionRequestResult"\n  },\n  "name": "ExecutionRequestResult",\n  "namespace": "com.linkedin.execution",\n  "fields": [\n    {\n      "type": "string",\n      "name": "status",\n      "doc": "The status of the execution request"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "report",\n      "default": null,\n      "doc": "The pretty-printed execution report."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "StructuredExecutionReport",\n          "namespace": "com.linkedin.execution",\n          "fields": [\n            {\n              "type": "string",\n              "name": "type",\n              "doc": "The type of the structured report. (e.g. INGESTION_REPORT, TEST_CONNECTION_REPORT, etc.)"\n            },\n            {\n              "type": "string",\n              "name": "serializedValue",\n              "doc": "The serialized value of the structured report"\n            },\n            {\n              "type": "string",\n              "name": "contentType",\n              "doc": "The content-type of the serialized value (e.g. application/json, application/json;gzip etc.)"\n            }\n          ],\n          "doc": "A flexible carrier for structured results of an execution request.\\nThe goal is to allow for free flow of structured responses from execution tasks to the orchestrator or observer.\\nThe full spectrum of different execution report types is not intended to be modeled by this object."\n        }\n      ],\n      "name": "structuredReport",\n      "default": null,\n      "doc": "A structured report if available."\n    },\n    {\n      "Searchable": {\n        "fieldName": "startTimeMs",\n        "fieldType": "COUNT",\n        "queryByDefault": false\n      },\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "startTimeMs",\n      "default": null,\n      "doc": "Time at which the request was created"\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "durationMs",\n      "default": null,\n      "doc": "Duration in milliseconds"\n    }\n  ],\n  "doc": "The result of an execution request"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h3",{id:"outgoing"},"Outgoing"),(0,o.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ingestionSource"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DataHubIngestionSource via ",(0,o.kt)("inlineCode",{parentName:"li"},"dataHubExecutionRequestInput.source.ingestionSource"))))),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);