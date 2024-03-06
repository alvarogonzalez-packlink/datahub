"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Role",slug:"/generated/metamodel/entities/role",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/role.md"},i="Role",l={unversionedId:"docs/generated/metamodel/entities/role",id:"version-0.13.0/docs/generated/metamodel/entities/role",title:"Role",description:"Aspects",source:"@site/versioned_docs/version-0.13.0/docs/generated/metamodel/entities/role.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/role",permalink:"/docs/generated/metamodel/entities/role",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/role.md",tags:[],version:"0.13.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Role",slug:"/generated/metamodel/entities/role",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/role.md"},sidebar:"overviewSidebar",previous:{title:"Data Platform",permalink:"/docs/generated/metamodel/entities/dataplatform"},next:{title:"Dataset",permalink:"/docs/generated/metamodel/entities/dataset"}},s={},c=[{value:"Aspects",id:"aspects",level:2},{value:"roleProperties",id:"roleproperties",level:3},{value:"actors",id:"actors",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"role"},"Role"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"roleproperties"},"roleProperties"),(0,r.kt)("p",null,"Information about a ExternalRoleProperties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "roleProperties"\n  },\n  "name": "RoleProperties",\n  "namespace": "com.linkedin.role",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Display name of the IAM Role in the external system"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the IAM Role"\n    },\n    {\n      "type": "string",\n      "name": "type",\n      "doc": "Can be READ, ADMIN, WRITE"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "requestUrl",\n      "default": null,\n      "doc": "Link to access external access management"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "AuditStamp",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": "long",\n              "name": "time",\n              "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "actor",\n              "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "impersonator",\n              "default": null,\n              "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "message",\n              "default": null,\n              "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n            }\n          ],\n          "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n        }\n      ],\n      "name": "created",\n      "default": null,\n      "doc": "Created Audit stamp"\n    }\n  ],\n  "doc": "Information about a ExternalRoleProperties"\n}\n'))),(0,r.kt)("h3",{id:"actors"},"actors"),(0,r.kt)("p",null,"Provisioned users of a role"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "actors"\n  },\n  "name": "Actors",\n  "namespace": "com.linkedin.role",\n  "fields": [\n    {\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": {\n            "type": "record",\n            "name": "RoleUser",\n            "namespace": "com.linkedin.role",\n            "fields": [\n              {\n                "Relationship": {\n                  "entityTypes": [\n                    "corpuser"\n                  ],\n                  "name": "Has"\n                },\n                "java": {\n                  "class": "com.linkedin.common.urn.Urn"\n                },\n                "type": "string",\n                "name": "user",\n                "doc": "Link provisioned corp user for a role"\n              }\n            ],\n            "doc": "Provisioned users of a role"\n          }\n        }\n      ],\n      "name": "users",\n      "default": null,\n      "doc": "List of provisioned users of a role"\n    }\n  ],\n  "doc": "Provisioned users of a role"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"outgoing"},"Outgoing"),(0,r.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Has"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"actors.users.user"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);