"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(l,".").concat(m)]||c[m]||k[m]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/looker/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/setup.md"},l="Looker & LookML Ingestion Guide: Setup",p={unversionedId:"docs/quick-ingestion-guides/looker/setup",id:"version-0.12.1/docs/quick-ingestion-guides/looker/setup",title:"Setup",description:"Looker Prerequisites",source:"@site/versioned_docs/version-0.12.1/docs/quick-ingestion-guides/looker/setup.md",sourceDirName:"docs/quick-ingestion-guides/looker",slug:"/quick-ingestion-guides/looker/setup",permalink:"/docs/0.12.1/quick-ingestion-guides/looker/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/setup.md",tags:[],version:"0.12.1",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/looker/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/0.12.1/quick-ingestion-guides/looker/overview"},next:{title:"Configuration",permalink:"/docs/0.12.1/quick-ingestion-guides/looker/configuration"}},u={},c=[{value:"Looker Prerequisites",id:"looker-prerequisites",level:2},{value:"Login To Looker Instance",id:"login-to-looker-instance",level:3},{value:"Create A New Permission Set",id:"create-a-new-permission-set",level:3},{value:"Create A Role",id:"create-a-role",level:3},{value:"Create A New User",id:"create-a-new-user",level:3},{value:"Create An API Key",id:"create-an-api-key",level:3},{value:"LookML Prerequisites",id:"lookml-prerequisites",level:2},{value:"Generate a private-public SSH key pair",id:"generate-a-private-public-ssh-key-pair",level:3},{value:"Add Deploy Key to GitHub Repository",id:"add-deploy-key-to-github-repository",level:3},{value:"Next Steps",id:"next-steps",level:2}],k={toc:c},m="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"looker--lookml-ingestion-guide-setup"},"Looker & LookML Ingestion Guide: Setup"),(0,o.kt)("h2",{id:"looker-prerequisites"},"Looker Prerequisites"),(0,o.kt)("p",null,"To configure ingestion from Looker, you'll first have to ensure you have an API key to access the Looker resources."),(0,o.kt)("h3",{id:"login-to-looker-instance"},"Login To Looker Instance"),(0,o.kt)("p",null,"Login to your Looker instance(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<your-looker-instance-name>.cloud.looker.com"),")."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Admin Panel")," & click ",(0,o.kt)("strong",{parentName:"p"},"Roles")," to open Roles Panel."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker home page",src:"http://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-home-page.png"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"30%",alt:"Looker roles search",src:"http://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-roles-search.png"})),(0,o.kt)("h3",{id:"create-a-new-permission-set"},"Create A New Permission Set"),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"Roles Panel"),", click ",(0,o.kt)("strong",{parentName:"p"},"New Permission Set"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker new permission set",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-new-permission-set-button.png"})),(0,o.kt)("p",null,"Set a name for the new permission set (e.g., ",(0,o.kt)("em",{parentName:"p"},"DataHub Connector Permission Set"),") and select the following permissions."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Permission List"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"access_data"),(0,o.kt)("li",{parentName:"ul"},"see_lookml_dashboards"),(0,o.kt)("li",{parentName:"ul"},"see_looks"),(0,o.kt)("li",{parentName:"ul"},"see_user_dashboards"),(0,o.kt)("li",{parentName:"ul"},"explore"),(0,o.kt)("li",{parentName:"ul"},"see_sql"),(0,o.kt)("li",{parentName:"ul"},"see_lookml"),(0,o.kt)("li",{parentName:"ul"},"clear_cache_refresh"),(0,o.kt)("li",{parentName:"ul"},"manage_models"),(0,o.kt)("li",{parentName:"ul"},"see_datagroups"),(0,o.kt)("li",{parentName:"ul"},"see_pdts"),(0,o.kt)("li",{parentName:"ul"},"see_queries"),(0,o.kt)("li",{parentName:"ul"},"see_schedules"),(0,o.kt)("li",{parentName:"ul"},"see_system_activity"),(0,o.kt)("li",{parentName:"ul"},"see_users"))),(0,o.kt)("p",null,"After selecting all permissions mentioned above, click ",(0,o.kt)("strong",{parentName:"p"},"New Permission Set")," at the bottom of the page."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker permission set window",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-permission-set-window.png"})),(0,o.kt)("h3",{id:"create-a-role"},"Create A Role"),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Roles")," Panel, click ",(0,o.kt)("strong",{parentName:"p"},"New Role"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker new role button",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-new-role-button.png"})),(0,o.kt)("p",null,"Set the name for the new role (e.g., ",(0,o.kt)("em",{parentName:"p"},"DataHub Extractor"),") and set the following fields on this window. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Permission Set")," to permission set created in previous step (i.e ",(0,o.kt)("em",{parentName:"li"},"DataHub Connector Permission Set"),")"),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Model Set")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"All"))),(0,o.kt)("p",null,"Finally, click ",(0,o.kt)("strong",{parentName:"p"},"New Role")," at the bottom of the page. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker new role window",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-new-role-window.png"})),(0,o.kt)("h3",{id:"create-a-new-user"},"Create A New User"),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Admin")," Panel, click ",(0,o.kt)("strong",{parentName:"p"},"Users")," to open the users panel."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker user search",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-user-search.png"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Users"),". "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker add user",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-add-user-button.png"})),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"Adding a new user"),", set details in the following fields. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add user's ",(0,o.kt)("strong",{parentName:"li"},"Email Addresses"),"."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Roles")," to the role created in previous step (e.g. ",(0,o.kt)("em",{parentName:"li"},"DataHub Extractor"),") ")),(0,o.kt)("p",null,"Finally, click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker new user window",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-add-new-user.png"})),(0,o.kt)("h3",{id:"create-an-api-key"},"Create An API Key"),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"User")," Panel, click on the newly created user. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker user panel",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-user-panel.png"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Edit Keys")," to open the ",(0,o.kt)("strong",{parentName:"p"},"API Key")," Panel. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker user view",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-user-view.png"})),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"API Key")," Panel, click ",(0,o.kt)("strong",{parentName:"p"},"New API Key")," to generate a new ",(0,o.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,o.kt)("strong",{parentName:"p"},"Client Secret"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker new api key",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/looker-api-key.png"})),(0,o.kt)("h2",{id:"lookml-prerequisites"},"LookML Prerequisites"),(0,o.kt)("p",null,"Follow the below steps to create the GitHub Deploy Key."),(0,o.kt)("h3",{id:"generate-a-private-public-ssh-key-pair"},"Generate a private-public SSH key pair"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa -f looker_datahub_deploy_key\n# If prompted, don't add a passphrase to the key\n")),(0,o.kt)("p",null,"This will typically generate two files like the one below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"looker_datahub_deploy_key")," (private key)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"looker_datahub_deploy_key.pub")," (public key)")),(0,o.kt)("h3",{id:"add-deploy-key-to-github-repository"},"Add Deploy Key to GitHub Repository"),(0,o.kt)("p",null,"First, log in to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),". "),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"GitHub Repository")," -> ",(0,o.kt)("strong",{parentName:"p"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"p"},"Deploy Keys")," and add a public key (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"looker_datahub_deploy_key.pub"),") as deploy key with read access. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"75%",alt:"Looker home page",src:"http://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/looker/lookml-deploy-key.png"})),(0,o.kt)("p",null,"Make a note of the private key file. You must paste the file's contents into the GitHub Deploy Key field later while ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/quick-ingestion-guides/looker/configuration"},"configuring")," ingestion on the DataHub Portal."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Once you've done all the above steps, it's time to move on to ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/quick-ingestion-guides/looker/configuration"},"configuring the actual ingestion source")," within DataHub."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,o.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);