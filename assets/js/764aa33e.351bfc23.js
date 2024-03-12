"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return r?a.createElement(f,n(n({ref:t},u),{},{components:r})):a.createElement(f,n({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});r(67294);var a=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Running Airflow locally with DataHub",slug:"/docker/airflow/local_airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/airflow/local_airflow.md"},s=void 0,c={unversionedId:"docker/airflow/local_airflow",id:"docker/airflow/local_airflow",title:"Running Airflow locally with DataHub",description:"This guide is currently unmaintained. As of 0.10.0 the container described is not published alongside the DataHub CLI. If you'd like to use it, please reach out to us on the community slack.",source:"@site/genDocs/docker/airflow/local_airflow.md",sourceDirName:"docker/airflow",slug:"/docker/airflow/local_airflow",permalink:"/docs/next/docker/airflow/local_airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docker/airflow/local_airflow.md",tags:[],version:"current",frontMatter:{title:"Running Airflow locally with DataHub",slug:"/docker/airflow/local_airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/airflow/local_airflow.md"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up your Airflow area",id:"step-1-set-up-your-airflow-area",level:2},{value:"What is different between this docker-compose file and the official Apache Airflow docker compose file?",id:"what-is-different-between-this-docker-compose-file-and-the-official-apache-airflow-docker-compose-file",level:3},{value:"Step 2: Bring up Airflow",id:"step-2-bring-up-airflow",level:2},{value:"Step 3: Register DataHub connection (hook) to Airflow",id:"step-3-register-datahub-connection-hook-to-airflow",level:2},{value:"Result",id:"result",level:3},{value:"What is the above command doing?",id:"what-is-the-above-command-doing",level:3},{value:"Step 4: Find the DAGs and run it",id:"step-4-find-the-dags-and-run-it",level:2},{value:"TroubleShooting",id:"troubleshooting",level:2}],p={toc:d},h="wrapper";function f(e){var{components:t}=e,r=n(e,["components"]);return(0,a.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){o(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This guide is currently unmaintained. As of 0.10.0 the container described is not published alongside the DataHub CLI. If you'd like to use it, please reach out to us on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/slack"},"community slack."))),(0,a.kt)("h1",{id:"running-airflow-locally-with-datahub"},"Running Airflow locally with DataHub"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This document describes how you can run Airflow side-by-side with DataHub's quickstart docker images to test out Airflow lineage with DataHub.\nThis offers a much easier way to try out Airflow with DataHub, compared to configuring containers by hand, setting up configurations and networking connectivity between the two systems."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker: ensure that you have a working Docker installation and you have at least 8GB of memory to allocate to both Airflow and DataHub combined.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker info | grep Memory\n\n> Total Memory: 7.775GiB\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Quickstart: Ensure that you followed ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/quickstart"},"quickstart")," to get DataHub up and running.")),(0,a.kt)("h2",{id:"step-1-set-up-your-airflow-area"},"Step 1: Set up your Airflow area"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an area to host your airflow installation"),(0,a.kt)("li",{parentName:"ul"},"Download the docker-compose file hosted in DataHub's repo in that directory"),(0,a.kt)("li",{parentName:"ul"},"Download a sample dag to use for testing Airflow lineage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir -p airflow_install\ncd airflow_install\n# Download docker-compose file\ncurl -L 'https://raw.githubusercontent.com/datahub-project/datahub/master/docker/airflow/docker-compose.yaml' -o docker-compose.yaml\n# Create dags directory\nmkdir -p dags\n# Download a sample DAG\ncurl -L 'https://raw.githubusercontent.com/datahub-project/datahub/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_demo.py' -o dags/lineage_backend_demo.py\n")),(0,a.kt)("h3",{id:"what-is-different-between-this-docker-compose-file-and-the-official-apache-airflow-docker-compose-file"},"What is different between this docker-compose file and the official Apache Airflow docker compose file?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This docker-compose file is derived from the ",(0,a.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/start/docker.html#docker-compose-yaml"},"official Airflow docker-compose file")," but makes a few critical changes to make interoperability with DataHub seamless."),(0,a.kt)("li",{parentName:"ul"},"The Airflow image in this docker compose file extends the ",(0,a.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/docker-stack/index.html"},"base Apache Airflow docker image")," and is published ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/airflow-datahub"},"here"),". It includes the latest ",(0,a.kt)("inlineCode",{parentName:"li"},"acryl-datahub")," pip package installed by default so you don't need to install it yourself."),(0,a.kt)("li",{parentName:"ul"},"This docker-compose file sets up the networking so that",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the Airflow containers can talk to the DataHub containers through the ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub_network")," bridge interface."),(0,a.kt)("li",{parentName:"ul"},"Modifies the port-forwarding to map the Airflow Webserver port ",(0,a.kt)("inlineCode",{parentName:"li"},"8080")," to port ",(0,a.kt)("inlineCode",{parentName:"li"},"58080")," on the localhost (to avoid conflicts with DataHub metadata-service, which is mapped to 8080 by default)"))),(0,a.kt)("li",{parentName:"ul"},"This docker-compose file also sets up the ENV variables to configure Airflow's Lineage Backend to talk to DataHub. (Look for the ",(0,a.kt)("inlineCode",{parentName:"li"},"AIRFLOW__LINEAGE__BACKEND")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AIRFLOW__LINEAGE__DATAHUB_KWARGS")," variables)")),(0,a.kt)("h2",{id:"step-2-bring-up-airflow"},"Step 2: Bring up Airflow"),(0,a.kt)("p",null,"First you need to initialize airflow in order to create initial database tables and the initial airflow user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up airflow-init\n")),(0,a.kt)("p",null,"You should see the following final initialization message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"airflow-init_1       | Admin user airflow created\nairflow-init_1       | 2.1.3\nairflow_install_airflow-init_1 exited with code 0\n\n")),(0,a.kt)("p",null,"Afterwards you need to start the airflow docker compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up\n")),(0,a.kt)("p",null,"You should see a host of messages as Airflow starts up."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Container airflow_deploy_airflow-scheduler_1  Started                                                                               15.7s\nAttaching to airflow-init_1, airflow-scheduler_1, airflow-webserver_1, airflow-worker_1, flower_1, postgres_1, redis_1\nairflow-worker_1     | BACKEND=redis\nairflow-worker_1     | DB_HOST=redis\nairflow-worker_1     | DB_PORT=6379\nairflow-worker_1     |\nairflow-webserver_1  |\nairflow-init_1       | DB: postgresql+psycopg2://airflow:***@postgres/airflow\nairflow-init_1       | [2021-08-31 20:02:07,534] {db.py:702} INFO - Creating tables\nairflow-init_1       | INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.\nairflow-init_1       | INFO  [alembic.runtime.migration] Will assume transactional DDL.\nairflow-scheduler_1  |   ____________       _____________\nairflow-scheduler_1  |  ____    |__( )_________  __/__  /________      __\nairflow-scheduler_1  | ____  /| |_  /__  ___/_  /_ __  /_  __ \\_ | /| / /\nairflow-scheduler_1  | ___  ___ |  / _  /   _  __/ _  / / /_/ /_ |/ |/ /\nairflow-scheduler_1  |  _/_/  |_/_/  /_/    /_/    /_/  \\____/____/|__/\nairflow-scheduler_1  | [2021-08-31 20:02:07,736] {scheduler_job.py:661} INFO - Starting the scheduler\nairflow-scheduler_1  | [2021-08-31 20:02:07,736] {scheduler_job.py:666} INFO - Processing each file at most -1 times\nairflow-scheduler_1  | [2021-08-31 20:02:07,915] {manager.py:254} INFO - Launched DagFileProcessorManager with pid: 25\nairflow-scheduler_1  | [2021-08-31 20:02:07,918] {scheduler_job.py:1197} INFO - Resetting orphaned tasks for active dag runs\nairflow-scheduler_1  | [2021-08-31 20:02:07,923] {settings.py:51} INFO - Configured default timezone Timezone('UTC')\nflower_1             |\nairflow-worker_1     |  * Serving Flask app \"airflow.utils.serve_logs\" (lazy loading)\nairflow-worker_1     |  * Environment: production\nairflow-worker_1     |    WARNING: This is a development server. Do not use it in a production deployment.\nairflow-worker_1     |    Use a production WSGI server instead.\nairflow-worker_1     |  * Debug mode: off\nairflow-worker_1     | [2021-08-31 20:02:09,283] {_internal.py:113} INFO -  * Running on http://0.0.0.0:8793/ (Press CTRL+C to quit)\nflower_1             | BACKEND=redis\nflower_1             | DB_HOST=redis\nflower_1             | DB_PORT=6379\nflower_1             |\n")),(0,a.kt)("p",null,"Finally, Airflow should be healthy and up on port 58080. Navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:58080"},"http://localhost:58080")," to confirm and find your Airflow webserver.\nThe default username and password is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"airflow:airflow\n")),(0,a.kt)("h2",{id:"step-3-register-datahub-connection-hook-to-airflow"},"Step 3: Register DataHub connection (hook) to Airflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it `docker ps | grep webserver | cut -d \" \" -f 1` airflow connections add --conn-type 'datahub_rest' 'datahub_rest_default' --conn-host 'http://datahub-gms:8080'\n")),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Successfully added `conn_id`=datahub_rest_default : datahub_rest://:@http://datahub-gms:8080:\n")),(0,a.kt)("h3",{id:"what-is-the-above-command-doing"},"What is the above command doing?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find the container running airflow webserver: ",(0,a.kt)("inlineCode",{parentName:"li"},'docker ps | grep webserver | cut -d " " -f 1')),(0,a.kt)("li",{parentName:"ul"},"Running the ",(0,a.kt)("inlineCode",{parentName:"li"},"airflow connections add ...")," command inside that container to register the ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub_rest")," connection type and connect it to the ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub-gms")," host on port 8080."),(0,a.kt)("li",{parentName:"ul"},"Note: This is what requires Airflow to be able to connect to ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub-gms")," the host (this is the container running datahub-gms image) and this is why we needed to connect the Airflow containers to the ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub_network")," using our custom docker-compose file.")),(0,a.kt)("h2",{id:"step-4-find-the-dags-and-run-it"},"Step 4: Find the DAGs and run it"),(0,a.kt)("p",null,"Navigate the Airflow UI to find the sample Airflow dag we just brought in"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/find_the_dag.png"})),(0,a.kt)("p",null,"By default, Airflow loads all DAG-s in paused status. Unpause the sample DAG to use it."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/paused_dag.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/unpaused_dag.png"})),(0,a.kt)("p",null,"Then trigger the DAG to run."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/trigger_dag.png"})),(0,a.kt)("p",null,"After the DAG runs successfully, go over to your DataHub instance to see the Pipeline and navigate its lineage."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/datahub_pipeline_view.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/datahub_pipeline_entity.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/datahub_task_view.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/datahub_lineage_view.png"})),(0,a.kt)("h2",{id:"troubleshooting"},"TroubleShooting"),(0,a.kt)("p",null,"Most issues are related to connectivity between Airflow and DataHub."),(0,a.kt)("p",null,"Here is how you can debug them."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/finding_failed_log.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/connection_error.png"})),(0,a.kt)("p",null,"In this case, clearly the connection ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-rest")," has not been registered. Looks like we forgot to register the connection with Airflow!\nLet's execute Step 4 to register the datahub connection with Airflow."),(0,a.kt)("p",null,"In case the connection was registered successfully but you are still seeing ",(0,a.kt)("inlineCode",{parentName:"p"},"Failed to establish a new connection"),", check if the connection is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://datahub-gms:8080")," and not ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,a.kt)("p",null,"After re-running the DAG, we see success!"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/airflow/successful_run.png"})))}f.isMDXComponent=!0}}]);