"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[76195],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>m});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(i),d=o,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||n;return i?r.createElement(m,a(a({ref:t},l),{},{components:i})):r.createElement(m,a({ref:t},l))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<n;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},45446:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=i(87462),o=(i(67294),i(3905));const n={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/bigquery/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/setup.md"},a="BigQuery Ingestion Guide: Setup & Prerequisites",s={unversionedId:"docs/quick-ingestion-guides/bigquery/setup",id:"docs/quick-ingestion-guides/bigquery/setup",title:"Setup",description:"To configure ingestion from BigQuery, you'll need a Service Account configured with the proper permission sets and an associated Service Account Key.",source:"@site/genDocs/docs/quick-ingestion-guides/bigquery/setup.md",sourceDirName:"docs/quick-ingestion-guides/bigquery",slug:"/quick-ingestion-guides/bigquery/setup",permalink:"/docs/next/quick-ingestion-guides/bigquery/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/bigquery/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/next/quick-ingestion-guides/bigquery/overview"},next:{title:"Configuration",permalink:"/docs/next/quick-ingestion-guides/bigquery/configuration"}},c={},u=[{value:"BigQuery Prerequisites",id:"bigquery-prerequisites",level:2},{value:"BigQuery Setup",id:"bigquery-setup",level:2},{value:"Next Steps",id:"next-steps",level:2}],l={toc:u},p="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bigquery-ingestion-guide-setup--prerequisites"},"BigQuery Ingestion Guide: Setup & Prerequisites"),(0,o.kt)("p",null,"To configure ingestion from BigQuery, you'll need a ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Service Account")," configured with the proper permission sets and an associated ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Service Account Key"),"."),(0,o.kt)("p",null,"This setup guide will walk you through the steps you'll need to take via your Google Cloud Console."),(0,o.kt)("h2",{id:"bigquery-prerequisites"},"BigQuery Prerequisites"),(0,o.kt)("p",null,"If you do not have an existing Service Account and Service Account Key, please work with your BigQuery Admin to ensure you have the appropriate permissions and/or roles to continue with this setup guide."),(0,o.kt)("p",null,"When creating and managing new Service Accounts and Service Account Keys, we have found the following permissions and roles to be required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Service Account: ",(0,o.kt)("inlineCode",{parentName:"li"},"iam.serviceAccounts.create")," permission"),(0,o.kt)("li",{parentName:"ul"},"Assign roles to a Service Account: ",(0,o.kt)("inlineCode",{parentName:"li"},"serviceusage.services.enable")," permission"),(0,o.kt)("li",{parentName:"ul"},"Set permission policy to the project: ",(0,o.kt)("inlineCode",{parentName:"li"},"resourcemanager.projects.setIamPolicy")," permission"),(0,o.kt)("li",{parentName:"ul"},"Generate Key for Service Account: Service Account Key Admin (",(0,o.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountKeyAdmin"),") IAM role")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the BigQuery ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/permissions-reference"},"Permissions")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles"},"IAM Roles")," references for details")),(0,o.kt)("h2",{id:"bigquery-setup"},"BigQuery Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To set up a new Service Account follow ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"this guide"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you are creating a Service Account, assign the following predefined Roles:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.jobUser"},"BigQuery Job User")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.metadataViewer"},"BigQuery Metadata Viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.resourceViewer"},"BigQuery Resource Viewer")," -> This role is for Table-Level Lineage and Usage extraction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataViewer"},"Logs View Accessor")," -> This role is for Table-Level Lineage and Usage extraction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataViewer"},"BigQuery Data Viewer")," -> This role is for Profiling"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.readSessionUser"},"BigQuery Read Session User")," -> This role is for Profiling")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can always add/remove roles to Service Accounts later on. Please refer to the BigQuery ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access"},"Manage access to projects, folders, and organizations")," guide for more details.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create and download a ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Service Account Key"),". We will use this to set up authentication within DataHub.")),(0,o.kt)("p",null,"The key file looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "type": "service_account",\n   "project_id": "project-id-1234567",\n   "private_key_id": "d0121d0000882411234e11166c6aaa23ed5d74e0",\n   "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIyourkey\\n-----END PRIVATE KEY-----",\n   "client_email": "test@suppproject-id-1234567.iam.gserviceaccount.com",\n   "client_id": "113545814931671546333",\n   "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n   "token_uri": "https://oauth2.googleapis.com/token",\n   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test%suppproject-id-1234567.iam.gserviceaccount.com"\n}\n')),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Once you've confirmed all of the above in BigQuery, it's time to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/quick-ingestion-guides/bigquery/configuration"},"move on")," to configure the actual ingestion source within the DataHub UI."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,o.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);