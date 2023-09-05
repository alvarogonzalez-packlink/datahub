"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Truncate Timeseries Index Endpoint",slug:"/api/restli/truncate-time-series-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/truncate-time-series-aspect.md"},o="Truncate Timeseries Index Endpoint",s={unversionedId:"docs/api/restli/truncate-time-series-aspect",id:"version-0.10.5/docs/api/restli/truncate-time-series-aspect",title:"Truncate Timeseries Index Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=truncateTimeseriesAspect endpoint to manage the size of a time series index by removing entries older than a certain timestamp, thereby truncating the table to only the entries needed, to save space. The getIndexSizes endpoint can be used to identify the largest indices. The output includes the index parameters needed for this function.",source:"@site/versioned_docs/version-0.10.5/docs/api/restli/truncate-time-series-aspect.md",sourceDirName:"docs/api/restli",slug:"/api/restli/truncate-time-series-aspect",permalink:"/docs/api/restli/truncate-time-series-aspect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/truncate-time-series-aspect.md",tags:[],version:"0.10.5",frontMatter:{title:"Truncate Timeseries Index Endpoint",slug:"/api/restli/truncate-time-series-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/truncate-time-series-aspect.md"},sidebar:"overviewSidebar",previous:{title:"Get Index Sizes Endpoint",permalink:"/docs/api/restli/get-index-sizes"},next:{title:"Get ElasticSearch Task Status Endpoint",permalink:"/docs/api/restli/get-elastic-task-status"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"truncate-timeseries-index-endpoint"},"Truncate Timeseries Index Endpoint"),(0,r.kt)("p",null,"You can do a HTTP POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=truncateTimeseriesAspect")," endpoint to manage the size of a time series index by removing entries older than a certain timestamp, thereby truncating the table to only the entries needed, to save space. The ",(0,r.kt)("inlineCode",{parentName:"p"},"getIndexSizes")," endpoint can be used to identify the largest indices. The output includes the index parameters needed for this function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'https://demo.datahubproject.io/api/gms/operations?action=truncateTimeseriesAspect\' \\\n--header \'Authorization: Bearer TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityType": "YOUR_ENTITY_TYPE",\n    "aspect": "YOUR_ASPECT_NAME",\n    "endTimeMillis": 1000000000000\n}\'\n\ncurl --location --request POST \'https://demo.datahubproject.io/api/gms/operations?action=truncateTimeseriesAspect\' \\\n--header \'Authorization: Bearer TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityType": "YOUR_ENTITY_TYPE",\n    "aspect": "YOUR_ASPECT_NAME",\n    "endTimeMillis": 1000000000000,\n    "dryRun": false,\n    "batchSize": 100,\n    "timeoutSeconds": 3600\n}\'\n')),(0,r.kt)("p",null,"The supported parameters are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entityType")," - Required type of the entity to truncate the index of, for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"dataset"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aspect")," - Required name of the aspect to truncate the index of, for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"datasetusagestatistics"),". A call to ",(0,r.kt)("inlineCode",{parentName:"li"},"getIndexSizes")," shows the ",(0,r.kt)("inlineCode",{parentName:"li"},"entityType")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"aspect")," parameters for each index along with its size. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endTimeMillis")," - Required timestamp to truncate the index to. Entities with timestamps older than this time will be deleted. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dryRun")," - Optional boolean to enable/disable dry run functionality. Default: true. In a dry run, the following information will be printed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"value":"Delete 0 out of 201 rows (0.00%). Reindexing the aspect without the deleted records. This was a dry run. Run with dryRun = false to execute."}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batchSize")," - Optional integer to control the batch size for the deletion. Default: 10000"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeoutSeconds")," - Optional integer to set a timeout for the delete operation. Default: No timeout set")),(0,r.kt)("p",null,"The output to the call will be information about how many rows would be deleted and how to proceed for a dry run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"value":"Delete 0 out of 201 rows (0.00%). Reindexing the aspect without the deleted records. This was a dry run. Run with dryRun = false to execute."}\n')),(0,r.kt)("p",null,"For a non-dry-run, the output will be the Task ID of the asynchronous delete operation. This task ID can be used to monitor the status of the operation."))}d.isMDXComponent=!0}}]);