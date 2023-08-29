"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[84055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const o={title:"Onboarding Users to DataHub",slug:"/authentication/guides/add-users",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/add-users.md"},i="Onboarding Users to DataHub",s={unversionedId:"docs/authentication/guides/add-users",id:"version-0.10.5/docs/authentication/guides/add-users",title:"Onboarding Users to DataHub",description:"New user accounts can be provisioned on DataHub in 3 ways:",source:"@site/versioned_docs/version-0.10.5/docs/authentication/guides/add-users.md",sourceDirName:"docs/authentication/guides",slug:"/authentication/guides/add-users",permalink:"/docs/authentication/guides/add-users",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/add-users.md",tags:[],version:"0.10.5",frontMatter:{title:"Onboarding Users to DataHub",slug:"/authentication/guides/add-users",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/add-users.md"},sidebar:"overviewSidebar",previous:{title:"Changing the default user credentials",permalink:"/docs/authentication/changing-default-credentials"},next:{title:"JaaS Authentication",permalink:"/docs/authentication/guides/jaas"}},u={},l=[{value:"Generating an Invite Link",id:"generating-an-invite-link",level:3},{value:"Resetting User Passwords",id:"resetting-user-passwords",level:3},{value:"Managed DataHub",id:"managed-datahub",level:3},{value:"Self-Hosted DataHub",id:"self-hosted-datahub",level:3},{value:"Adding new users using a user.props file",id:"adding-new-users-using-a-userprops-file",level:2},{value:"(Advanced) Mount custom user.props file to container",id:"advanced-mount-custom-userprops-file-to-container",level:3},{value:"Docker Compose",id:"docker-compose",level:4},{value:"Helm",id:"helm",level:4},{value:"Changing the default &#39;datahub&#39; user credentials (Recommended)",id:"changing-the-default-datahub-user-credentials-recommended",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Adding User Details",id:"adding-user-details",level:3},{value:"FAQ",id:"faq",level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onboarding-users-to-datahub"},"Onboarding Users to DataHub"),(0,r.kt)("p",null,"New user accounts can be provisioned on DataHub in 3 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Shared Invite Links"),(0,r.kt)("li",{parentName:"ol"},"Single Sign-On using ",(0,r.kt)("a",{parentName:"li",href:"https://www.google.com/search?q=openid+connect&oq=openid+connect&aqs=chrome.0.0i131i433i512j0i512l4j69i60l2j69i61.1468j0j7&sourceid=chrome&ie=UTF-8"},"OpenID Connect")),(0,r.kt)("li",{parentName:"ol"},"Static Credential Configuration File (Self-Hosted Only)")),(0,r.kt)("p",null,"The first option is the easiest to get started with. The second is recommended for deploying DataHub in production. The third should\nbe reserved for special circumstances where access must be closely monitored and controlled, and is only relevant for Self-Hosted instances."),(0,r.kt)("h1",{id:"shared-invite-links"},"Shared Invite Links"),(0,r.kt)("h3",{id:"generating-an-invite-link"},"Generating an Invite Link"),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage User Credentials")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/access-policies-guide"},"Platform Privilege"),", you can invite new users to DataHub by sharing an invite link."),(0,r.kt)("p",null,"To do so, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Users & Groups")," section inside of Settings page. Here you can generate a shareable invite link by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Invite Users")," button. If you\ndo not have the correct privileges to invite users, this button will be disabled."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"100%",src:"https://raw.githubusercontent.com/datahub-project/datahub/master/docs/imgs/invite-users-button.png"})),(0,r.kt)("p",null,"To invite new users, simply share the link with others inside your organization."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/datahub/master/docs/imgs/invite-users-popup.png"})),(0,r.kt)("p",null,"When a new user visits the link, they will be directed to a sign up screen where they can create their DataHub account."),(0,r.kt)("h3",{id:"resetting-user-passwords"},"Resetting User Passwords"),(0,r.kt)("p",null,"To reset a user's password, navigate to the Users & Groups tab, find the user who needs their password reset,\nand click ",(0,r.kt)("strong",{parentName:"p"},"Reset user password")," inside the menu dropdown on the right hand side. Note that a user must have the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Manage User Credentials")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/access-policies-guide"},"Platform Privilege")," in order to reset passwords."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"100%",src:"https://raw.githubusercontent.com/datahub-project/datahub/master/docs/imgs/reset-user-password-button.png"})),(0,r.kt)("p",null,"To reset the password, simply share the password reset link with the user who needs to change their password. Password reset links expire after 24 hours."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/datahub/master/docs/imgs/reset-user-password-popup.png"})),(0,r.kt)("h1",{id:"configuring-single-sign-on-with-openid-connect"},"Configuring Single Sign-On with OpenID Connect"),(0,r.kt)("p",null,"Setting up Single Sign-On via OpenID Connect enables your organization's users to login to DataHub via a central Identity Provider such as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure AD"),(0,r.kt)("li",{parentName:"ul"},"Okta"),(0,r.kt)("li",{parentName:"ul"},"Keycloak"),(0,r.kt)("li",{parentName:"ul"},"Ping!"),(0,r.kt)("li",{parentName:"ul"},"Google Identity")),(0,r.kt)("p",null,"and many more."),(0,r.kt)("p",null,"This option is strongly recommended for production deployments of DataHub."),(0,r.kt)("h3",{id:"managed-datahub"},"Managed DataHub"),(0,r.kt)("p",null,"Single Sign-On can be configured and enabled by navigating to ",(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"SSO")," > ",(0,r.kt)("strong",{parentName:"p"},"OIDC"),". Note\nthat a user must have the ",(0,r.kt)("strong",{parentName:"p"},"Manage Platform Settings")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/access-policies-guide"},"Platform Privilege"),"\nin order to configure SSO settings."),(0,r.kt)("p",null,"To complete the integration, you'll need the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client ID")," - A unique identifier for your application with the identity provider"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client Secret")," - A shared secret to use for exchange between you and your identity provider"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Discovery URL")," - A URL where the OpenID settings for your identity provider can be discovered.")),(0,r.kt)("p",null,"These values can be obtained from your Identity Provider by following Step 1 on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/guides/sso/configure-oidc-react"},"OpenID Connect Authentication"),") Guide."),(0,r.kt)("h3",{id:"self-hosted-datahub"},"Self-Hosted DataHub"),(0,r.kt)("p",null,"For information about configuring Self-Hosted DataHub to use OpenID Connect (OIDC) to\nperform authentication, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/guides/sso/configure-oidc-react"},"OIDC Authentication"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"A note about user URNs"),": User URNs are unique identifiers for users on DataHub. The username received from an Identity Provider\nwhen a user logs into DataHub via OIDC is used to construct a unique identifier for the user on DataHub. The urn is computed as:\n",(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:corpuser:<extracted-username>")),(0,r.kt)("p",{parentName:"blockquote"},"By default, the email address will be the username extracted from the Identity Provider. For information about customizing\nthe claim should be treated as the username in Datahub, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/guides/sso/configure-oidc-react"},"OIDC Authentication")," documentation.")),(0,r.kt)("h1",{id:"static-credential-configuration-file-self-hosted-only"},"Static Credential Configuration File (Self-Hosted Only)"),(0,r.kt)("p",null,"User credentials can be managed via a ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/guides/jaas"},"JaaS Authentication")," configuration file containing\nstatic username and password combinations. By default, the credentials for the root 'datahub' users are configured\nusing this mechanism. It is highly recommended that admins change or remove the default credentials for this user"),(0,r.kt)("h2",{id:"adding-new-users-using-a-userprops-file"},"Adding new users using a user.props file"),(0,r.kt)("p",null,"To define a set of username / password combinations that should be allowed to log in to DataHub (in addition to the root 'datahub' user),\ncreate a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," at the file path ",(0,r.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins/frontend/auth/user.props")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container\nor pod."),(0,r.kt)("p",null,'This file should contain username:password specifications, with one on each line. For example, to create 2 new users,\nwith usernames "janesmith" and "johndoe", we would define the following file:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// custom user.props\njanesmith:janespassword\njohndoe:johnspassword\n")),(0,r.kt)("p",null,"Once you've saved the file, simply start the DataHub containers & navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/login"),"\nto verify that your new credentials work."),(0,r.kt)("p",null,"To change or remove existing login credentials, edit and save the ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file. Then restart DataHub containers."),(0,r.kt)("p",null,"If you want to customize the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file, or if you're deploying DataHub via Helm, proceed to Step 2."),(0,r.kt)("h3",{id:"advanced-mount-custom-userprops-file-to-container"},"(Advanced) Mount custom user.props file to container"),(0,r.kt)("p",null,"This step is only required when mounting custom credentials into a Kubernetes pod (e.g. Helm) ",(0,r.kt)("strong",{parentName:"p"},"or")," if you want to change\nthe default filesystem location from which DataHub mounts a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file (",(0,r.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins/frontend/auth/user.props)"),"."),(0,r.kt)("p",null,"If you are deploying with ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart"),", or running using Docker Compose, you can most likely skip this step."),(0,r.kt)("h4",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"You'll need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to mount a container volume mapping your custom user.props to the standard location inside the container\n(",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins/frontend/auth/user.props"),")."),(0,r.kt)("p",null,"For example, to mount a user.props file that is stored on my local filesystem at ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/datahub/user.props"),", we'd modify the YAML for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-web-react")," config to look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-aidl"},"  datahub-frontend-react:\n    build:\n      context: ../\n      dockerfile: docker/datahub-frontend/Dockerfile\n    image: linkedin/datahub-frontend-react:${DATAHUB_VERSION:-head}\n    .....\n    # The new stuff\n    volumes:\n      - ${HOME}/.datahub/plugins:/etc/datahub/plugins\n      - /tmp/datahub:/etc/datahub/plugins/frontend/auth\n")),(0,r.kt)("p",null,"Once you've made this change, restarting DataHub enable authentication for the configured users."),(0,r.kt)("h4",{id:"helm"},"Helm"),(0,r.kt)("p",null,"You'll need to create a Kubernetes secret, then mount the file as a volume to the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," pod."),(0,r.kt)("p",null,"First, create a secret from your local ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic datahub-users-secret --from-file=user.props=./<path-to-your-user.props>\n")),(0,r.kt)("p",null,"Then, configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," to add the volume to the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"datahub-frontend:\n  ...\n  extraVolumes:\n    - name: datahub-users\n      secret:\n        defaultMode: 0444\n        secretName:  datahub-users-secret\n  extraVolumeMounts:\n    - name: datahub-users\n      mountPath: /etc/datahub/plugins/frontend/auth/user.props\n      subPath: user.props\n")),(0,r.kt)("p",null,"Note that if you update the secret you will need to restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," pods so the changes are reflected. To update the secret in-place you can run something like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic datahub-users-secret --from-file=user.props=./<path-to-your-user.props> -o yaml --dry-run=client | kubectl apply -f -\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A note on user URNs: User URNs are unique identifiers for users of DataHub. The usernames defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props"),' file will be used to generate the DataHub user "urn", which uniquely identifies\nthe user on DataHub. The urn is computed as ',(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:corpuser:{username}"),', where "username is defined inside your user.props file."')),(0,r.kt)("h2",{id:"changing-the-default-datahub-user-credentials-recommended"},"Changing the default 'datahub' user credentials (Recommended)"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/changing-default-credentials"},"Changing the default user credentials"),"."),(0,r.kt)("h2",{id:"caveats"},"Caveats"),(0,r.kt)("h3",{id:"adding-user-details"},"Adding User Details"),(0,r.kt)("p",null,"If you add a new username / password to the ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file, no other information about the user will exist\nabout the user in DataHub (full name, email, bio, etc). This means that you will not be able to search to find the user."),(0,r.kt)("p",null,"In order for the user to become searchable, simply navigate to the new user's profile page (top-right corner) and click\n",(0,r.kt)("strong",{parentName:"p"},"Edit Profile"),". Add some details like a display name, an email, and more. Then click ",(0,r.kt)("strong",{parentName:"p"},"Save"),". Now you should be able\nto find the user via search."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use our Python Emitter SDK to produce custom information about the new user via the CorpUser metadata entity.")),(0,r.kt)("p",null,"For a more comprehensive overview of how users & groups are managed within DataHub, check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8Osw6p9vDYY"},"this video"),"."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Can I enable OIDC and username / password (JaaS) authentication at the same time?")),(0,r.kt)("p",null,"YES! If you have not explicitly disabled JaaS via an environment variable on the datahub-frontend container (AUTH_JAAS_ENABLED),\nthen you can always access the standard login flow at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://your-datahub-url.com/login"),"."),(0,r.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,r.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on Slack!"))}c.isMDXComponent=!0}}]);