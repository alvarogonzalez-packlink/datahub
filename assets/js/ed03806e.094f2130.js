"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[40309],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>h});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),i=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},p=function(e){var a=i(e.components);return r.createElement(u.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(t),m=n,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return t?r.createElement(h,d(d({ref:a},p),{},{components:t})):r.createElement(h,d({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,d=new Array(o);d[0]=m;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l[s]="string"==typeof e?e:n,d[1]=l;for(var i=2;i<o;i++)d[i]=t[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50231:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),n=(t(67294),t(3905));const o={title:"DataHub Upgrade Docker Image",sidebar_label:"Upgrade Docker Image",slug:"/docker/datahub-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-upgrade/README.md"},d="DataHub Upgrade Docker Image",l={unversionedId:"docker/datahub-upgrade/README",id:"version-0.11.0/docker/datahub-upgrade/README",title:"DataHub Upgrade Docker Image",description:"This container is used to automatically apply upgrades from one version of DataHub to another.",source:"@site/versioned_docs/version-0.11.0/docker/datahub-upgrade/README.md",sourceDirName:"docker/datahub-upgrade",slug:"/docker/datahub-upgrade",permalink:"/docs/0.11.0/docker/datahub-upgrade",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-upgrade/README.md",tags:[],version:"0.11.0",frontMatter:{title:"DataHub Upgrade Docker Image",sidebar_label:"Upgrade Docker Image",slug:"/docker/datahub-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-upgrade/README.md"},sidebar:"overviewSidebar",previous:{title:"MetadataChangeProposal & MetadataChangeLog Events",permalink:"/docs/0.11.0/advanced/mcp-mcl"},next:{title:"No Code Metadata",permalink:"/docs/0.11.0/advanced/no-code-modeling"}},u={},i=[{value:"Supported Upgrades",id:"supported-upgrades",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Arguments",id:"arguments",level:2}],p={toc:i},s="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(s,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datahub-upgrade-docker-image"},"DataHub Upgrade Docker Image"),(0,n.kt)("p",null,"This container is used to automatically apply upgrades from one version of DataHub to another."),(0,n.kt)("h2",{id:"supported-upgrades"},"Supported Upgrades"),(0,n.kt)("p",null,"As of today, there are 2 supported upgrades:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NoCodeDataMigration"),": Performs a series of pre-flight qualification checks and then migrates metadata_aspect table data\nto metadata_aspect_v2 table. Arguments:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- *batchSize* (Optional): The number of rows to migrate at a time. Defaults to 1000.\n- *batchDelayMs* (Optional): The number of milliseconds of delay between migrated batches. Used for rate limiting. Defaults to 250. \n- *dbType* (optional): The target DB type. Valid values are `MYSQL`, `MARIA`, `POSTGRES`. Defaults to `MYSQL`. \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NoCodeDataMigrationCleanup"),": Cleanses graph index, search index, and key-value store of legacy DataHub data (metadata_aspect table) once\nthe No Code Data Migration has completed successfully. No arguments. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RestoreIndices"),": Restores indices by fetching the latest version of each aspect and producing MAE")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RestoreBackup"),": Restores the storage stack from a backup of the local database"))),(0,n.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,n.kt)("p",null,"To run the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub-upgrade")," container, some environment variables must be provided in order to tell the upgrade CLI\nwhere the running DataHub containers reside. "),(0,n.kt)("p",null,"Below details the required configurations. By default, these configs are provided for local docker-compose deployments of\nDataHub within ",(0,n.kt)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/env/docker.env"),". They assume that there is a Docker network called datahub_network\nwhere the DataHub containers can be found. "),(0,n.kt)("p",null,"These are also the variables used when the provided ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub-upgrade.sh")," script is executed. To run the upgrade CLI for non-local deployments,\nfollow these steps: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Define new ".env" variable to hold your environment variables.')),(0,n.kt)("p",null,"The following variables may be provided: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-aidl"},"# Required Environment Variables\nEBEAN_DATASOURCE_USERNAME=datahub\nEBEAN_DATASOURCE_PASSWORD=datahub\nEBEAN_DATASOURCE_HOST=<your-ebean-host>:3306\nEBEAN_DATASOURCE_URL=jdbc:mysql://<your-ebean-host>:3306/datahub?verifyServerCertificate=false&useSSL=true&useUnicode=yes&characterEncoding=UTF-8\nEBEAN_DATASOURCE_DRIVER=com.mysql.jdbc.Driver\n\nKAFKA_BOOTSTRAP_SERVER=<your-kafka-host>:29092\nKAFKA_SCHEMAREGISTRY_URL=http://<your-kafka-host>:8081\n\nELASTICSEARCH_HOST=<your-elastic-host>\nELASTICSEARCH_PORT=9200\n\nNEO4J_HOST=http://<your-neo-host>:7474\nNEO4J_URI=bolt://<your-neo-host>\nNEO4J_USERNAME=neo4j\nNEO4J_PASSWORD=datahub\n\nDATAHUB_GMS_HOST=<your-gms-host>>\nDATAHUB_GMS_PORT=8080\n\n# Datahub protocol (default http)\n# DATAHUB_GMS_PROTOCOL=http\n\nDATAHUB_MAE_CONSUMER_HOST=<your-mae-consumer-host>\nDATAHUB_MAE_CONSUMER_PORT=9091\n\n# Optional Arguments\n\n# Uncomment and set these to support SSL connection to Elasticsearch\n# ELASTICSEARCH_USE_SSL=\n# ELASTICSEARCH_SSL_PROTOCOL=\n# ELASTICSEARCH_SSL_SECURE_RANDOM_IMPL=\n# ELASTICSEARCH_SSL_TRUSTSTORE_FILE=\n# ELASTICSEARCH_SSL_TRUSTSTORE_TYPE=\n# ELASTICSEARCH_SSL_TRUSTSTORE_PASSWORD=\n# ELASTICSEARCH_SSL_KEYSTORE_FILE=\n# ELASTICSEARCH_SSL_KEYSTORE_TYPE=\n# ELASTICSEARCH_SSL_KEYSTORE_PASSWORD=\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Pull (or build) & execute the ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub-upgrade")," container:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade:head && docker run --env-file *path-to-custom-env-file.env* acryldata/datahub-upgrade:head -u NoCodeDataMigration\n")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("p",null,"The primary argument required by the datahub-upgrade container is the name of the upgrade to perform. This argument\ncan be specified using the ",(0,n.kt)("inlineCode",{parentName:"p"},"-u")," flag when running the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub-upgrade")," container. "),(0,n.kt)("p",null,'For example, to run the migration named "NoCodeDataMigration", you would do execute the following:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-aidl"},"./datahub-upgrade.sh -u NoCodeDataMigration\n")),(0,n.kt)("p",null,"OR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade:head && docker run --env-file env/docker.env acryldata/datahub-upgrade:head -u NoCodeDataMigration\n")),(0,n.kt)("p",null,"In addition to the required ",(0,n.kt)("inlineCode",{parentName:"p"},"-u")," argument, each upgrade may require specific arguments. You can provide arguments to individual\nupgrades using multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"-a")," arguments. "),(0,n.kt)("p",null,"For example, the NoCodeDataMigration upgrade provides 2 optional arguments detailed above: ",(0,n.kt)("em",{parentName:"p"},"batchSize")," and ",(0,n.kt)("em",{parentName:"p"},"batchDelayMs"),".\nTo specify these, you can use a combination of ",(0,n.kt)("inlineCode",{parentName:"p"},"-a")," arguments and of the form ",(0,n.kt)("em",{parentName:"p"},"argumentName=argumentValue")," as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-aidl"},"./datahub-upgrade.sh -u NoCodeDataMigration -a batchSize=500 -a batchDelayMs=1000 // Small batches with 1 second delay. \n")),(0,n.kt)("p",null,"OR "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade:head && docker run --env-file env/docker.env acryldata/datahub-upgrade:head -u NoCodeDataMigration -a batchSize=500 -a batchDelayMs=1000\n")))}c.isMDXComponent=!0}}]);