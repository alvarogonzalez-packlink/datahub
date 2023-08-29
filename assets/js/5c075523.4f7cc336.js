"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[96508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(83117),a=(n(67294),n(3905));const r={title:"Monitoring DataHub",slug:"/advanced/monitoring",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/monitoring.md"},i="Monitoring DataHub",s={unversionedId:"docs/advanced/monitoring",id:"docs/advanced/monitoring",title:"Monitoring DataHub",description:"Monitoring DataHub's system components is critical for operating and improving DataHub. This doc explains how to add",source:"@site/genDocs/docs/advanced/monitoring.md",sourceDirName:"docs/advanced",slug:"/advanced/monitoring",permalink:"/docs/next/advanced/monitoring",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/monitoring.md",tags:[],version:"current",frontMatter:{title:"Monitoring DataHub",slug:"/advanced/monitoring",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/monitoring.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Database Retention",permalink:"/docs/next/advanced/db-retention"},next:{title:"How to Extract Logs from DataHub Containers",permalink:"/docs/next/how/extract-container-logs"}},c={},l=[{value:"Tracing",id:"tracing",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Enable monitoring through docker-compose",id:"enable-monitoring-through-docker-compose",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitoring-datahub"},"Monitoring DataHub"),(0,a.kt)("p",null,"Monitoring DataHub's system components is critical for operating and improving DataHub. This doc explains how to add\ntracing and metrics measurements in the DataHub containers."),(0,a.kt)("h2",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Traces let us track the life of a request across multiple components. Each trace is consisted of multiple spans, which\nare units of work, containing various context about the work being done as well as time taken to finish the work. By\nlooking at the trace, we can more easily identify performance bottlenecks."),(0,a.kt)("p",null,"We enable tracing by using\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation"},"OpenTelemetry java instrumentation library"),".\nThis project provides a Java agent JAR that is attached to java applications. The agent injects bytecode to capture\ntelemetry from popular libraries."),(0,a.kt)("p",null,"Using the agent we are able to"),(0,a.kt)("p",null,"1) Plug and play different tracing tools based on the user's setup: Jaeger, Zipkin, or other tools\n2) Get traces for Kafka, JDBC, and Elasticsearch without any additional code\n3) Track traces of any function with a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"@WithSpan")," annotation"),(0,a.kt)("p",null,"You can enable the agent by setting env variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE_OTEL")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for GMS and MAE/MCE consumers. In our\nexample ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose"),", we export metrics to a local Jaeger\ninstance by setting env variable ",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_TRACES_EXPORTER")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"jaeger"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_JAEGER_ENDPOINT")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://jaeger-all-in-one:14250"),", but you can easily change this behavior by\nsetting the correct env variables. Refer to\nthis ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk-extensions/autoconfigure/README.md"},"doc")," for\nall configs."),(0,a.kt)("p",null,"Once the above is set up, you should be able to see a detailed trace as a request is sent to GMS. We added\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"@WithSpan")," annotation in various places to make the trace more readable. You should start to see traces in the\ntracing collector of choice. Our example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose")," deploys\nan instance of Jaeger with port 16686. The traces should be available at http://localhost:16686."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"With tracing, we can observe how a request flows through our system into the persistence layer. However, for a more\nholistic picture, we need to be able to export metrics and measure them across time. Unfortunately, OpenTelemetry's java\nmetrics library is still in active development."),(0,a.kt)("p",null,"As such, we decided to use ",(0,a.kt)("a",{parentName:"p",href:"https://metrics.dropwizard.io/4.2.0/"},"Dropwizard Metrics")," to export custom metrics to JMX,\nand then use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"Prometheus-JMX exporter")," to export all JMX metrics to\nPrometheus. This allows our code base to be independent of the metrics collection tool, making it easy for people to use\ntheir tool of choice. You can enable the agent by setting env variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE_PROMETHEUS")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for GMS and MAE/MCE\nconsumers. Refer to this example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose")," for setting the\nvariables."),(0,a.kt)("p",null,"In our example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose"),", we have configured prometheus to\nscrape from 4318 ports of each container used by the JMX exporter to export metrics. We also configured grafana to\nlisten to prometheus and create useful dashboards. By default, we provide two\ndashboards: ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14845"},"JVM dashboard")," and DataHub dashboard."),(0,a.kt)("p",null,"In the JVM dashboard, you can find detailed charts based on JVM metrics like CPU/memory/disk usage. In the DataHub\ndashboard, you can find charts to monitor each endpoint and the kafka topics. Using the example implementation, go\nto http://localhost:3001 to find the grafana dashboards! (Username: admin, PW: admin)"),(0,a.kt)("p",null,"To make it easy to track various metrics within the code base, we created MetricUtils class. This util class creates a\ncentral metric registry, sets up the JMX reporter, and provides convenient functions for setting up counters and timers.\nYou can run the following to create a counter and increment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'MetricUtils.counter(this.getClass(),"metricName").increment();\n')),(0,a.kt)("p",null,"You can run the following to time a block of code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'try(Timer.Context ignored=MetricUtils.timer(this.getClass(),"timerName").timer()){\n    ...block of code\n    }\n')),(0,a.kt)("h2",{id:"enable-monitoring-through-docker-compose"},"Enable monitoring through docker-compose"),(0,a.kt)("p",null,"We provide some example configuration for enabling monitoring in\nthis ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/docker/monitoring"},"directory"),". Take a look at the docker-compose\nfiles, which adds necessary env variables to existing containers, and spawns new containers (Jaeger, Prometheus,\nGrafana)."),(0,a.kt)("p",null,"You can add in the above docker-compose using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f <<path-to-compose-file>>")," when running docker-compose commands.\nFor instance,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose \\\n  -f quickstart/docker-compose.quickstart.yml \\\n  -f monitoring/docker-compose.monitoring.yml \\\n  pull && \\\ndocker-compose -p datahub \\\n  -f quickstart/docker-compose.quickstart.yml \\\n  -f monitoring/docker-compose.monitoring.yml \\\n  up\n")),(0,a.kt)("p",null,"We set up quickstart.sh, dev.sh, and dev-without-neo4j.sh to add the above docker-compose when MONITORING=true. For\ninstance ",(0,a.kt)("inlineCode",{parentName:"p"},"MONITORING=true ./docker/quickstart.sh")," will add the correct env variables to start collecting traces and\nmetrics, and also deploy Jaeger, Prometheus, and Grafana. We will soon support this as a flag during quickstart."))}d.isMDXComponent=!0}}]);