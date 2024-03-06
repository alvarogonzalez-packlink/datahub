"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:32,title:"OwnershipType",slug:"/generated/metamodel/entities/ownershiptype",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/ownershipType.md"},o="OwnershipType",s={unversionedId:"docs/generated/metamodel/entities/ownershipType",id:"version-0.13.0/docs/generated/metamodel/entities/ownershipType",title:"OwnershipType",description:"Ownership Type represents a user-created ownership category for a person or group who is responsible for an asset.",source:"@site/versioned_docs/version-0.13.0/docs/generated/metamodel/entities/ownershipType.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/ownershiptype",permalink:"/docs/generated/metamodel/entities/ownershiptype",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/ownershipType.md",tags:[],version:"0.13.0",sidebarPosition:32,frontMatter:{sidebar_position:32,title:"OwnershipType",slug:"/generated/metamodel/entities/ownershiptype",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/ownershipType.md"},sidebar:"overviewSidebar",previous:{title:"DataProduct",permalink:"/docs/generated/metamodel/entities/dataproduct"},next:{title:"DataContract",permalink:"/docs/generated/metamodel/entities/datacontract"}},l={},p=[{value:"Aspects",id:"aspects",level:2},{value:"ownershipTypeInfo",id:"ownershiptypeinfo",level:3},{value:"status",id:"status",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ownershiptype"},"OwnershipType"),(0,r.kt)("p",null,"Ownership Type represents a user-created ownership category for a person or group who is responsible for an asset."),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"ownershiptypeinfo"},"ownershipTypeInfo"),(0,r.kt)("p",null,"Information about an ownership type"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownershipTypeInfo"\n  },\n  "name": "OwnershipTypeInfo",\n  "namespace": "com.linkedin.ownership",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Display name of the Ownership Type"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the Ownership Type"\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "createdBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "createdAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "created",\n      "doc": "Audit stamp capturing the time and actor who created the Ownership Type."\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "lastModifiedBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "lastModifiedAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": "com.linkedin.common.AuditStamp",\n      "name": "lastModified",\n      "doc": "Audit stamp capturing the time and actor who last modified the Ownership Type."\n    }\n  ],\n  "doc": "Information about an ownership type"\n}\n'))),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"incoming"},"Incoming"),(0,r.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ownershipType"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dataset via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"DataJob via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"DataFlow via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"DataProcess via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"Chart via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"Dashboard via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"Notebook via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"Domain via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"Container via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"Tag via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"GlossaryTerm via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"GlossaryNode via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"DataPlatformInstance via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"MlModel via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"MlModelGroup via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"MlModelDeployment via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"MlFeatureTable via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"MlFeature via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"MlPrimaryKey via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")),(0,r.kt)("li",{parentName:"ul"},"DataProduct via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);