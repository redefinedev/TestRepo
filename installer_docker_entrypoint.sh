#!/bin/bash
set -e

while getopts "s:g:" flag
do
    case "${flag}" in
        s) source_branch=${OPTARG};;
        g) git_args=${OPTARG};;
    esac
done

echo "source branch: ${source_branch}"
echo "git_args: ${git_args}"
echo "artifacts version used:"

git clone -q https://github.com/redefinedev/TestRepo -b ${source_branch} ${git_args}
(cd TestRepo && git remote set-branches origin ${source_branch})
pip install -q pytest

# installing and running redefine 
export REDEFINE_AUTH="6a71bb1b-fdd6-4f1b-94e9-08e64a3ee537::0e6e3a6e-1071-4a95-9467-8c5f3f124606"
# pip install redefine-cli --extra-index-url=https://redefine.dev/pip/


# for logger use for python components tests
touch /project/TestRepo/.env.development
echo 'REDEFINE_ENVIRONMENT="dev"' >> /project/TestRepo/.env.development
echo 'REDEFINE_AUTH="6a71bb1b-fdd6-4f1b-94e9-08e64a3ee537::0e6e3a6e-1071-4a95-9467-8c5f3f124606"' >> /project/TestRepo/.env.development

# used as a marker to indicate that the container is ready
cat /tmp/coyote.log

# a docker container exits after the entrypoint script finishes
# this makes sure it stays up and running so we can query it from the tests
while true; do sleep 1000; done
