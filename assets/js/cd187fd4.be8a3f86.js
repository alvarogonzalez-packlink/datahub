"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"No Code Metadata",slug:"/advanced/no-code-modeling",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/no-code-modeling.md"},r="No Code Metadata",l={unversionedId:"docs/advanced/no-code-modeling",id:"version-0.12.1/docs/advanced/no-code-modeling",title:"No Code Metadata",description:"Summary of changes",source:"@site/versioned_docs/version-0.12.1/docs/advanced/no-code-modeling.md",sourceDirName:"docs/advanced",slug:"/advanced/no-code-modeling",permalink:"/docs/0.12.1/advanced/no-code-modeling",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/no-code-modeling.md",tags:[],version:"0.12.1",frontMatter:{title:"No Code Metadata",slug:"/advanced/no-code-modeling",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/no-code-modeling.md"},sidebar:"overviewSidebar",previous:{title:"Upgrade Docker Image",permalink:"/docs/0.12.1/docker/datahub-upgrade"},next:{title:"React Analytics",permalink:"/docs/0.12.1/datahub-web-react/src/app/analytics"}},s={},p=[{value:"Summary of changes",id:"summary-of-changes",level:2},{value:"Engineering Spec",id:"engineering-spec",level:2},{value:"Primary Goal",id:"primary-goal",level:3},{value:"Secondary Goal",id:"secondary-goal",level:3},{value:"Must-Haves",id:"must-haves",level:3},{value:"Nice-to-haves",id:"nice-to-haves",level:2},{value:"What Success Looks Like",id:"what-success-looks-like",level:2},{value:"Design",id:"design",level:2},{value:"State of the World",id:"state-of-the-world",level:2},{value:"Modeling",id:"modeling",level:3},{value:"Proposed Solution",id:"proposed-solution",level:2},{value:"How will we do it?",id:"how-will-we-do-it",level:3},{value:"Final Developer Experience: Defining an Entity",id:"final-developer-experience-defining-an-entity",level:3},{value:"Step 1. Add aspects",id:"step-1-add-aspects",level:4},{value:"Step 2. Add aspect union.",id:"step-2-add-aspect-union",level:4},{value:"Step 3. Add Snapshot model.",id:"step-3-add-snapshot-model",level:4},{value:"Step 4. Update Snapshot union.",id:"step-4-update-snapshot-union",level:4},{value:"Interacting with New Entity",id:"interacting-with-new-entity",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"no-code-metadata"},"No Code Metadata"),(0,i.kt)("h2",{id:"summary-of-changes"},"Summary of changes"),(0,i.kt)("p",null,"As part of the No Code Metadata Modeling initiative, we've made radical changes to the DataHub stack. "),(0,i.kt)("p",null,"Specifically, we've "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decoupled the persistence layer from Java + Rest.li specific concepts "),(0,i.kt)("li",{parentName:"ul"},"Consolidated the per-entity Rest.li resources into a single general-purpose Entity Resource"),(0,i.kt)("li",{parentName:"ul"},"Consolidated the per-entity Graph Index Writers + Readers into a single general-purpose Neo4J DAO "),(0,i.kt)("li",{parentName:"ul"},"Consolidated the per-entity Search Index Writers + Readers into a single general-purpose ES DAO. "),(0,i.kt)("li",{parentName:"ul"},"Developed mechanisms for declaring search indexing configurations + foreign key relationships as annotations\non PDL models themselves."),(0,i.kt)("li",{parentName:"ul"},'Introduced a special "Browse Paths" aspect that allows the browse configuration to be\npushed into DataHub, as opposed to computed in a blackbox lambda sitting within DataHub'),(0,i.kt)("li",{parentName:"ul"},'Introduced special "Key" aspects for conveniently representing the information that identifies a DataHub entities via\na normal struct.'),(0,i.kt)("li",{parentName:"ul"},"Removed the need for hand-written Elastic ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mappings.json"),". (Now generated at runtime)"),(0,i.kt)("li",{parentName:"ul"},"Removed the need for the Elastic Set Up container (indexes are not registered at runtime)"),(0,i.kt)("li",{parentName:"ul"},"Simplified the number of models that need to be maintained for each DataHub entity. We removed the need for",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Relationship Models"),(0,i.kt)("li",{parentName:"ol"},"Entity Models "),(0,i.kt)("li",{parentName:"ol"},"Urn models + the associated Java container classes "),(0,i.kt)("li",{parentName:"ol"},"'Value' models, those which are returned by the Rest.li resource")))),(0,i.kt)("p",null,"In doing so, dramatically reducing the level of effort required to add or extend an existing entity."),(0,i.kt)("p",null,"For more on the design considerations, see the ",(0,i.kt)("strong",{parentName:"p"},"Design")," section below."),(0,i.kt)("h2",{id:"engineering-spec"},"Engineering Spec"),(0,i.kt)("p",null,"This section will provide a more in-depth overview of the design considerations that were at play when working on the No\nCode initiative. "),(0,i.kt)("h1",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"Who needs what & why?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"As a"),(0,i.kt)("th",{parentName:"tr",align:null},"I want to"),(0,i.kt)("th",{parentName:"tr",align:null},"because"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DataHub Operator"),(0,i.kt)("td",{parentName:"tr",align:null},"Add new entities"),(0,i.kt)("td",{parentName:"tr",align:null},"The default domain model does not match my business needs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DataHub Operator"),(0,i.kt)("td",{parentName:"tr",align:null},"Extend existing entities"),(0,i.kt)("td",{parentName:"tr",align:null},"The default domain model does not match my business needs")))),(0,i.kt)("p",null,"What we heard from folks in the community is that adding new entities + aspects is just ",(0,i.kt)("strong",{parentName:"p"},"too difficult"),"."),(0,i.kt)("p",null,"They'd be happy if this process was streamlined and simple. ",(0,i.kt)("strong",{parentName:"p"},"Extra")," happy if there was no chance of merge conflicts in the future. (no fork necessary)"),(0,i.kt)("h1",{id:"goals"},"Goals"),(0,i.kt)("h3",{id:"primary-goal"},"Primary Goal"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reduce the friction")," of adding new entities, aspects, and relationships."),(0,i.kt)("h3",{id:"secondary-goal"},"Secondary Goal"),(0,i.kt)("p",null,"Achieve the primary goal in a way that does not require a fork."),(0,i.kt)("h1",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"must-haves"},"Must-Haves"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mechanisms for ",(0,i.kt)("strong",{parentName:"li"},"adding")," a browsable, searchable, linkable GMS entity by defining one or more PDL models")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity"),(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity relationships"),(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for searching entity"),(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for browsing entity")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Mechanisms for ",(0,i.kt)("strong",{parentName:"li"},"extending")," a *",(0,i.kt)("strong",{parentName:"li"},"*browsable, searchable, linkable GMS **"),"entity by defining one or more PDL models")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity"),(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity relationships"),(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for searching entity"),(0,i.kt)("li",{parentName:"ul"},"GMS Endpoint for browsing entity")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Mechanisms + conventions for introducing a new ",(0,i.kt)("strong",{parentName:"li"},"relationship")," between 2 GMS entities without writing code"),(0,i.kt)("li",{parentName:"ol"},"Clear documentation describing how to perform actions in #1, #2, and #3 above published on ",(0,i.kt)("a",{parentName:"li",href:"http://datahubproject.io"},"datahubproject.io"))),(0,i.kt)("h2",{id:"nice-to-haves"},"Nice-to-haves"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mechanisms for automatically generating a working GraphQL API using the entity PDL models"),(0,i.kt)("li",{parentName:"ol"},"Ability to add / extend GMS entities without a fork.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"e.g. ",(0,i.kt)("strong",{parentName:"li"},"Register")," new entity / extensions ",(0,i.kt)("em",{parentName:"li"},"at runtime"),". (Unlikely due to code generation)"),(0,i.kt)("li",{parentName:"ul"},"or, ",(0,i.kt)("strong",{parentName:"li"},"configure")," new entities at ",(0,i.kt)("em",{parentName:"li"},"deploy time"))),(0,i.kt)("h2",{id:"what-success-looks-like"},"What Success Looks Like"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding a new browsable, searchable entity to GMS (not DataHub UI / frontend) takes 1 dev < 15 minutes."),(0,i.kt)("li",{parentName:"ol"},"Extending an existing browsable, searchable entity in GMS takes 1 dev < 15 minutes"),(0,i.kt)("li",{parentName:"ol"},"Adding a new relationship among 2 GMS entities takes 1 dev < 15 minutes"),(0,i.kt)("li",{parentName:"ol"},"[Bonus]"," Implementing the ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," GraphQL API for a new / extended entity takes < 10 minutes")),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("h2",{id:"state-of-the-world"},"State of the World"),(0,i.kt)("h3",{id:"modeling"},"Modeling"),(0,i.kt)("p",null,"Currently, there are various models in GMS:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/li-utils/src/main/pegasus/com/linkedin/common/DatasetUrn.pdl"},"Urn")," - Structs composing primary keys"),(0,i.kt)("li",{parentName:"ol"},"[Root][Snapshots]","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/snapshot/Snapshot.pdl"},"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/snapshot/Snapshot.pdl"),") - Container of aspects"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/aspect/DashboardAspect.pdl"},"Aspects")," - Optional container of fields"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/key/DatasetKey.pdl"},"Keys")," - Model returned by GMS ",(0,i.kt)("a",{parentName:"li",href:"http://rest.li"},"Rest.li")," API (public facing)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/EntityRelationship.pdl"},"Relationships")," - Edges between 2 entities with optional edge properties"),(0,i.kt)("li",{parentName:"ol"},"Search Documents - Flat documents for indexing within Elastic index")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"And corresponding index ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/gms/impl/src/main/resources/index/chart/mappings.json"},"mappings.json"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/gms/impl/src/main/resources/index/chart/settings.json"},"settings.json"))),(0,i.kt)("p",null,"Various components of GMS depend on / make assumptions about these model types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"IndexBuilders depend on ",(0,i.kt)("strong",{parentName:"li"},"Documents")),(0,i.kt)("li",{parentName:"ol"},"GraphBuilders depend on ",(0,i.kt)("strong",{parentName:"li"},"Snapshots")),(0,i.kt)("li",{parentName:"ol"},"RelationshipBuilders depend on ",(0,i.kt)("strong",{parentName:"li"},"Aspects")),(0,i.kt)("li",{parentName:"ol"},"Mae Processor depend on ",(0,i.kt)("strong",{parentName:"li"},"Snapshots, Documents, Relationships")),(0,i.kt)("li",{parentName:"ol"},"Mce Processor depend on ",(0,i.kt)("strong",{parentName:"li"},"Snapshots, Urns")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://rest.li"},"Rest.li")," Resources on ",(0,i.kt)("strong",{parentName:"li"},"Documents, Snapshots, Aspects, Values, Urns")),(0,i.kt)("li",{parentName:"ol"},"Graph Reader Dao (BaseQueryDao) depends on ",(0,i.kt)("strong",{parentName:"li"},"Relationships, Entity")),(0,i.kt)("li",{parentName:"ol"},"Graph Writer Dao (BaseGraphWriterDAO) depends on ",(0,i.kt)("strong",{parentName:"li"},"Relationships, Entity")),(0,i.kt)("li",{parentName:"ol"},"Local Dao Depends on ",(0,i.kt)("strong",{parentName:"li"},"aspects, urns")),(0,i.kt)("li",{parentName:"ol"},"Search Dao depends on ",(0,i.kt)("strong",{parentName:"li"},"Documents"))),(0,i.kt)("p",null,"Additionally, there are some implicit concepts that require additional caveats / logic:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Browse Paths - Requires defining logic in an entity-specific index builder to generate."),(0,i.kt)("li",{parentName:"ol"},"Urns - Requires defining a) an Urn PDL model and b) a hand-written Urn class ")),(0,i.kt)("p",null,"As you can see, there are many tied up concepts. Fundamentally changing the model would require a serious amount of refactoring, as it would require new versions of numerous components."),(0,i.kt)("p",null,"The challenge is, how can we meet the requirements without fundamentally altering the model?"),(0,i.kt)("h2",{id:"proposed-solution"},"Proposed Solution"),(0,i.kt)("p",null,"In a nutshell, the idea is to consolidate the number of models + code we need to write on a per-entity basis.\nWe intend to achieve this by making search index + relationship configuration declarative, specified as part of the model\ndefinition itself. "),(0,i.kt)("p",null,"We will use this configuration to drive more generic versions of the index builders + rest resources,\nwith the intention of reducing the overall surface area of GMS. "),(0,i.kt)("p",null,"During this initiative, we will also seek to make the concepts of Browse Paths and Urns declarative. Browse Paths\nwill be provided using a special BrowsePaths aspect. Urns will no longer be strongly typed. "),(0,i.kt)("p",null,"To achieve this, we will attempt to generify many components throughout the stack. Currently, many of them are defined on\na ",(0,i.kt)("em",{parentName:"p"},"per-entity")," basis, including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rest.li Resources"),(0,i.kt)("li",{parentName:"ul"},"Index Builders"),(0,i.kt)("li",{parentName:"ul"},"Graph Builders"),(0,i.kt)("li",{parentName:"ul"},"Local, Search, Browse, Graph DAOs"),(0,i.kt)("li",{parentName:"ul"},"Clients "),(0,i.kt)("li",{parentName:"ul"},"Browse Path Logic")),(0,i.kt)("p",null,"along with simplifying the number of raw data models that need defined, including "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rest.li Resource Models"),(0,i.kt)("li",{parentName:"ul"},"Search Document Models"),(0,i.kt)("li",{parentName:"ul"},"Relationship Models"),(0,i.kt)("li",{parentName:"ul"},"Urns + their java classes")),(0,i.kt)("p",null,"From an architectural PoV, we will move from a before that looks something like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/no-code-before.png"})),(0,i.kt)("p",null,"to an after that looks like this"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/no-code-after.png"})),(0,i.kt)("p",null,"That is, a move away from patterns of strong-typing-everywhere to a more generic + flexible world. "),(0,i.kt)("h3",{id:"how-will-we-do-it"},"How will we do it?"),(0,i.kt)("p",null,"We will accomplish this by building the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set of custom annotations to permit declarative entity, search, graph configurations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"@Entity & @Aspect"),(0,i.kt)("li",{parentName:"ul"},"@Searchable"),(0,i.kt)("li",{parentName:"ul"},"@Relationship"))),(0,i.kt)("li",{parentName:"ol"},"Entity Registry: In-memory structures for representing, storing & serving metadata associated with a particular Entity, including search and relationship configurations."),(0,i.kt)("li",{parentName:"ol"},"Generic Entity, Search, Graph Service classes: Replaces traditional strongly-typed DAOs with flexible, pluggable APIs that can be used for CRUD, search, and graph across all entities. "),(0,i.kt)("li",{parentName:"ol"},"Generic Rest.li Resources: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 permitting reading, writing, searching, autocompleting, and browsing arbitrary entities"),(0,i.kt)("li",{parentName:"ul"},"1 permitting reading of arbitrary entity-entity relationship edges"))),(0,i.kt)("li",{parentName:"ol"},"Generic Search Index Builder: Given a MAE and a specification of the Search Configuration for an entity, updates the search index."),(0,i.kt)("li",{parentName:"ol"},"Generic Graph Index Builder: Given a MAE and a specification of the Relationship Configuration for an entity, updates the graph index. "),(0,i.kt)("li",{parentName:"ol"},"Generic Index + Mappings Builder: Dynamically generates index mappings and creates indices on the fly."),(0,i.kt)("li",{parentName:"ol"},"Introduce of special aspects to address other imperative code requirements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BrowsePaths Aspect: Include an aspect to permit customization of the indexed browse paths."),(0,i.kt)("li",{parentName:"ul"},'Key aspects: Include "virtual" aspects for representing the fields that uniquely identify an Entity for easy\nreading by clients of DataHub. ')))),(0,i.kt)("h3",{id:"final-developer-experience-defining-an-entity"},"Final Developer Experience: Defining an Entity"),(0,i.kt)("p",null,'We will outline what the experience of adding a new Entity should look like. We will imagine we want to define a "Service" entity representing\nonline microservices. '),(0,i.kt)("h4",{id:"step-1-add-aspects"},"Step 1. Add aspects"),(0,i.kt)("p",null,"ServiceKey.pdl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.key\n\n/**\n * Key for a Service\n */\n@Aspect = {\n  "name": "serviceKey"\n}\nrecord ServiceKey {\n  /**\n  * Name of the service\n  */\n  @Searchable = {\n    "fieldType": "WORD_GRAM",\n    "enableAutocomplete": true\n  }\n  name: string\n}\n')),(0,i.kt)("p",null,"ServiceInfo.pdl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.service\n\nimport com.linkedin.common.Urn\n\n/**\n * Properties associated with a Tag\n */\n@Aspect = {\n  "name": "serviceInfo"\n}\nrecord ServiceInfo {\n\n  /**\n   * Description of the service\n   */\n  @Searchable = {} \n  description: string\n\n  /**\n   * The owners of the\n   */\n  @Relationship = {\n     "name": "OwnedBy",\n     "entityTypes": ["corpUser"] \n  }\n  owner: Urn\n}\n')),(0,i.kt)("h4",{id:"step-2-add-aspect-union"},"Step 2. Add aspect union."),(0,i.kt)("p",null,"ServiceAspect.pdl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.aspect\n\nimport com.linkedin.metadata.key.ServiceKey\nimport com.linkedin.service.ServiceInfo\nimport com.linkedin.common.BrowsePaths\n\n/**\n * Service Info\n */\ntyperef ServiceAspect = union[\n  ServiceKey,\n  ServiceInfo,\n  BrowsePaths\n]\n")),(0,i.kt)("h4",{id:"step-3-add-snapshot-model"},"Step 3. Add Snapshot model."),(0,i.kt)("p",null,"ServiceSnapshot.pdl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.snapshot\n\nimport com.linkedin.common.Urn\nimport com.linkedin.metadata.aspect.ServiceAspect\n\n@Entity = {\n  "name": "service",\n  "keyAspect": "serviceKey"\n}\nrecord ServiceSnapshot {\n\n  /**\n   * Urn for the service\n   */\n  urn: Urn\n\n  /**\n   * The list of service aspects\n   */\n  aspects: array[ServiceAspect]\n}\n')),(0,i.kt)("h4",{id:"step-4-update-snapshot-union"},"Step 4. Update Snapshot union."),(0,i.kt)("p",null,"Snapshot.pdl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.snapshot\n\n/**\n * A union of all supported metadata snapshot types.\n */\ntyperef Snapshot = union[\n  ... \n  ServiceSnapshot\n]\n")),(0,i.kt)("h3",{id:"interacting-with-new-entity"},"Interacting with New Entity"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Write Entity")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/entities?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{\n   "entity":{ \n      "value":{\n         "com.linkedin.metadata.snapshot.ServiceSnapshot":{\n            "urn": "urn:li:service:mydemoservice",\n            "aspects":[\n               {\n                  "com.linkedin.service.ServiceInfo":{\n                     "description":"My demo service",\n                     "owner": "urn:li:corpuser:user1"                     \n                  }\n               },\n               {\n                  "com.linkedin.common.BrowsePaths":{\n                     "paths":[\n                        "/my/custom/browse/path1",\n                        "/my/custom/browse/path2"\n                     ]\n                  }\n               }\n            ]\n         }\n      }\n   }\n}\'\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Read Entity")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl 'http://localhost:8080/entities/urn%3Ali%3Aservice%3Amydemoservice' -H 'X-RestLi-Protocol-Version:2.0.0'\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Search Entity")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=search\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "input": "My demo",\n    "entity": "service",\n    "start": 0,\n    "count": 10\n}\'\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Autocomplete")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=autocomplete\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "query": "mydem",\n    "entity": "service",\n    "limit": 10\n}\'\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Browse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=browse\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "path": "/my/custom/browse",\n    "entity": "service",\n    "start": 0,\n    "limit": 10\n}\'\n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Relationships")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://localhost:8080/relationships?direction=INCOMING&urn=urn%3Ali%3Acorpuser%3Auser1&types=OwnedBy' \\\n--header 'X-RestLi-Protocol-Version: 2.0.0'\n")))}m.isMDXComponent=!0}}]);