"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[14160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(72957),o=a(16550),s=a(75238),p=a(33609),u=a(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var g=a(51048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==o&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(73992),i=a(18679);const o={sidebar_position:34,title:"OpenAPI",slug:"/generated/ingestion/sources/openapi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/openapi.md"},s="OpenAPI",p={unversionedId:"docs/generated/ingestion/sources/openapi",id:"version-0.10.5/docs/generated/ingestion/sources/openapi",title:"OpenAPI",description:"Certified",source:"@site/versioned_docs/version-0.10.5/docs/generated/ingestion/sources/openapi.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/openapi",permalink:"/docs/generated/ingestion/sources/openapi",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/openapi.md",tags:[],version:"0.10.5",sidebarPosition:34,frontMatter:{sidebar_position:34,title:"OpenAPI",slug:"/generated/ingestion/sources/openapi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/openapi.md"},sidebar:"overviewSidebar",previous:{title:"Okta",permalink:"/docs/generated/ingestion/sources/okta"},next:{title:"Oracle",permalink:"/docs/generated/ingestion/sources/oracle"}},u={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Capabilities",id:"capabilities",level:2},{value:"Automatically recorded examples",id:"automatically-recorded-examples",level:3},{value:"Automatic guessing of IDs",id:"automatic-guessing-of-ids",level:3},{value:"Config details",id:"config-details-1",level:2},{value:"Token authentication",id:"token-authentication",level:3},{value:"Getting dataset metadata from <code>forced_example</code>",id:"getting-dataset-metadata-from-forced_example",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],c={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openapi"},"OpenAPI"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi")," source works out of the box with ",(0,r.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: openapi\n  config:\n    name: test_endpoint # this name will appear in DatHub\n    url: https://test_endpoint.com/\n    swagger_file: classicapi/doc/swagger.json  # where to search for the OpenApi definitions\n    get_token:  # optional, if you need to get an authentication token beforehand\n        request_type: get\n        url: api/authentication/login?username={username}&password={password}\n    username: your_username  # optional\n    password: your_password  # optional\n    forced_examples:  # optionals\n      /accounts/groupname/{name}: ['test']\n      /accounts/username/{name}: ['test']\n    ignore_endpoints: [/ignore/this, /ignore/that, /also/that_other]  # optional, the endpoints to ignore\n\nsink:\n  type: \"datahub-rest\"\n  config:\n    server: 'http://localhost:8080'\n")),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("div",{className:"config-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"name"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"swagger_file"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"url"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"forced_examples"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"object"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"default-line "},"Default: ",(0,r.kt)("span",{className:"default-value"},"{","}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"get_token"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"object"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"default-line "},"Default: ",(0,r.kt)("span",{className:"default-value"},"{","}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"ignore_endpoints"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"array(object)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"password"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"default-line "},"Default: ",(0,r.kt)("span",{className:"default-value"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"token"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"username"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"default-line "},"Default: ",(0,r.kt)("span",{className:"default-value"})))))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "OpenApiConfig",\n  "type": "object",\n  "properties": {\n    "name": {\n      "title": "Name",\n      "type": "string"\n    },\n    "url": {\n      "title": "Url",\n      "type": "string"\n    },\n    "swagger_file": {\n      "title": "Swagger File",\n      "type": "string"\n    },\n    "ignore_endpoints": {\n      "title": "Ignore Endpoints",\n      "default": [],\n      "type": "array",\n      "items": {}\n    },\n    "username": {\n      "title": "Username",\n      "default": "",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "default": "",\n      "type": "string"\n    },\n    "forced_examples": {\n      "title": "Forced Examples",\n      "default": {},\n      "type": "object"\n    },\n    "token": {\n      "title": "Token",\n      "type": "string"\n    },\n    "get_token": {\n      "title": "Get Token",\n      "default": {},\n      "type": "object"\n    }\n  },\n  "required": [\n    "name",\n    "url",\n    "swagger_file"\n  ],\n  "additionalProperties": false\n}\n')))),(0,r.kt)("p",null,"The dataset metadata should be defined directly in the Swagger file, section ",(0,r.kt)("inlineCode",{parentName:"p"},'["example"]'),". If this is not true, the following procedures will take place."),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This plugin reads the swagger file where the endpoints are defined, reads example data if provided (for any method), or searches for\ndata for the endpoints which do not have example data and accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," call."),(0,r.kt)("p",null,"For every selected endpoint defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"paths")," section,\nthe tool searches whether the metadata are already defined.\nAs example, if in your swagger file there is the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/users/")," defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'paths:\n  /api/users/:\n    get:\n      tags: [ "Users" ]\n      operationID: GetUsers\n      description: Retrieve users data\n      responses:\n        \'200\':\n          description: Return the list of users\n          content:\n            application/json:\n              example:\n                {"user": "username", "name": "Full Name", "job": "any", "is_active": True}\n')),(0,r.kt)("p",null,"then this plugin has all the information needed to create the dataset in DataHub."),(0,r.kt)("p",null,"In case there is no example defined, the plugin will try to get the metadata directly from the endpoint, if it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method.\nSo, if in your swagger file you have"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /colors/:\n    get:\n      tags: [ \"Colors\" ]\n      operationID: GetDefinedColors\n      description: Retrieve colors\n      responses:\n        '200':\n          description: Return the list of colors\n")),(0,r.kt)("p",null,"the tool will make a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," call to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://test_endpoint.com/colors"),"\nand parse the response obtained."),(0,r.kt)("h3",{id:"automatically-recorded-examples"},"Automatically recorded examples"),(0,r.kt)("p",null,"Sometimes you can have an endpoint which wants a parameter to work, like\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://test_endpoint.com/colors/{color}"),"."),(0,r.kt)("p",null,"Since in the OpenApi specifications the listing endpoints are specified\njust before the detailed ones, in the list of the paths, you will find"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors\n")),(0,r.kt)("p",null,"defined before"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/{color}\n")),(0,r.kt)("p",null,"This plugin is set to automatically keep an example of the data given by the first URL,\nwhich with some probability will include an example of attribute needed by the second."),(0,r.kt)("p",null,"So, if by calling GET to the first URL you get as response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"pantone code": 100,\n "color": "yellow",\n ...}\n')),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},'"color": "yellow"'),"  part will be used to complete the second link, which\nwill become:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/yellow\n")),(0,r.kt)("p",null,"and this last URL will be called to get back the needed metadata."),(0,r.kt)("h3",{id:"automatic-guessing-of-ids"},"Automatic guessing of IDs"),(0,r.kt)("p",null,"If no useful example is found, a second procedure will try to guess a numerical ID.\nSo if we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/{colorID}\n")),(0,r.kt)("p",null,"and there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"colorID")," example already found by the plugin,\nit will try to put a number one (1) at the parameter place"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/1\n")),(0,r.kt)("p",null,"and this URL will be called to get back the needed metadata."),(0,r.kt)("h2",{id:"config-details-1"},"Config details"),(0,r.kt)("h3",{id:"token-authentication"},"Token authentication"),(0,r.kt)("p",null,"If this tool needs to get an access token to interrogate the endpoints, this can be requested. Two methods are available at the moment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'get' : this requires username/password combination to be present in the url. Note that {username} and {password} are mandatory placeholders. They will be replaced with the true credentials at runtime. Note that username and password will be sent in the request address, so it's unsecure. If your provider allows for the other method, please go for it."),(0,r.kt)("li",{parentName:"ul"},"'post' : username and password will be inserted in the body of the POST request")),(0,r.kt)("p",null,"In both cases, username and password are the ones defined in the configuration file."),(0,r.kt)("h3",{id:"getting-dataset-metadata-from-forced_example"},"Getting dataset metadata from ",(0,r.kt)("inlineCode",{parentName:"h3"},"forced_example")),(0,r.kt)("p",null,"Suppose you have an endpoint defined in the swagger file, but without example given, and the tool is\nunable to guess the URL. In such cases you can still manually specify it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"forced_examples")," part of the\nconfiguration file."),(0,r.kt)("p",null,"As example, if in your swagger file you have"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /accounts/groupname/{name}/:\n    get:\n      tags: [ \"Groups\" ]\n      operationID: GetGroup\n      description: Retrieve group data\n      responses:\n        '200':\n          description: Return details about the group\n")),(0,r.kt)("p",null,"and the plugin did not find an example in its previous calls,\nthe tool has no idea about what to substitute for the ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}")," part."),(0,r.kt)("p",null,"By specifying in the configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    forced_examples:  # optionals\n      /accounts/groupname/{name}: ['test']\n")),(0,r.kt)("p",null,"the plugin is able to build a correct URL, as follows:"),(0,r.kt)("p",null,"https://test_endpoint.com/accounts/groupname/test"),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.openapi.OpenApiSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/openapi.py"},"GitHub"))),(0,r.kt)("h2",null,"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for OpenAPI, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}h.isMDXComponent=!0}}]);