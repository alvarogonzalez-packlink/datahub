"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[89576],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(t),c=s,f=p["".concat(l,".").concat(c)]||p[c]||d[c]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(87462),s=(t(67294),t(3905));const r={sidebar_position:17,title:"Assertion",slug:"/generated/metamodel/entities/assertion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/assertion.md"},i="Assertion",o={unversionedId:"docs/generated/metamodel/entities/assertion",id:"version-0.11.0/docs/generated/metamodel/entities/assertion",title:"Assertion",description:"Assertion entity represents a data quality rule applied on dataset.",source:"@site/versioned_docs/version-0.11.0/docs/generated/metamodel/entities/assertion.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/assertion",permalink:"/docs/0.11.0/generated/metamodel/entities/assertion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/assertion.md",tags:[],version:"0.11.0",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"Assertion",slug:"/generated/metamodel/entities/assertion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/assertion.md"},sidebar:"overviewSidebar",previous:{title:"GlossaryNode",permalink:"/docs/0.11.0/generated/metamodel/entities/glossarynode"},next:{title:"MlModel",permalink:"/docs/0.11.0/generated/metamodel/entities/mlmodel"}},l={},m=[{value:"Identity",id:"identity",level:2},{value:"Important Capabilities",id:"important-capabilities",level:2},{value:"Assertion Info",id:"assertion-info",level:3},{value:"Assertion Run Events",id:"assertion-run-events",level:3},{value:"Aspects",id:"aspects",level:2},{value:"assertionInfo",id:"assertioninfo",level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",level:3},{value:"status",id:"status",level:3},{value:"assertionRunEvent (Timeseries)",id:"assertionrunevent-timeseries",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:m},p="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assertion"},"Assertion"),(0,s.kt)("p",null,"Assertion entity represents a data quality rule applied on dataset.",(0,s.kt)("br",{parentName:"p"}),"\n","In future, it can evolve to span across Datasets, Flows (Pipelines), Models, Features etc."),(0,s.kt)("h2",{id:"identity"},"Identity"),(0,s.kt)("p",null,"An ",(0,s.kt)("strong",{parentName:"p"},"Assertion")," is identified by globally unique identifier which remains constant between runs of the assertion. For each source of assertion information, it is expected that the logic required to generate the stable guid will differ. For example, a unique GUID is generated from each assertion  from Great Expectations based on a combination of the assertion name along with its parameters. "),(0,s.kt)("h2",{id:"important-capabilities"},"Important Capabilities"),(0,s.kt)("h3",{id:"assertion-info"},"Assertion Info"),(0,s.kt)("p",null,"Type and Details of assertions set on a Dataset (Table). "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Scope"),": Column, Rows, Schema\n",(0,s.kt)("strong",{parentName:"p"},"Inputs"),": Column(s)\n",(0,s.kt)("strong",{parentName:"p"},"Aggregation"),": Max, Min, etc\n",(0,s.kt)("strong",{parentName:"p"},"Operator"),": Greater Than, Not null, etc\n",(0,s.kt)("strong",{parentName:"p"},"Parameters"),": Value, Min Value, Max Value "),(0,s.kt)("h3",{id:"assertion-run-events"},"Assertion Run Events"),(0,s.kt)("p",null,"Evaluation status and results for an assertion tracked over time."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Python SDK: Emit assertion info and results for dataset "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/data_quality_mcpw_rest.py\nimport json\nimport time\n\nimport datahub.emitter.mce_builder as builder\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.metadata.com.linkedin.pegasus2avro.assertion import (\n    AssertionInfo,\n    AssertionResult,\n    AssertionResultType,\n    AssertionRunEvent,\n    AssertionRunStatus,\n    AssertionStdAggregation,\n    AssertionStdOperator,\n    AssertionStdParameter,\n    AssertionStdParameters,\n    AssertionStdParameterType,\n    AssertionType,\n    DatasetAssertionInfo,\n    DatasetAssertionScope,\n)\nfrom datahub.metadata.com.linkedin.pegasus2avro.common import DataPlatformInstance\nfrom datahub.metadata.com.linkedin.pegasus2avro.dataset import DatasetProperties\nfrom datahub.metadata.com.linkedin.pegasus2avro.timeseries import PartitionSpec\n\n\ndef datasetUrn(tbl: str) -> str:\n    return builder.make_dataset_urn("postgres", tbl)\n\n\ndef fldUrn(tbl: str, fld: str) -> str:\n    return f"urn:li:schemaField:({datasetUrn(tbl)}, {fld})"\n\n\ndef assertionUrn(info: AssertionInfo) -> str:\n    return "urn:li:assertion:432475190cc846f2894b5b3aa4d55af2"\n\n\ndef emitAssertionResult(assertionResult: AssertionRunEvent) -> None:\n    dataset_assertionRunEvent_mcp = MetadataChangeProposalWrapper(\n        entityUrn=assertionResult.assertionUrn,\n        aspect=assertionResult,\n    )\n\n    # Emit BatchAssertion Result! (timeseries aspect)\n    emitter.emit_mcp(dataset_assertionRunEvent_mcp)\n\n\n# Create an emitter to the GMS REST API.\nemitter = DatahubRestEmitter("http://localhost:8080")\n\ndatasetProperties = DatasetProperties(\n    name="bazTable",\n)\n# Construct a MetadataChangeProposalWrapper object for dataset\ndataset_mcp = MetadataChangeProposalWrapper(\n    entityUrn=datasetUrn("bazTable"),\n    aspect=datasetProperties,\n)\n\n# Emit Dataset entity properties aspect! (Skip if dataset is already present)\nemitter.emit_mcp(dataset_mcp)\n\n# Construct an assertion object.\nassertion_maxVal = AssertionInfo(\n    type=AssertionType.DATASET,\n    datasetAssertion=DatasetAssertionInfo(\n        scope=DatasetAssertionScope.DATASET_COLUMN,\n        operator=AssertionStdOperator.BETWEEN,\n        nativeType="expect_column_max_to_be_between",\n        aggregation=AssertionStdAggregation.MAX,\n        fields=[fldUrn("bazTable", "col1")],\n        dataset=datasetUrn("bazTable"),\n        nativeParameters={"max_value": "99", "min_value": "89"},\n        parameters=AssertionStdParameters(\n            minValue=AssertionStdParameter(\n                type=AssertionStdParameterType.NUMBER, value="89"\n            ),\n            maxValue=AssertionStdParameter(\n                type=AssertionStdParameterType.NUMBER, value="99"\n            ),\n        ),\n    ),\n    customProperties={"suite_name": "demo_suite"},\n)\n\n# Construct a MetadataChangeProposalWrapper object.\nassertion_maxVal_mcp = MetadataChangeProposalWrapper(\n    entityUrn=assertionUrn(assertion_maxVal),\n    aspect=assertion_maxVal,\n)\n\n# Emit Assertion entity info aspect!\nemitter.emit_mcp(assertion_maxVal_mcp)\n\n# Construct an assertion platform object.\nassertion_dataPlatformInstance = DataPlatformInstance(\n    platform=builder.make_data_platform_urn("great-expectations")\n)\n\n# Construct a MetadataChangeProposalWrapper object for assertion platform\nassertion_dataPlatformInstance_mcp = MetadataChangeProposalWrapper(\n    entityUrn=assertionUrn(assertion_maxVal),\n    aspect=assertion_dataPlatformInstance,\n)\n# Emit Assertion entity platform aspect!\nemitter.emit(assertion_dataPlatformInstance_mcp)\n\n\n# Construct batch assertion result object for partition 1 batch\nassertionResult_maxVal_batch_partition1 = AssertionRunEvent(\n    timestampMillis=int(time.time() * 1000),\n    assertionUrn=assertionUrn(assertion_maxVal),\n    asserteeUrn=datasetUrn("bazTable"),\n    partitionSpec=PartitionSpec(partition=json.dumps([{"country": "IN"}])),\n    runId="uuid1",\n    status=AssertionRunStatus.COMPLETE,\n    result=AssertionResult(\n        type=AssertionResultType.SUCCESS,\n        externalUrl="http://example.com/uuid1",\n        actualAggValue=90,\n    ),\n)\n\nemitAssertionResult(\n    assertionResult_maxVal_batch_partition1,\n)\n\n# Construct batch assertion result object for partition 2 batch\nassertionResult_maxVal_batch_partition2 = AssertionRunEvent(\n    timestampMillis=int(time.time() * 1000),\n    assertionUrn=assertionUrn(assertion_maxVal),\n    asserteeUrn=datasetUrn("bazTable"),\n    partitionSpec=PartitionSpec(partition=json.dumps([{"country": "US"}])),\n    runId="uuid1",\n    status=AssertionRunStatus.COMPLETE,\n    result=AssertionResult(\n        type=AssertionResultType.FAILURE,\n        externalUrl="http://example.com/uuid1",\n        actualAggValue=101,\n    ),\n)\n\nemitAssertionResult(\n    assertionResult_maxVal_batch_partition2,\n)\n\n# Construct batch assertion result object for full table batch.\nassertionResult_maxVal_batch_fulltable = AssertionRunEvent(\n    timestampMillis=int(time.time() * 1000),\n    assertionUrn=assertionUrn(assertion_maxVal),\n    asserteeUrn=datasetUrn("bazTable"),\n    runId="uuid1",\n    status=AssertionRunStatus.COMPLETE,\n    result=AssertionResult(\n        type=AssertionResultType.SUCCESS,\n        externalUrl="http://example.com/uuid1",\n        actualAggValue=93,\n    ),\n)\n\nemitAssertionResult(\n    assertionResult_maxVal_batch_fulltable,\n)\n\n'))),(0,s.kt)("h2",{id:"aspects"},"Aspects"),(0,s.kt)("h3",{id:"assertioninfo"},"assertionInfo"),(0,s.kt)("p",null,"Information about an assertion"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "assertionInfo"\n  },\n  "name": "AssertionInfo",\n  "namespace": "com.linkedin.assertion",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalUrl",\n      "default": null,\n      "doc": "URL where the reference exist"\n    },\n    {\n      "type": {\n        "type": "enum",\n        "name": "AssertionType",\n        "namespace": "com.linkedin.assertion",\n        "symbols": [\n          "DATASET"\n        ]\n      },\n      "name": "type",\n      "doc": "Type of assertion. Assertion types can evolve to span Datasets, Flows (Pipelines), Models, Features etc."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "DatasetAssertionInfo",\n          "namespace": "com.linkedin.assertion",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "dataset"\n                ],\n                "name": "Asserts"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "dataset",\n              "doc": "The dataset targeted by this assertion."\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "DATASET_COLUMN": "This assertion applies to dataset columns",\n                  "DATASET_ROWS": "This assertion applies to entire rows of the dataset",\n                  "DATASET_SCHEMA": "This assertion applies to the schema of the dataset",\n                  "UNKNOWN": "The scope of the assertion is unknown"\n                },\n                "name": "DatasetAssertionScope",\n                "namespace": "com.linkedin.assertion",\n                "symbols": [\n                  "DATASET_COLUMN",\n                  "DATASET_ROWS",\n                  "DATASET_SCHEMA",\n                  "UNKNOWN"\n                ]\n              },\n              "name": "scope",\n              "doc": "Scope of the Assertion. What part of the dataset does this assertion apply to?"\n            },\n            {\n              "Relationship": {\n                "/*": {\n                  "entityTypes": [\n                    "schemaField"\n                  ],\n                  "name": "Asserts"\n                }\n              },\n              "type": [\n                "null",\n                {\n                  "type": "array",\n                  "items": "string"\n                }\n              ],\n              "name": "fields",\n              "default": null,\n              "doc": "One or more dataset schema fields that are targeted by this assertion"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "enum",\n                  "symbolDocs": {\n                    "COLUMNS": "Assertion is applied on all columns.",\n                    "COLUMN_COUNT": "Assertion is applied on number of columns.",\n                    "IDENTITY": "Assertion is applied on individual column value.",\n                    "MAX": "Assertion is applied on column std deviation",\n                    "MEAN": "Assertion is applied on column mean",\n                    "MEDIAN": "Assertion is applied on column median",\n                    "MIN": "Assertion is applied on column min",\n                    "NULL_COUNT": "Assertion is applied on number of null values in column",\n                    "NULL_PROPORTION": "Assertion is applied on proportion of null values in column",\n                    "ROW_COUNT": "Assertion is applied on number of rows.",\n                    "STDDEV": "Assertion is applied on column std deviation",\n                    "SUM": "Assertion is applied on column sum",\n                    "UNIQUE_COUNT": "Assertion is applied on number of distinct values in column",\n                    "UNIQUE_PROPOTION": "Assertion is applied on proportion of distinct values in column",\n                    "_NATIVE_": "Other"\n                  },\n                  "name": "AssertionStdAggregation",\n                  "namespace": "com.linkedin.assertion",\n                  "symbols": [\n                    "ROW_COUNT",\n                    "COLUMNS",\n                    "COLUMN_COUNT",\n                    "IDENTITY",\n                    "MEAN",\n                    "MEDIAN",\n                    "UNIQUE_COUNT",\n                    "UNIQUE_PROPOTION",\n                    "NULL_COUNT",\n                    "NULL_PROPORTION",\n                    "STDDEV",\n                    "MIN",\n                    "MAX",\n                    "SUM",\n                    "_NATIVE_"\n                  ],\n                  "doc": "The function that is applied to the aggregation input (schema, rows, column values) before evaluating an operator."\n                }\n              ],\n              "name": "aggregation",\n              "default": null,\n              "doc": "Standardized assertion operator"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BETWEEN": "Value being asserted is between min_value and max_value.  Requires \'minValue\' & \'maxValue\' parameters.",\n                  "CONTAIN": "Value being asserted contains value. Requires \'value\' parameter.",\n                  "END_WITH": "Value being asserted ends with value. Requires \'value\' parameter.",\n                  "EQUAL_TO": "Value being asserted is equal to value. Requires \'value\' parameter.",\n                  "GREATER_THAN": "Value being asserted is greater than some value. Requires \'value\' parameter.",\n                  "GREATER_THAN_OR_EQUAL_TO": "Value being asserted is greater than or equal to some value. Requires \'value\' parameter.",\n                  "IN": "Value being asserted is one of the array values. Requires \'value\' parameter.",\n                  "LESS_THAN": "Value being asserted is less than a max value. Requires \'value\' parameter.",\n                  "LESS_THAN_OR_EQUAL_TO": "Value being asserted is less than or equal to some value. Requires \'value\' parameter.",\n                  "NOT_IN": "Value being asserted is not in one of the array values. Requires \'value\' parameter.",\n                  "NOT_NULL": "Value being asserted is not null. Requires no parameters.",\n                  "REGEX_MATCH": "Value being asserted matches the regex value. Requires \'value\' parameter.",\n                  "START_WITH": "Value being asserted starts with value. Requires \'value\' parameter.",\n                  "_NATIVE_": "Other"\n                },\n                "name": "AssertionStdOperator",\n                "namespace": "com.linkedin.assertion",\n                "symbols": [\n                  "BETWEEN",\n                  "LESS_THAN",\n                  "LESS_THAN_OR_EQUAL_TO",\n                  "GREATER_THAN",\n                  "GREATER_THAN_OR_EQUAL_TO",\n                  "EQUAL_TO",\n                  "NOT_NULL",\n                  "CONTAIN",\n                  "END_WITH",\n                  "START_WITH",\n                  "REGEX_MATCH",\n                  "IN",\n                  "NOT_IN",\n                  "_NATIVE_"\n                ],\n                "doc": "A boolean operator that is applied on the input to an assertion, after an aggregation function has been applied."\n              },\n              "name": "operator",\n              "doc": "Standardized assertion operator"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "AssertionStdParameters",\n                  "namespace": "com.linkedin.assertion",\n                  "fields": [\n                    {\n                      "type": [\n                        "null",\n                        {\n                          "type": "record",\n                          "name": "AssertionStdParameter",\n                          "namespace": "com.linkedin.assertion",\n                          "fields": [\n                            {\n                              "type": "string",\n                              "name": "value",\n                              "doc": "The parameter value"\n                            },\n                            {\n                              "type": {\n                                "type": "enum",\n                                "name": "AssertionStdParameterType",\n                                "namespace": "com.linkedin.assertion",\n                                "symbols": [\n                                  "STRING",\n                                  "NUMBER",\n                                  "LIST",\n                                  "SET",\n                                  "UNKNOWN"\n                                ]\n                              },\n                              "name": "type",\n                              "doc": "The type of the parameter"\n                            }\n                          ],\n                          "doc": "Single parameter for AssertionStdOperators."\n                        }\n                      ],\n                      "name": "value",\n                      "default": null,\n                      "doc": "The value parameter of an assertion"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "com.linkedin.assertion.AssertionStdParameter"\n                      ],\n                      "name": "maxValue",\n                      "default": null,\n                      "doc": "The maxValue parameter of an assertion"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "com.linkedin.assertion.AssertionStdParameter"\n                      ],\n                      "name": "minValue",\n                      "default": null,\n                      "doc": "The minValue parameter of an assertion"\n                    }\n                  ],\n                  "doc": "Parameters for AssertionStdOperators."\n                }\n              ],\n              "name": "parameters",\n              "default": null,\n              "doc": "Standard parameters required for the assertion. e.g. min_value, max_value, value, columns"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "nativeType",\n              "default": null,\n              "doc": "Native assertion type"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "map",\n                  "values": "string"\n                }\n              ],\n              "name": "nativeParameters",\n              "default": null,\n              "doc": "Native parameters required for the assertion."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "logic",\n              "default": null\n            }\n          ],\n          "doc": "Attributes that are applicable to single-Dataset Assertions"\n        }\n      ],\n      "name": "datasetAssertion",\n      "default": null,\n      "doc": "Dataset Assertion information when type is DATASET"\n    }\n  ],\n  "doc": "Information about an assertion"\n}\n'))),(0,s.kt)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,s.kt)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "platformInstance",\n        "fieldType": "URN",\n        "filterNameOverride": "Platform Instance"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,s.kt)("h3",{id:"status"},"status"),(0,s.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,s.kt)("h3",{id:"assertionrunevent-timeseries"},"assertionRunEvent (Timeseries)"),(0,s.kt)("p",null,"An event representing the current status of evaluating an assertion on a batch.\nAssertionRunEvent should be used for reporting the status of a run as an assertion evaluation progresses."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "assertionRunEvent",\n    "type": "timeseries"\n  },\n  "name": "AssertionRunEvent",\n  "namespace": "com.linkedin.assertion",\n  "fields": [\n    {\n      "type": "long",\n      "name": "timestampMillis",\n      "doc": "The event timestamp field as epoch at UTC in milli seconds."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "TimeWindowSize",\n          "namespace": "com.linkedin.timeseries",\n          "fields": [\n            {\n              "type": {\n                "type": "enum",\n                "name": "CalendarInterval",\n                "namespace": "com.linkedin.timeseries",\n                "symbols": [\n                  "SECOND",\n                  "MINUTE",\n                  "HOUR",\n                  "DAY",\n                  "WEEK",\n                  "MONTH",\n                  "QUARTER",\n                  "YEAR"\n                ]\n              },\n              "name": "unit",\n              "doc": "Interval unit such as minute/hour/day etc."\n            },\n            {\n              "type": "int",\n              "name": "multiple",\n              "default": 1,\n              "doc": "How many units. Defaults to 1."\n            }\n          ],\n          "doc": "Defines the size of a time window."\n        }\n      ],\n      "name": "eventGranularity",\n      "default": null,\n      "doc": "Granularity of the event if applicable"\n    },\n    {\n      "type": [\n        {\n          "type": "record",\n          "name": "PartitionSpec",\n          "namespace": "com.linkedin.timeseries",\n          "fields": [\n            {\n              "type": {\n                "type": "enum",\n                "name": "PartitionType",\n                "namespace": "com.linkedin.timeseries",\n                "symbols": [\n                  "FULL_TABLE",\n                  "QUERY",\n                  "PARTITION"\n                ]\n              },\n              "name": "type",\n              "default": "PARTITION"\n            },\n            {\n              "TimeseriesField": {},\n              "type": "string",\n              "name": "partition",\n              "doc": "String representation of the partition"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "TimeWindow",\n                  "namespace": "com.linkedin.timeseries",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "startTimeMillis",\n                      "doc": "Start time as epoch at UTC."\n                    },\n                    {\n                      "type": "com.linkedin.timeseries.TimeWindowSize",\n                      "name": "length",\n                      "doc": "The length of the window."\n                    }\n                  ]\n                }\n              ],\n              "name": "timePartition",\n              "default": null,\n              "doc": "Time window of the partition if applicable"\n            }\n          ],\n          "doc": "Defines how the data is partitioned"\n        },\n        "null"\n      ],\n      "name": "partitionSpec",\n      "default": {\n        "partition": "FULL_TABLE_SNAPSHOT",\n        "type": "FULL_TABLE",\n        "timePartition": null\n      },\n      "doc": "The optional partition specification."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "messageId",\n      "default": null,\n      "doc": "The optional messageId, if provided serves as a custom user-defined unique identifier for an aspect value."\n    },\n    {\n      "type": "string",\n      "name": "runId",\n      "doc": " Native (platform-specific) identifier for this run"\n    },\n    {\n      "TimeseriesField": {},\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "assertionUrn"\n    },\n    {\n      "TimeseriesField": {},\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "asserteeUrn"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "BatchSpec",\n          "namespace": "com.linkedin.assertion",\n          "fields": [\n            {\n              "Searchable": {\n                "/*": {\n                  "queryByDefault": true\n                }\n              },\n              "type": {\n                "type": "map",\n                "values": "string"\n              },\n              "name": "customProperties",\n              "default": {},\n              "doc": "Custom property bag."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "nativeBatchId",\n              "default": null,\n              "doc": "The native identifier as specified by the system operating on the batch."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "query",\n              "default": null,\n              "doc": "A query that identifies a batch of data"\n            },\n            {\n              "type": [\n                "null",\n                "int"\n              ],\n              "name": "limit",\n              "default": null,\n              "doc": "Any limit to the number of rows in the batch, if applied"\n            }\n          ],\n          "doc": "A batch on which certain operations, e.g. data quality evaluation, is done."\n        }\n      ],\n      "name": "batchSpec",\n      "default": null,\n      "doc": "Specification of the batch which this run is evaluating"\n    },\n    {\n      "TimeseriesField": {},\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "COMPLETE": "The Assertion Run has completed"\n        },\n        "name": "AssertionRunStatus",\n        "namespace": "com.linkedin.assertion",\n        "symbols": [\n          "COMPLETE"\n        ]\n      },\n      "name": "status",\n      "doc": "The status of the assertion run as per this timeseries event."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "AssertionResult",\n          "namespace": "com.linkedin.assertion",\n          "fields": [\n            {\n              "TimeseriesField": {},\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "FAILURE": " The Assertion Failed",\n                  "SUCCESS": " The Assertion Succeeded"\n                },\n                "name": "AssertionResultType",\n                "namespace": "com.linkedin.assertion",\n                "symbols": [\n                  "SUCCESS",\n                  "FAILURE"\n                ]\n              },\n              "name": "type",\n              "doc": " The final result, e.g. either SUCCESS or FAILURE."\n            },\n            {\n              "type": [\n                "null",\n                "long"\n              ],\n              "name": "rowCount",\n              "default": null,\n              "doc": "Number of rows for evaluated batch"\n            },\n            {\n              "type": [\n                "null",\n                "long"\n              ],\n              "name": "missingCount",\n              "default": null,\n              "doc": "Number of rows with missing value for evaluated batch"\n            },\n            {\n              "type": [\n                "null",\n                "long"\n              ],\n              "name": "unexpectedCount",\n              "default": null,\n              "doc": "Number of rows with unexpected value for evaluated batch"\n            },\n            {\n              "type": [\n                "null",\n                "float"\n              ],\n              "name": "actualAggValue",\n              "default": null,\n              "doc": "Observed aggregate value for evaluated batch"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "map",\n                  "values": "string"\n                }\n              ],\n              "name": "nativeResults",\n              "default": null,\n              "doc": "Other results of evaluation"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "externalUrl",\n              "default": null,\n              "doc": "URL where full results are available"\n            }\n          ],\n          "doc": "The result of running an assertion"\n        }\n      ],\n      "name": "result",\n      "default": null,\n      "doc": "Results of assertion, present if the status is COMPLETE"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "map",\n          "values": "string"\n        }\n      ],\n      "name": "runtimeContext",\n      "default": null,\n      "doc": "Runtime parameters of evaluation"\n    }\n  ],\n  "doc": "An event representing the current status of evaluating an assertion on a batch.\\nAssertionRunEvent should be used for reporting the status of a run as an assertion evaluation progresses."\n}\n'))),(0,s.kt)("h2",{id:"relationships"},"Relationships"),(0,s.kt)("h3",{id:"outgoing"},"Outgoing"),(0,s.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Asserts"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Dataset via ",(0,s.kt)("inlineCode",{parentName:"li"},"assertionInfo.datasetAssertion.dataset")),(0,s.kt)("li",{parentName:"ul"},"SchemaField via ",(0,s.kt)("inlineCode",{parentName:"li"},"assertionInfo.datasetAssertion.fields"))))),(0,s.kt)("h2",{id:"global-metadata-model"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}d.isMDXComponent=!0}}]);