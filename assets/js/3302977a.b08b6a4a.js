"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var n=a(83117),o=(a(67294),a(3905));const r={title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md"},i="DataHub Quickstart Guide",u={unversionedId:"docs/quickstart",id:"docs/quickstart",title:"DataHub Quickstart Guide",description:"Deploying DataHub",source:"@site/genDocs/docs/quickstart.md",sourceDirName:"docs",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md",tags:[],version:"current",frontMatter:{title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md"},sidebar:"overviewSidebar",previous:{title:"Get Started With DataHub",permalink:"/docs/get-started-with-datahub"},next:{title:"Onboarding Users to DataHub",permalink:"/docs/authentication/guides/add-users"}},s={},l=[{value:"Deploying DataHub",id:"deploying-datahub",level:2},{value:"Troubleshooting Issues",id:"troubleshooting-issues",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Ingest Metadata",id:"ingest-metadata",level:3},{value:"Invite Users",id:"invite-users",level:3},{value:"Enable Authentication",id:"enable-authentication",level:3},{value:"Move to Production",id:"move-to-production",level:3},{value:"Other Common Operations",id:"other-common-operations",level:2},{value:"Stopping DataHub",id:"stopping-datahub",level:3},{value:"Resetting DataHub (a.k.a factory reset)",id:"resetting-datahub-aka-factory-reset",level:3},{value:"Backing up your DataHub Quickstart (experimental)",id:"backing-up-your-datahub-quickstart-experimental",level:3},{value:"Restoring your DataHub Quickstart (experimental)",id:"restoring-your-datahub-quickstart-experimental",level:3},{value:"Restoring a backup (primary + index) most common",id:"restoring-a-backup-primary--index-most-common",level:4},{value:"Restoring only the index to deal with index out of sync / corruption issues",id:"restoring-only-the-index-to-deal-with-index-out-of-sync--corruption-issues",level:4},{value:"Restoring a backup (primary but NO index) rarely used",id:"restoring-a-backup-primary-but-no-index-rarely-used",level:4},{value:"Upgrading your local DataHub",id:"upgrading-your-local-datahub",level:3},{value:"Customization",id:"customization",level:3}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-quickstart-guide"},"DataHub Quickstart Guide"),(0,o.kt)("h2",{id:"deploying-datahub"},"Deploying DataHub"),(0,o.kt)("p",null,"To deploy a new instance of DataHub, perform the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Docker and Docker Compose v2 for your platform.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Windows or Mac, install ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"),"."),(0,o.kt)("li",{parentName:"ul"},"On Linux, install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/install/linux-install/"},"Docker for Linux")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Docker Compose"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to allocate enough hardware resources for Docker engine.\nTested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap area, and 10GB disk space.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Docker Engine from command line or the desktop app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the DataHub CLI"),(0,o.kt)("p",{parentName:"li"},"a. Ensure you have Python 3.7+ installed & configured. (Check using ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 --version"),")."),(0,o.kt)("p",{parentName:"li"},"b. Run the following commands in your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n")),(0,o.kt)("p",{parentName:"li"},"If you're using poetry, run the following command. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"poetry add acryl-datahub\ndatahub version\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"   If you see \"command not found\", try running cli commands with the prefix 'python3 -m' instead like ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m datahub version"),"\nNote that DataHub CLI does not support Python 2.x.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To deploy a DataHub instance locally, run the following CLI command from your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart\n")),(0,o.kt)("p",{parentName:"li"},"This will deploy a DataHub instance using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),".\nIf you are curious, the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file is downloaded to your home directory under the ",(0,o.kt)("inlineCode",{parentName:"p"},".datahub/quickstart")," directory."),(0,o.kt)("p",{parentName:"li"},"If things go well, you should see messages like the ones below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Fetching docker-compose file https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml from GitHub\nPulling docker images...\nFinished pulling docker images!\n\n[+] Running 11/11\n\u283f Container zookeeper                  Running                                                                                                                                                         0.0s\n\u283f Container elasticsearch              Running                                                                                                                                                         0.0s\n\u283f Container broker                     Running                                                                                                                                                         0.0s\n\u283f Container schema-registry            Running                                                                                                                                                         0.0s\n\u283f Container elasticsearch-setup        Started                                                                                                                                                         0.7s\n\u283f Container kafka-setup                Started                                                                                                                                                         0.7s\n\u283f Container mysql                      Running                                                                                                                                                         0.0s\n\u283f Container datahub-gms                Running                                                                                                                                                         0.0s\n\u283f Container mysql-setup                Started                                                                                                                                                         0.7s\n\u283f Container datahub-datahub-actions-1  Running                                                                                                                                                         0.0s\n\u283f Container datahub-frontend-react     Running                                                                                                                                                         0.0s\n.......\n\u2714 DataHub is now running\nIngest some demo data using `datahub docker ingest-sample-data`,\nor head to http://localhost:9002 (username: datahub, password: datahub) to play around with the frontend.\nNeed support? Get in touch on Slack: https://slack.datahubproject.io/\n")),(0,o.kt)("p",{parentName:"li"},"Upon completion of this step, you should be able to navigate to the DataHub UI\nat ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9002"},"http://localhost:9002")," in your browser. You can sign in using ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," as both the\nusername and password."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"   On Mac computers with Apple Silicon (M1, M2 etc.), you might see an error like ",(0,o.kt)("inlineCode",{parentName:"p"},"no matching manifest for linux/arm64/v8 in the manifest list entries"),", this typically means that the datahub cli was not able to detect that you are running it on Apple Silicon. To resolve this issue, override the default architecture detection by issuing ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --arch m1"))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ingest the sample metadata, run the following CLI command from your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker ingest-sample-data\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you've enabled ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/introducing-metadata-service-authentication"},"Metadata Service Authentication"),", you'll need to provide a Personal Access Token\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--token <token>")," parameter in the command.")),(0,o.kt)("p",null,"That's it! Now feel free to play around with DataHub!"),(0,o.kt)("h2",{id:"troubleshooting-issues"},"Troubleshooting Issues"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Command not found: datahub"),(0,o.kt)("p",null,'If running the datahub cli produces "command not found" errors inside your terminal, your system may be defaulting to an\nolder version of Python. Try prefixing your ',(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m datahub docker quickstart\n")),(0,o.kt)("p",null,"Another possibility is that your system PATH does not include pip's ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.local/bin")," directory.  On linux, you can add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'if [ -d "$HOME/.local/bin" ] ; then\n    PATH="$HOME/.local/bin:$PATH"\nfi\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Port Conflicts"),(0,o.kt)("p",null,"By default the quickstart deploy will require the following ports to be free on your local machine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3306 for MySQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"9200 for Elasticsearch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"9092 for the Kafka broker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"8081 for Schema Registry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"2181 for ZooKeeper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"9002 for the DataHub Web Application (datahub-frontend)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"8080 for the DataHub Metadata Service (datahub-gms)"),(0,o.kt)("p",{parentName:"li"},"In case the default ports conflict with software you are already running on your machine, you can override these ports by passing additional flags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart")," command.\ne.g. To override the MySQL port with 53306 (instead of the default 3306), you can say: ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --mysql-port 53306"),". Use ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --help")," to see all the supported options.\nFor the metadata service container (datahub-gms), you need to use an environment variable, ",(0,o.kt)("inlineCode",{parentName:"p"},"DATAHUB_MAPPED_GMS_PORT"),". So for instance to use the port 58080, you would say ",(0,o.kt)("inlineCode",{parentName:"p"},"DATAHUB_MAPPED_GMS_PORT=58080 datahub docker quickstart"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"no matching manifest for linux/arm64/v8 in the manifest list entries"),"On Mac computers with Apple Silicon (M1, M2 etc.), you might see an error like `no matching manifest for linux/arm64/v8 in the manifest list entries`, this typically means that the datahub cli was not able to detect that you are running it on Apple Silicon. To resolve this issue, override the default architecture detection by issuing `datahub docker quickstart --arch m1`"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Miscellaneous Docker issues"),"There can be misc issues with Docker, like conflicting containers and dangling volumes, that can often be resolved by pruning your Docker state with the following command. Note that this command removes all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system prune\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Still stuck?"),(0,o.kt)("p",null,"Hop over to our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack community")," and ask for help in the ",(0,o.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/archives/C029A3M079U"},"#troubleshoot")," channel!")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("h3",{id:"ingest-metadata"},"Ingest Metadata"),(0,o.kt)("p",null,"To start pushing your company's metadata into DataHub, take a look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-ingestion"},"UI-based Ingestion Guide"),", or to run ingestion using the cli, look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"Metadata Ingestion Guide"),"."),(0,o.kt)("h3",{id:"invite-users"},"Invite Users"),(0,o.kt)("p",null,"To add users to your deployment to share with your team check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/guides/add-users"},"Adding Users to DataHub")),(0,o.kt)("h3",{id:"enable-authentication"},"Enable Authentication"),(0,o.kt)("p",null,"To enable SSO, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/guides/sso/configure-oidc-react"},"Configuring OIDC Authentication")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/guides/jaas"},"Configuring JaaS Authentication"),". "),(0,o.kt)("p",null,"To enable backend Authentication, check out ","[authentication in DataHub's backend]","(/docs/authentication/introducing-metadata-service-authentication#Configuring Metadata Service Authentication). "),(0,o.kt)("h3",{id:"move-to-production"},"Move to Production"),(0,o.kt)("p",null,"We recommend deploying DataHub to production using Kubernetes. We provide helpful ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/datahub/datahub"},"Helm Charts")," to help you quickly get up and running. Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/deploy/kubernetes"},"Deploying DataHub to Kubernetes")," for a step-by-step walkthrough. "),(0,o.kt)("h2",{id:"other-common-operations"},"Other Common Operations"),(0,o.kt)("h3",{id:"stopping-datahub"},"Stopping DataHub"),(0,o.kt)("p",null,"To stop DataHub's quickstart, you can issue the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --stop\n")),(0,o.kt)("h3",{id:"resetting-datahub-aka-factory-reset"},"Resetting DataHub (a.k.a factory reset)"),(0,o.kt)("p",null,"To cleanse DataHub of all of its state (e.g. before ingesting your own), you can use the CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"nuke")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker nuke\n")),(0,o.kt)("h3",{id:"backing-up-your-datahub-quickstart-experimental"},"Backing up your DataHub Quickstart (experimental)"),(0,o.kt)("p",null,"The quickstart image is not recommended for use as a production instance. See ",(0,o.kt)("a",{parentName:"p",href:"#move-to-production"},"Moving to production")," for recommendations on setting up your production cluster. However, in case you want to take a backup of your current quickstart state (e.g. you have a demo to your company coming up and you want to create a copy of the quickstart data so you can restore it at a future date), you can supply the ",(0,o.kt)("inlineCode",{parentName:"p"},"--backup")," flag to quickstart. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --backup\n")),(0,o.kt)("p",null,"will take a backup of your MySQL image and write it by default to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/quickstart/")," directory as the file ",(0,o.kt)("inlineCode",{parentName:"p"},"backup.sql"),". You can customize this by passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"--backup-file")," argument.\ne.g. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --backup --backup-file /home/my_user/datahub_backups/quickstart_backup_2002_22_01.sql\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that the Quickstart backup does not include any timeseries data (dataset statistics, profiles, etc.), so you will lose that information if you delete all your indexes and restore from this backup. ")),(0,o.kt)("h3",{id:"restoring-your-datahub-quickstart-experimental"},"Restoring your DataHub Quickstart (experimental)"),(0,o.kt)("p",null,"As you might imagine, these backups are restore-able. The following section describes a few different options you have to restore your backup."),(0,o.kt)("h4",{id:"restoring-a-backup-primary--index-most-common"},"Restoring a backup (primary + index) ","[most common]"),(0,o.kt)("p",null,"To restore a previous backup, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore\n")),(0,o.kt)("p",null,"This command will pick up the ",(0,o.kt)("inlineCode",{parentName:"p"},"backup.sql")," file located under ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/quickstart")," and restore your primary database as well as the elasticsearch indexes with it."),(0,o.kt)("p",null,"To supply a specific backup file, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--restore-file")," option. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore --restore-file /home/my_user/datahub_backups/quickstart_backup_2002_22_01.sql\n")),(0,o.kt)("h4",{id:"restoring-only-the-index-to-deal-with-index-out-of-sync--corruption-issues"},"Restoring only the index ","[to deal with index out of sync / corruption issues]"),(0,o.kt)("p",null,"Another situation that can come up is the index can get corrupt, or be missing some update. In order to re-bootstrap the index from the primary store, you can run this command to sync the index with the primary store. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore-indices\n")),(0,o.kt)("h4",{id:"restoring-a-backup-primary-but-no-index-rarely-used"},"Restoring a backup (primary but NO index) ","[rarely used]"),(0,o.kt)("p",null,"Sometimes, you might want to just restore the state of your primary database (MySQL), but not re-index the data. To do this, you have to explicitly disable the restore-indices capability. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore --no-restore-indices\n")),(0,o.kt)("h3",{id:"upgrading-your-local-datahub"},"Upgrading your local DataHub"),(0,o.kt)("p",null,"If you have been testing DataHub locally, a new version of DataHub got released and you want to try the new version then you can just issue the quickstart command again. It will pull down newer images and restart your instance without losing any data. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart\n")),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("p",null,"If you would like to customize the DataHub installation further, please download the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml"},"docker-compose.yaml")," used by the cli tool, modify it as necessary and deploy DataHub by passing the downloaded docker-compose file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --quickstart-compose-file <path to compose file>\n")))}c.isMDXComponent=!0}}]);