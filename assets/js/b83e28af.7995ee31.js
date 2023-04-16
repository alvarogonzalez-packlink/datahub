"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,y=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_position:30,title:"Query",slug:"/generated/metamodel/entities/query",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/query.md"},o="Query",s={unversionedId:"docs/generated/metamodel/entities/query",id:"docs/generated/metamodel/entities/query",title:"Query",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/query.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/query",permalink:"/docs/generated/metamodel/entities/query",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/query.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Query",slug:"/generated/metamodel/entities/query",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/query.md"},sidebar:"overviewSidebar",previous:{title:"DataHubView",permalink:"/docs/generated/metamodel/entities/datahubview"},next:{title:"DataHubPolicy",permalink:"/docs/generated/metamodel/entities/datahubpolicy"}},l={},c=[{value:"Aspects",id:"aspects",level:2},{value:"queryProperties",id:"queryproperties",level:3},{value:"querySubjects",id:"querysubjects",level:3},{value:"status",id:"status",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query"},"Query"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"queryproperties"},"queryProperties"),(0,r.kt)("p",null,"Information about a Query against one or more data assets (e.g. Tables or Views)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "queryProperties"\n  },\n  "name": "QueryProperties",\n  "namespace": "com.linkedin.query",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "QueryStatement",\n        "namespace": "com.linkedin.query",\n        "fields": [\n          {\n            "type": "string",\n            "name": "value",\n            "doc": "The query text"\n          },\n          {\n            "type": {\n              "type": "enum",\n              "symbolDocs": {\n                "SQL": "A SQL Query"\n              },\n              "name": "QueryLanguage",\n              "namespace": "com.linkedin.query",\n              "symbols": [\n                "SQL"\n              ]\n            },\n            "name": "language",\n            "default": "SQL",\n            "doc": "The language of the Query, e.g. SQL."\n          }\n        ],\n        "doc": "A query statement against one or more data assets."\n      },\n      "name": "statement",\n      "doc": "The Query Statement."\n    },\n    {\n      "Searchable": {},\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "MANUAL": "The query was entered manually by a user (via the UI)."\n        },\n        "name": "QuerySource",\n        "namespace": "com.linkedin.query",\n        "symbols": [\n          "MANUAL"\n        ]\n      },\n      "name": "source",\n      "doc": "The source of the Query"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "name",\n      "default": null,\n      "doc": "Optional display name to identify the query."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "The Query description."\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "createdBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "createdAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "created",\n      "doc": "Audit stamp capturing the time and actor who created the Query."\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "lastModifiedBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "lastModifiedAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": "com.linkedin.common.AuditStamp",\n      "name": "lastModified",\n      "doc": "Audit stamp capturing the time and actor who last modified the Query."\n    }\n  ],\n  "doc": "Information about a Query against one or more data assets (e.g. Tables or Views)."\n}\n'))),(0,r.kt)("h3",{id:"querysubjects"},"querySubjects"),(0,r.kt)("p",null,"Information about the subjects of a particular Query, i.e. the assets\nbeing queried."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "querySubjects"\n  },\n  "name": "QuerySubjects",\n  "namespace": "com.linkedin.query",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "QuerySubject",\n          "namespace": "com.linkedin.query",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "dataset",\n                  "schemaField"\n                ],\n                "name": "IsAssociatedWith"\n              },\n              "Searchable": {\n                "fieldName": "entities",\n                "fieldType": "URN"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "entity",\n              "doc": "An entity which is the subject of a query."\n            }\n          ],\n          "doc": "A single subject of a particular query.\\nIn the future, we may evolve this model to include richer details\\nabout the Query Subject in relation to the query."\n        }\n      },\n      "name": "subjects",\n      "doc": "One or more subjects of the query.\\n\\nIn single-asset queries (e.g. table select), this will contain the Table reference\\nand optionally schema field references.\\n\\nIn multi-asset queries (e.g. table joins), this may contain multiple Table references\\nand optionally schema field references."\n    }\n  ],\n  "doc": "Information about the subjects of a particular Query, i.e. the assets\\nbeing queried."\n}\n'))),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"outgoing"},"Outgoing"),(0,r.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsAssociatedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dataset via ",(0,r.kt)("inlineCode",{parentName:"li"},"querySubjects.subjects.entity")),(0,r.kt)("li",{parentName:"ul"},"SchemaField via ",(0,r.kt)("inlineCode",{parentName:"li"},"querySubjects.subjects.entity"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}d.isMDXComponent=!0}}]);