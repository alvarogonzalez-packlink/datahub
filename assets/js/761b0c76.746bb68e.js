"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),i=n(67294),r=n(86010),l=n(51048),o=n(33609),s=n(1943),c=n(72957);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:m,className:f}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[N,w]=(0,i.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==N&&(O(t),w(a),null!=m&&y(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:j},l,{className:(0,r.Z)("tabs__item",u,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},82752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),r=n(34259),l=n(18679);const o={sidebar_position:15,title:"File",slug:"/generated/ingestion/sources/file",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md"},s="File",c={unversionedId:"docs/generated/ingestion/sources/file",id:"version-0.10.5/docs/generated/ingestion/sources/file",title:"File",description:"Certified",source:"@site/versioned_docs/version-0.10.5/docs/generated/ingestion/sources/file.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/file",permalink:"/docs/generated/ingestion/sources/file",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md",tags:[],version:"0.10.5",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"File",slug:"/generated/ingestion/sources/file",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md"},sidebar:"overviewSidebar",previous:{title:"Feast",permalink:"/docs/generated/ingestion/sources/feast"},next:{title:"File Based Lineage",permalink:"/docs/generated/ingestion/sources/file-based-lineage"}},d={},u=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file"},"File"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,i.kt)("p",null,"This plugin pulls metadata from a previously generated file. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/file"},"file sink")," can produce such files, and a number of samples are included in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/mce_files"},"examples/mce_files")," directory."),(0,i.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,i.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," source works out of the box with ",(0,i.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,i.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: file\n  config:\n    # Coordinates\n    filename: ./path/to/mce/file.json\n\nsink:\n  # sink configs\n")),(0,i.kt)("h3",{id:"config-details"},"Config Details"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("div",{className:"config-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("div",{className:"path-line"},(0,i.kt)("span",{className:"path-main"},"path"),"\xa0",(0,i.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,i.kt)("div",{className:"type-name-line"},(0,i.kt)("span",{className:"type-name"},"string"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"File path to folder or file to ingest, or URL to a remote file. If pointed to a folder, all files with extension {file_extension} (default json) within that folder will be processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("div",{className:"path-line"},(0,i.kt)("span",{className:"path-main"},"aspect"))," ",(0,i.kt)("div",{className:"type-name-line"},(0,i.kt)("span",{className:"type-name"},"string"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set to an aspect to only read this aspect for ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("div",{className:"path-line"},(0,i.kt)("span",{className:"path-main"},"count_all_before_starting"))," ",(0,i.kt)("div",{className:"type-name-line"},(0,i.kt)("span",{className:"type-name"},"boolean"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When enabled, counts total number of records in the file before starting. Used for accurate estimation of completion time. Turn it off if startup time is too high. ",(0,i.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,i.kt)("span",{className:"default-value"},"True")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("div",{className:"path-line"},(0,i.kt)("span",{className:"path-main"},"file_extension"))," ",(0,i.kt)("div",{className:"type-name-line"},(0,i.kt)("span",{className:"type-name"},"string"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When providing a folder to use to read files, set this field to control file extensions that you want the source to process. * is a special value that means process every file regardless of extension ",(0,i.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,i.kt)("span",{className:"default-value"},".json")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("div",{className:"path-line"},(0,i.kt)("span",{className:"path-main"},"read_mode"))," ",(0,i.kt)("div",{className:"type-name-line"},(0,i.kt)("span",{className:"type-name"},"Enum"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("div",{className:"default-line "},"Default: ",(0,i.kt)("span",{className:"default-value"},"AUTO")))))))),(0,i.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "FileSourceConfig",\n  "type": "object",\n  "properties": {\n    "path": {\n      "title": "Path",\n      "description": "File path to folder or file to ingest, or URL to a remote file. If pointed to a folder, all files with extension {file_extension} (default json) within that folder will be processed.",\n      "type": "string"\n    },\n    "file_extension": {\n      "title": "File Extension",\n      "description": "When providing a folder to use to read files, set this field to control file extensions that you want the source to process. * is a special value that means process every file regardless of extension",\n      "default": ".json",\n      "type": "string"\n    },\n    "read_mode": {\n      "default": "AUTO",\n      "allOf": [\n        {\n          "$ref": "#/definitions/FileReadMode"\n        }\n      ]\n    },\n    "aspect": {\n      "title": "Aspect",\n      "description": "Set to an aspect to only read this aspect for ingestion.",\n      "type": "string"\n    },\n    "count_all_before_starting": {\n      "title": "Count All Before Starting",\n      "description": "When enabled, counts total number of records in the file before starting. Used for accurate estimation of completion time. Turn it off if startup time is too high.",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "path"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "FileReadMode": {\n      "title": "FileReadMode",\n      "description": "An enumeration.",\n      "enum": [\n        "STREAM",\n        "BATCH",\n        "AUTO"\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.file.GenericFileSource")),(0,i.kt)("li",{parentName:"ul"},"Browse on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"GitHub"))),(0,i.kt)("h2",null,"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring ingestion for File, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}m.isMDXComponent=!0}}]);