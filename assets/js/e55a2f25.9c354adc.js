"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2743],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Contributing",slug:"/contributing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md"},s="Contributing",u={unversionedId:"docs/CONTRIBUTING",id:"docs/CONTRIBUTING",isDocsHomePage:!1,title:"Contributing",description:"We always welcome contributions to help make DataHub better. Take a moment to read this document if you would like to contribute.",source:"@site/genDocs/docs/CONTRIBUTING.md",sourceDirName:"docs",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md",tags:[],version:"current",frontMatter:{title:"Contributing",slug:"/contributing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md"},sidebar:"overviewSidebar",previous:{title:"Contributor Covenant Code of Conduct",permalink:"/docs/code_of_conduct"},next:{title:"Articles & Talks",permalink:"/docs/links"}},c=[{value:"Provide Feedback",id:"provide-feedback",children:[],level:2},{value:"Reporting Issues",id:"reporting-issues",children:[],level:2},{value:"Submitting a Request For Comment (RFC)",id:"submitting-a-request-for-comment-rfc",children:[],level:2},{value:"Submitting a Pull Request (PR)",id:"submitting-a-pull-request-pr",children:[],level:2},{value:"Commit Message Format",id:"commit-message-format",children:[{value:"Type",id:"type",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Body",id:"body",children:[],level:3},{value:"Footer",id:"footer",children:[],level:3},{value:"Revert",id:"revert",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"We always welcome contributions to help make DataHub better. Take a moment to read this document if you would like to contribute."),(0,o.kt)("h2",{id:"provide-feedback"},"Provide Feedback"),(0,o.kt)("p",null,"Have ideas about how to make DataHub better? Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://feature-requests.datahubproject.io/"},"DataHub Feature Requests")," and tell us all about it!"),(0,o.kt)("p",null,"Show your support for other requests by upvoting; stay up to date on progess by subscribing for updates via email."),(0,o.kt)("h2",{id:"reporting-issues"},"Reporting Issues"),(0,o.kt)("p",null,"We use GitHub issues to track bug reports and submitting pull requests."),(0,o.kt)("p",null,"If you find a bug:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the GitHub issue search to check whether the bug has already been reported.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the issue has been fixed, try to reproduce the issue using the latest master branch of the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the issue still reproduces or has not yet been reported, try to isolate the problem before opening an issue."))),(0,o.kt)("h2",{id:"submitting-a-request-for-comment-rfc"},"Submitting a Request For Comment (RFC)"),(0,o.kt)("p",null,"If you have a substantial feature or a design discussion that you'd like to have with the community follow the RFC process outlined ",(0,o.kt)("a",{parentName:"p",href:"/docs/rfc"},"here")),(0,o.kt)("h2",{id:"submitting-a-pull-request-pr"},"Submitting a Pull Request (PR)"),(0,o.kt)("p",null,"Before you submit your Pull Request (PR), consider the following guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate effort."),(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"},"standard GitHub approach")," to create the PR. Please also follow our ",(0,o.kt)("a",{parentName:"li",href:"#commit-message-format"},"commit message format"),"."),(0,o.kt)("li",{parentName:"ul"},"If there are any breaking changes, potential downtime, deprecations, or big feature please add an update in ",(0,o.kt)("a",{parentName:"li",href:"/docs/how/updating-datahub"},"Updating DataHub under Next"),"."),(0,o.kt)("li",{parentName:"ul"},"That's it! Thank you for your contribution!")),(0,o.kt)("h2",{id:"commit-message-format"},"Commit Message Format"),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"Conventional Commits")," specification for the commit message format. In summary, each commit message consists of a ",(0,o.kt)("em",{parentName:"p"},"header"),", a ",(0,o.kt)("em",{parentName:"p"},"body")," and a ",(0,o.kt)("em",{parentName:"p"},"footer"),", separated by a single blank line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,o.kt)("p",null,"Any line of the commit message cannot be longer than 88 characters! This allows the message to be easier to read on GitHub as well as in various Git tools."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("p",null,"Must be one of the following (based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular convention"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"feat"),": A new feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"fix"),": A bug fix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"docs"),": Documentation only changes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"perf"),": A code change that improves performance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts")),(0,o.kt)("p",null,"A scope may be provided to a commit\u2019s type, to provide additional contextual information and is contained within parenthesis, e.g., "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"feat(parser): add ability to parse arrays\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Each commit must contain a succinct description of the change:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,o.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,o.kt)("li",{parentName:"ul"},"no dot(.) at the end")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,'Just as in the description, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.'),(0,o.kt)("h3",{id:"footer"},"Footer"),(0,o.kt)("p",null,"The footer should contain any information about ",(0,o.kt)("em",{parentName:"p"},"Breaking Changes"),", and is also the place to reference GitHub issues that this commit ",(0,o.kt)("em",{parentName:"p"},"Closes"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Breaking Changes")," should start with the words ",(0,o.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two new lines. The rest of the commit message is then used for this."),(0,o.kt)("h3",{id:"revert"},"Revert"),(0,o.kt)("p",null,"If the commit reverts a previous commit, it should begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"revert:"),", followed by the description. In the body it should say: ",(0,o.kt)("inlineCode",{parentName:"p"},"Refs: <hash1> <hash2> ..."),", where the hashs are the SHA of the commits being reverted, e.g. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"revert: let us never again speak of the noodle incident\n\nRefs: 676104e, a215868\n")))}m.isMDXComponent=!0}}]);