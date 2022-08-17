"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7560],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),l=n(51048),i=n(22713);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(12613),u=n(86010),d="tabItem_1uMI";function c(e){var t,n,r,l=e.lazy,i=e.block,c=e.defaultValue,p=e.values,m=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),N=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,a.useState)(k),C=w[0],T=w[1],O=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=N[m];null!=S&&S!==C&&f.some((function(e){return e.value===S}))&&T(S)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==C&&(E(t),T(r),null!=m&&y(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:D,onClick:D},null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},3271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(37358),o=n(98448),s=["components"],u={title:"CSV",sidebar_label:"CSV",slug:"/generated/ingestion/sources/csv",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/csv.md"},d="CSV",c={unversionedId:"docs/generated/ingestion/sources/csv",id:"docs/generated/ingestion/sources/csv",isDocsHomePage:!1,title:"CSV",description:"Module csv-enricher",source:"@site/genDocs/docs/generated/ingestion/sources/csv.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/csv",permalink:"/docs/generated/ingestion/sources/csv",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/csv.md",tags:[],version:"current",frontMatter:{title:"CSV",sidebar_label:"CSV",slug:"/generated/ingestion/sources/csv",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/csv.md"},sidebar:"overviewSidebar",previous:{title:"ClickHouse",permalink:"/docs/generated/ingestion/sources/clickhouse"},next:{title:"dbt",permalink:"/docs/generated/ingestion/sources/dbt"}},p=[{value:"Module <code>csv-enricher</code>",id:"module-csv-enricher",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"csv"},"CSV"),(0,l.kt)("h2",{id:"module-csv-enricher"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"csv-enricher")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,l.kt)("p",null,"This plugin is used to apply glossary terms, tags, owners and domain at the entity level. It can also be used to apply tags\nand glossary terms at the column level. These values are read from a CSV file and can be used to either overwrite\nor append the above aspects to entities."),(0,l.kt)("p",null,"The format of the CSV must be like so, with a few example rows."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"resource"),(0,l.kt)("th",{parentName:"tr",align:null},"subresource"),(0,l.kt)("th",{parentName:"tr",align:null},"glossary_terms"),(0,l.kt)("th",{parentName:"tr",align:null},"tags"),(0,l.kt)("th",{parentName:"tr",align:null},"owners"),(0,l.kt)("th",{parentName:"tr",align:null},"ownership_type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"domain"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[urn:li:glossaryTerm:AccountBalance]"),(0,l.kt)("td",{parentName:"tr",align:null},"[urn:li:tag:Legacy]"),(0,l.kt)("td",{parentName:"tr",align:null},"[urn:li:corpuser:datahub","|","urn:li:corpuser:jdoe]"),(0,l.kt)("td",{parentName:"tr",align:null},"TECHNICAL_OWNER"),(0,l.kt)("td",{parentName:"tr",align:null},"new description"),(0,l.kt)("td",{parentName:"tr",align:null},"urn:li:domain:Engineering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"),(0,l.kt)("td",{parentName:"tr",align:null},"field_foo"),(0,l.kt)("td",{parentName:"tr",align:null},"[urn:li:glossaryTerm:AccountBalance]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"field_foo!"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"),(0,l.kt)("td",{parentName:"tr",align:null},"field_bar"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[urn:li:tag:Legacy]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"field_bar?"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Note that the first row does not have a subresource populated. That means any glossary terms, tags, and owners will\nbe applied at the entity field. If a subresource IS populated (as it is for the second and third rows), glossary\nterms and tags will be applied on the subresource. Every row MUST have a resource. Also note that owners can only\nbe applied at the resource level and will be ignored if populated for a row with a subresource."),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"csv-enricher")," source works out of the box with ",(0,l.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to CSV file to ingest"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write_semantics"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'Whether the new tags, terms and owners to be added will override the existing ones added only by this source or not. Value for this config can be "PATCH" or "OVERRIDE"'),(0,l.kt)("td",{parentName:"tr",align:null},"PATCH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Delimiter to use when parsing CSV"),(0,l.kt)("td",{parentName:"tr",align:null},",")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"array_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Delimiter to use when parsing array fields (tags, terms and owners)"),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "CSVEnricherConfig",\n  "type": "object",\n  "properties": {\n    "filename": {\n      "title": "Filename",\n      "description": "Path to CSV file to ingest",\n      "type": "string"\n    },\n    "write_semantics": {\n      "title": "Write Semantics",\n      "description": "Whether the new tags, terms and owners to be added will override the existing ones added only by this source or not. Value for this config can be \\"PATCH\\" or \\"OVERRIDE\\"",\n      "default": "PATCH",\n      "type": "string"\n    },\n    "delimiter": {\n      "title": "Delimiter",\n      "description": "Delimiter to use when parsing CSV",\n      "default": ",",\n      "type": "string"\n    },\n    "array_delimiter": {\n      "title": "Array Delimiter",\n      "description": "Delimiter to use when parsing array fields (tags, terms and owners)",\n      "default": "|",\n      "type": "string"\n    }\n  },\n  "required": [\n    "filename"\n  ],\n  "additionalProperties": false\n}\n')))),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.csv_enricher.CSVEnricherSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/csv_enricher.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for CSV, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);