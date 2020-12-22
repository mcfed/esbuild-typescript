# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.154.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mhart/alpine-node:12.18.3

# ** [Optional] Uncomment this section to install additional packages. **
#
# RUN apt-get update \
#     && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
RUN apk add bash 
RUN apk add git
