FROM python:3.6.9 as test-repo

ARG POETRY_DYNAMIC_VERSIONING_BYPASS="0.0.0"
ARG TEAMCITY_PROJECT_NAME
ARG TEAMCITY_BUILD_NUMBER
ARG TEAMCITY_BUILD_CONF_NAME
ARG TEAMCITY_BUILD_BRANCH
ARG TEAMCITY_VERSION
ARG TEAMCITY_CHECKOUT_DIR
# This is needed so the var is accessible by the entrypoint
ENV POETRY_DYNAMIC_VERSIONING_BYPASS=$POETRY_DYNAMIC_VERSIONING_BYPASS
ENV REDEFINE_ENVIRONMENT="dev"
ENV REDEFINE_AUTH="6a71bb1b-fdd6-4f1b-94e9-08e64a3ee537::0e6e3a6e-1071-4a95-9467-8c5f3f124606"

ENV TEAMCITY_PROJECT_NAME=$TEAMCITY_PROJECT_NAME
ENV TEAMCITY_BUILD_NUMBER=$TEAMCITY_BUILD_NUMBER
ENV TEAMCITY_BUILD_CONF_NAME=$TEAMCITY_BUILD_CONF_NAME
ENV TEAMCITY_BUILD_BRANCH=$TEAMCITY_BUILD_BRANCH
ENV TEAMCITY_VERSION=$TEAMCITY_VERSION
ENV REDEFINE_ENVIRONMENT="dev"

ENV REDEFINE_AUT="6a71bb1b-fdd6-4f1b-94e9-08e64a3ee537::0e6e3a6e-1071-4a95-9467-8c5f3f124606" 

#ENV TEAMCITY_CHECKOUT_DIR="/project/TestRepo"

RUN echo $TEAMCITY_CHECKOUT_DIR

RUN mkdir /entrypoint_script_folder

RUN mkdir /project
WORKDIR /

COPY . /project/

WORKDIR /project

# RUN git clone https://github.com/redefinedev/TestRepo 
# WORKDIR /project/TestRepo
# RUN ls -a .
# RUN git checkout pytest_for_teamcity


# # run installer, need configuration via env or the code itself with config
# ENTRYPOINT [ "/entrypoint_script_folder/installer_docker_entrypoint.sh" ]
# # set the default source branch argument for the script
# CMD ["-s", "feature/pytests_for_teamcity"]

RUN pip install redefine-cli --extra-index-url=https://redefine.dev/pip/
RUN pip install setuptools
RUN pip install pytest==6.2.5
RUN pip install pytest-timeout==2.1.0
RUN pip install pytest-rerunfailures==10.2 
RUN pip install flaky==3.7.0

RUN git branch -a
RUN ls -a .git/refs/*/

RUN redefine config set cert_path="" source_branch="pytest_for_teamcity" 
RUN redefine start --collect-only --verbose --pytest

RUN pytest -sv /project/TestRepo
