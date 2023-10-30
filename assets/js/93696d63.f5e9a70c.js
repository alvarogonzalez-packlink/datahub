"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[89281],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=o,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md"},i="DataHub Quickstart Guide",s={unversionedId:"docs/quickstart",id:"version-0.11.0/docs/quickstart",title:"DataHub Quickstart Guide",description:"This guide provides instructions on deploying the open source DataHub locally.",source:"@site/versioned_docs/version-0.11.0/docs/quickstart.md",sourceDirName:"docs",slug:"/quickstart",permalink:"/docs/0.11.0/quickstart",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md",tags:[],version:"0.11.0",frontMatter:{title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md"},sidebar:"overviewSidebar",previous:{title:"Features",permalink:"/docs/0.11.0/features"},next:{title:"Concepts",permalink:"/docs/0.11.0/what-is-datahub/datahub-concepts"}},u={},l=[{value:"Deploying DataHub",id:"deploying-datahub",level:2},{value:"Troubleshooting Issues",id:"troubleshooting-issues",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Ingest Metadata",id:"ingest-metadata",level:3},{value:"Invite Users",id:"invite-users",level:3},{value:"Enable Authentication",id:"enable-authentication",level:3},{value:"Change the Default <code>datahub</code> User Credentials",id:"change-the-default-datahub-user-credentials",level:3},{value:"Move to Production",id:"move-to-production",level:3},{value:"Default Credentials",id:"default-credentials",level:4},{value:"Exposed Ports",id:"exposed-ports",level:4},{value:"Performance &amp; Management",id:"performance--management",level:4},{value:"Other Common Operations",id:"other-common-operations",level:2},{value:"Stopping DataHub",id:"stopping-datahub",level:3},{value:"Resetting DataHub (a.k.a factory reset)",id:"resetting-datahub-aka-factory-reset",level:3},{value:"Backing up your DataHub Quickstart (experimental)",id:"backing-up-your-datahub-quickstart-experimental",level:3},{value:"Restoring your DataHub Quickstart (experimental)",id:"restoring-your-datahub-quickstart-experimental",level:3},{value:"Restoring a backup (primary + index) most common",id:"restoring-a-backup-primary--index-most-common",level:4},{value:"Restoring only the index to deal with index out of sync / corruption issues",id:"restoring-only-the-index-to-deal-with-index-out-of-sync--corruption-issues",level:4},{value:"Restoring a backup (primary but NO index) rarely used",id:"restoring-a-backup-primary-but-no-index-rarely-used",level:4},{value:"Upgrading your local DataHub",id:"upgrading-your-local-datahub",level:3},{value:"Customization",id:"customization",level:3}],d={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-quickstart-guide"},"DataHub Quickstart Guide"),(0,o.kt)("p",null,"This guide provides instructions on deploying the open source DataHub locally.\nIf you're interested in a managed version, ",(0,o.kt)("a",{parentName:"p",href:"https://www.acryldata.io/product"},"Acryl Data")," provides a fully managed, premium version of DataHub."),(0,o.kt)("a",{className:"button button--primary button--lg",href:"/docs/managed-datahub/welcome-acryl"},"Get Started with Managed DataHub"),(0,o.kt)("h2",{id:"deploying-datahub"},"Deploying DataHub"),(0,o.kt)("p",null,"To deploy a new instance of DataHub, perform the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Docker and Docker Compose v2 for your platform.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Windows or Mac, install ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"),"."),(0,o.kt)("li",{parentName:"ul"},"On Linux, install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/install/linux-install/"},"Docker for Linux")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Docker Compose"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to allocate enough hardware resources for Docker engine.\nTested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap area, and 10GB disk space.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Docker Engine from command line or the desktop app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the DataHub CLI"),(0,o.kt)("p",{parentName:"li"},"a. Ensure you have Python 3.7+ installed & configured. (Check using ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 --version"),")."),(0,o.kt)("p",{parentName:"li"},"b. Run the following commands in your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n")),(0,o.kt)("p",{parentName:"li"},"If you're using poetry, run the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"poetry add acryl-datahub\ndatahub version\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you see \"command not found\", try running cli commands with the prefix 'python3 -m' instead like ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m datahub version"),"\nNote that DataHub CLI does not support Python 2.x.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To deploy a DataHub instance locally, run the following CLI command from your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart\n")),(0,o.kt)("p",{parentName:"li"},"This will deploy a DataHub instance using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),".\nIf you are curious, the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file is downloaded to your home directory under the ",(0,o.kt)("inlineCode",{parentName:"p"},".datahub/quickstart")," directory."),(0,o.kt)("p",{parentName:"li"},"If things go well, you should see messages like the ones below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Fetching docker-compose file https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml from GitHub\nPulling docker images...\nFinished pulling docker images!\n\n[+] Running 11/11\n\u283f Container zookeeper                  Running                                                                                                                                                         0.0s\n\u283f Container elasticsearch              Running                                                                                                                                                         0.0s\n\u283f Container broker                     Running                                                                                                                                                         0.0s\n\u283f Container schema-registry            Running                                                                                                                                                         0.0s\n\u283f Container elasticsearch-setup        Started                                                                                                                                                         0.7s\n\u283f Container kafka-setup                Started                                                                                                                                                         0.7s\n\u283f Container mysql                      Running                                                                                                                                                         0.0s\n\u283f Container datahub-gms                Running                                                                                                                                                         0.0s\n\u283f Container mysql-setup                Started                                                                                                                                                         0.7s\n\u283f Container datahub-datahub-actions-1  Running                                                                                                                                                         0.0s\n\u283f Container datahub-frontend-react     Running                                                                                                                                                         0.0s\n.......\n\u2714 DataHub is now running\nIngest some demo data using `datahub docker ingest-sample-data`,\nor head to http://localhost:9002 (username: datahub, password: datahub) to play around with the frontend.\nNeed support? Get in touch on Slack: https://slack.datahubproject.io/\n")),(0,o.kt)("p",{parentName:"li"},"Upon completion of this step, you should be able to navigate to the DataHub UI\nat ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9002"},"http://localhost:9002")," in your browser. You can sign in using ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," as both the\nusername and password."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On Mac computers with Apple Silicon (M1, M2 etc.), you might see an error like ",(0,o.kt)("inlineCode",{parentName:"p"},"no matching manifest for linux/arm64/v8 in the manifest list entries"),", this typically means that the datahub cli was not able to detect that you are running it on Apple Silicon. To resolve this issue, override the default architecture detection by issuing ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --arch m1"))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ingest the sample metadata, run the following CLI command from your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker ingest-sample-data\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you've enabled ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/authentication/introducing-metadata-service-authentication"},"Metadata Service Authentication"),", you'll need to provide a Personal Access Token\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--token <token>")," parameter in the command.")),(0,o.kt)("p",null,"That's it! Now feel free to play around with DataHub!"),(0,o.kt)("h2",{id:"troubleshooting-issues"},"Troubleshooting Issues"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/troubleshooting/quickstart"},"Quickstart Debugging Guide"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("h3",{id:"ingest-metadata"},"Ingest Metadata"),(0,o.kt)("p",null,"To start pushing your company's metadata into DataHub, take a look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/ui-ingestion"},"UI-based Ingestion Guide"),", or to run ingestion using the cli, look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/metadata-ingestion"},"Metadata Ingestion Guide"),"."),(0,o.kt)("h3",{id:"invite-users"},"Invite Users"),(0,o.kt)("p",null,"To add users to your deployment to share with your team check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/authentication/guides/add-users"},"Adding Users to DataHub")),(0,o.kt)("h3",{id:"enable-authentication"},"Enable Authentication"),(0,o.kt)("p",null,"To enable SSO, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/authentication/guides/sso/configure-oidc-react"},"Configuring OIDC Authentication")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/authentication/guides/jaas"},"Configuring JaaS Authentication"),"."),(0,o.kt)("p",null,"To enable backend Authentication, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/authentication/introducing-metadata-service-authentication#configuring-metadata-service-authentication"},"authentication in DataHub's backend"),"."),(0,o.kt)("h3",{id:"change-the-default-datahub-user-credentials"},"Change the Default ",(0,o.kt)("inlineCode",{parentName:"h3"},"datahub")," User Credentials"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note that deleting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Data Hub")," user in the UI ",(0,o.kt)("strong",{parentName:"p"},"WILL NOT")," disable the default user. You will still be able to log in using the default 'datahub:datahub' credentials. To safely delete the default credentials, please follow the guide provided below.")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/authentication/changing-default-credentials#quickstart"},"Change the default user datahub in quickstart"),"."),(0,o.kt)("h3",{id:"move-to-production"},"Move to Production"),(0,o.kt)("p",null,"We recommend deploying DataHub to production using Kubernetes. We provide helpful ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/datahub/datahub"},"Helm Charts")," to help you quickly get up and running. Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/deploy/kubernetes"},"Deploying DataHub to Kubernetes")," for a step-by-step walkthrough."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart")," method of running DataHub is intended for local development and a quick way to experience the features that DataHub has to offer. It is not\nintended for a production environment. This recommendation is based on the following points."),(0,o.kt)("h4",{id:"default-credentials"},"Default Credentials"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"quickstart")," uses docker-compose configuration which includes default credentials for both DataHub, and it's underlying\nprerequisite data stores, such as MySQL. Additionally, other components are unauthenticated out of the box. This is a\ndesign choice to make development easier and is not best practice for a production environment."),(0,o.kt)("h4",{id:"exposed-ports"},"Exposed Ports"),(0,o.kt)("p",null,"DataHub's services, and it's backend data stores use the docker default behavior of binding to all interface addresses.\nThis makes it useful for development but is not recommended in a production environment."),(0,o.kt)("h4",{id:"performance--management"},"Performance & Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"quickstart")," is limited by the resources available on a single host, there is no ability to scale horizontally."),(0,o.kt)("li",{parentName:"ul"},"Rollout of new versions requires downtime."),(0,o.kt)("li",{parentName:"ul"},"The configuration is largely pre-determined and not easily managed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"quickstart"),", by default, follows the most recent builds forcing updates to the latest released and unreleased builds.")),(0,o.kt)("h2",{id:"other-common-operations"},"Other Common Operations"),(0,o.kt)("h3",{id:"stopping-datahub"},"Stopping DataHub"),(0,o.kt)("p",null,"To stop DataHub's quickstart, you can issue the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --stop\n")),(0,o.kt)("h3",{id:"resetting-datahub-aka-factory-reset"},"Resetting DataHub (a.k.a factory reset)"),(0,o.kt)("p",null,"To cleanse DataHub of all of its state (e.g. before ingesting your own), you can use the CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"nuke")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker nuke\n")),(0,o.kt)("h3",{id:"backing-up-your-datahub-quickstart-experimental"},"Backing up your DataHub Quickstart (experimental)"),(0,o.kt)("p",null,"The quickstart image is not recommended for use as a production instance. See ",(0,o.kt)("a",{parentName:"p",href:"#move-to-production"},"Moving to production")," for recommendations on setting up your production cluster. However, in case you want to take a backup of your current quickstart state (e.g. you have a demo to your company coming up and you want to create a copy of the quickstart data so you can restore it at a future date), you can supply the ",(0,o.kt)("inlineCode",{parentName:"p"},"--backup")," flag to quickstart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --backup\n")),(0,o.kt)("p",null,"will take a backup of your MySQL image and write it by default to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/quickstart/")," directory as the file ",(0,o.kt)("inlineCode",{parentName:"p"},"backup.sql"),". You can customize this by passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"--backup-file")," argument.\ne.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --backup --backup-file /home/my_user/datahub_backups/quickstart_backup_2002_22_01.sql\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that the Quickstart backup does not include any timeseries data (dataset statistics, profiles, etc.), so you will lose that information if you delete all your indexes and restore from this backup.")),(0,o.kt)("h3",{id:"restoring-your-datahub-quickstart-experimental"},"Restoring your DataHub Quickstart (experimental)"),(0,o.kt)("p",null,"As you might imagine, these backups are restore-able. The following section describes a few different options you have to restore your backup."),(0,o.kt)("h4",{id:"restoring-a-backup-primary--index-most-common"},"Restoring a backup (primary + index) ","[most common]"),(0,o.kt)("p",null,"To restore a previous backup, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore\n")),(0,o.kt)("p",null,"This command will pick up the ",(0,o.kt)("inlineCode",{parentName:"p"},"backup.sql")," file located under ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/quickstart")," and restore your primary database as well as the elasticsearch indexes with it."),(0,o.kt)("p",null,"To supply a specific backup file, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--restore-file")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore --restore-file /home/my_user/datahub_backups/quickstart_backup_2002_22_01.sql\n")),(0,o.kt)("h4",{id:"restoring-only-the-index-to-deal-with-index-out-of-sync--corruption-issues"},"Restoring only the index ","[to deal with index out of sync / corruption issues]"),(0,o.kt)("p",null,"Another situation that can come up is the index can get corrupt, or be missing some update. In order to re-bootstrap the index from the primary store, you can run this command to sync the index with the primary store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore-indices\n")),(0,o.kt)("h4",{id:"restoring-a-backup-primary-but-no-index-rarely-used"},"Restoring a backup (primary but NO index) ","[rarely used]"),(0,o.kt)("p",null,"Sometimes, you might want to just restore the state of your primary database (MySQL), but not re-index the data. To do this, you have to explicitly disable the restore-indices capability."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore --no-restore-indices\n")),(0,o.kt)("h3",{id:"upgrading-your-local-datahub"},"Upgrading your local DataHub"),(0,o.kt)("p",null,"If you have been testing DataHub locally, a new version of DataHub got released and you want to try the new version then you can just issue the quickstart command again. It will pull down newer images and restart your instance without losing any data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart\n")),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("p",null,"If you would like to customize the DataHub installation further, please download the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml"},"docker-compose.yaml")," used by the cli tool, modify it as necessary and deploy DataHub by passing the downloaded docker-compose file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --quickstart-compose-file <path to compose file>\n")))}p.isMDXComponent=!0}}]);