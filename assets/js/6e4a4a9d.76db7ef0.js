"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(k,r(r({ref:t},s),{},{components:n})):o.createElement(k,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(83117),a=(n(67294),n(3905));const i={title:"Configuring Okta Authentication for React App (OIDC)",slug:"/authentication/guides/sso/configure-oidc-react-okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react-okta.md"},r="Configuring Okta Authentication for React App (OIDC)",c={unversionedId:"docs/authentication/guides/sso/configure-oidc-react-okta",id:"version-0.10.5/docs/authentication/guides/sso/configure-oidc-react-okta",title:"Configuring Okta Authentication for React App (OIDC)",description:"Authored on 3/10/2021",source:"@site/versioned_docs/version-0.10.5/docs/authentication/guides/sso/configure-oidc-react-okta.md",sourceDirName:"docs/authentication/guides/sso",slug:"/authentication/guides/sso/configure-oidc-react-okta",permalink:"/docs/authentication/guides/sso/configure-oidc-react-okta",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react-okta.md",tags:[],version:"0.10.5",frontMatter:{title:"Configuring Okta Authentication for React App (OIDC)",slug:"/authentication/guides/sso/configure-oidc-react-okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react-okta.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Google Authentication for React App (OIDC)",permalink:"/docs/authentication/guides/sso/configure-oidc-react-google"},next:{title:"Configuring Azure Authentication for React App (OIDC)",permalink:"/docs/authentication/guides/sso/configure-oidc-react-azure"}},l={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Create an application in Okta Developer Console",id:"1-create-an-application-in-okta-developer-console",level:3},{value:"2. Obtain Client Credentials",id:"2-obtain-client-credentials",level:3},{value:"3. Obtain Discovery URI",id:"3-obtain-discovery-uri",level:3},{value:"4. Configure <code>datahub-frontend</code> to enable OIDC authentication",id:"4-configure-datahub-frontend-to-enable-oidc-authentication",level:3},{value:"5. Restart <code>datahub-frontend-react</code> docker container",id:"5-restart-datahub-frontend-react-docker-container",level:3},{value:"Resources",id:"resources",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-okta-authentication-for-react-app-oidc"},"Configuring Okta Authentication for React App (OIDC)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored on 3/10/2021")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," server can be configured to authenticate users over OpenID Connect (OIDC). As such, it can be configured to\ndelegate authentication responsibility to identity providers like Okta."),(0,a.kt)("p",null,"This guide will provide steps for configuring DataHub authentication using Okta."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Even when OIDC is configured, the root user can still login without OIDC by going\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," URL endpoint. It is recommended that you don't use the default\ncredentials by mounting a different file in the front end container. To do this\nplease see ",(0,a.kt)("a",{parentName:"p",href:"/docs/authentication/guides/jaas"},"this guide")," to mount a custom user.props file for a JAAS authenticated deployment.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"1-create-an-application-in-okta-developer-console"},"1. Create an application in Okta Developer Console"),(0,a.kt)("p",null,"a. Log in to your Okta admin account & navigate to the developer console"),(0,a.kt)("p",null,"b. Select ",(0,a.kt)("strong",{parentName:"p"},"Applications"),", then ",(0,a.kt)("strong",{parentName:"p"},"Add Application"),", the ",(0,a.kt)("strong",{parentName:"p"},"Create New App")," to create a new app."),(0,a.kt)("p",null,"c. Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," as the ",(0,a.kt)("strong",{parentName:"p"},"Platform"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenID Connect")," as the ",(0,a.kt)("strong",{parentName:"p"},"Sign on method")),(0,a.kt)("p",null,"d. Click ",(0,a.kt)("strong",{parentName:"p"},"Create")),(0,a.kt)("p",null,"e. Under 'General Settings', name your application"),(0,a.kt)("p",null,"f. Below, add a ",(0,a.kt)("strong",{parentName:"p"},"Login Redirect URI"),". This should be formatted as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com/callback/oidc\n")),(0,a.kt)("p",null,"If you're just testing locally, this can be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/callback/oidc"),"."),(0,a.kt)("p",null,"g. Below, add a ",(0,a.kt)("strong",{parentName:"p"},"Logout Redirect URI"),". This should be formatted as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com\n")),(0,a.kt)("p",null,"h. ","[Optional]"," If you're enabling DataHub login as an Okta tile, you'll need to provide the ",(0,a.kt)("strong",{parentName:"p"},"Initiate Login URI"),". You\ncan set if to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com/authenticate\n")),(0,a.kt)("p",null,"If you're just testing locally, this can be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9002"),"."),(0,a.kt)("p",null,"i. Click ",(0,a.kt)("strong",{parentName:"p"},"Save")),(0,a.kt)("h3",{id:"2-obtain-client-credentials"},"2. Obtain Client Credentials"),(0,a.kt)("p",null,"On the subsequent screen, you should see the client credentials. Bookmark the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client secret")," for the next step."),(0,a.kt)("h3",{id:"3-obtain-discovery-uri"},"3. Obtain Discovery URI"),(0,a.kt)("p",null,"On the same page, you should see an ",(0,a.kt)("inlineCode",{parentName:"p"},"Okta Domain"),". Your OIDC discovery URI will be formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-okta-domain.com/.well-known/openid-configuration\n")),(0,a.kt)("p",null,"for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dev-33231928.okta.com/.well-known/openid-configuration"),"."),(0,a.kt)("p",null,"At this point, you should be looking at a screen like the following:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/okta-setup-1.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/okta-setup-2.png"})),(0,a.kt)("p",null,"Success!"),(0,a.kt)("h3",{id:"4-configure-datahub-frontend-to-enable-oidc-authentication"},"4. Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"datahub-frontend")," to enable OIDC authentication"),(0,a.kt)("p",null,"a. Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/datahub-frontend/env/docker.env")),(0,a.kt)("p",null,"b. Add the following configuration values to the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'AUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=https://your-okta-domain.com/.well-known/openid-configuration\nAUTH_OIDC_BASE_URL=your-datahub-url\nAUTH_OIDC_SCOPE="openid profile email groups"\n')),(0,a.kt)("p",null,"Replacing the placeholders above with the client id & client secret received from Okta in Step 2."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Pro Tip!")," You can easily enable Okta to return the groups that a user is associated with, which will be provisioned in DataHub, along with the user logging in. This can be enabled by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTH_OIDC_EXTRACT_GROUPS_ENABLED")," flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".\nif they do not already exist in DataHub. You can enable your Okta application to return a 'groups' claim from the Okta Console at Applications > Your Application -> Sign On -> OpenID Connect ID Token Settings (Requires an edit)."),(0,a.kt)("p",{parentName:"blockquote"},'By default, we assume that the groups will appear in a claim named "groups". This can be customized using the ',(0,a.kt)("inlineCode",{parentName:"p"},"AUTH_OIDC_GROUPS_CLAIM")," container configuration. "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/okta-setup-groups-claim.png"}))),(0,a.kt)("h3",{id:"5-restart-datahub-frontend-react-docker-container"},"5. Restart ",(0,a.kt)("inlineCode",{parentName:"h3"},"datahub-frontend-react")," docker container"),(0,a.kt)("p",null,"Now, simply restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container to enable the integration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml  up datahub-frontend-react\n")),(0,a.kt)("p",null,"Navigate to your DataHub domain to see SSO in action."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/concepts/oauth-openid/"},"OAuth 2.0 and OpenID Connect Overview"))))}p.isMDXComponent=!0}}]);