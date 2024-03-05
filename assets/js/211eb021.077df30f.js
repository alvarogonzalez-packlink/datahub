"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[22005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),b=o,h=d["".concat(u,".").concat(b)]||d[b]||l[b]||n;return a?r.createElement(h,c(c({ref:t},p),{},{components:a})):r.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<n;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},43211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={title:"Taking backup of DataHub",slug:"/how/backup-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md"},c="Taking backup of DataHub",i={unversionedId:"docs/how/backup-datahub",id:"docs/how/backup-datahub",title:"Taking backup of DataHub",description:"Production",source:"@site/genDocs/docs/how/backup-datahub.md",sourceDirName:"docs/how",slug:"/how/backup-datahub",permalink:"/docs/how/backup-datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md",tags:[],version:"current",frontMatter:{title:"Taking backup of DataHub",slug:"/how/backup-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Authorization with Apache Ranger",permalink:"/docs/how/configuring-authorization-with-apache-ranger"},next:{title:"Restoring Search and Graph Indices from Local Database",permalink:"/docs/how/restore-indices"}},u={},s=[{value:"Production",id:"production",level:2},{value:"Quickstart",id:"quickstart",level:2}],p={toc:s},d="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"taking-backup-of-datahub"},"Taking backup of DataHub"),(0,o.kt)("h2",{id:"production"},"Production"),(0,o.kt)("p",null,"The recommended backup strategy is to periodically dump the database ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub.metadata_aspect_v2")," so it can be recreated from the dump which most managed DB services will support (e.g. AWS RDS). Then run ",(0,o.kt)("a",{parentName:"p",href:"/docs/how/restore-indices"},"restore indices")," to recreate the indices. "),(0,o.kt)("p",null,"In order to back up Time Series Aspects (which power usage and dataset profiles), you'd have to do a backup of Elasticsearch, which is possible via AWS OpenSearch. Otherwise, you'd have to reingest dataset profiles from your sources in the event of a disaster scenario!"),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"To take a backup of your quickstart, take a look at this ",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart#backing-up-your-datahub-quickstart-experimental"},"document")," on how to accomplish it."))}l.isMDXComponent=!0}}]);