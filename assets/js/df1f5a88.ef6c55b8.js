"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[73485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(r),m=n,y=l["".concat(p,".").concat(m)]||l[m]||u[m]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"Extended Properties",slug:"/metadata-ingestion/examples/structured_properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/structured_properties/README.md"},o="Extended Properties",s={unversionedId:"metadata-ingestion/examples/structured_properties/README",id:"metadata-ingestion/examples/structured_properties/README",title:"Extended Properties",description:"Expected Capabilities",source:"@site/genDocs/metadata-ingestion/examples/structured_properties/README.md",sourceDirName:"metadata-ingestion/examples/structured_properties",slug:"/metadata-ingestion/examples/structured_properties",permalink:"/docs/metadata-ingestion/examples/structured_properties",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/structured_properties/README.md",tags:[],version:"current",frontMatter:{title:"Extended Properties",slug:"/metadata-ingestion/examples/structured_properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/structured_properties/README.md"}},p={},d=[{value:"Expected Capabilities",id:"expected-capabilities",level:2},{value:"structured_properties command",id:"structured_properties-command",level:3},{value:"dataset command",id:"dataset-command",level:3}],c={toc:d},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"extended-properties"},"Extended Properties"),(0,n.kt)("h2",{id:"expected-capabilities"},"Expected Capabilities"),(0,n.kt)("h3",{id:"structured_properties-command"},"structured_properties command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: io.acryl.privacy.retentionTime\n  # urn: urn:li:structuredProperty:<>\n  # fullyQualifiedName: io.acryl.privacy.retentionTime\n  type: STRING\n  cardinality: MULTIPLE\n  entityTypes:\n    - dataset # or urn:li:logicalEntity:metamodel.datahub.dataset\n    - dataflow\n  description: "Retention Time is used to figure out how long to retain records in a dataset"\n  allowedValues:\n    - value: 30 days\n      description: 30 days, usually reserved for datasets that are ephemeral and contain pii\n    - value: 3 months\n      description: Use this for datasets that drive monthly reporting but contain pii\n    - value: 2 yrs\n      description: Use this for non-sensitive data that can be retained for longer\n- id: io.acryl.dataManagement.replicationSLA\n  type: NUMBER\n  description: "SLA for how long data can be delayed before replicating to the destination cluster"\n  entityTypes:\n    - dataset\n- id: io.acryl.dataManagement.deprecationDate\n  type: DATE\n  entityTypes:\n    - dataset\n    - dataFlow\n    - dataJob\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"datahub properties create -f structured_properties.yaml\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"datahub properties create --name io.acryl.privacy.retentionTime --type STRING --cardinality MULTIPLE --entity_type DATASET --entity_type DATAFLOW\n")),(0,n.kt)("h3",{id:"dataset-command"},"dataset command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"datahub dataset create -f dataset.yaml\n")),(0,n.kt)("p",null,"See example in ",(0,n.kt)("inlineCode",{parentName:"p"},"dataproduct"),"."))}u.isMDXComponent=!0}}]);