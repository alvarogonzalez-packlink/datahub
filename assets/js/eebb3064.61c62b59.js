"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[40256],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=o,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(83117),o=(a(67294),a(3905));const r={title:"metadata-jobs:mae-consumer-job",sidebar_label:"metadata-jobs:mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md"},i="Metadata Audit Event Consumer Job",l={unversionedId:"metadata-jobs/mae-consumer-job/README",id:"version-0.10.5/metadata-jobs/mae-consumer-job/README",title:"metadata-jobs:mae-consumer-job",description:"The Metadata Audit Event Consumer is a Spring job which can be deployed by itself, or as part of the Metadata Service.",source:"@site/versioned_docs/version-0.10.5/metadata-jobs/mae-consumer-job/README.md",sourceDirName:"metadata-jobs/mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",permalink:"/docs/metadata-jobs/mae-consumer-job",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md",tags:[],version:"0.10.5",frontMatter:{title:"metadata-jobs:mae-consumer-job",sidebar_label:"metadata-jobs:mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md"},sidebar:"overviewSidebar",previous:{title:"metadata-service",permalink:"/docs/metadata-service"},next:{title:"metadata-jobs:mce-consumer-job",permalink:"/docs/metadata-jobs/mce-consumer-job"}},s={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Build",id:"build",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start via Docker image",id:"start-via-docker-image",level:2},{value:"Start via command line",id:"start-via-command-line",level:2},{value:"Endpoints",id:"endpoints",level:2}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadata-audit-event-consumer-job"},"Metadata Audit Event Consumer Job"),(0,o.kt)("p",null,"The Metadata Audit Event Consumer is a Spring job which can be deployed by itself, or as part of the Metadata Service."),(0,o.kt)("p",null,"Its main function is to listen to change log events emitted as a result of changes made to the Metadata Graph, converting changes in the metadata model into updates\nagainst secondary search & graph indexes (among other things)"),(0,o.kt)("p",null,"Today the job consumes from two important Kafka topics:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"MetadataChangeLog_Versioned_v1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"MetadataChangeLog_Timeseries_v1"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Where does the name ",(0,o.kt)("strong",{parentName:"p"},"Metadata Audit Event")," come from? Well, history. Previously, this job consumed\na single ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," topic which has been deprecated and removed from the critical path. Hence, the name!")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub Metadata Service"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Audit Event Consumer Job")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"MAE Consumer Job")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mae-consumer-job:build\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Audit Event Consumer Job"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/elasticsearch"},"Elasticsearch"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/neo4j"},"Neo4j")," Docker containers are up and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"The quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Audit Event Consumer Job")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-mae-consumer"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MCL_CONSUMER_ENABLED=true ./gradlew :metadata-jobs:mae-consumer-job:bootRun\n")),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Spring boot actuator has been enabled for MAE Application.\n",(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9091/actuator/health"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9091/actuator/metrics"),(0,o.kt)("p",null,"To retrieve a specific metric - http://localhost:9091/actuator/metrics/process.uptime"))}m.isMDXComponent=!0}}]);