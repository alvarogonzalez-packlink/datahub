"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[99857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const o={title:"What is a metadata delta?",slug:"/what/delta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/delta.md"},i="What is a metadata delta?",l={unversionedId:"docs/what/delta",id:"docs/what/delta",title:"What is a metadata delta?",description:"Rest.li supports partial update natively without needing explicitly defined models.",source:"@site/genDocs/docs/what/delta.md",sourceDirName:"docs/what",slug:"/what/delta",permalink:"/docs/next/what/delta",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/delta.md",tags:[],version:"current",frontMatter:{title:"What is a metadata delta?",slug:"/what/delta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/delta.md"}},d={},p=[],s={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-metadata-delta"},"What is a metadata delta?"),(0,r.kt)("p",null,"Rest.li supports ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#partial_update"},"partial update")," natively without needing explicitly defined models.\nHowever, the granularity of update is always limited to each field in a PDL model.\nThere are cases where the update need to happen at an even finer grain, e.g. adding or removing items from an array."),(0,r.kt)("p",null,"To this end, we\u2019re proposing the following entity-specific metadata delta model that allows atomic partial updates at any desired granularity.\nNote that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Just like metadata ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/what/aspect"},"aspects"),", we\u2019re not imposing any limit on the partial update model, as long as it\u2019s a valid PDL record.\nThis is because the rest.li endpoint will have the logic that performs the corresponding partial update based on the information in the model.\nThat said, it\u2019s common to have fields that denote the list of items to be added or removed (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"membersToAdd")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"membersToRemove")," from below)"),(0,r.kt)("li",{parentName:"ol"},"Similar to metadata ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/what/snapshot"},"snapshots"),", entity that supports metadata delta will add an entity-specific metadata delta\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"GroupDelta")," from below) that unions all supported partial update models."),(0,r.kt)("li",{parentName:"ol"},"The entity-specific metadata delta is then added to the global ",(0,r.kt)("inlineCode",{parentName:"li"},"Delta")," typeref, which is added as part of ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/what/mxe#metadata-change-event-mce"},"Metadata Change Event")," and used during ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/architecture/metadata-ingestion"},"Metadata Ingestion"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.group\n\nimport com.linkedin.common.CorpuserUrn\n\n/**\n * A metadata delta for a specific group entity\n */\nrecord MembershipPartialUpdate {\n  \n  /** List of members to be added to the group */\n  membersToAdd: array[CorpuserUrn]\n\n  /** List of members to be removed from the group */\n  membersToRemove: array[CorpuserUrn]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.delta\n\nimport com.linkedin.common.CorpGroupUrn\nimport com.linkedin.group.MembershipPartialUpdate\n\n/**\n * A metadata delta for a specific group entity\n */\nrecord GroupDelta {\n\n  /** URN for the entity the metadata delta is associated with */\n  urn: CorpGroupUrn\n\n  /** The specific type of metadata delta to apply */\n  delta: union[MembershipPartialUpdate]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.delta\n\n/**\n * A union of all supported metadata delta types.\n */\ntyperef Delta = union[GroupDelta]\n")))}m.isMDXComponent=!0}}]);