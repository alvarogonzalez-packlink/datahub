"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(b,s(s({ref:t},l),{},{components:n})):a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:41,title:"DataHubAccessToken",slug:"/generated/metamodel/entities/datahubaccesstoken",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubAccessToken.md"},s="DataHubAccessToken",c={unversionedId:"docs/generated/metamodel/entities/dataHubAccessToken",id:"version-0.10.5/docs/generated/metamodel/entities/dataHubAccessToken",title:"DataHubAccessToken",description:"Aspects",source:"@site/versioned_docs/version-0.10.5/docs/generated/metamodel/entities/dataHubAccessToken.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubaccesstoken",permalink:"/docs/generated/metamodel/entities/datahubaccesstoken",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubAccessToken.md",tags:[],version:"0.10.5",sidebarPosition:41,frontMatter:{sidebar_position:41,title:"DataHubAccessToken",slug:"/generated/metamodel/entities/datahubaccesstoken",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubAccessToken.md"},sidebar:"overviewSidebar",previous:{title:"Telemetry",permalink:"/docs/generated/metamodel/entities/telemetry"},next:{title:"DataHubUpgrade",permalink:"/docs/generated/metamodel/entities/datahubupgrade"}},i={},d=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubAccessTokenInfo",id:"datahubaccesstokeninfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],l={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahubaccesstoken"},"DataHubAccessToken"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"datahubaccesstokeninfo"},"dataHubAccessTokenInfo"),(0,r.kt)("p",null,"Information about a DataHub Access Token"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubAccessTokenInfo"\n  },\n  "name": "DataHubAccessTokenInfo",\n  "namespace": "com.linkedin.access.token",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "User defined name for the access token if defined."\n    },\n    {\n      "Searchable": {\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actorUrn",\n      "doc": "Urn of the actor to which this access token belongs to."\n    },\n    {\n      "Searchable": {\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "ownerUrn",\n      "doc": "Urn of the actor which created this access token."\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT",\n        "queryByDefault": false\n      },\n      "type": "long",\n      "name": "createdAt",\n      "doc": "When the token was created."\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT",\n        "queryByDefault": false\n      },\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "expiresAt",\n      "default": null,\n      "doc": "When the token expires."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the token if defined."\n    }\n  ],\n  "doc": "Information about a DataHub Access Token"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);