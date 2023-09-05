"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"What is a search document?",slug:"/what/search-document",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/search-document.md"},i="What is a search document?",s={unversionedId:"docs/what/search-document",id:"docs/what/search-document",title:"What is a search document?",description:"Search documents are also modeled using PDL explicitly.",source:"@site/genDocs/docs/what/search-document.md",sourceDirName:"docs/what",slug:"/what/search-document",permalink:"/docs/next/what/search-document",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/search-document.md",tags:[],version:"current",frontMatter:{title:"What is a search document?",slug:"/what/search-document",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/search-document.md"}},c={},l=[],m={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-search-document"},"What is a search document?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Search_engine_indexing"},"Search documents")," are also modeled using ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"PDL")," explicitly.\nIn many ways, the model for a Document is very similar to an ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/what/entity"},"Entity")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/what/relationship"},"Relationship")," model,\nwhere each attribute/field contains a value that\u2019s derived from various metadata aspects.\nHowever, a search document is also allowed to have array type of attribute that contains only primitives or enum items.\nThis is because most full-text search engines supports membership testing against an array field, e.g. an array field containing all the terms used in a document."),(0,r.kt)("p",null,"One obvious use of the attributes is to perform search filtering, e.g. give me all the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," whose first name or last name is similar to \u201cJoe\u201d and reports up to ",(0,r.kt)("inlineCode",{parentName:"p"},"userFoo"),".\nSince the document is also served as the main interface for the search API, the attributes can also be used to format the search snippet.\nAs a result, one may be tempted to add as many attributes as needed. This is acceptable as the underlying search engine is designed to index a large number of fields."),(0,r.kt)("p",null,"Below shows an example schema for the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," search document. Note that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each search document is required to have a type-specific ",(0,r.kt)("inlineCode",{parentName:"li"},"urn")," field, generally maps to an entity in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/what/graph"},"graph"),"."),(0,r.kt)("li",{parentName:"ol"},"Similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity"),", each document has an optional ",(0,r.kt)("inlineCode",{parentName:"li"},"removed"),' field for "soft deletion".\nThis is captured in ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/search/BaseDocument.pdl"},"BaseDocument"),", which is expected to be included by all documents."),(0,r.kt)("li",{parentName:"ol"},"Similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity"),", all remaining fields are made ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," to support partial updates."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"management")," shows an example of a string array field."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ownedDataset")," shows an example on how a field can be derived from metadata ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/what/aspect"},"aspects")," associated with other types of entity (in this case, ",(0,r.kt)("inlineCode",{parentName:"li"},"Dataset"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.search\n\n/**\n * Common fields that may apply to all documents\n */\nrecord BaseDocument {\n\n  /** Whether the entity has been removed or not */\n  removed: optional boolean = false\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.search\n\nimport com.linkedin.common.CorpuserUrn\nimport com.linkedin.common.DatasetUrn\n\n/**\n * Data model for user entity search\n */\nrecord UserDocument includes BaseDocument {\n\n  /** Urn for the user */\n  urn: CorpuserUrn\n\n  /** First name of the user */\n  firstName: optional string\n\n  /** Last name of the user */\n  lastName: optional string\n\n  /** The chain of management all the way to CEO */\n  management: optional array[CorpuserUrn] = []  \n\n  /** Code for the cost center */\n  costCenter: optional int\n\n  /** The list of dataset the user owns */\n  ownedDatasets: optional array[DatasetUrn] = []  \n}\n")))}p.isMDXComponent=!0}}]);