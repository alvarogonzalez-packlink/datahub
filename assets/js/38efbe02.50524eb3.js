"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={title:"Generate Access Token",slug:"/api/tutorials/references/generate-access-token",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/references/generate-access-token.md"},c="Generate Access Token",s={unversionedId:"docs/api/tutorials/references/generate-access-token",id:"docs/api/tutorials/references/generate-access-token",title:"Generate Access Token",description:"With CURL, you need to provide tokens. To generate token, run the following comand.",source:"@site/genDocs/docs/api/tutorials/references/generate-access-token.md",sourceDirName:"docs/api/tutorials/references",slug:"/api/tutorials/references/generate-access-token",permalink:"/docs/api/tutorials/references/generate-access-token",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/references/generate-access-token.md",tags:[],version:"current",frontMatter:{title:"Generate Access Token",slug:"/api/tutorials/references/generate-access-token",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/references/generate-access-token.md"},sidebar:"overviewSidebar",previous:{title:"Adding Lineage",permalink:"/docs/api/tutorials/adding-lineage"},next:{title:"Preparing Your Local DataHub Environment",permalink:"/docs/api/tutorials/references/prepare-datahub"}},i={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generate-access-token"},"Generate Access Token"),(0,a.kt)("p",null,"With CURL, you need to provide tokens. To generate token, run the following comand. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query":"mutation { createAccessToken(input: { type: PERSONAL, actorUrn: \\"urn:li:corpuser:datahub\\", duration: ONE_HOUR, name: \\"my personal token\\" } ) { accessToken metadata { id name description} } }", "variables":{}}\'\n')),(0,a.kt)("p",null,"Expected Response: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createAccessToken": {\n      "accessToken": <my-access-token>,\n      "metadata": {\n        "id": <my-id>,\n        "name": "my personal token",\n        "description": null\n      }\n    }\n  },\n  "extensions": {}\n}\n')),(0,a.kt)("p",null,"You can now copy ",(0,a.kt)("inlineCode",{parentName:"p"},"accessToken")," and pass it to header."))}u.isMDXComponent=!0}}]);