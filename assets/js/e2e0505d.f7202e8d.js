"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6765],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?i.createElement(h,r(r({ref:t},l),{},{components:n})):i.createElement(h,r({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"UI Ingestion Guide",slug:"/ui-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/ui-ingestion.md"},c="UI Ingestion Guide",u={unversionedId:"docs/ui-ingestion",id:"docs/ui-ingestion",isDocsHomePage:!1,title:"UI Ingestion Guide",description:"Introduction",source:"@site/genDocs/docs/ui-ingestion.md",sourceDirName:"docs",slug:"/ui-ingestion",permalink:"/docs/ui-ingestion",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/ui-ingestion.md",tags:[],version:"current",frontMatter:{title:"UI Ingestion Guide",slug:"/ui-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/ui-ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Introduction to Metadata Ingestion",permalink:"/docs/metadata-ingestion"},next:{title:"Airflow Integration",permalink:"/docs/lineage/airflow"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Running Metadata Ingestion",id:"running-metadata-ingestion",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Creating an Ingestion Source",id:"creating-an-ingestion-source",children:[{value:"Step 1: Select a Platform Template",id:"step-1-select-a-platform-template",children:[],level:4},{value:"Step 2: Configure a Recipe",id:"step-2-configure-a-recipe",children:[{value:"Creating a Secret",id:"creating-a-secret",children:[],level:5},{value:"Referencing a Secret",id:"referencing-a-secret",children:[],level:5}],level:4},{value:"Step 3: Schedule Execution",id:"step-3-schedule-execution",children:[],level:4},{value:"Step 4: Finishing Up",id:"step-4-finishing-up",children:[{value:"Advanced: Running with a specific CLI version",id:"advanced-running-with-a-specific-cli-version",children:[],level:5}],level:4}],level:3},{value:"Running an Ingestion Source",id:"running-an-ingestion-source",children:[],level:3},{value:"Cancelling an Ingestion Run",id:"cancelling-an-ingestion-run",children:[],level:3},{value:"Debugging a Failed Ingestion Run",id:"debugging-a-failed-ingestion-run",children:[],level:3}],level:2},{value:"FAQ",id:"faq",children:[{value:"I tried to ingest metadata after running &#39;datahub docker quickstart&#39;, but ingestion is failing with &#39;Failed to Connect&#39; errors. What do I do?",id:"i-tried-to-ingest-metadata-after-running-datahub-docker-quickstart-but-ingestion-is-failing-with-failed-to-connect-errors-what-do-i-do",children:[],level:3},{value:"I see &#39;N/A&#39; when I try to run ingestion. What do I do?",id:"i-see-na-when-i-try-to-run-ingestion-what-do-i-do",children:[],level:3},{value:"When should I NOT use UI Ingestion?",id:"when-should-i-not-use-ui-ingestion",children:[],level:3},{value:"How do I attach policies to the actions pod to give it permissions to pull metadata from various sources?",id:"how-do-i-attach-policies-to-the-actions-pod-to-give-it-permissions-to-pull-metadata-from-various-sources",children:[],level:3}],level:2},{value:"Demo",id:"demo",children:[],level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",children:[],level:2}],d={toc:l};function p(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui-ingestion-guide"},"UI Ingestion Guide"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Starting in version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.8.25"),", DataHub supports creating, configuring, scheduling, & executing batch metadata ingestion using the DataHub user interface. This makes\ngetting metadata into DataHub easier by minimizing the overhead required to operate custom integration pipelines. "),(0,o.kt)("p",null,"This document will describe the steps required to configure, schedule, and execute metadata ingestion inside the UI. "),(0,o.kt)("h2",{id:"running-metadata-ingestion"},"Running Metadata Ingestion"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To view & manage UI-based metadata ingestion, you must have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Metadata Ingestion")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Secrets"),"\nprivileges assigned to your account. These can be granted by a ",(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/policies"},"Platform Policy"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45184).Z})),(0,o.kt)("p",null,"Once you have these privileges, you can begin to manage ingestion by navigating to the 'Ingestion' tab in DataHub. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43865).Z})),(0,o.kt)("p",null,"On this page, you'll see a list of active ",(0,o.kt)("strong",{parentName:"p"},"Ingestion Sources"),". An Ingestion Sources is a unique source of metadata ingested\ninto DataHub from an external source like Snowflake, Redshift, or BigQuery."),(0,o.kt)("p",null,"If you're just getting started, you won't have any sources. In the following sections, we'll describe how to create\nyour first ",(0,o.kt)("strong",{parentName:"p"},"Ingestion Source"),". "),(0,o.kt)("h3",{id:"creating-an-ingestion-source"},"Creating an Ingestion Source"),(0,o.kt)("p",null,"Before ingesting any metadata, you need to create a new Ingestion Source. Start by clicking ",(0,o.kt)("strong",{parentName:"p"},"+ Create new source"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49091).Z})),(0,o.kt)("h4",{id:"step-1-select-a-platform-template"},"Step 1: Select a Platform Template"),(0,o.kt)("p",null,"In the first step, select a ",(0,o.kt)("strong",{parentName:"p"},"Recipe Template")," corresponding to the source type that you'd like to extract metadata from. Choose among\na variety of natively supported integrations, from Snowflake to Postgres to Kafka.\nSelect ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom")," to construct an ingestion recipe from scratch. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79606).Z})),(0,o.kt)("p",null,"Next, you'll configure an ingestion ",(0,o.kt)("strong",{parentName:"p"},"Recipe"),", which defines ",(0,o.kt)("em",{parentName:"p"},"how")," and ",(0,o.kt)("em",{parentName:"p"},"what")," to extract from the source system."),(0,o.kt)("h4",{id:"step-2-configure-a-recipe"},"Step 2: Configure a Recipe"),(0,o.kt)("p",null,"Next, you'll define an ingestion ",(0,o.kt)("strong",{parentName:"p"},"Recipe")," in ",(0,o.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML"),". A ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/#recipes"},"Recipe")," is a set of configurations which is\nused by DataHub to extract metadata from a 3rd party system. It most often consists of the following parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A source ",(0,o.kt)("strong",{parentName:"li"},"type"),": The type of system you'd like to extract metadata from (e.g. snowflake, mysql, postgres). If you've chosen a native template, this will already be populated for you.\nTo view a full list of currently supported ",(0,o.kt)("strong",{parentName:"li"},"types"),", check out ",(0,o.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/#installing-plugins"},"this list"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"A source ",(0,o.kt)("strong",{parentName:"li"},"config"),": A set of configurations specific to the source ",(0,o.kt)("strong",{parentName:"li"},"type"),". Most sources support the following types of configuration values: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Coordinates"),": The location of the system you want to extract metadata from"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Credentials"),": Authorized credentials for accessing the system you want to extract metadata from"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customizations"),": Customizations regarding the metadata that will be extracted, e.g. which databases or tables to scan in a relational DB")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"A sink ",(0,o.kt)("strong",{parentName:"li"},"type"),": A type of sink to route the metadata extracted from the source type. The officially supported DataHub sink\ntypes are ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-rest")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-kafka"),". ")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"A sink ",(0,o.kt)("strong",{parentName:"li"},"config"),": Configuration required to send metadata to the provided sink type. For example, DataHub coordinates and credentials.")),(0,o.kt)("p",null,"A sample of a full recipe configured to ingest metadata from MySQL can be found in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(41597).Z})),(0,o.kt)("p",null,"Detailed configuration examples & documentation for each source type can be found on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/"},"DataHub Docs")," website."),(0,o.kt)("h5",{id:"creating-a-secret"},"Creating a Secret"),(0,o.kt)("p",null,"For production use cases, sensitive configuration values, such as database usernames and passwords,\nshould be hidden from plain view within your ingestion recipe. To accomplish this, you can create & embed ",(0,o.kt)("strong",{parentName:"p"},"Secrets"),". Secrets are named values\nthat are encrypted and stored within DataHub's storage layer."),(0,o.kt)("p",null,"To create a secret, first navigate to the 'Secrets' tab. Then click ",(0,o.kt)("inlineCode",{parentName:"p"},"+ Create new secret"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47427).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Creating a Secret to store the username for a MySQL database")),(0,o.kt)("p",null,"Inside the form, provide a unique name for the secret along with the value to be encrypted, and an optional description. Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," when you are done.\nThis will create a Secret which can be referenced inside your ingestion recipe using its name. "),(0,o.kt)("h5",{id:"referencing-a-secret"},"Referencing a Secret"),(0,o.kt)("p",null,"Once a Secret has been created, it can be referenced from within your ",(0,o.kt)("strong",{parentName:"p"},"Recipe")," using variable substitution. For example,\nto substitute secrets for a MySQL username and password into a Recipe, your Recipe would be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n    type: mysql\n    config:\n        host_port: 'localhost:3306'\n        database: my_db\n        username: ${MYSQL_USERNAME}\n        password: ${MYSQL_PASSWORD}\n        include_tables: true\n        include_views: true\n        profiling:\n            enabled: true\nsink:\n    type: datahub-rest\n    config:\n        server: 'http://datahub-gms:8080'\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Referencing DataHub Secrets from a Recipe definition")),(0,o.kt)("p",null,"When the Ingestion Source with this Recipe executes, DataHub will attempt to 'resolve' Secrets found within the YAML. If a secret can be resolved, the reference is substituted for its decrypted value prior to execution.\nSecret values are not persisted to disk beyond execution time, and are never transmitted outside DataHub."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Attention"),": Any DataHub users who have been granted the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Secrets")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/policies"},"Platform Privilege")," will be able to retrieve plaintext secret values using the GraphQL API. ")),(0,o.kt)("h4",{id:"step-3-schedule-execution"},"Step 3: Schedule Execution"),(0,o.kt)("p",null,"Next, you can optionally configure a schedule on which to execute your new Ingestion Source. This enables to schedule metadata extraction on a monthly, weekly, daily, or hourly cadence depending on the needs of your organization.\nSchedules are defined using CRON format. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29807).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"An Ingestion Source that is executed at 9:15am every day, Los Angeles time")),(0,o.kt)("p",null,"To learn more about the CRON scheduling format, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"Wikipedia")," overview."),(0,o.kt)("p",null,"If you plan to execute ingestion on an ad-hoc basis, you can click ",(0,o.kt)("strong",{parentName:"p"},"Skip")," to skip the scheduling step entirely. Don't worry -\nyou can always come back and change this. "),(0,o.kt)("h4",{id:"step-4-finishing-up"},"Step 4: Finishing Up"),(0,o.kt)("p",null,"Finally, give your Ingestion Source a name. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13790).Z})),(0,o.kt)("p",null,"Once you're happy with your configurations, click 'Done' to save your changes."),(0,o.kt)("h5",{id:"advanced-running-with-a-specific-cli-version"},"Advanced: Running with a specific CLI version"),(0,o.kt)("p",null,"DataHub comes pre-configured to use the latest version of the DataHub CLI (",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/acryl-datahub/"},"acryl-datahub"),") that is compatible\nwith the server. However, you can override the default package version using the 'Advanced' source configurations."),(0,o.kt)("p",null,"To do so, simply click 'Advanced', then change the 'CLI Version' text box to contain the exact version\nof the DataHub CLI you'd like to use."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(97567).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Pinning the CLI version to version ",(0,o.kt)("inlineCode",{parentName:"em"},"0.8.23.2"))),(0,o.kt)("p",null,"Once you're happy with your changes, simply click 'Done' to save. "),(0,o.kt)("h3",{id:"running-an-ingestion-source"},"Running an Ingestion Source"),(0,o.kt)("p",null,"Once you've created your Ingestion Source, you can run it by clicking 'Execute'. Shortly after,\nyou should see the 'Last Status' column of the ingestion source change from ",(0,o.kt)("inlineCode",{parentName:"p"},"N/A")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),". This\nmeans that the request to execute ingestion has been successfully picked up by the DataHub ingestion executor."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(30576).Z})),(0,o.kt)("p",null,"If ingestion has executed successfully, you should see it's state shown in green as ",(0,o.kt)("inlineCode",{parentName:"p"},"Succeeded"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62272).Z})),(0,o.kt)("h3",{id:"cancelling-an-ingestion-run"},"Cancelling an Ingestion Run"),(0,o.kt)("p",null,"If your ingestion run is hanging, there may a bug in the ingestion source, or another persistent issue like exponential timeouts. If these situations,\nyou can cancel ingestion by clicking ",(0,o.kt)("strong",{parentName:"p"},"Cancel")," on the problematic run."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85211).Z})),(0,o.kt)("p",null,"Once cancelled, you can view the output of the ingestion run by clicking ",(0,o.kt)("strong",{parentName:"p"},"Details"),". "),(0,o.kt)("h3",{id:"debugging-a-failed-ingestion-run"},"Debugging a Failed Ingestion Run"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10091).Z})),(0,o.kt)("p",null,"A variety of things can cause an ingestion run to fail. Common reasons for failure include:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Recipe Misconfiguration"),": A recipe has not provided the required or expected configurations for the ingestion source. You can refer\nto the ",(0,o.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Metadata Ingestion Framework")," source docs to learn more about the configurations required for your source type."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Failure to resolve Secrets"),": If DataHub is unable to find secrets that were referenced by your Recipe configuration, the ingestion run will fail.\nVerify that the names of the secrets referenced in your recipe match those which have been created. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Connectivity / Network Reachability"),": If DataHub is unable to reach a data source, for example due to DNS resolution\nfailures, metadata ingestion will fail. Ensure that the network where DataHub is deployed has access to the data source which\nyou are trying to reach. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Authentication"),": If you've enabled ",(0,o.kt)("a",{parentName:"li",href:"/docs/authentication/introducing-metadata-service-authentication"},"Metadata Service Authentication"),", you'll need to provide a Personal Access Token\nin your Recipe Configuration. To so this, set the 'token' field of the sink configuration to contain a Personal Access Token:\n",(0,o.kt)("img",{src:n(30226).Z}))),(0,o.kt)("p",null,"The output of each run is captured and available to view in the UI for easier debugging. To view output logs, click ",(0,o.kt)("strong",{parentName:"p"},"DETAILS"),"\non the corresponding ingestion run. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(65004).Z})),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"i-tried-to-ingest-metadata-after-running-datahub-docker-quickstart-but-ingestion-is-failing-with-failed-to-connect-errors-what-do-i-do"},"I tried to ingest metadata after running 'datahub docker quickstart', but ingestion is failing with 'Failed to Connect' errors. What do I do?"),(0,o.kt)("p",null,"If not due to one of the reasons outlined above, this may be because the executor running ingestion is unable\nto reach DataHub's backend using the default configurations. Try changing your ingestion recipe to make the ",(0,o.kt)("inlineCode",{parentName:"p"},"sink.config.server")," variable point to the Docker\nDNS name for the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms")," pod: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(19894).Z})),(0,o.kt)("h3",{id:"i-see-na-when-i-try-to-run-ingestion-what-do-i-do"},"I see 'N/A' when I try to run ingestion. What do I do?"),(0,o.kt)("p",null,"If you see 'N/A', and the ingestion run state never changes to 'Running', this may mean\nthat your executor (",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-actions"),") container is down. "),(0,o.kt)("p",null,"This container is responsible for executing requests to run ingestion when they come in, either\non demand on a particular schedule. You can verify the health of the container using ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". Moreover, you can inspect the container logs using by finding the container id\nfor the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-actions")," container and running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs <container-id>"),"."),(0,o.kt)("h3",{id:"when-should-i-not-use-ui-ingestion"},"When should I NOT use UI Ingestion?"),(0,o.kt)("p",null,"There are valid cases for ingesting metadata without the UI-based ingestion scheduler. For example,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have written a custom ingestion Source"),(0,o.kt)("li",{parentName:"ul"},"Your data sources are not reachable on the network where DataHub is deployed"),(0,o.kt)("li",{parentName:"ul"},"Your ingestion source requires context from a local filesystem (e.g. input files, environment variables, etc)"),(0,o.kt)("li",{parentName:"ul"},"You want to distribute metadata ingestion among multiple producers / environments")),(0,o.kt)("h3",{id:"how-do-i-attach-policies-to-the-actions-pod-to-give-it-permissions-to-pull-metadata-from-various-sources"},"How do I attach policies to the actions pod to give it permissions to pull metadata from various sources?"),(0,o.kt)("p",null,"This varies across the underlying platform. For AWS, please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/deploy/aws#iam-policies-for-ui-based-ingestion"},"guide"),"."),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=EyMyLcaw_74"},"here")," to see a full demo of the UI Ingestion feature."),(0,o.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,o.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on ",(0,o.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"Slack"),"!"))}p.isMDXComponent=!0},85211:function(e,t,n){t.Z=n.p+"assets/images/cancelled-ingestion-267f1e90517c7885822ef964d62279cf.png"},49091:function(e,t,n){t.Z=n.p+"assets/images/create-new-ingestion-source-button-9202e00f1368927db57c302df5c54870.png"},47427:function(e,t,n){t.Z=n.p+"assets/images/create-secret-8249bb9b09b06d430c798b9feddde62a.png"},97567:function(e,t,n){t.Z=n.p+"assets/images/custom-ingestion-cli-version-faf95f4b161456b4d03719620bacc33d.png"},41597:function(e,t,n){t.Z=n.p+"assets/images/example-mysql-recipe-09bb4120c603b5476bc0d5171a2b4e44.png"},10091:function(e,t,n){t.Z=n.p+"assets/images/failed-ingestion-1ecdb5e4c32ea881d39e7ddb30e601f4.png"},65004:function(e,t,n){t.Z=n.p+"assets/images/ingestion-logs-5f5753948c33b4066db8e4d318445fae.png"},45184:function(e,t,n){t.Z=n.p+"assets/images/ingestion-privileges-5e156de5ba717c8611cd23ce9a6564b1.png"},43865:function(e,t,n){t.Z=n.p+"assets/images/ingestion-tab-2e7b31ac1b9f0cdb1558e6017a716836.png"},30226:function(e,t,n){t.Z=n.p+"assets/images/ingestion-with-token-1110339707b3577f73fda2e3181d4776.png"},13790:function(e,t,n){t.Z=n.p+"assets/images/name-ingestion-source-fdc5cb070b8cd87979b4f6cea02a1e51.png"},19894:function(e,t,n){t.Z=n.p+"assets/images/quickstart-ingestion-config-38b4ebfbb1ae74712688ac0884b4e031.png"},30576:function(e,t,n){t.Z=n.p+"assets/images/running-ingestion-51a2245eb62a20c21a2eeff36d502448.png"},29807:function(e,t,n){t.Z=n.p+"assets/images/schedule-ingestion-73214d7e2993aec76871344cb1a28b27.png"},79606:function(e,t,n){t.Z=n.p+"assets/images/select-platform-template-fa3fe3f518534673fee1b0dade24ef86.png"},62272:function(e,t,n){t.Z=n.p+"assets/images/successful-ingestion-f82f93e942d8f906495a359695fb6897.png"}}]);