"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5489],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Developing on Metadata Ingestion",sidebar_label:"Developing on Metadata Ingestion",slug:"/metadata-ingestion/developing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/developing.md"},s="Developing on Metadata Ingestion",u={unversionedId:"metadata-ingestion/developing",id:"metadata-ingestion/developing",isDocsHomePage:!1,title:"Developing on Metadata Ingestion",description:"If you just want to use metadata ingestion, check the user-centric guide.",source:"@site/genDocs/metadata-ingestion/developing.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/developing",permalink:"/docs/metadata-ingestion/developing",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/developing.md",tags:[],version:"current",frontMatter:{title:"Developing on Metadata Ingestion",sidebar_label:"Developing on Metadata Ingestion",slug:"/metadata-ingestion/developing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/developing.md"},sidebar:"overviewSidebar",previous:{title:"React Analytics",permalink:"/docs/datahub-web-react/src/app/analytics"},next:{title:"datahub-web-react",permalink:"/docs/datahub-web-react"}},d=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Set up your Python environment",id:"set-up-your-python-environment",children:[],level:3},{value:"Common setup issues",id:"common-setup-issues",children:[],level:3},{value:"Using Plugins in Development",id:"using-plugins-in-development",children:[],level:3}],level:2},{value:"Code layout",id:"code-layout",children:[],level:2},{value:"Contributing",id:"contributing",children:[{value:"Testing",id:"testing",children:[],level:3},{value:"Sanity check code before committing",id:"sanity-check-code-before-committing",children:[],level:3},{value:"Updating golden test files",id:"updating-golden-test-files",children:[],level:3}],level:2}],p={toc:d};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developing-on-metadata-ingestion"},"Developing on Metadata Ingestion"),(0,r.kt)("p",null,"If you just want to use metadata ingestion, check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"user-centric")," guide."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metadata ingestion framework layout",src:n(27987).Z})),(0,r.kt)("p",null,"The architecture of this metadata ingestion framework is heavily inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://gobblin.apache.org/"},"Apache Gobblin")," (also originally a LinkedIn project!). We have a standardized format - the MetadataChangeEvent - and sources and sinks which respectively produce and consume these objects. The sources pull metadata from a variety of data systems, while the sinks are primarily for moving this metadata into DataHub."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Python 3.7+ must be installed in your host environment."),(0,r.kt)("li",{parentName:"ol"},"On MacOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"brew install librdkafka")),(0,r.kt)("li",{parentName:"ol"},"On Debian/Ubuntu: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt install librdkafka-dev python3-dev python3-venv")),(0,r.kt)("li",{parentName:"ol"},"On Fedora (if using LDAP source integration): ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo yum install openldap-devel"))),(0,r.kt)("h3",{id:"set-up-your-python-environment"},"Set up your Python environment"),(0,r.kt)("p",null,"From the repository root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd metadata-ingestion\n../gradlew :metadata-ingestion:installDev\nsource venv/bin/activate\ndatahub version  # should print "version: unavailable (installed via git)"\n')),(0,r.kt)("h3",{id:"common-setup-issues"},"Common setup issues"),(0,r.kt)("p",null,"Common issues (click to expand):"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"datahub command not found with PyPI install"),(0,r.kt)("p",null,"If you've already run the pip install, but running ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," in your command line doesn't work, then there is likely an issue with your PATH setup and Python."),(0,r.kt)("p",null,"The easiest way to circumvent this is to install and run via Python, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 -m datahub")," in place of ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade acryl-datahub\npython3 -m datahub --help\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,'Wheel issues e.g. "Failed building wheel for avro-python3" or "error: invalid command \'bdist_wheel\'"'),(0,r.kt)("p",null,"This means Python's ",(0,r.kt)("inlineCode",{parentName:"p"},"wheel")," is not installed. Try running the following commands and then retry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install --upgrade pip wheel setuptools\npip cache purge\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Failure to install confluent_kafka: \"error: command 'x86_64-linux-gnu-gcc' failed with exit status 1\""),(0,r.kt)("p",null,"This sometimes happens if there's a version mismatch between the Kafka's C library and the Python wrapper library. Try running ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install confluent_kafka==1.5.0")," and then retrying.")),(0,r.kt)("h3",{id:"using-plugins-in-development"},"Using Plugins in Development"),(0,r.kt)("p",null,"The syntax for installing plugins is slightly different in development. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- pip install 'acryl-datahub[bigquery,datahub-rest]'\n+ pip install -e '.[bigquery,datahub-rest]'\n")),(0,r.kt)("h2",{id:"code-layout"},"Code layout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The CLI interface is defined in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/entrypoints.py"},"entrypoints.py"),"."),(0,r.kt)("li",{parentName:"ul"},"The high level interfaces are defined in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api"},"API directory"),"."),(0,r.kt)("li",{parentName:"ul"},"The actual ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source"},"sources")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/sink"},"sinks")," have their own directories. The registry files in those directories import the implementations."),(0,r.kt)("li",{parentName:"ul"},"The metadata models are created using code generation, and eventually live in the ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/datahub/metadata")," directory. However, these files are not checked in and instead are generated at build time. See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/scripts/codegen.sh"},"codegen")," script for details."),(0,r.kt)("li",{parentName:"ul"},"Tests live in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/tests"},(0,r.kt)("inlineCode",{parentName:"a"},"tests"))," directory. They're split between smaller unit tests and larger integration tests.")),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Contributions welcome!"),(0,r.kt)("p",null,"Also take a look at the guide to ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"adding a source"),"."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Follow standard install from source procedure - see above.\n\n# Install, including all dev requirements.\npip install -e '.[dev]'\n\n# For running integration tests, you can use\npip install -e '.[integration-tests]'\n\n# Run unit tests.\npytest -m 'not integration and not slow_integration'\n\n# Run Docker-based integration tests.\npytest -m 'integration'\n\n# Run Docker-based slow integration tests.\npytest -m 'slow_integration'\n")),(0,r.kt)("h3",{id:"sanity-check-code-before-committing"},"Sanity check code before committing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/codegen.sh\n")),(0,r.kt)("p",null,"This will generate some schema related files. These are auto-generated in docker containers. Do not commit these files in source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Assumes: pip install -e '.[dev]' and venv is activated\nblack src/ tests/\nisort src/ tests/\nflake8 src/ tests/\nmypy src/ tests/\n\n# If you want to run only the quicker subtests\npytest -m 'not integration and not slow_integration' -vv\n# Run the full testing suite\npytest -vv\n\n# You can also run these steps via the gradle build:\n../gradlew :metadata-ingestion:lint\n../gradlew :metadata-ingestion:lintFix\n../gradlew :metadata-ingestion:testQuick\n../gradlew :metadata-ingestion:testFull\n../gradlew :metadata-ingestion:check\n# Run all tests in a single file\n../gradlew :metadata-ingestion:testSingle -PtestFile=tests/unit/test_airflow.py\n# Run all tests under tests/unit\n../gradlew :metadata-ingestion:testSingle -PtestFile=tests/unit\n")),(0,r.kt)("h3",{id:"updating-golden-test-files"},"Updating golden test files"),(0,r.kt)("p",null,'If you made some changes that require generating new "golden" data files for use in testing a specific ingestion source, you can run the following to re-generate them:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pytest tests/integration/<source>/<source>.py --update-golden-files\n")),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pytest tests/integration/dbt/test_dbt.py --update-golden-files\n")))}c.isMDXComponent=!0},27987:function(e,t,n){t.Z=n.p+"assets/images/datahub-metadata-ingestion-framework-17ea65cd4913f08cb69942bf3a41eb1d.png"}}]);