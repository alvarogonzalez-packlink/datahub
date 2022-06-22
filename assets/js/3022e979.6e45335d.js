"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9660],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47398:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Migrate Graph Service Implementation to Elasticsearch",sidebar_label:"Migrate Graph Service Implementation to Elasticsearch",slug:"/how/migrating-graph-service-implementation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/migrating-graph-service-implementation.md"},c="Migrate Graph Service Implementation to Elasticsearch",s={unversionedId:"docs/how/migrating-graph-service-implementation",id:"docs/how/migrating-graph-service-implementation",isDocsHomePage:!1,title:"Migrate Graph Service Implementation to Elasticsearch",description:"We currently support either Elasticsearch or Neo4j as backend implementations for the graph service. We recommend",source:"@site/genDocs/docs/how/migrating-graph-service-implementation.md",sourceDirName:"docs/how",slug:"/how/migrating-graph-service-implementation",permalink:"/docs/how/migrating-graph-service-implementation",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/migrating-graph-service-implementation.md",tags:[],version:"current",frontMatter:{title:"Migrate Graph Service Implementation to Elasticsearch",sidebar_label:"Migrate Graph Service Implementation to Elasticsearch",slug:"/how/migrating-graph-service-implementation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/migrating-graph-service-implementation.md"},sidebar:"overviewSidebar",previous:{title:"No Code Upgrade (In-Place Migration Guide)",permalink:"/docs/advanced/no-code-upgrade"},next:{title:"MetadataChangeProposal & MetadataChangeLog Events",permalink:"/docs/advanced/mcp-mcl"}},p=[{value:"Docker-compose",id:"docker-compose",children:[],level:2},{value:"Helm",id:"helm",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-graph-service-implementation-to-elasticsearch"},"Migrate Graph Service Implementation to Elasticsearch"),(0,o.kt)("p",null,"We currently support either Elasticsearch or Neo4j as backend implementations for the graph service. We recommend\nElasticsearch for those looking for a lighter deployment or do not want to manage a Neo4j database.\nIf you started using Neo4j as your graph service backend, here is how you can migrate to Elasticsearch."),(0,o.kt)("h2",{id:"docker-compose"},"Docker-compose"),(0,o.kt)("p",null,"If you are running your instance through docker locally, you will want to spin up your Datahub instance with\nelasticsearch as the backend. On a clean start, this happens by default. However, if you've written data to\nNeo4j you need to explicitly ask DataHub to start in Elastic mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"datahub docker quickstart --graph-service-impl=elasticsearch\n")),(0,o.kt)("p",null,"Next, run the following command from root to rebuild your graph index."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./docker/datahub-upgrade/datahub-upgrade.sh -u RestoreIndices\n")),(0,o.kt)("p",null,"After this command completes, you should be migrated. Open up the DataHub UI and verify your relationships are\nvisible."),(0,o.kt)("p",null,"Once you confirm the migration is successful, you must remove your neo4j volume by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"docker volume rm datahub_neo4jdata\n")),(0,o.kt)("p",null,"This prevents your DataHub instance from coming up in neo4j mode in the future."),(0,o.kt)("h2",{id:"helm"},"Helm"),(0,o.kt)("p",null,"First, adjust your helm variables to turn off neo4j and set your graph_service_impl to elasticsearch."),(0,o.kt)("p",null,"To turn off neo4j in your prerequisites file, set ",(0,o.kt)("inlineCode",{parentName:"p"},"neo4j-community"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\nin this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/prerequisites/values.yaml#L54"},"values.yaml"),"."),(0,o.kt)("p",null,"Then, set ",(0,o.kt)("inlineCode",{parentName:"p"},"graph_service_impl")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"elasticsearch")," in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/values.yaml#L63"},"values.yaml")," of datahub."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deploy/kubernetes#components"},"deployment helm guide")," for more details on how to\nset up your helm deployment."),(0,o.kt)("p",null,"Finally, follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/how/restore-indices"},"restore-indices helm guide")," to re-build\nyour graph index."),(0,o.kt)("p",null,"Once the job completes, your data will be migrated."))}m.isMDXComponent=!0}}]);