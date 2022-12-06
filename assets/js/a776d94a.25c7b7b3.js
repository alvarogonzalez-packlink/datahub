"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9175],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=i,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},94669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={title:"SchemaFieldPath Specification (Version 2)",slug:"/advanced/field-path-spec-v2",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/field-path-spec-v2.md"},o="SchemaFieldPath Specification (Version 2)",p={unversionedId:"docs/advanced/field-path-spec-v2",id:"docs/advanced/field-path-spec-v2",title:"SchemaFieldPath Specification (Version 2)",description:"This document outlines the formal specification for the fieldPath member of",source:"@site/genDocs/docs/advanced/field-path-spec-v2.md",sourceDirName:"docs/advanced",slug:"/advanced/field-path-spec-v2",permalink:"/docs/advanced/field-path-spec-v2",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/field-path-spec-v2.md",tags:[],version:"current",frontMatter:{title:"SchemaFieldPath Specification (Version 2)",slug:"/advanced/field-path-spec-v2",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/field-path-spec-v2.md"},sidebar:"overviewSidebar",previous:{title:"Migrate Graph Service Implementation to Elasticsearch",permalink:"/docs/how/migrating-graph-service-implementation"},next:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/metadata-ingestion/adding-source"}},l={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Existing Convention(v1)",id:"existing-conventionv1",level:2},{value:"Example: Ambiguous field path",id:"example-ambiguous-field-path",level:3},{value:"The FieldPath encoding scheme(v2)",id:"the-fieldpath-encoding-schemev2",level:2},{value:"Formal Spec:",id:"formal-spec",level:3},{value:"Examples",id:"examples",level:2},{value:"Primitive types",id:"primitive-types",level:3},{value:"Records",id:"records",level:3},{value:"Unions",id:"unions",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Maps",id:"maps",level:3},{value:"Mixed Complex Type Examples",id:"mixed-complex-type-examples",level:3},{value:"Backward-compatibility",id:"backward-compatibility",level:3}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemafieldpath-specification-version-2"},"SchemaFieldPath Specification (Version 2)"),(0,i.kt)("p",null,"This document outlines the formal specification for the fieldPath member of\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/schema/SchemaField.pdl"},"SchemaField"),"\nmodel. This specification (version 2) takes into account the unique requirements of supporting a wide variety of nested\ntypes, unions and optional fields and is a substantial improvement over the current implementation (version 1)."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldPath")," field is currently used by datahub for not just rendering the schema fields in the UI, but also as a\nprimary identifier of a field in other places such\nas ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/schema/EditableSchemaFieldInfo.pdl#L12"},"EditableSchemaFieldInfo"),",\nusage stats and data profiles. Therefore, it must satisfy the following requirements."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"must be unique across all fields within a schema."),(0,i.kt)("li",{parentName:"ul"},"make schema navigation in the UI more intuitive."),(0,i.kt)("li",{parentName:"ul"},"allow for identifying the type of schema the field is part of, such as a ",(0,i.kt)("inlineCode",{parentName:"li"},"key-schema")," or a ",(0,i.kt)("inlineCode",{parentName:"li"},"value-schema"),"."),(0,i.kt)("li",{parentName:"ul"},"allow for future-evolution")),(0,i.kt)("h2",{id:"existing-conventionv1"},"Existing Convention(v1)"),(0,i.kt)("p",null,"The existing convention is to simply use the field's name as the ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldPath")," for simple fields, and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dot"),"\ndelimited names for nested fields. This scheme does not satisfy the ",(0,i.kt)("a",{parentName:"p",href:"#requirements"},"requirements")," stated above. The\nfollowing example illustrates where the ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueness")," requirement is not satisfied."),(0,i.kt)("h3",{id:"example-ambiguous-field-path"},"Example: Ambiguous field path"),(0,i.kt)("p",null,"Consider the following ",(0,i.kt)("inlineCode",{parentName:"p"},"Avro")," schema which is a ",(0,i.kt)("inlineCode",{parentName:"p"},"union")," of two record types ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", each having a simple field with\nthe same name ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," that is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". The v1 naming scheme cannot differentiate if a ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldPath=f")," is referring to\nthe record type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    {\n        "type": "record",\n        "name": "A",\n        "fields": [{ "name": "f", "type": "string" } ]\n    }, {\n        "type": "record",\n        "name": "B",\n        "fields": [{ "name": "f", "type": "string" } ]\n    }\n]\n')),(0,i.kt)("h2",{id:"the-fieldpath-encoding-schemev2"},"The FieldPath encoding scheme(v2)"),(0,i.kt)("p",null,"The syntax for V2 encoding of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldPath")," is captured in the following grammar. The ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldPathSpec")," is essentially\nthe type annotated path of the member, with each token along the path representing one level of nested member,\nstarting from the most-enclosing type, leading up to the member. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"unions")," that have ",(0,i.kt)("inlineCode",{parentName:"p"},"one-of")," semantics,\nthe corresponding field will be emitted once for each ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," of the union as its ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", along with one path\ncorresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"union")," itself."),(0,i.kt)("h3",{id:"formal-spec"},"Formal Spec:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<SchemaFieldPath> := <VersionToken>.<PartOfKeySchemaToken>.<FieldPathSpec>  // when part of a key-schema\n                   | <VersionToken>.<FieldPathSpec> // when part of a value schema\n<VersionToken> := [version=<VersionId>] // [version=2.0] for v2\n<PartOfKeySchemaToken> := [key=True]  // when part of a key schema\n<FieldPathSpec> := <FieldToken>+  // this is the type prefixed path field (nested if repeats).\n<FieldToken> := <TypePrefixToken>.<name_of_the_field> // type prefixed path of a field.\n<TypePrefixToken> := <NestedTypePrefixToken>.<SimpleTypeToken> | <SimpleTypeToken>\n<NestedTypePrefixToken> := [type=<NestedType>]\n<SimpleTypeToken> := [type=<SimpleType>]\n<NestedType> := <name of a struct/record> | union | array | map\n<SimpleType> := int | float | double | string | fixed | enum\n")),(0,i.kt)("p",null,"For the ",(0,i.kt)("a",{parentName:"p",href:"#example-ambiguous-field-path"},"example above"),", this encoding would produce the following 2 unique paths\ncorresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"A.f")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B.f")," fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'unique_v2_field_paths = [\n "[version=2.0].[type=union].[type=A].[type=string].f",\n "[version=2.0].[type=union].[type=B].[type=string].f"\n]\n')),(0,i.kt)("p",null,"NOTE:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"this encoding always ensures uniqueness within a schema since the full type annotation leading to a field is encoded\nin the fieldPath itself."),(0,i.kt)("li",{parentName:"ul"},"processing a fieldPath, such as from UI, gets simplified simply by walking each token along the path from\nleft-to-right."),(0,i.kt)("li",{parentName:"ul"},"adding PartOfKeySchemaToken allows for identifying if the field is part of key-schema."),(0,i.kt)("li",{parentName:"ul"},"adding VersionToken allows for future evolvability."),(0,i.kt)("li",{parentName:"ul"},"to represent ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," fields, which sometimes are modeled as ",(0,i.kt)("inlineCode",{parentName:"li"},"unions")," in formats like ",(0,i.kt)("inlineCode",{parentName:"li"},"Avro"),", instead of treating it\nas a ",(0,i.kt)("inlineCode",{parentName:"li"},"union")," member, set the ",(0,i.kt)("inlineCode",{parentName:"li"},"nullable")," member of ",(0,i.kt)("inlineCode",{parentName:"li"},"SchemaField")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"primitive-types"},"Primitive types"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n  "type": "string"\n}\n"""\nunique_v2_field_paths = [\n  "[version=2.0].[type=string]"\n]\n')),(0,i.kt)("h3",{id:"records"},"Records"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Simple Record")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n  "type": "record",\n  "name": "some.event.E",\n  "namespace": "some.event.N",\n  "doc": "this is the event record E"\n  "fields": [\n    {\n      "name": "a",\n      "type": "string",\n      "doc": "this is string field a of E"\n    },\n    {\n      "name": "b",\n      "type": "string",\n      "doc": "this is string field b of E"\n    }\n  ]\n}\n"""\n\nunique_v2_field_paths = [\n    "[version=2.0].[type=E].[type=string].a",\n    "[version=2.0].[type=E].[type=string].b",\n]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nested Record")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n    "type": "record",\n    "name": "SimpleNested",\n    "namespace": "com.linkedin",\n    "fields": [{\n        "name": "nestedRcd",\n        "type": {\n            "type": "record",\n            "name": "InnerRcd",\n            "fields": [{\n                "name": "aStringField",\n                 "type": "string"\n            } ]\n        }\n    }]\n}\n"""\n\nunique_v2_field_paths = [\n  "[version=2.0].[key=True].[type=SimpleNested].[type=InnerRcd].nestedRcd",\n  "[version=2.0].[key=True].[type=SimpleNested].[type=InnerRcd].nestedRcd.[type=string].aStringField",\n]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Recursive Record")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n    "type": "record",\n    "name": "Recursive",\n    "namespace": "com.linkedin",\n    "fields": [{\n        "name": "r",\n        "type": {\n            "type": "record",\n            "name": "R",\n            "fields": [\n                { "name" : "anIntegerField", "type" : "int" },\n                { "name": "aRecursiveField", "type": "com.linkedin.R"}\n            ]\n        }\n    }]\n}\n"""\n\nunique_v2_field_paths = [\n  "[version=2.0].[type=Recursive].[type=R].r",\n  "[version=2.0].[type=Recursive].[type=R].r.[type=int].anIntegerField",\n  "[version=2.0].[type=Recursive].[type=R].r.[type=R].aRecursiveField"\n]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema ="""\n{\n    "type": "record",\n    "name": "TreeNode",\n    "fields": [\n        {\n            "name": "value",\n            "type": "long"\n        },\n        {\n            "name": "children",\n            "type": { "type": "array", "items": "TreeNode" }\n        }\n    ]\n}\n"""\nunique_v2_field_paths = [\n "[version=2.0].[type=TreeNode].[type=long].value",\n "[version=2.0].[type=TreeNode].[type=array].[type=TreeNode].children",\n]\n')),(0,i.kt)("h3",{id:"unions"},"Unions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n    "type": "record",\n    "name": "ABUnion",\n    "namespace": "com.linkedin",\n    "fields": [{\n        "name": "a",\n        "type": [{\n            "type": "record",\n            "name": "A",\n            "fields": [{ "name": "f", "type": "string" } ]\n            }, {\n            "type": "record",\n            "name": "B",\n            "fields": [{ "name": "f", "type": "string" } ]\n            }\n        ]\n    }]\n}\n"""\nunique_v2_field_paths: List[str] = [\n    "[version=2.0].[key=True].[type=ABUnion].[type=union].a",\n    "[version=2.0].[key=True].[type=ABUnion].[type=union].[type=A].a",\n    "[version=2.0].[key=True].[type=ABUnion].[type=union].[type=A].a.[type=string].f",\n    "[version=2.0].[key=True].[type=ABUnion].[type=union].[type=B].a",\n    "[version=2.0].[key=True].[type=ABUnion].[type=union].[type=B].a.[type=string].f",\n]\n')),(0,i.kt)("h3",{id:"arrays"},"Arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n    "type": "record",\n    "name": "NestedArray",\n    "namespace": "com.linkedin",\n    "fields": [{\n        "name": "ar",\n        "type": {\n            "type": "array",\n            "items": {\n                "type": "array",\n                "items": [\n                    "null",\n                    {\n                        "type": "record",\n                        "name": "Foo",\n                        "fields": [ {\n                            "name": "a",\n                            "type": "long"\n                        } ]\n                    }\n                ]\n            }\n        }\n    }]\n}\n"""\nunique_v2_field_paths: List[str] = [\n  "[version=2.0].[type=NestedArray].[type=array].[type=array].[type=Foo].ar",\n  "[version=2.0].[type=NestedArray].[type=array].[type=array].[type=Foo].ar.[type=long].a",\n]\n')),(0,i.kt)("h3",{id:"maps"},"Maps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'avro_schema = """\n{\n  "type": "record",\n  "name": "R",\n  "namespace": "some.namespace",\n  "fields": [\n    {\n      "name": "a_map_of_longs_field",\n      "type": {\n        "type": "map",\n        "values": "long"\n      }\n    }\n  ]\n}\n"""\nunique_v2_field_paths = [\n  "[version=2.0].[type=R].[type=map].[type=long].a_map_of_longs_field",\n]\n\n\n')),(0,i.kt)("h3",{id:"mixed-complex-type-examples"},"Mixed Complex Type Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Combines arrays, unions and records.\navro_schema = """\n{\n    "type": "record",\n    "name": "ABFooUnion",\n    "namespace": "com.linkedin",\n    "fields": [{\n        "name": "a",\n        "type": [ {\n            "type": "record",\n            "name": "A",\n            "fields": [{ "name": "f", "type": "string" } ]\n            }, {\n            "type": "record",\n            "name": "B",\n            "fields": [{ "name": "f", "type": "string" } ]\n            }, {\n            "type": "array",\n            "items": {\n                "type": "array",\n                "items": [\n                    "null",\n                    {\n                        "type": "record",\n                        "name": "Foo",\n                        "fields": [{ "name": "f", "type": "long" }]\n                    }\n                ]\n            }\n    }]\n    }]\n}\n"""\n\nunique_v2_field_paths: List[str] = [\n  "[version=2.0].[type=ABFooUnion].[type=union].a",\n  "[version=2.0].[type=ABFooUnion].[type=union].[type=A].a",\n  "[version=2.0].[type=ABFooUnion].[type=union].[type=A].a.[type=string].f",\n  "[version=2.0].[type=ABFooUnion].[type=union].[type=B].a",\n  "[version=2.0].[type=ABFooUnion].[type=union].[type=B].a.[type=string].f",\n  "[version=2.0].[type=ABFooUnion].[type=union].[type=array].[type=array].[type=Foo].a",\n  "[version=2.0].[type=ABFooUnion].[type=union].[type=array].[type=array].[type=Foo].a.[type=long].f",\n]\n')),(0,i.kt)("p",null,"For more examples, see\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/tests/unit/test_schema_util.py"},"unit-tests for AvroToMceSchemaConverter"),"."),(0,i.kt)("h3",{id:"backward-compatibility"},"Backward-compatibility"),(0,i.kt)("p",null,"While this format is not directly compatible with the v1 format, the v1 equivalent can easily be constructed from the v2\nencoding by stripping away all the v2 tokens enclosed in the square-brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"[<new_in_v2>]"),"."))}m.isMDXComponent=!0}}]);