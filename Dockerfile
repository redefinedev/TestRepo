FROM python:3.7.10 as test-repo

ARG POETRY_DYNAMIC_VERSIONING_BYPASS="0.0.0"
# This is needed so the var is accessible by the entrypoint
ENV POETRY_DYNAMIC_VERSIONING_BYPASS=$POETRY_DYNAMIC_VERSIONING_BYPASS
ENV REDEFINE_ENVIRONMENT="dev"
ENV REDEFINE_AUTH="6a71bb1b-fdd6-4f1b-94e9-08e64a3ee537::0e6e3a6e-1071-4a95-9467-8c5f3f124606"

ENV TEAMCITY_VERSION="%system.teamcity.version%"
ENV TEAMCITY_PROJECT_NAME=%system.teamcity.projectName%
ENV TEAMCITY_BUILD_NUMBER=%system.build.number%
ENV TEAMCITY_BUILD_CONF_NAME=%system.teamcity.buildConfName%
ENV TEAMCITY_BUILD_BRANCH=%teamcity.build.branch%
ENV TEAMCITY_CHECKOUT_DIR="/project/TestRepo"

RUN mkdir /entrypoint_script_folder

RUN mkdir /project
WORKDIR /project

RUN git clone -q https://github.com/redefinedev/TestRepo -b pytest_for_teamcity

COPY installer_docker_entrypoint.sh /entrypoint_script_folder/installer_docker_entrypoint.sh
COPY ./* /project/
RUN chmod +x /entrypoint_script_folder/installer_docker_entrypoint.sh


# # run installer, need configuration via env or the code itself with config
# ENTRYPOINT [ "/entrypoint_script_folder/installer_docker_entrypoint.sh" ]
# # set the default source branch argument for the script
# CMD ["-s", "feature/pytests_for_teamcity"]

RUN pip install redefine-cli --extra-index-url=https://redefine.dev/pip/
RUN pip install pytest

RUN redefine config set cert_path=""
RUN redefine start --verbose --collect-only --pytest

RUN pytest -sv /project/TestRepo
