"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(83117),n=(a(67294),a(3905));const o={title:"What is GMA graph?",slug:"/what/graph",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/graph.md"},i="What is GMA graph?",s={unversionedId:"docs/what/graph",id:"docs/what/graph",title:"What is GMA graph?",description:"All the entities and relationships are stored in a graph database, Neo4j.",source:"@site/genDocs/docs/what/graph.md",sourceDirName:"docs/what",slug:"/what/graph",permalink:"/docs/next/what/graph",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/graph.md",tags:[],version:"current",frontMatter:{title:"What is GMA graph?",slug:"/what/graph",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/graph.md"}},p={},l=[],c={toc:l};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-gma-graph"},"What is GMA graph?"),(0,n.kt)("p",null,"All the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/what/entity"},"entities")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/what/relationship"},"relationships")," are stored in a graph database, Neo4j.\nThe graph always represents the current state of the world and has no direct support for versioning or history.\nHowever, as stated in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/metadata-modeling/metadata-model"},"Metadata Modeling")," section,\nthe graph is merely a derived view of all metadata ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/what/aspect"},"aspects")," thus can always be rebuilt directly from historic ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/what/mxe#metadata-audit-event-mae"},"MAEs"),".\nConsequently, it is possible to build a specific snapshot of the graph in time by replaying MAEs up to that point."),(0,n.kt)("p",null,"In theory, the system can work with any generic ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_transaction_processing"},"OLTP")," graph DB that supports the following operations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dynamical creation, modification, and removal of nodes and edges"),(0,n.kt)("li",{parentName:"ul"},"Dynamical attachment of key-value properties to each node and edge"),(0,n.kt)("li",{parentName:"ul"},"Transactional partial updates of properties of a specific node or edge"),(0,n.kt)("li",{parentName:"ul"},"Fast ID-based retrieval of nodes & edges"),(0,n.kt)("li",{parentName:"ul"},"Efficient queries involving both graph traversal and properties value filtering"),(0,n.kt)("li",{parentName:"ul"},"Support efficient bidirectional graph traversal")))}h.isMDXComponent=!0}}]);