"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87764],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>c});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=n.createContext({}),p=function(t){var a=n.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},s=function(t){var a=p(t.components);return n.createElement(o.Provider,{value:a},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),u=p(e),k=r,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return e?n.createElement(c,i(i({ref:a},s),{},{components:e})):n.createElement(c,i({ref:a},s))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},37915:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=e(87462),r=(e(67294),e(3905));const l={title:"Which DataHub API is for me?",slug:"/api/datahub-apis",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/datahub-apis.md"},i="Which DataHub API is for me?",d={unversionedId:"docs/api/datahub-apis",id:"docs/api/datahub-apis",title:"Which DataHub API is for me?",description:"DataHub supplys several APIs to manipulate metadata on the platform. These are our most-to-least recommended approaches:",source:"@site/genDocs/docs/api/datahub-apis.md",sourceDirName:"docs/api",slug:"/api/datahub-apis",permalink:"/docs/next/api/datahub-apis",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/datahub-apis.md",tags:[],version:"current",frontMatter:{title:"Which DataHub API is for me?",slug:"/api/datahub-apis",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/datahub-apis.md"},sidebar:"overviewSidebar",previous:{title:"Updating DataHub",permalink:"/docs/next/how/updating-datahub"},next:{title:"DataHub GraphQL API",permalink:"/docs/next/api/graphql/overview"}},o={},p=[{value:"Python and Java SDK",id:"python-and-java-sdk",level:2},{value:"GraphQL API",id:"graphql-api",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"Rest.li API",id:"restli-api",level:2},{value:"DataHub API Comparison",id:"datahub-api-comparison",level:2}],s={toc:p},u="wrapper";function m(t){let{components:a,...e}=t;return(0,r.kt)(u,(0,n.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"which-datahub-api-is-for-me"},"Which DataHub API is for me?"),(0,r.kt)("p",null,"DataHub supplys several APIs to manipulate metadata on the platform. These are our most-to-least recommended approaches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our most recommended tools for extending and customizing the behavior of your DataHub instance are our SDKs in ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/metadata-ingestion/as-a-library"},"Python")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/metadata-integration/java/as-a-library"},"Java"),"."),(0,r.kt)("li",{parentName:"ul"},"If you'd like to customize the DataHub client or roll your own; the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/graphql/getting-started"},"GraphQL API")," is our what powers our frontend. We figure if it's good enough for us, it's good enough for everyone! If ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," doesn't cover everything in your usecase, drop into ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/slack"},"our slack")," and let us know how we can improve it!"),(0,r.kt)("li",{parentName:"ul"},"If you are less familiar with ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," and would rather use OpenAPI, we offer ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/openapi/openapi-usage-guide"},"OpenAPI")," endpoints that allow you to produce metadata events and query metadata."),(0,r.kt)("li",{parentName:"ul"},"Finally, if you're a brave soul and know exactly what you are doing... are you sure you don't just want to use the SDK directly? If you insist, the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/restli/restli-overview"},"Rest.li API")," is a much more powerful, low level API intended only for advanced users.")),(0,r.kt)("h2",{id:"python-and-java-sdk"},"Python and Java SDK"),(0,r.kt)("p",null,"We offer an SDK for both Python and Java that provide full functionality when it comes to CRUD operations and any complex functionality you may want to build into DataHub."),(0,r.kt)("a",{className:"button button--primary button--lg",href:"/docs/metadata-ingestion/as-a-library"},"Get started with the Python SDK"),(0,r.kt)("a",{className:"button button--primary button--lg",href:"/docs/metadata-integration/java/as-a-library"},"Get started with the Java SDK"),(0,r.kt)("h2",{id:"graphql-api"},"GraphQL API"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," API serves as the primary public API for the platform. It can be used to fetch and update metadata programatically in the language of your choice. Intended as a higher-level API that simplifies the most common operations."),(0,r.kt)("a",{className:"button button--primary button--lg",href:"/docs/api/graphql/getting-started"},"Get started with the GraphQL API"),(0,r.kt)("h2",{id:"openapi"},"OpenAPI"),(0,r.kt)("p",null,"For developers who prefer OpenAPI to GraphQL for programmatic operations. Provides lower-level API access to the entire DataHub metadata model for writes, reads and queries."),(0,r.kt)("a",{className:"button button--primary button--lg",href:"/docs/api/openapi/openapi-usage-guide"},"Get started with OpenAPI"),(0,r.kt)("h2",{id:"restli-api"},"Rest.li API"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Rest.li API is intended only for advanced users. If you're just getting started with DataHub, we recommend the GraphQL API")),(0,r.kt)("p",null,"The Rest.li API represents the underlying persistence layer, and exposes the raw PDL models used in storage. Under the hood, it powers the GraphQL API. Aside from that, it is also used for system-specific ingestion of metadata, being used by the Metadata Ingestion Framework for pushing metadata into DataHub directly. For all intents and purposes, the Rest.li API is considered system-internal, meaning DataHub components are the only ones to consume this API directly."),(0,r.kt)("a",{className:"button button--primary button--lg",href:"/docs/api/restli/restli-overview"},"Get started with our Rest.li API"),(0,r.kt)("h2",{id:"datahub-api-comparison"},"DataHub API Comparison"),(0,r.kt)("p",null,"DataHub supports several APIs, each with its own unique usage and format.\nHere's an overview of what each API can do."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last Updated : Apr 8 2023")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"GraphQL"),(0,r.kt)("th",{parentName:"tr",align:null},"Python SDK"),(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/datasets"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete a dataset (Soft delete)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/datasets#delete-dataset"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/datasets#delete-dataset"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete a dataset (Hard delele)"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/datasets#delete-dataset"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Search a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create a tag"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read a tag"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add tags to a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add tags to a column of a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remove tags from a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/tags#add-tags"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create glossary terms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read terms from a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add terms to a column of a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add terms to a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/terms"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create domains"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read domains"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add domains to a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remove domains from a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/domains"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Crate users and groups"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read owners of a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add owner to a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remove owner from a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/owners"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add lineage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/lineage"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/lineage"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add column level(Fine Grained) lineage"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add documentation(description) to a column of a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/descriptions#add-description-on-column"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/descriptions#add-description-on-column"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add documentation(description) to a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/descriptions#add-description-on-dataset"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/descriptions#add-description-on-dataset"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add / Remove / Replace custom properties on a dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/custom-properties"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/tutorials/custom-properties"},"[Guide]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))))}m.isMDXComponent=!0}}]);