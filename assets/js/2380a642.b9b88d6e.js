"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[14207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),h=a,m=f["".concat(c,".").concat(h)]||f[h]||p[h]||r;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(83117),a=(n(67294),n(3905));const r={title:"Kafka Event Source",slug:"/actions/sources/kafka-event-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/sources/kafka-event-source.md"},s="Kafka Event Source",i={unversionedId:"docs/actions/sources/kafka-event-source",id:"docs/actions/sources/kafka-event-source",title:"Kafka Event Source",description:"Overview",source:"@site/genDocs/docs/actions/sources/kafka-event-source.md",sourceDirName:"docs/actions/sources",slug:"/actions/sources/kafka-event-source",permalink:"/docs/next/actions/sources/kafka-event-source",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/sources/kafka-event-source.md",tags:[],version:"current",frontMatter:{title:"Kafka Event Source",slug:"/actions/sources/kafka-event-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/sources/kafka-event-source.md"},sidebar:"overviewSidebar",previous:{title:"Concepts",permalink:"/docs/next/actions/concepts"},next:{title:"Entity Change Event V1",permalink:"/docs/next/actions/events/entity-change-event"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Processing Guarantees",id:"processing-guarantees",level:3},{value:"Supported Events",id:"supported-events",level:2},{value:"Configure the Event Source",id:"configure-the-event-source",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kafka-event-source"},"Kafka Event Source"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Kafka Event Source is the default Event Source used within the DataHub Actions Framework."),(0,a.kt)("p",null,"Under the hood, the Kafka Event Source uses a Kafka Consumer to subscribe to the topics streaming\nout of DataHub (MetadataChangeLog_v1, PlatformEvent_v1). Each Action is automatically placed into a unique\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/clients/consumer.html#consumer-groups"},"consumer group")," based on\nthe unique ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," provided inside the Action configuration file."),(0,a.kt)("p",null,"This means that you can easily scale-out Actions processing by sharing the same Action configuration file across\nmultiple nodes or processes. As long as the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of the Action is the same, each instance of the Actions framework will subscribe as a member in the same Kafka Consumer Group, which allows for load balancing the\ntopic traffic across consumers which each consume independent ",(0,a.kt)("a",{parentName:"p",href:"https://developer.confluent.io/learn-kafka/apache-kafka/partitions/#kafka-partitioning"},"partitions"),". "),(0,a.kt)("p",null,"Because the Kafka Event Source uses consumer groups by default, actions using this source will be ",(0,a.kt)("strong",{parentName:"p"},"stateful"),'.\nThis means that Actions will keep track of their processing offsets of the upstream Kafka topics. If you\nstop an Action and restart it sometime later, it will first "catch up" by processing the messages that the topic\nhas received since the Action last ran. Be mindful of this - if your Action is computationally expensive, it may be preferable to start consuming from the end of the log, instead of playing catch up. The easiest way to achieve this is to simply rename the Action inside the Action configuration file - this will create a new Kafka Consumer Group which will begin processing new messages at the end of the log (latest policy). '),(0,a.kt)("h3",{id:"processing-guarantees"},"Processing Guarantees"),(0,a.kt)("p",null,'This event source implements an "ack" function which is invoked if and only if an event is successfully processed\nby the Actions framework, meaning that the event made it through the Transformers and into the Action without\nany errors. Under the hood, the "ack" method synchronously commits Kafka Consumer Offsets on behalf of the Action. This means that by default, the framework provides ',(0,a.kt)("em",{parentName:"p"},"at-least once")," processing semantics. That is, in the unusual case that a failure occurs when attempting to commit offsets back to Kafka, that event may be replayed on restart of the Action. "),(0,a.kt)("p",null,"If you've configured your Action pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"failure_mode")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTINUE")," (the default), then events which\nfail to be processed will simply be logged to a ",(0,a.kt)("inlineCode",{parentName:"p"},"failed_events.log")," file for further investigation (dead letter queue). The Kafka Event Source will continue to make progress against the underlying topics and continue to commit offsets even in the case of failed messages. "),(0,a.kt)("p",null,"If you've configured your Action pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"failure_mode")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"THROW"),', then events which fail to be processed result in an Action Pipeline error. This in turn terminates the pipeline before committing offsets back to Kafka. Thus the message will not be marked as "processed" by the Action consumer.'),(0,a.kt)("h2",{id:"supported-events"},"Supported Events"),(0,a.kt)("p",null,"The Kafka Event Source produces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/actions/events/entity-change-event"},"Entity Change Event V1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/actions/events/metadata-change-log-event"},"Metadata Change Log V1"))),(0,a.kt)("h2",{id:"configure-the-event-source"},"Configure the Event Source"),(0,a.kt)("p",null,"Use the following config(s) to get started with the Kafka Event Source. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: "pipeline-name"\nsource:\n  type: "kafka"\n  config:\n    # Connection-related configuration\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n      # Dictionary of freeform consumer configs propagated to underlying Kafka Consumer \n      consumer_config: \n          #security.protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL:-PLAINTEXT}\n          #ssl.keystore.location: ${KAFKA_PROPERTIES_SSL_KEYSTORE_LOCATION:-/mnt/certs/keystore}\n          #ssl.truststore.location: ${KAFKA_PROPERTIES_SSL_TRUSTSTORE_LOCATION:-/mnt/certs/truststore}\n          #ssl.keystore.password: ${KAFKA_PROPERTIES_SSL_KEYSTORE_PASSWORD:-keystore_password}\n          #ssl.key.password: ${KAFKA_PROPERTIES_SSL_KEY_PASSWORD:-keystore_password}\n          #ssl.truststore.password: ${KAFKA_PROPERTIES_SSL_TRUSTSTORE_PASSWORD:-truststore_password}\n    # Topic Routing - which topics to read from.\n    topic_routes:\n      mcl: ${METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME:-MetadataChangeLog_Versioned_v1} # Topic name for MetadataChangeLog_v1 events. \n      pe: ${PLATFORM_EVENT_TOPIC_NAME:-PlatformEvent_v1} # Topic name for PlatformEvent_v1 events. \naction:\n  # action configs\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"View All Configuration Options"),"| Field | Required | Default | Description | | --- | :-: | :-: | --- | | `connection.bootstrap` | \u2705 | N/A | The Kafka bootstrap URI, e.g. `localhost:9092`. | | `connection.schema_registry_url` | \u2705 | N/A | The URL for the Kafka schema registry, e.g. `http://localhost:8081` | | `connection.consumer_config` | \u274c | "," | A set of key-value pairs that represents arbitrary Kafka Consumer configs | | `topic_routes.mcl` | \u274c  | `MetadataChangeLog_v1` | The name of the topic containing MetadataChangeLog events | | `topic_routes.pe` | \u274c | `PlatformEvent_v1` | The name of the topic containing PlatformEvent events |"),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Is there a way to always start processing from the end of the topics on Actions start?")),(0,a.kt)("p",null,"Currently, the only way is to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),' of the Action in its configuration file. In the future,\nwe are hoping to add first-class support for configuring the action to be "stateless", ie only process\nmessages that are received while the Action is running.'),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Is there a way to asynchronously commit offsets back to Kafka?")),(0,a.kt)("p",null,"Currently, all consumer offset commits are made synchronously for each message received. For now we've optimized for correctness over performance. If this commit policy does not accommodate your organization's needs, certainly reach out on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"Slack"),"."))}p.isMDXComponent=!0}}]);