"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9551],{1085:(e,t,n)=>{n.d(t,{Z:()=>a});const a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"}},8913:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1413),r=n(67294),s=n(1085),o=n(89099),i=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s.Z}))};i.displayName="CloseCircleFilled";const l=r.forwardRef(i)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),s=n(86010),o=n(72957),i=n(16550),l=n(75238),p=n(33609),u=n(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,p]=m({queryString:n,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),w=(()=>{const e=l??c;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{w&&i(w)}),[w]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,s]),tabValues:s}}var w=n(51048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},o,{className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=y(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,w.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},53502:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),r=n(86010);const s="availabilityCard_P5od",o="managedIcon_AxXO",i="platform_wqXv",l="platformAvailable_Y8lN";var p=n(8913),u=n(1413);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var h=n(89099),d=function(e,t){return a.createElement(h.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:c}))};d.displayName="CheckCircleFilled";const m=a.forwardRef(d);const y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"}}]},name:"cloud",theme:"outlined"};var w=function(e,t){return a.createElement(h.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:y}))};w.displayName="CloudOutlined";const f=a.forwardRef(w),g=e=>{let{saasOnly:t,ossOnly:n}=e;return a.createElement("div",{className:(0,r.Z)(s,"card")},a.createElement("strong",null,"Feature Availability"),a.createElement("div",null,a.createElement("span",{className:(0,r.Z)(i,!t&&l)},"Self-Hosted DataHub ",t?a.createElement(p.Z,null):a.createElement(m,null))),a.createElement("div",null,a.createElement(f,{className:o}),a.createElement("span",{className:(0,r.Z)(i,!n&&l)},"Managed DataHub ",n?a.createElement(p.Z,null):a.createElement(m,null))))}},79078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=n(87462),r=(n(67294),n(3905)),s=n(53502),o=n(73992),i=n(18679);const l={title:"Custom Ownership Types",slug:"/ownership/ownership-types",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/ownership/ownership-types.md"},p="Custom Ownership Types",u={unversionedId:"docs/ownership/ownership-types",id:"version-0.12.1/docs/ownership/ownership-types",title:"Custom Ownership Types",description:"\ud83e\udd1d Version compatibility",source:"@site/versioned_docs/version-0.12.1/docs/ownership/ownership-types.md",sourceDirName:"docs/ownership",slug:"/ownership/ownership-types",permalink:"/docs/0.12.1/ownership/ownership-types",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/ownership/ownership-types.md",tags:[],version:"0.12.1",frontMatter:{title:"Custom Ownership Types",slug:"/ownership/ownership-types",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/ownership/ownership-types.md"},sidebar:"overviewSidebar",previous:{title:"Tags",permalink:"/docs/0.12.1/tags"},next:{title:"Access Policies",permalink:"/docs/0.12.1/authorization/access-policies-guide"}},c={},h=[{value:"What are Custom Ownership Types?",id:"what-are-custom-ownership-types",level:2},{value:"Why Custom Ownership Types?",id:"why-custom-ownership-types",level:2},{value:"Benefits of Custom Ownership Types",id:"benefits-of-custom-ownership-types",level:2},{value:"How Can You Use Custom Ownership Types?",id:"how-can-you-use-custom-ownership-types",level:2},{value:"Custom Ownership Types Setup, Prerequisites, and Permissions",id:"custom-ownership-types-setup-prerequisites-and-permissions",level:2},{value:"Using Custom Ownership Types",id:"using-custom-ownership-types",level:2},{value:"Managing Custom Ownership Types",id:"managing-custom-ownership-types",level:3},{value:"Assigning a Custom Ownership Type to an Entity (UI)",id:"assigning-a-custom-ownership-type-to-an-entity-ui",level:3}],d={toc:h},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-ownership-types"},"Custom Ownership Types"),(0,r.kt)(s.Z,{mdxType:"FeatureAvailability"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83e\udd1d Version compatibility")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Open Source DataHub: ",(0,r.kt)("strong",{parentName:"p"},"0.10.4")," | Acryl: ",(0,r.kt)("strong",{parentName:"p"},"0.2.8"))),(0,r.kt)("h2",{id:"what-are-custom-ownership-types"},"What are Custom Ownership Types?"),(0,r.kt)("p",null,"Custom Ownership Types are an improvement on the way to establish ownership relationships between users and the data assets they manage within DataHub."),(0,r.kt)("h2",{id:"why-custom-ownership-types"},"Why Custom Ownership Types?"),(0,r.kt)("p",null,"DataHub brings a pre-defined opinion on ownership relationships. We are aware that it may not always precisely match what you may need.\nWith this feature you can modify it to better match the terminology used by stakeholders."),(0,r.kt)("h2",{id:"benefits-of-custom-ownership-types"},"Benefits of Custom Ownership Types"),(0,r.kt)("p",null,"Custom ownership types allow users to bring in their organization's ownership nomenclature straight into DataHub.\nThis allows stakeholders to discover what relationships an owner of an entity has using the language already in-use at organizations."),(0,r.kt)("h2",{id:"how-can-you-use-custom-ownership-types"},"How Can You Use Custom Ownership Types?"),(0,r.kt)("p",null,"Custom Ownership types have been implemented as a net-new entity in DataHub's Metadata Model meaning all entity-related APIs can be used for them.\nAdditionally, they can be managed through DataHub's Admin UI and then used for ownership across the system in the same way pre-existing ownership types are."),(0,r.kt)("h2",{id:"custom-ownership-types-setup-prerequisites-and-permissions"},"Custom Ownership Types Setup, Prerequisites, and Permissions"),(0,r.kt)("p",null,"What you need to create and add ownership types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manage Ownership Types")," metadata privilege to create/delete/update Ownership Types at the platform level. These can be granted by a ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.12.1/authorization/policies#platform-policies"},"Platform Policy"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Edit Owners")," metadata privilege to add or remove an owner with an associated custom ownership type for a given entity.")),(0,r.kt)("p",null,"You can create this privileges by creating a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/authorization/policies#metadata-policies"},"Metadata Policy"),"."),(0,r.kt)("h2",{id:"using-custom-ownership-types"},"Using Custom Ownership Types"),(0,r.kt)("p",null,"Custom Ownership Types can be managed using the UI, via a graphQL command or ingesting an MCP which can be managed using software engineering (GitOps) practices."),(0,r.kt)("h3",{id:"managing-custom-ownership-types"},"Managing Custom Ownership Types"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ui",label:"UI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To manage a Custom Ownership type, first navigate to the DataHub Admin page:"),(0,r.kt)("p",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ownership/manage-view.png"})),"Then navigate to the `Ownership Types` tab under the `Management` section.",(0,r.kt)("p",null,"To create a new type simply click '+ Create new Ownership Type'."),(0,r.kt)("p",null,"This will open a new modal where you can configure your Ownership Type."),(0,r.kt)("p",null,"Inside the form, you can choose a name for your Ownership Type. You can also add descriptions for your ownership types to help other users more easily understand their meaning. "),(0,r.kt)("p",null,"Don't worry, this can be changed later."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ownership/ownership-type-create.png"})),"Once you've chosen a name and a description, click 'Save' to create the new Ownership Type.",(0,r.kt)("p",null,"You can also edit and delete types in this UI by click on the ellipsis in the management view for the type you wish to change/delete.")),(0,r.kt)(i.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},"Just like all other DataHub metadata entities DataHub ships with a JSON-based custom ownership type spec, for defining and managing Custom Ownership Types as code.",(0,r.kt)("p",null,'Here is an example of a custom ownership type named "Architect":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'# Inlined from /metadata-ingestion/examples/ownership/ownership_type.json\n[\n  {\n    "auditHeader":null,\n    "entityType":"ownershipType",\n    "entityUrn": "urn:li:ownershipType:architect",\n    "changeType":"UPSERT",\n    "aspectName":"ownershipTypeInfo",\n    "aspect":{\n      "value":"{\\"name\\": \\"Architect\\", \\"description\\": \\"Technical person responsible for the asset\\", \\"created\\": {\\"time\\": 1674291843000,  \\"actor\\": \\"urn:li:corpuser:jdoe\\",  \\"impersonator\\": null},\\n\\"lastModified\\": {\\"time\\": 1674291843000,  \\"actor\\": \\"urn:li:corpuser:jdoe\\",  \\"impersonator\\": null}}",\n      "contentType":"application/json"\n    },\n    "systemMetadata":null\n  }\n]\n')),(0,r.kt)("p",null,"To upload this file to DataHub, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli via the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," group of commands using the file-based recipe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# see https://datahubproject.io/docs/generated/ingestion/sources/file for complete documentation\nsource:\n  type: "file"\n  config:\n    # path to json file\n    path: "metadata-ingestion/examples/ownership/ownership_type.json"\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:9002/api/gms"\n')),(0,r.kt)("p",null,"Finally running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c recipe.yaml\n")),(0,r.kt)("p",null,"For any update you wish to do, simply update the json file and re-ingest via the cli."),(0,r.kt)("p",null,"To delete the ownership type, simply run a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/how/delete-metadata#soft-delete-the-default"},"delete command")," for the urn of the ownership type in question, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:ownershipType:architect"),".")),(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"You can also create/update/delete custom ownership types using DataHub's built-in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/api/graphql/how-to-set-up-graphql#graphql-explorer-graphiql"},(0,r.kt)("inlineCode",{parentName:"a"},"GraphiQL")," editor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation {\n  createOwnershipType(\n    input: {\n      name: "Architect"\n      description: "Technical person responsible for the asset"\n    }\n  ) {\n    urn\n    type\n    info {\n      name\n        description\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createOwnershipType": {\n      "urn": "urn:li:ownershipType:ccf9aa80-e3f3-4620-93a1-8d4a2ceaf5de",\n      "type": "CUSTOM_OWNERSHIP_TYPE",\n      "status": null,\n      "info": {\n        "name": "Architect",\n        "description": "Technical person responsible for the asset",\n        "created": null,\n        "lastModified": null\n      }\n    }\n  },\n  "extensions": {}\n}\n')),(0,r.kt)("p",null,"There are also ",(0,r.kt)("inlineCode",{parentName:"p"},"updateOwnershipType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOwnershipType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listOwnershipTypes")," endpoints for CRUD operations. "),(0,r.kt)("p",null,"Feel free to read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/api/graphql/overview"},"GraphQL reference documentation")," on these endpoints."))),(0,r.kt)("h3",{id:"assigning-a-custom-ownership-type-to-an-entity-ui"},"Assigning a Custom Ownership Type to an Entity (UI)"),(0,r.kt)("p",null,"You can assign an owner with a custom ownership type to an entity either using the Entity's page as the starting point."),(0,r.kt)("p",null,"On an Entity's profile page, use the right sidebar to locate the Owners section. "),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ownership/ownership-type-set-part1.png"})),(0,r.kt)("p",null,"Click 'Add Owners', select the owner you want and then search for the Custom Ownership Type you'd like to add this asset to. When you're done, click 'Add'."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ownership/ownership-type-set-part2.png"})),(0,r.kt)("p",null,"To remove ownership from an asset, click the 'x' icon on the Owner label."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notice: Adding or removing an Owner to an asset requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit Owners")," Metadata Privilege, which can be granted\nby a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/authorization/policies"},"Policy"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}y.isMDXComponent=!0}}]);