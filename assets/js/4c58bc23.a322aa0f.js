"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=s,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"Deploying to AWS",sidebar_label:"Deploying to AWS",slug:"/deploy/aws",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/aws.md"},o="AWS setup guide",i={unversionedId:"docs/deploy/aws",id:"docs/deploy/aws",title:"Deploying to AWS",description:"The following is a set of instructions to quickstart DataHub on AWS Elastic Kubernetes Service (EKS). Note, the guide",source:"@site/genDocs/docs/deploy/aws.md",sourceDirName:"docs/deploy",slug:"/deploy/aws",permalink:"/docs/next/deploy/aws",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/aws.md",tags:[],version:"current",frontMatter:{title:"Deploying to AWS",sidebar_label:"Deploying to AWS",slug:"/deploy/aws",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/aws.md"},sidebar:"overviewSidebar",previous:{title:"Deployment",permalink:"/docs/next/category/deployment"},next:{title:"Deploying to GCP",permalink:"/docs/next/deploy/gcp"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start up a kubernetes cluster on AWS EKS",id:"start-up-a-kubernetes-cluster-on-aws-eks",level:2},{value:"Setup DataHub using Helm",id:"setup-datahub-using-helm",level:2},{value:"Expose endpoints using a load balancer",id:"expose-endpoints-using-a-load-balancer",level:2},{value:"Use AWS managed services for the storage layer",id:"use-aws-managed-services-for-the-storage-layer",level:2},{value:"RDS",id:"rds",level:3},{value:"Elasticsearch Service",id:"elasticsearch-service",level:3},{value:"Managed Streaming for Apache Kafka (MSK)",id:"managed-streaming-for-apache-kafka-msk",level:3},{value:"AWS Glue Schema Registry",id:"aws-glue-schema-registry",level:3},{value:"IAM policies for UI-based ingestion",id:"iam-policies-for-ui-based-ingestion",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aws-setup-guide"},"AWS setup guide"),(0,s.kt)("p",null,"The following is a set of instructions to quickstart DataHub on AWS Elastic Kubernetes Service (EKS). Note, the guide\nassumes that you do not have a kubernetes cluster set up. If you are deploying DataHub to an existing cluster, please\nskip the corresponding sections."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"This guide requires the following tools:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," to manage kubernetes resources"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," to deploy the resources based on helm charts. Note, we only support Helm\n3."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://eksctl.io/installation/"},"eksctl")," to create and manage clusters on EKS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html"},"AWS CLI")," to manage AWS resources")),(0,s.kt)("p",null,"To use the above tools, you need to set up AWS credentials by following\nthis ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"guide"),"."),(0,s.kt)("h2",{id:"start-up-a-kubernetes-cluster-on-aws-eks"},"Start up a kubernetes cluster on AWS EKS"),(0,s.kt)("p",null,"Let\u2019s follow this ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html"},"guide")," to create a new\ncluster using eksctl. Run the following command with cluster-name set to the cluster name of choice, and region set to\nthe AWS region you are operating on."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"eksctl create cluster \\\n    --name <<cluster-name>> \\\n    --region <<region>> \\\n    --with-oidc \\\n    --nodes=3\n")),(0,s.kt)("p",null,"The command will provision an EKS cluster powered by 3 EC2 m3.large nodes and provision a VPC based networking layer."),(0,s.kt)("p",null,"If you are planning to run the storage layer (MySQL, Elasticsearch, Kafka) as pods in the cluster, you need at least 3\nnodes. If you decide to use managed storage services, you can reduce the number of nodes or use m3.medium nodes to save\ncost. Refer to this ",(0,s.kt)("a",{parentName:"p",href:"https://eksctl.io/usage/creating-and-managing-clusters/"},"guide")," to further customize the cluster\nbefore provisioning."),(0,s.kt)("p",null,"Note, OIDC setup is required for following this guide when setting up the load balancer."),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get nodes")," to confirm that the cluster has been setup correctly. You should get results like below"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"NAME                                          STATUS   ROLES    AGE   VERSION\nip-192-168-49-49.us-west-2.compute.internal   Ready    <none>   3h    v1.18.9-eks-d1db3c\nip-192-168-64-56.us-west-2.compute.internal   Ready    <none>   3h    v1.18.9-eks-d1db3c\nip-192-168-8-126.us-west-2.compute.internal   Ready    <none>   3h    v1.18.9-eks-d1db3c\n")),(0,s.kt)("h2",{id:"setup-datahub-using-helm"},"Setup DataHub using Helm"),(0,s.kt)("p",null,"Once the kubernetes cluster has been set up, you can deploy DataHub and it\u2019s prerequisites using helm. Please follow the\nsteps in this ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/deploy/kubernetes"},"guide")),(0,s.kt)("h2",{id:"expose-endpoints-using-a-load-balancer"},"Expose endpoints using a load balancer"),(0,s.kt)("p",null,"Now that all the pods are up and running, you need to expose the datahub-frontend end point by setting\nup ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"ingress"),". To do this, you need to first set up an\ningress controller. There are\nmany ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"ingress controllers"),"  to choose\nfrom, but here, we will follow\nthis ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"guide")," to set up the AWS\nApplication Load Balancer(ALB) Controller."),(0,s.kt)("p",null,"First, if you did not use eksctl to setup the kubernetes cluster, make sure to go through the prerequisites listed\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"},"here"),"."),(0,s.kt)("p",null,"Download the IAM policy document for allowing the controller to make calls to AWS APIs on your behalf."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.2.0/docs/install/iam_policy.json\n")),(0,s.kt)("p",null,"Create an IAM policy based on the policy document by running the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"aws iam create-policy \\\n    --policy-name AWSLoadBalancerControllerIAMPolicy \\\n    --policy-document file://iam_policy.json\n")),(0,s.kt)("p",null,"Use eksctl to create a service account that allows us to attach the above policy to kubernetes pods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"eksctl create iamserviceaccount \\\n  --cluster=<<cluster-name>> \\\n  --namespace=kube-system \\\n  --name=aws-load-balancer-controller \\\n  --attach-policy-arn=arn:aws:iam::<<account-id>>:policy/AWSLoadBalancerControllerIAMPolicy \\\n  --override-existing-serviceaccounts \\\n  --approve      \n")),(0,s.kt)("p",null,"Install the TargetGroupBinding custom resource definition by running the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller/crds?ref=master"\n')),(0,s.kt)("p",null,"Add the helm chart repository containing the latest version of the ALB controller."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm repo add eks https://aws.github.io/eks-charts\nhelm repo update\n")),(0,s.kt)("p",null,"Install the controller into the kubernetes cluster by running the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm upgrade -i aws-load-balancer-controller eks/aws-load-balancer-controller \\\n  --set clusterName=<<cluster-name>> \\\n  --set serviceAccount.create=false \\\n  --set serviceAccount.name=aws-load-balancer-controller \\\n  -n kube-system\n")),(0,s.kt)("p",null,"Verify the install completed by running ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get deployment -n kube-system aws-load-balancer-controller"),". It should\nreturn a result like the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"NAME                           READY   UP-TO-DATE   AVAILABLE   AGE\naws-load-balancer-controller   2/2     2            2           142m\n")),(0,s.kt)("p",null,"Now that the controller has been set up, we can enable ingress by updating the values.yaml (or any other values.yaml\nfile used to deploy datahub). Change datahub-frontend values to the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'datahub-frontend:\n  enabled: true\n  image:\n    repository: linkedin/datahub-frontend-react\n    tag: "latest"\n  ingress:\n    enabled: true\n    annotations:\n      kubernetes.io/ingress.class: alb\n      alb.ingress.kubernetes.io/scheme: internet-facing\n      alb.ingress.kubernetes.io/target-type: instance\n      alb.ingress.kubernetes.io/certificate-arn: <<certificate-arn>>\n      alb.ingress.kubernetes.io/inbound-cidrs: 0.0.0.0/0\n      alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP": 80}, {"HTTPS":443}]\'\n      alb.ingress.kubernetes.io/actions.ssl-redirect: \'{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}\'\n    hosts:\n      - host: <<host-name>>\n        redirectPaths:\n          - path: /*\n            name: ssl-redirect\n            port: use-annotation\n        paths:\n          - /*\n')),(0,s.kt)("p",null,"You need to request a certificate in the AWS Certificate Manager by following this\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"guide"),", and replace certificate-arn with\nthe ARN of the new certificate. You also need to replace host-name with the hostname of choice like\ndemo.datahubproject.io."),(0,s.kt)("p",null,"To have the metadata ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/authentication/introducing-metadata-service-authentication#configuring-metadata-service-authentication"},"authentication service")," enabled and use ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/authentication/personal-access-tokens#creating-personal-access-tokens"},"API tokens")," from the UI you will need to set the configuration in the values.yaml for the ",(0,s.kt)("inlineCode",{parentName:"p"},"gms")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"frontend")," deployments. This could be done by enabling the ",(0,s.kt)("inlineCode",{parentName:"p"},"metadata_service_authentication"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"datahub:\n  metadata_service_authentication:\n    enabled: true\n")),(0,s.kt)("p",null,"After updating the yaml file, run the following to apply the updates."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm upgrade --install datahub datahub/datahub --values values.yaml\n")),(0,s.kt)("p",null,"Once the upgrade completes, run ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get ingress")," to verify the ingress setup. You should see a result like the\nfollowing."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"NAME                       CLASS    HOSTS                         ADDRESS                                                                 PORTS   AGE\ndatahub-datahub-frontend   <none>   demo.datahubproject.io   k8s-default-datahubd-80b034d83e-904097062.us-west-2.elb.amazonaws.com   80      3h5m\n")),(0,s.kt)("p",null,"Note down the elb address in the address column. Add the DNS CNAME record to the host domain pointing the host-name (\nfrom above) to the elb address. DNS updates generally take a few minutes to an hour. Once that is done, you should be\nable to access datahub-frontend through the host-name."),(0,s.kt)("h2",{id:"use-aws-managed-services-for-the-storage-layer"},"Use AWS managed services for the storage layer"),(0,s.kt)("p",null,"Managing the storage services like MySQL, Elasticsearch, and Kafka as kubernetes pods requires a great deal of\nmaintenance workload. To reduce the workload, you can use managed services like AWS ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rds"},"RDS"),",\n",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elasticsearch-service/"},"Elasticsearch Service"),", and ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/msk/"},"Managed Kafka"),"\nas the storage layer for DataHub. Support for using AWS Neptune as graph DB is coming soon."),(0,s.kt)("h3",{id:"rds"},"RDS"),(0,s.kt)("p",null,"Provision a MySQL database in AWS RDS that shares the VPC with the kubernetes cluster or has VPC peering set up between\nthe VPC of the kubernetes cluster. Once the database is provisioned, you should be able to see the following page. Take\na note of the endpoint marked by the red box."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/aws/aws-rds.png"})),(0,s.kt)("p",null,"First, add the DB password to kubernetes by running the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl delete secret mysql-secrets\nkubectl create secret generic mysql-secrets --from-literal=mysql-root-password=<<password>>\n")),(0,s.kt)("p",null,"Update the sql settings under global in the values.yaml as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  sql:\n    datasource:\n      host: "<<rds-endpoint>>:3306"\n      hostForMysqlClient: "<<rds-endpoint>>"\n      port: "3306"\n      url: "jdbc:mysql://<<rds-endpoint>>:3306/datahub?verifyServerCertificate=false&useSSL=true&useUnicode=yes&characterEncoding=UTF-8"\n      driver: "com.mysql.jdbc.Driver"\n      username: "root"\n      password:\n        secretRef: mysql-secrets\n        secretKey: mysql-root-password\n')),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade --install datahub datahub/datahub --values values.yaml")," to apply the changes."),(0,s.kt)("h3",{id:"elasticsearch-service"},"Elasticsearch Service"),(0,s.kt)("p",null,"Provision an elasticsearch domain running elasticsearch version 7.10 or above that shares the VPC with the kubernetes\ncluster or has VPC peering set up between the VPC of the kubernetes cluster. Once the domain is provisioned, you should\nbe able to see the following page. Take a note of the endpoint marked by the red box."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/aws/aws-elasticsearch.png"})),(0,s.kt)("p",null,"Update the elasticsearch settings under global in the values.yaml as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  elasticsearch:\n    host: <<elasticsearch-endpoint>>\n    port: "443"\n    useSSL: "true"\n')),(0,s.kt)("p",null,"You can also allow communication via HTTP (without SSL) by using the settings below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  elasticsearch:\n    host: <<elasticsearch-endpoint>>\n    port: "80"\n')),(0,s.kt)("p",null,"If you have fine-grained access control enabled with basic authentication, first run the following to create a k8s\nsecret with the password."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl delete secret elasticsearch-secrets\nkubectl create secret generic elasticsearch-secrets --from-literal=elasticsearch-password=<<password>>\n")),(0,s.kt)("p",null,"Then use the settings below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  elasticsearch:\n    host: <<elasticsearch-endpoint>>\n    port: "443"\n    useSSL: "true"\n    auth:\n      username: <<username>>\n      password:\n        secretRef: elasticsearch-secrets\n        secretKey: elasticsearch-password\n')),(0,s.kt)("p",null,"If you have access control enabled with IAM auth, enable AWS auth signing in Datahub"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," OPENSEARCH_USE_AWS_IAM_AUTH=true \n")),(0,s.kt)("p",null,"Then use the settings below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  elasticsearch:\n    host: <<elasticsearch-endpoint>>\n    port: "443"\n    useSSL: "true"\n    region: <<AWS region of Opensearch>>\n')),(0,s.kt)("p",null,"Lastly, you ",(0,s.kt)("strong",{parentName:"p"},"NEED")," to set the following env variable for ",(0,s.kt)("strong",{parentName:"p"},"elasticsearchSetupJob"),'. AWS Elasticsearch/Opensearch\nservice uses OpenDistro version of Elasticsearch, which does not support the "datastream" functionality. As such, we use\na different way of creating time based indices.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  elasticsearchSetupJob:\n    enabled: true\n    image:\n      repository: linkedin/datahub-elasticsearch-setup\n      tag: "***"\n    extraEnvs:\n      - name: USE_AWS_ELASTICSEARCH\n        value: "true"\n')),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade --install datahub datahub/datahub --values values.yaml")," to apply the changes."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:"),"\nIf you have a custom setup of elastic search cluster and are deploying through docker, you can modify the configurations\nin datahub to point to the specific ES instance -"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"If you are using ",(0,s.kt)("inlineCode",{parentName:"li"},"docker quickstart")," you can modify the hostname and port of the ES instance in docker compose\nquickstart files located ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/quickstart/"},"here"),".",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Once you have modified the quickstart recipes you can run the quickstart command using a specific docker compose\nfile. Sample command for that is",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"datahub docker quickstart --quickstart-compose-file docker/quickstart/docker-compose-without-neo4j.quickstart.yml")))))),(0,s.kt)("li",{parentName:"ol"},"If you are not using quickstart recipes, you can modify environment variable in GMS to point to the ES instance. The\nenv files for datahub-gms are located ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-gms/env/"},"here"),".")),(0,s.kt)("p",null,"Further, you can find a list of properties supported to work with a custom ES\ninstance ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/factories/src/main/java/com/linkedin/gms/factory/common/ElasticsearchSSLContextFactory.java"},"here"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/factories/src/main/java/com/linkedin/gms/factory/common/RestHighLevelClientFactory.java"},"here"),"\n."),(0,s.kt)("p",null,"A mapping between the property name used in the above two files and the name used in docker/env file can be\nfound ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/configuration/src/main/resources/application.yml"},"here"),"."),(0,s.kt)("h3",{id:"managed-streaming-for-apache-kafka-msk"},"Managed Streaming for Apache Kafka (MSK)"),(0,s.kt)("p",null,"Provision an MSK cluster that shares the VPC with the kubernetes cluster or has VPC peering set up between the VPC of\nthe kubernetes cluster. Once the domain is provisioned, click on the \u201cView client information\u201d button in the \u2018Cluster\nSummary\u201d section. You should see a page like below. Take a note of the endpoints marked by the red boxes."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/aws/aws-msk.png"})),(0,s.kt)("p",null,"Update the kafka settings under global in the values.yaml as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kafka:\n    bootstrap:\n      server: "<<bootstrap-server endpoint>>"\n    zookeeper:\n      server:  "<<zookeeper endpoint>>"\n    schemaregistry:\n      url: "http://prerequisites-cp-schema-registry:8081"\n    partitions: 3\n    replicationFactor: 3\n')),(0,s.kt)("p",null,"Note, the number of partitions and replicationFactor should match the number of bootstrap servers. This is by default 3\nfor AWS MSK."),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade --install datahub datahub/datahub --values values.yaml")," to apply the changes."),(0,s.kt)("h3",{id:"aws-glue-schema-registry"},"AWS Glue Schema Registry"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"WARNING"),": AWS Glue Schema Registry DOES NOT have a python SDK. As such, python based libraries like ingestion or datahub-actions (UI ingestion) is not supported when using AWS Glue Schema Registry")),(0,s.kt)("p",null,'You can use AWS Glue schema registry instead of the kafka schema registry. To do so, first provision an AWS Glue schema\nregistry in the "Schema Registry" tab in the AWS Glue console page.'),(0,s.kt)("p",null,"Once the registry is provisioned, you can change helm chart as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kafka:\n    bootstrap:\n      ...\n    zookeeper:\n      ...\n    schemaregistry:\n      type: AWS_GLUE\n      glue:\n        region: <<AWS region of registry>>\n        registry: <<name of registry>>\n")),(0,s.kt)("p",null,"Note, it will use the name of the topic as the schema name in the registry."),(0,s.kt)("p",null,"Before you update the pods, you need to give the k8s worker nodes the correct permissions to access the schema registry."),(0,s.kt)("p",null,"The minimum permissions required looks like this"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "glue:GetRegistry",\n                "glue:ListRegistries",\n                "glue:CreateSchema",\n                "glue:UpdateSchema",\n                "glue:GetSchema",\n                "glue:ListSchemas",\n                "glue:RegisterSchemaVersion",\n                "glue:GetSchemaByDefinition",\n                "glue:GetSchemaVersion",\n                "glue:GetSchemaVersionsDiff",\n                "glue:ListSchemaVersions",\n                "glue:CheckSchemaVersionValidity",\n                "glue:PutSchemaVersionMetadata",\n                "glue:QuerySchemaVersionMetadata"\n            ],\n            "Resource": [\n                "arn:aws:glue:*:795586375822:schema/*",\n                "arn:aws:glue:us-west-2:795586375822:registry/demo-shared"\n            ]\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "glue:GetSchemaVersion"\n            ],\n            "Resource": [\n                "*"\n            ]\n        }\n    ]\n}\n')),(0,s.kt)("p",null,'The latter part is required to have "*" as the resource because of an issue in the AWS Glue schema registry library.\nRefer to ',(0,s.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-glue-schema-registry/issues/68"},"this issue")," for any updates."),(0,s.kt)("p",null,"Glue currently doesn't support AWS Signature V4. As such, we cannot use service accounts to give permissions to access\nthe schema registry. The workaround is to give the above permission to the EKS worker node's IAM role. Refer\nto ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-glue-schema-registry/issues/69"},"this issue")," for any updates."),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"helm upgrade --install datahub datahub/datahub --values values.yaml")," to apply the changes."),(0,s.kt)("p",null,'Note, you will be seeing log "Schema Version Id is null. Trying to register the schema" on every request. This log is\nmisleading, so should be ignored. Schemas are cached, so it does not register a new version on every request (aka no\nperformance issues). This has been fixed by ',(0,s.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-glue-schema-registry/pull/64"},"this PR")," but\nthe code has not been released yet. We will update version once a new release is out."),(0,s.kt)("h3",{id:"iam-policies-for-ui-based-ingestion"},"IAM policies for UI-based ingestion"),(0,s.kt)("p",null,"This section details how to attach policies to the acryl-datahub-actions pod that powers UI-based ingestion. For some of\nthe ingestion recipes, you sepecify login creds in the recipe itself, making it easy to set up auth to grab metadata\nfrom the data source. However, for AWS resources, the recommendation is to use IAM roles and policies to gate requests\nto access metadata on these resources."),(0,s.kt)("p",null,"To do this, let's follow\nthis ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html"},"guide")," to\nassociate a kubernetes service account with an IAM role. Then we can attach this IAM role to the acryl-datahub-actions\npod to let the pod assume the specified role."),(0,s.kt)("p",null,"First, you must create an IAM policy with all the permissions needed to run ingestion. This is specific to each\nconnector and the set of metadata you are trying to pull. i.e. profiling requires more permissions, since it needs\naccess to the data, not just the metadata. Let's say assume the ARN of that policy\nis ",(0,s.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::<<account-id>>:policy/policy1"),"."),(0,s.kt)("p",null,"Then, create a service account with the policy attached is to use ",(0,s.kt)("a",{parentName:"p",href:"https://eksctl.io/"},"eksctl"),". You can run the\nfollowing command to do so."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"eksctl create iamserviceaccount \\\n    --name <<service-account-name>> \\\n    --namespace <<namespace>> \\\n    --cluster <<eks-cluster-name>> \\\n    --attach-policy-arn <<policy-ARN>> \\\n    --approve \\\n    --override-existing-serviceaccounts\n")),(0,s.kt)("p",null,'For example, running the following will create a service account "acryl-datahub-actions" in the datahub namespace of\ndatahub EKS cluster with ',(0,s.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::<<account-id>>:policy/policy1")," attached."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"eksctl create iamserviceaccount \\\n    --name acryl-datahub-actions \\\n    --namespace datahub \\\n    --cluster datahub \\\n    --attach-policy-arn arn:aws:iam::<<account-id>>:policy/policy1 \\\n    --approve \\\n    --override-existing-serviceaccounts\n")),(0,s.kt)("p",null,"Lastly, in the helm values.yaml, you can add the following to the acryl-datahub-actions to attach the service account to\nthe acryl-datahub-actions pod."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"acryl-datahub-actions:\n  enabled: true\n  serviceAccount:\n    name: <<service-account-name>>\n  ...\n")))}h.isMDXComponent=!0}}]);