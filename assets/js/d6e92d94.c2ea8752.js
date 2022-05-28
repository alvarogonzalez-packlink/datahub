"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[674],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5172:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(4137)),o=["components"],l={sidebar_position:8,title:"Corpuser",sidebar_label:"Corpuser",slug:"/generated/metamodel/entities/corpuser",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpuser.md"},s="Corpuser",p={unversionedId:"docs/generated/metamodel/entities/corpuser",id:"docs/generated/metamodel/entities/corpuser",isDocsHomePage:!1,title:"Corpuser",description:"CorpUser represents an identity of a person (or an account) in the enterprise.",source:"@site/genDocs/docs/generated/metamodel/entities/corpuser.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/corpuser",permalink:"/docs/generated/metamodel/entities/corpuser",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpuser.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Corpuser",sidebar_label:"Corpuser",slug:"/generated/metamodel/entities/corpuser",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpuser.md"},sidebar:"overviewSidebar",previous:{title:"Notebook",permalink:"/docs/generated/metamodel/entities/notebook"},next:{title:"CorpGroup",permalink:"/docs/generated/metamodel/entities/corpgroup"}},u=[{value:"Aspects",id:"aspects",children:[{value:"corpUserKey",id:"corpuserkey",children:[],level:3},{value:"corpUserInfo",id:"corpuserinfo",children:[],level:3},{value:"corpUserEditableInfo",id:"corpusereditableinfo",children:[],level:3},{value:"corpUserStatus",id:"corpuserstatus",children:[],level:3},{value:"groupMembership",id:"groupmembership",children:[],level:3},{value:"globalTags",id:"globaltags",children:[],level:3},{value:"status",id:"status",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Self",id:"self",children:[],level:3},{value:"Outgoing",id:"outgoing",children:[],level:3},{value:"Incoming",id:"incoming",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"corpuser"},"Corpuser"),(0,i.kt)("p",null,"CorpUser represents an identity of a person (or an account) in the enterprise."),(0,i.kt)("h2",{id:"aspects"},"Aspects"),(0,i.kt)("h3",{id:"corpuserkey"},"corpUserKey"),(0,i.kt)("p",null,"Key for a CorpUser"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpUserKey"\n  },\n  "name": "CorpUserKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 2.0,\n        "enableAutocomplete": true,\n        "fieldName": "ldap",\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "username",\n      "doc": "The name of the AD/LDAP user."\n    }\n  ],\n  "doc": "Key for a CorpUser"\n}\n'))),(0,i.kt)("h3",{id:"corpuserinfo"},"corpUserInfo"),(0,i.kt)("p",null,"Linkedin corp user information"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "EntityUrns": [\n      "com.linkedin.common.CorpuserUrn"\n    ],\n    "name": "corpUserInfo"\n  },\n  "name": "CorpUserInfo",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 2.0\n        }\n      },\n      "type": "boolean",\n      "name": "active",\n      "doc": "Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "displayName",\n      "default": null,\n      "doc": "displayName of this user ,  e.g.  Hang Zhang(DataHQ)"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "email",\n      "default": null,\n      "doc": "email address of this user"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "title",\n      "default": null,\n      "doc": "title of this user"\n    },\n    {\n      "Relationship": {\n        "entityTypes": [\n          "corpuser"\n        ],\n        "name": "ReportsTo"\n      },\n      "Searchable": {\n        "fieldName": "managerLdap",\n        "fieldType": "URN",\n        "queryByDefault": true\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.CorpuserUrn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "managerUrn",\n      "default": null,\n      "doc": "direct manager of this user"\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "departmentId",\n      "default": null,\n      "doc": "department id this user belong to"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "departmentName",\n      "default": null,\n      "doc": "department name this user belong to"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "firstName",\n      "default": null,\n      "doc": "first name of this user"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "lastName",\n      "default": null,\n      "doc": "last name of this user"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "fieldType": "TEXT_PARTIAL",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "fullName",\n      "default": null,\n      "doc": "Common name of this user, format is firstName + lastName (split by a whitespace)"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "countryCode",\n      "default": null,\n      "doc": "two uppercase letters country code. e.g.  US"\n    }\n  ],\n  "doc": "Linkedin corp user information"\n}\n'))),(0,i.kt)("h3",{id:"corpusereditableinfo"},"corpUserEditableInfo"),(0,i.kt)("p",null,"Linkedin corp user information that can be edited from UI"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "EntityUrns": [\n      "com.linkedin.common.CorpuserUrn"\n    ],\n    "name": "corpUserEditableInfo"\n  },\n  "name": "CorpUserEditableInfo",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "aboutMe",\n      "default": null,\n      "doc": "About me section of the user"\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "TEXT"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "teams",\n      "default": [],\n      "doc": "Teams that the user belongs to e.g. Metadata"\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "TEXT"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "skills",\n      "default": [],\n      "doc": "Skills that the user possesses e.g. Machine Learning"\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": "string",\n      "name": "pictureLink",\n      "default": "https://raw.githubusercontent.com/datahub-project/datahub/master/datahub-web-react/src/images/default_avatar.png",\n      "doc": "A URL which points to a picture which user wants to set as a profile photo"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "fieldType": "TEXT_PARTIAL",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "displayName",\n      "default": null,\n      "doc": "DataHub-native display name"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "title",\n      "default": null,\n      "doc": "DataHub-native Title, e.g. \'Software Engineer\'"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "slack",\n      "default": null,\n      "doc": "Slack handle for the user"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "phone",\n      "default": null,\n      "doc": "Phone number to contact the user"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "email",\n      "default": null,\n      "doc": "Email address to contact the user"\n    }\n  ],\n  "doc": "Linkedin corp user information that can be edited from UI"\n}\n'))),(0,i.kt)("h3",{id:"corpuserstatus"},"corpUserStatus"),(0,i.kt)("p",null,"The status of the user, e.g. provisioned, active, suspended, etc."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpUserStatus"\n  },\n  "name": "CorpUserStatus",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "type": "string",\n      "name": "status",\n      "doc": "Status of the user, e.g. PROVISIONED / ACTIVE / SUSPENDED"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "doc": "Audit stamp containing who last modified the status and when."\n    }\n  ],\n  "doc": "The status of the user, e.g. provisioned, active, suspended, etc."\n}\n'))),(0,i.kt)("h3",{id:"groupmembership"},"groupMembership"),(0,i.kt)("p",null,"Carries information about the CorpGroups a user is in."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "groupMembership"\n  },\n  "name": "GroupMembership",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "corpGroup"\n          ],\n          "name": "IsMemberOfGroup"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "groups"\n    }\n  ],\n  "doc": "Carries information about the CorpGroups a user is in."\n}\n'))),(0,i.kt)("h3",{id:"globaltags"},"globalTags"),(0,i.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "tag"\n                ],\n                "name": "TaggedWith"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "tags",\n                "fieldType": "URN",\n                "filterNameOverride": "Tag",\n                "hasValuesFieldName": "hasTags"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("h3",{id:"self"},"Self"),(0,i.kt)("p",null,"These are the relationships to itself, stored in this entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ReportsTo (via ",(0,i.kt)("inlineCode",{parentName:"li"},"corpUserInfo.managerUrn"),")")),(0,i.kt)("h3",{id:"outgoing"},"Outgoing"),(0,i.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IsMemberOfGroup"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"groupMembership.groups")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TaggedWith"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tag via ",(0,i.kt)("inlineCode",{parentName:"li"},"globalTags.tags.tag"))))),(0,i.kt)("h3",{id:"incoming"},"Incoming"),(0,i.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OwnedBy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dataset via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"DataJob via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"DataFlow via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"Chart via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"Dashboard via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"Notebook via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"corpGroupInfo.admins")),(0,i.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"Domain via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"Container via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"Tag via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"GlossaryTerm via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"GlossaryNode via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"MlModel via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"MlModelGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"MlFeatureTable via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"MlFeature via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"MlPrimaryKey via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"DataProcess via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,i.kt)("li",{parentName:"ul"},"MlModelDeployment via ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IsPartOf"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,i.kt)("inlineCode",{parentName:"li"},"corpGroupInfo.members"))))),(0,i.kt)("h2",{id:"global-metadata-model"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}d.isMDXComponent=!0}}]);