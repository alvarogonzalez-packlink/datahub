"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[76738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(87462),r=a(67294),o=a(86010),s=a(72957),i=a(16550),l=a(75238),u=a(33609),c=a(92560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function D(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},60131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),s=a(18679);const i={title:"Deprecation",slug:"/api/tutorials/deprecation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/deprecation.md"},l="Deprecation",u={unversionedId:"docs/api/tutorials/deprecation",id:"docs/api/tutorials/deprecation",title:"Deprecation",description:"Why Would You Deprecate Datasets?",source:"@site/genDocs/docs/api/tutorials/deprecation.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/deprecation",permalink:"/docs/next/api/tutorials/deprecation",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/deprecation.md",tags:[],version:"current",frontMatter:{title:"Deprecation",slug:"/api/tutorials/deprecation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/deprecation.md"},sidebar:"overviewSidebar",previous:{title:"Domains",permalink:"/docs/next/api/tutorials/domains"},next:{title:"Description",permalink:"/docs/next/api/tutorials/descriptions"}},c={},p=[{value:"Why Would You Deprecate Datasets?",id:"why-would-you-deprecate-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Read Deprecation",id:"read-deprecation",level:2},{value:"Update Deprecation",id:"update-deprecation",level:2},{value:"Expected Outcomes of Updating Deprecation",id:"expected-outcomes-of-updating-deprecation",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deprecation"},"Deprecation"),(0,r.kt)("h2",{id:"why-would-you-deprecate-datasets"},"Why Would You Deprecate Datasets?"),(0,r.kt)("p",null,"The Deprecation feature on DataHub indicates the status of an entity. For datasets, keeping the deprecation status up-to-date is important to inform users and downstream systems of changes to the dataset's availability or reliability. By updating the status, you can communicate changes proactively, prevent issues and ensure users are always using highly trusted data assets."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to read or update deprecation status of a dataset."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before updating deprecation, you need to ensure the targeted dataset is already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from a sample ingestion.")),(0,r.kt)("h2",{id:"read-deprecation"},"Read Deprecation"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    deprecation {\n      deprecated\n      decommissionTime\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "deprecation": {\n        "deprecated": false,\n        "decommissionTime": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{ dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") { deprecation { deprecated decommissionTime } } }\", \"variables\":{} }'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "deprecation": { "deprecated": false, "decommissionTime": null }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_deprecation.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import DeprecationClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["deprecation"],\n    aspect_types=[DeprecationClass],\n)\n\nprint(result)\n\n')))),(0,r.kt)("h2",{id:"update-deprecation"},"Update Deprecation"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateDeprecation {\n    updateDeprecation(input: { urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)", deprecated: true })\n}\n')),(0,r.kt)("p",null,"Also note that you can update deprecation status of multiple entities or subresource using ",(0,r.kt)("inlineCode",{parentName:"p"},"batchUpdateDeprecation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation batchUpdateDeprecation {\n    batchUpdateDeprecation(\n      input: {\n        deprecated: true,\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "updateDeprecation": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"mutation updateDeprecation { updateDeprecation(input: { deprecated: true, urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\" }) }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "removeTag": true }, "extensions": {} }\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"})),(0,r.kt)("h3",{id:"expected-outcomes-of-updating-deprecation"},"Expected Outcomes of Updating Deprecation"),(0,r.kt)("p",null,"You can now see the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_created")," has been marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/deprecation-updated.png"})))}h.isMDXComponent=!0}}]);