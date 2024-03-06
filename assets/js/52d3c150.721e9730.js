"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5039],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=i,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:29,title:"DataHubView",slug:"/generated/metamodel/entities/datahubview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubView.md"},o="DataHubView",l={unversionedId:"docs/generated/metamodel/entities/dataHubView",id:"version-0.13.0/docs/generated/metamodel/entities/dataHubView",title:"DataHubView",description:"Aspects",source:"@site/versioned_docs/version-0.13.0/docs/generated/metamodel/entities/dataHubView.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubview",permalink:"/docs/generated/metamodel/entities/datahubview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubView.md",tags:[],version:"0.13.0",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"DataHubView",slug:"/generated/metamodel/entities/datahubview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubView.md"},sidebar:"overviewSidebar",previous:{title:"Post",permalink:"/docs/generated/metamodel/entities/post"},next:{title:"Query",permalink:"/docs/generated/metamodel/entities/query"}},s={},d=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubViewInfo",id:"datahubviewinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahubview"},"DataHubView"),(0,i.kt)("h2",{id:"aspects"},"Aspects"),(0,i.kt)("h3",{id:"datahubviewinfo"},"dataHubViewInfo"),(0,i.kt)("p",null,"Information about a DataHub View. -- TODO: Understand whether an entity type filter is required."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubViewInfo"\n  },\n  "name": "DataHubViewInfo",\n  "namespace": "com.linkedin.view",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The name of the View"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the view"\n    },\n    {\n      "Searchable": {},\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "GLOBAL": "A global view, which all users can see and use.",\n          "PERSONAL": "A view private for a specific person."\n        },\n        "name": "DataHubViewType",\n        "namespace": "com.linkedin.view",\n        "symbols": [\n          "PERSONAL",\n          "GLOBAL"\n        ]\n      },\n      "name": "type",\n      "doc": "The type of View"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "DataHubViewDefinition",\n        "namespace": "com.linkedin.view",\n        "fields": [\n          {\n            "type": {\n              "type": "array",\n              "items": "string"\n            },\n            "name": "entityTypes",\n            "doc": "The Entity Types in the scope of the View."\n          },\n          {\n            "type": {\n              "type": "record",\n              "name": "Filter",\n              "namespace": "com.linkedin.metadata.query.filter",\n              "fields": [\n                {\n                  "type": [\n                    "null",\n                    {\n                      "type": "array",\n                      "items": {\n                        "type": "record",\n                        "name": "ConjunctiveCriterion",\n                        "namespace": "com.linkedin.metadata.query.filter",\n                        "fields": [\n                          {\n                            "type": {\n                              "type": "array",\n                              "items": {\n                                "type": "record",\n                                "name": "Criterion",\n                                "namespace": "com.linkedin.metadata.query.filter",\n                                "fields": [\n                                  {\n                                    "type": "string",\n                                    "name": "field",\n                                    "doc": "The name of the field that the criterion refers to"\n                                  },\n                                  {\n                                    "type": "string",\n                                    "name": "value",\n                                    "doc": "The value of the intended field"\n                                  },\n                                  {\n                                    "type": {\n                                      "type": "array",\n                                      "items": "string"\n                                    },\n                                    "name": "values",\n                                    "default": [],\n                                    "doc": "Values. one of which the intended field should match\\nNote, if values is set, the above \\"value\\" field will be ignored"\n                                  },\n                                  {\n                                    "type": {\n                                      "type": "enum",\n                                      "symbolDocs": {\n                                        "CONTAIN": "Represent the relation: String field contains value, e.g. name contains Profile",\n                                        "END_WITH": "Represent the relation: String field ends with value, e.g. name ends with Event",\n                                        "EQUAL": "Represent the relation: field = value, e.g. platform = hdfs",\n                                        "EXISTS": "Represents the relation: field exists and is non-empty, e.g. owners is not null and != [] (empty)",\n                                        "GREATER_THAN": "Represent the relation greater than, e.g. ownerCount > 5",\n                                        "GREATER_THAN_OR_EQUAL_TO": "Represent the relation greater than or equal to, e.g. ownerCount >= 5",\n                                        "IN": "Represent the relation: String field is one of the array values to, e.g. name in [\\"Profile\\", \\"Event\\"]",\n                                        "IS_NULL": "Represent the relation: field is null, e.g. platform is null",\n                                        "LESS_THAN": "Represent the relation less than, e.g. ownerCount < 3",\n                                        "LESS_THAN_OR_EQUAL_TO": "Represent the relation less than or equal to, e.g. ownerCount <= 3",\n                                        "START_WITH": "Represent the relation: String field starts with value, e.g. name starts with PageView"\n                                      },\n                                      "name": "Condition",\n                                      "namespace": "com.linkedin.metadata.query.filter",\n                                      "symbols": [\n                                        "CONTAIN",\n                                        "END_WITH",\n                                        "EQUAL",\n                                        "IS_NULL",\n                                        "EXISTS",\n                                        "GREATER_THAN",\n                                        "GREATER_THAN_OR_EQUAL_TO",\n                                        "IN",\n                                        "LESS_THAN",\n                                        "LESS_THAN_OR_EQUAL_TO",\n                                        "START_WITH"\n                                      ],\n                                      "doc": "The matching condition in a filter criterion"\n                                    },\n                                    "name": "condition",\n                                    "default": "EQUAL",\n                                    "doc": "The condition for the criterion, e.g. EQUAL, START_WITH"\n                                  },\n                                  {\n                                    "type": "boolean",\n                                    "name": "negated",\n                                    "default": false,\n                                    "doc": "Whether the condition should be negated"\n                                  }\n                                ],\n                                "doc": "A criterion for matching a field with given value"\n                              }\n                            },\n                            "name": "and",\n                            "doc": "A list of and criteria the filter applies to the query"\n                          }\n                        ],\n                        "doc": "A list of criterion and\'d together."\n                      }\n                    }\n                  ],\n                  "name": "or",\n                  "default": null,\n                  "doc": "A list of disjunctive criterion for the filter. (or operation to combine filters)"\n                },\n                {\n                  "type": [\n                    "null",\n                    {\n                      "type": "array",\n                      "items": "com.linkedin.metadata.query.filter.Criterion"\n                    }\n                  ],\n                  "name": "criteria",\n                  "default": null,\n                  "doc": "Deprecated! A list of conjunctive criterion for the filter. If \\"or\\" field is provided, then this field is ignored."\n                }\n              ],\n              "doc": "The filter for finding a record or a collection of records"\n            },\n            "name": "filter",\n            "doc": "The filter criteria, which represents the view itself"\n          }\n        ],\n        "doc": "A View definition."\n      },\n      "name": "definition",\n      "doc": "The view itself"\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "createdBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "createdAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "created",\n      "doc": "Audit stamp capturing the time and actor who created the View."\n    },\n    {\n      "Searchable": {\n        "/time": {\n          "fieldName": "lastModifiedAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": "com.linkedin.common.AuditStamp",\n      "name": "lastModified",\n      "doc": "Audit stamp capturing the time and actor who last modified the View."\n    }\n  ],\n  "doc": "Information about a DataHub View. -- TODO: Understand whether an entity type filter is required."\n}\n'))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("h2",{id:"global-metadata-model"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);