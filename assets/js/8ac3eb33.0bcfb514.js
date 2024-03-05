"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3181],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,s(s({ref:e},l),{},{components:a})):n.createElement(d,s({ref:e},l))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:r,s[1]=p;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48669:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"What is a snapshot?",slug:"/what/snapshot",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/snapshot.md"},s="What is a snapshot?",p={unversionedId:"docs/what/snapshot",id:"docs/what/snapshot",title:"What is a snapshot?",description:"A metadata snapshot models the current state of one or multiple metadata aspects associated with a particular entity.",source:"@site/genDocs/docs/what/snapshot.md",sourceDirName:"docs/what",slug:"/what/snapshot",permalink:"/docs/what/snapshot",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/snapshot.md",tags:[],version:"current",frontMatter:{title:"What is a snapshot?",slug:"/what/snapshot",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/snapshot.md"}},i={},c=[],l={toc:c},u="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-snapshot"},"What is a snapshot?"),(0,r.kt)("p",null,"A metadata snapshot models the current state of one or multiple metadata ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"aspects")," associated with a particular ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity"),".\nEach entity type is expected to have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An entity-specific aspect (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"CorpGroupAspect")," from below), which is a ",(0,r.kt)("inlineCode",{parentName:"li"},"typeref")," containing a union of all possible metadata aspects for the entity."),(0,r.kt)("li",{parentName:"ol"},"An entity-specific snapshot (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"CorpGroupSnapshot")," from below), which contains an array (aspects) of entity-specific aspects.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.aspect\n\nimport com.linkedin.group.Membership\nimport com.linkedin.group.SomeOtherMetadata\n\n/**\n * A union of all supported metadata aspects for a group\n */\ntyperef CorpGroupAspect = union[Membership, SomeOtherMetadata]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.snapshot\n\nimport com.linkedin.common.CorpGroupUrn\nimport com.linkedin.metadata.aspect.CorpGroupAspect\n\n/**\n * A metadata snapshot for a specific Group entity.\n */\nrecord CorpGroupSnapshot {\n\n  /** URN for the entity the metadata snapshot is associated with */\n  urn: CorpGroupUrn\n\n  /** The list of metadata aspects associated with the group */\n  aspects: array[CorpGroupAspect]\n}\n")),(0,r.kt)("p",null,"The generic ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot")," typeref contains a union of all entity-specific snapshots and can therefore be used to represent the state of any metadata aspect for all supported entity types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.snapshot\n\n/**\n * A union of all supported metadata snapshot types.\n */\ntyperef Snapshot = union[DatasetSnapshot, CorpGroupSnapshot, CorpUserSnapshot]\n")))}h.isMDXComponent=!0}}]);