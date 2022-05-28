"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7990],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4287:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(4137)),o=["components"],s={slug:"/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md"},l="Introduction to Metadata Ingestion",p={unversionedId:"metadata-ingestion/README",id:"metadata-ingestion/README",isDocsHomePage:!1,title:"Introduction to Metadata Ingestion",description:"Integration Options",source:"@site/genDocs/metadata-ingestion/README.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion",permalink:"/docs/metadata-ingestion",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md",tags:[],version:"current",frontMatter:{slug:"/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md"},sidebar:"overviewSidebar",previous:{title:"Debugging Guide",permalink:"/docs/debugging"},next:{title:"Athena",permalink:"/docs/generated/ingestion/sources/athena"}},u=[{value:"Integration Options",id:"integration-options",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Core Concepts",id:"core-concepts",children:[{value:"Sources",id:"sources",children:[{value:"Metadata Ingestion Source Status",id:"metadata-ingestion-source-status",children:[],level:4}],level:3},{value:"Sinks",id:"sinks",children:[],level:3},{value:"Recipes",id:"recipes",children:[],level:3},{value:"Handling sensitive information in recipes",id:"handling-sensitive-information-in-recipes",children:[],level:3},{value:"Basic Usage of CLI for ingestion",id:"basic-usage-of-cli-for-ingestion",children:[],level:3}],level:2},{value:"Transformations",id:"transformations",children:[],level:2},{value:"Using as a library (SDK)",id:"using-as-a-library-sdk",children:[{value:"Programmatic Pipeline",id:"programmatic-pipeline",children:[],level:3}],level:2},{value:"Developing",id:"developing",children:[],level:2}],d={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-metadata-ingestion"},"Introduction to Metadata Ingestion"),(0,r.kt)("h2",{id:"integration-options"},"Integration Options"),(0,r.kt)("p",null,"DataHub supports both ",(0,r.kt)("strong",{parentName:"p"},"push-based")," and ",(0,r.kt)("strong",{parentName:"p"},"pull-based")," metadata integration. "),(0,r.kt)("p",null,'Push-based integrations allow you to emit metadata directly from your data systems when metadata changes, while pull-based integrations allow you to "crawl" or "ingest" metadata from the data systems by connecting to them and extracting metadata in a batch or incremental-batch manner. Supporting both mechanisms means that you can integrate with all your systems in the most flexible way possible. '),(0,r.kt)("p",null,"Examples of push-based integrations include ",(0,r.kt)("a",{parentName:"p",href:"/docs/lineage/airflow"},"Airflow"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-integration/java/spark-lineage"},"Spark"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/integration_docs/great-expectations"},"Great Expectations")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-integration/java/datahub-protobuf"},"Protobuf Schemas"),'. This allows you to get low-latency metadata integration from the "active" agents in your data ecosystem. Examples of pull-based integrations include BigQuery, Snowflake, Looker, Tableau and many others.'),(0,r.kt)("p",null,"This document describes the pull-based metadata ingestion system that is built into DataHub for easy integration with a wide variety of sources in your data stack."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before running any metadata ingestion job, you should make sure that DataHub backend services are all running. You can either run ingestion via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-ingestion"},"UI")," or via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli"},"CLI"),". You can reference the CLI usage guide given there as you go through this page."),(0,r.kt)("h2",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("h3",{id:"sources"},"Sources"),(0,r.kt)("p",null,"Data systems that we are extracting metadata from are referred to as ",(0,r.kt)("strong",{parentName:"p"},"Sources"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sources")," tab on the left in the sidebar shows you all the sources that are available for you to ingest metadata from. For example, we have sources for ",(0,r.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/bigquery"},"BigQuery"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker"},"Looker"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/tableau"},"Tableau")," and many others."),(0,r.kt)("h4",{id:"metadata-ingestion-source-status"},"Metadata Ingestion Source Status"),(0,r.kt)("p",null,"We apply a Support Status to each Metadata Source to help you understand the integration reliability at a glance."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"}),": Certified Sources are well-tested & widely-adopted by the DataHub Community. We expect the integration to be stable with few user-facing issues."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"}),": Incubating Sources are ready for DataHub Community adoption but have not been tested for a wide variety of edge-cases. We eagerly solicit feedback from the Community to streghten the connector; minor version changes may arise in future releases."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"}),": Testing Sources are available for experiementation by DataHub Community members, but may change without notice. "),(0,r.kt)("h3",{id:"sinks"},"Sinks"),(0,r.kt)("p",null,"Sinks are destinations for metadata. When configuring ingestion for DataHub, you're likely to be sending the metadata to DataHub over either the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/datahub#datahub-rest"},"REST (datahub-sink)")," or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/datahub#datahub-kafka"},"Kafka (datahub-kafka)")," sink. In some cases, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/file"},"File")," sink is also helpful to store a persistent offline copy of the metadata during debugging."),(0,r.kt)("p",null,"The default sink that most of the ingestion systems and guides assume is the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-rest")," sink, but you should be able to adapt all of them for the other sinks as well!"),(0,r.kt)("h3",{id:"recipes"},"Recipes"),(0,r.kt)("p",null,"A recipe is the main configuration file that puts it all together. It tells our ingestion scripts where to pull data from (source) and where to put it (sink)."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," version ",(0,r.kt)("inlineCode",{parentName:"p"},">=0.8.33.2"),", the default sink is assumed to be a DataHub REST endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Hosted at "http://localhost:8080" or the environment variable ',(0,r.kt)("inlineCode",{parentName:"li"},"${DATAHUB_GMS_HOST}")," if present"),(0,r.kt)("li",{parentName:"ul"},"With an empty auth token or the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"${DATAHUB_GMS_TOKEN}")," if present. ")),(0,r.kt)("p",null,"Here's a simple recipe that pulls metadata from MSSQL (source) and puts it into the default sink (datahub rest)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# The simplest recipe that pulls metadata from MSSQL and puts it into DataHub\n# using the Rest API.\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n\n# sink section omitted as we want to use the default datahub-rest sink\n")),(0,r.kt)("p",null,"Running this recipe is as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c recipe.yaml\n")),(0,r.kt)("p",null,"or if you want to override the default endpoints, you can provide the environment variables as part of the command like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'DATAHUB_GMS_HOST="https://my-datahub-server:8080" DATAHUB_GMS_TOKEN="my-datahub-token" datahub ingest -c recipe.yaml\n')),(0,r.kt)("p",null,"A number of recipes are included in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/recipes"},"examples/recipes")," directory. For full info and context on each source and sink, see the pages described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli#installing-plugins"},"table of plugins"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that one recipe file can only have 1 source and 1 sink. If you want multiple sources then you will need multiple recipe files.")),(0,r.kt)("h3",{id:"handling-sensitive-information-in-recipes"},"Handling sensitive information in recipes"),(0,r.kt)("p",null,"We automatically expand environment variables in the config (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"${MSSQL_PASSWORD}"),"),\nsimilar to variable substitution in GNU bash or in docker-compose files. For details, see\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"},"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"),". This environment variable substitution should be used to mask sensitive information in recipe files. As long as you can get env variables securely to the ingestion process there would not be any need to store sensitive information in recipes."),(0,r.kt)("h3",{id:"basic-usage-of-cli-for-ingestion"},"Basic Usage of CLI for ingestion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub-rest]'  # install the required plugin\ndatahub ingest -c ./examples/recipes/mssql_to_datahub.yml\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," command performs all of the ingestion steps, except writing to the sink. This is useful to validate that the\ningestion recipe is producing the desired metadata events before ingesting them into datahub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Dry run\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --dry-run\n# Short-form\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--preview")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," command performs all of the ingestion steps, but limits the processing to only the first 10 workunits produced by the source.\nThis option helps with quick end-to-end smoke testing of the ingestion recipe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Preview\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --preview\n# Preview with dry-run\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n --preview\n")),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"--preview")," creates 10 workunits. But if you wish to try producing more workunits you can use another option ",(0,r.kt)("inlineCode",{parentName:"p"},"--preview-workunits")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Preview 20 workunits without sending anything to sink\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n --preview --preview-workunits=20\n")),(0,r.kt)("p",null,"Sometimes, while running the ingestion pipeline, unexpected exceptions may occur. This can cause ",(0,r.kt)("inlineCode",{parentName:"p"},"stackprinter")," to print all variables the logs. This may lead to credentials being written to logfiles. To prevent this behavior, in case of unexpected errors, a ",(0,r.kt)("inlineCode",{parentName:"p"},"--suppress-error-logs")," option can be added to ingest cli command. By default, this option is set to false. However, if enabled, prevents printing all variables to logs, mitigating the risk of writing credentials to logs. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--suppress-error-logs")," option is applied when the ingestion pipeline is actually running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Running ingestion with --suppress-error-logs option\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --suppress-error-logs\n")),(0,r.kt)("h2",{id:"transformations"},"Transformations"),(0,r.kt)("p",null,"If you'd like to modify data before it reaches the ingestion sinks \u2013 for instance, adding additional owners or tags \u2013 you can use a transformer to write your own module and integrate it with DataHub. Transformers require extending the recipe with a new section to describe the transformers that you want to run."),(0,r.kt)("p",null,'For example, a pipeline that ingests metadata from MSSQL and applies a default "important" tag to all datasets is described below:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# A recipe to ingest metadata from MSSQL and apply default tags to all tables\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n\ntransformers: # an array of transformers applied sequentially\n  - type: simple_add_dataset_tags\n    config:\n      tag_urns:\n        - "urn:li:tag:Important"\n\n# default sink, no config needed\n')),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"transformers guide")," to learn more about how you can create really flexible pipelines for processing metadata using Transformers!"),(0,r.kt)("h2",{id:"using-as-a-library-sdk"},"Using as a library (SDK)"),(0,r.kt)("p",null,"In some cases, you might want to construct Metadata events directly and use programmatic ways to emit that metadata to DataHub. In this case, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/as-a-library"},"Python emitter")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-integration/java/as-a-library"},"Java emitter")," libraries which can be called from your own code. "),(0,r.kt)("h3",{id:"programmatic-pipeline"},"Programmatic Pipeline"),(0,r.kt)("p",null,"In some cases, you might want to configure and run a pipeline entirely from within your custom Python script. Here is an example of how to do it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/programatic_pipeline.py"},"programmatic_pipeline.py")," - a basic mysql to REST programmatic pipeline.")),(0,r.kt)("h2",{id:"developing"},"Developing"),(0,r.kt)("p",null,"See the guides on ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"adding a source")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"using transformers"),"."))}c.isMDXComponent=!0}}]);