"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||p;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},80323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Structured Properties - DataHub OpenAPI v2 Guide",slug:"/api/openapi/openapi-structured-properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/openapi/openapi-structured-properties.md"},l="Structured Properties - DataHub OpenAPI v2 Guide",u={unversionedId:"docs/api/openapi/openapi-structured-properties",id:"docs/api/openapi/openapi-structured-properties",title:"Structured Properties - DataHub OpenAPI v2 Guide",description:"This guides walks through the process of creating and using a Structured Property using the v2 version",source:"@site/genDocs/docs/api/openapi/openapi-structured-properties.md",sourceDirName:"docs/api/openapi",slug:"/api/openapi/openapi-structured-properties",permalink:"/docs/next/api/openapi/openapi-structured-properties",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/openapi/openapi-structured-properties.md",tags:[],version:"current",frontMatter:{title:"Structured Properties - DataHub OpenAPI v2 Guide",slug:"/api/openapi/openapi-structured-properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/openapi/openapi-structured-properties.md"},sidebar:"overviewSidebar",previous:{title:"OpenAPI Guide",permalink:"/docs/next/api/openapi/openapi-usage-guide"},next:{title:"Timeline API",permalink:"/docs/next/dev-guides/timeline"}},s={},d=[{value:"Structured Property Definition",id:"structured-property-definition",level:2},{value:"Create Property Definition",id:"create-property-definition",level:3},{value:"Read Property Definition",id:"read-property-definition",level:3},{value:"Delete Property Definition",id:"delete-property-definition",level:3},{value:"Soft Delete",id:"soft-delete",level:4},{value:"Hard Delete",id:"hard-delete",level:4},{value:"Applying Structured Properties",id:"applying-structured-properties",level:2},{value:"Set Structured Property Values",id:"set-structured-property-values",level:3},{value:"Patch Structured Property Value",id:"patch-structured-property-value",level:3},{value:"Remove Structured Property Value",id:"remove-structured-property-value",level:4},{value:"Add Structured Property Value",id:"add-structured-property-value",level:4}],c={toc:d},y="wrapper";function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(y,p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"structured-properties---datahub-openapi-v2-guide"},"Structured Properties - DataHub OpenAPI v2 Guide"),(0,n.kt)("p",null,"This guides walks through the process of creating and using a Structured Property using the ",(0,n.kt)("inlineCode",{parentName:"p"},"v2")," version\nof the DataHub OpenAPI implementation. Note that this refers to DataHub's OpenAPI version and not the version of OpenAPI itself."),(0,n.kt)("p",null,"Requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"curl"),(0,n.kt)("li",{parentName:"ul"},"jq")),(0,n.kt)("h2",{id:"structured-property-definition"},"Structured Property Definition"),(0,n.kt)("p",null,"Before a structured property can be added to an entity it must first be defined. Here is an example\nstructured property being created against a local quickstart instance."),(0,n.kt)("h3",{id:"create-property-definition"},"Create Property Definition"),(0,n.kt)("p",null,"Example Request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X \'POST\' -v \\\n  \'http://localhost:8080/openapi/v2/entity/structuredProperty/urn%3Ali%3AstructuredProperty%3Amy.test.MyProperty01/propertyDefinition\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "qualifiedName": "my.test.MyProperty01",\n    "displayName": "MyProperty01",\n    "valueType": "urn:li:dataType:datahub.string",\n    "allowedValues": [\n        {\n            "value": {"string": "foo"},\n            "description": "test foo value"\n        },\n        {\n            "value": {"string": "bar"},\n            "description": "test bar value"\n        }\n    ],\n    "cardinality": "SINGLE",\n    "entityTypes": [\n        "urn:li:entityType:datahub.dataset"\n    ],\n    "description": "test description"\n}\' | jq\n')),(0,n.kt)("h3",{id:"read-property-definition"},"Read Property Definition"),(0,n.kt)("p",null,"Example Request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X 'GET' -v \\\n  'http://localhost:8080/openapi/v2/entity/structuredProperty/urn%3Ali%3AstructuredProperty%3Amy.test.MyProperty01/propertyDefinition' \\\n  -H 'accept: application/json' | jq\n")),(0,n.kt)("p",null,"Example Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": {\n    "allowedValues": [\n      {\n        "value": {\n          "string": "foo"\n        },\n        "description": "test foo value"\n      },\n      {\n        "value": {\n          "string": "bar"\n        },\n        "description": "test bar value"\n      }\n    ],\n    "qualifiedName": "my.test.MyProperty01",\n    "displayName": "MyProperty01",\n    "valueType": "urn:li:dataType:datahub.string",\n    "description": "test description",\n    "entityTypes": [\n      "urn:li:entityType:datahub.dataset"\n    ],\n    "cardinality": "SINGLE"\n  }\n}\n')),(0,n.kt)("h3",{id:"delete-property-definition"},"Delete Property Definition"),(0,n.kt)("p",null,"There are two types of deletion present in DataHub: ",(0,n.kt)("inlineCode",{parentName:"p"},"hard")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," delete. As of the current release only the ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," delete\nis supported for Structured Properties. See the subsections below for more details."),(0,n.kt)("h4",{id:"soft-delete"},"Soft Delete"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," deleted Structured Property does not remove any underlying data on the Structured Property entity\nor the Structured Property's values written to other entities. The ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," delete is 100% reversible with zero data loss.\nWhen a Structured Property is ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," deleted, a few operations are not available."),(0,n.kt)("p",null,"Structured Property Soft Delete Effects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Entities with a ",(0,n.kt)("inlineCode",{parentName:"li"},"soft")," deleted Structured Property value will not return the ",(0,n.kt)("inlineCode",{parentName:"li"},"soft")," deleted properties"),(0,n.kt)("li",{parentName:"ul"},"Updates to a ",(0,n.kt)("inlineCode",{parentName:"li"},"soft")," deleted Structured Property's definition are denied"),(0,n.kt)("li",{parentName:"ul"},"Adding a ",(0,n.kt)("inlineCode",{parentName:"li"},"soft")," deleted Structured Property's value to an entity is denied"),(0,n.kt)("li",{parentName:"ul"},"Search filters using a ",(0,n.kt)("inlineCode",{parentName:"li"},"soft")," deleted Structured Property will be denied")),(0,n.kt)("p",null,"The following command will ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," delete the test property ",(0,n.kt)("inlineCode",{parentName:"p"},"MyProperty01")," created in this guide by writing\nto the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," aspect."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X 'POST' \\\n  'http://localhost:8080/openapi/v2/entity/structuredProperty/urn%3Ali%3AstructuredProperty%3Amy.test.MyProperty01/status?systemMetadata=false' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n\"removed\": true\n}' | jq\n")),(0,n.kt)("p",null,"Removing the ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," delete from the Structured Property can be done by either ",(0,n.kt)("inlineCode",{parentName:"p"},"hard")," deleting the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," aspect or\nchanging the ",(0,n.kt)("inlineCode",{parentName:"p"},"removed")," boolean to `false."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X 'POST' \\\n  'http://localhost:8080/openapi/v2/entity/structuredProperty/urn%3Ali%3AstructuredProperty%3Amy.test.MyProperty01/status?systemMetadata=false' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n\"removed\": false\n}' | jq\n")),(0,n.kt)("h4",{id:"hard-delete"},"Hard Delete"),(0,n.kt)("p",null,"\u26a0 ",(0,n.kt)("strong",{parentName:"p"},"Not Implemented")," \u26a0"),(0,n.kt)("h2",{id:"applying-structured-properties"},"Applying Structured Properties"),(0,n.kt)("p",null,"Structured Properties can now be added to entities which have the ",(0,n.kt)("inlineCode",{parentName:"p"},"structuredProperties")," as aspect. In the following\nexample we'll attach and remove properties to an example dataset entity with urn ",(0,n.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"),"."),(0,n.kt)("h3",{id:"set-structured-property-values"},"Set Structured Property Values"),(0,n.kt)("p",null,"This will set/replace all structured properties on the entity. See ",(0,n.kt)("inlineCode",{parentName:"p"},"PATCH")," operations to add/remove a single property."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X \'POST\' -v \\\n  \'http://localhost:8080/openapi/v2/entity/dataset/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CSampleHiveDataset%2CPROD%29/structuredProperties\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "properties": [\n    {\n      "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty01",\n      "values": [\n        {"string": "foo"}\n      ]\n    }\n  ]\n}\' | jq\n')),(0,n.kt)("h3",{id:"patch-structured-property-value"},"Patch Structured Property Value"),(0,n.kt)("p",null,"For this example, we'll extend create a second structured property and apply both properties to the same\ndataset used previously. After this your system should include both ",(0,n.kt)("inlineCode",{parentName:"p"},"my.test.MyProperty01")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"my.test.MyProperty02"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X \'POST\' -v \\\n  \'http://localhost:8080/openapi/v2/entity/structuredProperty/urn%3Ali%3AstructuredProperty%3Amy.test.MyProperty02/propertyDefinition\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "qualifiedName": "my.test.MyProperty02",\n    "displayName": "MyProperty02",\n    "valueType": "urn:li:dataType:datahub.string",\n    "allowedValues": [\n        {\n            "value": {"string": "foo2"},\n            "description": "test foo2 value"\n        },\n        {\n            "value": {"string": "bar2"},\n            "description": "test bar2 value"\n        }\n    ],\n    "cardinality": "SINGLE",\n    "entityTypes": [\n        "urn:li:entityType:datahub.dataset"\n    ]\n}\' | jq\n')),(0,n.kt)("p",null,"This command will attach one of each of the two properties to our test dataset ",(0,n.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X \'POST\' -v \\\n  \'http://localhost:8080/openapi/v2/entity/dataset/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CSampleHiveDataset%2CPROD%29/structuredProperties\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "properties": [\n    {\n      "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty01",\n      "values": [\n        {"string": "foo"}\n      ]\n    },\n    {\n      "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty02",\n      "values": [\n        {"string": "bar2"}\n      ]\n    }\n  ]\n}\' | jq\n')),(0,n.kt)("h4",{id:"remove-structured-property-value"},"Remove Structured Property Value"),(0,n.kt)("p",null,"The expected state of our test dataset include 2 structured properties. We'd like to remove the first one and preserve\nthe second property."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X \'PATCH\' -v \\\n  \'http://localhost:8080/openapi/v2/entity/dataset/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CSampleHiveDataset%2CPROD%29/structuredProperties\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json-patch+json\' \\\n  -d \'{\n        "patch": [\n            {\n                "op": "remove",\n                "path": "/properties/urn:li:structuredProperty:my.test.MyProperty01"\n            }\n        ],\n        "arrayPrimaryKeys": {\n            "properties": [\n                "propertyUrn"\n            ]\n        }\n      }\' | jq\n')),(0,n.kt)("p",null,"The response will show that the expected property has been removed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n  "aspects": {\n    "structuredProperties": {\n      "value": {\n        "properties": [\n          {\n            "values": [\n              {\n                "string": "bar2"\n              }\n            ],\n            "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty02"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,n.kt)("h4",{id:"add-structured-property-value"},"Add Structured Property Value"),(0,n.kt)("p",null,"In this example, we'll add the property back with a different value, preserving the existing property."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X \'PATCH\' -v \\\n  \'http://localhost:8080/openapi/v2/entity/dataset/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CSampleHiveDataset%2CPROD%29/structuredProperties\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json-patch+json\' \\\n  -d \'{\n        "patch": [\n            {\n                "op": "add",\n                "path": "/properties/urn:li:structuredProperty:my.test.MyProperty01",\n                "value": {\n                    "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty01",\n                    "values": [\n                        {\n                            "string": "bar"\n                        }\n                    ]\n                }\n            }\n        ],\n        "arrayPrimaryKeys": {\n            "properties": [\n                "propertyUrn"\n            ]\n        }\n    }\' | jq\n')),(0,n.kt)("p",null,"The response shows that the property was re-added with the new value ",(0,n.kt)("inlineCode",{parentName:"p"},"bar")," instead of the previous value ",(0,n.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n    "aspects": {\n        "structuredProperties": {\n            "value": {\n                "properties": [\n                    {\n                        "values": [\n                            {\n                                "string": "bar2"\n                            }\n                        ],\n                        "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty02"\n                    },\n                    {\n                        "values": [\n                            {\n                                "string": "bar"\n                            }\n                        ],\n                        "propertyUrn": "urn:li:structuredProperty:my.test.MyProperty01"\n                    }\n                ]\n            }\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);