"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[71366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=o,b=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(83117),o=(a(67294),a(3905));const r={title:"metadata-jobs:mce-consumer-job",sidebar_label:"metadata-jobs:mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},i="Metadata Change Event Consumer Job",l={unversionedId:"metadata-jobs/mce-consumer-job/README",id:"metadata-jobs/mce-consumer-job/README",title:"metadata-jobs:mce-consumer-job",description:"The Metadata Change Event Consumer is a Spring job which can be deployed by itself, or as part of the Metadata Service.",source:"@site/genDocs/metadata-jobs/mce-consumer-job/README.md",sourceDirName:"metadata-jobs/mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",permalink:"/docs/next/metadata-jobs/mce-consumer-job",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md",tags:[],version:"current",frontMatter:{title:"metadata-jobs:mce-consumer-job",sidebar_label:"metadata-jobs:mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},sidebar:"overviewSidebar",previous:{title:"metadata-jobs:mae-consumer-job",permalink:"/docs/next/metadata-jobs/mae-consumer-job"},next:{title:"Plugins Guide",permalink:"/docs/next/plugins"}},s={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Build",id:"build",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start via Docker image",id:"start-via-docker-image",level:2},{value:"Start via command line",id:"start-via-command-line",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Standalone MCE Consumer Mode",id:"standalone-mce-consumer-mode",level:2},{value:"Additional Endpoints",id:"additional-endpoints",level:3}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadata-change-event-consumer-job"},"Metadata Change Event Consumer Job"),(0,o.kt)("p",null,"The Metadata Change Event Consumer is a Spring job which can be deployed by itself, or as part of the Metadata Service."),(0,o.kt)("p",null,"Its main function is to listen to change proposal events emitted by clients of DataHub which request changes to the Metadata Graph. It then applies\nthese requests against DataHub's storage layer: the Metadata Service."),(0,o.kt)("p",null,"Today the job consumes from two topics:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"MetadataChangeProposal_v1")),(0,o.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,o.kt)("inlineCode",{parentName:"li"},"MetadataChangeEvent_v4"))),(0,o.kt)("p",null,"and produces to the following topics"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"FailedMetadataChangeProposal_v1")),(0,o.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,o.kt)("inlineCode",{parentName:"li"},"FailedMetadataChangeEvent_v4"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Where does the misleading name ",(0,o.kt)("strong",{parentName:"p"},"Metadata Change Event")," come from? Well, history. Previously, this job consumed\na single ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," topic which has been deprecated and replaced by per-aspect Metadata Change Proposals. Hence, the name!")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8")," installed on your machine to be\nable to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub Metadata Service"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Change Event Consumer Job")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Change Event Consumer Job")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:build\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Change Event Consumer Job"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-gms"},"DataHub GMS")," Docker containers are up and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"Quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Change Event Consumer Job")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-mce-consumer"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MCP_CONSUMER_ENABLED=true ./gradlew :metadata-jobs:mce-consumer-job:bootRun\n")),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"To debug with an IDE (i.e. IntelliJ), run the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootRun")," task with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-jvm")," flag. This will launch the app and\nlisten on port 5005 for a remote debugger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MCP_CONSUMER_ENABLED=true ./gradlew :metadata-jobs:mce-consumer-job:bootRun --debug-jvm\n")),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Spring boot actuator has been enabled for MCE Application.\n",(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9090/actuator/health"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9090/actuator/metrics"),(0,o.kt)("p",null,"To retrieve a specific metric - http://localhost:9090/actuator/metrics/kafka.consumer.records.consumed.total"),(0,o.kt)("h2",{id:"standalone-mce-consumer-mode"},"Standalone MCE Consumer Mode"),(0,o.kt)("p",null,"In standalone consumer mode, the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"CPU cores + 1")," determines the parallelization of the MCE consumer's internal\nprocessing. This determines the number of Kafka concurrent consumers, the number of threads available to the local\nRestli service, and the maximum number SQL connections used by the MCE consumer container."),(0,o.kt)("p",null,"Note that the effective throughput is limited to the number of partitions configured for the source Kafka topics.\nAllocating additional consumers, or CPU cores, beyond the number of topic partitions to the MCE standalone consumer(s)\nwill not increase ingestion performance."),(0,o.kt)("h3",{id:"additional-endpoints"},"Additional Endpoints"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/*")," - Restli service endpoints (standalone consumer mode)"),(0,o.kt)("p",null,"The Restli service endpoints are exposed for use locally (not via a K8 service) by the MCE consumer job itself. This is\nonly true in standalone mode. When run within GMS, the Restli endpoints are already available and accessed via the K8\nservice."))}u.isMDXComponent=!0}}]);