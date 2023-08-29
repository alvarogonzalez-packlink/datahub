"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(83117),r=(t(67294),t(3905));const o={sidebar_position:11,title:"CorpGroup",slug:"/generated/metamodel/entities/corpgroup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpGroup.md"},i="CorpGroup",s={unversionedId:"docs/generated/metamodel/entities/corpGroup",id:"docs/generated/metamodel/entities/corpGroup",title:"CorpGroup",description:"CorpGroup represents an identity of a group of users in the enterprise.",source:"@site/genDocs/docs/generated/metamodel/entities/corpGroup.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/corpgroup",permalink:"/docs/next/generated/metamodel/entities/corpgroup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpGroup.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"CorpGroup",slug:"/generated/metamodel/entities/corpgroup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/corpGroup.md"},sidebar:"overviewSidebar",previous:{title:"Corpuser",permalink:"/docs/next/generated/metamodel/entities/corpuser"},next:{title:"Domain",permalink:"/docs/next/generated/metamodel/entities/domain"}},l={},p=[{value:"Aspects",id:"aspects",level:2},{value:"corpGroupKey",id:"corpgroupkey",level:3},{value:"corpGroupInfo",id:"corpgroupinfo",level:3},{value:"globalTags",id:"globaltags",level:3},{value:"status",id:"status",level:3},{value:"corpGroupEditableInfo",id:"corpgroupeditableinfo",level:3},{value:"ownership",id:"ownership",level:3},{value:"origin",id:"origin",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Self",id:"self",level:3},{value:"Outgoing",id:"outgoing",level:3},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"corpgroup"},"CorpGroup"),(0,r.kt)("p",null,"CorpGroup represents an identity of a group of users in the enterprise."),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"corpgroupkey"},"corpGroupKey"),(0,r.kt)("p",null,"Key for a CorpGroup"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpGroupKey"\n  },\n  "name": "CorpGroupKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM",\n        "queryByDefault": true\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The URL-encoded name of the AD/LDAP group. Serves as a globally unique identifier within DataHub."\n    }\n  ],\n  "doc": "Key for a CorpGroup"\n}\n'))),(0,r.kt)("h3",{id:"corpgroupinfo"},"corpGroupInfo"),(0,r.kt)("p",null,"Information about a Corp Group ingested from a third party source"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "EntityUrns": [\n      "com.linkedin.common.CorpGroupUrn"\n    ],\n    "name": "corpGroupInfo"\n  },\n  "name": "CorpGroupInfo",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "TEXT_PARTIAL",\n        "queryByDefault": true\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "displayName",\n      "default": null,\n      "doc": "The name of the group."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "email",\n      "default": null,\n      "doc": "email of this group"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "corpuser"\n          ],\n          "name": "OwnedBy"\n        }\n      },\n      "deprecated": true,\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "admins",\n      "doc": "owners of this group\\nDeprecated! Replaced by Ownership aspect."\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "corpuser"\n          ],\n          "name": "IsPartOf"\n        }\n      },\n      "deprecated": true,\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "members",\n      "doc": "List of ldap urn in this group.\\nDeprecated! Replaced by GroupMembership aspect."\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "corpGroup"\n          ],\n          "name": "IsPartOf"\n        }\n      },\n      "deprecated": true,\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "groups",\n      "doc": "List of groups in this group.\\nDeprecated! This field is unused."\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "A description of the group."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "slack",\n      "default": null,\n      "doc": "Slack channel for the group"\n    },\n    {\n      "Searchable": {\n        "/time": {\n          "fieldName": "createdTime",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "AuditStamp",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": "long",\n              "name": "time",\n              "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "actor",\n              "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "impersonator",\n              "default": null,\n              "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "message",\n              "default": null,\n              "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n            }\n          ],\n          "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n        }\n      ],\n      "name": "created",\n      "default": null,\n      "doc": "Created Audit stamp"\n    }\n  ],\n  "doc": "Information about a Corp Group ingested from a third party source"\n}\n'))),(0,r.kt)("h3",{id:"globaltags"},"globalTags"),(0,r.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/tag": {\n          "entityTypes": [\n            "tag"\n          ],\n          "name": "TaggedWith"\n        }\n      },\n      "Searchable": {\n        "/*/tag": {\n          "addToFilters": true,\n          "boostScore": 0.5,\n          "fieldName": "tags",\n          "fieldType": "URN",\n          "filterNameOverride": "Tag",\n          "hasValuesFieldName": "hasTags",\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "context",\n              "default": null,\n              "doc": "Additional context about the association"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,r.kt)("h3",{id:"corpgroupeditableinfo"},"corpGroupEditableInfo"),(0,r.kt)("p",null,"Group information that can be edited from UI"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "corpGroupEditableInfo"\n  },\n  "name": "CorpGroupEditableInfo",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldName": "editedDescription",\n        "fieldType": "TEXT"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "A description of the group"\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": "string",\n      "name": "pictureLink",\n      "default": "https://raw.githubusercontent.com/datahub-project/datahub/master/datahub-web-react/src/images/default_avatar.png",\n      "doc": "A URL which points to a picture which user wants to set as the photo for the group"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "slack",\n      "default": null,\n      "doc": "Slack channel for the group"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "email",\n      "default": null,\n      "doc": "Email address to contact the group"\n    }\n  ],\n  "doc": "Group information that can be edited from UI"\n}\n'))),(0,r.kt)("h3",{id:"ownership"},"ownership"),(0,r.kt)("p",null,"Ownership information of an entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpuser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "deprecated": true,\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "CUSTOM": "Set when ownership type is unknown or a when new one is specified as an ownership type entity for which we have no\\nenum value for. This is used for backwards compatibility",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "CUSTOM",\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "ownershipType"\n                ],\n                "name": "ownershipType"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "typeUrn",\n              "default": null,\n              "doc": "The type of the ownership\\nUrn of type O"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0,\n        "message": null\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,r.kt)("h3",{id:"origin"},"origin"),(0,r.kt)("p",null,"Carries information about where an entity originated from."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "origin"\n  },\n  "name": "Origin",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "EXTERNAL": "The entity is external to DataHub.",\n          "NATIVE": "The entity is native to DataHub."\n        },\n        "name": "OriginType",\n        "namespace": "com.linkedin.common",\n        "symbols": [\n          "NATIVE",\n          "EXTERNAL"\n        ],\n        "doc": "Enum to define where an entity originated from."\n      },\n      "name": "type",\n      "doc": "Where an entity originated from. Either NATIVE or EXTERNAL."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalType",\n      "default": null,\n      "doc": "Only populated if type is EXTERNAL. The externalType of the entity, such as the name of the identity provider."\n    }\n  ],\n  "doc": "Carries information about where an entity originated from."\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"self"},"Self"),(0,r.kt)("p",null,"These are the relationships to itself, stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IsPartOf (via ",(0,r.kt)("inlineCode",{parentName:"li"},"corpGroupInfo.groups"),")"),(0,r.kt)("li",{parentName:"ul"},"OwnedBy (via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner"),")")),(0,r.kt)("h3",{id:"outgoing"},"Outgoing"),(0,r.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OwnedBy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"corpGroupInfo.admins")),(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsPartOf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"corpGroupInfo.members")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TaggedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tag via ",(0,r.kt)("inlineCode",{parentName:"li"},"globalTags.tags")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ownershipType"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OwnershipType via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn"))))),(0,r.kt)("h3",{id:"incoming"},"Incoming"),(0,r.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OwnedBy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dataset via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"DataJob via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"DataFlow via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"DataProcess via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"Chart via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"Dashboard via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"Notebook via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsMemberOfGroup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"groupMembership.groups")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsMemberOfNativeGroup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"nativeGroupMembership.nativeGroups"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);