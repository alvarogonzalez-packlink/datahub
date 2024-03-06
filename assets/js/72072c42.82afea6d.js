"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82749],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:34,title:"DataHubIngestionSource",slug:"/generated/metamodel/entities/datahubingestionsource",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubIngestionSource.md"},i="DataHubIngestionSource",s={unversionedId:"docs/generated/metamodel/entities/dataHubIngestionSource",id:"version-0.12.1/docs/generated/metamodel/entities/dataHubIngestionSource",title:"DataHubIngestionSource",description:"Aspects",source:"@site/versioned_docs/version-0.12.1/docs/generated/metamodel/entities/dataHubIngestionSource.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubingestionsource",permalink:"/docs/0.12.1/generated/metamodel/entities/datahubingestionsource",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubIngestionSource.md",tags:[],version:"0.12.1",sidebarPosition:34,frontMatter:{sidebar_position:34,title:"DataHubIngestionSource",slug:"/generated/metamodel/entities/datahubingestionsource",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubIngestionSource.md"},sidebar:"overviewSidebar",previous:{title:"DataHubPolicy",permalink:"/docs/0.12.1/generated/metamodel/entities/datahubpolicy"},next:{title:"DataHubSecret",permalink:"/docs/0.12.1/generated/metamodel/entities/datahubsecret"}},c={},u=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubIngestionSourceInfo",id:"datahubingestionsourceinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],l={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubingestionsource"},"DataHubIngestionSource"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubingestionsourceinfo"},"dataHubIngestionSourceInfo"),(0,o.kt)("p",null,"Info about a DataHub ingestion source"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubIngestionSourceInfo"\n  },\n  "name": "DataHubIngestionSourceInfo",\n  "namespace": "com.linkedin.ingestion",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The display name of the ingestion source"\n    },\n    {\n      "type": "string",\n      "name": "type",\n      "doc": "The type of the source itself, e.g. mysql, bigquery, bigquery-usage. Should match the recipe."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "platform",\n      "default": null,\n      "doc": "Data Platform URN associated with the source"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "DataHubIngestionSourceSchedule",\n          "namespace": "com.linkedin.ingestion",\n          "fields": [\n            {\n              "type": "string",\n              "name": "interval",\n              "doc": "A cron-formatted execution interval, as a cron string, e.g. * * * * *"\n            },\n            {\n              "type": "string",\n              "name": "timezone",\n              "doc": "Timezone in which the cron interval applies, e.g. America/Los Angeles"\n            }\n          ],\n          "doc": "The schedule associated with an ingestion source."\n        }\n      ],\n      "name": "schedule",\n      "default": null,\n      "doc": "The schedule on which the ingestion source is executed"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "DataHubIngestionSourceConfig",\n        "namespace": "com.linkedin.ingestion",\n        "fields": [\n          {\n            "type": "string",\n            "name": "recipe",\n            "doc": "The JSON recipe to use for ingestion"\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "version",\n            "default": null,\n            "doc": "The PyPI version of the datahub CLI to use when executing a recipe"\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "executorId",\n            "default": null,\n            "doc": "The id of the executor to use to execute the ingestion run"\n          },\n          {\n            "type": [\n              "null",\n              "boolean"\n            ],\n            "name": "debugMode",\n            "default": null,\n            "doc": "Whether or not to run this ingestion source in debug mode"\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "map",\n                "values": "string"\n              }\n            ],\n            "name": "extraArgs",\n            "default": null,\n            "doc": "Extra arguments for the ingestion run."\n          }\n        ]\n      },\n      "name": "config",\n      "doc": "Parameters associated with the Ingestion Source"\n    }\n  ],\n  "doc": "Info about a DataHub ingestion source"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);