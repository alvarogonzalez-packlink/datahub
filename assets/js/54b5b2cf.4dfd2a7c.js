"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18812],{45110:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var s=a(67294),o=a(39962),n=a(24627),i=a(86010),r=a(97325);const l={searchForm:"searchForm_VHOb",searchIcon:"searchIcon_jr7s",filterIcon:"filterIcon_eGlH",filterIconDark:"filterIconDark_fGjU",closeIcon:"closeIcon_UCad",searchQueryInput:"searchQueryInput_o9QR",searchVersionInput:"searchVersionInput_FsG9"};var c=a(71944),g=a(6226),d=a(29789),u=a(3787);const m=function(e){let{filterState:t,setFilterState:a,filterOptions:o}=e;function n(e){let{filterState:t,setFilterState:a,filter:o,filterOptions:n}=e;const i=[...n[o]],[r,l]=(0,s.useState)([]),m=[];i.forEach((e=>{t.includes(e)||m.push({label:e,value:e})}));const p=e=>{t.includes(e)?a(t.filter((t=>t!==e))):a([...t,e])},f=e=>{e.forEach((e=>{p(e)})),t.filter((e=>i.includes(e))).forEach((t=>{e.includes(t)||p(t)}))};let h=s.createElement("div",null);return h=i.length<=2?s.createElement(c.Z,{style:{width:"auto",display:"flex",flex:"1 1 auto",flexDirection:"row",justifyContent:"space-between"}},s.createElement(g.Z,{style:{marginRight:"10px"}},o),s.createElement(g.Z,{style:{width:"55%",display:"flex",justifyContent:"start"}},i.length>0&&i.map((e=>s.createElement(d.Z,{key:e,onChange:t=>{p(e)},checked:t.includes(e)},e))))):s.createElement(c.Z,{style:{width:"auto",display:"flex",flex:"1 1 auto",flexDirection:"row",justifyContent:"space-between"}},s.createElement(g.Z,null,o),s.createElement(u.Z,{mode:"multiple",allowClear:!0,value:t.filter((e=>i.includes(e))),bordered:!0,style:{width:"55%",marginLeft:"10px"},placeholder:"Select",onChange:f,options:m})),s.createElement(c.Z,{style:{display:"flex",justifyContent:"center",width:"auto",flex:"1 1 auto",marginTop:"16px"}},h)}const i=Object.keys(o);return i.length>1&&i.length,s.createElement("div",{style:{display:"flex",justifyContent:"center",width:"auto",flexDirection:"column"}},i.sort(((e,t)=>o[e].size-o[t].size)).map((e=>s.createElement(n,{filterState:t,setFilterState:a,filterOptions:o,filter:e,key:e}))))};var p=a(99982),f=a(8913),h=a(72164),P=a(72269),y=a(97029),T=a(98850);const v=function(e){let{textState:t,setTextState:a,filterState:o,setFilterState:n,filterOptions:c,allowExclusivity:g,setIsExclusive:d}=e;const[u,v]=(0,s.useState)(!1),[b,S]=(0,s.useState)([]),[D,I]=(0,s.useState)(!1);function C(){v(!u)}return s.createElement("div",null,s.createElement("div",{className:"DocSearch row"},s.createElement("div",{className:"col col--offset-3 col--6"},s.createElement("form",{onSubmit:e=>e.preventDefault(),className:l.searchForm},s.createElement("input",{type:"text",name:"q",className:l.searchQueryInput,placeholder:(0,r.I)({id:"theme.SearchPage.inputPlaceholder",message:"Filter Integrations",description:"The placeholder for search page input"}),"aria-label":(0,r.I)({id:"theme.SearchPage.inputLabel",message:"Filter",description:"The ARIA label for search page input"}),onChange:e=>a(e.target.value),value:t,autoComplete:"off",autoFocus:!0}),s.createElement("svg",{width:"20",height:"20",className:(0,i.Z)("DocSearch-Search-Icon",l.searchIcon),viewBox:"0 0 20 20"},s.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})),s.createElement(p.Z,{className:u||o.length>0?(0,i.Z)("DocSearch-Filter-Icon",l.filterIcon):(0,i.Z)("DocSearch-Filter-Icon",l.filterIconDark),onClick:C,fill:u?"blue":"var(--docsearch-muted-color)"})),u&&s.createElement(h.Z,{style:{display:"flex",width:"auto",boxSizing:"border-box",boxShadow:"5px 8px 24px 5px rgba(208, 216, 243, 0.6)"},bodyStyle:{display:"flex",justifyContent:"center",width:"100%",flexDirection:"column",padding:"1rem"}},s.createElement(f.Z,{onClick:C,className:(0,i.Z)("DocSearch-Close-Icon",l.closeIcon)})," ",s.createElement(m,{filterState:b,setFilterState:S,filterOptions:c}),s.createElement("div",{style:{display:"flex",width:"100%",justifyContent:g?"space-between":"flex-end",paddingTop:"1rem"}},g&&s.createElement("div",null,s.createElement(P.Z,{onChange:function(){I(!D)},checked:D})," ",D?"Matches all tags ":"Matches any tags "),s.createElement("div",null,s.createElement(y.ZP,{onClick:function(){S([]),n([]),d(!1),I(!1)},className:(0,i.Z)("DocSearch-Reset-Button",l.resetButton),style:{marginRight:"1rem"}},"Reset"),s.createElement(y.ZP,{onClick:function(){n(b),v(!1),d(D)},type:"primary",className:(0,i.Z)("DocSearch-Filter-Button",l.filterButton)},"Search")))),!u&&b.length>0&&s.createElement("div",null,o.map(((e,t)=>s.createElement(T.Z,{closable:!0,onClose:()=>function(e){S(b.filter((t=>t!==e))),n(o.filter((t=>t!==e)))}(e),value:e,key:e+t},e)))))))};var b=a(87462),S=a(79524),D=a(83699);const I="featureCol_lJBQ",C="feature_p7qz",k="featureHeader_xBPK",w="featureImage_UJPg",F=e=>{let{image:t,title:a,description:o,to:n,filters:r,tags:l,useTags:c,useFilters:g,filterState:d}=e;return s.createElement("div",{className:(0,i.Z)("col col--4",I)},s.createElement(D.Z,{to:(0,S.Z)(n),className:(0,i.Z)("card",C)},s.createElement("div",{className:(0,i.Z)("card__header",k)},t&&s.createElement("div",{className:w},s.createElement("img",{src:(0,S.Z)(t)})),s.createElement("h2",null,a)),s.createElement("hr",null),s.createElement("div",{className:"card__body"},s.createElement("div",null,o)),(c||g)&&s.createElement("div",{className:"card__footer"},c&&s.createElement("div",{style:{display:"flex",flex:"0 0 auto",height:"auto",width:"auto",flexDirection:"row",flexWrap:"wrap",alignItems:"start",fontSize:"0.65rem"}},l.filter((e=>d.includes(e))).map(((e,t)=>s.createElement(T.Z,{key:e+t,value:e,style:{marginTop:0,marginBottom:".15rem",marginLeft:".15rem",marginRight:0,fontSize:"0.65rem"}},e.trim())))),g&&function(){const e=Object.keys(r);return s.createElement("div",{style:{display:"flex",flex:"0 0 auto",height:"auto",width:"auto",flexDirection:"column",justifyContent:"end",alignItems:"start",fontSize:"0.65rem"}},e.map((e=>{if(""!==r[e])return s.createElement("div",{key:e,style:{display:"flex",flex:"0 0 auto",flexWrap:"wrap",flexDirection:"row"}}," ",e+": ",r[e].split(",").map(((e,t)=>s.createElement(T.Z,{key:e+t,value:e,style:{marginTop:0,marginBottom:".15rem",marginLeft:".15rem",marginRight:0,fontSize:"0.65rem"}},e))))})))}())))},E=e=>{let{content:t,filterBar:a}=e;return t?.length>0?s.createElement("div",{style:{padding:"2vh 0"}},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},t.map(((e,t)=>s.createElement(F,(0,b.Z)({key:t},e))))))):null};function A(e,t,a,o,i,r,l){void 0===i&&(i=!1),void 0===r&&(r=!1),void 0===l&&(l=!1);const[c,g]=s.useState(""),[d,u]=s.useState([]),[m,p]=s.useState(!1);let f={};t.forEach((e=>{const t=e.tags;Object.keys(t).map((e=>{void 0===f[e]&&(f[e]=new Set),t[e].split(",").forEach((t=>{" "!==t&&""!==t&&f[e].add(t.trim())}))}))}));const h=Object.keys(f);function P(e){if(null==e)return;const a=t.find((t=>{if(t.Path===e)return t})).tags;let s=[];return void 0===a||h.map((e=>{void 0!==a[e]&&null!==a[e]&&a[e].split(",").forEach((e=>{" "!==e&&""!==e&&s.push(e.trim())}))})),s}const y=t.map((e=>({title:e.Title,image:e.imgPath,description:e.Description,tags:P(e.Path),filters:e.tags,to:e.Path,useFilters:l,useTags:r,filterState:d}))).filter((e=>{if(""===c&&0===d.length)return!0;if(d.length>0){let t=m;return d.forEach((a=>{t=!m&&(t||e.tags.includes(a))||m&&t&&e.tags.includes(a)})),t}return e.title.toLowerCase().includes(c.toLowerCase())||e.description.toLowerCase().includes(c.toLowerCase())}));return s.createElement(n.Z,{title:e.tagline,description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems."},s.createElement("header",{className:"hero"},s.createElement("div",{className:"container"},s.createElement("div",{className:"hero__content"},s.createElement("div",null,s.createElement("h1",{className:"hero__title"},a),s.createElement("p",{className:"hero__subtitle"},o),s.createElement(v,{textState:c,setTextState:g,filterState:d,setFilterState:u,filterOptions:f,allowExclusivity:i,setIsExclusive:p}))))),s.createElement(E,{content:y,filterBar:s.createElement(v,null)}),s.createElement("br",null),s.createElement("br",null))}const x=a(40302).ingestionSources;const L=function(){const e=(0,o.Z)(),{siteConfig:t={}}=e;return A(t,x,"DataHub Integrations","Services that integrate with DataHub",!1,!0)}},40302:e=>{e.exports=JSON.parse('{"ingestionSources":[{"Path":"docs/lineage/airflow","imgPath":"img/logos/platforms/airflow.svg","Title":"Airflow","Description":"Airflow is an open-source data orchestration tool used for scheduling, monitoring, and managing complex data pipelines.","tags":{"Platform Type":"Orchestrator","Connection Type":"Push","Features":"Stateful Ingestion"}},{"Path":"docs/generated/ingestion/sources/athena","imgPath":"img/logos/platforms/athena.svg","Title":"Athena","Description":"Athena is a serverless interactive query service that enables users to analyze data in Amazon S3 using standard SQL.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Column Level Lineage, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/azure-ad","imgPath":"img/logos/platforms/azure-ad.png","Title":"Azure AD","Description":"Azure AD is a cloud-based identity and access management tool that provides secure authentication and authorization for users and applications.","tags":{"Platform Type":"Identity Provider","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/bigquery","imgPath":"img/logos/platforms/bigquery.svg","Title":"BigQuery","Description":"BigQuery is a cloud-based data warehousing and analytics tool that allows users to store, query, and analyze large datasets quickly and efficiently.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Patch Lineage, UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/business-glossary","imgPath":"img/datahub-logo-color-mark.svg","Title":"Business Glossary","Description":"A source provided by DataHub for ingesting glossary metadata that provides a comprehensive list of business terms and definitions used within an organization.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/clickhouse","imgPath":"img/logos/platforms/clickhouse.svg","Title":"ClickHouse","Description":"ClickHouse is an open-source column-oriented database management system designed for high-performance data processing and analytics.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/csv","imgPath":"img/datahub-logo-color-mark.svg","Title":"CSV","Description":"An ingestion source for enriching metadata provided in CSV format provided by DataHub","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/databricks","imgPath":"img/logos/platforms/databricks.png","Title":"Databricks","Description":"Databricks is a cloud-based data processing and analytics platform that enables data scientists and engineers to collaborate and build data-driven applications.","tags":{"Platform Type":"ETL and Processing","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage, UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/datahub","imgPath":"img/acryl-logo-light-mark.png","Title":"DataHub","Description":"Integrate your open source DataHub instance with Acryl Cloud or other on-prem DataHub instances","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":"Stateful Ingestion"}},{"Path":"docs/generated/ingestion/sources/dbt","imgPath":"img/logos/platforms/dbt.svg","Title":"dbt","Description":"dbt is a data transformation tool that enables analysts and engineers to transform data in their warehouses through a modular, SQL-based approach.","tags":{"Platform Type":"ETL and Processing","Connection Type":"Pull","Features":"Stateful Ingestion, Patch Lineage,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/delta-lake","imgPath":"img/logos/platforms/deltalake.svg","Title":"Delta Lake","Description":"Delta Lake is an open-source data lake storage layer that provides ACID transactions, schema enforcement, and data versioning for big data workloads.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/demo-data","imgPath":"img/datahub-logo-color-mark.svg","Title":"Demo Data","Description":"Demo Data is a data tool that provides sample data sets for demonstration and testing purposes.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/druid","imgPath":"img/logos/platforms/druid.svg","Title":"Druid","Description":"Druid is an open-source data store designed for real-time analytics on large datasets.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/elasticsearch","imgPath":"img/logos/platforms/elasticsearch.svg","Title":"Elasticsearch","Description":"Elasticsearch is a distributed, open-source search and analytics engine designed for handling large volumes of data.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/feast","imgPath":"img/logos/platforms/feast.svg","Title":"Feast","Description":"Feast is an open-source feature store that enables teams to manage, store, and discover features for machine learning applications.","tags":{"Platform Type":"AI+ML","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/file","imgPath":"img/datahub-logo-color-mark.svg","Title":"File","Description":"An ingestion source for single files provided by DataHub","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/file-based-lineage","imgPath":"img/datahub-logo-color-mark.svg","Title":"File Based Lineage","Description":"File Based Lineage is a data tool that tracks the lineage of data files and their dependencies.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/glue","imgPath":"img/logos/platforms/glue.svg","Title":"Glue","Description":"Glue is a data integration service that allows users to extract, transform, and load data from various sources into a data warehouse.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/metadata-ingestion/integration_docs/great-expectations","imgPath":"img/logos/platforms/great-expectations.png","Title":"Great Expectations","Description":"Great Expectations is an open-source data validation and testing tool that helps data teams maintain data quality and integrity.","tags":{"Platform Type":"Observability","Connection Type":"Push","Features":""}},{"Path":"docs/generated/ingestion/sources/hive","imgPath":"img/logos/platforms/hive.svg","Title":"Hive","Description":"Hive is a data warehousing tool that facilitates querying and managing large datasets stored in Hadoop Distributed File System (HDFS).","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/iceberg","imgPath":"img/logos/platforms/iceberg.png","Title":"Iceberg","Description":"Iceberg is a data tool that allows users to manage and query large-scale data sets using a distributed architecture.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/json-schema","imgPath":"img/datahub-logo-color-mark.svg","Title":"JSON Schemas","Description":"JSON Schemas is a data tool used to define the structure, format, and validation rules for JSON data.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/kafka","imgPath":"img/logos/platforms/kafka.svg","Title":"Kafka","Description":"Kafka is a distributed streaming platform that allows for the processing and storage of large amounts of data in real-time.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/kafka-connect","imgPath":"img/logos/platforms/kafka.svg","Title":"Kafka Connect","Description":"Kafka Connect is an open-source data integration tool that enables the transfer of data between Apache Kafka and other data systems.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Lower Casing"}},{"Path":"docs/generated/ingestion/sources/ldap","imgPath":"img/datahub-logo-color-mark.svg","Title":"LDAP","Description":"LDAP (Lightweight Directory Access Protocol) is a data tool used for accessing and managing distributed directory information services over an IP network.","tags":{"Platform Type":"Identity Provider","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/looker","imgPath":"img/logos/platforms/looker.svg","Title":"Looker","Description":"Looker is a business intelligence and data analytics platform that allows users to explore, analyze, and share data insights in real-time.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage,  UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/mariadb","imgPath":"img/logos/platforms/mariadb.png","Title":"MariaDB","Description":"MariaDB is an open-source relational database management system that is a fork of MySQL.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/metabase","imgPath":"img/logos/platforms/metabase.svg","Title":"Metabase","Description":"Metabase is an open-source business intelligence and data visualization tool that allows users to easily query and visualize their data.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/mssql","imgPath":"img/logos/platforms/mssql.svg","Title":"Microsoft SQL Server","Description":"Microsoft SQL Server is a relational database management system designed to store, manage, and retrieve data efficiently and securely.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/mode","imgPath":"img/logos/platforms/mode.png","Title":"Mode","Description":"Mode is a cloud-based data analysis and visualization platform that enables businesses to explore, analyze, and share data in a collaborative environment.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/mongodb","imgPath":"img/logos/platforms/mongodb.svg","Title":"MongoDB","Description":"MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to store and retrieve data for modern applications.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/mysql","imgPath":"img/logos/platforms/mysql.svg","Title":"MySQL","Description":"MySQL is an open-source relational database management system that allows users to store, organize, and retrieve data efficiently.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/nifi","imgPath":"img/logos/platforms/nifi.svg","Title":"NiFi","Description":"NiFi is a data integration tool that allows users to automate the flow of data between systems and applications.","tags":{"Platform Type":"Orchestrator","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/okta","imgPath":"img/logos/platforms/okta.png","Title":"Okta","Description":"Okta is a cloud-based identity and access management tool that enables secure and seamless access to applications and data across multiple devices and platforms.","tags":{"Platform Type":"Identity Provider","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/openapi","imgPath":"img/logos/platforms/openapi.png","Title":"OpenAPI","Description":"OpenAPI is a specification for building and documenting RESTful APIs.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/oracle","imgPath":"img/logos/platforms/oracle.svg","Title":"Oracle","Description":"Oracle is a relational database management system that provides a comprehensive and integrated platform for managing and analyzing large amounts of data.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/postgres","imgPath":"img/logos/platforms/postgres.svg","Title":"Postgres","Description":"Postgres is an open-source relational database management system that provides a powerful tool for storing, managing, and analyzing large amounts of data.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/powerbi","imgPath":"img/logos/platforms/powerbi.png","Title":"PowerBI","Description":"PowerBI is a business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/presto","imgPath":"img/logos/platforms/presto.svg","Title":"Presto","Description":"Presto is an open-source distributed SQL query engine designed for fast and interactive analytics on large-scale data sets.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/presto-on-hive","imgPath":"img/logos/platforms/presto.svg","Title":"Presto on Hive","Description":"Presto on Hive is a data tool that allows users to query and analyze large datasets stored in Hive using SQL-like syntax.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/metadata-integration/java/datahub-protobuf","imgPath":"img/logos/platforms/protobuf.png","Title":"Protobuf Schemas","Description":"Protobuf Schemas is a data tool used for defining and serializing structured data in a compact and efficient manner.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/pulsar","imgPath":"img/logos/platforms/pulsar.png","Title":"Pulsar","Description":"Pulsar is a real-time data processing and messaging platform that enables high-performance data streaming and processing.","tags":{"Platform Type":"Metadata","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/redash","imgPath":"img/logos/platforms/redash.svg","Title":"Redash","Description":"Redash is a data visualization and collaboration platform that allows users to connect and query multiple data sources and create interactive dashboards and visualizations.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/redshift","imgPath":"img/logos/platforms/redshift.svg","Title":"Redshift","Description":"Redshift is a cloud-based data warehousing tool that allows users to store and analyze large amounts of data in a scalable and cost-effective manner.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/s3","imgPath":"img/logos/platforms/s3.svg","Title":"S3 Data Lake","Description":"S3 Data Lake is a cloud-based data storage and management tool that allows users to store, manage, and analyze large amounts of data in a scalable and cost-effective manner.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/sagemaker","imgPath":"img/logos/platforms/sagemaker.svg","Title":"SageMaker","Description":"SageMaker is a data tool that provides a fully-managed platform for building, training, and deploying machine learning models at scale.","tags":{"Platform Type":"AI+ML","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/salesforce","imgPath":"img/logos/platforms/salesforce.png","Title":"Salesforce","Description":"Salesforce is a cloud-based customer relationship management (CRM) platform that helps businesses manage their sales, marketing, and customer service activities.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/hana","imgPath":"img/logos/platforms/hana.svg","Title":"SAP HANA","Description":"SAP HANA is an in-memory data platform that enables businesses to process large volumes of data in real-time.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/actions/actions/slack","imgPath":"img/logos/companies/slack.svg","Title":"Slack","Description":"Send notifications to Slack channels on updates to entities in DataHub.","tags":{"Platform Type":"Messaging","Connection Type":"Push","Features":"Notifications, Alerting"}},{"Path":"docs/generated/ingestion/sources/snowflake","imgPath":"img/logos/platforms/snowflake.svg","Title":"Snowflake","Description":"Snowflake is a cloud-based data warehousing platform that allows users to store, manage, and analyze large amounts of structured and semi-structured data.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage, Patch Lineage,  UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/metadata-integration/java/spark-lineage","imgPath":"img/logos/platforms/spark.svg","Title":"Spark","Description":"Spark is a data processing tool that enables fast and efficient processing of large-scale data sets using distributed computing.","tags":{"Platform Type":"Datastore","Connection Type":"Push","Features":""}},{"Path":"docs/generated/ingestion/sources/sqlalchemy","imgPath":"img/logos/platforms/sqlalchemy.png","Title":"SQLAlchemy","Description":"SQLAlchemy is a Python-based data tool that provides a set of high-level API for connecting to relational databases and performing SQL operations.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/superset","imgPath":"img/logos/platforms/superset.svg","Title":"Superset","Description":"Superset is an open-source data exploration and visualization platform that allows users to create interactive dashboards and perform ad-hoc analysis on various data sources.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/tableau","imgPath":"img/logos/platforms/tableau.png","Title":"Tableau","Description":"Tableau is a data visualization and business intelligence tool that helps users analyze and present data in a visually appealing and interactive way.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/actions/actions/teams","imgPath":"img/logos/companies/microsoft-teams.svg","Title":"Microsoft Teams","Description":"Send notifications to Teams channels on updates to entities in DataHub.","tags":{"Platform Type":"Messaging","Connection Type":"Push","Features":"Notifications, Alerting"}},{"Path":"docs/generated/ingestion/sources/teradata","imgPath":"img/logos/platforms/teradata.svg","Title":"Teradata","Description":"Teradata is a data warehousing and analytics tool that allows users to store, manage, and analyze large amounts of data in a scalable and cost-effective manner.","tags":{"Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage, UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/trino","imgPath":"img/logos/platforms/trino.png","Title":"Trino","Description":"Trino is an open-source distributed SQL query engine designed to query large-scale data processing systems, including Hadoop, Cassandra, and relational databases.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/vertica","imgPath":"img/logos/platforms/vertica.svg","Title":"Vertica","Description":"Vertica is a high-performance, column-oriented, relational database management system designed for large-scale data warehousing and analytics.","tags":{"Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}}]}')}}]);