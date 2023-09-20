"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[63613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),u=s,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:s,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),i=a(86010),l=a(72957),r=a(16550),o=a(75238),p=a(33609),c=a(92560);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[l,r]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,p]=f({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=o??d;return u({value:e,tabValues:i})?e:null})();(0,s.useLayoutEffect)((()=>{k&&r(k)}),[k]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var k=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==r&&(d(t),o(n))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>c.push(e),onKeyDown:u,onClick:m},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},s.createElement(N,(0,n.Z)({},e,t)),s.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return s.createElement(b,(0,n.Z)({key:String(t)},e))}},75757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),i=a(73992),l=a(18679);const r={sidebar_position:14,title:"Elasticsearch",slug:"/generated/ingestion/sources/elasticsearch",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elasticsearch.md"},o="Elasticsearch",p={unversionedId:"docs/generated/ingestion/sources/elasticsearch",id:"docs/generated/ingestion/sources/elasticsearch",title:"Elasticsearch",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/elasticsearch.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/elasticsearch",permalink:"/docs/next/generated/ingestion/sources/elasticsearch",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elasticsearch.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Elasticsearch",slug:"/generated/ingestion/sources/elasticsearch",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elasticsearch.md"},sidebar:"overviewSidebar",previous:{title:"DynamoDB",permalink:"/docs/next/generated/ingestion/sources/dynamodb"},next:{title:"Feast",permalink:"/docs/next/generated/ingestion/sources/feast"}},c={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:d},u="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,s.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Capability"),(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/next/platform-instances"},"Platform Instance")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,s.kt)("p",null,"This plugin extracts the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Metadata for indexes"),(0,s.kt)("li",{parentName:"ul"},"Column types associated with each index field")),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[elasticsearch]'\n")),(0,s.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,s.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,s.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "elasticsearch"\n  config:\n    # Coordinates\n    host: \'localhost:9200\'\n\n    # Credentials\n    username: user # optional\n    password: pass # optional\n\n    # SSL support\n    use_ssl: False\n    verify_certs: False\n    ca_certs: "./path/ca.cert"\n    client_cert: "./path/client.cert"\n    client_key: "./path/client.key"\n    ssl_assert_hostname: False\n    ssl_assert_fingerprint: "./path/cert.fingerprint"\n\n    # Options\n    url_prefix: "" # optional url_prefix\n    env: "PROD"\n    index_pattern:\n      allow: [".*some_index_name_pattern*"]\n      deny: [".*skip_index_name_pattern*"]\n    ingest_index_templates: False\n    index_template_pattern:\n      allow: [".*some_index_template_name_pattern*"]\n\nsink:\n# sink configs\n\n')),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"ca_certs"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Path to a certificate authority (CA) certificate.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"client_cert"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Path to the file containing the private key and the certificate, or cert only if using client_key.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"client_key"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Path to the file containing the private key if using separate cert and key files.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"host"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The elastic search host URI. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"localhost:9200")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"ingest_index_templates"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Ingests ES index templates if enabled. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"password"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The password credential.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"ssl_assert_fingerprint"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Verify the supplied certificate fingerprint if not None.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"ssl_assert_hostname"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Use hostname verification if not False. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"url_prefix"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"There are cases where an enterprise would have multiple elastic search clusters. One way for them to manage is to have a single endpoint for all the elastic search clusters and use url_prefix for routing requests to different clusters. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"})))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"use_ssl"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to use SSL for the connection or not. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"username"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The username credential.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"verify_certs"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to verify SSL certificates. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"env"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"PROD")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"collapse_urns"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"CollapseUrns"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"collapse_urns."),(0,s.kt)("span",{className:"path-main"},"urns_suffix_regex"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"index_pattern"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"regex patterns for indexes to filter in ingestion. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","'","^","_",".","*","'",", ","'","^ilm-history.","*","...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"index_pattern."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"index_pattern."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"index_pattern."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"index_template_pattern"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The regex patterns for filtering index templates to ingest. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","'","^","_",".","*","'","]",", ","'","ignoreCase","'",": ...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"index_template_pattern."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"index_template_pattern."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"index_template_pattern."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"profiling"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"ElasticProfiling"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"profiling."),(0,s.kt)("span",{className:"path-main"},"enabled"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to enable profiling for the elastic search source. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"profiling."),(0,s.kt)("span",{className:"path-main"},"operation_config"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"OperationConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Experimental feature. To specify operation configs.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"profiling.operation_config."),(0,s.kt)("span",{className:"path-main"},"lower_freq_profile_enabled"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to do profiling at lower freq or not. This does not do any scheduling just adds additional checks to when not to run profiling. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"profiling.operation_config."),(0,s.kt)("span",{className:"path-main"},"profile_date_of_month"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Number between 1 to 31 for date of month (both inclusive). If not specified, defaults to Nothing and this field does not take affect.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"profiling.operation_config."),(0,s.kt)("span",{className:"path-main"},"profile_day_of_week"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Number between 0 to 6 for day of week (both inclusive). 0 is Monday and 6 is Sunday. If not specified, defaults to Nothing and this field does not take affect.")))))),(0,s.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "ElasticsearchSourceConfig",\n  "description": "Any source that connects to a platform should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "host": {\n      "title": "Host",\n      "description": "The elastic search host URI.",\n      "default": "localhost:9200",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "The username credential.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "The password credential.",\n      "type": "string"\n    },\n    "use_ssl": {\n      "title": "Use Ssl",\n      "description": "Whether to use SSL for the connection or not.",\n      "default": false,\n      "type": "boolean"\n    },\n    "verify_certs": {\n      "title": "Verify Certs",\n      "description": "Whether to verify SSL certificates.",\n      "default": false,\n      "type": "boolean"\n    },\n    "ca_certs": {\n      "title": "Ca Certs",\n      "description": "Path to a certificate authority (CA) certificate.",\n      "type": "string"\n    },\n    "client_cert": {\n      "title": "Client Cert",\n      "description": "Path to the file containing the private key and the certificate, or cert only if using client_key.",\n      "type": "string"\n    },\n    "client_key": {\n      "title": "Client Key",\n      "description": "Path to the file containing the private key if using separate cert and key files.",\n      "type": "string"\n    },\n    "ssl_assert_hostname": {\n      "title": "Ssl Assert Hostname",\n      "description": "Use hostname verification if not False.",\n      "default": false,\n      "type": "boolean"\n    },\n    "ssl_assert_fingerprint": {\n      "title": "Ssl Assert Fingerprint",\n      "description": "Verify the supplied certificate fingerprint if not None.",\n      "type": "string"\n    },\n    "url_prefix": {\n      "title": "Url Prefix",\n      "description": "There are cases where an enterprise would have multiple elastic search clusters. One way for them to manage is to have a single endpoint for all the elastic search clusters and use url_prefix for routing requests to different clusters.",\n      "default": "",\n      "type": "string"\n    },\n    "index_pattern": {\n      "title": "Index Pattern",\n      "description": "regex patterns for indexes to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [\n          "^_.*",\n          "^ilm-history.*"\n        ],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "ingest_index_templates": {\n      "title": "Ingest Index Templates",\n      "description": "Ingests ES index templates if enabled.",\n      "default": false,\n      "type": "boolean"\n    },\n    "index_template_pattern": {\n      "title": "Index Template Pattern",\n      "description": "The regex patterns for filtering index templates to ingest.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [\n          "^_.*"\n        ],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "profiling": {\n      "$ref": "#/definitions/ElasticProfiling"\n    },\n    "collapse_urns": {\n      "$ref": "#/definitions/CollapseUrns"\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "OperationConfig": {\n      "title": "OperationConfig",\n      "type": "object",\n      "properties": {\n        "lower_freq_profile_enabled": {\n          "title": "Lower Freq Profile Enabled",\n          "description": "Whether to do profiling at lower freq or not. This does not do any scheduling just adds additional checks to when not to run profiling.",\n          "default": false,\n          "type": "boolean"\n        },\n        "profile_day_of_week": {\n          "title": "Profile Day Of Week",\n          "description": "Number between 0 to 6 for day of week (both inclusive). 0 is Monday and 6 is Sunday. If not specified, defaults to Nothing and this field does not take affect.",\n          "type": "integer"\n        },\n        "profile_date_of_month": {\n          "title": "Profile Date Of Month",\n          "description": "Number between 1 to 31 for date of month (both inclusive). If not specified, defaults to Nothing and this field does not take affect.",\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    },\n    "ElasticProfiling": {\n      "title": "ElasticProfiling",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether to enable profiling for the elastic search source.",\n          "default": false,\n          "type": "boolean"\n        },\n        "operation_config": {\n          "title": "Operation Config",\n          "description": "Experimental feature. To specify operation configs.",\n          "allOf": [\n            {\n              "$ref": "#/definitions/OperationConfig"\n            }\n          ]\n        }\n      },\n      "additionalProperties": false\n    },\n    "CollapseUrns": {\n      "title": "CollapseUrns",\n      "type": "object",\n      "properties": {\n        "urns_suffix_regex": {\n          "title": "Urns Suffix Regex",\n          "description": "List of regex patterns to remove from the name of the URN. All of the indices before removal of URNs are considered as the same dataset. These are applied in order for each URN.\\n        The main case where you would want to have multiple of these if the name where you are trying to remove suffix from have different formats.\\n        e.g. ending with -YYYY-MM-DD as well as ending -epochtime would require you to have 2 regex patterns to remove the suffixes across all URNs.",\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.elastic_search.ElasticsearchSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/elastic_search.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for Elasticsearch, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);