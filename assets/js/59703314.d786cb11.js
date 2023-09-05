"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12780],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:26,title:"SchemaField",slug:"/generated/metamodel/entities/schemafield",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/schemaField.md"},l="SchemaField",o={unversionedId:"docs/generated/metamodel/entities/schemaField",id:"version-0.10.5/docs/generated/metamodel/entities/schemaField",title:"SchemaField",description:"Aspects",source:"@site/versioned_docs/version-0.10.5/docs/generated/metamodel/entities/schemaField.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/schemafield",permalink:"/docs/generated/metamodel/entities/schemafield",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/schemaField.md",tags:[],version:"0.10.5",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"SchemaField",slug:"/generated/metamodel/entities/schemafield",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/schemaField.md"},sidebar:"overviewSidebar",previous:{title:"InviteToken",permalink:"/docs/generated/metamodel/entities/invitetoken"},next:{title:"DataHubRole",permalink:"/docs/generated/metamodel/entities/datahubrole"}},s={},d=[{value:"Aspects",id:"aspects",level:2},{value:"schemaFieldKey",id:"schemafieldkey",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],m={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemafield"},"SchemaField"),(0,i.kt)("h2",{id:"aspects"},"Aspects"),(0,i.kt)("h3",{id:"schemafieldkey"},"schemaFieldKey"),(0,i.kt)("p",null,"Key for a SchemaField"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "schemaFieldKey"\n  },\n  "name": "SchemaFieldKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "parent",\n      "doc": "Parent associated with the schema field"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "type": "string",\n      "name": "fieldPath",\n      "doc": "fieldPath identifying the schema field"\n    }\n  ],\n  "doc": "Key for a SchemaField"\n}\n'))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("h3",{id:"incoming"},"Incoming"),(0,i.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DownstreamOf"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dataset via ",(0,i.kt)("inlineCode",{parentName:"li"},"upstreamLineage.fineGrainedLineages")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ForeignKeyTo"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dataset via ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaMetadata.foreignKeys.foreignFields")),(0,i.kt)("li",{parentName:"ul"},"GlossaryTerm via ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaMetadata.foreignKeys.foreignFields")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Consumes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DataJob via ",(0,i.kt)("inlineCode",{parentName:"li"},"dataJobInputOutput.inputDatasetFields")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Produces"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DataJob via ",(0,i.kt)("inlineCode",{parentName:"li"},"dataJobInputOutput.outputDatasetFields")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"consumesField"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Chart via ",(0,i.kt)("inlineCode",{parentName:"li"},"inputFields.fields.schemaFieldUrn")),(0,i.kt)("li",{parentName:"ul"},"Dashboard via ",(0,i.kt)("inlineCode",{parentName:"li"},"inputFields.fields.schemaFieldUrn")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Asserts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assertion via ",(0,i.kt)("inlineCode",{parentName:"li"},"assertionInfo.datasetAssertion.fields"))))),(0,i.kt)("h2",{id:"global-metadata-model"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);