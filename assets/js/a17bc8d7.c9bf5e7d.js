"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(87462),n=(a(67294),a(3905));const r={title:"Build Debugging Guide",slug:"/troubleshooting/build",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/build.md"},i="Build Debugging Guide",l={unversionedId:"docs/troubleshooting/build",id:"version-0.10.5/docs/troubleshooting/build",title:"Build Debugging Guide",description:"For when Local Development did not work out smoothly.",source:"@site/versioned_docs/version-0.10.5/docs/troubleshooting/build.md",sourceDirName:"docs/troubleshooting",slug:"/troubleshooting/build",permalink:"/docs/troubleshooting/build",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/build.md",tags:[],version:"0.10.5",frontMatter:{title:"Build Debugging Guide",slug:"/troubleshooting/build",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/build.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart Debugging Guide",permalink:"/docs/troubleshooting/quickstart"},next:{title:"General Debugging Guide",permalink:"/docs/troubleshooting/general"}},d={},s=[{value:"Getting <code>Unsupported class file major version 57</code>",id:"getting-unsupported-class-file-major-version-57",level:2},{value:"Getting <code>cannot find symbol</code> error for <code>javax.annotation.Generated</code>",id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated",level:2},{value:"<code>:metadata-models:generateDataTemplate</code> task fails with <code>java.nio.file.InvalidPathException: Illegal char &lt;:&gt; at index XX</code> or <code>Caused by: java.lang.IllegalArgumentException: &#39;other&#39; has different root</code> error",id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error",level:2},{value:"Various errors related to <code>generateDataTemplate</code> or other <code>generate</code> tasks",id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks",level:2},{value:"<code>Execution failed for task &#39;:metadata-service:restli-servlet-impl:checkRestModel&#39;</code>",id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel",level:2},{value:"<code>java.io.IOException: No space left on device</code>",id:"javaioioexception-no-space-left-on-device",level:2},{value:"<code>Build failed</code> for task <code>./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint</code>",id:"build-failed-for-task-gradlew-datahub-frontenddist--x-yarntest--x-yarnlint",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-debugging-guide"},"Build Debugging Guide"),(0,n.kt)("p",null,"For when ",(0,n.kt)("a",{parentName:"p",href:"/docs/developers"},"Local Development")," did not work out smoothly."),(0,n.kt)("h2",{id:"getting-unsupported-class-file-major-version-57"},"Getting ",(0,n.kt)("inlineCode",{parentName:"h2"},"Unsupported class file major version 57")),(0,n.kt)("p",null,"You're probably using a Java version that's too new for gradle. Run the following command to check your Java version"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"java --version\n")),(0,n.kt)("p",null,"While it may be possible to build and run DataHub using newer versions of Java, we currently only support ",(0,n.kt)("a",{parentName:"p",href:"https://openjdk.org/projects/jdk/11/"},"Java 11")," (aka Java 11)."),(0,n.kt)("h2",{id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated"},"Getting ",(0,n.kt)("inlineCode",{parentName:"h2"},"cannot find symbol")," error for ",(0,n.kt)("inlineCode",{parentName:"h2"},"javax.annotation.Generated")),(0,n.kt)("p",null,"Similar to the previous issue, please use Java 1.8 to build the project.\nYou can install multiple version of Java on a single machine and switch between them using the ",(0,n.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E21454_01/html/821-2531/inst_jdk_javahome_t.html"},"this document")," for more details."),(0,n.kt)("h2",{id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error"},(0,n.kt)("inlineCode",{parentName:"h2"},":metadata-models:generateDataTemplate")," task fails with ",(0,n.kt)("inlineCode",{parentName:"h2"},"java.nio.file.InvalidPathException: Illegal char <:> at index XX")," or ",(0,n.kt)("inlineCode",{parentName:"h2"},"Caused by: java.lang.IllegalArgumentException: 'other' has different root")," error"),(0,n.kt)("p",null,"This is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/issues/287"},"known issue")," when building the project on Windows due a bug in the Pegasus plugin. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/developers#windows-compatibility"},"Windows Compatibility"),"."),(0,n.kt)("h2",{id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks"},"Various errors related to ",(0,n.kt)("inlineCode",{parentName:"h2"},"generateDataTemplate")," or other ",(0,n.kt)("inlineCode",{parentName:"h2"},"generate")," tasks"),(0,n.kt)("p",null,"As we generate quite a few files from the models, it is possible that old generated files may conflict with new model changes. When this happens, a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"./gradlew clean")," should reosolve the issue."),(0,n.kt)("h2",{id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel"},(0,n.kt)("inlineCode",{parentName:"h2"},"Execution failed for task ':metadata-service:restli-servlet-impl:checkRestModel'")),(0,n.kt)("p",null,"This generally means that an ",(0,n.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"incompatible change")," was introduced to the rest.li API in GMS. You'll need to rebuild the snapshots/IDL by running the following command once"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,n.kt)("h2",{id:"javaioioexception-no-space-left-on-device"},(0,n.kt)("inlineCode",{parentName:"h2"},"java.io.IOException: No space left on device")),(0,n.kt)("p",null,"This means you're running out of space on your disk to build. Please free up some space or try a different disk."),(0,n.kt)("h2",{id:"build-failed-for-task-gradlew-datahub-frontenddist--x-yarntest--x-yarnlint"},(0,n.kt)("inlineCode",{parentName:"h2"},"Build failed")," for task ",(0,n.kt)("inlineCode",{parentName:"h2"},"./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint")),(0,n.kt)("p",null,"This could mean that you need to update your ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," version"))}p.isMDXComponent=!0}}]);