"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[85912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(a),m=i,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||n;return a?r.createElement(p,o(o({ref:t},d),{},{components:a})):r.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var r=a(87462),i=(a(67294),a(3905));const n={title:"Overview",sidebar_label:"Overview",slug:"/architecture/architecture",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md"},o="DataHub Architecture Overview",c={unversionedId:"docs/architecture/architecture",id:"version-0.11.0/docs/architecture/architecture",title:"Overview",description:"DataHub is a 3rd generation Metadata Platform that enables Data Discovery, Collaboration, Governance, and end-to-end Observability",source:"@site/versioned_docs/version-0.11.0/docs/architecture/architecture.md",sourceDirName:"docs/architecture",slug:"/architecture/architecture",permalink:"/docs/0.11.0/architecture/architecture",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/architecture/architecture",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md"},sidebar:"overviewSidebar",previous:{title:"GlobalSettings",permalink:"/docs/0.11.0/generated/metamodel/entities/globalsettings"},next:{title:"Components",permalink:"/docs/0.11.0/components"}},s={},l=[{value:"Architecture Highlights",id:"architecture-highlights",level:2},{value:"Schema-first approach to Metadata Modeling",id:"schema-first-approach-to-metadata-modeling",level:3},{value:"Stream-based Real-time Metadata Platform",id:"stream-based-real-time-metadata-platform",level:3},{value:"Federated Metadata Serving",id:"federated-metadata-serving",level:3}],d={toc:l},h="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-architecture-overview"},"DataHub Architecture Overview"),(0,i.kt)("p",null,"DataHub is a ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"3rd generation")," Metadata Platform that enables Data Discovery, Collaboration, Governance, and end-to-end Observability\nthat is built for the Modern Data Stack. DataHub employs a model-first philosophy, with a focus on unlocking interoperability between\ndisparate tools & systems."),(0,i.kt)("p",null,"The figures below describe the high-level architecture of DataHub."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/datahub-architecture.png"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/DataHub-Architecture.png"})),(0,i.kt)("p",null,"For a more detailed look at the components that make up the Architecture, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/components"},"Components"),"."),(0,i.kt)("h2",{id:"architecture-highlights"},"Architecture Highlights"),(0,i.kt)("p",null,"There are three main highlights of DataHub's architecture."),(0,i.kt)("h3",{id:"schema-first-approach-to-metadata-modeling"},"Schema-first approach to Metadata Modeling"),(0,i.kt)("p",null,"DataHub's metadata model is described using a ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"serialization agnostic language"),". Both ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"REST")," as well as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/graphql"},"GraphQL API-s")," are supported. In addition, DataHub supports an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-events"},"AVRO-based API")," over Kafka to communicate metadata changes and subscribe to them. Our ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/roadmap"},"roadmap")," includes a milestone to support no-code metadata model edits very soon, which will allow for even more ease of use, while retaining all the benefits of a typed API. Read about metadata modeling at ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/metadata-modeling/metadata-model"},"metadata modeling"),"."),(0,i.kt)("h3",{id:"stream-based-real-time-metadata-platform"},"Stream-based Real-time Metadata Platform"),(0,i.kt)("p",null,"DataHub's metadata infrastructure is stream-oriented, which allows for changes in metadata to be communicated and reflected within the platform within seconds. You can also subscribe to changes happening in DataHub's metadata, allowing you to build real-time metadata-driven systems. For example, you can build an access-control system that can observe a previously world-readable dataset adding a new schema field which contains PII, and locks down that dataset for access control reviews."),(0,i.kt)("h3",{id:"federated-metadata-serving"},"Federated Metadata Serving"),(0,i.kt)("p",null,"DataHub comes with a single ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"metadata service (gms)")," as part of the open source repository. However, it also supports federated metadata services which can be owned and operated by different teams \u2013\u2013 in fact, that is how LinkedIn runs DataHub internally. The federated services communicate with the central search index and graph using Kafka, to support global search and discovery while still enabling decoupled ownership of metadata. This kind of architecture is very amenable for companies who are implementing ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html"},"data mesh"),"."))}u.isMDXComponent=!0}}]);