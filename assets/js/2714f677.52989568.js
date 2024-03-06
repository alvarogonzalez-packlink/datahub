"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const i={sidebar_position:28,title:"Post",slug:"/generated/metamodel/entities/post",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/post.md"},r="Post",s={unversionedId:"docs/generated/metamodel/entities/post",id:"docs/generated/metamodel/entities/post",title:"Post",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/post.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/post",permalink:"/docs/next/generated/metamodel/entities/post",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/post.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28,title:"Post",slug:"/generated/metamodel/entities/post",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/post.md"},sidebar:"overviewSidebar",previous:{title:"DataHubRole",permalink:"/docs/next/generated/metamodel/entities/datahubrole"},next:{title:"DataHubView",permalink:"/docs/next/generated/metamodel/entities/datahubview"}},l={},c=[{value:"Aspects",id:"aspects",level:2},{value:"postInfo",id:"postinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post"},"Post"),(0,a.kt)("h2",{id:"aspects"},"Aspects"),(0,a.kt)("h3",{id:"postinfo"},"postInfo"),(0,a.kt)("p",null,"Information about a DataHub Post."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "postInfo"\n  },\n  "name": "PostInfo",\n  "namespace": "com.linkedin.post",\n  "fields": [\n    {\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "HOME_PAGE_ANNOUNCEMENT": "The Post is an Home Page announcement."\n        },\n        "name": "PostType",\n        "namespace": "com.linkedin.post",\n        "symbols": [\n          "HOME_PAGE_ANNOUNCEMENT"\n        ],\n        "doc": "Enum defining types of Posts."\n      },\n      "name": "type",\n      "doc": "Type of the Post."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "PostContent",\n        "namespace": "com.linkedin.post",\n        "fields": [\n          {\n            "Searchable": {\n              "fieldType": "TEXT_PARTIAL"\n            },\n            "type": "string",\n            "name": "title",\n            "doc": "Title of the post."\n          },\n          {\n            "type": {\n              "type": "enum",\n              "symbolDocs": {\n                "LINK": "Link content",\n                "TEXT": "Text content"\n              },\n              "name": "PostContentType",\n              "namespace": "com.linkedin.post",\n              "symbols": [\n                "TEXT",\n                "LINK"\n              ],\n              "doc": "Enum defining the type of content held in a Post."\n            },\n            "name": "type",\n            "doc": "Type of content held in the post."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "description",\n            "default": null,\n            "doc": "Optional description of the post."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.url.Url",\n              "coercerClass": "com.linkedin.common.url.UrlCoercer"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "link",\n            "default": null,\n            "doc": "Optional link that the post is associated with."\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "Media",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": {\n                      "type": "enum",\n                      "symbolDocs": {\n                        "IMAGE": "The Media holds an image."\n                      },\n                      "name": "MediaType",\n                      "namespace": "com.linkedin.common",\n                      "symbols": [\n                        "IMAGE"\n                      ],\n                      "doc": "Enum defining the type of content a Media object holds."\n                    },\n                    "name": "type",\n                    "doc": "Type of content the Media is storing, e.g. image, video, etc."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.url.Url",\n                      "coercerClass": "com.linkedin.common.url.UrlCoercer"\n                    },\n                    "type": "string",\n                    "name": "location",\n                    "doc": "Where the media content is stored."\n                  }\n                ],\n                "doc": "Carries information about which roles a user is assigned to."\n              }\n            ],\n            "name": "media",\n            "default": null,\n            "doc": "Optional media that the post is storing"\n          }\n        ],\n        "doc": "Content stored inside a Post."\n      },\n      "name": "content",\n      "doc": "Content stored in the post."\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT"\n      },\n      "type": "long",\n      "name": "created",\n      "doc": "The time at which the post was initially created"\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT"\n      },\n      "type": "long",\n      "name": "lastModified",\n      "doc": "The time at which the post was last modified"\n    }\n  ],\n  "doc": "Information about a DataHub Post."\n}\n'))),(0,a.kt)("h2",{id:"relationships"},"Relationships"),(0,a.kt)("h2",{id:"global-metadata-model"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);