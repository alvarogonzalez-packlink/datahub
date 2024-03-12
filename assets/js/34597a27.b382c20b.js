"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[52607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Using Cron",slug:"/metadata-ingestion/schedule_docs/cron",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/cron.md"},s="Using Cron",u={unversionedId:"metadata-ingestion/schedule_docs/cron",id:"version-0.12.1/metadata-ingestion/schedule_docs/cron",title:"Using Cron",description:"Assume you have a recipe file /home/ubuntu/datahubingest/mysqlto_datahub.yml on your machine",source:"@site/versioned_docs/version-0.12.1/metadata-ingestion/schedule_docs/cron.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/cron",permalink:"/docs/0.12.1/metadata-ingestion/schedule_docs/cron",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/cron.md",tags:[],version:"0.12.1",frontMatter:{title:"Using Cron",slug:"/metadata-ingestion/schedule_docs/cron",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/cron.md"},sidebar:"overviewSidebar",previous:{title:"Introduction to Scheduling Metadata Ingestion",permalink:"/docs/0.12.1/metadata-ingestion/schedule_docs/intro"},next:{title:"Using Airflow",permalink:"/docs/0.12.1/metadata-ingestion/schedule_docs/airflow"}},l={},d=[],p={toc:d},m="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-cron"},"Using Cron"),(0,r.kt)("p",null,"Assume you have a recipe file ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/ubuntu/datahub_ingest/mysql_to_datahub.yml")," on your machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source:\n  type: mysql\n  config:\n    # Coordinates\n    host_port: localhost:3306\n    database: dbname\n\n    # Credentials\n    username: root\n    password: example\n\nsink:\n type: datahub-rest \n config:\n  server: http://localhost:8080\n")),(0,r.kt)("p",null,"We can use crontab to schedule ingestion to run five minutes after midnight, every day using ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/cli"},"DataHub CLI"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5 0 * * * datahub ingest -c /home/ubuntu/datahub_ingest/mysql_to_datahub.yml\n")),(0,r.kt)("p",null,"Read through ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man5/crontab.5.html"},"crontab docs")," for more options related to scheduling."))}b.isMDXComponent=!0}}]);