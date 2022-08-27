"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3478],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,b=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(b,a(a({ref:t},d),{},{components:n})):r.createElement(b,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={sidebar_position:22,title:"InviteToken",slug:"/generated/metamodel/entities/invitetoken",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/inviteToken.md"},l="InviteToken",c={unversionedId:"docs/generated/metamodel/entities/inviteToken",id:"docs/generated/metamodel/entities/inviteToken",isDocsHomePage:!1,title:"InviteToken",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/inviteToken.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/invitetoken",permalink:"/docs/generated/metamodel/entities/invitetoken",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/inviteToken.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"InviteToken",slug:"/generated/metamodel/entities/invitetoken",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/inviteToken.md"},sidebar:"overviewSidebar",previous:{title:"Test",permalink:"/docs/generated/metamodel/entities/test"},next:{title:"SchemaField",permalink:"/docs/generated/metamodel/entities/schemafield"}},d=[{value:"Aspects",id:"aspects",children:[{value:"inviteToken",id:"invitetoken-1",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"invitetoken"},"InviteToken"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"invitetoken-1"},"inviteToken"),(0,o.kt)("p",null,"Aspect used to store the token needed to invite native DataHub users"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "inviteToken"\n  },\n  "name": "InviteToken",\n  "namespace": "com.linkedin.identity",\n  "fields": [\n    {\n      "type": "string",\n      "name": "token",\n      "doc": "The encrypted invite token."\n    }\n  ],\n  "doc": "Aspect used to store the token needed to invite native DataHub users"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);