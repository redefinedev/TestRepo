FROM python:3.7.10 as test-repo

ARG POETRY_DYNAMIC_VERSIONING_BYPASS="0.0.0"
# This is needed so the var is accessible by the entrypoint
ENV POETRY_DYNAMIC_VERSIONING_BYPASS=$POETRY_DYNAMIC_VERSIONING_BYPASS
ENV REDEFINE_ENVIRONMENT="dev"
ENV REDEFINE_AUTH="6a71bb1b-fdd6-4f1b-94e9-08e64a3ee537::0e6e3a6e-1071-4a95-9467-8c5f3f124606"

RUN mkdir /entrypoint_script_folder

RUN mkdir /project
WORKDIR /project

COPY installer_docker_entrypoint.sh /entrypoint_script_folder/installer_docker_entrypoint.sh
COPY ./* /project/
RUN chmod +x /entrypoint_script_folder/installer_docker_entrypoint.sh


# run installer, need configuration via env or the code itself with config
ENTRYPOINT [ "/entrypoint_script_folder/installer_docker_entrypoint.sh" ]
# set the default source branch argument for the script
CMD ["-s", "feature/pytests_for_teamcity"]

RUN pip install redefine-cli --extra-index-url=https://redefine.dev/pip/

RUN ["redefine", "config", "set", "certpath="""]
RUN ["redefine", "start", "--verbose", "--collect-only", "pytest"]

RUN ["pytest", "-v"]
