"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),b=r,f=c["".concat(l,".").concat(b)]||c[b]||p[b]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},52662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/snowflake/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md"},i="Snowflake Ingestion Guide: Setup & Prerequisites",s={unversionedId:"docs/quick-ingestion-guides/snowflake/setup",id:"version-0.13.0/docs/quick-ingestion-guides/snowflake/setup",title:"Setup",description:"In order to configure ingestion from Snowflake, you'll first have to ensure you have a Snowflake user with the ACCOUNTADMIN role or MANAGE GRANTS privilege.",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/snowflake/setup.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/setup",permalink:"/docs/quick-ingestion-guides/snowflake/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md",tags:[],version:"0.13.0",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/snowflake/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/quick-ingestion-guides/snowflake/overview"},next:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/snowflake/configuration"}},l={},u=[{value:"Snowflake Prerequisites",id:"snowflake-prerequisites",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snowflake-ingestion-guide-setup--prerequisites"},"Snowflake Ingestion Guide: Setup & Prerequisites"),(0,r.kt)("p",null,"In order to configure ingestion from Snowflake, you'll first have to ensure you have a Snowflake user with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNTADMIN")," role or ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGE GRANTS")," privilege."),(0,r.kt)("h2",{id:"snowflake-prerequisites"},"Snowflake Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a DataHub-specific role by executing the following queries in Snowflake. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-warehouse>")," with an existing warehouse that you wish to use for DataHub ingestion."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create or replace role datahub_role;\n-- Grant access to a warehouse to run queries to view metadata\ngrant operate, usage on warehouse "<your-warehouse>" to role datahub_role;\n')),(0,r.kt)("p",{parentName:"li"},"Make note of this role and warehouse. You'll need this in the next step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a DataHub-specific user by executing the following queries. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-password>")," with a strong password. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-warehouse>")," with the same warehouse used above."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create user datahub_user display_name = 'DataHub' password='<your-password>' default_role = datahub_role default_warehouse = '<your-warehouse>';\n-- Grant access to the DataHub role created above\ngrant role datahub_role to user datahub_user;\n")),(0,r.kt)("p",{parentName:"li"},"Make note of the user and its password. You'll need this in the next step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assign privileges to read metadata about your assets by executing the following queries. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-database>")," with an existing database. Repeat for all databases from your Snowflake instance that you wish to integrate with DataHub."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set db_var = '\"<your-database>\"';\n-- Grant access to view database and schema in which your tables/views exist\ngrant usage on DATABASE identifier($db_var) to role datahub_role;\ngrant usage on all schemas in database identifier($db_var) to role datahub_role;\ngrant usage on future schemas in database identifier($db_var) to role datahub_role;\n\n-- Grant Select acccess enable Data Profiling\ngrant select on all tables in database identifier($db_var) to role datahub_role;\ngrant select on future tables in database identifier($db_var) to role datahub_role;\ngrant select on all external tables in database identifier($db_var) to role datahub_role;\ngrant select on future external tables in database identifier($db_var) to role datahub_role;\ngrant select on all views in database identifier($db_var) to role datahub_role;\ngrant select on future views in database identifier($db_var) to role datahub_role;\n\n--  Grant access to view tables and views\ngrant references on all tables in database identifier($db_var) to role datahub_role;\ngrant references on future tables in database identifier($db_var) to role datahub_role;\ngrant references on all external tables in database identifier($db_var) to role datahub_role;\ngrant references on future external tables in database identifier($db_var) to role datahub_role;\ngrant references on all views in database identifier($db_var) to role datahub_role;\ngrant references on future views in database identifier($db_var) to role datahub_role;\n\n-- Assign privileges to extract lineage and usage statistics from Snowflake by executing the below query.\ngrant imported privileges on database snowflake to role datahub_role;\n\n")),(0,r.kt)("p",{parentName:"li"},"If you have imported databases in your Snowflake instance that you wish to integrate with DataHub, you'll need to use the below query for them."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'grant IMPORTED PRIVILEGES on database "<your-database>" to role datahub_role;  \n')))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Once you've done all of the above in Snowflake, it's time to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/snowflake/configuration"},"move on")," to configuring the actual ingestion source within DataHub."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);