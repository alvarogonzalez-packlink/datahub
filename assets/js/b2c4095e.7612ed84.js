"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2579],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:10,title:"Corpuser",slug:"/generated/metamodel/entities/corpuser",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpuser.md"},o="Corpuser",s={unversionedId:"docs/generated/metamodel/entities/corpuser",id:"version-0.12.1/docs/generated/metamodel/entities/corpuser",title:"Corpuser",description:"CorpUser represents an identity of a person (or an account) in the enterprise.",source:"@site/versioned_docs/version-0.12.1/docs/generated/metamodel/entities/corpuser.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/corpuser",permalink:"/docs/0.12.1/generated/metamodel/entities/corpuser",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpuser.md",tags:[],version:"0.12.1",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Corpuser",slug:"/generated/metamodel/entities/corpuser",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpuser.md"},sidebar:"overviewSidebar",previous:{title:"Notebook",permalink:"/docs/0.12.1/generated/metamodel/entities/notebook"},next:{title:"CorpGroup",permalink:"/docs/0.12.1/generated/metamodel/entities/corpgroup"}},l={},p=[{value:"Aspects",id:"aspects",level:2},{value:"corpUserKey",id:"corpuserkey",level:3},{value:"corpUserInfo",id:"corpuserinfo",level:3},{value:"corpUserEditableInfo",id:"corpusereditableinfo",level:3},{value:"corpUserStatus",id:"corpuserstatus",level:3},{value:"groupMembership",id:"groupmembership",level:3},{value:"globalTags",id:"globaltags",level:3},{value:"status",id:"status",level:3},{value:"corpUserCredentials",id:"corpusercredentials",level:3},{value:"nativeGroupMembership",id:"nativegroupmembership",level:3},{value:"corpUserSettings",id:"corpusersettings",level:3},{value:"origin",id:"origin",level:3},{value:"roleMembership",id:"rolemembership",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Self",id:"self",level:3},{value:"Outgoing",id:"outgoing",level:3},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"corpuser"},"Corpuser"),(0,r.kt)("p",null,"CorpUser represents an identity of a person (or an account) in the enterprise."),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"corpuserkey"},"corpUserKey"),(0,r.kt)("p",null,"Key for a CorpUser"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpUserKey"\n  },\n  "name": "CorpUserKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 2.0,\n        "enableAutocomplete": true,\n        "fieldName": "ldap",\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "username",\n      "doc": "The name of the AD/LDAP user."\n    }\n  ],\n  "doc": "Key for a CorpUser"\n}\n'))),(0,r.kt)("h3",{id:"corpuserinfo"},"corpUserInfo"),(0,r.kt)("p",null,"Linkedin corp user information"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "EntityUrns": [\n      "com.linkedin.common.CorpuserUrn"\n    ],\n    "name": "corpUserInfo"\n  },\n  "name": "CorpUserInfo",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 2.0\n        }\n      },\n      "type": "boolean",\n      "name": "active",\n      "doc": "Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "WORD_GRAM",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "displayName",\n      "default": null,\n      "doc": "displayName of this user ,  e.g.  Hang Zhang(DataHQ)"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "email",\n      "default": null,\n      "doc": "email address of this user"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "title",\n      "default": null,\n      "doc": "title of this user"\n    },\n    {\n      "Relationship": {\n        "entityTypes": [\n          "corpuser"\n        ],\n        "name": "ReportsTo"\n      },\n      "Searchable": {\n        "fieldName": "managerLdap",\n        "fieldType": "URN",\n        "queryByDefault": true\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.CorpuserUrn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "managerUrn",\n      "default": null,\n      "doc": "direct manager of this user"\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "departmentId",\n      "default": null,\n      "doc": "department id this user belong to"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "departmentName",\n      "default": null,\n      "doc": "department name this user belong to"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "firstName",\n      "default": null,\n      "doc": "first name of this user"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "lastName",\n      "default": null,\n      "doc": "last name of this user"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "fullName",\n      "default": null,\n      "doc": "Common name of this user, format is firstName + lastName (split by a whitespace)"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "countryCode",\n      "default": null,\n      "doc": "two uppercase letters country code. e.g.  US"\n    }\n  ],\n  "doc": "Linkedin corp user information"\n}\n'))),(0,r.kt)("h3",{id:"corpusereditableinfo"},"corpUserEditableInfo"),(0,r.kt)("p",null,"Linkedin corp user information that can be edited from UI"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "EntityUrns": [\n      "com.linkedin.common.CorpuserUrn"\n    ],\n    "name": "corpUserEditableInfo"\n  },\n  "name": "CorpUserEditableInfo",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "aboutMe",\n      "default": null,\n      "doc": "About me section of the user"\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "TEXT"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "teams",\n      "default": [],\n      "doc": "Teams that the user belongs to e.g. Metadata"\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "TEXT"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "skills",\n      "default": [],\n      "doc": "Skills that the user possesses e.g. Machine Learning"\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": "string",\n      "name": "pictureLink",\n      "default": "https://raw.githubusercontent.com/datahub-project/datahub/master/datahub-web-react/src/images/default_avatar.png",\n      "doc": "A URL which points to a picture which user wants to set as a profile photo"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "fieldType": "WORD_GRAM",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "displayName",\n      "default": null,\n      "doc": "DataHub-native display name"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "title",\n      "default": null,\n      "doc": "DataHub-native Title, e.g. \'Software Engineer\'"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "slack",\n      "default": null,\n      "doc": "Slack handle for the user"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "phone",\n      "default": null,\n      "doc": "Phone number to contact the user"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "email",\n      "default": null,\n      "doc": "Email address to contact the user"\n    }\n  ],\n  "doc": "Linkedin corp user information that can be edited from UI"\n}\n'))),(0,r.kt)("h3",{id:"corpuserstatus"},"corpUserStatus"),(0,r.kt)("p",null,"The status of the user, e.g. provisioned, active, suspended, etc."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpUserStatus"\n  },\n  "name": "CorpUserStatus",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "type": "string",\n      "name": "status",\n      "doc": "Status of the user, e.g. PROVISIONED / ACTIVE / SUSPENDED"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "doc": "Audit stamp containing who last modified the status and when."\n    }\n  ],\n  "doc": "The status of the user, e.g. provisioned, active, suspended, etc."\n}\n'))),(0,r.kt)("h3",{id:"groupmembership"},"groupMembership"),(0,r.kt)("p",null,"Carries information about the CorpGroups a user is in."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "groupMembership"\n  },\n  "name": "GroupMembership",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "corpGroup"\n          ],\n          "name": "IsMemberOfGroup"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "groups"\n    }\n  ],\n  "doc": "Carries information about the CorpGroups a user is in."\n}\n'))),(0,r.kt)("h3",{id:"globaltags"},"globalTags"),(0,r.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/tag": {\n          "entityTypes": [\n            "tag"\n          ],\n          "name": "TaggedWith"\n        }\n      },\n      "Searchable": {\n        "/*/tag": {\n          "addToFilters": true,\n          "boostScore": 0.5,\n          "fieldName": "tags",\n          "fieldType": "URN",\n          "filterNameOverride": "Tag",\n          "hasValuesFieldName": "hasTags",\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "context",\n              "default": null,\n              "doc": "Additional context about the association"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,r.kt)("h3",{id:"corpusercredentials"},"corpUserCredentials"),(0,r.kt)("p",null,"Corp user credentials"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "EntityUrns": [\n      "com.linkedin.common.CorpuserUrn"\n    ],\n    "name": "corpUserCredentials"\n  },\n  "name": "CorpUserCredentials",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "type": "string",\n      "name": "salt",\n      "doc": "Salt used to hash password"\n    },\n    {\n      "type": "string",\n      "name": "hashedPassword",\n      "doc": "Hashed password generated by concatenating salt and password, then hashing"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "passwordResetToken",\n      "default": null,\n      "doc": "Optional token needed to reset a user\'s password. Can only be set by the admin."\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "passwordResetTokenExpirationTimeMillis",\n      "default": null,\n      "doc": "When the password reset token expires."\n    }\n  ],\n  "doc": "Corp user credentials"\n}\n'))),(0,r.kt)("h3",{id:"nativegroupmembership"},"nativeGroupMembership"),(0,r.kt)("p",null,"Carries information about the native CorpGroups a user is in."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "nativeGroupMembership"\n  },\n  "name": "NativeGroupMembership",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "corpGroup"\n          ],\n          "name": "IsMemberOfNativeGroup"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "nativeGroups"\n    }\n  ],\n  "doc": "Carries information about the native CorpGroups a user is in."\n}\n'))),(0,r.kt)("h3",{id:"corpusersettings"},"corpUserSettings"),(0,r.kt)("p",null,"Settings that a user can customize through the datahub ui"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpUserSettings"\n  },\n  "name": "CorpUserSettings",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "CorpUserAppearanceSettings",\n        "namespace": "com.linkedin.identity",\n        "fields": [\n          {\n            "type": [\n              "null",\n              "boolean"\n            ],\n            "name": "showSimplifiedHomepage",\n            "default": null,\n            "doc": "Flag whether the user should see a homepage with only datasets, charts and dashboards. Intended for users\\nwho have less operational use cases for the datahub tool."\n          }\n        ],\n        "doc": "Settings for a user around the appearance of their DataHub UI"\n      },\n      "name": "appearance",\n      "doc": "Settings for a user around the appearance of their DataHub U"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "CorpUserViewsSettings",\n          "namespace": "com.linkedin.identity",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "defaultView",\n              "default": null,\n              "doc": "The default View which is selected for the user.\\nIf none is chosen, then this value will be left blank."\n            }\n          ],\n          "doc": "Settings related to the \'Views\' feature."\n        }\n      ],\n      "name": "views",\n      "default": null,\n      "doc": "User preferences for the Views feature."\n    }\n  ],\n  "doc": "Settings that a user can customize through the datahub ui"\n}\n'))),(0,r.kt)("h3",{id:"origin"},"origin"),(0,r.kt)("p",null,"Carries information about where an entity originated from."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "origin"\n  },\n  "name": "Origin",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "EXTERNAL": "The entity is external to DataHub.",\n          "NATIVE": "The entity is native to DataHub."\n        },\n        "name": "OriginType",\n        "namespace": "com.linkedin.common",\n        "symbols": [\n          "NATIVE",\n          "EXTERNAL"\n        ],\n        "doc": "Enum to define where an entity originated from."\n      },\n      "name": "type",\n      "doc": "Where an entity originated from. Either NATIVE or EXTERNAL."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalType",\n      "default": null,\n      "doc": "Only populated if type is EXTERNAL. The externalType of the entity, such as the name of the identity provider."\n    }\n  ],\n  "doc": "Carries information about where an entity originated from."\n}\n'))),(0,r.kt)("h3",{id:"rolemembership"},"roleMembership"),(0,r.kt)("p",null,"Carries information about which roles a user is assigned to."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "roleMembership"\n  },\n  "name": "RoleMembership",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataHubRole"\n          ],\n          "name": "IsMemberOfRole"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "roles"\n    }\n  ],\n  "doc": "Carries information about which roles a user is assigned to."\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"self"},"Self"),(0,r.kt)("p",null,"These are the relationships to itself, stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ReportsTo (via ",(0,r.kt)("inlineCode",{parentName:"li"},"corpUserInfo.managerUrn"),")")),(0,r.kt)("h3",{id:"outgoing"},"Outgoing"),(0,r.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsMemberOfGroup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,r.kt)("inlineCode",{parentName:"li"},"groupMembership.groups")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TaggedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tag via ",(0,r.kt)("inlineCode",{parentName:"li"},"globalTags.tags")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsMemberOfNativeGroup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,r.kt)("inlineCode",{parentName:"li"},"nativeGroupMembership.nativeGroups")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsMemberOfRole"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DataHubRole via ",(0,r.kt)("inlineCode",{parentName:"li"},"roleMembership.roles"))))),(0,r.kt)("h3",{id:"incoming"},"Incoming"),(0,r.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Has"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Role via ",(0,r.kt)("inlineCode",{parentName:"li"},"actors.users.user")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OwnedBy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dataset via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"DataJob via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"DataFlow via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"DataProcess via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"Chart via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"Dashboard via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"Notebook via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}d.isMDXComponent=!0}}]);