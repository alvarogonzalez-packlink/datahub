"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[78864],{31083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={sidebar_position:32,title:"Mode",slug:"/generated/ingestion/sources/mode",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md"},d="Mode",m={unversionedId:"docs/generated/ingestion/sources/mode",id:"version-0.12.1/docs/generated/ingestion/sources/mode",title:"Mode",description:"Certified",source:"@site/versioned_docs/version-0.12.1/docs/generated/ingestion/sources/mode.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mode",permalink:"/docs/0.12.1/generated/ingestion/sources/mode",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md",tags:[],version:"0.12.1",sidebarPosition:32,frontMatter:{sidebar_position:32,title:"Mode",slug:"/generated/ingestion/sources/mode",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md"},sidebar:"overviewSidebar",previous:{title:"MLflow",permalink:"/docs/0.12.1/generated/ingestion/sources/mlflow"},next:{title:"MongoDB",permalink:"/docs/0.12.1/generated/ingestion/sources/mongodb"}},u={},c=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Report",id:"report",level:3},{value:"Chart",id:"chart",level:3},{value:"Chart Information",id:"chart-information",level:4},{value:"Table Information",id:"table-information",level:4},{value:"Pivot Table Information",id:"pivot-table-information",level:4},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],k={toc:c},f="wrapper";function N(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mode"},"Mode"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,n.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Capability"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/0.12.1/platform-instances"},"Platform Instance")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported by default")))),(0,n.kt)("p",null,"This plugin extracts Charts, Reports, and associated metadata from a given Mode workspace. This plugin is in beta and has only been tested\non PostgreSQL database."),(0,n.kt)("h3",{id:"report"},"Report"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/analytics/reports/"},"/api/{account}/reports/{report}")," endpoint is used to\nretrieve the following report information."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Title and description"),(0,n.kt)("li",{parentName:"ul"},"Last edited by"),(0,n.kt)("li",{parentName:"ul"},"Owner"),(0,n.kt)("li",{parentName:"ul"},"Link to the Report in Mode for exploration"),(0,n.kt)("li",{parentName:"ul"},"Associated charts within the report")),(0,n.kt)("h3",{id:"chart"},"Chart"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/analytics/charts/#getChart"},"/api/{workspace}/reports/{report}/queries/{query}/charts'")," endpoint is used to\nretrieve the following information."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Title and description"),(0,n.kt)("li",{parentName:"ul"},"Last edited by"),(0,n.kt)("li",{parentName:"ul"},"Owner"),(0,n.kt)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,n.kt)("li",{parentName:"ul"},"Datasource and lineage information from Report queries.")),(0,n.kt)("p",null,"The following properties for a chart are ingested in DataHub."),(0,n.kt)("h4",{id:"chart-information"},"Chart Information"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Filters")),(0,n.kt)("td",{parentName:"tr",align:null},"Filters applied to the chart")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,n.kt)("td",{parentName:"tr",align:null},"Fields or columns used for aggregation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"X")),(0,n.kt)("td",{parentName:"tr",align:null},"Fields used in X-axis")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"X2")),(0,n.kt)("td",{parentName:"tr",align:null},"Fields used in second X-axis")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Y")),(0,n.kt)("td",{parentName:"tr",align:null},"Fields used in Y-axis")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Y2")),(0,n.kt)("td",{parentName:"tr",align:null},"Fields used in second Y-axis")))),(0,n.kt)("h4",{id:"table-information"},"Table Information"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Columns")),(0,n.kt)("td",{parentName:"tr",align:null},"Column names in a table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Filters")),(0,n.kt)("td",{parentName:"tr",align:null},"Filters applied to the table")))),(0,n.kt)("h4",{id:"pivot-table-information"},"Pivot Table Information"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Columns")),(0,n.kt)("td",{parentName:"tr",align:null},"Column names in a table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Filters")),(0,n.kt)("td",{parentName:"tr",align:null},"Filters applied to the table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,n.kt)("td",{parentName:"tr",align:null},"Fields or columns used for aggregation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Rows")),(0,n.kt)("td",{parentName:"tr",align:null},"Row names in a table")))),(0,n.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mode]'\n")),(0,n.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: mode\n  config:\n    # Coordinates\n    connect_uri: http://app.mode.com\n\n    # Credentials\n    token: token\n    password: pass\n\n    # Options\n    workspace: "datahub"\n    default_schema: "public"\n    owner_username_instead_of_email: False\n    api_options:\n      retry_backoff_multiplier: 2\n      max_retry_interval: 10\n      max_attempts: 5\n\nsink:\n  # sink configs\n')),(0,n.kt)("h3",{id:"config-details"},"Config Details"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Note that a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.kt)("div",{className:"config-table"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"password"),"\xa0",(0,n.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string(password)"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode password for authentication.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"token"),"\xa0",(0,n.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode user token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode host URL. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},(0,n.kt)("a",{parentName:"td",href:"https://app.mode.com"},"https://app.mode.com"))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"default_schema"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Default schema to use when schema is not provided in an SQL query ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"public")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"owner_username_instead_of_email"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use username for owner URN instead of Email ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"platform_instance_map"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"map(str,string)"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"workspace"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"env"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"PROD")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"api_options"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"ModeAPIConfig"))),(0,n.kt)("td",{parentName:"tr",align:"left"},'Retry/Wait settings for Mode API to avoid "Too many Requests" error. See Mode API Options below ',(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"{","'","retry","_","backoff","_","multiplier","'",": 2, ","'","max","_","retry","_","interva...")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"api_options."),(0,n.kt)("span",{className:"path-main"},"max_attempts"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"integer"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum number of attempts to retry before failing ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"5")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"api_options."),(0,n.kt)("span",{className:"path-main"},"max_retry_interval"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"One of integer, number"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum interval to wait when retrying ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"10")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"api_options."),(0,n.kt)("span",{className:"path-main"},"retry_backoff_multiplier"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"One of integer, number"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Multiplier for exponential backoff when waiting to retry ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"2")))))))),(0,n.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "ModeConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Mode host URL.",\n      "default": "https://app.mode.com",\n      "type": "string"\n    },\n    "token": {\n      "title": "Token",\n      "description": "Mode user token.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Mode password for authentication.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "workspace": {\n      "title": "Workspace",\n      "type": "string"\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    },\n    "owner_username_instead_of_email": {\n      "title": "Owner Username Instead Of Email",\n      "description": "Use username for owner URN instead of Email",\n      "default": true,\n      "type": "boolean"\n    },\n    "api_options": {\n      "title": "Api Options",\n      "description": "Retry/Wait settings for Mode API to avoid \\"Too many Requests\\" error. See Mode API Options below",\n      "default": {\n        "retry_backoff_multiplier": 2,\n        "max_retry_interval": 10,\n        "max_attempts": 5\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/ModeAPIConfig"\n        }\n      ]\n    }\n  },\n  "required": [\n    "token",\n    "password"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "ModeAPIConfig": {\n      "title": "ModeAPIConfig",\n      "type": "object",\n      "properties": {\n        "retry_backoff_multiplier": {\n          "title": "Retry Backoff Multiplier",\n          "description": "Multiplier for exponential backoff when waiting to retry",\n          "default": 2,\n          "anyOf": [\n            {\n              "type": "integer"\n            },\n            {\n              "type": "number"\n            }\n          ]\n        },\n        "max_retry_interval": {\n          "title": "Max Retry Interval",\n          "description": "Maximum interval to wait when retrying",\n          "default": 10,\n          "anyOf": [\n            {\n              "type": "integer"\n            },\n            {\n              "type": "number"\n            }\n          ]\n        },\n        "max_attempts": {\n          "title": "Max Attempts",\n          "description": "Maximum number of attempts to retry before failing",\n          "default": 5,\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.kt)("p",null,"See Mode's ",(0,n.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/authentication/"},"Authentication documentation")," on how to generate ",(0,n.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,n.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Class Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mode.ModeSource")),(0,n.kt)("li",{parentName:"ul"},"Browse on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mode.py"},"GitHub"))),(0,n.kt)("h2",null,"Questions"),(0,n.kt)("p",null,"If you've got any questions on configuring ingestion for Mode, feel free to ping us on ",(0,n.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}N.isMDXComponent=!0}}]);