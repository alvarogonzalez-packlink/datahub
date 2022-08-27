"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8269],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69134:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={title:"Getting Started",slug:"/api/openapi/openapi-usage-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/openapi/openapi-usage-guide.md"},l="Getting Started",p={unversionedId:"docs/api/openapi/openapi-usage-guide",id:"docs/api/openapi/openapi-usage-guide",isDocsHomePage:!1,title:"Getting Started",description:"Introduction to OpenAPI - What And Why",source:"@site/genDocs/docs/api/openapi/openapi-usage-guide.md",sourceDirName:"docs/api/openapi",slug:"/api/openapi/openapi-usage-guide",permalink:"/docs/api/openapi/openapi-usage-guide",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/openapi/openapi-usage-guide.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/api/openapi/openapi-usage-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/openapi/openapi-usage-guide.md"},sidebar:"overviewSidebar",previous:{title:"Access Token Management",permalink:"/docs/api/graphql/token-management"},next:{title:"Timeline API",permalink:"/docs/dev-guides/timeline"}},u=[{value:"Introduction to OpenAPI - What And Why",id:"introduction-to-openapi---what-and-why",children:[],level:2},{value:"Using DataHub&#39;s OpenAPI - Where and How",id:"using-datahubs-openapi---where-and-how",children:[{value:"Example requests",id:"example-requests",children:[{value:"Curl",id:"curl",children:[{value:"POST",id:"post",children:[],level:5},{value:"GET",id:"get",children:[],level:5},{value:"DELETE",id:"delete",children:[],level:5}],level:4},{value:"Postman Collection",id:"postman-collection",children:[],level:4}],level:3}],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"introduction-to-openapi---what-and-why"},"Introduction to OpenAPI - What And Why"),(0,r.kt)("p",null,"The OpenAPI standard is a widely used documentation and design approach for APIs. Historically, we have published our RESTful APIs\nunder the Rest.li standard that is used internally by LinkedIn that we inherited from the beginning of the project."),(0,r.kt)("p",null,"Rest.li is a very opinionated framework that has not seen wide adoption in the Open Source community, so users are often unfamiliar\nwith the best ways to interact with these endpoints. To make it easier to integrate with DataHub, we are publishing an OpenAPI based set of endpoints."),(0,r.kt)("h2",{id:"using-datahubs-openapi---where-and-how"},"Using DataHub's OpenAPI - Where and How"),(0,r.kt)("p",null,"Currently, the OpenAPI endpoints are isolated to a servlet on GMS and are automatically deployed with a GMS server.\nThe servlet includes auto-generation of an OpenAPI UI, also known as Swagger, which is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"<GMS-server-host>:<GMS-port>/openapi/swagger-ui/index.html"),".\nThis is also exposed through DataHub frontend as a proxy with the same endpoint, but GMS host and port replaced with DataHub frontend's url\nand is available in the top right dropdown under the user profile picture as a link. Note that it is possible to get\nthe raw json or yaml formats of the OpenAPI spec by navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"<baseUrl>/openapi/v3/api-docs")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<baseUrl>/openapi/v3/api-docs.yaml"),".\nThe raw forms can be fed into codegen systems to generate client side code in the language of your choice that support OpenAPI format. We have noticed varying\ndegrees of maturity with different languages in these codegen systems so some may require customizations to be fully compatible."),(0,r.kt)("p",null,"The OpenAPI UI includes explorable schemas for request and response objects that are fully documented. The models used\nin the OpenAPI UI are all autogenerated at build time from the PDL models to JSON Schema compatible Java Models."),(0,r.kt)("p",null,"Programmatic usage of the models can be done through the Java Rest Emitter which includes the generated models. A minimal\nJava project for emitting to the OpenAPI endpoints would need the following dependencies (gradle format):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.acryl:datahub-client:<DATAHUB_CLIENT_VERSION>'\n    implementation 'org.apache.httpcomponents:httpclient:<APACHE_HTTP_CLIENT_VERSION>'\n    implementation 'org.apache.httpcomponents:httpasyncclient:<APACHE_ASYNC_CLIENT_VERSION>'\n}\n")),(0,r.kt)("p",null,"and would construct a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"UpsertAspectRequest"),"s to emit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.datahubproject.openapi.generated.DatasetProperties;\nimport datahub.client.rest.RestEmitter;\nimport datahub.event.UpsertAspectRequest;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.ExecutionException;\n\n\npublic class Main {\n  public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n    RestEmitter emitter = RestEmitter.createWithDefaults();\n\n    List<UpsertAspectRequest> requests = new ArrayList<>();\n    UpsertAspectRequest upsertAspectRequest = UpsertAspectRequest.builder()\n        .entityType("dataset")\n        .entityUrn("urn:li:dataset:(urn:li:dataPlatform:bigquery,my-project.my-other-dataset.user-table,PROD)")\n        .aspect(new DatasetProperties().description("This is the canonical User profile dataset"))\n        .build();\n    UpsertAspectRequest upsertAspectRequest2 = UpsertAspectRequest.builder()\n        .entityType("dataset")\n        .entityUrn("urn:li:dataset:(urn:li:dataPlatform:bigquery,my-project.another-dataset.user-table,PROD)")\n        .aspect(new DatasetProperties().description("This is the canonical User profile dataset 2"))\n        .build();\n    requests.add(upsertAspectRequest);\n    requests.add(upsertAspectRequest2);\n    System.out.println(emitter.emit(requests, null).get());\n    System.exit(0);\n  }\n}\n')),(0,r.kt)("h3",{id:"example-requests"},"Example requests"),(0,r.kt)("h4",{id:"curl"},"Curl"),(0,r.kt)("h5",{id:"post"},"POST"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'localhost:8080/openapi/entities/v1/\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Accept: application/json\' \\\n--header \'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhY3RvclR5cGUiOiJVU0VSIiwiYWN0b3JJZCI6ImRhdGFodWIiLCJ0eXBlIjoiUEVSU09OQUwiLCJ2ZXJzaW9uIjoiMSIsImV4cCI6MTY1MDY2MDY1NSwianRpIjoiM2E4ZDY3ZTItOTM5Yi00NTY3LWE0MjYtZDdlMDA1ZGU3NjJjIiwic3ViIjoiZGF0YWh1YiIsImlzcyI6ImRhdGFodWItbWV0YWRhdGEtc2VydmljZSJ9.pp_vW2u1tiiTT7U0nDF2EQdcayOMB8jatiOA8Je4JJA\' \\\n--data-raw \'[\n    {\n        "aspect": {\n            "__type": "SchemaMetadata",\n            "schemaName": "SampleHdfsSchema",\n            "platform": "urn:li:dataPlatform:platform",\n            "platformSchema": {\n                "__type": "MySqlDDL",\n                "tableSchema": "schema"\n            },\n            "version": 0,\n            "created": {\n                "time": 1621882982738,\n                "actor": "urn:li:corpuser:etl",\n                "impersonator": "urn:li:corpuser:jdoe"\n            },\n            "lastModified": {\n                "time": 1621882982738,\n                "actor": "urn:li:corpuser:etl",\n                "impersonator": "urn:li:corpuser:jdoe"\n            },\n            "hash": "",\n            "fields": [\n                {\n                    "fieldPath": "county_fips_codefg",\n                    "jsonPath": "null",\n                    "nullable": true,\n                    "description": "null",\n                    "type": {\n                        "type": {\n                            "__type": "StringType"\n                        }\n                    },\n                    "nativeDataType": "String()",\n                    "recursive": false\n                },\n                {\n                    "fieldPath": "county_name",\n                    "jsonPath": "null",\n                    "nullable": true,\n                    "description": "null",\n                    "type": {\n                        "type": {\n                            "__type": "StringType"\n                        }\n                    },\n                    "nativeDataType": "String()",\n                    "recursive": false\n                }\n            ]\n        },\n        "entityType": "dataset",\n        "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)"\n    }\n]\'\n')),(0,r.kt)("h5",{id:"get"},"GET"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'localhost:8080/openapi/entities/v1/latest?urns=urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)&aspectNames=schemaMetadata' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhY3RvclR5cGUiOiJVU0VSIiwiYWN0b3JJZCI6ImRhdGFodWIiLCJ0eXBlIjoiUEVSU09OQUwiLCJ2ZXJzaW9uIjoiMSIsImV4cCI6MTY1MDY2MDY1NSwianRpIjoiM2E4ZDY3ZTItOTM5Yi00NTY3LWE0MjYtZDdlMDA1ZGU3NjJjIiwic3ViIjoiZGF0YWh1YiIsImlzcyI6ImRhdGFodWItbWV0YWRhdGEtc2VydmljZSJ9.pp_vW2u1tiiTT7U0nDF2EQdcayOMB8jatiOA8Je4JJA'\n")),(0,r.kt)("h5",{id:"delete"},"DELETE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'localhost:8080/openapi/entities/v1/?urns=urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)&soft=true' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhY3RvclR5cGUiOiJVU0VSIiwiYWN0b3JJZCI6ImRhdGFodWIiLCJ0eXBlIjoiUEVSU09OQUwiLCJ2ZXJzaW9uIjoiMSIsImV4cCI6MTY1MDY2MDY1NSwianRpIjoiM2E4ZDY3ZTItOTM5Yi00NTY3LWE0MjYtZDdlMDA1ZGU3NjJjIiwic3ViIjoiZGF0YWh1YiIsImlzcyI6ImRhdGFodWItbWV0YWRhdGEtc2VydmljZSJ9.pp_vW2u1tiiTT7U0nDF2EQdcayOMB8jatiOA8Je4JJA'\n")),(0,r.kt)("h4",{id:"postman-collection"},"Postman Collection"),(0,r.kt)("p",null,"Collection includes a POST, GET, and DELETE for a single entity with a SchemaMetadata aspect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "info": {\n    "_postman_id": "87b7401c-a5dc-47e4-90b4-90fe876d6c28",\n    "name": "DataHub OpenAPI",\n    "description": "A description",\n    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n  },\n  "item": [\n    {\n      "name": "entities/v1",\n      "item": [\n        {\n          "name": "post Entities 1",\n          "request": {\n            "method": "POST",\n            "header": [\n              {\n                "key": "Content-Type",\n                "value": "application/json"\n              },\n              {\n                "key": "Accept",\n                "value": "application/json"\n              }\n            ],\n            "body": {\n              "mode": "raw",\n              "raw": "[\\n    {\\n        \\"aspect\\": {\\n            \\"__type\\": \\"SchemaMetadata\\",\\n            \\"schemaName\\": \\"SampleHdfsSchema\\",\\n            \\"platform\\": \\"urn:li:dataPlatform:platform\\",\\n            \\"platformSchema\\": {\\n                \\"__type\\": \\"MySqlDDL\\",\\n                \\"tableSchema\\": \\"schema\\"\\n            },\\n            \\"version\\": 0,\\n            \\"created\\": {\\n                \\"time\\": 1621882982738,\\n                \\"actor\\": \\"urn:li:corpuser:etl\\",\\n                \\"impersonator\\": \\"urn:li:corpuser:jdoe\\"\\n            },\\n            \\"lastModified\\": {\\n                \\"time\\": 1621882982738,\\n                \\"actor\\": \\"urn:li:corpuser:etl\\",\\n                \\"impersonator\\": \\"urn:li:corpuser:jdoe\\"\\n            },\\n            \\"hash\\": \\"\\",\\n            \\"fields\\": [\\n                {\\n                    \\"fieldPath\\": \\"county_fips_codefg\\",\\n                    \\"jsonPath\\": \\"null\\",\\n                    \\"nullable\\": true,\\n                    \\"description\\": \\"null\\",\\n                    \\"type\\": {\\n                        \\"type\\": {\\n                            \\"__type\\": \\"StringType\\"\\n                        }\\n                    },\\n                    \\"nativeDataType\\": \\"String()\\",\\n                    \\"recursive\\": false\\n                },\\n                {\\n                    \\"fieldPath\\": \\"county_name\\",\\n                    \\"jsonPath\\": \\"null\\",\\n                    \\"nullable\\": true,\\n                    \\"description\\": \\"null\\",\\n                    \\"type\\": {\\n                        \\"type\\": {\\n                            \\"__type\\": \\"StringType\\"\\n                        }\\n                    },\\n                    \\"nativeDataType\\": \\"String()\\",\\n                    \\"recursive\\": false\\n                }\\n            ]\\n        },\\n        \\"aspectName\\": \\"schemaMetadata\\",\\n        \\"entityType\\": \\"dataset\\",\\n        \\"entityUrn\\": \\"urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)\\"\\n    }\\n]",\n              "options": {\n                "raw": {\n                  "language": "json"\n                }\n              }\n            },\n            "url": {\n              "raw": "{{baseUrl}}/openapi/entities/v1/",\n              "host": [\n                "{{baseUrl}}"\n              ],\n              "path": [\n                "openapi",\n                "entities",\n                "v1",\n                ""\n              ]\n            }\n          },\n          "response": [\n            {\n              "name": "OK",\n              "originalRequest": {\n                "method": "POST",\n                "header": [],\n                "body": {\n                  "mode": "raw",\n                  "raw": "[\\n  {\\n    \\"aspect\\": {\\n      \\"value\\": \\"<Error: Too many levels of nesting to fake this schema>\\"\\n    },\\n    \\"aspectName\\": \\"aliquip ipsum tempor\\",\\n    \\"entityType\\": \\"ut est\\",\\n    \\"entityUrn\\": \\"enim in nulla\\",\\n    \\"entityKeyAspect\\": {\\n      \\"value\\": \\"<Error: Too many levels of nesting to fake this schema>\\"\\n    }\\n  },\\n  {\\n    \\"aspect\\": {\\n      \\"value\\": \\"<Error: Too many levels of nesting to fake this schema>\\"\\n    },\\n    \\"aspectName\\": \\"ipsum id\\",\\n    \\"entityType\\": \\"deser\\",\\n    \\"entityUrn\\": \\"aliqua sit\\",\\n    \\"entityKeyAspect\\": {\\n      \\"value\\": \\"<Error: Too many levels of nesting to fake this schema>\\"\\n    }\\n  }\\n]",\n                  "options": {\n                    "raw": {\n                      "language": "json"\n                    }\n                  }\n                },\n                "url": {\n                  "raw": "{{baseUrl}}/entities/v1/",\n                  "host": [\n                    "{{baseUrl}}"\n                  ],\n                  "path": [\n                    "entities",\n                    "v1",\n                    ""\n                  ]\n                }\n              },\n              "status": "OK",\n              "code": 200,\n              "_postman_previewlanguage": "json",\n              "header": [\n                {\n                  "key": "Content-Type",\n                  "value": "application/json"\n                }\n              ],\n              "cookie": [],\n              "body": "[\\n  \\"c\\",\\n  \\"labore dolor exercitation in\\"\\n]"\n            }\n          ]\n        },\n        {\n          "name": "delete Entities",\n          "request": {\n            "method": "DELETE",\n            "header": [\n              {\n                "key": "Accept",\n                "value": "application/json"\n              }\n            ],\n            "url": {\n              "raw": "{{baseUrl}}/openapi/entities/v1/?urns=urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)&soft=true",\n              "host": [\n                "{{baseUrl}}"\n              ],\n              "path": [\n                "openapi",\n                "entities",\n                "v1",\n                ""\n              ],\n              "query": [\n                {\n                  "key": "urns",\n                  "value": "urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)",\n                  "description": "(Required) A list of raw urn strings, only supports a single entity type per request."\n                },\n                {\n                  "key": "urns",\n                  "value": "labore dolor exercitation in",\n                  "description": "(Required) A list of raw urn strings, only supports a single entity type per request.",\n                  "disabled": true\n                },\n                {\n                  "key": "soft",\n                  "value": "true",\n                  "description": "Determines whether the delete will be soft or hard, defaults to true for soft delete"\n                }\n              ]\n            }\n          },\n          "response": [\n            {\n              "name": "OK",\n              "originalRequest": {\n                "method": "DELETE",\n                "header": [],\n                "url": {\n                  "raw": "{{baseUrl}}/entities/v1/?urns=urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)&soft=true",\n                  "host": [\n                    "{{baseUrl}}"\n                  ],\n                  "path": [\n                    "entities",\n                    "v1",\n                    ""\n                  ],\n                  "query": [\n                    {\n                      "key": "urns",\n                      "value": "urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)"\n                    },\n                    {\n                      "key": "urns",\n                      "value": "officia occaecat elit dolor",\n                      "disabled": true\n                    },\n                    {\n                      "key": "soft",\n                      "value": "true"\n                    }\n                  ]\n                }\n              },\n              "status": "OK",\n              "code": 200,\n              "_postman_previewlanguage": "json",\n              "header": [\n                {\n                  "key": "Content-Type",\n                  "value": "application/json"\n                }\n              ],\n              "cookie": [],\n              "body": "[\\n    {\\n        \\"rowsRolledBack\\": [\\n            {\\n                \\"urn\\": \\"urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)\\"\\n            }\\n        ],\\n        \\"rowsDeletedFromEntityDeletion\\": 1\\n    }\\n]"\n            }\n          ]\n        },\n        {\n          "name": "get Entities",\n          "protocolProfileBehavior": {\n            "disableUrlEncoding": false\n          },\n          "request": {\n            "method": "GET",\n            "header": [\n              {\n                "key": "Accept",\n                "value": "application/json"\n              }\n            ],\n            "url": {\n              "raw": "{{baseUrl}}/openapi/entities/v1/latest?urns=urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)&aspectNames=schemaMetadata",\n              "host": [\n                "{{baseUrl}}"\n              ],\n              "path": [\n                "openapi",\n                "entities",\n                "v1",\n                "latest"\n              ],\n              "query": [\n                {\n                  "key": "urns",\n                  "value": "urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)",\n                  "description": "(Required) A list of raw urn strings, only supports a single entity type per request."\n                },\n                {\n                  "key": "urns",\n                  "value": "labore dolor exercitation in",\n                  "description": "(Required) A list of raw urn strings, only supports a single entity type per request.",\n                  "disabled": true\n                },\n                {\n                  "key": "aspectNames",\n                  "value": "schemaMetadata",\n                  "description": "The list of aspect names to retrieve"\n                },\n                {\n                  "key": "aspectNames",\n                  "value": "labore dolor exercitation in",\n                  "description": "The list of aspect names to retrieve",\n                  "disabled": true\n                }\n              ]\n            }\n          },\n          "response": [\n            {\n              "name": "OK",\n              "originalRequest": {\n                "method": "GET",\n                "header": [],\n                "url": {\n                  "raw": "{{baseUrl}}/entities/v1/latest?urns=urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)&aspectNames=schemaMetadata",\n                  "host": [\n                    "{{baseUrl}}"\n                  ],\n                  "path": [\n                    "entities",\n                    "v1",\n                    "latest"\n                  ],\n                  "query": [\n                    {\n                      "key": "urns",\n                      "value": "non exercitation occaecat",\n                      "disabled": true\n                    },\n                    {\n                      "key": "urns",\n                      "value": "urn:li:dataset:(urn:li:dataPlatform:platform,testSchemaIngest,PROD)"\n                    },\n                    {\n                      "key": "aspectNames",\n                      "value": "non exercitation occaecat",\n                      "disabled": true\n                    },\n                    {\n                      "key": "aspectNames",\n                      "value": "schemaMetadata"\n                    }\n                  ]\n                }\n              },\n              "status": "OK",\n              "code": 200,\n              "_postman_previewlanguage": "json",\n              "header": [\n                {\n                  "key": "Content-Type",\n                  "value": "application/json"\n                }\n              ],\n              "cookie": [],\n              "body": "{\\n    \\"responses\\": {\\n        \\"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)\\": {\\n            \\"entityName\\": \\"dataset\\",\\n            \\"urn\\": \\"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)\\",\\n            \\"aspects\\": {\\n                \\"datasetKey\\": {\\n                    \\"name\\": \\"datasetKey\\",\\n                    \\"type\\": \\"VERSIONED\\",\\n                    \\"version\\": 0,\\n                    \\"value\\": {\\n                        \\"__type\\": \\"DatasetKey\\",\\n                        \\"platform\\": \\"urn:li:dataPlatform:hive\\",\\n                        \\"name\\": \\"SampleHiveDataset\\",\\n                        \\"origin\\": \\"PROD\\"\\n                    },\\n                    \\"created\\": {\\n                        \\"time\\": 1650657843351,\\n                        \\"actor\\": \\"urn:li:corpuser:__datahub_system\\"\\n                    }\\n                },\\n                \\"schemaMetadata\\": {\\n                    \\"name\\": \\"schemaMetadata\\",\\n                    \\"type\\": \\"VERSIONED\\",\\n                    \\"version\\": 0,\\n                    \\"value\\": {\\n                        \\"__type\\": \\"SchemaMetadata\\",\\n                        \\"schemaName\\": \\"SampleHiveSchema\\",\\n                        \\"platform\\": \\"urn:li:dataPlatform:hive\\",\\n                        \\"version\\": 0,\\n                        \\"created\\": {\\n                            \\"time\\": 1581407189000,\\n                            \\"actor\\": \\"urn:li:corpuser:jdoe\\"\\n                        },\\n                        \\"lastModified\\": {\\n                            \\"time\\": 1581407189000,\\n                            \\"actor\\": \\"urn:li:corpuser:jdoe\\"\\n                        },\\n                        \\"hash\\": \\"\\",\\n                        \\"platformSchema\\": {\\n                            \\"__type\\": \\"KafkaSchema\\",\\n                            \\"documentSchema\\": \\"{\\\\\\"type\\\\\\":\\\\\\"record\\\\\\",\\\\\\"name\\\\\\":\\\\\\"SampleHiveSchema\\\\\\",\\\\\\"namespace\\\\\\":\\\\\\"com.linkedin.dataset\\\\\\",\\\\\\"doc\\\\\\":\\\\\\"Sample Hive dataset\\\\\\",\\\\\\"fields\\\\\\":[{\\\\\\"name\\\\\\":\\\\\\"field_foo\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"string\\\\\\"]},{\\\\\\"name\\\\\\":\\\\\\"field_bar\\\\\\",\\\\\\"type\\\\\\":[\\\\\\"boolean\\\\\\"]}]}\\"\\n                        },\\n                        \\"fields\\": [\\n                            {\\n                                \\"fieldPath\\": \\"field_foo\\",\\n                                \\"nullable\\": false,\\n                                \\"description\\": \\"Foo field description\\",\\n                                \\"type\\": {\\n                                    \\"type\\": {\\n                                        \\"__type\\": \\"BooleanType\\"\\n                                    }\\n                                },\\n                                \\"nativeDataType\\": \\"varchar(100)\\",\\n                                \\"recursive\\": false,\\n                                \\"isPartOfKey\\": true\\n                            },\\n                            {\\n                                \\"fieldPath\\": \\"field_bar\\",\\n                                \\"nullable\\": false,\\n                                \\"description\\": \\"Bar field description\\",\\n                                \\"type\\": {\\n                                    \\"type\\": {\\n                                        \\"__type\\": \\"BooleanType\\"\\n                                    }\\n                                },\\n                                \\"nativeDataType\\": \\"boolean\\",\\n                                \\"recursive\\": false,\\n                                \\"isPartOfKey\\": false\\n                            }\\n                        ]\\n                    },\\n                    \\"created\\": {\\n                        \\"time\\": 1650610810000,\\n                        \\"actor\\": \\"urn:li:corpuser:UNKNOWN\\"\\n                    }\\n                }\\n            }\\n        }\\n    }\\n}"\n            }\n          ]\n        }\n      ],\n      "auth": {\n        "type": "bearer",\n        "bearer": [\n          {\n            "key": "token",\n            "value": "{{token}}",\n            "type": "string"\n          }\n        ]\n      },\n      "event": [\n        {\n          "listen": "prerequest",\n          "script": {\n            "type": "text/javascript",\n            "exec": [\n              ""\n            ]\n          }\n        },\n        {\n          "listen": "test",\n          "script": {\n            "type": "text/javascript",\n            "exec": [\n              ""\n            ]\n          }\n        }\n      ]\n    }\n  ],\n  "event": [\n    {\n      "listen": "prerequest",\n      "script": {\n        "type": "text/javascript",\n        "exec": [\n          ""\n        ]\n      }\n    },\n    {\n      "listen": "test",\n      "script": {\n        "type": "text/javascript",\n        "exec": [\n          ""\n        ]\n      }\n    }\n  ],\n  "variable": [\n    {\n      "key": "baseUrl",\n      "value": "localhost:8080",\n      "type": "string"\n    },\n    {\n      "key": "token",\n      "value": "eyJhbGciOiJIUzI1NiJ9.eyJhY3RvclR5cGUiOiJVU0VSIiwiYWN0b3JJZCI6ImRhdGFodWIiLCJ0eXBlIjoiUEVSU09OQUwiLCJ2ZXJzaW9uIjoiMSIsImV4cCI6MTY1MDY2MDY1NSwianRpIjoiM2E4ZDY3ZTItOTM5Yi00NTY3LWE0MjYtZDdlMDA1ZGU3NjJjIiwic3ViIjoiZGF0YWh1YiIsImlzcyI6ImRhdGFodWItbWV0YWRhdGEtc2VydmljZSJ9.pp_vW2u1tiiTT7U0nDF2EQdcayOMB8jatiOA8Je4JJA",\n      "type": "default"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);