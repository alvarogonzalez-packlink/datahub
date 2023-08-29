"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=l,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50753:(e,t,n)=>{n.r(t),n.d(t,{default:()=>tt});var a=n(67294),l=n(79488),r=n(43768);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(86010),d=n(13488),u=n(83117),p=n(97325),f=n(83699);function h(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return a.createElement(f.Z,{className:(0,m.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function v(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=c();return a.createElement(v,{previous:e.previous,next:e.next})}var E=n(39962),g=n(30613),N=n(23702),y=n(86409),L=n(58801);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=C[e.versionMetadata.banner];return a.createElement(t,e)}function k(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,y.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,g.Jo)(r),s=i??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,m.Z)(t,N.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(k,{versionLabel:c.label,to:s.path,onClick:()=>o(c.name)})))}function T(e){let{className:t}=e;const n=(0,L.E)();return n.banner?a.createElement(Z,{className:t,versionMetadata:n}):null}function x(e){let{className:t}=e;const n=(0,L.E)();return n.badge?a.createElement("span",{className:(0,m.Z)(t,N.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function H(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function O(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:N.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(H,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function M(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(A,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function U(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:N.k.common.editThisPage},a.createElement(M,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const I="tag_zVej",P="tagRegular_sFm0",S="tagWithCount_h2kH";function B(e){let{permalink:t,label:n,count:l}=e;return a.createElement(f.Z,{href:t,className:(0,m.Z)(I,l?S:P)},n,l&&a.createElement("span",null,l))}const z="tags_jXut",V="tag_QGVx";function j(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,m.Z)(z,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:V},a.createElement(B,{label:t,permalink:n}))}))))}const D="lastUpdated_vwxv";function R(e){return a.createElement("div",{className:(0,m.Z)(N.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(j,e)))}function F(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,m.Z)(N.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(U,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",D)},(n||l)&&a.createElement(O,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function q(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,i=o.length>0,s=!!(t||n||r);return i||s?a.createElement("footer",{className:(0,m.Z)(N.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(R,{tags:o}),s&&a.createElement(F,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var $=n(54639),W=n(20107);function G(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function J(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=J({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function Q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Q(e.parentNode):t}function X(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>Q(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Q(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,W.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function K(e){const t=(0,a.useRef)(void 0),n=Y();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=X(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function ee(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(ee,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const te=a.memo(ee);function ne(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i,...c}=e;const s=(0,W.L)(),m=o??s.tableOfContents.minHeadingLevel,d=i??s.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>J({toc:G(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:m,maxHeadingLevel:d});return K((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:d}}),[l,r,m,d])),a.createElement(te,(0,u.Z)({toc:p,className:n,linkClassName:l},c))}const ae="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E";function re(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",ae,!t&&le,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const oe="tocCollapsible_ETCw",ie="tocCollapsibleContent_vkbj",ce="tocCollapsibleExpanded_sAul";function se(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:i}=(0,$.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(oe,!o&&ce,n)},a.createElement(re,{collapsed:o,onClick:i}),a.createElement($.z,{lazy:!0,className:ie,collapsed:o},a.createElement(ne,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const me="tocMobile_ITEo";function de(){const{toc:e,frontMatter:t}=c();return a.createElement(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(N.k.docs.docTocMobile,me)})}const ue="tableOfContents_bqdL";function pe(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,m.Z)(ue,"thin-scrollbar",t)},a.createElement(ne,(0,u.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function fe(){const{toc:e,frontMatter:t}=c();return a.createElement(pe,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:N.k.docs.docTocDesktop})}const he="anchorWithStickyNavbar_LWe7",ve="anchorWithHideOnScrollNavbar_WYt5";function be(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:r}}=(0,W.L)();return"h1"!==t&&n?a.createElement(t,(0,u.Z)({},l,{className:(0,m.Z)("anchor",r?ve:he),id:n}),l.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,u.Z)({},l,{id:void 0}))}var Ee=n(3905),ge=n(31514);var Ne=n(69319);var ye=n(51048);const Le="details_lb9f",Ce="isBrowser_bmU9",_e="collapsibleContent_i85q";function ke(e){return!!e&&("SUMMARY"===e.tagName||ke(e.parentElement))}function Ze(e,t){return!!e&&(e===t||Ze(e.parentElement,t))}function Te(e){let{summary:t,children:n,...l}=e;const r=(0,ye.Z)(),o=(0,a.useRef)(null),{collapsed:i,setCollapsed:c}=(0,$.u)({initialState:!l.open}),[s,d]=(0,a.useState)(l.open);return a.createElement("details",(0,u.Z)({},l,{ref:o,open:s,"data-collapsed":i,className:(0,m.Z)(Le,r&&Ce,l.className),onMouseDown:e=>{ke(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ke(t)&&Ze(t,o.current)&&(e.preventDefault(),i?(c(!1),d(!0)):c(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement($.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),d(!e)}},a.createElement("div",{className:_e},n)))}const xe="details_b_Ee";function we(e){let{...t}=e;return a.createElement(Te,(0,u.Z)({},t,{className:(0,m.Z)("alert alert--info",xe,t.className)}))}function He(e){return a.createElement(be,e)}const Oe="containsTaskList_mC6p";const Ae="img_ev3q";const Me="admonition_LlT9",Ue="admonitionHeading_tbUL",Ie="admonitionIcon_kALy",Pe="admonitionContent_S0QG";const Se={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Be={secondary:"note",important:"info",success:"tip",warning:"danger"};function ze(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}const Ve={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(ge.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(Ne.Z,e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){return a.createElement(Ne.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(we,(0,u.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,u.Z)({},e,{className:(t=e.className,(0,m.Z)(t,t?.includes("contains-task-list")&&Oe))}));var t},img:function(e){return a.createElement("img",(0,u.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,Ae))}));var t},h1:e=>a.createElement(He,(0,u.Z)({as:"h1"},e)),h2:e=>a.createElement(He,(0,u.Z)({as:"h2"},e)),h3:e=>a.createElement(He,(0,u.Z)({as:"h3"},e)),h4:e=>a.createElement(He,(0,u.Z)({as:"h4"},e)),h5:e=>a.createElement(He,(0,u.Z)({as:"h5"},e)),h6:e=>a.createElement(He,(0,u.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:r}=ze(e),o=function(e){const t=Be[e]??e;return Se[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Se.info)}(n),i=l??o.label,{iconComponent:c}=o,s=r??a.createElement(c,null);return a.createElement("div",{className:(0,m.Z)(N.k.common.admonition,N.k.common.admonitionType(e.type),"alert",`alert--${o.infimaClassName}`,Me)},a.createElement("div",{className:Ue},a.createElement("span",{className:Ie},s),i),a.createElement("div",{className:Pe},t))},mermaid:()=>null};function je(e){let{children:t}=e;return a.createElement(Ee.Zo,{components:Ve},t)}function De(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(N.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(be,{as:"h1"},n)),a.createElement(je,null,t))}var Re=n(78259),Fe=n(69003),qe=n(79524);function $e(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const We={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Ge(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(f.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Je(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,m.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Qe(){const e=(0,qe.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,m.Z)("breadcrumbs__link",We.breadcrumbsItemLink),href:e},a.createElement($e,{className:We.breadcrumbHomeIcon})))}function Xe(){const e=(0,Re.s1)(),t=(0,Fe.Ns)();return e?a.createElement("nav",{className:(0,m.Z)(N.k.docs.docBreadcrumbs,We.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Qe,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(Je,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(Ge,{href:t.href,isLast:l},t.label))})))):null}const Ye="docItemContainer_Djhp",Ke="docItemCol_VOVn";function et(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,d.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(de,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(fe,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&Ke)},a.createElement(T,null),a.createElement("div",{className:Ye},a.createElement("article",null,a.createElement(Xe,null),a.createElement(x,null),n.mobile,a.createElement(De,null,t),a.createElement(q,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function tt(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(et,null,a.createElement(n,null))))}},58801:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(67294),l=n(43768);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);