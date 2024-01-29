"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),r=a(86010),l=a(72957),i=a(16550),o=a(75238),c=a(33609),p=a(92560);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,c]=f({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=o??d;return u({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var k=a(51048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(d(t),o(n))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:m},l,{className:(0,r.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},s.createElement(b,(0,n.Z)({},e,t)),s.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return s.createElement(y,(0,n.Z)({key:String(t)},e))}},46671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),r=a(73992),l=a(18679);const i={sidebar_position:47,title:"SageMaker",slug:"/generated/ingestion/sources/sagemaker",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sagemaker.md"},o="SageMaker",c={unversionedId:"docs/generated/ingestion/sources/sagemaker",id:"docs/generated/ingestion/sources/sagemaker",title:"SageMaker",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/sagemaker.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/sagemaker",permalink:"/docs/next/generated/ingestion/sources/sagemaker",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sagemaker.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,title:"SageMaker",slug:"/generated/ingestion/sources/sagemaker",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sagemaker.md"},sidebar:"overviewSidebar",previous:{title:"S3 Data Lake",permalink:"/docs/next/generated/ingestion/sources/s3"},next:{title:"Salesforce",permalink:"/docs/next/generated/ingestion/sources/salesforce"}},p={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:d},u="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sagemaker"},"SageMaker"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,s.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Capability"),(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,s.kt)("p",null,"This plugin extracts the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Feature groups"),(0,s.kt)("li",{parentName:"ul"},"Models, jobs, and lineage between the two (e.g. when jobs output a model or a model is used by a job)")),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[sagemaker]'\n")),(0,s.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,s.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,s.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: sagemaker\n  config:\n    # Coordinates\n    aws_region: "my-aws-region"\n\nsink:\n  # sink configs\n')),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_access_key_id"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"AWS access key ID. Can be auto-detected, see ",(0,s.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"the AWS boto3 docs")," for details.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_advanced_config"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Advanced AWS configuration options. These are passed directly to ",(0,s.kt)("a",{parentName:"td",href:"https://botocore.amazonaws.com/v1/documentation/api/latest/reference/config.html"},"botocore.config.Config"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_endpoint_url"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The AWS service endpoint. This is normally ",(0,s.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"constructed automatically"),", but can be overridden here.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_profile"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Named AWS profile to use. Only used if access key / secret are unset. If not set the default will be used")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_proxy"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"map(str,string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_region"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"AWS region code.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_secret_access_key"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"AWS secret access key. Can be auto-detected, see ",(0,s.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"the AWS boto3 docs")," for details.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_session_token"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"AWS session token. Can be auto-detected, see ",(0,s.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"the AWS boto3 docs")," for details.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"extract_feature_groups"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to extract feature groups. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"extract_jobs"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"One of string, boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to extract AutoML jobs. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"extract_models"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to extract models. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"read_timeout"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"number"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The timeout for reading from the connection (in seconds). ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"60")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"env"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"PROD")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"aws_role"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"One of string, union(anyOf), string, AwsAssumeRoleConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"AWS roles to assume. If using the string format, the role ARN can be specified directly. If using the object format, the role can be specified in the RoleArn field and additional available arguments are documented at ",(0,s.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html?highlight=assume_role#STS.Client.assume_role"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html?highlight=assume_role#STS.Client.assume_role"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"aws_role."),(0,s.kt)("span",{className:"path-main"},"RoleArn"),"\xa0",(0,s.kt)("abbr",{title:"Required if aws_role is set"},"\u2753"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"ARN of the role to assume.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"aws_role."),(0,s.kt)("span",{className:"path-main"},"ExternalId"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"External ID to use when assuming the role.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"database_pattern"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"regex patterns for databases to filter in ingestion. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"database_pattern."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"database_pattern."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"database_pattern."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"table_pattern"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"regex patterns for tables to filter in ingestion. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"table_pattern."),(0,s.kt)("span",{className:"path-main"},"allow"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"table_pattern."),(0,s.kt)("span",{className:"path-main"},"deny"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"table_pattern."),(0,s.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))))))),(0,s.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SagemakerSourceConfig",\n  "description": "Common AWS credentials config.\\n\\nCurrently used by:\\n    - Glue source\\n    - SageMaker source",\n  "type": "object",\n  "properties": {\n    "aws_access_key_id": {\n      "title": "Aws Access Key Id",\n      "description": "AWS access key ID. Can be auto-detected, see [the AWS boto3 docs](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html) for details.",\n      "type": "string"\n    },\n    "aws_secret_access_key": {\n      "title": "Aws Secret Access Key",\n      "description": "AWS secret access key. Can be auto-detected, see [the AWS boto3 docs](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html) for details.",\n      "type": "string"\n    },\n    "aws_session_token": {\n      "title": "Aws Session Token",\n      "description": "AWS session token. Can be auto-detected, see [the AWS boto3 docs](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html) for details.",\n      "type": "string"\n    },\n    "aws_role": {\n      "title": "Aws Role",\n      "description": "AWS roles to assume. If using the string format, the role ARN can be specified directly. If using the object format, the role can be specified in the RoleArn field and additional available arguments are documented at https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html?highlight=assume_role#STS.Client.assume_role",\n      "anyOf": [\n        {\n          "type": "string"\n        },\n        {\n          "type": "array",\n          "items": {\n            "anyOf": [\n              {\n                "type": "string"\n              },\n              {\n                "$ref": "#/definitions/AwsAssumeRoleConfig"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    "aws_profile": {\n      "title": "Aws Profile",\n      "description": "Named AWS profile to use. Only used if access key / secret are unset. If not set the default will be used",\n      "type": "string"\n    },\n    "aws_region": {\n      "title": "Aws Region",\n      "description": "AWS region code.",\n      "type": "string"\n    },\n    "aws_endpoint_url": {\n      "title": "Aws Endpoint Url",\n      "description": "The AWS service endpoint. This is normally [constructed automatically](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html), but can be overridden here.",\n      "type": "string"\n    },\n    "aws_proxy": {\n      "title": "Aws Proxy",\n      "description": "A set of proxy configs to use with AWS. See the [botocore.config](https://botocore.amazonaws.com/v1/documentation/api/latest/reference/config.html) docs for details.",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "read_timeout": {\n      "title": "Read Timeout",\n      "description": "The timeout for reading from the connection (in seconds).",\n      "default": 60,\n      "type": "number"\n    },\n    "aws_advanced_config": {\n      "title": "Aws Advanced Config",\n      "description": "Advanced AWS configuration options. These are passed directly to [botocore.config.Config](https://botocore.amazonaws.com/v1/documentation/api/latest/reference/config.html).",\n      "type": "object"\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "database_pattern": {\n      "title": "Database Pattern",\n      "description": "regex patterns for databases to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "table_pattern": {\n      "title": "Table Pattern",\n      "description": "regex patterns for tables to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "extract_feature_groups": {\n      "title": "Extract Feature Groups",\n      "description": "Whether to extract feature groups.",\n      "default": true,\n      "type": "boolean"\n    },\n    "extract_models": {\n      "title": "Extract Models",\n      "description": "Whether to extract models.",\n      "default": true,\n      "type": "boolean"\n    },\n    "extract_jobs": {\n      "title": "Extract Jobs",\n      "description": "Whether to extract AutoML jobs.",\n      "default": true,\n      "anyOf": [\n        {\n          "type": "object",\n          "additionalProperties": {\n            "type": "string"\n          }\n        },\n        {\n          "type": "boolean"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AwsAssumeRoleConfig": {\n      "title": "AwsAssumeRoleConfig",\n      "type": "object",\n      "properties": {\n        "RoleArn": {\n          "title": "Rolearn",\n          "description": "ARN of the role to assume.",\n          "type": "string"\n        },\n        "ExternalId": {\n          "title": "Externalid",\n          "description": "External ID to use when assuming the role.",\n          "type": "string"\n        }\n      },\n      "required": [\n        "RoleArn"\n      ]\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.aws.sagemaker.SagemakerSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/aws/sagemaker.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for SageMaker, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);