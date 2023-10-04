"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53522],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(a),m=l,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86211:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"About DataHub Access Policies",sidebar_label:"Access Policies",slug:"/authorization/access-policies-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md"},i="About DataHub Access Policies",o={unversionedId:"docs/authorization/access-policies-guide",id:"docs/authorization/access-policies-guide",title:"About DataHub Access Policies",description:"Access Policies define who can do what to which resources. In conjunction with Roles, Access Policies determine what users are allowed to do on DataHub.",source:"@site/genDocs/docs/authorization/access-policies-guide.md",sourceDirName:"docs/authorization",slug:"/authorization/access-policies-guide",permalink:"/docs/next/authorization/access-policies-guide",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md",tags:[],version:"current",frontMatter:{title:"About DataHub Access Policies",sidebar_label:"Access Policies",slug:"/authorization/access-policies-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md"},sidebar:"overviewSidebar",previous:{title:"Custom Ownership Types",permalink:"/docs/next/ownership/ownership-types"},next:{title:"Dataset Usage & Query History",permalink:"/docs/next/features/dataset-usage-and-query-history"}},s={},p=[{value:"Policy Types",id:"policy-types",level:2},{value:"Access Policies Setup, Prerequisites, and Permissions",id:"access-policies-setup-prerequisites-and-permissions",level:2},{value:"Using Access Policies",id:"using-access-policies",level:2},{value:"Creating a Platform Policy",id:"creating-a-platform-policy",level:3},{value:"Step 1. Provide a Name &amp; Description",id:"step-1-provide-a-name--description",level:4},{value:"Step 2: Configure Privileges",id:"step-2-configure-privileges",level:4},{value:"Step 3: Choose Policy Actors",id:"step-3-choose-policy-actors",level:4},{value:"Creating a Metadata Policy",id:"creating-a-metadata-policy",level:3},{value:"Step 1. Provide a Name &amp; Description",id:"step-1-provide-a-name--description-1",level:4},{value:"Step 2: Configure Privileges",id:"step-2-configure-privileges-1",level:4},{value:"Step 3: Choose Policy Actors",id:"step-3-choose-policy-actors-1",level:4},{value:"Updating an Existing Policy",id:"updating-an-existing-policy",level:3},{value:"Removing a Policy",id:"removing-a-policy",level:3},{value:"Deactivating a Policy",id:"deactivating-a-policy",level:3},{value:"Default Policies",id:"default-policies",level:3},{value:"REST API Authorization",id:"rest-api-authorization",level:3},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Videos",id:"videos",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"FAQ and Troubleshooting",id:"faq-and-troubleshooting",level:2},{value:"Related Features",id:"related-features",level:3}],c=(d="FeatureAvailability",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)});var d;const u={toc:p},m="wrapper";function g(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"about-datahub-access-policies"},"About DataHub Access Policies"),(0,l.kt)(c,{mdxType:"FeatureAvailability"}),(0,l.kt)("p",null,"Access Policies define who can do what to which resources. In conjunction with ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/authorization/roles"},"Roles"),", Access Policies determine what users are allowed to do on DataHub."),(0,l.kt)("h2",{id:"policy-types"},"Policy Types"),(0,l.kt)("p",null,"There are 2 types of Access Policy within DataHub:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Platform")," Policies"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Metadata")," Policies")),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-policy-type.png"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Platform")," Policies determine who has platform-level Privileges on DataHub. These include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Managing Users & Groups"),(0,l.kt)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,l.kt)("li",{parentName:"ul"},"Managing Policies themselves")),(0,l.kt)("p",null,"Platform policies can be broken down into 2 parts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")'),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Actors"),": Who the should be granted the privileges (Users, or Groups)")),(0,l.kt)("p",null,"A few Platform Policies in plain English include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves"),(0,l.kt)("li",{parentName:"ul"},"John from IT should be able to invite new users")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Metadata")," policies determine who can do what to which Metadata Entities. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,l.kt)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,l.kt)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,l.kt)("p",null,"Metadata policies can be broken down into 3 parts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a Policy, e.g. \"Add Tags\"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the Policy applies to, e.g. \"All Datasets\"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups, & roles that the Policy applies to.")),(0,l.kt)("p",null,"A few ",(0,l.kt)("strong",{parentName:"p"},"Metadata")," Policies in plain English include: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags."),(0,l.kt)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,l.kt)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of.")),(0,l.kt)("p",null,"Each of these can be implemented by constructing DataHub Access Policies."),(0,l.kt)("h2",{id:"access-policies-setup-prerequisites-and-permissions"},"Access Policies Setup, Prerequisites, and Permissions"),(0,l.kt)("p",null,"What you need to manage Access Policies on DataHub:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Manage Policies")," Privilege")),(0,l.kt)("p",null,"This Platform Privilege allows users to create, edit, and remove all Access Policies on DataHub. Therefore, it should only be\ngiven to those users who will be serving as Admins of the platform. The default ",(0,l.kt)("inlineCode",{parentName:"p"},"Admin")," role has this Privilege."),(0,l.kt)("h2",{id:"using-access-policies"},"Using Access Policies"),(0,l.kt)("p",null,"Policies can be created by first navigating to ",(0,l.kt)("strong",{parentName:"p"},"Settings > Permissions > Policies"),"."),(0,l.kt)("p",null,"To begin building a new Policy, click ",(0,l.kt)("strong",{parentName:"p"},"Create new Policy"),"."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/manage-permissions.png"})),(0,l.kt)("h3",{id:"creating-a-platform-policy"},"Creating a Platform Policy"),(0,l.kt)("h4",{id:"step-1-provide-a-name--description"},"Step 1. Provide a Name & Description"),(0,l.kt)("p",null,"In the first step, we select the ",(0,l.kt)("strong",{parentName:"p"},"Platform")," Policy type, and define a name and description for the new Policy. "),(0,l.kt)("p",null,'Good Policy names describe the high-level purpose of the Policy. For example, a Policy named\n"View DataHub Analytics - Data Governance Team" would be a great way to describe a Platform\nPolicy which grants abilities to view DataHub\'s Analytics view to anyone on the Data Governance team. '),(0,l.kt)("p",null,"You can optionally provide a text description to add richer details about the purpose of the Policy."),(0,l.kt)("h4",{id:"step-2-configure-privileges"},"Step 2: Configure Privileges"),(0,l.kt)("p",null,"In the second step, we can simply select the Privileges that this Platform Policy will grant."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-platform-privileges.png"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Platform")," Privileges most often provide access to perform administrative functions on the Platform. These include:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Platform Privileges"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Policies"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove access control policies. Be careful - Actors with this Privilege are effectively super users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Metadata Ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update Metadata Ingestion sources.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Secrets"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to create & remove secrets stored inside DataHub.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Users & Groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update users and groups on DataHub.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage All Access Tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and list access tokens for all users on DataHub.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create Domains"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to create new Domains")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Domains"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove any Domains.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Analytics"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor access to the DataHub analytics dashboard.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Generate Personal Access Tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate access tokens for personal use with DataHub APIs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage User Credentials"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate invite links for new native DataHub users, and password reset links for existing native users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Glossaries"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, move, and delete Glossary Terms and Term Groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to create new Tags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to create and remove any Tags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Public Views"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, and remove any public (shared) Views.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Ownership Types"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, and remove any Ownership Types.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Platform Settings"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow the actor to manage global integrations and notification settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Monitors"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow the actor to create, remove, start, or stop any entity assertion monitors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Restore Indices API",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to restore indices for a set of entities via API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable Writeability API",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to enable or disable GMS writeability for use in data migrations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Apply Retention API",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the actor to apply aspect retention via API")))),(0,l.kt)("h4",{id:"step-3-choose-policy-actors"},"Step 3: Choose Policy Actors"),(0,l.kt)("p",null,"In this step, we can select the actors who should be granted Privileges appearing on this Policy."),(0,l.kt)("p",null,"To do so, simply search and select the Users or Groups that the Policy should apply to."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Assigning a Policy to a User")),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-users.png"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Assigning a Policy to a Group")),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-groups.png"})),(0,l.kt)("h3",{id:"creating-a-metadata-policy"},"Creating a Metadata Policy"),(0,l.kt)("h4",{id:"step-1-provide-a-name--description-1"},"Step 1. Provide a Name & Description"),(0,l.kt)("p",null,"In the first step, we select the ",(0,l.kt)("strong",{parentName:"p"},"Metadata")," Policy, and define a name and description for the new Policy."),(0,l.kt)("p",null,'Good Policy names describe the high-level purpose of the Policy. For example, a Policy named\n"Full Dataset Edit Privileges - Data Platform Engineering" would be a great way to describe a Metadata\nPolicy which grants all abilities to edit Dataset Metadata to anyone in the "Data Platform" group.'),(0,l.kt)("p",null,"You can optionally provide a text description to add richer detail about the purpose of the Policy."),(0,l.kt)("h4",{id:"step-2-configure-privileges-1"},"Step 2: Configure Privileges"),(0,l.kt)("p",null,"In the second step, we can simply select the Privileges that this Metadata Policy will grant.\nTo begin, we should first determine which assets that the Privileges should be granted for (i.e. the ",(0,l.kt)("em",{parentName:"p"},"scope"),"), then\nselect the appropriate Privileges to grant."),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Resource Type")," selector, we can narrow down the ",(0,l.kt)("em",{parentName:"p"},"type")," of the assets that the Policy applies to. If left blank,\nall entity types will be in scope."),(0,l.kt)("p",null,"For example, if we only want to grant access for ",(0,l.kt)("inlineCode",{parentName:"p"},"Datasets")," on DataHub, we can select\n",(0,l.kt)("inlineCode",{parentName:"p"},"Datasets"),"."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-type.png"})),(0,l.kt)("p",null,"Next, we can search for specific Entities of the that the Policy should grant privileges on.\nIf left blank, all entities of the selected types are in scope."),(0,l.kt)("p",null,"For example, if we only want to grant access for a specific sample dataset, we can search and\nselect it directly."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-urn.png"})),(0,l.kt)("p",null,"We can also limit the scope of the Policy to assets that live in a specific ",(0,l.kt)("strong",{parentName:"p"},"Domain"),". If left blank,\nentities from all Domains will be in scope."),(0,l.kt)("p",null,'For example, if we only want to grant access for assets part of a "Marketing" Domain, we can search and\nselect it.'),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-domain.png"})),(0,l.kt)("p",null,"Finally, we will choose the Privileges to grant when the selected entities fall into the defined\nscope."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-metadata-privileges.png"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Metadata")," Privileges grant access to change specific ",(0,l.kt)("em",{parentName:"p"},"entities")," (i.e. data assets) on DataHub."),(0,l.kt)("p",null,"The common Metadata Privileges, which span across entity types, include:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Common Privileges"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Entity Page"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to access the entity page for the resource in the UI. If not granted, it will redirect them to an unauthorized page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove tags to an asset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Glossary Terms"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove glossary terms to an asset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Owners"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove owners of an entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Description"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the description (documentation) of an entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Links"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit links associated with an entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Status"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the status of an entity (soft deleted or not).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Domain of an entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Deprecation"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Deprecation status of an entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Lineage"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit custom lineage edges for the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Data Product"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the data product that an entity is part of")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Propose Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to propose new Tags for the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Propose Glossary Terms"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to propose new Glossary Terms for the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Propose Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to propose new Documentation for the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Tag Proposals"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to accept or reject proposed Tags for the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Glossary Terms Proposals"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to accept or reject proposed Glossary Terms for the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Documentation Proposals"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to accept or reject proposed Documentation for the entity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Entity"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit any information about an entity. Super user privileges. Controls the ability to ingest using API when REST API Authorization is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get Timeline API",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to get the timeline of an entity via API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get Entity API",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to get an entity via API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get Timeseries Aspect API",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to get a timeseries aspect via API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get Aspect/Entity Count APIs",(0,l.kt)("sup",{parentName:"td",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to get aspect and entity counts via API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Search API"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to search for entities via API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Produce Platform Event API"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to ingest a platform event via API.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Specific Metadata Privileges")," include"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Entity"),(0,l.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) tags associated with a dataset schema.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Glossary Terms"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) glossary terms associated with a dataset schema.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Descriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) descriptions associated with a dataset schema.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Dataset Queries"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Highlighted Queries on the Queries tab of the dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"View Dataset Usage"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to access usage metadata about a dataset both in the UI and in the GraphQL API. This includes example queries, number of queries, etc. Also applies to REST APIs when REST API Authorization is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"View Dataset Profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to access a dataset's profile both in the UI and in the GraphQL API. This includes snapshot statistics like #rows, #columns, null percentage per field, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Assertions"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change the assertions associated with a dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Incidents"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to change the incidents associated with a dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Monitors"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to change the assertion monitors associated with a dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Tag Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change the color of a Tag.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Group Members"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove members to a group.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Contact Information"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change email, slack handle associated with the group.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage Group Subscriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to subscribe the group to entities.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage Group Notifications"),(0,l.kt)("td",{parentName:"tr",align:null},"(Acryl DataHub only) Allow actor to change notification settings for the group.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit User Profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change the user's profile including display name, bio, title, profile image, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User + Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Contact Information"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change the contact information such as email & chat handles.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage Direct Glossary Children"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change the direct child Term Groups or Terms of the group.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage All Glossary Children"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow actor to change any direct or indirect child Term Groups or Terms of the group.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Still have questions about Privileges?")," Let us know in ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack"),"!")),(0,l.kt)("h4",{id:"step-3-choose-policy-actors-1"},"Step 3: Choose Policy Actors"),(0,l.kt)("p",null,"In this step, we can select the actors who should be granted the Privileges on this Policy. Metadata Policies\ncan target specific Users & Groups, or the ",(0,l.kt)("em",{parentName:"p"},"owners")," of the Entities that are included in the scope of the Policy."),(0,l.kt)("p",null,"To do so, simply search and select the Users or Groups that the Policy should apply to."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-users.png"})),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-groups.png"})),(0,l.kt)("p",null,"We can also grant the Privileges to the ",(0,l.kt)("em",{parentName:"p"},"owners")," of Entities (or ",(0,l.kt)("em",{parentName:"p"},"Resources"),") that are in scope for the Policy.\nThis advanced functionality allows of Admins of DataHub to closely control which actions can or cannot be performed by owners."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-owners.png"})),(0,l.kt)("h3",{id:"updating-an-existing-policy"},"Updating an Existing Policy"),(0,l.kt)("p",null,"To update an existing Policy, simply click the ",(0,l.kt)("strong",{parentName:"p"},"Edit")," on the Policy you wish to change."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/edit-policy.png"})),(0,l.kt)("p",null,"Then, make the changes required and click ",(0,l.kt)("strong",{parentName:"p"},"Save"),". When you save a Policy, it may take up to 2 minutes for changes\nto be reflected."),(0,l.kt)("h3",{id:"removing-a-policy"},"Removing a Policy"),(0,l.kt)("p",null,"To remove a Policy, simply click on the trashcan icon located on the Policies list. This will remove the Policy and\ndeactivate it so that it no longer applies."),(0,l.kt)("p",null,"When you delete a Policy, it may take up to 2 minutes for changes to be reflected."),(0,l.kt)("h3",{id:"deactivating-a-policy"},"Deactivating a Policy"),(0,l.kt)("p",null,'In addition to deletion, DataHub also supports "deactivating" a Policy. This is useful if you need to temporarily disable\na particular Policy, but do not want to remove it altogether.'),(0,l.kt)("p",null,"To deactivate a Policy, simply click the ",(0,l.kt)("strong",{parentName:"p"},"Deactivate")," button on the Policy you wish to deactivate. When you change\nthe state of a Policy, it may take up to 2 minutes for the changes to be reflected."),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/deactivate-policy.png"})),(0,l.kt)("p",null,"After deactivating, you can re-enable a Policy by clicking ",(0,l.kt)("strong",{parentName:"p"},"Activate"),"."),(0,l.kt)("h3",{id:"default-policies"},"Default Policies"),(0,l.kt)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. This set of policies serves the\nfollowing purposes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,l.kt)("li",{parentName:"ol"},"Assigns all Platform Privileges for all Users by default (Editable)")),(0,l.kt)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,l.kt)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing Access Policies without friction.\nNote that these Privileges ",(0,l.kt)("em",{parentName:"p"},"can")," and likely ",(0,l.kt)("em",{parentName:"p"},"should")," be changed inside the ",(0,l.kt)("strong",{parentName:"p"},"Policies")," page before onboarding\nyour company's users."),(0,l.kt)("h3",{id:"rest-api-authorization"},"REST API Authorization"),(0,l.kt)("p",null,"Policies only affect REST APIs when the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"REST_API_AUTHORIZATION")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," for GMS. Some policies only apply when this setting is enabled, marked above, and other Metadata and Platform policies apply to the APIs where relevant, also specified in the table above."),(0,l.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/authorization"},"Authorization Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/authorization/roles"},"Roles Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/authorization/groups"},"Authorization using Groups"))),(0,l.kt)("h3",{id:"videos"},"Videos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/19zQCznqhMI?t=282"},"Introducing DataHub Access Policies"))),(0,l.kt)("h3",{id:"graphql"},"GraphQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/graphql/queries#listPolicies"},"listPolicies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/graphql/mutations#createPolicy"},"createPolicy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/graphql/mutations#updatePolicy"},"updatePolicy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/graphql/mutations#deletePolicy"},"deletePolicy"))),(0,l.kt)("h2",{id:"faq-and-troubleshooting"},"FAQ and Troubleshooting"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How do Policies relate to Roles?")),(0,l.kt)("p",null,"Policies are the lowest level primitive for granting Privileges to users on DataHub. "),(0,l.kt)("p",null,"Roles are built for convenience on top of Policies. Roles grant Privileges to actors indirectly, driven by Policies\nbehind the scenes. Both can be used in conjunction to grant Privileges to end users. "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,l.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")),(0,l.kt)("h3",{id:"related-features"},"Related Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/authorization/roles"},"Roles"))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Only active if REST_API_AUTHORIZATION_ENABLED environment flag is enabled",(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);