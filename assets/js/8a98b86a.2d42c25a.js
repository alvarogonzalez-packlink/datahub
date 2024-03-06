"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[85133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),d=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,h=c["".concat(u,".").concat(f)]||c[f]||p[f]||s;return r?i.createElement(h,o(o({ref:t},l),{},{components:r})):i.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:n,o[1]=a;for(var d=2;d<s;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=r(87462),n=(r(67294),r(3905));const s={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/redshift/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md"},o="Redshift Ingestion Guide: Setup & Prerequisites",a={unversionedId:"docs/quick-ingestion-guides/redshift/setup",id:"docs/quick-ingestion-guides/redshift/setup",title:"Setup",description:"To configure ingestion from Redshift, you'll need a User configured with the proper permission sets, and an associated.",source:"@site/genDocs/docs/quick-ingestion-guides/redshift/setup.md",sourceDirName:"docs/quick-ingestion-guides/redshift",slug:"/quick-ingestion-guides/redshift/setup",permalink:"/docs/next/quick-ingestion-guides/redshift/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/redshift/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/next/quick-ingestion-guides/redshift/overview"},next:{title:"Configuration",permalink:"/docs/next/quick-ingestion-guides/redshift/configuration"}},u={},d=[{value:"Redshift Prerequisites",id:"redshift-prerequisites",level:2},{value:"Redshift Setup",id:"redshift-setup",level:2},{value:"Next Steps",id:"next-steps",level:2}],l={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redshift-ingestion-guide-setup--prerequisites"},"Redshift Ingestion Guide: Setup & Prerequisites"),(0,n.kt)("p",null,"To configure ingestion from Redshift, you'll need a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/gsg/t_adding_redshift_user_cmd.html"},"User")," configured with the proper permission sets, and an associated."),(0,n.kt)("p",null,"This setup guide will walk you through the steps you'll need to take via your Google Cloud Console."),(0,n.kt)("h2",{id:"redshift-prerequisites"},"Redshift Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect to your Amazon Redshift cluster using an SQL client such as SQL Workbench/J or Amazon Redshift Query Editor with your Admin user."),(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/redshift/latest/gsg/t_adding_redshift_user_cmd.html"},"Redshift User")," that will be used to perform the metadata extraction if you don't have one already.\nFor example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER datahub WITH PASSWORD 'Datahub1234';\n")),(0,n.kt)("h2",{id:"redshift-setup"},"Redshift Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Grant the following permission to your ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub")," user:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER datahub WITH SYSLOG ACCESS UNRESTRICTED;\nGRANT SELECT ON pg_catalog.svv_table_info to datahub;\nGRANT SELECT ON pg_catalog.svl_user_info to datahub;\n\n")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Once you've confirmed all of the above in Redshift, it's time to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/quick-ingestion-guides/redshift/configuration"},"move on")," to configure the actual ingestion source within the DataHub UI."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);