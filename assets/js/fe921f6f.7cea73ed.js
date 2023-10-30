"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39844],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=m(a),f=n,u=p["".concat(d,".").concat(f)]||p[f]||c[f]||o;return a?r.createElement(u,s(s({ref:e},l),{},{components:a})):r.createElement(u,s({ref:e},l))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[p]="string"==typeof t?t:n,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2830:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={title:"Introduction",sidebar_label:"Introduction",slug:"/metadata-ingestion/docs/transformer/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md"},s="Transformers",i={unversionedId:"metadata-ingestion/docs/transformer/intro",id:"version-0.12.0/metadata-ingestion/docs/transformer/intro",title:"Introduction",description:"What\u2019s a transformer?",source:"@site/versioned_docs/version-0.12.0/metadata-ingestion/docs/transformer/intro.md",sourceDirName:"metadata-ingestion/docs/transformer",slug:"/metadata-ingestion/docs/transformer/intro",permalink:"/docs/metadata-ingestion/docs/transformer/intro",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md",tags:[],version:"0.12.0",frontMatter:{title:"Introduction",sidebar_label:"Introduction",slug:"/metadata-ingestion/docs/transformer/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md"},sidebar:"overviewSidebar",previous:{title:"File",permalink:"/docs/metadata-ingestion/sink_docs/file"},next:{title:"Dataset",permalink:"/docs/metadata-ingestion/docs/transformer/dataset_transformer"}},d={},m=[{value:"What\u2019s a transformer?",id:"whats-a-transformer",level:2},{value:"Provided transformers",id:"provided-transformers",level:2}],l={toc:m},p="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transformers"},"Transformers"),(0,n.kt)("h2",{id:"whats-a-transformer"},"What\u2019s a transformer?"),(0,n.kt)("p",null,"Oftentimes we want to modify metadata before it reaches the ingestion sink \u2013 for instance, we might want to add custom tags, ownership, properties, or patch some fields. A transformer allows us to do exactly these things."),(0,n.kt)("p",null,"Moreover, a transformer allows one to have fine-grained control over the metadata that\u2019s ingested without having to modify the ingestion framework's code yourself. Instead, you can write your own module that can transform metadata events however you like. To include a transformer into a recipe, all that's needed is the name of the transformer as well as any configuration that the transformer needs."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Providing urns for metadata that does not already exist will result in unexpected behavior. Ensure any tags, terms, domains, etc. urns that you want to apply in your transformer already exist in your DataHub instance."),(0,n.kt)("p",{parentName:"admonition"},"For example, adding a domain urn in your transformer to apply to datasets will not create the domain entity if it doesn't exist. Therefore, you can't add documentation to it and it won't show up in Advanced Search. This goes for any metadata you are applying in transformers.")),(0,n.kt)("h2",{id:"provided-transformers"},"Provided transformers"),(0,n.kt)("p",null,"Aside from the option of writing your own transformer (see below), we provide some simple transformers for the use cases of adding: tags, glossary terms, properties and ownership information."),(0,n.kt)("p",null,"DataHub provided transformers for dataset are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-ownership"},"Simple Add Dataset ownership")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-ownership"},"Pattern Add Dataset ownership")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-remove-dataset-ownership"},"Simple Remove Dataset ownership")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#mark-dataset-status"},"Mark Dataset Status")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-globaltags"},"Simple Add Dataset globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-globaltags"},"Pattern Add Dataset globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-globaltags"},"Add Dataset globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#set-dataset-browsepath"},"Set Dataset browsePath")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-glossaryterms"},"Simple Add Dataset glossaryTerms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-glossaryterms"},"Pattern Add Dataset glossaryTerms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-schema-field-glossaryterms"},"Pattern Add Dataset Schema Field glossaryTerms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-schema-field-globaltags"},"Pattern Add Dataset Schema Field globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-datasetproperties"},"Simple Add Dataset datasetProperties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-datasetproperties"},"Add Dataset datasetProperties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-domains"},"Simple Add Dataset domains")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-domains"},"Pattern Add Dataset domains"))))}c.isMDXComponent=!0}}]);