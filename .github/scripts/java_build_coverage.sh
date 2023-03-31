
java_folders=(
    "datahub-graphql-core"
    "datahub-upgrade" 
    "entity-registry"
    "ingestion-scheduler"
    "li-utils"
    "metadata-io"
    "metadata-models"
)
command="./gradlew "
files=""

for folder in "${java_folders[@]}"
do
    command="$command :$folder:jacocoTestReport"
    files="${files}$(pwd)/${folder}/build/reports/jacoco/test/jacocoTestReport.xml,"
done

command="$command build -x :metadata-ingestion:build -x :metadata-ingestion:check -x docs-website:build -x :metadata-integration:java:spark-lineage:test -x :metadata-io:test -x :metadata-ingestion-modules:airflow-plugin:build -x :datahub-frontend:build -x :datahub-web-react:build --parallel"
echo "command: $command"
eval "$command"
echo "files=${files::-1}" >> $GITHUB_OUTPUT