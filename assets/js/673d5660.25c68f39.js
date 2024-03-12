"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90310],{43112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905),o=a(51715),r=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md"},d="DataHub Quickstart Guide",p={unversionedId:"docs/quickstart",id:"version-0.13.0/docs/quickstart",title:"DataHub Quickstart Guide",description:"This guide provides instructions on deploying the open source DataHub locally.",source:"@site/versioned_docs/version-0.13.0/docs/quickstart.md",sourceDirName:"docs",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md",tags:[],version:"0.13.0",frontMatter:{title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quickstart.md"},sidebar:"overviewSidebar",previous:{title:"What is DataHub?",permalink:"/docs/features"},next:{title:"Concepts",permalink:"/docs/what-is-datahub/datahub-concepts"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the DataHub CLI",id:"install-the-datahub-cli",level:2},{value:"Start DataHub",id:"start-datahub",level:2},{value:"Sign In",id:"sign-in",level:3},{value:"Ingest Sample Data",id:"ingest-sample-data",level:3},{value:"Common Operations",id:"common-operations",level:2},{value:"Stop DataHub",id:"stop-datahub",level:3},{value:"Reset DataHub",id:"reset-datahub",level:3},{value:"Upgrade DataHub",id:"upgrade-datahub",level:3},{value:"Customize installation",id:"customize-installation",level:3},{value:"Back up DataHub",id:"back-up-datahub",level:3},{value:"Restore DataHub",id:"restore-datahub",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Move To Production",id:"move-to-production",level:3},{value:"Default Credentials",id:"default-credentials",level:4},{value:"Exposed Ports",id:"exposed-ports",level:4},{value:"Performance &amp; Management",id:"performance--management",level:4}],k={toc:m},h="wrapper";function b(e){var{components:t}=e,a=u(e,["components"]);return(0,n.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datahub-quickstart-guide"},"DataHub Quickstart Guide"),(0,n.kt)("admonition",{title:"Managed DataHub",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This guide provides instructions on deploying the open source DataHub locally.\nIf you're interested in a managed version, ",(0,n.kt)("a",{parentName:"p",href:"https://www.acryldata.io/product"},"Acryl Data")," provides a fully managed, premium version of DataHub. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/managed-datahub/welcome-acryl"},"Get Started with Managed DataHub")))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("strong",{parentName:"p"},"Docker")," and ",(0,n.kt)("strong",{parentName:"p"},"Docker Compose")," v2 for your platform."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Platform"),(0,n.kt)("th",{parentName:"tr",align:null},"Application"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Window"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mac"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Linux"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.docker.com/desktop/install/linux-install/"},"Docker for Linux")," and ",(0,n.kt)("a",{parentName:"td",href:"https://docs.docker.com/compose/install/linux/"},"Docker Compose")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Launch the Docker engine")," from command line or the desktop app.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure you have ",(0,n.kt)("strong",{parentName:"p"},"Python 3.8+")," installed & configured. (Check using ",(0,n.kt)("inlineCode",{parentName:"p"},"python3 --version"),")."))),(0,n.kt)("admonition",{title:"Docker Resource Allocation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to allocate enough hardware resources for Docker engine. ",(0,n.kt)("br",null),"\nTested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap area, and 10GB disk space.")),(0,n.kt)("h2",{id:"install-the-datahub-cli"},"Install the DataHub CLI"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"pip",label:"pip",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n")),(0,n.kt)("admonition",{title:"Command Not Found",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you see ",(0,n.kt)("inlineCode",{parentName:"p"},"command not found"),", try running cli commands like ",(0,n.kt)("inlineCode",{parentName:"p"},"python3 -m datahub version"),". ",(0,n.kt)("br",null),"\nNote that DataHub CLI does not support Python 2.x."))),(0,n.kt)(r.Z,{value:"poetry",label:"poetry",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"poetry add acryl-datahub\npoetry shell\ndatahub version\n")))),(0,n.kt)("h2",{id:"start-datahub"},"Start DataHub"),(0,n.kt)("p",null,"Run the following CLI command from your terminal."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart\n")),(0,n.kt)("p",null,"This will deploy a DataHub instance using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),".\nIf you are curious, the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file is downloaded to your home directory under the ",(0,n.kt)("inlineCode",{parentName:"p"},".datahub/quickstart")," directory."),(0,n.kt)("p",null,"If things go well, you should see messages like the ones below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"Fetching docker-compose file https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml from GitHub\nPulling docker images...\nFinished pulling docker images!\n\n[+] Running 11/11\n\u283f Container zookeeper                  Running                                                                                                                                                         0.0s\n\u283f Container elasticsearch              Running                                                                                                                                                         0.0s\n\u283f Container broker                     Running                                                                                                                                                         0.0s\n\u283f Container schema-registry            Running                                                                                                                                                         0.0s\n\u283f Container elasticsearch-setup        Started                                                                                                                                                         0.7s\n\u283f Container kafka-setup                Started                                                                                                                                                         0.7s\n\u283f Container mysql                      Running                                                                                                                                                         0.0s\n\u283f Container datahub-gms                Running                                                                                                                                                         0.0s\n\u283f Container mysql-setup                Started                                                                                                                                                         0.7s\n\u283f Container datahub-datahub-actions-1  Running                                                                                                                                                         0.0s\n\u283f Container datahub-frontend-react     Running                                                                                                                                                         0.0s\n.......\n\u2714 DataHub is now running\nIngest some demo data using `datahub docker ingest-sample-data`,\nor head to http://localhost:9002 (username: datahub, password: datahub) to play around with the frontend.\nNeed support? Get in touch on Slack: https://slack.datahubproject.io/\n")),(0,n.kt)("admonition",{title:"Mac M1/M2",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"On Mac computers with Apple Silicon (M1, M2 etc.), you might see an error like ",(0,n.kt)("inlineCode",{parentName:"p"},"no matching manifest for linux/arm64/v8 in the manifest list entries"),".\nThis typically means that the datahub cli was not able to detect that you are running it on Apple Silicon.\nTo resolve this issue, override the default architecture detection by issuing ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart --arch m1"))),(0,n.kt)("h3",{id:"sign-in"},"Sign In"),(0,n.kt)("p",null,"Upon completion of this step, you should be able to navigate to the DataHub UI at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:9002"},"http://localhost:9002")," in your browser.\nYou can sign in using the default credentials below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"username: datahub\npassword: datahub\n")),(0,n.kt)("p",null,"To change the default credentials, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/changing-default-credentials#quickstart"},"Change the default user datahub in quickstart"),"."),(0,n.kt)("h3",{id:"ingest-sample-data"},"Ingest Sample Data"),(0,n.kt)("p",null,"To ingest the sample metadata, run the following CLI command from your terminal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker ingest-sample-data\n")),(0,n.kt)("admonition",{title:"Token Authentication",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you've enabled ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/introducing-metadata-service-authentication"},"Metadata Service Authentication"),", you'll need to provide a Personal Access Token\nusing the ",(0,n.kt)("inlineCode",{parentName:"p"},"--token <token>")," parameter in the command.")),(0,n.kt)("p",null,"That's it! Now feel free to play around with DataHub!"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"common-operations"},"Common Operations"),(0,n.kt)("h3",{id:"stop-datahub"},"Stop DataHub"),(0,n.kt)("p",null,"To stop DataHub's quickstart, you can issue the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --stop\n")),(0,n.kt)("h3",{id:"reset-datahub"},"Reset DataHub"),(0,n.kt)("p",null,"To cleanse DataHub of all of its state (e.g. before ingesting your own), you can use the CLI ",(0,n.kt)("inlineCode",{parentName:"p"},"nuke")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker nuke\n")),(0,n.kt)("h3",{id:"upgrade-datahub"},"Upgrade DataHub"),(0,n.kt)("p",null,"If you have been testing DataHub locally, a new version of DataHub got released and you want to try the new version then you can just issue the quickstart command again. It will pull down newer images and restart your instance without losing any data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart\n")),(0,n.kt)("h3",{id:"customize-installation"},"Customize installation"),(0,n.kt)("p",null,"If you would like to customize the DataHub installation further, please download the ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml"},"docker-compose.yaml")," used by the cli tool, modify it as necessary and deploy DataHub by passing the downloaded docker-compose file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --quickstart-compose-file <path to compose file>\n")),(0,n.kt)("h3",{id:"back-up-datahub"},"Back up DataHub"),(0,n.kt)("p",null,"The quickstart image is not recommended for use as a production instance. ",(0,n.kt)("br",null),"\nHowever, in case you want to take a backup of your current quickstart state (e.g. you have a demo to your company coming up and you want to create a copy of the quickstart data so you can restore it at a future date), you can supply the ",(0,n.kt)("inlineCode",{parentName:"p"},"--backup")," flag to quickstart."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"backup",label:"Back up (default)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --backup\n")),(0,n.kt)("p",null,"This will take a backup of your MySQL image and write it by default to your ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.datahub/quickstart/")," directory as the file ",(0,n.kt)("inlineCode",{parentName:"p"},"backup.sql"),".")),(0,n.kt)(r.Z,{value:"backup custom",label:"Back up to custom directory",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --backup --backup-file <path to backup file>\n")),(0,n.kt)("p",null,"You can customize the backup file path by passing a ",(0,n.kt)("inlineCode",{parentName:"p"},"--backup-file")," argument."))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Note that the Quickstart backup does not include any timeseries data (dataset statistics, profiles, etc.), so you will lose that information if you delete all your indexes and restore from this backup.")),(0,n.kt)("h3",{id:"restore-datahub"},"Restore DataHub"),(0,n.kt)("p",null,"As you might imagine, these backups are restore-able. The following section describes a few different options you have to restore your backup."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"General",label:"General Restoring",mdxType:"TabItem"},(0,n.kt)("p",null,"To restore a previous backup, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --restore\n")),(0,n.kt)("p",null,"This command will pick up the ",(0,n.kt)("inlineCode",{parentName:"p"},"backup.sql")," file located under ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.datahub/quickstart")," and restore your primary database as well as the elasticsearch indexes with it."),(0,n.kt)("p",null,"To supply a specific backup file, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--restore-file")," option."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --restore --restore-file /home/my_user/datahub_backups/quickstart_backup_2002_22_01.sql\n"))),(0,n.kt)(r.Z,{value:"Restoring Only Index",label:"Restore Only Index",mdxType:"TabItem"},(0,n.kt)("p",null,"Another situation that can come up is the index can get corrupt, or be missing some update. In order to re-bootstrap the index from the primary store, you can run this command to sync the index with the primary store."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --restore-indices\n"))),(0,n.kt)(r.Z,{value:"Restoring Only Primary",label:"Restore Only Primary",mdxType:"TabItem"},(0,n.kt)("p",null,"Sometimes, you might want to just restore the state of your primary database (MySQL), but not re-index the data. To do this, you have to explicitly disable the restore-indices capability."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"datahub docker quickstart --restore --no-restore-indices\n")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/troubleshooting/quickstart"},"Quickstart Debugging Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ui-ingestion"},"Ingest metadata through the UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Ingest metadata through the CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authentication/guides/add-users"},"Add Users to DataHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authentication/guides/sso/configure-oidc-react"},"Configure OIDC Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authentication/guides/jaas"},"Configure JaaS Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authentication/introducing-metadata-service-authentication#configuring-metadata-service-authentication"},"Configure authentication in DataHub's backend"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authentication/changing-default-credentials#quickstart"},"Change the default user datahub in quickstart"))),(0,n.kt)("h3",{id:"move-to-production"},"Move To Production"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Quickstart is not intended for a production environment. We recommend deploying DataHub to production using Kubernetes.\nWe provide helpful ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/datahub/datahub"},"Helm Charts")," to help you quickly get up and running.\nCheck out ",(0,n.kt)("a",{parentName:"p",href:"/docs/deploy/kubernetes"},"Deploying DataHub to Kubernetes")," for a step-by-step walkthrough.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart")," method of running DataHub is intended for local development and a quick way to experience the features that DataHub has to offer.\nIt is not intended for a production environment. This recommendation is based on the following points."),(0,n.kt)("h4",{id:"default-credentials"},"Default Credentials"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"quickstart")," uses docker compose configuration which includes default credentials for both DataHub, and it's underlying\nprerequisite data stores, such as MySQL. Additionally, other components are unauthenticated out of the box. This is a\ndesign choice to make development easier and is not best practice for a production environment."),(0,n.kt)("h4",{id:"exposed-ports"},"Exposed Ports"),(0,n.kt)("p",null,"DataHub's services, and it's backend data stores use the docker default behavior of binding to all interface addresses.\nThis makes it useful for development but is not recommended in a production environment."),(0,n.kt)("h4",{id:"performance--management"},"Performance & Management"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"quickstart")," is limited by the resources available on a single host, there is no ability to scale horizontally.\nRollout of new versions often requires downtime and the configuration is largely pre-determined and not easily managed.\nLastly, by default, ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart")," follows the most recent builds forcing updates to the latest released and unreleased builds."))}b.isMDXComponent=!0}}]);